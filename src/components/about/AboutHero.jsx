"use client";

import Image from "next/image";
import Link from "next/link";
import { useCtaForm } from "@/components/CtaFormProvider";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutHero() {
  const { openForm } = useCtaForm();

  return (
    <section className="relative w-full h-[78vh] min-h-[560px] max-h-[820px] flex items-center justify-center overflow-hidden bg-[#0A0D1A]">
      {/* Background Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ags about page/about us hero .png"
          alt="AGS Business Meeting & Team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Reduced dark gradient overlay so the team meeting background photograph is clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A1E]/50 via-[#0B0F2A]/30 to-[#090C22]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060817]/60 via-transparent to-black/20" />
      </div>

      {/* Hero Content (Centered horizontally and vertically) */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8 text-center pt-16 sm:pt-20">
        <ScrollReveal direction="down" delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight text-white leading-[1.08] drop-shadow-md">
            About Us
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={250}>
          <p className="mt-5 sm:mt-6 mx-auto max-w-[620px] text-sm sm:text-base md:text-[17px] text-white/95 font-normal leading-relaxed tracking-wide drop-shadow-sm">
            We are a team of passionate designers, developers, and strategists building
            innovative digital solutions that transform businesses and create impact.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <div className="mt-8 sm:mt-9 flex justify-center">
            <button
              type="button"
              onClick={() => openForm()}
              className="group inline-flex items-center gap-3 bg-white hover:bg-white/95 text-black px-6 sm:px-7 py-3 rounded-[2px] text-sm sm:text-[15px] font-medium tracking-normal transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01]"
            >
              <span>Get Started</span>
              <span className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full border border-black/80 text-black transition-transform duration-300 group-hover:rotate-45">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
