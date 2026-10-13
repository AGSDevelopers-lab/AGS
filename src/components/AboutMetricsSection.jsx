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
      className="relative z-10 w-full bg-white pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 text-gray-900 overflow-x-clip"
    >
      <div className="mx-auto max-w-[1560px] 2xl:max-w-[1680px] px-6 sm:px-10 lg:px-16 2xl:px-20">
        {/* Top 2-Column: Photo Left (slides from left to center) + Content Right (slides from right to center) */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24 overflow-x-clip">
          {/* Left: Typing Laptop Image sliding in from left to center */}
          <div
            ref={imageColRef}
            className="lg:col-span-7 relative w-full overflow-hidden rounded-none bg-gray-50"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] lg:h-[480px] xl:h-[540px] 2xl:h-[600px] overflow-hidden rounded-none">
              <Image
                src="/about-laptop.png"
                alt="Team member working on laptop in modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 920px"
                className="object-cover object-center rounded-none"
                priority
              />

              {/* Video Play Button Overlay without backdrop-blur */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-black/50 text-white transition-all duration-300 border border-white/40">
                  <svg className="ml-1.5 h-8 w-8 sm:h-9 sm:w-9 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Who We Are & Learn About us sliding in from right to center */}
          <div
            ref={textColRef}
            className="lg:col-span-5 flex flex-col items-start lg:pl-4 xl:pl-8"
          >
            <span className="text-base sm:text-lg lg:text-xl font-semibold text-[#4F46E5] tracking-wide">
              Who We Are
            </span>

            {/* "Learn About us" on a single line at a light/regular weight */}
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-[64px] xl:text-[72px] font-normal tracking-tight text-gray-950 leading-[1.08] whitespace-nowrap">
              Learn About us
            </h2>

            <p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 font-normal max-w-2xl">
              We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
            </p>

            {/* Segmented Button: sharp corners, white arrow cell (1px violet border), violet gradient label cell */}
            <Link
              href="/about"
              className="mt-10 sm:mt-12 inline-flex items-stretch rounded-none transition-transform duration-300 hover:-translate-y-0.5 group"
            >
              {/* White arrow cell with 1px violet border */}
              <span className="flex items-center justify-center border border-[#7C3AED] bg-white px-5 sm:px-6 py-3.5 sm:py-4 text-[#7C3AED] text-lg sm:text-xl font-light group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-300 rounded-none">
                →
              </span>
              {/* Violet gradient label cell */}
              <span className="flex items-center justify-center bg-gradient-to-r from-[#5B4DF0] via-[#5041EE] to-[#4338CA] px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white group-hover:from-[#4338CA] group-hover:to-[#3730A3] transition-all duration-300 rounded-none">
                KNOW MORE
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Row: 4 Metrics */}
        <div className="mt-24 sm:mt-32 lg:mt-36">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                {/* Number with Up Arrow */}
                <div className="flex items-start gap-3">
                  <span className="text-2xl sm:text-3xl font-light text-gray-400 mt-1 sm:mt-2">
                    ↑
                  </span>
                  <div className="text-6xl sm:text-7xl lg:text-[80px] xl:text-[88px] font-bold tracking-tight text-gray-950 leading-none">
                    <span>{metric.targetNum}</span>
                    <span className="text-[#6366F1] font-semibold ml-1">
                      {metric.suffix}
                    </span>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="mt-6 border-t-2 border-gray-200/90 w-full" />

                {/* Metric Label */}
                <span className="mt-5 text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900">
                  {metric.label}
                </span>

                {/* Subtext description */}
                <p className="mt-2 text-sm sm:text-base text-gray-500 leading-relaxed max-w-[280px]">
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
