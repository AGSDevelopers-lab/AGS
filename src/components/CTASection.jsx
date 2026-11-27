"use client";

import Image from "next/image";
import { useCtaForm } from "@/components/CtaFormProvider";
import SlideIn from "@/components/SlideIn";

function CTAButton() {
  const { openForm } = useCtaForm();

  return (
    <button
      type="button"
      className="group inline-flex items-center gap-3.5 bg-white px-7 sm:px-8 py-3.5 sm:py-4 text-[15px] font-medium text-black transition-all duration-300 hover:bg-white/95 hover:scale-[1.02] shadow-xl rounded-none cursor-pointer whitespace-nowrap"
      onClick={() => openForm()}
    >
      <span>Know More</span>
      <Image
        src="/contact/uil_arrow-up.png"
        alt=""
        width={20}
        height={20}
        unoptimized
        className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-45"
      />
    </button>
  );
}

export default function CTASection({
  heading = "Let's work with Us",
  description = "Amrut Global Solutions is an official AWS Partner providing enterprise-grade cloud engineering, digital transformation, web & mobile development, and AI solutions.",
}) {
  return (
    <section
      id="contact"
      className="relative z-10 w-full overflow-hidden bg-[#0A071E] py-8 sm:py-12 lg:py-14 border-t border-white/10"
    >
      <div className="relative mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between py-6 sm:py-10">
          {/* Left: Heading & paragraph sliding from left */}
          <SlideIn from="left" distance={40} className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-tight bg-[linear-gradient(91.16deg,#9795FF_1.74%,#FFFFFF_43.71%,#FFFFFF_61.62%,#BE9FFF_102.48%)] bg-clip-text text-transparent leading-tight">
              {heading}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/70 font-light max-w-xl leading-relaxed">
              {description}
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
