"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const features = [
  {
    title: "Understanding Your Business",
    description:
      "We begin by understanding your goals, audience, challenges, and requirements.",
  },
  {
    title: "Creating With Purpose",
    description:
      "Our team combines UI/UX, technology, and creative thinking to develop solutions that are both useful and impactful.",
  },
  {
    title: "Built To Grow With You",
    description:
      "From digital products to marketing solutions, we build experiences that support long-term business growth.",
  },
  {
    title: "Delivering With Excellence",
    description:
      "We focus on quality, transparency, and reliable delivery at every stage of the project.",
  },
];

export default function AboutDigitalExperiences() {
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
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(leftColRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
            gsap.to(rightColRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
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
      className="relative z-10 w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        {/* CSS Grid with items-stretch ensuring both columns match heights perfectly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* ── LEFT COLUMN: Precision 2-Photo Stack + Overlapping 'Have Any Query' Card ── */}
          <div ref={leftColRef} className="w-full lg:col-span-6 flex flex-col justify-between">
            
            {/* Top Photo + Overlapping Card Container */}
            <div className="relative w-full">
              {/* Upper Image (72% width flush left, matching Figma coordinates) */}
              <div className="relative w-[72%] sm:w-[72%] aspect-[1.46/1] rounded-[2px] overflow-hidden shadow-sm bg-gray-100">
                <Image
                  src="/ags about page/have any query .png"
                  alt="Woman working on tablet at marble desk"
                  fill
                  sizes="(max-width: 1024px) 72vw, 440px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Overlapping 'Have Any Query?' Card (Positioned absolutely in bottom right of upper block, overlapping without pushing down lower photo) */}
              <div className="absolute bottom-1 sm:bottom-2 right-0 z-20 w-[58%] sm:w-[54%] max-w-[280px]">
                <a
                  href="tel:+919038130595"
                  title="Have Any Query? Call +91 90381 30595"
                  className="group flex items-center gap-3.5 bg-gradient-to-r from-[#4361EE] to-[#7038FF] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-[4px] shadow-xl shadow-[#4361EE]/25 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* White Circle with Phone Icon */}
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-[#4361EE] shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>

                  {/* Label & Phone Number */}
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[12px] sm:text-[13px] font-normal tracking-wide text-white/90">
                      Have Any Query?
                    </span>
                    <span className="mt-1 text-[15px] sm:text-[16px] font-bold tracking-wider text-white">
                      +91 90381 30595
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Lower Image (Calibrated aspect ratio so bottom edge aligns flush with bottom of right column) */}
            <div className="mt-6 sm:mt-8 relative w-full aspect-[604/415] rounded-[2px] overflow-hidden shadow-sm bg-gray-100">
              <Image
                src="/ags about page/building digital experience.png"
                alt="Reviewing Analytics and Charts at Desk"
                fill
                sizes="(max-width: 1024px) 100vw, 604px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN: Heading, Subtitle & 4 Features (Flex-stretched for exact flush bottom) ── */}
          <div ref={rightColRef} className="w-full lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#101015] leading-[1.18]">
                Building Digital Experiences
                <br />
                That <span className="text-[#8B5CF6]">Drive Results</span>
              </h2>

              <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] text-[#555A68] leading-[1.65] font-normal max-w-[560px]">
                At AGS, we bring design, technology, and strategy together to
                create meaningful digital experiences for modern businesses.
              </p>
            </div>

            {/* 4 Feature Items with Dividers (Distributed evenly so bottom border matches bottom of left photo) */}
            <div className="mt-8 sm:mt-10 border-t border-black/[0.08] flex-1 flex flex-col justify-between">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex-1 flex items-start gap-4 py-5 sm:py-5.5 lg:py-6 border-b border-black/[0.08]"
                >
                  {/* Purple Circle with White Checkmark */}
                  <div className="mt-0.5 flex h-5.5 w-5.5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white shadow-xs">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="w-3.5 h-3.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-[15px] sm:text-[16.5px] font-semibold text-[#101015] leading-snug">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#656B7A] leading-[1.65]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
