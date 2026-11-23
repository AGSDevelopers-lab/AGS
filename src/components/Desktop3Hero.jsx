"use client";

import Image from "next/image";
import SlideIn from "@/components/SlideIn";

export default function Desktop3Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[820px] sm:min-h-[880px] lg:min-h-[920px] w-full flex-col justify-center overflow-hidden bg-[#030614] text-white"
    >
      {/* Background Hero Image: Glowing AWS Cloud Data Rain */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src="/hero-glowing-aws.png"
          alt="AWS Partnership Ecosystem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] md:object-[82%_center] lg:object-right"
        />
        {/* Subtle left scrim gradient for high contrast readability across all screen widths */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030614]/95 via-[#030614]/65 to-transparent w-full md:w-[70%] lg:w-[55%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030614]/60 via-transparent to-[#030614]/40 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] 2xl:max-w-[1600px] px-6 sm:px-12 lg:px-20 pt-28 pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge: Official Partnership Announcement */}
          <SlideIn from="left" distance={25}>
            <div className="inline-flex items-center rounded-full border border-[#38BDF8]/50 bg-black/45 px-5 py-2 text-xs sm:text-sm font-normal tracking-wide text-white/95 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.18)]">
              Official Partnership Announcement
            </div>
          </SlideIn>

          {/* Title: Proud to be an AWS Partner */}
          <SlideIn from="left" distance={35} className="mt-7 sm:mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-light tracking-[-0.03em] text-white leading-[1.08]">
              Proud to be an
              <span className="mt-3 sm:mt-4 flex items-center gap-3.5 sm:gap-5 flex-wrap">
                <span className="relative inline-block w-[115px] sm:w-[145px] lg:w-[170px] h-[46px] sm:h-[58px] lg:h-[68px]">
                  <Image
                    src="/aws-tight.png"
                    alt="AWS"
                    fill
                    sizes="(max-width: 640px) 115px, 170px"
                    className="object-contain object-left"
                    priority
                  />
                </span>
                <span className="font-serif italic font-normal bg-gradient-to-r from-[#34D399] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(56,189,248,0.3)]">
                  Partner
                </span>
              </span>
            </h1>
          </SlideIn>

          {/* In association with Redington */}
          <SlideIn from="left" distance={30} className="mt-5 sm:mt-6">
            <div className="flex items-center gap-3 sm:gap-3.5 text-lg sm:text-xl lg:text-2xl font-light text-white/90">
              <span>In association with</span>
              <div className="relative h-7 sm:h-9 w-28 sm:w-36 lg:w-40 shrink-0">
                <Image
                  src="/redington-tight.png"
                  alt="Redington"
                  fill
                  sizes="(max-width: 640px) 112px, 160px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>
          </SlideIn>

          {/* Subtitle / Tagline: Building Smarter. Scaling Faster. On AWS. */}
          <SlideIn from="left" distance={25} className="mt-5 sm:mt-6">
            <p className="text-base sm:text-lg lg:text-xl font-normal text-white/80 tracking-wide">
              Building Smarter. Scaling Faster. On{" "}
              <span className="font-semibold text-[#FF9900]">AWS.</span>
            </p>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
