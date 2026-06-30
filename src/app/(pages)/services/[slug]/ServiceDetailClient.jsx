"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCtaForm } from "@/components/CtaFormProvider";

const numberWords = ["One", "Two", "Three", "Four", "Five", "Six"];

const industryCards = [
  { title: "Fintech", image: "/image 6.png", desc: "Deliver secure, high-performance financial solutions and seamless payment integrations with cutting-edge fintech architectures." },
  { title: "E-commerce", image: "/image 5.png", desc: "Custom development that drives conversions, reduces cart abandonment, and scales seamlessly across all retail demands." },
  { title: "Real Estate", image: "/Website.png", desc: "The market dynamics of the real estate sector are changing rapidly and so does customer preference. Reach more clients effectively." },
  { title: "Professional Service", image: "/image 1.png", desc: "Professional service is a high-demand sector with a strong growth potential. Optimize your online presence to gain more leads." }
];

export default function ServiceDetailClient({ data }) {
  const { openForm } = useCtaForm();
  const [openAccordion, setOpenAccordion] = useState(null);
  const [currentIndustry, setCurrentIndustry] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const nextIndustry = () => {
    setCurrentIndustry((prev) => (prev === industryCards.length - 2 ? 0 : prev + 1));
  };

  const prevIndustry = () => {
    setCurrentIndustry((prev) => (prev === 0 ? industryCards.length - 2 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndustry((prev) => (prev >= industryCards.length - 2 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#020205] pb-0 font-sans">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#020205_22%,#010103_48%,#000000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_16%,rgba(86,126,255,0.16),rgba(0,0,0,0)_18%),radial-gradient(circle_at_96%_14%,rgba(120,96,255,0.18),rgba(0,0,0,0)_18%),radial-gradient(circle_at_3%_48%,rgba(72,118,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_97%_54%,rgba(126,84,255,0.15),rgba(0,0,0,0)_18%)]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[100vh] min-h-[600px] flex items-center pt-24 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage || "/serviceswebsite development.png"}
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-lighten"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-[#020205]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-[#020205]/40" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-26 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6 leading-[1.1]">
              {data.title}
            </h1>
            <p className="text-[#a4a4af] text-[1.1rem] font-light leading-relaxed mb-10 max-w-xl">
              {data.intro}
            </p>
            <button
              onClick={() => openForm({ service: data.title })}
              className="group inline-flex items-center gap-3 border border-white bg-white px-8 py-3.5 font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white"
            >
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES ACCORDION SECTION */}
      <section className="w-full py-24 border-b border-white/5 relative">
        <div className="absolute left-[10%] top-[20%] w-96 h-96 bg-[#7b5cff]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-26 flex flex-col lg:flex-row gap-16 relative z-10">
          <div className="w-full lg:w-1/2">
            <div className="mb-12">
              <span className="text-[0.85rem] font-medium tracking-[0.2em] uppercase text-[#a4a4af]">Services</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mt-3 leading-[1.2]">
                Solutions That Drive Results
              </h2>
            </div>

            <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-square">
              {/* Top Image */}
              <div className="absolute top-0 left-0 w-[80%] aspect-video z-0">
                <Image
                  src={data.backCubeImage}
                  alt="Background Cube"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Bottom Image */}
              <div className="absolute bottom-[10%] right-0 w-[85%] aspect-video z-10">
                <Image
                  src={data.frontCubeImage}
                  alt="Foreground Cube"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex flex-col space-y-1">
              {data.capabilities.map((cap, index) => (
                <div key={index} className="border-b border-white/10">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-5 flex items-center justify-between text-left text-white/90 hover:text-white transition-colors"
                  >
                    <span className="text-xl font-light tracking-wide">{cap.title}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`transition-transform duration-300 ${openAccordion === index ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {openAccordion === index && (
                    <div className="pb-5 text-[#a4a4af] font-light text-[0.95rem] leading-relaxed animate-in slide-in-from-top-2 duration-300">
                      {cap.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLIENTS TICKER */}
      <section className="py-24 border-b border-white/5 overflow-hidden relative">
        <div className="text-center mb-16 px-6 relative z-10">
          <span className="text-[0.85rem] font-medium tracking-[0.2em] uppercase text-[#a4a4af]">Clients</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-4 leading-tight">
            Delivering Value Through Collaboration
          </h2>
        </div>
        <div className="relative w-full max-w-[1400px] mx-auto z-10">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020205] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020205] to-transparent z-20 pointer-events-none" />

          <div className="flex gap-16 w-max animate-auto-scroll items-center py-6 px-16">
            {[1, 2, 3, 4].map((group) => (
              <div key={group} className="flex gap-16 items-center flex-shrink-0">
                <div className="text-xl font-bold text-white/50 tracking-wider flex items-center gap-2"><div className="w-8 h-8 bg-white/20 rounded-full"></div>oliferamedia</div>
                <div className="text-2xl font-bold text-white/70">αñ╣αñ┐αñ«αñ╛αñ▓αñ» αñªαñ░αÑìαñ¬αñú</div>
                <div className="text-xl font-bold text-white/50 tracking-wider">Dhunseri</div>
                <div className="text-xl font-bold text-white/50 tracking-wider flex items-center gap-2"><div className="w-6 h-6 border-2 border-white/50 rounded-sm transform rotate-45"></div>Farz Academy</div>
                <div className="text-3xl font-black text-white/70 tracking-tighter">JPNR</div>
                <div className="text-xl font-bold text-white/50 tracking-wider flex items-center gap-2"><div className="w-8 h-8 border border-white/50 rounded-full flex items-center justify-center text-xs">REI</div>RENUKA EYE INSTITUTE</div>
                <div className="text-2xl font-light text-white/60 tracking-widest uppercase">Mangal Materials</div>
                <div className="text-xl font-bold text-white/50 tracking-wider flex items-center gap-2"><div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm"></div>TotoJan</div>
                <div className="text-xl font-serif italic text-white/60">Apex Ventures</div>
                <div className="text-2xl font-bold text-white/70 tracking-tighter flex items-center gap-1">Tech<span className="text-white/30 font-light">Global</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES CAROUSEL */}
      <section className="py-24 border-b border-white/5 relative">
        <div className="absolute right-[5%] top-[10%] w-80 h-80 bg-[#4828b8]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-26 mb-12 relative z-10">
          <span className="text-[0.85rem] font-medium tracking-[0.2em] uppercase text-[#a4a4af]">Industries</span>
          <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-4xl md:text-5xl font-light text-transparent mt-3 leading-[1.2] max-w-2xl">
            Empowering Diverse Industries With Integrated Marketing Solutions
          </h2>
        </div>

        {/* Horizontal Moving Carousel */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-26 relative z-10 overflow-hidden">
          <div className="relative group">
            {/* Cards Container */}
            <div
              className="flex gap-6 transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(calc(-${currentIndustry * 50}% - ${currentIndustry * 12}px))` }}
            >
              {industryCards.map((card, index) => (
                <div key={index} className="w-full lg:w-[calc(50%-12px)] flex-shrink-0 bg-white/[0.03] border border-white/10 flex flex-row rounded-none overflow-hidden hover:border-white/20 transition-colors">
                  {/* Text Left */}
                  <div className="w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-light text-white mb-6">{card.title}</h3>
                    <p className="text-[#a492ff] text-[0.95rem] leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                  {/* Image Right */}
                  <div className="w-1/2 relative flex items-center justify-center p-4">
                    <div className="relative w-full h-full min-h-[250px]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevIndustry}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-white hover:text-white/70 transition-all z-20 opacity-0 group-hover:opacity-100 px-4"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={nextIndustry}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-white hover:text-white/70 transition-all z-20 opacity-0 group-hover:opacity-100 px-4"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* 4.5 BENCHMARKS OF EXCELLENCE */}
      <section className="py-24 border-b border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-26 relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Benchmarks of Excellence
          </h2>
          <p className="text-[#a4a4af] text-[0.95rem] max-w-xl mb-16 leading-relaxed">
            From seamless integration to robust infrastructure, we are dedicated to setting new benchmarks of excellence in the industry.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center mt-12">
            {[
              "/aws-cloud-quest-cloud-practitioner-training-badge.png",
              "/aws-partner-sales-accreditation-training-badge.png",
              "/aws-knowledge-security-champion-training-badge.png",
              "/aws-partner-public-sector-for-sellers-business.png"
            ].map((src, idx) => (
              <div key={idx} className="relative w-full aspect-[4/5] max-w-[200px] hover:-translate-y-2 transition-transform duration-500">
                <Image
                  src={src}
                  alt={`Benchmark Badge ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMPORTANCE SECTION */}
      <section className="py-24 bg-[#010103] relative border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-26">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-20 text-left">
            Importance of {data.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            <div className="absolute top-[8px] left-0 right-0 h-[1px] bg-white/10 hidden lg:block z-0" />
            {data.process.map((step, index) => (
              <div key={index} className="flex flex-col relative z-10 pt-4 lg:pt-0">
                <div className="w-4 h-4 bg-white rounded-full mb-8 lg:mt-0 lg:-translate-y-[7.5px] border-[3px] border-[#010103] shadow-[0_0_0_1px_rgba(255,255,255,0.2)]" />
                <h3 className="text-6xl text-transparent bg-clip-text bg-white/10 font-black tracking-tighter mb-4" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                  {numberWords[index] || `0${index + 1}`}
                </h3>
                <h4 className="text-xl font-light text-white mb-4 leading-snug">
                  {step.phase}
                </h4>
                <p className="text-[#a4a4af] text-[0.9rem] leading-[1.6] font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
