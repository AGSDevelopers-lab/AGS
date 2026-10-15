"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const metrics = [
  {
    targetNum: 50,
    suffix: "+",
    label: "PROJECTS COMPLETED",
    description: "Enterprise and digital transformation solutions delivered worldwide.",
  },
  {
    targetNum: 250,
    suffix: "+",
    label: "SATISFIED CLIENT",
    description: "Trusted by forward-thinking businesses and market leaders.",
  },
  {
    targetNum: 98,
    suffix: "%",
    label: "CLIENT SATISFACTION",
    description: "Consistent delivery of high quality, scale, and customer delight.",
  },
  {
    targetNum: 30,
    suffix: "+",
    label: "YEARS OF EXPERIENCES",
    description: "Deep engineering, cloud infrastructure, and creative expertise.",
  },
];

export default function AboutMetricsSection() {
  const sectionRef = useRef(null);
  const imageColRef = useRef(null);
  const textColRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([imageColRef.current, textColRef.current], {
          x: 0,
          autoAlpha: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? "20vw" : "35vw";

        gsap.set(imageColRef.current, {
          x: `-${dist}`,
          autoAlpha: 0,
        });

        gsap.set(textColRef.current, {
          x: dist,
          autoAlpha: 0,
        });

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(imageColRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.4,
              ease: "power3.out",
            });
            gsap.to(textColRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.4,
              ease: "power3.out",
            });
          },
        });

        if (st.progress > 0) {
          gsap.set([imageColRef.current, textColRef.current], {
            x: 0,
            autoAlpha: 1,
          });
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full bg-white pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 text-gray-900 overflow-x-clip"
    >
      <div className="mx-auto max-w-[1560px] 2xl:max-w-[1680px] px-6 sm:px-10 lg:px-16 2xl:px-20">
        {/* Top 2-Column: Photo Left + Content Right - Sharp Rectangular Image, Top/Bottom Aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-18 lg:items-stretch overflow-x-clip">
          {/* Left: Typing Laptop Image - Sharp Rectangular Shape (rounded-none, not square) */}
          <div
            ref={imageColRef}
            className="lg:col-span-6 relative w-full overflow-hidden rounded-none bg-gray-50"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-none">
              <Image
                src="/about-laptop.png"
                alt="Team member working on laptop in modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover object-center rounded-none"
                priority
              />

              {/* Video Play Button Overlay matching Picture 3 (translucent white circle) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm text-white transition-all duration-300 border border-white/70 shadow-md">
                  <svg className="ml-1 h-5 w-5 sm:h-6 sm:w-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Who We Are & Learn About us - Top starts with image, button ends with image */}
          <div
            ref={textColRef}
            className="lg:col-span-6 flex flex-col justify-between items-start lg:pl-4 xl:pl-8 py-1 sm:py-2 gap-6 lg:gap-0"
          >
            <div>
              <span className="text-sm sm:text-base font-semibold text-[#545AFF] tracking-wide block">
                Who We Are
              </span>

              {/* "Learn About us" on a single line at a light/regular weight */}
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-normal tracking-tight text-gray-950 leading-[1.15]">
                Learn About us
              </h2>

              {/* Figma Dev Mode: max-width 536px, Manrope 400, line-height 27px */}
              <p className="mt-3.5 sm:mt-4 text-base sm:text-[17px] leading-[27px] text-gray-600 font-normal max-w-[536px]">
                We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
              </p>
            </div>

            {/* Segmented Button: ends exactly in the same line where the image ends, just a bit above */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-stretch rounded-none transition-transform duration-300 hover:-translate-y-0.5 group shadow-sm"
              >
                {/* White/soft arrow cell with 1px border */}
                <span className="flex items-center justify-center border border-[#545AFF] bg-[#F5F6FF] px-5 sm:px-6 py-3 sm:py-3.5 text-[#545AFF] text-lg font-light group-hover:bg-[#545AFF] group-hover:text-white transition-colors duration-300 rounded-none">
                  →
                </span>
                {/* Blue-to-purple gradient label cell matching Picture 3 */}
                <span className="flex items-center justify-center bg-gradient-to-r from-[#545AFF] to-[#3B0764] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:opacity-95 transition-all duration-300 rounded-none">
                  KNOW MORE
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Metrics with reduced comfortable gap matching Picture 3 */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                {/* Number with Up Arrow */}
                <div className="flex items-start gap-2.5">
                  <span className="text-2xl sm:text-3xl font-light text-gray-400 mt-1 sm:mt-2">
                    ↑
                  </span>
                  <div className="text-5xl sm:text-6xl lg:text-[70px] font-bold tracking-tight text-gray-950 leading-none">
                    <span>{metric.targetNum}</span>
                    <span className="text-[#545AFF] font-semibold ml-1">
                      {metric.suffix}
                    </span>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="mt-4 sm:mt-5 border-t border-gray-200 w-full" />

                {/* Metric Label */}
                <span className="mt-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-900">
                  {metric.label}
                </span>

                {/* Subtext description */}
                <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-[25.6px] max-w-[280px]">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
