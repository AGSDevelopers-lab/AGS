"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function AdCube() {
  const [rotation, setRotation] = useState(0);
  // Auto-rotation removed as requested

  const faces = [
    {
      id: "front",
      image: "/ad 2.png",
      href: "/academy-ai-projects",
      title: "AI Projects Certification",
      transform: "rotateY(0deg) translateZ(173px)",
    },
    {
      id: "right",
      image: "/ad 1.png",
      href: "/academy-ai-engineer",
      title: "AI Engineer Mastermind",
      transform: "rotateY(120deg) translateZ(173px)",
    },
    {
      id: "left",
      image: "/ad 3.png",
      href: "/academy-ai-ml",
      title: "AI & ML Career Program",
      transform: "rotateY(240deg) translateZ(173px)",
    },
  ];

  const getActiveIndex = () => {
    // Rotation goes negative. 0 = front, -120 = right, -240 = back...
    const normalized = Math.round(Math.abs(rotation / 120)) % 3;
    return normalized;
  };
  
  const activeFace = faces[getActiveIndex()];

  return (
    <section className="py-24 bg-[#05070D] relative overflow-hidden flex flex-col items-center">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B5CFF]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 w-full text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-[#7B5CFF]" />
          <span className="text-white/80 text-sm font-medium tracking-wide">Accelerate Your AI Career</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Choose Your Path to <span className="text-[#9D7AFF]">Mastery</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Explore our specialized programs designed to take you from foundational knowledge to building production-ready AI systems on AWS.
        </p>
      </div>

      {/* 3D Cube Container */}
      <div 
        className="relative z-10 perspective-[1500px] w-full flex justify-center mb-16"
      >
        {/* Scale wrapper for responsiveness */}
        <div className="scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 transition-transform duration-500 origin-center h-[315px] w-[600px]">
          
          <div 
            className="w-full h-full relative transform-style-3d transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ 
              transform: `translateZ(127px) rotateY(${rotation}deg)`,
              transformStyle: "preserve-3d" 
            }}
          >
            {faces.map((face, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(123,92,255,0.2)] backface-hidden"
                style={{ 
                  transform: face.transform,
                  backfaceVisibility: "hidden" // Prevents flickering
                }}
              >
                <Link href={face.href} className="block w-full h-full group relative cursor-pointer">
                  <Image
                    src={face.image}
                    alt={face.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-transparent opacity-80" />
                  
                  {/* Hover Overlay Removed as requested */}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Manual Navigation Buttons */}
      <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-20">
        <button
          onClick={() => setRotation((prev) => prev + 120)}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-20">
        <button
          onClick={() => setRotation((prev) => prev - 120)}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Seat Registration CTA */}
      <div className="relative z-10 bg-[#0D101E] border border-white/10 p-8 rounded-2xl max-w-3xl w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div>
          <h3 className="text-white font-bold text-xl mb-2">Ready to secure your spot?</h3>
          <p className="text-white/60 text-sm">Next batch starts soon. Explore {activeFace.title}.</p>
        </div>
        <Link 
          href={activeFace.href}
          className="bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-3.5 rounded-lg text-[14px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.3)] whitespace-nowrap"
        >
          Explore Program →
        </Link>
      </div>

      {/* Cube Navigation Dots */}
      <div className="flex justify-center gap-3 mt-12 relative z-10">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setRotation(-(index * 120))}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              getActiveIndex() === index 
                ? "bg-[#7B5CFF] w-8" 
                : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
