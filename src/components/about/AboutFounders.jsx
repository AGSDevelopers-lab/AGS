"use client";

import { useState } from "react";
import Image from "next/image";

const founders = [
  {
    name: "Tushar De",
    role: "Director, CEO",
    bio: "Executes workflows on the ground, while driving the overall vision across the market.",
    image: "/ags about page/Tushar de.png",
    linkedin: "https://www.linkedin.com/in/0xtd",
    twitter: "https://x.com/",
    email: "mailto:contact@amrutglobalsolutions.com",
  },
  {
    name: "Sharmistha Chatterjee",
    role: "Director, COO",
    bio: "Executes workflows on the ground, while scaling them across the company.",
    image: "/ags about page/Sharmistha chatterjee.png",
    linkedin: "https://www.linkedin.com/in/c-sharmistha/",
    twitter: "https://x.com/",
    email: "mailto:contact@amrutglobalsolutions.com",
  },
];

export default function AboutFounders() {
  const [activeTouchIndex, setActiveTouchIndex] = useState(null);

  const toggleTouch = (index) => {
    setActiveTouchIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 overflow-hidden">
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        {/* Centered Heading & Subheading */}
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-normal tracking-tight text-[#101015]">
            Our <span className="text-[#6040FF]">Founders & Directors</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#656B7A] tracking-wide uppercase font-medium">
            Guiding Our Vision And Shaping The Future Of Digital Innovation
          </p>
        </div>

        {/* 2 Large Side-by-Side Landscape Portrait Cards */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {founders.map((founder, index) => {
            const isTouchActive = activeTouchIndex === index;

            return (
              <div
                key={founder.name}
                onClick={() => toggleTouch(index)}
                className="group relative w-full aspect-[1.38/1] sm:aspect-[1.39/1] overflow-hidden rounded-[2px] bg-[#E8E8ED] shadow-sm cursor-pointer select-none"
              >
                  {/* Portrait Photograph (Default Grayscale, Color on Hover) */}
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover object-top transition-all duration-700 ease-out ${
                      isTouchActive
                        ? "grayscale-0 scale-105"
                        : "grayscale group-hover:grayscale-0 group-hover:scale-105"
                    }`}
                  />

                  {/* Gradient Overlay (Fades/rises from bottom on hover) */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#0E0F1D]/95 via-[#1A123D]/80 to-transparent transition-opacity duration-500 ease-out flex flex-col justify-end p-6 sm:p-8 ${
                      isTouchActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {/* Content Block */}
                    <div className="transform transition-transform duration-500 ease-out translate-y-3 group-hover:translate-y-0">
                      <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                        {founder.name}
                      </h3>

                      <p className="mt-1 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#A28FFF]">
                        {founder.role}
                      </p>

                      <p className="mt-2.5 text-xs sm:text-[13px] text-white/80 leading-relaxed max-w-[92%]">
                        {founder.bio}
                      </p>

                      {/* Social/Contact Icons */}
                      <div className="mt-4 flex items-center gap-3">
                        {/* Twitter/X */}
                        <a
                          href={founder.twitter}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${founder.name} on X`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 hover:bg-white hover:text-black hover:border-white transition-all duration-200"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${founder.name} on LinkedIn`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 hover:bg-white hover:text-[#0A66C2] hover:border-white transition-all duration-200"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>

                        {/* Email */}
                        <a
                          href={founder.email}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Email ${founder.name}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 hover:bg-white hover:text-[#6040FF] hover:border-white transition-all duration-200"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
