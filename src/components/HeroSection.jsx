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
    type: "vidlens",
    isProductHero: true,
    badge: "LAUNCHING SOON",
    bgImage: "/AGS Landing Page Images/VidLens Laptop on a Futuristic Gradient.png",
    alt: "VidLens - Video Intelligence That Drives Results",
    title: "VidLens",
    subtitleLine1: "is almost here.",
    descriptionLine1: "Paste any channel. See why videos win and grow.",
    descriptionLine2: "Get early access when we launch.",
    features: [
      "Views & growth tracking",
      "Competitor benchmarking",
      "Keyword discovery",
      "AI-powered insights",
    ],
    isWaitlist: true,
  },
  {
    id: 4,
    type: "lynkbeats",
    isProductHero: true,
    badge: "LAUNCHING SOON",
    bgImage: "/AGS Landing Page Images/LynkBeats Tablet on Abstract Gradient.png",
    alt: "LynkBeats - Editorial Intelligence Platform",
    title: "LynkBeats",
    subtitleLine1: "is almost here.",
    descriptionLine1: "Track story performance and editorial KPIs in real time.",
    descriptionLine2: "Get early access when we launch.",
    features: [
      "Real-time story tracking",
      "Editorial KPI benchmarking",
      "Traffic source analysis",
      "AI audience intelligence",
    ],
    isWaitlist: true,
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
    bgImage: "/image6.png",
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
  const [emailInputs, setEmailInputs] = useState({});
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
      className="relative z-10 w-full min-h-[520px] sm:min-h-[640px] lg:min-h-[680px] h-[100dvh] max-h-[1200px] overflow-hidden bg-[#07051A]"
    >
      {/* Background Slides */}
      {heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto visible" : "opacity-0 z-0 pointer-events-none invisible"
            }`}
          >
            <Image
              src={slide.bgImage}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover ${
                slide.isProductHero ? "object-right sm:object-center lg:object-right" : "object-center"
              }`}
            />
            {/* Scrim only for non-product slides (product slides already have rich gradient & dark left side per design) */}
            {!slide.isProductHero ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
                <div className="absolute inset-0 bg-black/15" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-r from-[#07051A]/85 via-[#07051A]/40 to-transparent sm:hidden" />
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
                className={`absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-start justify-center transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-y-[-50%] pointer-events-auto z-10 visible"
                    : "opacity-0 translate-y-[-46%] pointer-events-none z-0 invisible"
                }`}
              >
                {/* Badge: Yellow glowing dot + LAUNCHING SOON for products / slim box for partnership */}
                {slide.isProductHero ? (
                  <div className="mb-4 sm:mb-6 w-fit self-start">
                    <div className="inline-flex items-center gap-2 border border-white/20 bg-black/40 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-medium tracking-[0.1em] text-white uppercase rounded-[2px]">
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
                    <div className="border border-white/40 bg-black/40 backdrop-blur-sm px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-normal tracking-wide text-white/90 rounded-[2px]">
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
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[84px] font-normal tracking-tight text-white leading-none">
                      {slide.title}
                    </h1>
                    <p className="mt-2.5 sm:mt-3.5 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal tracking-tight text-[#9B86EB] leading-tight">
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
                  <div className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-white/85 font-normal leading-relaxed max-w-[560px]">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-5 sm:mt-6 text-xs sm:text-sm text-white/90 font-normal">
                    {slide.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5">
                        <span className="text-[#9B86EB] font-light text-base select-none">|</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Form: 2 Separate Boxes for Waitlist vs Standard Button */}
                {slide.isWaitlist ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      openForm({ email: emailInputs[slide.id] || "" });
                    }}
                    className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-[560px]"
                  >
                    {/* Box 1: Email Input */}
                    <input
                      type="email"
                      placeholder="Your work email"
                      value={emailInputs[slide.id] || ""}
                      onChange={(e) =>
                        setEmailInputs({ ...emailInputs, [slide.id]: e.target.value })
                      }
                      className="w-full sm:w-[220px] md:w-[240px] bg-black/40 border border-white/30 px-4 py-3 text-sm text-white placeholder-white/50 outline-none rounded-[2px] transition-colors focus:border-white/70 font-normal"
                    />

                    {/* Box 2: Button */}
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 bg-white px-5 sm:px-6 py-3 text-sm font-medium text-black rounded-[2px] transition-all duration-300 hover:bg-white/90 hover:scale-[1.01] shrink-0 cursor-pointer"
                    >
                      <span>Notify me at launch</span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/80 text-black transition-transform duration-300 group-hover:rotate-45">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </span>
                    </button>
                  </form>
                ) : (
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

