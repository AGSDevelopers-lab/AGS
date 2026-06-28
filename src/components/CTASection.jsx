"use client";

import { useCtaForm } from "@/components/CtaFormProvider";
import Footer from "@/components/Footer";

function CTAButton() {
  const { openForm } = useCtaForm();

  return (
    <button
      type="button"
      className="group inline-flex items-center gap-3 border border-white bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-700 hover:bg-transparent hover:text-white"
      onClick={() => openForm()}
    >
      <span>Create Your Digital Experience</span>
      <svg
        width="29"
        height="29"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="transition-transform duration-700 group-hover:rotate-45"
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </button>
  );
}

export default function CTASection() {
  return (
    <section id="contact" className="relative z-10 w-full overflow-hidden pt-0">
      <div className="relative w-full border-t border-white/10">
        <div className="border-b border-white/10 px-6 py-8 sm:px-8 sm:py-12 lg:px-26 lg:py-14">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[720px]">
              <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
                Let&apos;s Work With Us
              </h2>
              <p className="mt-5 max-w-[620px] text-[1rem] leading-[1.75] text-white/78">
                Partner with AGS for web development, UI/UX design, branding,
                and digital solutions built to help your business grow.
              </p>
            </div>

            <div className="lg:pt-[5.9rem]">
              <CTAButton />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
