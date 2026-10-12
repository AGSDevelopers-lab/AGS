"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerRefresh() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh);
    }

    window.addEventListener("load", refresh);
    const timer = setTimeout(refresh, 600);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(timer);
    };
  }, []);

  return null;
}
