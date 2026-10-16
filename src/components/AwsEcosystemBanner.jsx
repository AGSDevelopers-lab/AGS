"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AwsEcosystemBanner() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const artworkRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([contentRef.current, artworkRef.current], {
          x: 0,
          autoAlpha: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? "20vw" : "35vw";

        // Left side (text & logos) starts off-screen to the left
        gsap.set(contentRef.current, {
          x: `-${dist}`,
          autoAlpha: 0,
        });

        // Right side (cloud image) starts off-screen to the right
        gsap.set(artworkRef.current, {
          x: dist,
          autoAlpha: 0,
        });

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(contentRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.4,
              ease: "power3.out",
            });
            gsap.to(artworkRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.4,
              ease: "power3.out",
            });
          },
        });

        if (st.progress > 0) {
          gsap.set([contentRef.current, artworkRef.current], {
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
      className="relative z-10 w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] bg-[#050414] py-14 sm:py-18 lg:py-22 text-white overflow-x-clip border-t border-gray-100 flex items-center"
    >
      {/* Background Layer: Cloud Hologram Background Image coming from right */}
      <div
        ref={artworkRef}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/aws-partner-bg.png"
          alt="AWS Partner Ecosystem"
          fill
          sizes="100vw"
          priority
          className="object-cover object-right"
        />
        {/* Subtle radial glow to enhance vibrancy */}
        <div className="absolute right-[-5%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18)_0%,rgba(123,92,255,0.12)_45%,transparent_70%)] blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1560px] 2xl:max-w-[1680px] px-6 sm:px-12 lg:px-20">
        {/* Left Column: Text & Logos (slides in from left side to center) */}
        <div ref={contentRef} className="max-w-3xl xl:max-w-4xl flex flex-col items-start">
          <span className="text-xs sm:text-sm font-semibold text-[#60A5FA] tracking-wider uppercase">
            Partnership Announcement
          </span>

          <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-[47.1px] font-normal tracking-tight text-white leading-tight lg:leading-[72px] whitespace-nowrap">
            We Are Officially AWS Partner
          </h2>

          <p className="mt-1 sm:mt-2 text-base sm:text-xl lg:text-[28px] font-normal text-white leading-snug lg:leading-[48px] whitespace-nowrap">
            In Association with Redington Limited
          </p>

          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-base text-white/70 font-light max-w-xl leading-relaxed">
            Delivering cloud excellence and innovation to drive your business forward.
          </p>

          {/* Badges Row: AWS + Partner Network text X Redington logo per Picture 2 */}
          <div className="mt-8 sm:mt-10 flex items-center gap-5 sm:gap-7 flex-wrap pt-1">
            {/* AWS Smile Logo with tightly spaced 'Partner Network' text at 20px */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <div className="relative h-8 sm:h-10 lg:h-11 w-16 sm:w-20 lg:w-[82px] shrink-0">
                <Image
                  src="/aws-tight.png"
                  alt="AWS"
                  fill
                  sizes="(max-width: 640px) 64px, 82px"
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="flex flex-col text-sm sm:text-base lg:text-[20px] font-medium text-white leading-[1.15] tracking-tight select-none">
                <span>Partner</span>
                <span>Network</span>
              </div>
            </div>

            {/* X Divider */}
            <span className="text-lg sm:text-2xl font-light text-white/35 mx-1 select-none">
              X
            </span>

            {/* Redington Logo: Tightly-trimmed transparent logo */}
            <div className="relative h-9 sm:h-11 lg:h-13 w-36 sm:w-44 lg:w-52 shrink-0">
              <Image
                src="/redington-tight.png"
                alt="Redington"
                fill
                sizes="(max-width: 640px) 144px, 208px"
                className="object-contain object-left"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
