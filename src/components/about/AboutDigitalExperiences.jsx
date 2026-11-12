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
      className="relative z-10 w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center overflow-hidden">
          {/* Left Column: Stacked Photography with Floating Query Card (Matching Picture3 & 4) */}
          <div ref={imageColRef} className="relative w-full lg:col-span-6">
            {/* Upper Image with Query Card */}
            <div className="relative w-full aspect-[16/10] rounded-[2px] overflow-hidden shadow-sm">
              <Image
                src="/ags about page/have any query .png"
                alt="Woman with Tablet Working at AGS"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating Contact/Query Card overlapping lower-right edge (Compact height & gradient matching Picture3) */}
            <div className="relative -mt-8 sm:-mt-10 mr-0 sm:mr-2 ml-auto z-20 w-fit max-w-[92%]">
              <a
                href="tel:+919038130595"
                className="group flex items-center gap-3.5 bg-gradient-to-r from-[#4361EE] to-[#7038FF] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-[3px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
              >
                {/* White Circle with Phone Icon */}
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-[#4361EE] shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                {/* Label & Phone Number */}
                <div className="flex flex-col text-left">
                  <span className="text-[11px] sm:text-xs font-normal tracking-wide text-white/90">
                    Have Any Query?
                  </span>
                  <span className="text-sm sm:text-[15px] font-bold tracking-wider text-white">
                    +91 90381 30595
                  </span>
                </div>
              </a>
            </div>

            {/* Lower Image */}
            <div className="mt-6 sm:mt-8 relative w-full aspect-[604/459] rounded-[2px] overflow-hidden shadow-sm">
              <Image
                src="/ags about page/building digital experience.png"
                alt="Reviewing Analytics and Charts at Desk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Heading, Subtitle & 4 Features (Aligned with Left Column matching Picture 3 & 4) */}
          <div ref={textColRef} className="w-full lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#101015] leading-[1.18]">
              Building Digital Experiences
              <br />
              That <span className="text-[#8B5CF6]">Drive Results</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] text-[#555A68] leading-[1.65] font-normal max-w-[560px]">
              At AGS, we bring design, technology, and strategy together to create
              meaningful digital experiences for modern businesses.
            </p>

            {/* 4 Feature Points with Dividers — Exact Line-height & Spacing from Picture 4 */}
            <div className="mt-8 sm:mt-10 border-t border-black/[0.08]">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="py-5 sm:py-5.5 border-b border-black/[0.08] flex items-start gap-4"
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

                  {/* Text with proper line-height */}
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
