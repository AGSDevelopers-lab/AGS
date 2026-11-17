"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useCtaForm } from "@/components/CtaFormProvider";
import SlideIn from "@/components/SlideIn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function AlternatingMetricsRow() {
  const containerRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const upCols = [col1Ref.current, col3Ref.current].filter(Boolean);
    const downCols = [col2Ref.current, col4Ref.current].filter(Boolean);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([upCols, downCols], { y: 0, autoAlpha: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // upCols appear from bottom to that place (start below at y: 120)
      // downCols appear from top to that place (start above at y: -120)
      gsap.set(upCols, { y: 120, autoAlpha: 0 });
      gsap.set(downCols, { y: -120, autoAlpha: 0 });

      const st = ScrollTrigger.create({
        trigger: container,
        start: "top 65%",
        once: true,
        onEnter: () => {
          gsap.to(upCols, {
            y: 0,
            autoAlpha: 1,
            duration: 1.3,
            ease: "power3.out",
          });

          gsap.to(downCols, {
            y: 0,
            autoAlpha: 1,
            duration: 1.3,
            ease: "power3.out",
          });
        },
      });

      if (st.progress > 0) {
        gsap.set([upCols, downCols], { y: 0, autoAlpha: 1 });
      }
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pt-6 sm:pt-8 lg:pt-10 border-t border-black/[0.08]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]">
        {/* Col 1: Number + Label on top, Description on bottom */}
        <div
          ref={col1Ref}
          className="flex flex-col justify-start lg:justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-7 will-change-transform min-h-0 lg:min-h-[145px] xl:min-h-[155px]"
        >
          <div>
            <div className="flex items-baseline gap-1 text-3xl sm:text-4xl lg:text-[52px] xl:text-[56px] font-light text-[#101015] tracking-tight leading-none">
              <span>250</span>
              <span className="text-[#8B5CF6] font-normal text-2xl sm:text-3xl lg:text-[40px]">
                +
              </span>
            </div>
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#101015]">
              PROJECTS COMPLETED
            </p>
          </div>
          <p className="mt-2 sm:mt-2.5 lg:mt-5 text-xs sm:text-[13px] text-[#6E7485] leading-relaxed max-w-[260px]">
            Delivering high-impact digital solutions worldwide.
          </p>
        </div>

        {/* Col 2: Number + Label on top & Description below on mobile, Alternating on desktop */}
        <div
          ref={col2Ref}
          className="flex flex-col justify-start lg:justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-7 will-change-transform min-h-0 lg:min-h-[145px] xl:min-h-[155px]"
        >
          {/* Description: below on mobile (order-2 lg:order-1), top on desktop (lg:order-1) */}
          <p className="order-2 lg:order-1 mt-2 sm:mt-2.5 lg:mt-0 text-xs sm:text-[13px] text-[#6E7485] leading-relaxed max-w-[260px]">
            Recognized for excellence in design and innovation.
          </p>

          {/* Metric: top on mobile (order-1 lg:order-2), bottom on desktop (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:mt-5">
            <div className="flex items-baseline gap-1 text-3xl sm:text-4xl lg:text-[52px] xl:text-[56px] font-light text-[#101015] tracking-tight leading-none">
              <span>150</span>
              <span className="text-[#8B5CF6] font-normal text-2xl sm:text-3xl lg:text-[40px]">
                +
              </span>
            </div>
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#101015]">
              AWARDS WINNING
            </p>
          </div>
        </div>

        {/* Col 3: Number + Label on top, Description on bottom */}
        <div
          ref={col3Ref}
          className="flex flex-col justify-start lg:justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-7 will-change-transform min-h-0 lg:min-h-[145px] xl:min-h-[155px]"
        >
          <div>
            <div className="flex items-baseline gap-1 text-3xl sm:text-4xl lg:text-[52px] xl:text-[56px] font-light text-[#101015] tracking-tight leading-none">
              <span>98</span>
              <span className="text-[#8B5CF6] font-normal text-2xl sm:text-3xl lg:text-[40px]">
                %
              </span>
            </div>
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#101015]">
              CLIENT SATISFACTION
            </p>
          </div>
          <p className="mt-2 sm:mt-2.5 lg:mt-5 text-xs sm:text-[13px] text-[#6E7485] leading-relaxed max-w-[260px]">
            Long-term partnerships built on trust and results.
          </p>
        </div>

        {/* Col 4: Number + Label on top & Description below on mobile, Alternating on desktop */}
        <div
          ref={col4Ref}
          className="flex flex-col justify-start lg:justify-between py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-7 will-change-transform min-h-0 lg:min-h-[145px] xl:min-h-[155px]"
        >
          {/* Description: below on mobile (order-2 lg:order-1), top on desktop (lg:order-1) */}
          <p className="order-2 lg:order-1 mt-2 sm:mt-2.5 lg:mt-0 text-xs sm:text-[13px] text-[#6E7485] leading-relaxed max-w-[260px]">
            Continuous growth and technological leadership.
          </p>

          {/* Metric: top on mobile (order-1 lg:order-2), bottom on desktop (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:mt-5">
            <div className="flex items-baseline gap-1 text-3xl sm:text-4xl lg:text-[52px] xl:text-[56px] font-light text-[#101015] tracking-tight leading-none">
              <span>03</span>
              <span className="text-[#8B5CF6] font-normal text-2xl sm:text-3xl lg:text-[40px]">
                +
              </span>
            </div>
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#101015]">
              YEARS OF EXPERIENCES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutBusinessGrowth() {
  const { openForm } = useCtaForm();
  const root = useRef(null);

  useGSAP(
    () => {
      const lines = gsap.utils.toArray("[data-line]");
      const logo = root.current?.querySelector("[data-logo]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(lines, { x: 0, autoAlpha: 1, color: "#000" });
        if (logo) gsap.set(logo, { autoAlpha: 0.9, x: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? 35 : 70;

        gsap.set(lines, {
          x: (_, el) => (el.dataset.from === "right" ? dist : -dist),
          autoAlpha: 0,
          color: "#9ca3af",
        });

        if (logo) {
          gsap.set(logo, { autoAlpha: 0.3, x: -20 });
        }

        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(lines, {
              x: 0,
              autoAlpha: 1,
              color: "#000",
              duration: 1.2,
              ease: "power3.out",
              stagger: 0.1,
            });
            if (logo) {
              gsap.to(logo, {
                x: 0,
                autoAlpha: 0.9,
                duration: 1.4,
                ease: "power2.out",
              });
            }
          },
        });

        if (st.progress > 0) {
          gsap.set(lines, { x: 0, autoAlpha: 1, color: "#000" });
          if (logo) gsap.set(logo, { autoAlpha: 0.9, x: 0 });
        }
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="relative w-full bg-white overflow-hidden pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20">
      {/* ── PART A: Centered Kinetic Typography & Monogram matching Picture7.png ── */}
      <div
        ref={root}
        className="relative flex items-center justify-center overflow-x-clip bg-white py-6 sm:py-10 lg:py-14"
      >
        <div className="relative z-10 mx-auto flex items-center justify-center px-4 sm:px-6 md:px-8 max-w-[1440px]">
          {/* Left: Outline AGS Monogram Watermark on the side matching design */}
          <div
            data-logo
            className="relative shrink-0 w-[36px] xs:w-[46px] sm:w-[65px] md:w-[85px] lg:w-[110px] xl:w-[125px] aspect-[140/409] select-none mr-3 xs:mr-4 sm:mr-7 md:mr-10 lg:mr-14 xl:mr-16"
          >
            <Image
              src="/ags-monogram-hd.png"
              alt="AGS Monogram"
              fill
              sizes="(max-width: 640px) 46px, (max-width: 1024px) 85px, 125px"
              className="object-contain object-center opacity-90"
              priority
            />
          </div>

          {/* Right: 3-Line Kinetic Typography */}
          <div className="flex flex-col items-start font-sans text-[30px] xs:text-[38px] sm:text-[54px] md:text-[72px] lg:text-[92px] xl:text-[104px] font-normal leading-[1.08] tracking-[-0.03em] text-black">
            {/* Line 1: Fuel Your + Pill Arrow Button */}
            <div
              data-line
              data-from="left"
              className="flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-5"
            >
              <span>Fuel Your</span>
              <span className="flex h-[24px] xs:h-[28px] sm:h-[36px] md:h-[45px] lg:h-[54px] xl:h-[62px] w-[44px] xs:w-[54px] sm:w-[70px] md:w-[88px] lg:w-[110px] xl:w-[126px] items-center justify-center rounded-full border border-[#8B5CF6]/70 shrink-0">
                <svg
                  className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#8B5CF6]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </div>

            {/* Line 2: Team Image (strictly rectangular, rounded-none) tucked cleanly beside Business */}
            <div
              data-line
              data-from="right"
              className="flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-5"
            >
              <div className="relative shrink-0 overflow-hidden rounded-none shadow-none w-[42px] xs:w-[54px] sm:w-[74px] md:w-[98px] lg:w-[125px] xl:w-[145px] h-[27px] xs:h-[35px] sm:h-[48px] md:h-[63px] lg:h-[80px] xl:h-[94px]">
                <Image
                  src="/figma-exports/Markeo.png"
                  alt="Business Team"
                  fill
                  sizes="(max-width: 640px) 54px, (max-width: 1024px) 98px, 145px"
                  className="object-cover object-center rounded-none"
                  priority
                />
              </div>
              <span>Business</span>
            </div>

            {/* Line 3: Expansion (Indented slightly so it aligns under Business) */}
            <div
              data-line
              data-from="left"
              className="pl-[10px] sm:pl-[16px] md:pl-[20px] lg:pl-[24px]"
            >
              Expansion
            </div>
          </div>
        </div>
      </div>

      {/* ── PART B: 4-Column Alternating Staggered Metrics Row (Matching Video Reference) ── */}
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        <AlternatingMetricsRow />

        {/* Lower: Supporting Business-Growth Statement (2-Column) */}
        <div className="mt-10 sm:mt-14 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 border-t border-black/[0.06] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden">
          {/* Left Heading (Slides in from Left) */}
          <SlideIn from="left" distance={30}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal tracking-tight text-[#101015] leading-[1.2]">
              Powering Business Growth
              <span className="block mt-1 bg-gradient-to-r from-[#6040FF] via-[#7B5CFF] to-[#9B6BFF] bg-clip-text text-transparent">
                With Smart Digital Solutions
              </span>
            </h3>
          </SlideIn>

          {/* Right Copy + CTA (Slides in from Right) */}
          <SlideIn from="right" distance={30}>
            <div className="max-w-[540px]">
              <p className="text-sm sm:text-[15px] text-[#555A68] leading-relaxed font-normal">
                We combine technology, creativity, and business strategy to create digital
                solutions that help businesses grow, connect with customers, and move forward
                with confidence.
              </p>

              {/* Distinctive Button */}
              <div className="mt-7 sm:mt-8">
                <button
                  type="button"
                  onClick={() => openForm()}
                  className="group inline-flex items-stretch rounded-none overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="w-10 sm:w-11 bg-[#F4EEFF] flex items-center justify-center border-r border-[#6040FF]/25 text-[#6040FF] transition-colors group-hover:bg-[#ECE2FF]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="bg-gradient-to-r from-[#6040FF] to-[#5900B8] px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-white flex items-center">
                    <span>GET STARTED</span>
                  </div>
                </button>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
