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

export function DigitalExcellence() {
  const root = useRef(null);

  useGSAP(
    () => {
      const lines = gsap.utils.toArray("[data-line]");
      const logo = root.current?.querySelector("[data-logo]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(lines, { x: 0, autoAlpha: 1, color: "#000" });
        if (logo) gsap.set(logo, { autoAlpha: 0.9, x: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? 35 : 70;

        gsap.set(lines, {
          x: (_, el) => (el.dataset.from === "right" ? dist : -dist),
          autoAlpha: 0,
          color: "#9ca3af",
        });

        if (logo) {
          gsap.set(logo, { autoAlpha: 0.3, x: -20 });
        }

        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(lines, {
              x: 0,
              autoAlpha: 1,
              color: "#000",
              duration: 1.2,
              ease: "power3.out",
              stagger: 0.1,
            });
            if (logo) {
              gsap.to(logo, {
                x: 0,
                autoAlpha: 0.9,
                duration: 1.4,
                ease: "power2.out",
              });
            }
          },
        });

        if (st.progress > 0) {
          gsap.set(lines, { x: 0, autoAlpha: 1, color: "#000" });
          if (logo) gsap.set(logo, { autoAlpha: 0.9, x: 0 });
        }
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex items-center justify-center overflow-x-clip bg-white pt-8 sm:pt-10 lg:pt-14 pb-8 sm:pb-10 lg:pb-12"
    >
      <div className="relative z-10 mx-auto flex items-center justify-center px-4 sm:px-6 md:px-8 max-w-[1440px]">
        {/* Left: Outline AGS Monogram Watermark on the side matching Picture 3 - Copy */}
        <div
          data-logo
          className="relative shrink-0 w-[42px] xs:w-[54px] sm:w-[75px] md:w-[100px] lg:w-[125px] xl:w-[140px] aspect-[140/409] select-none mr-3 xs:mr-4 sm:mr-7 md:mr-10 lg:mr-14 xl:mr-16"
        >
          <Image
            src="/ags-monogram-hd.png"
            alt="AGS Monogram"
            fill
            sizes="(max-width: 640px) 54px, (max-width: 1024px) 100px, 140px"
            className="object-contain object-center opacity-90"
            priority
          />
        </div>

        {/* Right: 3-Line Kinetic Typography matching exact Figma inspect panel specs */}
        {/* Typography: Manrope, Regular (400), responsive scaling up to 140px, tracking -0.32px, #000000 */}
        <div className="flex flex-col items-start font-sans text-[30px] xs:text-[38px] sm:text-[54px] md:text-[72px] lg:text-[105px] xl:text-[130px] font-normal leading-[1.08] lg:leading-[118px] xl:leading-[142px] tracking-[-0.03em] text-black">
          {/* Line 1: Spacer + Digital + Pill Arrow Button */}
          <div
            data-line
            data-from="left"
            className="flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-5"
          >
            {/* Spacer matching exact width of team image on Line 2 for perfect column alignment */}
            <div
              className="w-[48px] xs:w-[62px] sm:w-[85px] md:w-[115px] lg:w-[145px] xl:w-[170px] shrink-0"
              aria-hidden="true"
            />
            <span>Digital</span>
            <span className="flex h-[24px] xs:h-[28px] sm:h-[36px] md:h-[45px] lg:h-[54px] xl:h-[62px] w-[44px] xs:w-[54px] sm:w-[70px] md:w-[88px] lg:w-[110px] xl:w-[126px] items-center justify-center rounded-full border border-[#8B5CF6]/70 shrink-0">
              <svg
                className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#8B5CF6]"
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

          {/* Line 2: Team Image (strictly rectangular, rounded-none / 0 corner radius) + Excellence */}
          <div
            data-line
            data-from="right"
            className="flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-5"
          >
            <div className="relative shrink-0 overflow-hidden rounded-none shadow-none w-[48px] xs:w-[62px] sm:w-[85px] md:w-[115px] lg:w-[145px] xl:w-[170px] h-[31px] xs:h-[40px] sm:h-[55px] md:h-[74px] lg:h-[94px] xl:h-[110px]">
              <Image
                src="/figma-exports/Markeo.png"
                alt="Team members collaborating"
                fill
                sizes="(max-width: 640px) 62px, (max-width: 1024px) 115px, 170px"
                className="object-cover object-center rounded-none"
                priority
              />
            </div>
            <span>Excellence</span>
          </div>

          {/* Line 3: Spacer + Delivered (precisely aligned with Digital & Excellence above it) */}
          <div
            data-line
            data-from="left"
            className="flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-5"
          >
            <div
              className="w-[48px] xs:w-[62px] sm:w-[85px] md:w-[115px] lg:w-[145px] xl:w-[170px] shrink-0"
              aria-hidden="true"
            />
            <span>Delivered</span>
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
    href: "/services/ui-ux-design",
    image: "/AGS Landing Page Images/web design.png",
    alt: "Web Design",
  },
  {
    num: "02",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    href: "/services/ui-ux-design",
    image: "/AGS Landing Page Images/ui ux design.png",
    alt: "UI/UX Design",
  },
  {
    num: "03",
    title: "Web Development",
    slug: "full-stack",
    href: "/services/full-stack",
    image: "/AGS Landing Page Images/web development.png",
    alt: "Web Development",
  },
  {
    num: "04",
    title: "Digital Marketing",
    slug: "digital-marketing",
    href: "/services/digital-solutions",
    image: "/AGS Landing Page Images/digital marketing.png",
    alt: "Digital Marketing",
  },
  {
    num: "05",
    title: "Cloud Solutions",
    slug: "cloud-devops",
    href: "/services/digital-solutions",
    image: "/AGS Landing Page Images/Cloud solutions.png",
    alt: "Cloud Solutions",
  },
  {
    num: "06",
    title: "Branding",
    slug: "branding",
    href: "/services/ui-ux-design",
    image: "/AGS Landing Page Images/Branding.png",
    alt: "Branding",
  },
];

function ServiceImageComposition({ service }) {
  if (!service) return null;
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Link
        href={service.href || "/services"}
        className="relative block w-full h-full max-h-[740px] aspect-[630/740] cursor-pointer group"
        title={`Explore ${service.title}`}
      >
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
          priority
        />
      </Link>
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

  // Continuous auto-slide per design (pauses on user interaction/hover)
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
      {/* ── PART A: One-Way Opposing Kinetic Scroll Typography ── */}
      <DigitalExcellence />

      {/* ── PART B: Interactive Editorial Services Section ── */}
      <section
        ref={sectionRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full bg-white pt-2 sm:pt-3 pb-8 sm:pb-10 lg:pb-12"
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
                  <Link
                    key={item.num}
                    href={item.href || "/services"}
                    onMouseEnter={() => {
                      setIsPaused(true);
                      handleServiceChange(item.num);
                    }}
                    onClick={() => handleServiceChange(item.num)}
                    className="group block py-4 sm:py-7 lg:py-8 transition-colors duration-300 cursor-pointer border-b border-gray-200"
                    title={`Explore ${item.title}`}
                  >
                    <div className="flex w-full items-center">
                      <div className="flex items-center gap-2.5 sm:gap-4">
                        {/* Blue diagonal arrow matching user's chat image - appears on hover/active */}
                        <svg
                          className={`w-5 h-5 sm:w-8 sm:h-8 text-[#2563EB] transition-all duration-300 shrink-0 ${isActive
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
                            className={`text-[25px] sm:text-5xl lg:text-[54px] tracking-tight transition-colors duration-300 select-text ${isActive
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
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
