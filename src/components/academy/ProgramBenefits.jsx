export default function ProgramBenefits() {
  const benefits = [
    {
      title: "Deployed AI Application",
      desc: "Launch a live machine learning model on AWS — something real employers can see and interact with.",
    },
    {
      title: "Portfolio Projects",
      desc: "Multiple practical projects across NLP, Computer Vision, and Machine Learning — all ready to share.",
    },
    {
      title: "Industry Capstone",
      desc: "A complete end-to-end production-ready AI solution you built from scratch.",
    },
    {
      title: "AWS Experience",
      desc: "Hands-on experience with AWS cloud infrastructure and AI services that employers pay a premium for.",
    },
    {
      title: "GitHub Repository",
      desc: "A maintained collection of projects, notebooks, and deployments — your public proof of skill.",
    },
    {
      title: "Career Confidence",
      desc: "Walk into interviews with demonstrable proof of your skills — not just a course certificate.",
    },
  ];

  return (
    <section id="outcomes" className="py-16 md:py-24 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Side / Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase mb-4">
            WHAT YOU&apos;LL HAVE
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
            What You&apos;ll Have on Day 85 <br className="hidden md:block" /> That You <span className="text-[#9D7AFF]">Don&apos;t Have Today</span>
          </h2>

          <div className="flex flex-col">
            {benefits.map((benefit, idx) => (
              <div key={idx} className={`py-6 ${idx !== 0 ? 'border-t border-white/5' : 'pt-0'}`}>
                <h4 className="text-white font-bold text-[17px] mb-2 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9D7AFF]" />
                  {benefit.title}
                </h4>
                <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed pl-4.5 ml-4">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side / Certificate Card */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-start justify-center pt-8">
          <div className="w-full max-w-md bg-[#0D101E] border border-white/5 rounded-sm p-8 md:p-12 relative flex flex-col items-center justify-center min-h-[400px]">
            <h4 className="text-center text-white font-bold text-[15px] mb-3">Program Completion Certificate</h4>
            <p className="text-center text-white/50 text-[13px] leading-relaxed max-w-xs">
              Issued by AGS Academy upon successfully meeting all course requirements
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
