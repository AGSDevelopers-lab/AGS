export default function Mentors() {
  const mentors = [
    {
      name: "Ankit Bhadra",
      role: "Director & CEO, AGS",
      desc: "Leads AGS's AI and cloud practice, architecting GenAI products on AWS for clients across media, retail, and healthcare.",
    },
    {
      name: "Sharmistha Chatterjee",
      role: "Director & COO, AGS",
      desc: "Runs delivery and operations for AGS's product teams, turning ambitious AI ideas into shipped, scalable systems.",
    },
    {
      name: "Atish Roy",
      role: "Chief Growth Officer, AGS",
      desc: "Helps founders take AI products to market from positioning to growth — so your build doesn't just work, it sells.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase mb-4">
            1-ON-1 PERSONAL GUIDANCE
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Your Mentors
          </h2>
          <p className="text-white/70 text-[15px] md:text-[17px] max-w-2xl leading-relaxed">
            Get 1-on-1 guidance from engineers and researchers who ship AI products at the world&apos;s top companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="bg-[#0D101E] border border-white/5 rounded-sm overflow-hidden hover:border-white/10 transition-colors flex flex-col">
              {/* Photo Placeholder */}
              <div className="w-full h-56 md:h-64 bg-gradient-to-br from-[#14172B] to-[#0A0C16] relative border-b border-white/5 p-4 flex items-center justify-center group overflow-hidden">
                 {/* Decorative background glow */}
                 <div className="absolute inset-0 bg-[#7B5CFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 {/* In a real scenario, use next/image here */}
                 <div className="w-16 h-16 relative opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                     <circle cx="12" cy="7" r="4" />
                   </svg>
                 </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col bg-[#0f1123]">
                <h4 className="text-white font-bold text-[17px] mb-1">{mentor.name}</h4>
                <p className="text-[#9D7AFF] text-[11px] font-bold tracking-wider uppercase mb-5">
                  {mentor.role}
                </p>
                
                <p className="text-white/50 text-[14px] leading-relaxed mt-auto">
                  {mentor.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
