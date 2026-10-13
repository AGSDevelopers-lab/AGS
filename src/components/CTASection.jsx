"use client";

import { useCtaForm } from "@/components/CtaFormProvider";
import SlideIn from "@/components/SlideIn";

function CTAButton() {
  const { openForm } = useCtaForm();

  return (
    <button
      type="button"
      className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold text-black transition-colors duration-300 hover:bg-white/90 shadow-xl"
      onClick={() => openForm()}
    >
      <span>Know More</span>
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/40 text-black">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="transition-transform duration-300 group-hover:rotate-45"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </span>
    </button>
  );
}

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative z-10 w-full overflow-x-clip bg-[#0A071E] py-14 sm:py-20 border-b border-white/10"
    >
      <div className="relative mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between py-6 sm:py-10">
          {/* Left: Heading & paragraph sliding from left */}
          <SlideIn from="left" distance={40} className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-tight text-white leading-tight">
              Let&apos;s work with Us
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/70 font-light max-w-xl leading-relaxed">
              Partner with Amrut Global Solutions to turn your ideas into high-performing, enterprise-grade digital platforms.
            </p>
          </SlideIn>

          {/* Right: Know More button sliding from right */}
          <SlideIn from="right" distance={25} className="shrink-0">
            <CTAButton />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
