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
      className="relative z-10 w-full bg-[#FFFFFF] py-20 sm:py-28 overflow-x-clip"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start overflow-x-clip">
          {/* Left Column: Stacked Photography with Floating Query Card (Slides in from Left) */}
          <div ref={imageColRef} className="relative w-full max-w-[580px] mx-auto lg:mx-0">
            {/* Upper Image with Query Card */}
            <div className="relative w-full aspect-[1.5/1] rounded-[2px] overflow-hidden shadow-sm">
              <Image
                src="/ags about page/have any query .png"
                alt="Woman with Tablet Working at AGS"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Contact/Query Card overlapping lower-right edge */}
            <div className="relative -mt-6 sm:-mt-8 ml-auto mr-4 sm:mr-6 z-20 w-fit max-w-[90%]">
              <a
                href="tel:+919038130595"
                className="group flex items-center gap-3.5 bg-gradient-to-r from-[#6040FF] to-[#5900B8] text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-[3px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Phone Icon in circle */}
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20 text-white shrink-0 group-hover:bg-white group-hover:text-[#6040FF] transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                {/* Label & Phone Number */}
                <div className="flex flex-col text-left">
                  <span className="text-[11px] sm:text-xs font-medium tracking-wide text-white/85">
                    Have Any Query?
                  </span>
                  <span className="text-sm sm:text-[15px] font-bold tracking-wider text-white">
                    +91 90381 30595
                  </span>
                </div>
              </a>
            </div>

            {/* Lower Image */}
            <div className="mt-8 sm:mt-10 relative w-full aspect-[1.45/1] rounded-[2px] overflow-hidden shadow-sm">
              <Image
                src="/ags about page/building digital experience.png"
                alt="Reviewing Analytics and Charts at Desk"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Heading, Subtitle & 4 Features (Slides in from Right) */}
          <div ref={textColRef} className="w-full max-w-[560px]">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#101015] leading-[1.15]">
              Building Digital Experiences
              <span className="block mt-1 text-[#6040FF]">That Drive Results</span>
            </h2>

            <p className="mt-5 text-sm sm:text-[15px] text-[#555A68] leading-relaxed font-normal">
              At AGS, we bring design, technology, and strategy together to create
              meaningful digital experiences for modern businesses.
            </p>

            {/* 4 Feature Points with Dividers */}
            <div className="mt-8 sm:mt-10 divide-y divide-black/[0.08] border-t border-black/[0.08]">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="py-5 sm:py-6 flex items-start gap-3.5 sm:gap-4"
                >
                  {/* Purple Circle with White Checkmark */}
                  <div className="mt-1 flex h-5 w-5 sm:h-5.5 sm:w-5.5 shrink-0 items-center justify-center rounded-full bg-[#6040FF] text-white shadow-xs">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#101015] tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-[#656B7A] leading-relaxed">
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
