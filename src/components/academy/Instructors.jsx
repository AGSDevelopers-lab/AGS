import Image from "next/image";

export default function Instructors() {
  const instructors = [
    {
      role: "AI/ML Engineer",
      tags: "Artificial Intelligence • AWS Cloud",
      desc: "Industry professional with hands-on experience building and deploying production AI systems across cloud infrastructure.",
      image: "/Academy/img1.png",
    },
    {
      role: "Data Science Lead",
      tags: "Machine Learning • NLP • Computer Vision",
      desc: "Practitioner specializing in NLP and Computer Vision solutions deployed at enterprise scale.",
      image: "/Academy/img2.png",
    },
    {
      role: "MLOps Architect",
      tags: "MLOps • Cloud Infrastructure • CI/CD",
      desc: "Expert in production ML pipelines, model monitoring, and deployment automation at scale.",
      image: "/Academy/img3.png",
    },
  ];

  return (
    <section id="mentors" className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase mb-4">
            YOUR INSTRUCTORS
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl">
            Learn From <span className="text-[#9D7AFF]">Engineers Who Build</span> AI Systems
          </h2>
          <p className="text-white/70 text-[15px] md:text-[17px] max-w-2xl leading-relaxed">
            Train under industry professionals working in Artificial Intelligence, Cloud Computing, Software Development, and Digital Transformation. Gain insights from practitioners who build and deploy real-world AI solutions for businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instructors.map((inst, idx) => (
            <div key={idx} className="bg-[#0D101E] border border-white/5 rounded-sm overflow-hidden hover:border-white/10 transition-colors flex flex-col">
              <div className="w-full h-48 md:h-56 bg-gradient-to-b from-[#14172B] to-[#0D101E] relative border-b border-white/5 flex items-center justify-center overflow-hidden group">
                 <div className="absolute inset-0 bg-[#7B5CFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                 <Image
                   src={inst.image}
                   alt={inst.role}
                   fill
                   quality={100}
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h4 className="text-white font-bold text-[17px] mb-2">{inst.role}</h4>
                <p className="text-[#9D7AFF] text-[12px] font-medium mb-4">
                  {inst.tags}
                </p>
                
                <p className="text-white/60 text-[14px] leading-relaxed mt-auto">
                  {inst.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
