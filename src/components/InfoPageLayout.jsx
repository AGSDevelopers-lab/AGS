import Link from "next/link";

export default function InfoPageLayout({
  eyebrow,
  title,
  intro,
  sections = [],
  ctaHref = "/",
  ctaLabel = "Back to Home",
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 pb-16 pt-32 sm:px-8 lg:px-26">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#03040b_28%,#050712_68%,#000000_100%)]" />
        <div className="absolute left-[-12%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(91,120,255,0.88)_0%,rgba(37,62,180,0.34)_45%,rgba(0,0,0,0)_76%)] blur-[100px]" />
        <div className="absolute right-[-10%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(128,90,255,0.78)_0%,rgba(61,55,166,0.28)_48%,rgba(0,0,0,0)_76%)] blur-[94px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1040px]">
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.38)]">
          <div className="border-b border-white/10 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <p className="text-[0.75rem] uppercase tracking-[0.24em] text-white/46">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-[780px] bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-[2.5rem] leading-[1.02] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[5rem]">
              {title}
            </h1>
            <p className="mt-4 max-w-[640px] text-[1rem] leading-[1.8] text-white/72">
              {intro}
            </p>
          </div>

          <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-8">
              {sections.map((section) => (
                <section
                  key={section.heading}
                  className="rounded-[22px] border border-white/8 bg-white/[0.02] px-5 py-5 sm:px-6 sm:py-6"
                >
                  <h2 className="text-[1.3rem] font-medium tracking-[-0.03em] text-white">
                    {section.heading}
                  </h2>
                  <div className="mt-4 grid gap-3">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="max-w-[760px] text-[0.98rem] leading-[1.8] text-white/70"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-3 border border-white bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-700 hover:bg-transparent hover:text-white"
              >
                <span>{ctaLabel}</span>
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
