"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useCtaForm } from "@/components/CtaFormProvider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const products = [
  {
    id: "academix",
    name: "Academix",
    category: "Education",
    description: "Equip students with job-ready skills through hands-on project work and career placement prep.",
    image: "/products/academix.png",
    logo: "/products/logo-academyx.png",
  },
  {
    id: "lumina",
    name: "Lumina",
    category: "Education",
    description: "Streamline class management, lecture uploads, and student assessments on a unified LMS platform.",
    image: "/products/lumina.png",
    logo: "/products/logo-lumina.png",
  },
  {
    id: "stmet",
    name: "STmet",
    category: "Education",
    description: "Connect students and faculty with low-latency streaming and real-time collaboration tools.",
    image: "/products/stmet.png",
    logo: "/products/logo-stmet.png",
  },
  {
    id: "nexus",
    name: "Nexus",
    category: "Operations",
    description: "Automate employee onboarding, leave tracking, attendance, and payroll on one central platform.",
    image: "/products/nexus.png",
    logo: "/products/logo-nexus.png",
  },
  {
    id: "lynkbeats",
    name: "Lynkbeats",
    category: "Media",
    description: "Track real-time story performance and editorial KPIs to optimize newsroom coverage instantly.",
    image: "/products/lynkbeats.png",
    logo: "/products/logo-lynkbeats.png",
  },
  {
    id: "newsbuddies",
    name: "Newsbuddies",
    category: "Media",
    description: "Optimize headlines, regional metadata, and search visibility to drive organic news traffic.",
    image: "/products/newsbuddies.png",
    logo: "/products/logo-newsbuddies.png",
  },
  {
    id: "vidlens",
    name: "Vidlens",
    category: "Media",
    description: "Analyze competitor channels, track audience retention, and optimize video content strategy effortlessly.",
    image: "/products/vidlens.png",
    logo: "/products/logo-vidlens.png",
  },
];

export default function InnovativeProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const { openForm } = useCtaForm();

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, products.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (carouselContainerRef.current) {
        gsap.fromTo(
          carouselContainerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: carouselContainerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const getTransform = () => {
    if (visibleCount === 1) {
      return `translateX(calc(-${currentIndex} * (100% + 24px)))`;
    }
    if (visibleCount === 2) {
      return `translateX(calc(-${currentIndex} * ((100% - 24px) / 2 + 24px)))`;
    }
    return `translateX(calc(-${currentIndex} * ((100% - 64px) / 3 + 32px)))`;
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative z-10 w-full bg-[#08061E] py-24 sm:py-32 text-white overflow-hidden"
    >
      {/* Background radial ambient lights */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Centered Editorial Heading */}
        <div ref={headingRef} className="text-center max-w-5xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-bold tracking-tight text-white leading-[1.12]">
            <span className="block whitespace-nowrap">
              Powering Businesses With
            </span>
            <span className="block mt-2 sm:mt-3 whitespace-nowrap text-white">
              Innovative{" "}
              <span className="text-[#8B5CF6]">Digital Products</span>
            </span>
          </h2>
        </div>

        {/* Carousel Container with Side Navigation Arrows */}
        <div ref={carouselContainerRef} className="relative">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous products"
            className="absolute -left-3 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 text-[#8B5CF6] hover:text-white hover:bg-purple-900/60 backdrop-blur-md border border-purple-500/30 transition-all shadow-2xl hover:scale-110 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next products"
            className="absolute -right-3 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 text-[#8B5CF6] hover:text-white hover:bg-purple-900/60 backdrop-blur-md border border-purple-500/30 transition-all shadow-2xl hover:scale-110 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Track Overflow Viewport */}
          <div className="overflow-hidden w-full py-2">
            <div
              className="flex gap-6 lg:gap-8 transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: getTransform(),
              }}
            >
              {products.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => openForm()}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] aspect-[4/5] min-h-[480px] sm:min-h-[520px] p-7 sm:p-9 border border-white/10 shadow-2xl transition-all duration-300 hover:border-purple-500/50 cursor-pointer shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
                >
                  {/* Background Image */}
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/35 transition-opacity duration-300 group-hover:from-black/90" />

                  {/* Top Row: Circular Logo Badge & Category */}
                  <div className="relative z-10 flex items-center justify-between">
                    {/* Glassmorphic Logo Badge matching Figma Screenshot */}
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black/45 backdrop-blur-md border border-white/20 p-2.5 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                      <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                        <Image
                          src={prod.logo}
                          alt={prod.name}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <span className="text-sm sm:text-base font-normal tracking-wide text-white/90 drop-shadow">
                      {prod.category}
                    </span>
                  </div>

                  {/* Bottom Row: Name, Description & Circular Purple Arrow Button */}
                  <div className="relative z-10 mt-auto pt-8">
                    <div className="flex items-end justify-between gap-4">
                      <div className="max-w-[280px]">
                        <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-tight">
                          {prod.name}
                        </h3>
                        <p className="mt-2.5 text-xs sm:text-sm text-white/80 font-normal leading-relaxed line-clamp-3">
                          {prod.description}
                        </p>
                      </div>

                      {/* Circular Purple Arrow Button with ↗ */}
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#6D28D9] group-hover:bg-[#7C3AED] text-white shadow-xl shadow-purple-950/60 transition-transform duration-300 group-hover:scale-110">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-8 bg-[#8B5CF6]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
