"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCtaForm } from "@/components/CtaFormProvider";

const heroSlides = [
  {
    id: 1,
    type: "aws",
    badge: "Official Partnership Announcement",
    bgImage: "/image1.png",
    alt: "AWS Cloud Infrastructure",
    subtitle: (
      <>
        Building Smarter. Scaling Faster. On{" "}
        <span className="font-semibold text-[#FF9900]">AWS.</span>
      </>
    ),
    buttonText: "Know more",
  },
  {
    id: 2,
    type: "google",
    badge: "Official Partnership Announcement",
    bgImage: "/image2.png",
    alt: "Google Cloud Ecosystem",
    subtitle: (
      <>
        Building Smarter. Scaling Faster.{" "}
        <span className="font-semibold text-[#FBBC05]">Together.</span>
      </>
    ),
    buttonText: "Know more",
  },
  {
    id: 3,
    type: "creative",
    bgImage: "/image3.png",
    alt: "Creative Solutions That Drive Growth",
    titleLine1: "Creative Solutions That",
    titleLine2: "Drive Growth",
    subtitle: "From concept to conversion.",
    buttonText: "Get Started",
  },
  {
    id: 4,
    type: "healthcare",
    bgImage: "/image4.png",
    alt: "Healthcare Through Innovation",
    titleLine1: "Healthcare Through",
    titleLine2: "Innovation",
    subtitle: "Helping hospitals and clinics grow online and attract more patients.",
    buttonText: "Explore",
  },
  {
    id: 5,
    type: "media",
    bgImage: "/image5.png",
    alt: "Digital Solutions for Media & News Platforms",
    titleLine1: "Digital Solutions for Media",
    titleLine2: "& News Platforms",
    subtitle: "We help media brands build fast, scalable platforms to grow their audience.",
    buttonText: "Explore News",
  },
  {
    id: 6,
    type: "ecommerce",
    bgImage: "/image6.png",
    alt: "eCommerce Solutions for Growing Brands",
    titleLine1: "eCommerce Solutions",
    titleLine2: "for Growing Brands",
    subtitle: "High-converting stores that drive sales.",
    buttonText: "Get Started",
  },
  {
    id: 7,
    type: "elearning",
    bgImage: "/image7.png",
    alt: "Refined Solutions for eLearning Brands",
    titleLine1: "Refined Solutions for",
    titleLine2: "eLearning Brands",
    subtitle: "Build and scale your online learning platform faster.",
    buttonText: "Get Started",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openForm } = useCtaForm();

  const totalSlides = heroSlides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section
      id="home"
      className="relative z-10 w-full min-h-[820px] lg:min-h-[900px] h-screen max-h-[1200px] overflow-hidden bg-[#07051A]"
    >
      {/* Background Slides */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.bgImage}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Left Scrim & Vignette for Perfect Figma Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        );
      })}

      {/* Foreground Content Container — Positioned at lower-left matching Figma */}
      <div className="relative z-20 mx-auto flex h-full max-w-[1680px] 2xl:max-w-[1780px] flex-col justify-end px-6 sm:px-12 lg:px-20 2xl:px-24 pb-16 sm:pb-20 lg:pb-24 xl:pb-28">
        <div className="relative w-full max-w-[850px] lg:max-w-[940px] 2xl:max-w-[1020px] min-h-[440px] sm:min-h-[500px] lg:min-h-[560px]">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                className={`absolute inset-x-0 bottom-0 flex flex-col items-start justify-end transition-all duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                    : "opacity-0 translate-y-4 pointer-events-none z-0"
                }`}
              >
                {/* Compact Partnership Badge matching Figma */}
                {slide.badge && (
                  <div className="mb-6 w-fit self-start">
                    <div className="border border-white/40 bg-black/40 backdrop-blur-sm px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-normal tracking-wide text-white/90 rounded-[2px]">
                      {slide.badge}
                    </div>
                  </div>
                )}

                {/* SLIDE 1: AWS Specific Layout */}
                {slide.type === "aws" && (
                  <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-normal tracking-tight leading-[1.08]">
                      <span className="text-[#9B86EB]">Proud </span>
                      <span className="text-white">to be an</span>
                    </h1>

                    <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                      <div className="relative h-12 sm:h-16 md:h-18 lg:h-20 w-36 sm:w-48 md:w-56 lg:w-64 shrink-0">
                        <Image
                          src="/aws.png"
                          alt="aws"
                          fill
                          sizes="(max-width: 640px) 144px, (max-width: 1024px) 224px, 256px"
                          className="object-contain object-left"
                          priority
                        />
                      </div>
                      <span className="font-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-[88px] text-[#22D3EE] leading-none">
                        Partner
                      </span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 md:gap-5 flex-wrap text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium leading-tight pt-1 sm:pt-2">
                      <span className="text-[#9B86EB]">In assosiation with</span>
                      <div className="relative h-7 sm:h-9 md:h-11 lg:h-[52px] aspect-[1171/719] shrink-0">
                        <Image
                          src="/redington-full-logo.png"
                          alt="Redington"
                          fill
                          priority
                          sizes="(max-width: 640px) 50px, (max-width: 1024px) 80px, 100px"
                          className="object-contain object-left"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* SLIDE 2: Google Cloud Specific Layout */}
                {slide.type === "google" && (
                  <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-normal tracking-tight leading-[1.08]">
                      <span className="text-[#9B86EB]">Proud </span>
                      <span className="text-white">to be an</span>
                    </h1>

                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-medium tracking-tight leading-[1.12]">
                      <span>
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                      </span>
                      <span className="text-white ml-3 sm:ml-4">Cloud</span>
                    </div>

                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-medium text-white tracking-tight leading-[1.12]">
                      Member
                    </div>
                  </div>
                )}

                {/* SLIDES 3-7: General Industry Headlines */}
                {slide.type !== "aws" && slide.type !== "google" && (
                  <div className="space-y-1 sm:space-y-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-normal tracking-tight leading-[1.08] sm:leading-[1.1]">
                      <span className="block text-[#9B86EB]">
                        {slide.titleLine1}
                      </span>
                      <span className="block text-white">
                        {slide.titleLine2}
                      </span>
                    </h1>
                  </div>
                )}

                {/* Subtitle */}
                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-[18px] text-white/80 font-normal leading-relaxed max-w-[680px]">
                  {slide.subtitle}
                </p>

                {/* Prominent CTA Button matching Figma exactly */}
                <div className="mt-7 sm:mt-8">
                  <button
                    type="button"
                    onClick={() => openForm()}
                    className="group inline-flex items-center gap-3.5 rounded-[2px] bg-white px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-[1.01]"
                  >
                    <span>{slide.buttonText}</span>
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border border-black/70 text-black transition-transform duration-300 group-hover:rotate-45">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

