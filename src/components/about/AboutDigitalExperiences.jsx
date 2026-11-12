"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutDigitalExperiences() {
  const sectionRef = useRef(null);
  const row1LeftRef = useRef(null);
  const row1RightRef = useRef(null);
  const row2LeftRef = useRef(null);
  const row2RightRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            row1LeftRef.current,
            row1RightRef.current,
            row2LeftRef.current,
            row2RightRef.current,
          ],
          {
            x: 0,
            autoAlpha: 1,
          }
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? "20vw" : "35vw";

        gsap.set([row1LeftRef.current, row2LeftRef.current], {
          x: `-${dist}`,
          autoAlpha: 0,
        });

        gsap.set([row1RightRef.current, row2RightRef.current], {
          x: dist,
          autoAlpha: 0,
        });

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to([row1LeftRef.current, row2LeftRef.current], {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              stagger: 0.15,
              ease: "power3.out",
            });
            gsap.to([row1RightRef.current, row2RightRef.current], {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              stagger: 0.15,
              ease: "power3.out",
            });
          },
        });

        if (st.progress > 0) {
          gsap.set(
            [
              row1LeftRef.current,
              row1RightRef.current,
              row2LeftRef.current,
              row2RightRef.current,
            ],
            {
              x: 0,
              autoAlpha: 1,
            }
          );
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
        {/* ── ROW 1: Heading, Intro, Feature 1 & Container (6) matching Picture 4 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Container (6) Image matching Figma Frame */}
          <div ref={row1LeftRef} className="w-full lg:col-span-6">
            <div className="relative w-full aspect-[604/319] max-w-[604px] mx-auto lg:mx-0 rounded-[2px] overflow-hidden shadow-sm">
              <Image
                src="/ags about page/Container (6).png"
                alt="Building Digital Experiences - Have Any Query?"
                fill
                sizes="(max-width: 1024px) 100vw, 604px"
                className="object-contain object-top"
                priority
              />

              {/* Clickable Hotspot Overlay over the 'Have Any Query? +91 90381 30595' Card */}
              <a
                href="tel:+919038130595"
                title="Have Any Query? Call +91 90381 30595"
                aria-label="Have Any Query? Call +91 90381 30595"
                className="absolute bottom-0 right-0 w-[52%] h-[32%] cursor-pointer z-10 transition-colors duration-200 hover:bg-white/5 rounded-br-[2px]"
              >
                <span className="sr-only">Call +91 90381 30595</span>
              </a>
            </div>
          </div>

          {/* Right Column: Heading, Subtitle & Feature 1 */}
          <div
            ref={row1RightRef}
            className="w-full lg:col-span-6 flex flex-col justify-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#101015] leading-[1.18]">
              Building Digital Experiences
              <br />
              That <span className="text-[#8B5CF6]">Drive Results</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] text-[#555A68] leading-[1.65] font-normal max-w-[560px]">
              At AGS, we bring design, technology, and strategy together to
              create meaningful digital experiences for modern businesses.
            </p>

            {/* Feature 1: Understanding Your Business (Matching Picture 4) */}
            <div className="mt-8 sm:mt-10 border-t border-black/[0.08] pt-5 sm:pt-6">
              <div className="flex items-start gap-4">
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
                <div>
                  <h3 className="text-[15px] sm:text-[16.5px] font-semibold text-[#101015] leading-snug">
                    Understanding Your Business
                  </h3>
                  <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#656B7A] leading-[1.65]">
                    We begin by understanding your goals, audience, challenges,
                    and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 2: Lower Image (604x459) & Features 2, 3, 4 matching Picture 3 ── */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Lower Image 604x459 */}
          <div ref={row2LeftRef} className="w-full lg:col-span-6">
            <div className="relative w-full aspect-[604/459] max-w-[604px] mx-auto lg:mx-0 rounded-[2px] overflow-hidden shadow-sm">
              <Image
                src="/ags about page/building digital experience.png"
                alt="Reviewing Analytics and Charts at Desk"
                fill
                sizes="(max-width: 1024px) 100vw, 604px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Features 2, 3, 4 with Dividers matching Picture 3 */}
          <div
            ref={row2RightRef}
            className="w-full lg:col-span-6 flex flex-col justify-start"
          >
            <div className="border-t border-black/[0.08]">
              {/* Feature 2: Creating With Purpose */}
              <div className="py-5 sm:py-6 border-b border-black/[0.08] flex items-start gap-4">
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
                <div>
                  <h3 className="text-[15px] sm:text-[16.5px] font-semibold text-[#101015] leading-snug">
                    Creating With Purpose
                  </h3>
                  <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#656B7A] leading-[1.65]">
                    Our team combines UI/UX, technology, and creative thinking
                    to develop solutions that are both useful and impactful.
                  </p>
                </div>
              </div>

              {/* Feature 3: Built To Grow With You */}
              <div className="py-5 sm:py-6 border-b border-black/[0.08] flex items-start gap-4">
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
                <div>
                  <h3 className="text-[15px] sm:text-[16.5px] font-semibold text-[#101015] leading-snug">
                    Built To Grow With You
                  </h3>
                  <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#656B7A] leading-[1.65]">
                    From digital products to marketing solutions, we build
                    experiences that support long-term business growth.
                  </p>
                </div>
              </div>

              {/* Feature 4: Delivering With Excellence */}
              <div className="py-5 sm:py-6 border-b border-black/[0.08] flex items-start gap-4">
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
                <div>
                  <h3 className="text-[15px] sm:text-[16.5px] font-semibold text-[#101015] leading-snug">
                    Delivering With Excellence
                  </h3>
                  <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#656B7A] leading-[1.65]">
                    We focus on quality, transparency, and reliable delivery at
                    every stage of the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
