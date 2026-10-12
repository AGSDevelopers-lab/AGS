"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SlideIn({
  from = "left",
  distance = 40,
  start = "top 85%",
  tint = false,
  className = "",
  children,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(ref.current, {
          x: 0,
          autoAlpha: 1,
          ...(tint && { color: "#000" }),
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const dir = from === "left" ? -1 : 1;
        gsap.set(ref.current, {
          x: `${dir * distance}vw`,
          autoAlpha: 0,
          ...(tint && { color: "#c9c9c9" }),
        });

        const st = ScrollTrigger.create({
          trigger: ref.current,
          start: start || "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(ref.current, {
              x: 0,
              autoAlpha: 1,
              ...(tint && { color: "#000" }),
              duration: 1.2,
              ease: "power3.out",
            }),
        });

        if (st.progress > 0) {
          gsap.set(ref.current, {
            x: 0,
            autoAlpha: 1,
            ...(tint && { color: "#000" }),
          });
        }
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default SlideIn;
