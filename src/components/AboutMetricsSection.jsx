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
      className="relative z-10 w-full bg-white pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 text-gray-900 overflow-hidden"
    >
      <div className="mx-auto max-w-[1560px] 2xl:max-w-[1680px] px-6 sm:px-10 lg:px-16 2xl:px-20">
        {/* Top 2-Column: Photo Left + Content Right - Clean Aspect & Vertical Alignment per Figma Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 lg:items-stretch">
          {/* Left: Typing Laptop Image - Exact Figma specs (593x298) */}
          <div
            ref={imageColRef}
            className="lg:col-span-6 relative w-full max-w-[593px] aspect-[593/298] h-[220px] xs:h-[250px] sm:h-[270px] lg:h-[285px] xl:h-[298px] overflow-hidden rounded-none bg-gray-50 flex items-center shadow-sm"
          >
            <div className="relative w-full h-full overflow-hidden rounded-none">
              <Image
                src="/about-laptop.png"
                alt="Team member working on laptop in modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 593px"
                className="object-cover object-center rounded-none"
                priority
              />

              {/* Video Play Button Overlay matching Figma */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/25 backdrop-blur-sm text-white transition-all duration-300 border border-white/60 shadow-md">
                  <svg className="ml-0.5 h-4 w-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Who We Are & Learn About us - Button strictly aligned from the bottom with the image beside it */}
          <div
            ref={textColRef}
            className="lg:col-span-6 flex flex-col justify-between items-start lg:pl-2 xl:pl-6 pt-0 h-auto lg:h-[285px] xl:h-[298px]"
          >
            <div className="flex flex-col items-start">
              <span className="text-sm sm:text-base font-semibold text-[#545AFF] tracking-wide block">
                Who We Are
              </span>

              {/* "Learn About us" on a single line at a light/regular weight */}
              <h2 className="mt-1.5 sm:mt-2 text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal tracking-tight text-gray-950 leading-[1.15]">
                Learn About us
              </h2>

              {/* Figma Dev Mode: max-width 536px, Manrope 400, line-height 27px */}
              <p className="mt-3 sm:mt-3.5 text-base sm:text-[17px] leading-[26px] text-gray-600 font-normal max-w-[536px]">
                We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
              </p>
            </div>

            {/* Segmented Button: Aligned strictly with the image beside it from the bottom */}
            <div className="mt-6 lg:mt-auto">
              <Link
                href="/about"
                className="inline-flex items-stretch rounded-none transition-transform duration-300 hover:-translate-y-0.5 group shadow-sm whitespace-nowrap"
              >
                {/* White/soft arrow cell with 1px border - perfectly centered SVG arrow */}
                <span className="flex items-center justify-center border border-[#545AFF] bg-[#F5F6FF] px-5 sm:px-6 text-[#545AFF] group-hover:bg-[#545AFF] group-hover:text-white transition-colors duration-300 rounded-none shrink-0">
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[15px] h-[12px] text-current transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 6H13.5M13.5 6L8.5 1M13.5 6L8.5 11"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {/* Blue-to-purple gradient label cell matching Picture 2 */}
                <span className="flex items-center justify-center bg-gradient-to-r from-[#545AFF] to-[#3B0764] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:opacity-95 transition-all duration-300 rounded-none">
                  KNOW MORE
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Metrics with reduced comfortable gap matching Picture 2 */}
        <div className="mt-8 sm:mt-12 lg:mt-14">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                {/* Number: Thin, elegant, light font weight matching Picture 2 reference without bold weight */}
                <div className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[66px] font-light tracking-tight text-gray-950 leading-none">
                  <span className="font-[300] font-light">{metric.targetNum}</span>
                  <span className="text-[#545AFF] font-[300] font-light ml-0.5">
                    {metric.suffix}
                  </span>
                </div>

                {/* Divider Line */}
                <div className="mt-3 sm:mt-4 border-t border-gray-200 w-full" />

                {/* Metric Label - font-medium rather than excessive font-semibold */}
                <span className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-900">
                  {metric.label}
                </span>

                {/* Subtext description */}
                <p className="mt-1.5 text-xs sm:text-sm text-gray-500 font-normal leading-[24px] max-w-[280px]">
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
