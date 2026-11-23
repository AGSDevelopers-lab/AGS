"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideIn from "@/components/SlideIn";

function ShieldCheckIcon({ className = "w-6 h-6 text-white" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const learnMetrics = [
  {
    title: "MSME Certified",
    subtitle: "MSME · Govt. of India",
  },
  {
    title: "98%",
    subtitle: "Client Satisfiction Rate",
  },
  {
    title: "250+",
    subtitle: "Satisfied Clients",
  },
  {
    title: "Google Cloud",
    subtitle: "Member Company",
  },
];

export default function LearnAboutUsSection() {
  const [imgSrc, setImgSrc] = useState("/AGS Landing Page Images/Container (6).png");

  return (
    <section
      id="about"
      className="relative z-10 w-full bg-[#080B14] py-16 sm:py-20 lg:py-28 text-white overflow-hidden border-t border-white/5"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Container (6) Asymmetrical Shaped Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] flex items-center justify-center">
              <Image
                src={imgSrc}
                alt="Learn About us - AGS Team"
                width={540}
                height={590}
                priority
                unoptimized
                onError={() => setImgSrc("/container-learn-about-us.png")}
                className="w-full h-auto max-w-[480px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Content + 2x2 Feature Cards + Button */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-4">
            <SlideIn from="right" distance={30}>
              <span className="text-sm sm:text-base font-medium text-[#6366F1] tracking-wide">
                Who We Are
              </span>

              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-tight text-white leading-[1.12]">
                Learn About us
              </h2>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-white/65 leading-relaxed font-light">
                We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
              </p>
            </SlideIn>

            {/* 2x2 Feature/Metric Cards Grid */}
            <SlideIn from="right" distance={25} className="mt-8 sm:mt-10 w-full max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {learnMetrics.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    {/* Shield Checkmark Icon Box */}
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded border border-white/15 bg-white/[0.02] shrink-0">
                      <ShieldCheckIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white/90" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-lg sm:text-xl font-medium text-white tracking-tight leading-snug">
                        {item.title}
                      </span>
                      <span className="mt-0.5 text-xs sm:text-sm text-white/60 font-light">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </SlideIn>

            {/* CTA Button: More About Us */}
            <SlideIn from="right" distance={20} className="mt-8 sm:mt-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-white px-8 py-3.5 text-sm sm:text-base font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] shadow-xl rounded-none"
              >
                More About Us
              </Link>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
