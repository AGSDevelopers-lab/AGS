"use client";

import { useCtaForm } from "@/components/CtaFormProvider";

function ArrowButton({ label }) {
  const { openForm } = useCtaForm();

  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 border border-white bg-white px-5 py-3 text-[0.95rem] font-medium text-black transition hover:bg-transparent hover:text-white"
      onClick={() => openForm()}
    >
      <span>{label}</span>
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current text-[9px]">
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      </span>
    </button>
  );
}

export default function IntroSection() {
  return (
    <section id="about" className="relative z-10 w-full overflow-hidden pb-2 pt-6 sm:pb-4 sm:pt-10">
      <div className="relative w-full px-6 sm:px-8 lg:px-26">
        <div className="relative px-4 py-4 sm:px-8 sm:py-6 lg:px-10 lg:py-8">
        <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[750px]">
            <h2 className="max-w-[750px] bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.9rem] leading-[1.18] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4rem]">
              AGS Helps You Build  a Strong Digital Presence
            </h2>
            <p className="mt-5 max-w-[500px] text-[1rem] leading-[1.75] text-white/78">
              We specialize in Web Design, UI/UX Design, Branding, and Digital
              Marketing solutions for modern businesses.
            </p>
          </div>

          <div className="lg:pt-[6rem]">
            <ArrowButton label="Launch Your Idea" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
