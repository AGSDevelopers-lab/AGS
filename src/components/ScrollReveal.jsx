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
 * Wraps child elements and animates them when they enter the viewport using GSAP ScrollTrigger.
 *
 * @param {React.ReactNode} children - Elements to animate
 * @param {string} direction - Animation start direction: 'up', 'down', 'left', 'right', 'scale', 'fade'
 * @param {number} delay - Animation delay in milliseconds (e.g. 100, 200, 300)
 * @param {number} threshold - Intersection observer threshold equivalent (not directly used by GSAP, kept for compatibility)
 * @param {boolean} triggerOnce - Whether the animation should trigger only once or repeat on scroll
 * @param {string} className - Additional CSS class names to apply to wrapper
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  triggerOnce = true,
  className = "",
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      let fromState = { opacity: 0, autoAlpha: 0 };

      switch (direction) {
        case "up":
          fromState.y = 50;
          break;
        case "down":
          fromState.y = -50;
          break;
        case "left":
          fromState.x = -50;
          break;
        case "right":
          fromState.x = 50;
          break;
        case "scale":
          fromState.scale = 0.8;
          break;
        case "fade":
        default:
          break; // just autoAlpha
      }

      gsap.from(containerRef.current, {
        ...fromState,
        duration: 0.8,
        delay: delay / 1000,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Equivalent to rootMargin bottom -15%
          once: triggerOnce,
          toggleActions: triggerOnce
            ? "play none none none"
            : "play reverse play reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
