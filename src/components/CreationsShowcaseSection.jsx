"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Client website projects ONLY per Picture 4 & 5 (No in-house product screenshots)
const clientProjects = [
  {
    id: "molifera",
    title: "Molifera Media",
    category: "DIGITAL EXPERIENCE",
    url: "https://www.moliferamedia.com/",
    isExternal: true,
    tagline: "Crafting Innovations, Creating Results — 360° Partner for Strategy, Marketing & Brand Growth",
    image: "/product-1.png",
    alt: "Molifera Media - Crafting Innovations Creating Results",
  },
  {
    id: "dhunseri",
    title: "Dhunseri Tea",
    category: "BRAND EXPERIENCE",
    url: "https://dhunseritea.com/",
    isExternal: true,
    tagline: "Pure Leaf. Bold Brew. Centuries-Old Heritage Of Excellence & Handpicked Blends",
    image: "/product-3.png",
    alt: "Dhunseri Tea - Pure Leaf Bold Brew",
  },
  {
    id: "mangal",
    title: "Mangal Materials",
    category: "ECOMMERCE PLATFORM",
    url: "#",
    isExternal: false,
    tagline: "Everything You Need for Sacred Rites — Authentic Puja Materials & Traditional Products",
    image: "/mangal-materials.png",
    alt: "Mangal Materials - Sacred Rites Puja Store",
  },
  {
    id: "bhairal",
    title: "Bhairal Connect",
    category: "CREATOR PLATFORM",
    url: "#",
    isExternal: false,
    tagline: "Influencer Platform for Freelancing — Find & Hire Top UGC Creators",
    image: "/product-5.png",
    alt: "Bhairal - Connect Influence Creator Platform",
  },
];

export default function CreationsShowcaseSection() {
  const sectionRef = useRef(null);
  const headingTextRef = useRef(null);
  const buttonRef = useRef(null);
  const centerShowcaseRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % clientProjects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % clientProjects.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + clientProjects.length) % clientProjects.length);
  };

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([headingTextRef.current, buttonRef.current, centerShowcaseRef.current], {
          x: 0,
          y: 0,
          autoAlpha: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? "20vw" : "35vw";

        // Text from left, Button from right
        gsap.set(headingTextRef.current, {
          x: `-${dist}`,
          autoAlpha: 0,
        });
        gsap.set(buttonRef.current, {
          x: dist,
          autoAlpha: 0,
        });
        gsap.set(centerShowcaseRef.current, {
          y: 30,
          autoAlpha: 0,
        });

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(headingTextRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
            gsap.to(buttonRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
            gsap.to(centerShowcaseRef.current, {
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              delay: 0.15,
              ease: "power2.out",
            });
          },
        });

        if (st.progress > 0) {
          gsap.set([headingTextRef.current, buttonRef.current, centerShowcaseRef.current], {
            x: 0,
            y: 0,
            autoAlpha: 1,
          });
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const activeProject = clientProjects[activeSlide];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative z-10 w-full bg-white py-16 sm:py-24 text-gray-900 border-t border-gray-100 overflow-hidden"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
        
        {/* Header with 'Achieve Goals' highlighted in purple */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16 overflow-hidden">
          <div ref={headingTextRef}>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-tight text-gray-950 leading-[1.15]">
              Empowering Businesses To
              <br />
              <span className="text-[#8B5CF6] font-medium">Achieve Goals</span> With
            </h2>
          </div>

          {/* Segmented Button: [ → | VIEW ALL PROJECTS ] with exact gradient matching Picture 8 */}
          <div ref={buttonRef} className="shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-stretch shadow-sm transition-all duration-300 hover:shadow-md group"
            >
              <span className="flex items-center justify-center border border-[#8B5CF6]/50 bg-[#F5F6FF] px-5 py-3 text-[#545AFF] text-lg font-light group-hover:bg-[#545AFF] group-hover:text-white transition-colors duration-300">
                →
              </span>
              <span className="flex items-center justify-center bg-gradient-to-r from-[#4361EE] via-[#4F46E5] to-[#2E0854] px-6 sm:px-8 py-3 text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-white hover:opacity-95 transition-all">
                VIEW ALL PROJECTS
              </span>
            </Link>
          </div>
        </div>

        {/* 3-Panel Coverflow Website Carousel matching Picture 5 */}
        <div ref={centerShowcaseRef} className="relative w-full">
          <div
            className="relative w-full h-[320px] sm:h-[450px] md:h-[530px] lg:h-[580px] overflow-hidden group/carousel select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {clientProjects.map((slide, idx) => {
              const N = clientProjects.length;
              const diff = (idx - activeSlide + N) % N;

              const isCenter = diff === 0;
              const isRight = diff === 1;
              const isLeft = diff === N - 1;

              let transformStyle = "translateX(-50%) scale(0.65)";
              let opacityStyle = "opacity-0 pointer-events-none z-0";

              if (isCenter) {
                transformStyle = "translateX(-50%) scale(1)";
                opacityStyle = "opacity-100 z-20 pointer-events-auto";
              } else if (isRight) {
                transformStyle = "translateX(calc(-50% + 56%)) scale(0.82)";
                opacityStyle = "opacity-75 hover:opacity-95 z-10 pointer-events-auto cursor-pointer";
              } else if (isLeft) {
                transformStyle = "translateX(calc(-50% - 56%)) scale(0.82)";
                opacityStyle = "opacity-75 hover:opacity-95 z-10 pointer-events-auto cursor-pointer";
              }

              return (
                <div
                  key={slide.id}
                  onClick={() => {
                    if (isRight) nextSlide();
                    if (isLeft) prevSlide();
                  }}
                  className={`absolute top-0 left-1/2 w-[76vw] sm:w-[620px] md:w-[720px] lg:w-[840px] rounded-xl overflow-hidden shadow-2xl border border-gray-200/90 bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${opacityStyle}`}
                  style={{
                    transform: transformStyle,
                    transformOrigin: "center center",
                  }}
                >
                  {/* Website Screenshot */}
                  <div className="relative w-full aspect-[16/9.5] overflow-hidden bg-gray-50">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 1024px) 76vw, 840px"
                      className="object-cover object-top"
                      priority={idx < 2}
                    />

                    {/* Clickable link overlay if active center card */}
                    {isCenter && slide.url !== "#" && (
                      <a
                        href={slide.url}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors"
                        title={`Visit ${slide.title}`}
                      >
                        <span className="sr-only">Visit {slide.title}</span>
                      </a>
                    )}
                  </div>

                  {/* Card Footer matching Picture 5 */}
                  <div className="flex items-center justify-between px-5 sm:px-7 py-3 sm:py-3.5 bg-white border-t border-gray-100 select-none">
                    <div className="flex items-center gap-1.5 font-medium text-gray-950">
                      <span className="text-sm sm:text-base">{slide.title}</span>
                      <span className="text-[#8B5CF6] text-sm">↗</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-gray-400">
                      {slide.category}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Left Circular Navigation Button matching Picture 5 */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous client website"
              className="absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-gray-800 shadow-xl border border-gray-200/80 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Circular Navigation Button matching Picture 5 */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next client website"
              className="absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-gray-800 shadow-xl border border-gray-200/80 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Indicator Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {clientProjects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Jump to ${p.title}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeSlide
                    ? "w-8 h-2.5 bg-[#8B5CF6]"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
