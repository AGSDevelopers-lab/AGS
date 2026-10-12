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
      className="relative z-10 w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] bg-[#050414] py-24 sm:py-32 lg:py-36 text-white overflow-x-clip border-t border-gray-100 flex items-center"
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
        <div className="absolute right-[-5%] top-[-10%] h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,rgba(123,92,255,0.15)_45%,transparent_70%)] blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1640px] 2xl:max-w-[1760px] px-6 sm:px-12 lg:px-20">
        {/* Left Column: Text & Logos (slides in from left side to center) */}
        <div ref={contentRef} className="max-w-4xl xl:max-w-5xl flex flex-col items-start">
          <span className="text-sm sm:text-base md:text-lg font-medium text-[#60A5FA] tracking-wider uppercase">
            Partnership Announcement
          </span>

          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-[56px] xl:text-[66px] 2xl:text-[74px] font-bold tracking-tight text-white leading-tight whitespace-nowrap">
            We Are Officially AWS Partner
          </h2>

          <p className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-[30px] xl:text-[36px] font-normal text-white/95 leading-snug whitespace-nowrap">
            In Association with Redington Limited
          </p>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl xl:text-2xl text-white/70 font-light max-w-2xl leading-relaxed">
            Delivering cloud excellence and innovation to drive your business forward.
          </p>

          {/* Badges Row: Big AWS + Partner Network text X Redington logo */}
          <div className="mt-12 sm:mt-16 flex items-center gap-6 sm:gap-10 flex-wrap pt-2">
            {/* AWS Smile Logo with 'Partner Network' text beside it */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <div className="relative h-14 sm:h-18 md:h-22 lg:h-24 w-32 sm:w-40 md:w-48 lg:w-52 shrink-0">
                <Image
                  src="/aws-tight.png"
                  alt="AWS"
                  fill
                  sizes="(max-width: 640px) 130px, 208px"
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white leading-[1.15] tracking-wide select-none pl-1">
                <span>Partner</span>
                <span>Network</span>
              </div>
            </div>

            {/* X Divider */}
            <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white/35 mx-1 sm:mx-3 select-none">
              X
            </span>

            {/* Redington Logo: Big, tightly-trimmed transparent logo */}
            <div className="relative h-12 sm:h-16 md:h-20 lg:h-22 w-48 sm:w-60 md:w-72 lg:w-80 shrink-0">
              <Image
                src="/redington-tight.png"
                alt="Redington"
                fill
                sizes="(max-width: 640px) 200px, 320px"
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
