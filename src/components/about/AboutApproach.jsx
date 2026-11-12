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
      className="relative z-10 w-full bg-[#FFFFFF] pt-12 sm:pt-16 pb-8 sm:pb-12 lg:pb-14 overflow-hidden"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start overflow-hidden">
          {/* Left Column: Photograph (Clean crop without ghost line or transparent padding) */}
          <div ref={imageColRef} className="w-full">
            <div className="relative w-full aspect-[630/464] max-w-[580px] mx-auto lg:mx-0 overflow-hidden rounded-[2px]">
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

          {/* Right Column: Content (Top aligned flush with photo top) */}
          <div ref={textColRef} className="w-full">
            <div className="max-w-[580px]">
              {/* Eyebrow — aligned flush at top */}
              <span className="text-[14px] sm:text-[15px] font-semibold text-[#8B5CF6] tracking-wide inline-block leading-none pt-0.5">
                Our Approach
              </span>

              {/* Main Heading — exact 48px matching Picture1.png & Screenshot 5 */}
              <h2 className="mt-3 sm:mt-4 text-[32px] sm:text-[40px] lg:text-[48px] font-medium tracking-tight text-[#111111] leading-[1.15]">
                Turning Ideas Into
                <span className="block text-[#111111]">Digital Impact</span>
              </h2>

              {/* Supporting Copy — exact 20px matching Picture1.png */}
              <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] lg:text-[20px] text-[#555A68] font-normal leading-[1.6]">
                The whole model of our business revolves around these two terms. We believe
                in driving digital solutions by leveraging the power of Technology and
                Innovative minds. But, the solution must be transparent to our clients and
                the quotes must be honest.
              </p>

              {/* Distinctive CTA Button with Left Arrow Tile matching Picture1.png gradient */}
              <div className="mt-7 sm:mt-8">
                <button
                  type="button"
                  onClick={() => openForm()}
                  className="group inline-flex items-stretch rounded-[2px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                >
                  {/* Left Arrow Tile */}
                  <div className="w-11 sm:w-12 bg-white flex items-center justify-center border border-[#7C3AED]/30 text-[#4F46E5] transition-colors group-hover:bg-[#F5F3FF]">
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
                  <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] px-6 sm:px-7 py-3 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-white flex items-center shadow-md">
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
