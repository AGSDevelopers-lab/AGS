"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCtaForm } from "@/components/CtaFormProvider";

const heroSlides = [
  {
    id: 1,
    type: "lynkbeats",
    isProductHero: true,
    badge: "NOW FEATURING",
    bgImage: "/AGS Landing Page Images/LynkBeats Tablet on Abstract Gradient.png",
    alt: "LynkBeats - Editorial Intelligence Platform",
    title: "LynkBeats",
    subtitleLine1: "is here.",
    descriptionLine1: "Track story performance and editorial KPIs in real time.",
    descriptionLine2: "Empower your newsroom with real-time editorial intelligence.",
    features: [
      "Real-time story tracking",
      "Editorial KPI benchmarking",
      "Traffic source analysis",
      "AI audience intelligence",
    ],
    buttonText: "Get Started",
    href: "/products/lynkbeats",
  },
  {
    id: 2,
    type: "vidlens",
    isProductHero: true,
    badge: "NOW FEATURING",
    bgImage: "/AGS Landing Page Images/VidLens Laptop on a Futuristic Gradient.png",
    alt: "VidLens - Video Intelligence That Drives Results",
    title: "VidLens",
    subtitleLine1: "is here.",
    descriptionLine1: "Paste any channel. See why videos win and grow.",
    descriptionLine2: "Scale your audience with AI-powered video analytics.",
    features: [
      "Views & growth tracking",
      "Competitor benchmarking",
      "Keyword discovery",
      "AI-powered insights",
    ],
    buttonText: "Get Started",
    href: "/products/vidlens",
  },
  {
    id: 3,
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
    href: "/aws-partner",
  },
  {
    id: 4,
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
    id: 5,
    type: "creative",
    bgImage: "/image3.png",
    alt: "Creative Solutions That Drive Growth",
    titleLine1: "Creative Solutions That",
    titleLine2: "Drive Growth",
    subtitle: "From concept to conversion.",
    buttonText: "Get Started",
  },
  {
    id: 6,
    type: "healthcare",
    bgImage: "/image4.png",
    alt: "Healthcare Through Innovation",
    titleLine1: "Healthcare Through",
    titleLine2: "Innovation",
    subtitle: "Helping hospitals and clinics grow online and attract more patients.",
    buttonText: "Explore",
  },
  {
    id: 7,
    type: "media",
    bgImage: "/image5.png",
    alt: "Digital Solutions for Media & News Platforms",
    titleLine1: "Digital Solutions for Media",
    titleLine2: "& News Platforms",
    subtitle: "We help media brands build fast, scalable platforms to grow their audience.",
    buttonText: "Explore News",
  },
  {
    id: 8,
    type: "ecommerce",
    bgImage: "/Perfect-Credit-Card-for-Your-Lifestyle-Feature.jpg.jpeg",
    alt: "eCommerce Solutions for Growing Brands",
    titleLine1: "eCommerce Solutions",
    titleLine2: "for Growing Brands",
    subtitle: "High-converting stores that drive sales.",
    buttonText: "Get Started",
  },
  {
    id: 9,
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
  const [isPaused, setIsPaused] = useState(false);
  const { openForm } = useCtaForm();

  const totalSlides = heroSlides.length;

  const handlePrev = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8500);

    return () => clearInterval(timer);
  }, [currentSlide, totalSlides, isPaused]);

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="group relative z-10 w-full min-h-[520px] sm:min-h-[640px] lg:min-h-[680px] h-[100dvh] max-h-[1200px] overflow-hidden bg-[#07051A]"
    >
      {/* Hidden eager preloader for all slide images to guarantee zero-latency switching */}
      <div className="hidden" aria-hidden="true">
        {heroSlides.map((s) => (
          <img key={s.id} src={s.bgImage} alt="" fetchPriority="high" loading="eager" />
        ))}
      </div>

      {/* Background Slides */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-200 ease-out will-change-[opacity] ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.bgImage}
              alt={slide.alt}
              fill
              priority
              unoptimized
              sizes="100vw"
              className={`object-cover ${
                slide.isProductHero ? "object-right sm:object-center lg:object-right" : "object-center"
              }`}
            />
            {/* Scrim: Product slides get dedicated mobile scrim to guarantee high contrast over bright laptop/tablet screen */}
            {!slide.isProductHero ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
                <div className="absolute inset-0 bg-black/15" />
              </>
            ) : (
              <>
                {/* Mobile: Full-coverage dark scrim + vertical gradient so bright screen elements never clash with text */}
                <div className="absolute inset-0 bg-[#07051A]/70 sm:hidden" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#07051A]/85 via-transparent to-[#07051A]/90 sm:hidden" />

                {/* Desktop: Gentle left-to-right gradient so laptop/tablet stays vibrant on the right side */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#07051A]/90 via-[#07051A]/40 to-transparent" />
              </>
            )}
          </div>
        );
      })}

      {/* Foreground Content Container — Vertically centered matching design layout */}
      <div className="relative z-20 mx-auto flex h-full max-w-[1680px] 2xl:max-w-[1780px] flex-col justify-center px-4 sm:px-12 lg:px-20 2xl:px-24 pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-12">
        <div className="relative w-full max-w-[850px] lg:max-w-[940px] 2xl:max-w-[1020px] min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] flex items-center">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                className={`absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-start justify-center transition-all duration-200 ease-out will-change-[opacity,transform] ${
                  isActive
                    ? "opacity-100 translate-y-[-50%] pointer-events-auto z-10"
                    : "opacity-0 translate-y-[-48%] pointer-events-none z-0"
                }`}
              >
                {/* Badge: Yellow glowing dot + LAUNCHING SOON for products / slim box for partnership */}
                {slide.isProductHero ? (
                  <div className="mb-4 sm:mb-6 w-fit self-start">
                    <div className="inline-flex items-center gap-2 border border-white/20 bg-black/40 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-medium tracking-[0.1em] text-white uppercase rounded-none">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: "#EED616",
                          boxShadow: "0 0 10px #EED616",
                        }}
                      />
                      <span>{slide.badge}</span>
                    </div>
                  </div>
                ) : slide.badge ? (
                  <div className="mb-4 sm:mb-6 w-fit self-start">
                    <div className="border border-white/40 bg-black/40 backdrop-blur-sm px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-normal tracking-wide text-white/90 rounded-none">
                      {slide.badge}
                    </div>
                  </div>
                ) : null}

                {/* SLIDE 1: AWS Specific Layout */}
                {slide.type === "aws" && (
                  <div className="space-y-2 sm:space-y-3.5 lg:space-y-4">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-normal tracking-tight leading-[1.12]">
                      <span className="text-[#9B86EB]">Proud </span>
                      <span className="text-white">to be an</span>
                    </h1>

                    <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-wrap">
                      <div className="relative h-8 xs:h-9 sm:h-11 md:h-13 lg:h-16 aspect-[72/44] shrink-0">
                        <Image
                          src="/aws-tight.png"
                          alt="aws"
                          fill
                          sizes="(max-width: 640px) 72px, (max-width: 1024px) 115px, 140px"
                          className="object-contain object-left"
                          priority
                        />
                      </div>
                      <span className="font-serif italic text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[72px] text-[#22D3EE] leading-none">
                        Partner
                      </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3.5 md:gap-4 flex-wrap text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-medium leading-tight pt-0.5 sm:pt-1">
                      <span className="text-[#9B86EB]">In association with</span>
                      <div className="relative h-6 xs:h-7 sm:h-9 md:h-10 lg:h-[44px] xl:h-[48px] aspect-[941/270] shrink-0">
                        <Image
                          src="/redington-tight.png"
                          alt="Redington"
                          fill
                          priority
                          sizes="(max-width: 640px) 120px, (max-width: 1024px) 170px, 200px"
                          className="object-contain object-left"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* SLIDE 2: Google Cloud Specific Layout */}
                {slide.type === "google" && (
                  <div className="space-y-2 sm:space-y-3.5 lg:space-y-4">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-normal tracking-tight leading-[1.12]">
                      <span className="text-[#9B86EB]">Proud </span>
                      <span className="text-white">to be an</span>
                    </h1>

                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-medium tracking-tight leading-[1.15]">
                      <span>
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                      </span>
                      <span className="text-white ml-2.5 sm:ml-3">Cloud</span>
                    </div>

                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-medium text-white tracking-tight leading-[1.15]">
                      Member
                    </div>
                  </div>
                )}

                {/* PRODUCT SLIDES: VidLens & LynkBeats matching design exactly */}
                {slide.isProductHero && (
                  <div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[84px] font-normal tracking-tight text-white leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                      {slide.title}
                    </h1>
                    <p className="mt-2.5 sm:mt-3.5 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal tracking-tight text-[#C4B5FD] sm:text-[#9B86EB] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                      {slide.subtitleLine1}
                    </p>
                  </div>
                )}

                {/* OTHER SLIDES: General Industry Headlines */}
                {slide.type !== "aws" && slide.type !== "google" && !slide.isProductHero && (
                  <div className="space-y-1 sm:space-y-1.5">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-normal tracking-tight leading-[1.12]">
                      <span className="block text-[#9B86EB]">
                        {slide.titleLine1}
                      </span>
                      <span className="block text-white">
                        {slide.titleLine2}
                      </span>
                    </h1>
                  </div>
                )}

                {/* Subtitle / Description */}
                {slide.isProductHero ? (
                  <div className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-white/95 sm:text-white/85 font-normal leading-relaxed max-w-[560px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                    <p>{slide.descriptionLine1}</p>
                    <p>{slide.descriptionLine2}</p>
                  </div>
                ) : (
                  <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-white/80 font-normal leading-relaxed max-w-[640px]">
                    {slide.subtitle}
                  </p>
                )}

                {/* 4 Feature Bullet Items for Product Slides */}
                {slide.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-5 sm:mt-6 text-xs sm:text-sm text-white font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                    {slide.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5">
                        <span className="text-[#C4B5FD] sm:text-[#9B86EB] font-bold text-base select-none">|</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <div className="mt-7 sm:mt-8">
                  {slide.href ? (
                    <Link
                      href={slide.href}
                      className="group inline-flex items-center gap-3.5 rounded-none bg-white px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-[1.01] shrink-0 whitespace-nowrap cursor-pointer shadow-lg"
                    >
                      <span>{slide.buttonText || "Know more"}</span>
                      <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center shrink-0 rounded-full border border-black/70 text-black transition-transform duration-300 group-hover:rotate-45">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                          <path d="M7 17L17 7H7M17 7V17" />
                        </svg>
                      </span>
                    </Link>
                  ) : (
                    <button
                      suppressHydrationWarning
                      type="button"
                      onClick={() => openForm()}
                      className="group inline-flex items-center gap-3.5 rounded-none bg-white px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-[1.01] shrink-0 whitespace-nowrap cursor-pointer shadow-lg"
                    >
                      <span>{slide.buttonText || "Get Started"}</span>
                      <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center shrink-0 rounded-full border border-black/70 text-black transition-transform duration-300 group-hover:rotate-45">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                          <path d="M7 17L17 7H7M17 7V17" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Bottom-Right Arrow Navigation Controls (Revealed only on hover) */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 lg:bottom-10 lg:right-16 z-40 flex items-center gap-2.5 sm:gap-3 opacity-0 translate-y-2 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
        {/* Previous Slide Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md shadow-xl transition-all duration-200 hover:bg-white hover:text-black hover:border-white active:scale-90 active:opacity-80 cursor-pointer select-none"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 pointer-events-none"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Next Slide Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md shadow-xl transition-all duration-200 hover:bg-white hover:text-black hover:border-white active:scale-90 active:opacity-80 cursor-pointer select-none"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 pointer-events-none"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

