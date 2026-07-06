export default function TargetAudience() {
  const audiences = [
    {
      title: "B.Tech & Engineering Students",
      desc: "Gain practical skills beyond classroom learning and build a portfolio that stands out to recruiters.",
    },
    {
      title: "Aspiring AI & ML Engineers",
      desc: "Develop the technical expertise required for entry-level AI and ML roles in top companies.",
    },
    {
      title: "Data Science Enthusiasts",
      desc: "Learn industry-standard tools and workflows used by leading organizations worldwide.",
    },
    {
      title: "Career Changers",
      desc: "Build practical AI skills and transition into high-growth technology roles with real portfolio proof.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10 text-left">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase mb-4">
            WHO IT&apos;S FOR
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built for{" "}
            <span className="text-[#9D7AFF]">
              Future AI Professionals
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl text-base md:text-lg">
            Whether you&apos;re a student, career changer, or enthusiast — this program meets you where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className="bg-[#0D101E] border border-white/5 rounded-xl p-8 flex flex-col min-h-[220px] text-left hover:border-white/20 transition-colors"
            >
              <h4 className="text-white font-bold text-lg mb-4">
                {aud.title}
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">
                {aud.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
