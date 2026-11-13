"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function DigitalExcellence() {
  const root = useRef(null);

  useGSAP(
    () => {
      const lines = gsap.utils.toArray("[data-line]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(lines, { x: 0, autoAlpha: 1, color: "#000" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? 15 : 30;
        gsap.set(lines, {
          x: (_, el) => (el.dataset.from === "right" ? dist : -dist),
          autoAlpha: 0,
        });

        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top 80%",
          once: true,
          onEnter: () =>
            gsap.to(lines, {
              x: 0,
              autoAlpha: 1,
              duration: 1.0,
              ease: "power2.out",
              stagger: 0.1,
            }),
        });

        if (st.progress > 0) {
          gsap.set(lines, { x: 0, autoAlpha: 1 });
        }
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex items-center justify-center overflow-hidden bg-white pt-8 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-10"
    >
      {/* Centered 3 Kinetic Typography Lines matching Picture 3 - Copy */}
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 max-w-full">
        <div className="flex flex-col items-center text-center font-sans text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[94px] font-normal leading-[1.12] tracking-[-0.02em] text-black">
          {/* Line 1: Digital + Pill Arrow */}
          <div
            data-line
            data-from="left"
            className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5"
          >
            <span>Digital</span>
            <span className="flex h-7 w-14 sm:h-9 sm:w-18 md:h-11 md:w-22 items-center justify-center rounded-full border border-[#8B5CF6]/80 shrink-0">
              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#8B5CF6]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </div>

          {/* Line 2: Team Image + Excellence */}
          <div
            data-line
            data-from="right"
            className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 mt-1 sm:mt-2"
          >
            <div className="relative h-7 w-13 sm:h-9 sm:w-17 md:h-11 md:w-20 shrink-0 overflow-hidden rounded-full shadow-sm">
              <Image
                src="/figma-exports/Markeo.png"
                alt="Team members collaborating"
                fill
                sizes="(max-width: 768px) 70px, 120px"
                className="object-cover object-center"
                priority
              />
            </div>
            <span>Excellence</span>
          </div>

          {/* Line 3: Delivered (Centered directly below) */}
          <div
            data-line
            data-from="left"
            className="flex items-center justify-center mt-1 sm:mt-2"
          >
            Delivered
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    num: "01",
    title: "Web Design",
    slug: "ui-ux-design",
    image: "/AGS Landing Page Images/web design.png",
    alt: "Web Design",
  },
  {
    num: "02",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    image: "/AGS Landing Page Images/ui ux design.png",
    alt: "UI/UX Design",
  },
  {
    num: "03",
    title: "Web Development",
    slug: "website-development",
    image: "/AGS Landing Page Images/web development.png",
    alt: "Web Development",
  },
  {
    num: "04",
    title: "Digital Marketing",
    slug: "digital-marketing",
    image: "/AGS Landing Page Images/digital marketing.png",
    alt: "Digital Marketing",
  },
  {
    num: "05",
    title: "Cloud Solutions",
    slug: "cloud-devops",
    image: "/AGS Landing Page Images/Cloud solutions.png",
    alt: "Cloud Solutions",
  },
  {
    num: "06",
    title: "Branding",
    slug: "branding",
    image: "/AGS Landing Page Images/Branding.png",
    alt: "Branding",
  },
];

function ServiceImageComposition({ service }) {
  if (!service) return null;
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full max-h-[740px] aspect-[630/740]">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-contain object-center"
          priority
        />
      </div>
    </div>
  );
}

