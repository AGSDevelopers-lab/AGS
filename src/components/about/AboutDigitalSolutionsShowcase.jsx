"use client";

import Image from "next/image";
import Link from "next/link";
import SlideIn from "@/components/SlideIn";

export default function AboutDigitalSolutionsShowcase() {
  return (
    <section className="relative z-10 w-full overflow-x-clip bg-[#FFFFFF]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[460px] lg:min-h-[540px] overflow-x-clip">
        {/* Left Panel: Dark Photographic Panel (Slides in from Left) */}
        <SlideIn from="left" distance={30} className="w-full h-full">
          <Link
            href="/services/digital-solutions"
            className="group relative block w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[560px] overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src="/ags about page/digital solutions.png"
              alt="Digital Solutions Meeting"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Navy/Black Overlay */}
            <div className="absolute inset-0 bg-[#090B18]/82 transition-colors duration-500 group-hover:bg-[#090B18]/75" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-white">
                Digital Solutions
              </h3>

              {/* Bright Purple Circular Action Button */}
              <div className="mt-5 sm:mt-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#6040FF] to-[#5900B8] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(96,64,255,0.6)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </SlideIn>

        {/* Right Panel: Bright Natural Photographic Panel with Colleagues on Laptop (Slides in from Right) */}
        <SlideIn from="right" distance={30} className="w-full h-full">
          <div className="group relative w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[560px] overflow-hidden">
            <Image
              src="/ags about page/digital olutions 2.png"
              alt="Colleagues Collaborating on Laptop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle natural vignette */}
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
