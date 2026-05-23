"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Wraps child elements and animates them when they enter the viewport using IntersectionObserver.
 *
 * @param {React.ReactNode} children - Elements to animate
 * @param {string} direction - Animation start direction: 'up', 'down', 'left', 'right', 'scale', 'fade'
 * @param {number} delay - Animation delay in milliseconds (e.g. 100, 200, 300)
 * @param {number} threshold - Intersection observer threshold (0.0 to 1.0)
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
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    // Check if browser supports IntersectionObserver
    if (!window.IntersectionObserver) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIsRevealed(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before it hits view bottom
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef && !isRevealed) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, isRevealed]);

  const directionClass = `scroll-reveal-${direction}`;
  const revealedClass = isRevealed ? "revealed" : "";
  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={elementRef}
      style={style}
      className={`scroll-reveal ${directionClass} ${revealedClass} ${className}`}
    >
      {children}
    </div>
  );
}
