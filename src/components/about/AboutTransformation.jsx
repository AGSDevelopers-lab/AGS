"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const transformationRows = [
  {
    number: "01",
    title: "Builds Digital Presence",
    subtitle: "Custom web development and scalable architectures that attract and retain modern customers.",
  },
  {
    number: "02",
    title: "Drives Business Growth",
    subtitle: "Performance-oriented engineering and conversion-optimized digital platforms.",
  },
  {
    number: "03",
    title: "Strengthens Brand Value",
    subtitle: "Intuitive UI/UX and impactful visual identities that set your brand apart.",
  },
  {
    number: "04",
    title: "Creates Lasting Impact",
    subtitle: "Sustainable technology foundations designed to scale seamlessly with your enterprise.",
  },
];

export default function AboutTransformation() {
  const [activeRow, setActiveRow] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([leftColRef.current, rightColRef.current], {
          x: 0,
          autoAlpha: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? "20vw" : "35vw";

        gsap.set(leftColRef.current, {
          x: `-${dist}`,
          autoAlpha: 0,
        });

        gsap.set(rightColRef.current, {
          x: dist,
          autoAlpha: 0,
        });

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(leftColRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.2,
              ease: "power3.out",
            });
            gsap.to(rightColRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.2,
              ease: "power3.out",
            });
          },
        });

        if (st.progress > 0) {
          gsap.set([leftColRef.current, rightColRef.current], {
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
      className="relative z-10 w-full bg-[#FFFFFF] pt-14 sm:pt-18 lg:pt-20 pb-2 sm:pb-4 lg:pb-4 overflow-x-clip border-t border-black/[0.06]"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 lg:items-stretch items-center overflow-x-clip">
          {/* Left Column: Heading, Paragraph & Presentation Action (Slides in from Left) */}
          <div ref={leftColRef} className="lg:col-span-6 lg:pr-12 xl:pr-16 flex flex-col justify-center py-2 sm:py-4">
            <div>
              {/* Heading matching user reference image */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-normal tracking-tight text-[#101015] leading-[1.15]">
                Transforming Ideas
                <span className="block mt-1 text-[#101015]">
                  Into <span className="text-[#6040FF]">Digital Solutions</span>
                </span>
                <span className="block mt-1 text-[#101015]">
                  That Deliver
                </span>
              </h2>

              {/* Supporting Paragraph */}
              <p className="mt-6 sm:mt-8 text-sm sm:text-[15px] text-[#555A68] leading-relaxed max-w-[480px]">
                We combine strategy, creativity, and technology to build digital experiences
                that help businesses grow, connect with customers, and achieve measurable
                results.
              </p>

              {/* Watch Presentation Button matching user reference image */}
              <div className="mt-10 sm:mt-12">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-4 sm:gap-5 cursor-pointer focus:outline-hidden"
                >
                  {/* Circular Button with Thin Gray Border & Purple Play Triangle */}
                  <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-gray-300/80 bg-white shadow-xs transition-all duration-300 group-hover:border-[#7B5CFF] group-hover:scale-105 group-hover:shadow-md">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5 ml-0.5 text-[#7B5CFF]"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>

                  {/* Uppercase Letter-spaced Violet Label */}
                  <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7B5CFF] transition-colors group-hover:text-[#5900B8]">
                    WATCH PRESENTATION
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered List matching user reference image with vertical divider in bluish shade (Slides in from Right) */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 lg:pl-12 xl:pl-16 lg:border-l lg:border-[#CCD5FE] flex flex-col justify-center py-2 sm:py-4"
          >
            <div className="flex flex-col gap-2 sm:gap-3 w-full">
              {transformationRows.map((row, index) => {
                const isActive = index === activeRow;

                return (
                  <button
                    key={row.number}
                    type="button"
                    onClick={() => setActiveRow(index)}
                    onMouseEnter={() => setActiveRow(index)}
                    className={`w-full text-left transition-all duration-300 rounded-[2px] py-5 sm:py-6 px-6 sm:px-10 flex items-center cursor-pointer focus:outline-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-[#3B46F1] via-[#5035F5] to-[#7B1BD7] text-white shadow-md"
                        : "bg-transparent hover:bg-gray-50/80 text-[#9CA3AF]"
                    }`}
                  >
                    {/* Number Column */}
                    <span
                      className={`text-base sm:text-lg lg:text-[20px] font-normal w-14 sm:w-18 shrink-0 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#9CA3AF]"
                      }`}
                    >
                      {row.number}
                    </span>

                    {/* Title Column */}
                    <span
                      className={`text-base sm:text-lg lg:text-[19px] font-normal tracking-normal flex-1 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#9CA3AF] hover:text-[#4B5563]"
                      }`}
                    >
                      {row.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Presentation Video Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[4px] bg-[#10111D] border border-white/10 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white">
                  AGS Corporate Presentation
                </h3>
                <p className="text-xs sm:text-sm text-white/60">
                  Engineering transformative digital experiences for enterprise growth.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video Presentation Canvas */}
            <div className="relative mt-5 aspect-video w-full rounded bg-black flex items-center justify-center overflow-hidden border border-white/5">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster="/ags about page/digital solutions.png"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
