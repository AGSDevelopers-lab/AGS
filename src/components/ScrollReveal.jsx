"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * ScrollReveal Component
 * Wraps child elements and animates them prominently when they enter the viewport using GSAP ScrollTrigger.
 * Plays strictly ONCE on first scroll-down and never repeats.
 *
 * @param {React.ReactNode} children - Elements to animate
 * @param {string} direction - Animation start direction: 'up', 'down', 'left', 'right', 'scale', 'fade'
 * @param {number} distance - Travel distance in pixels (default: 90px for high visibility)
 * @param {number} duration - Animation duration in seconds (default: 1.1s for prominent, smooth motion)
 * @param {string} ease - GSAP easing equation (default: 'power3.out')
 * @param {number} delay - Animation delay in milliseconds (e.g. 100, 200, 300)
 * @param {boolean} triggerOnce - Whether the animation should trigger only once (default: true)
 * @param {string} start - ScrollTrigger viewport trigger position (default: 'top 92%')
 * @param {string} className - Additional CSS class names to apply to wrapper
 */
export default function ScrollReveal({
  children,
  direction = "up",
  distance = 120,
  duration = 1.15,
  ease = "power4.out",
  delay = 0,
  triggerOnce = true,
  start = "top 85%",
  className = "",
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
      const effectiveDistance = isMobile ? Math.min(distance, 60) : distance;

      let fromState = {};

      switch (direction) {
        case "up":
          fromState = { y: effectiveDistance, x: 0, scale: 1 };
          break;
        case "down":
          fromState = { y: -effectiveDistance, x: 0, scale: 1 };
          break;
        case "left":
          fromState = { x: -effectiveDistance, y: 0, scale: 1 };
          break;
        case "right":
          fromState = { x: effectiveDistance, y: 0, scale: 1 };
          break;
        case "scale":
          fromState = { scale: 0.85, x: 0, y: 0 };
          break;
        case "fade":
        default:
          fromState = { x: 0, y: 0, scale: 1 };
          break;
      }

      // Check if user prefers reduced motion
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(containerRef.current, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          autoAlpha: 1,
        });
        return;
      }

      // Set initial hidden and displaced state
      gsap.set(containerRef.current, {
        ...fromState,
        opacity: 0,
        autoAlpha: 0,
      });

      const reveal = (revealDuration = duration, revealDelay = delay / 1000) => {
        if (!containerRef.current) return;
        gsap.to(containerRef.current, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          autoAlpha: 1,
          duration: revealDuration,
          delay: revealDelay,
          ease,
          clearProps: "transform,opacity,visibility",
        });
      };

      // Dedicated ScrollTrigger that runs strictly ONCE on first scroll
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start,
        once: triggerOnce,
        onEnter: () => reveal(),
        onEnterBack: () => reveal(),
        onRefresh: (self) => {
          if (self.progress > 0) reveal(0.3, 0);
        },
      });

      // Immediate reveal fallback if element is already scrolled past or in view on page mount
      const rect = containerRef.current.getBoundingClientRect();
      const inView =
        rect.top < (typeof window !== "undefined" ? window.innerHeight * 0.95 : 800) &&
        rect.bottom > 0;
      if (st.progress > 0 || inView) {
        reveal(0.3, 0);
      }
    },
    {
      scope: containerRef,
      dependencies: [direction, distance, duration, ease, delay, triggerOnce, start],
    }
  );

  return (
    <div ref={containerRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
