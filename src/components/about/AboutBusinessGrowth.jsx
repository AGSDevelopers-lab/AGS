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
      className="pt-10 sm:pt-14 border-t border-black/[0.08]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]">
        {/* Col 1: Appears from bottom to that place */}
        <div
          ref={col1Ref}
          className="flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 will-change-transform"
        >
          <div>
            <div className="flex items-baseline gap-1 text-4xl sm:text-5xl lg:text-[58px] font-light text-[#101015] tracking-tight leading-none">
              <span>250</span>
              <span className="text-[#6040FF] font-normal text-3xl sm:text-4xl lg:text-[44px]">
                +
              </span>
            </div>
            <p className="mt-3.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#101015]">
              PROJECTS COMPLETED
            </p>
          </div>
          <p className="mt-6 sm:mt-10 text-xs sm:text-[13px] text-[#6E7485] leading-relaxed max-w-[240px]">
            Delivering high-impact digital solutions worldwide.
          </p>
        </div>

        {/* Col 2: Same layout alignment — Appears from top to that place */}
        <div
          ref={col2Ref}
          className="flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 will-change-transform"
        >
          <div>
            <div className="flex items-baseline gap-1 text-4xl sm:text-5xl lg:text-[58px] font-light text-[#101015] tracking-tight leading-none">
              <span>150</span>
              <span className="text-[#6040FF] font-normal text-3xl sm:text-4xl lg:text-[44px]">
                +
              </span>
            </div>
            <p className="mt-3.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#101015]">
              AWARDS WINNING
            </p>
          </div>
          <p className="mt-6 sm:mt-10 text-xs sm:text-[13px] text-[#6E7485] leading-relaxed max-w-[240px]">
            Recognized for excellence in design and innovation.
          </p>
        </div>

        {/* Col 3: Appears from bottom to that place */}
        <div
          ref={col3Ref}
          className="flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 will-change-transform"
        >
          <div>
            <div className="flex items-baseline gap-1 text-4xl sm:text-5xl lg:text-[58px] font-light text-[#101015] tracking-tight leading-none">
              <span>98</span>
              <span className="text-[#6040FF] font-normal text-3xl sm:text-4xl lg:text-[44px]">
                %
              </span>
            </div>
            <p className="mt-3.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#101015]">
              CLIENT SATISFACTION
            </p>
          </div>
          <p className="mt-6 sm:mt-10 text-xs sm:text-[13px] text-[#6E7485] leading-relaxed max-w-[240px]">
            Long-term partnerships built on trust and results.
          </p>
        </div>

        {/* Col 4: Same layout alignment — Appears from top to that place */}
        <div
          ref={col4Ref}
          className="flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 will-change-transform"
        >
          <div>
            <div className="flex items-baseline gap-1 text-4xl sm:text-5xl lg:text-[58px] font-light text-[#101015] tracking-tight leading-none">
              <span>03</span>
              <span className="text-[#6040FF] font-normal text-3xl sm:text-4xl lg:text-[44px]">
                +
              </span>
            </div>
            <p className="mt-3.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#101015]">
              YEARS OF EXPERIENCES
            </p>
          </div>
          <p className="mt-6 sm:mt-10 text-xs sm:text-[13px] text-[#6E7485] leading-relaxed max-w-[240px]">
            Continuous growth and technological leadership.
          </p>
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
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(lines, { x: 0, autoAlpha: 1, color: "#000" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(lines, {
          x: (_, el) => (el.dataset.from === "right" ? "60vw" : "-60vw"),
          autoAlpha: 0,
          color: "#c9c9c9",
        });

        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top 75%",
          once: true,
          onEnter: () =>
            gsap.to(lines, {
              x: 0,
              autoAlpha: 1,
              color: "#000",
              duration: 1.6,
              ease: "power3.out",
              stagger: 0.12,
            }),
        });

        if (st.progress > 0) {
          gsap.set(lines, { x: 0, autoAlpha: 1, color: "#000" });
        }
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="relative w-full bg-white overflow-x-clip pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24">
      {/* ── PART A: Exact Same Design & Image Effect as Homepage Digital Excellence ── */}
      <div
        ref={root}
        className="relative flex items-center justify-center overflow-x-clip bg-white pb-16 sm:pb-24 lg:pb-28"
      >
        <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 max-w-full">
          {/* Left: AGS Monogram Outline Logo Watermark (20% Opacity) */}
          <div
            data-line
            data-from="left"
            className="relative shrink-0 w-[12vw] sm:w-[12.5vw] lg:w-[13vw] max-w-[190px] min-w-[55px] aspect-[140/409] mr-[4vw] sm:mr-[5vw] opacity-20"
          >
            <Image
              src="/ags-monogram-tight.png"
              alt="AGS Monogram"
              fill
              sizes="(max-width: 768px) 80px, 190px"
              className="object-contain"
              priority
            />
          </div>

          {/* Right: 3 Kinetic Typography Lines (Manrope 400, 150px, line-height 160px, letter-spacing -0.32px) */}
          <div className="flex flex-col items-start font-sans text-[8.5vw] sm:text-[10vw] lg:text-[150px] font-normal leading-[1.07] lg:leading-[160px] tracking-[-0.32px] text-black">
            {/* Line 1: Fuel Your + Pill Arrow (indented so team image goes under 'F' by ~1.9vw) */}
            <div
              data-line
              data-from="left"
              className="flex items-center gap-[2vw] pl-[10.8vw]"
            >
              <span>Fuel Your</span>
              <span className="flex h-[6vw] sm:h-[6.2vw] w-[12.8vw] sm:w-[13.2vw] items-center justify-center rounded-full border border-[#8B5CF6]/80 shrink-0">
                <svg
                  className="h-[3.2vw] w-[3.2vw] text-[#8B5CF6]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>

            {/* Line 2: Team Image tucked into indent and overlapping under 'F' + Business */}
            <div
              data-line
              data-from="right"
              className="flex items-center gap-[1.6vw]"
            >
              <div className="relative h-[8vw] sm:h-[8.2vw] w-[12.5vw] sm:w-[12.7vw] shrink-0 overflow-hidden">
                <Image
                  src="/figma-exports/Markeo.png"
                  alt="Business Team"
                  fill
                  sizes="(max-width: 768px) 70px, 180px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <span>Business</span>
            </div>

            {/* Line 3: Expansion (indented flush with 'Fuel Your') */}
            <div
              data-line
              data-from="left"
              className="pl-[10.8vw]"
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
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-black/[0.06] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-x-clip">
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
                  className="group inline-flex items-stretch rounded-[2px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
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
