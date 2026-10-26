"use client";

import { useCtaForm } from "@/components/CtaFormProvider";
import SlideIn from "@/components/SlideIn";

export default function AboutCTA() {
  const { openForm } = useCtaForm();

  return (
    <section className="relative z-10 w-full bg-[#0A0B14] py-20 sm:py-24 border-t border-white/10 overflow-x-clip">
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 overflow-x-clip">
          {/* Left Column: Heading and Description (Sliding in from Left) */}
          <SlideIn from="left" distance={40} className="max-w-[720px]">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-light tracking-tight text-white leading-[1.12]">
                Let's work with{" "}
                <span className="bg-gradient-to-r from-white via-[#E0D7FF] to-[#BE9FFF] bg-clip-text text-transparent font-normal">
                  Us
                </span>
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/70 font-normal leading-relaxed max-w-[620px]">
                Modern design, seamless user experience, and scalable technology to turn
                your ideas into high-performing digital solutions.
              </p>
            </div>
          </SlideIn>

          {/* Right Column: White Rectangular CTA Button (Sliding in from Right) */}
          <SlideIn from="right" distance={25} className="shrink-0">
            <div>
              <button
                type="button"
                onClick={() => openForm()}
                className="group inline-flex items-center gap-3.5 bg-white hover:bg-white/90 text-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-[2px] text-sm sm:text-[15px] font-medium transition-all duration-300 shadow-xl hover:scale-[1.01]"
              >
                <span>Know More</span>
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-black/80 text-black transition-transform duration-300 group-hover:rotate-45">
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
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
