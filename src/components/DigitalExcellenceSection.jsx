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
        gsap.set(lines, {
          x: (_, el) => (el.dataset.from === "right" ? "60vw" : "-60vw"),
          autoAlpha: 0,
          color: "#c9c9c9",
        });

        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top 65%",
          once: true,
          onEnter: () =>
            gsap.to(lines, {
              x: 0,
              autoAlpha: 1,
              color: "#000",
              duration: 1.6,
              ease: "power3.out",
              stagger: 0.12,
            }),
        });

        if (st.progress > 0) {
          gsap.set(lines, { x: 0, autoAlpha: 1, color: "#000" });
        }
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-x-clip bg-white"
    >
      <div className="flex flex-col items-center font-inter text-[11.5vw] font-light leading-[1.03] tracking-[-0.01em]">
        <div data-line data-from="left" className="flex items-center gap-[2vw]">
          <span>Digital</span>
          <span className="flex h-[6.4vw] w-[13.3vw] items-center justify-center rounded-full border border-violet-600">
            <ArrowUpRight className="h-[3vw] w-[3vw] text-violet-600" strokeWidth={1} />
          </span>
        </div>
        <div data-line data-from="right" className="flex items-center gap-[1.5vw]">
          <img
            src="/images/digital-team.jpg"
            alt="Team members collaborating around laptop"
            className="h-[8.5vw] w-[13.3vw] object-cover"
          />
          <span>Excellence</span>
        </div>
        <div data-line data-from="left">
          Delivered
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
      <div className="relative w-full h-full max-h-[740px] aspect-[630/740] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
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

  useEffect(() => {
    if (outgoingNum !== null) {
      const timer = setTimeout(() => {
        setOutgoingNum(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [outgoingNum]);

  return (
    <div className="relative z-10 w-full bg-white text-gray-950 overflow-x-clip">
      {/* ── PART A: One-Way Scroll Triggered Kinetic Typography ── */}
      <DigitalExcellence />

      {/* ── PART B: Interactive Editorial Services Section ── */}
      <section className="relative w-full bg-white py-20 sm:py-28 lg:py-36 border-t border-gray-100">
        <div className="mx-auto max-w-[1560px] 2xl:max-w-[1680px] px-6 sm:px-10 lg:px-16 2xl:px-20">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20 xl:gap-24">
            
            {/* Left Column: Enlarged Single Composition with Crossfading Image */}
            <div className="lg:col-span-5 xl:col-span-5 relative w-full h-[520px] sm:h-[640px] lg:h-[700px] xl:h-[740px]">
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
                    onMouseEnter={() => handleServiceChange(item.num)}
                    onClick={() => handleServiceChange(item.num)}
                    className="group py-7 sm:py-9 transition-colors duration-300 cursor-pointer border-b border-gray-200"
                  >
                    <div className="flex w-full items-center">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Blue diagonal arrow matching user's chat image - appears on hover/active */}
                        <svg
                          className={`w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] transition-all duration-300 shrink-0 ${
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
                            className={`text-3xl sm:text-5xl lg:text-[54px] tracking-tight transition-colors duration-300 select-text ${
                              isActive
                                ? "font-normal text-gray-950"
                                : "font-light text-gray-400 group-hover:text-gray-700"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="ml-2.5 sm:ml-3 text-sm sm:text-base md:text-lg font-normal text-[#2563EB] relative -top-3 sm:-top-5 select-text">
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
