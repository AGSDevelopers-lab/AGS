"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AdCube() {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev - 90);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const faces = [
    {
      id: "front",
      image: "/ad1.png",
      href: "/academy-ai-projects",
      title: "AI Projects Certification",
      transform: "rotateY(0deg) translateZ(300px)",
    },
    {
      id: "right",
      image: "/ad2.png",
      href: "/academy-ai-engineer",
      title: "AI Engineer Mastermind",
      transform: "rotateY(90deg) translateZ(300px)",
    },
    {
      id: "back",
      image: "/ad3.png",
      href: "/academy-ai-ml",
      title: "AI & ML Career Program",
      transform: "rotateY(180deg) translateZ(300px)",
    },
    {
      id: "left",
      image: "/ad1.png", // Repeat ad1 for 4th face to complete cube
      href: "/academy-ai-projects",
      title: "AI Projects Certification",
      transform: "rotateY(-90deg) translateZ(300px)",
    },
  ];

  const getActiveIndex = () => {
    // Rotation goes negative. 0 = front, -90 = right, -180 = back, -270 = left, -360 = front...
    const normalized = Math.abs(rotation / 90) % 4;
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Scale wrapper for responsiveness */}
        <div className="scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 transition-transform duration-500 origin-center h-[315px] w-[600px]">
          
          <div 
            className="w-full h-full relative transform-style-3d transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ 
              transform: `rotateY(${rotation}deg)`,
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
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#7B5CFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                      View Program <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
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
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setRotation(-(index * 90))}
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
