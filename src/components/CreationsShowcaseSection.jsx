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

const showcaseSlides = [
  {
    id: "molifera",
    title: "Molifera Media",
    category: "DIGITAL EXPERIENCE",
    url: "https://www.moliferamedia.com/",
    isExternal: true,
    tagline: "Crafting Innovations, Creating Results — 360° Partner for Strategy, Marketing & Brand Growth",
    image: "/region-carousel.png",
    alt: "Molifera Media - Crafting Innovations Creating Results",
    fitClass: "object-contain sm:object-cover object-center",
  },
  {
    id: "lynkbeats",
    title: "Lynkbeats Analytics",
    category: "REAL-TIME AUDIENCE INTELLIGENCE",
    url: "#",
    isExternal: false,
    tagline: "Live Newsroom Heartbeat, Engagement Metrics & Trending Story Insights",
    image: "/showcase-lynkbeats.png",
    alt: "Lynkbeats Real-time News Analytics Dashboard",
    fitClass: "object-cover object-top",
  },
  {
    id: "lifeseed",
    title: "LifeSeed ART",
    category: "HOSPITAL INFORMATION SYSTEM",
    url: "#",
    isExternal: false,
    tagline: "Clinical & Operational Hospital Overview, Patient Registrations & Cycles Analytics",
    image: "/showcase-lifeseed.png",
    alt: "LifeSeed ART Hospital Information System Dashboard",
    fitClass: "object-cover object-top",
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
      setActiveSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % showcaseSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length);
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

  const activeProject = showcaseSlides[activeSlide];

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

        {/* Auto-Moving Website Carousel with Hover Pause & Multi-Project Screenshots */}
        <div ref={centerShowcaseRef} className="relative w-full">
          <div
            className="relative w-full aspect-[16/8.5] sm:aspect-[16/8] lg:aspect-[1440/658] rounded-xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white group/carousel select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {showcaseSlides.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-98 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    className={slide.fitClass}
                  />

                  {/* Optional click-through hotspot if link is active */}
                  {slide.url !== "#" ? (
                    <a
                      href={slide.url}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors"
                      title={`Visit ${slide.title}`}
                    >
                      <span className="sr-only">Visit {slide.title}</span>
                    </a>
                  ) : (
                    <Link
                      href="/portfolio"
                      className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors"
                      title={`View ${slide.title} in Portfolio`}
                    >
                      <span className="sr-only">View {slide.title}</span>
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Left Slide Arrow Button (Visible on Hover) */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous website showcase"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Slide Arrow Button (Visible on Hover) */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next website showcase"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom Dynamic Metadata Bar & Navigation Indicators */}
          <div className="mt-6 pt-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm sm:text-base">
            <div>
              {activeProject.isExternal ? (
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-gray-950 hover:text-[#545AFF] transition-colors"
                >
                  <span className="text-base sm:text-lg">{activeProject.title}</span>
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ) : (
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 font-medium text-gray-950 hover:text-[#545AFF] transition-colors"
                >
                  <span className="text-base sm:text-lg">{activeProject.title}</span>
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
              )}
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                {activeProject.tagline}
              </p>
            </div>

            {/* Right: Category + Indicator Pills */}
            <div className="flex items-center gap-5 self-end sm:self-center">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-400 uppercase">
                {activeProject.category}
              </span>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {showcaseSlides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActiveSlide(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIdx === activeSlide
                        ? "w-7 bg-[#545AFF]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

