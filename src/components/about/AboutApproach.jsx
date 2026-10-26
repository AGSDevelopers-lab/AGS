"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useCtaForm } from "@/components/CtaFormProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutApproach() {
  const { openForm } = useCtaForm();
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
      className="relative z-10 w-full bg-[#FFFFFF] py-16 sm:py-24 lg:py-28 overflow-x-clip"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-x-clip">
          {/* Left Column: Photograph (Slides in from Left) */}
          <div ref={imageColRef} className="w-full">
            <div className="relative w-full aspect-[1.12/1] sm:aspect-[1.15/1] max-w-[580px] mx-auto lg:mx-0 overflow-hidden rounded-[2px] shadow-sm">
              <Image
                src="/ags about page/Our approach.png"
                alt="AGS Team Collaborating around Laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content (Slides in from Right) */}
          <div ref={textColRef} className="w-full">
            <div className="max-w-[560px]">
              {/* Eyebrow */}
              <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-[#6040FF]">
                Our Approach
              </span>

              {/* Main Heading */}
              <h2 className="mt-3.5 sm:mt-4 text-3xl sm:text-4xl md:text-[44px] font-normal tracking-tight text-[#101015] leading-[1.14]">
                Turning Ideas Into
                <span className="block text-[#101015]">Digital Impact</span>
              </h2>

              {/* Supporting Copy */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-[15px] text-[#555A68] font-normal leading-relaxed">
                The whole model of our business revolves around these two terms. We believe
                in driving digital solutions by leveraging the power of Technology and
                Innovative minds. But, the solution must be transparent to our clients and
                the quotes must be honest.
              </p>

              {/* Distinctive CTA Button with Left Arrow Tile */}
              <div className="mt-8 sm:mt-9">
                <button
                  type="button"
                  onClick={() => openForm()}
                  className="group inline-flex items-stretch rounded-[2px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                >
                  {/* Left Arrow Tile */}
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

                  {/* Main Gradient Body */}
                  <div className="bg-gradient-to-r from-[#6040FF] to-[#5900B8] px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-white flex items-center">
                    <span>GET STARTED</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
