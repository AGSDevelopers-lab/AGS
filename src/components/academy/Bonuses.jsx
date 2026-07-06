export default function Bonuses() {
  const bonuses = [
    {
      title: "AI & ML Resource Library",
      desc: "Templates, Jupyter notebooks, curated datasets, and project resources to accelerate your learning journey.",
    },
    {
      title: "Career Guidance Sessions",
      desc: "Interview preparation coaching and project presentation guidance from industry professionals who've been through the hiring process.",
    },
    {
      title: "Capstone Expert Review",
      desc: "Get detailed, expert feedback on your final capstone project implementation before you present it to the world.",
    },
    {
      title: "Industry Exposure",
      desc: "Understand how AI systems are built and deployed in real business environments through live case studies.",
    },
    {
      title: "Full AWS Cloud Access",
      desc: "Hands-on access to AWS services throughout the program — SageMaker, S3, Lambda, Glue, Athena, and more.",
    },
    {
      title: "Community & Peer Network",
      desc: "Join a cohort of peers on the same journey. Collaborate, share projects, and build connections that last beyond the program.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase mb-4">
            INCLUDED BONUSES
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl">
            Everything Else That Comes <br className="hidden md:block" />
            With Your <span className="text-[#9D7AFF]">Enrollment</span>
          </h2>
          <p className="text-white/70 text-[15px] md:text-[17px] max-w-2xl">
            Worth more than the program itself — yours free when you join this batch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-[#0D101E] border border-white/5 rounded-sm p-8 hover:border-white/10 transition-colors relative flex flex-col justify-end min-h-[260px]"
            >
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#7B5CFF]/20 text-[#9D7AFF] text-[10px] font-bold tracking-wider uppercase">
                FREE
              </div>
              <h4 className="text-white font-bold text-[16px] mb-4">{bonus.title}</h4>
              <p className="text-white/50 text-[14px] leading-relaxed">
                {bonus.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