export default function DigitalExcellenceSection() {
  const [activeNum, setActiveNum] = useState("01");
  const [outgoingNum, setOutgoingNum] = useState(null);
  const [incomingOpacity, setIncomingOpacity] = useState(1);
  const [outgoingOpacity, setOutgoingOpacity] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  const getService = (num) => services.find((s) => s.num === num) || services[0];

  const handleServiceChange = (num) => {
    if (num === activeNum) return;
    setOutgoingNum(activeNum);
    setActiveNum(num);
    setOutgoingOpacity(1);
    setIncomingOpacity(0);

    requestAnimationFrame(() => {
      setOutgoingOpacity(0);
      setIncomingOpacity(1);
    });
  };

  // Scroll-driven animation: smoothly slides through the services as the user scrolls down
  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          onUpdate: (self) => {
            if (isPaused) return;
            const progress = self.progress;
            const idx = Math.min(
              Math.floor(progress * services.length),
              services.length - 1
            );
            const targetNum = services[idx].num;
            setActiveNum((prev) => {
              if (prev !== targetNum) {
                setOutgoingNum(prev);
                setOutgoingOpacity(1);
                setIncomingOpacity(0);
                requestAnimationFrame(() => {
                  setOutgoingOpacity(0);
                  setIncomingOpacity(1);
                });
                return targetNum;
              }
              return prev;
            });
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [isPaused] }
  );

  // Continuous auto-slide per design file (pauses on user interaction/hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveNum((prev) => {
        const curIdx = services.findIndex((s) => s.num === prev);
        const nextIdx = (curIdx + 1) % services.length;
        const nextNum = services[nextIdx].num;
        setOutgoingNum(prev);
        setOutgoingOpacity(1);
        setIncomingOpacity(0);
        requestAnimationFrame(() => {
          setOutgoingOpacity(0);
          setIncomingOpacity(1);
        });
        return nextNum;
      });
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (outgoingNum !== null) {
      const timer = setTimeout(() => {
        setOutgoingNum(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [outgoingNum]);

  return (
    <div className="relative z-10 w-full bg-white text-gray-950 overflow-hidden">
      {/* ── PART A: One-Way Scroll Triggered Kinetic Typography ── */}
      <DigitalExcellence />

      {/* ── PART B: Interactive Editorial Services Section (Reduced whitespace & balanced alignment) ── */}
      <section
        ref={sectionRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full bg-white pt-2 sm:pt-3 pb-10 sm:pb-14 lg:pb-16"
      >
        <div className="mx-auto max-w-[1560px] 2xl:max-w-[1680px] px-6 sm:px-10 lg:px-16 2xl:px-20">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            
            {/* Left Column: Enlarged Single Composition with Crossfading Image */}
            <div className="lg:col-span-5 xl:col-span-5 relative w-full h-[320px] sm:h-[480px] lg:h-[640px] xl:h-[680px]">
              {outgoingNum !== null && (
                <div
                  className="absolute inset-0 transition-opacity duration-500 ease-in-out pointer-events-none"
                  style={{ opacity: outgoingOpacity }}
                >
                  <ServiceImageComposition service={getService(outgoingNum)} />
                </div>
              )}

              <div
                className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{ opacity: incomingOpacity }}
              >
                <ServiceImageComposition service={getService(activeNum)} />
              </div>
            </div>

            {/* Right Column: Vertically Stacked Services with Blue Arrow & Superscript Number */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col divide-y divide-gray-200 border-t border-gray-200">
              {services.map((item) => {
                const isActive = activeNum === item.num;
                return (
                  <div
                    key={item.num}
                    onMouseEnter={() => {
                      setIsPaused(true);
                      handleServiceChange(item.num);
                    }}
                    onClick={() => handleServiceChange(item.num)}
                    className="group py-4 sm:py-7 lg:py-8 transition-colors duration-300 cursor-pointer border-b border-gray-200"
                  >
                    <div className="flex w-full items-center">
                      <div className="flex items-center gap-2.5 sm:gap-4">
                        {/* Blue diagonal arrow matching user's chat image - appears on hover/active */}
                        <svg
                          className={`w-5 h-5 sm:w-8 sm:h-8 text-[#2563EB] transition-all duration-300 shrink-0 ${
                            isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-3 pointer-events-none w-0 overflow-hidden group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-6 sm:group-hover:w-8"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>

                        {/* Title with small superscript blue number beside it */}
                        <div className="inline-flex items-baseline">
                          <span
                            className={`text-[25px] sm:text-5xl lg:text-[54px] tracking-tight transition-colors duration-300 select-text ${
                              isActive
                                ? "font-normal text-gray-950"
                                : "font-light text-gray-400 group-hover:text-gray-700"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="ml-2 sm:ml-3 text-xs sm:text-base md:text-lg font-normal text-[#2563EB] relative -top-2.5 sm:-top-5 select-text">
                            {item.num}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
