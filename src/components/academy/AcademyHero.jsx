import Image from "next/image";

export default function AcademyHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image & Glow */}
      <div className="absolute inset-0 z-0 bg-[#070913]">
        <Image
          src="/Academy/hero1.png"
          alt="AI Program Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-center opacity-40 md:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070913]/50 to-[#070913] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-10">
          <div className="inline-block text-xs md:text-sm font-semibold tracking-wider text-[#7B5CFF] uppercase mb-4 md:mb-6">
            AGS Academy &gt; AWS AI & ML
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Launch Your <br className="hidden md:block" />
            <span className="text-[#9D7AFF]">
              AI & Machine Learning
            </span>{" "}
            <br className="hidden md:block" />
            Career on AWS <br className="hidden md:block" />
            — in 12 Weeks
          </h1>
          
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            <span className="hidden md:inline">
              Train on the exact skills companies hire for — Artificial Intelligence,
              Machine Learning, Deep Learning, NLP, Computer Vision, MLOps,
              and AWS Cloud. You won&apos;t just learn concepts. You&apos;ll build real AI projects, deploy live models on AWS, and leave with a portfolio that recruiters can open, evaluate, and hire from.
            </span>
            <span className="inline md:hidden">
              A structured 12-module program that takes you from zero to deployed with a portfolio, an AWS certification, and real experience.
            </span>
          </p>

          {/* Badges (Desktop) */}
          <div className="hidden lg:flex flex-wrap gap-3 mb-8">
            {[
              "120+ Practical Training Hours",
              "13 Industry-Focused Modules",
              "AWS Cloud + Python + ML",
              "Real Capstone Project",
              "Industry Mentorship",
              "Portfolio & Career Ready",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-sm border border-white/10 bg-white/5 text-xs font-medium text-white/80"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div>
              <div className="text-3xl font-bold text-white flex items-baseline gap-2">
                ₹4,000 <span className="text-lg text-white/40 line-through font-medium">₹12,000</span>
              </div>
            </div>
            <a
              href="#pricing"
              className="bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-3.5 rounded-sm text-[15px] font-medium transition-colors"
            >
              Reserve Your Seat Now — Batch Filling Fast
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-2 mt-6">
            <div className="flex gap-1 text-[#FDB022]">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-white/60">4.9 · 200+ students trained</span>
          </div>
        </div>

        {/* Right Content / Floating Card */}
        <div className="w-full lg:w-[40%]">
          <div className="bg-[#0D101E] border border-white/10 rounded-xl p-6 sm:p-8 w-full max-w-md mx-auto lg:mr-0 relative z-20 shadow-[0_0_50px_rgba(123,92,255,0.1)]">
            <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4 text-center">
              ENROLLMENT CLOSES IN
            </h3>
            
            {/* Timer */}
            <div className="flex justify-between gap-2 mb-8">
              {[
                { label: "Days", value: "04" },
                { label: "Hours", value: "18" },
                { label: "Mins", value: "37" },
                { label: "Secs", value: "04" },
              ].map((time, idx) => (
                <div key={idx} className="flex-1 bg-[#14172B] rounded-lg p-3 text-center border border-white/5">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{time.value}</div>
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase">{time.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile Feature Badges */}
            <div className="grid grid-cols-2 gap-2 mb-8 lg:hidden">
               {[
                "12 Weeks",
                "13 Modules",
                "Live Online",
                "Beginner Friendly",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-1.5 rounded-sm border border-white/10 bg-white/5 text-[11px] font-medium text-white/80 text-center"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Desktop Features List */}
            <div className="hidden lg:block mb-8">
              <p className="text-white font-medium mb-4">Next batch starts soon. Secure your spot.</p>
              <ul className="space-y-3">
                {[
                  "120+ Hours of Live Training",
                  "13 AWS-Integrated Modules",
                  "Real Capstone AI Project",
                  "1-on-1 Mentorship Included",
                  "Portfolio-Ready Deliverables",
                  "Program Completion Certificate",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7B5CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price (Mobile) */}
            <div className="lg:hidden flex items-end gap-3 mb-6">
              <div className="text-4xl font-bold text-white">₹4,000</div>
              <div className="pb-1">
                <div className="text-sm text-white/40 line-through font-medium">₹12,000</div>
                <div className="text-xs text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded-sm font-semibold mt-1 inline-block">92% OFF</div>
              </div>
            </div>

            <a
              href="#pricing"
              className="block w-full bg-[#7B5CFF] hover:bg-[#6a4cef] text-white text-center py-3.5 rounded-sm text-[15px] font-medium transition-colors"
            >
              Start Your AI Career — ₹4,000 →
            </a>
            
            <p className="text-center text-xs text-white/40 mt-4 lg:hidden">
              1-time payment · Lifetime access · 200+ learners enrolled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
