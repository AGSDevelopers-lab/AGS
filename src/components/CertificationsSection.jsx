export default function CertificationsSection() {
  return (
    <section className="relative container mx-auto z-10 w-full overflow-hidden pb-12 pt-0 sm:pb-20">
      <div className="relative w-full px-6 sm:px-8 lg:px-26">
        <div className="relative overflow-hidden border border-white/8">

          {/* Top accent line — matches AWS section */}
          <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent_0%,#9795FF_30%,#ffffff_50%,#BE9FFF_70%,transparent_100%)]" />

          {/* Ambient glows */}
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#9795FF]/12 blur-[100px]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[#BE9FFF]/10 blur-[90px]" />

          <div className="relative flex flex-col items-start gap-8 px-7 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-12 lg:px-14">

            {/* Left: heading */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#9795FF] shrink-0" />
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9795FF]">
                  Government Recognition
                </p>
              </div>
              <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-1 text-[2rem] leading-tight font-normal tracking-[-0.05em] text-transparent sm:text-[2.6rem]">
                Certified & Recognised
              </h2>
              <p className="mt-3 max-w-[38ch] text-[0.9rem] leading-[1.7] text-white/55">
                AGS is an officially registered MSME under the Government of India — a mark of credibility, compliance, and commitment.
              </p>
            </div>

            {/* Right: MSME badge */}
            <div className="flex shrink-0 items-center gap-5 border border-[#9795FF]/30 bg-[#9795FF]/8 px-7 py-5">
              {/* Shield icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#9795FF]/30 bg-[#9795FF]/12 text-[#9795FF]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L4 5.5V11C4 15.418 7.582 19.418 12 21C16.418 19.418 20 15.418 20 11V5.5L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[1rem] font-semibold tracking-tight text-white">MSME Certified</p>
                <p className="mt-0.5 text-[0.75rem] text-white/45 tracking-wide">MSME · Govt. of India</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
