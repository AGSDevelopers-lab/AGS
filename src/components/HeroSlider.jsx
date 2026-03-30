"use client";

import { useState, useEffect } from "react";
import { useCtaForm } from "@/components/CtaFormProvider";

const slides = [
  {
    id: 1,
    image: "/banner-1.png",
    title: "Creative Solutions That Drive Growth",
    subtitle: "From concept to conversion.",
    cta: "Get Started",
  },
  {
    id: 2,
    image: "/banner-2.png",
    title: "Digital Growth  for Healthcare Brands",
    subtitle:
      "Helping hospitals and clinics grow online and attract more patients.",
    cta: "Get Free Consultation",
  },
  {
    id: 3,
    image: "/banner-3.png",
    title: "Digital Solutions for Media & News Platforms",
    subtitle:
      "We help media brands build fast, scalable platforms to grow their audience.",
    cta: "Grow Your Platform",
  },
  {
    id: 4,
    image: "/banner-4.png",
    title: "eCommerce Solutions for Growing Brands",
    subtitle: "High-converting stores that drive sales.",
    cta: "Start Your Online Store",
  },
  {
    id: 5,
    image: "/banner-5.png",
    title: "Scalable Business Cloud Solutions",
    subtitle: "Build faster and scale smarter with cloud technology.",
    cta: "Get Cloud Consultation",
  },
  {
    id: 6,
    image: "/banner-6.png",
    title: "Refined Solutions for eLearning Brands",
    subtitle: "Build and scale your online learning platform faster.",
    cta: "Build Your eLearning Platform",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openForm } = useCtaForm();
  const activeSlide = slides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 mix-blend-screen"
            style={{ backgroundImage: "url(/overlay.png)" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,24,0.92)_0%,rgba(18,18,42,0.82)_28%,rgba(18,18,42,0.34)_48%,rgba(18,18,42,0.08)_68%,rgba(18,18,42,0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,16,0.14)_0%,rgba(6,7,16,0.28)_100%)]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="w-full mt-20 max-w-[800px] md:w-3/5 lg:max-w-[760px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] tracking-wide">
            {activeSlide.title}
          </h1>
          <p className="text-lg md:text-lg text-white/90 mb-10 font-thin">
            {activeSlide.subtitle}
          </p>
          <button
            type="button"
            className="flex items-center space-x-3 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-white/90 transition-all"
            onClick={() => openForm()}
          >
            <span>{activeSlide.cta}</span>
            <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </button>
        </div>
      </div>

    </section>
  );
}
