"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useCtaForm } from "@/components/CtaFormProvider";
import Footer from "@/components/Footer";
import container6 from "../../public/services/container-6.png";
import rightContainerStats from "../../public/services/right-container-stats.png";
import heroBg from "../../public/services/hero-bg.png";
import tabFullStack from "../../public/services/tab-full-stack.png";
import tabMobileDev from "../../public/services/tab-mobile-dev.png";
import tabSecurity from "../../public/services/tab-security.png";
import tabUiUx from "../../public/services/tab-ui-ux.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Direct base64 data URLs exported from Figma (guarantees 100% reliable rendering with zero 404s)
const ICONS = {
  plus: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAHdJREFUeAHtlEENgDAQBPcIBlCABXwAXsAD8K0lHBAcgJEuBQVdEnjdJM19djNp0h4gMPUclpZB6RRK2IhAw6B0JMEbXOACF6TPOXfc0mzwAQasJYE9rYAqs1E/kzhz4ixwQCHdlvdROv6KXOCCHwSlEjbDGCMkLibPGi06KU7zAAAAAElFTkSuQmCC",
  arrowRightBlue: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAALNJREFUeAGdkr0NwjAQhd/FoaPwKBkBSkBC2QA2IANQWCL0jBAm4GcBRiAbsAI9hMPnDitI53yNT7bfZ93JgAI3Ybufc9F3lkGBGaPyN+/1kleDBF2Og19a+qCJJQQlrmQ7euPmy4IzrLdXOiYJ/kmCoF5wxQSrkfie5d5GapFQsHZ4gHWCHwhNUguCDFGG6cv2lWOaJIjD7kxPtaAvLPsqwW7GZWZwisOC6iPBhKcucVj4ApnxRyEr7o3jAAAAAElFTkSuQmCC",
  marginArrow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAKpJREFUeAGVkbENwjAQRf8Zh5oRMgIjQAcUKBskbEANjREgxoBMQAVt2ABGYARqQD4uVFYUyZcnWbase/qnOyDCYcKpk9P8NzHRWywTi/t+xsNO4sfCyfWUyiqUCQpcxoPki0qeKTzG6ys9VGKbTBJfSBtHdONlTR83/8ZCU00GOQMjSSzVre7mnJPHiRjl6kKFSmxK//SYtJ1yZno4h1JNdI9kZYrAJpRqfrKQOaDS26aEAAAAAElFTkSuQmCC",
  check: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAOVJREFUeAGt080NgkAQBeC3CHdKoARa4GaUg1agVuDdE4lBy0CKMPFGCVoCJXjnZ9yBuBFBhcV3gUyGj2F3AUYmnJEbTMnhe4ERYQgGEhDuWQFPG1MQYFcFQmpAIy2IIxAPnqwLEoR4dxbrQdg3qB7uT5DCuJEEorzAMriIVAeqakd5RkoT16pR7ghv8SvYF+IYZGGrGgUca4LkeQj5RX2h+nGZw5xO8jNXqionLAU2E0Ik604fSGGd4HvjD6iBcUKfeO1cHYjT+AMyE5683HSg1mScYEG2lVeL7g6BPobBvU8BBuYBSU13rTLPW5cAAAAASUVORK5CYII=",
  uilArrowUp: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAATZJREFUeAGlVDt2wjAQnJA06XQEHcFlSqdL6dxAR+AG8Q3gJuEG0FJhOjrgBEBJBbvW8BB68g/2vfGzd0dj7a5WQNqMYCz4F2wFF2JFn8MAKwQHwYILbRDL6JvxR65LbEJijm6z5P41ETSgKRn0N8M1kzjg+LchYqGori1Cpzosnrccvu7mg7tbC3YRaRt9h/FfwTH4Xggq1XqXRwnftSoSeBN8Cs6CE3xqX/CZLAWbBP9HX7SoGdrN4vE8uhZOTegjpjUatwjWWiN0i83h0/2GLw3QchpUcI90h2OxsMYpQS1bNSIxHyDWZBk3V9dlHgUNRVLNckhnNGOsXnxAv/ltMovo3BZ4ffRcHJji+cuhbCKU6D/XObnTLqIj8XYzh42x9GkTte4FBpjDfcZvI7ejT09GsjRXsT5RutSGX74AAAAASUVORK5CYII=",
  arrowBtn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAGFJREFUeAGtj8sNgCAQBZ+xAUrwaBt2QAlagXZgKdqKFVgCpcAjgQOEzx6YZBJCZpNdoIymZ/45V+KVvuH9QcBOLb0hJBmY6E9VY0AFDx/rThzX2NDhoYYuw8JLGnriUQkOF10NVRVYLQsAAAAASUVORK5CYII=",
  arrowAccordion: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAICAYAAAArzdW1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAE5JREFUeAGdjVEJACAMBQcawAYawWg20CZWsIJJzGADn+DPdCh4cOxjN6boJEMPK11wsMFID1ioYYBGCOe7BLteV1Jk15R27F36DiZlDwbfqQvXOh013gAAAABJRU5ErkJggg==",
};

const CORE_SERVICES = [
  {
    number: "01",
    title: "Full Stack Development",
    description: "Build scalable web platforms and applications with modern technologies.",
    href: "/services/full-stack",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Create intuitive, user-centered digital experiences that are beautiful and easy to use.",
    href: "/services/ui-ux-design",
  },
  {
    number: "03",
    title: "Digital Solutions",
    description: "Transform business processes with customized digital products and cloud solutions.",
    href: "/services/digital-solutions",
  },
  {
    number: "04",
    title: "Cyber Security & VAPT",
    description: "Identify vulnerabilities, strengthen security, and protect your digital infrastructure.",
    href: "/services/cyber-security",
  },
  {
    number: "05",
    title: "Mobile Development",
    description: "Build high-performance mobile applications for Android and iOS platforms.",
    href: "/services/mobile-app-development",
  },
  {
    number: "06",
    title: "AI Solutions",
    description: "Use AI and intelligent automation to improve operations, decisions, and customer experiences.",
    href: "/services/ai-solutions",
  },
];

const METHODOLOGY_STEPS = [
  {
    number: "01",
    title: "Understanding Your Business",
    detail:
      "We dive deep into your market dynamics, business workflows, and user expectations to define clear architectural and strategic goals before writing a single line of code.",
  },
  {
    number: "02",
    title: "Building With Purpose",
    detail:
      "Our engineering team develops scalable, modular code and intuitive interfaces tailored precisely to your operational and brand requirements.",
  },
  {
    number: "03",
    title: "Designed For Growth",
    detail:
      "Every platform is architected for high concurrency, peak performance, and flexible adaptation as your user base and product offerings expand.",
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    detail:
      "We provide proactive monitoring, continuous cloud optimization, and routine security audits to keep your digital ecosystem ahead of the competition.",
  },
];

const BANNER_TABS = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    subtitle: "Scalable Web Platforms & Cloud Applications",
    href: "/services/full-stack",
    image: tabFullStack,
  },
  {
    id: "mobile",
    title: "Mobile Development",
    subtitle: "Build Android & IOS Applications",
    href: "/services/mobile-app-development",
    image: tabMobileDev,
  },
  {
    id: "security",
    title: "Cyber Security & VAPT",
    subtitle: "Security Testing & Vulnerability Protection",
    href: "/services/cyber-security",
    image: tabSecurity,
  },
  {
    id: "design",
    title: "UI/UX Design",
    subtitle: "Research-Driven Experiences",
    href: "/services/ui-ux-design",
    image: tabUiUx,
  },
];

export default function ServicesLandingPage() {
  const { openForm } = useCtaForm();
  const [activeStep, setActiveStep] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  // Animation Refs
  const sec2Ref = useRef(null);
  const sec2ContentRef = useRef(null);

  const sec3Ref = useRef(null);
  const sec3TextRef = useRef(null);
  const sec3ImageRef = useRef(null);

  const sec5Ref = useRef(null);
  const sec5LeftRef = useRef(null);
  const sec5DividerRef = useRef(null);
  const sec5RightRef = useRef(null);

  const sec6Ref = useRef(null);
  const sec6HeaderRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        [
          sec2ContentRef.current,
          sec3TextRef.current,
          sec3ImageRef.current,
          sec5LeftRef.current,
          sec5DividerRef.current,
          sec5RightRef.current,
          sec6HeaderRef.current,
        ].filter(Boolean),
        { x: 0, y: 0, autoAlpha: 1 }
      );
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const isMobile = window.innerWidth < 768;
      const sideDist = isMobile ? "15vw" : "25vw";

      // 1. Section 2: Appears from up above and places itself
      if (sec2Ref.current && sec2ContentRef.current) {
        gsap.set(sec2ContentRef.current, { y: -80, autoAlpha: 0 });
        const st2 = ScrollTrigger.create({
          trigger: sec2Ref.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(sec2ContentRef.current, {
              y: 0,
              autoAlpha: 1,
              duration: 1.2,
              ease: "power3.out",
            });
          },
        });
        if (st2.progress > 0) {
          gsap.set(sec2ContentRef.current, { y: 0, autoAlpha: 1 });
        }
      }

      // 2. Section 3: Text appears from left and image from right
      if (sec3Ref.current && sec3TextRef.current && sec3ImageRef.current) {
        gsap.set(sec3TextRef.current, { x: `-${sideDist}`, autoAlpha: 0 });
        gsap.set(sec3ImageRef.current, { x: sideDist, autoAlpha: 0 });
        const st3 = ScrollTrigger.create({
          trigger: sec3Ref.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(sec3TextRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
            gsap.to(sec3ImageRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
          },
        });
        if (st3.progress > 0) {
          gsap.set([sec3TextRef.current, sec3ImageRef.current], {
            x: 0,
            autoAlpha: 1,
          });
        }
      }

      // 3. Section 5: Image appears from left and text from right (divider fades in smoothly)
      if (sec5Ref.current && sec5LeftRef.current && sec5RightRef.current) {
        gsap.set(sec5LeftRef.current, { x: `-${sideDist}`, autoAlpha: 0 });
        gsap.set(sec5RightRef.current, { x: sideDist, autoAlpha: 0 });
        if (sec5DividerRef.current) {
          gsap.set(sec5DividerRef.current, { autoAlpha: 0 });
        }
        const st5 = ScrollTrigger.create({
          trigger: sec5Ref.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(sec5LeftRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
            gsap.to(sec5RightRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
            if (sec5DividerRef.current) {
              gsap.to(sec5DividerRef.current, {
                autoAlpha: 1,
                duration: 1.0,
                ease: "power3.out",
              });
            }
          },
        });
        if (st5.progress > 0) {
          gsap.set([sec5LeftRef.current, sec5RightRef.current], {
            x: 0,
            autoAlpha: 1,
          });
          if (sec5DividerRef.current) {
            gsap.set(sec5DividerRef.current, { autoAlpha: 1 });
          }
        }
      }

      // 4. Section 6: Only the text appears from left, image section under it stays still
      if (sec6Ref.current && sec6HeaderRef.current) {
        gsap.set(sec6HeaderRef.current, { x: `-${sideDist}`, autoAlpha: 0 });
        const st6 = ScrollTrigger.create({
          trigger: sec6Ref.current,
          start: "top 75%",
          once: true,
          onEnter: () => {
            gsap.to(sec6HeaderRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
          },
        });
        if (st6.progress > 0) {
          gsap.set(sec6HeaderRef.current, { x: 0, autoAlpha: 1 });
        }
      }
    });

    return () => mm.revert();
  }, []);

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#FAF8FF] text-[#111111]">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#0A0B16]">
        {/* Background Image: Cinematic Office Workspace */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="Office Analytics Workspace"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center brightness-[0.92] contrast-[1.04]"
          />
          {/* Subtle vertical guides & dark overlay matching Figma */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090A15]/50 via-[#0A0B1A]/40 to-[#0A0B16]/70" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:160px_100%]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 text-center flex flex-col items-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight leading-tight">
            Our Services
          </h1>

          <p className="mt-5 text-white max-w-[639px] text-[15px] sm:text-[16px] font-normal leading-[21px] text-center mx-auto opacity-100">
            Companies that can help you in developing your company for the future. We deliver{" "}
            <br className="hidden sm:inline" />
            end-to-end digital solutions — from design to deployment.
          </p>

          <button
            type="button"
            onClick={() => openForm()}
            className="mt-8 sm:mt-10 inline-flex items-center gap-2.5 bg-white text-black px-7 py-3 text-[15px] font-medium transition-all duration-300 hover:bg-[#854CFF] hover:text-white group cursor-pointer shadow-lg"
          >
            <span>Get Started</span>
            <div className="w-[20px] h-[20px] rounded-none border border-[#000000] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:rotate-45">
              <img
                src={ICONS.uilArrowUp}
                alt=""
                width="20"
                height="20"
                className="w-[20px] h-[20px] object-contain"
              />
            </div>
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TECHNOLOGY SOLUTIONS THAT MOVE BUSINESSES FORWARD (6-Card Grid)
          ───────────────────────────────────────────────────────────── */}
      <section ref={sec2Ref} className="relative z-10 w-full pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-x-clip">
        <div ref={sec2ContentRef} className="max-w-[1290px] mx-auto will-change-transform">
          {/* Section Heading */}
          <div className="text-center max-w-[496px] mx-auto min-h-[108px] mb-10 sm:mb-12 flex items-center justify-center">
            <h2 className="text-[#111111] font-manrope font-normal text-[30px] sm:text-[36.9px] leading-[42px] sm:leading-[54px] tracking-[1.35px] text-center capitalize">
              Technology Solutions That{" "}
              <br className="hidden sm:inline" />
              Move <span className="text-[#854CFF]">Businesses Forward</span>
            </h2>
          </div>

          {/* 6-Card Grid: exact Figma spec (width: 1290px, min-height: 666.59px) */}
          <div
            style={{ borderColor: "rgba(23, 9, 57, 0.2)" }}
            className="relative max-w-[1290px] w-full mx-auto border bg-white overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {CORE_SERVICES.map((service, index) => {
                const borderClasses = [
                  /* 01 */ "border-b md:border-r md:border-b lg:border-r lg:border-b",
                  /* 02 */ "border-b md:border-b md:border-r-0 lg:border-r lg:border-b",
                  /* 03 */ "border-b md:border-r md:border-b lg:border-r-0 lg:border-b",
                  /* 04 */ "border-b md:border-b md:border-r-0 lg:border-r lg:border-b-0",
                  /* 05 */ "border-b md:border-r md:border-b-0 lg:border-r lg:border-b-0",
                  /* 06 */ "border-b-0 md:border-r-0 md:border-b-0 lg:border-r-0 lg:border-b-0",
                ][index];

                return (
                  <Link
                    key={service.number}
                    href={service.href}
                    style={{ borderColor: "rgba(23, 9, 57, 0.2)" }}
                    className={`group relative p-8 sm:p-10 flex flex-col justify-between w-full h-full min-h-[332px] transition-all duration-300 hover:bg-[#F3ECFF] hover:ring-1 hover:ring-inset hover:ring-[#854CFF] hover:z-20 cursor-pointer ${borderClasses}`}
                  >
                    <div>
                      {/* Number Badge (width: 18px, height: 24px) */}
                      <span className="w-[18px] h-[24px] text-[#854CFF] text-[16px] font-medium leading-[24px] flex items-center justify-start block mb-6">
                        {service.number}
                      </span>

                      {/* Card Title */}
                      <h3 className="text-[#111111] text-[22px] sm:text-[23px] font-medium leading-snug mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#555555] text-[15px] leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>

                    {/* View More Link (width: 100px, height: 22.39px) */}
                    <div
                      className="mt-8 w-[100px] h-[22.39px] inline-flex items-center justify-between text-[#111111] text-[13px] font-semibold tracking-wider uppercase group-hover:text-[#854CFF] transition-colors"
                    >
                      <span className="leading-none">VIEW MORE</span>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] h-[8px] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M9.5 1L13 4M13 4L9.5 7M13 4H1"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Plus Icon joints at intersections: anchored directly to bottom-right of Card 01 and Card 02 */}
                    {(index === 0 || index === 1) && (
                      <div className="hidden lg:block absolute -right-[12.5px] -bottom-[12px] w-[25px] h-[24px] z-30 pointer-events-none select-none">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[24.96px] h-[24px] text-[#854CFF]"
                        >
                          <path
                            d="M12.5 0V24M0.5 12H24.5"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                        </svg>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SMARTER TECHNOLOGY FOR SUSTAINABLE BUSINESS GROWTH
          ───────────────────────────────────────────────────────────── */}
      <section ref={sec3Ref} className="relative z-10 w-full pt-8 sm:pt-10 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-x-clip">
        <div className="max-w-[1290px] mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-[80px]">
          {/* Left Column (Figma: width: 600px, max-width: 600px, top-aligned) */}
          <div ref={sec3TextRef} className="w-full lg:w-[600px] max-w-[600px] flex flex-col items-start flex-shrink-0 will-change-transform">
            {/* Heading */}
            <h2 className="text-[#111111] font-manrope font-normal text-[30px] sm:text-[36.9px] leading-[42px] sm:leading-[54px] tracking-[1.35px] capitalize mb-4">
              Smarter Technology For
              <br />
              Sustainable <span className="text-[#854CFF]">Business Growth</span>
            </h2>

            {/* Description */}
            <p className="text-[#555555] font-manrope font-light text-[15px] sm:text-[16px] leading-[25.6px] max-w-[550px] mb-8 lg:mb-10">
              We create thoughtful digital experiences that help businesses work smarter, connect better, and adapt to a changing digital landscape. Every solution is built around clarity, performance, and real business needs.
            </p>

            {/* Deep Purple Feature Card (Figma: width: 600, height: 462.59, bg: #230B4C, py: 51px, px: 32-40px, opacity: 0.997) */}
            <div className="w-full lg:w-[600px] max-w-[600px] min-h-[462.59px] py-[51px] px-8 sm:px-10 bg-[#230B4C] opacity-[0.997] flex flex-col justify-between gap-[36px] shadow-sm">
              {/* Feature 1 */}
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-[19px] h-[16px] relative flex-shrink-0">
                    <img
                      src={ICONS.check}
                      alt=""
                      width="19"
                      height="16"
                      className="w-[19px] h-[16px] object-contain"
                    />
                  </div>
                  <h4 className="text-white font-manrope font-normal text-[16.4px] leading-[30px] tracking-[0.8px] capitalize">
                    Built For Long-Term Growth
                  </h4>
                </div>
                <p className="text-[#BFBACB] font-manrope font-normal text-[15px] sm:text-[16px] leading-[25.6px] tracking-[-0.32px] max-w-[513px] opacity-100">
                  Our solutions are designed with flexibility and scalability in mind, helping businesses evolve without compromising performance or reliability.
                </p>
              </div>

              {/* Thin Divider Line */}
              <div className="w-full border-t border-white/10" />

              {/* Feature 2 */}
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-[19px] h-[16px] relative flex-shrink-0">
                    <img
                      src={ICONS.check}
                      alt=""
                      width="19"
                      height="16"
                      className="w-[19px] h-[16px] object-contain"
                    />
                  </div>
                  <h4 className="text-white font-manrope font-normal text-[16.4px] leading-[30px] tracking-[0.8px] capitalize">
                    Designed Around Your Business
                  </h4>
                </div>
                <p className="text-[#BFBACB] font-manrope font-normal text-[15px] sm:text-[16px] leading-[25.6px] tracking-[-0.32px] max-w-[513px] opacity-100">
                  We understand that every business is different. Our approach focuses on creating practical digital experiences that align with your goals, workflows, and customers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Entire Figma Container (specs: width 550px, height 713px, max-width 550px) */}
          <div ref={sec3ImageRef} className="w-full lg:w-[550px] max-w-[550px] flex-shrink-0 will-change-transform">
            <Image
              src={rightContainerStats}
              alt="Team collaboration and 98% Client Satisfaction"
              width={550}
              height={713}
              unoptimized
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. INNOVATIVE TECHNOLOGY SOLUTIONS FOR MODERN BUSINESSES (2x2 Grid)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-8 sm:pt-10 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1290px] w-full mx-auto">
          {/* Heading */}
          <div className="text-center max-w-[650px] mx-auto mb-8 sm:mb-10">
            <h2 className="text-[#111111] font-manrope font-normal text-[28px] sm:text-[36.9px] leading-[38px] sm:leading-[54px] tracking-[1.35px] text-center capitalize">
              Innovative Technology Solutions
              <br />
              For <span className="text-[#854CFF]">Modern Businesses</span>
            </h2>
          </div>

          {/* 2x2 Grid (Figma: Container 1290x354, 2 rows, 2 columns, row gap: 30px, column gap: 30px, each box: 630x162, pl: 69px, pr: 46px) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1290px] w-full mx-auto">
            {[
              { title: "Web Development", href: "/services/website-development" },
              { title: "Mobile Development", href: "/services/mobile-app-development" },
              { title: "Cloud & Digital Solutions", href: "/services/digital-solutions" },
              { title: "AI & Automation", href: "/services/ai-solutions" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  borderColor: "rgba(23, 9, 57, 0.3)", // markem.webflow.io/Violet 30% (#170939 30%)
                }}
                className="group relative w-full max-w-[630px] h-[162px] bg-white border flex items-center justify-between pl-6 sm:pl-[50px] lg:pl-[69px] pr-[46px] transition-all duration-300 hover:border-[#854CFF] hover:bg-[#F3ECFF] hover:shadow-[0_4px_24px_rgba(133,76,255,0.08)] cursor-pointer mx-auto"
              >
                {/* Title */}
                <span className="text-[#111111] font-manrope text-[16px] sm:text-[17px] font-normal tracking-[0.2px] transition-colors">
                  {item.title}
                </span>

                {/* Circle: Width 80px, Height 80px, Radius 80px, Border 1px #170939 40%. On hover: bg-[#854CFF] border-[#854CFF] */}
                <div
                  style={{
                    borderColor: "rgba(23, 9, 57, 0.4)", // markem.webflow.io/Violet 40% (#170939 40%)
                  }}
                  className="w-[80px] h-[80px] rounded-none border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[#854CFF] group-hover:bg-[#854CFF]"
                >
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[14px] text-[#545AFF] group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M11 1.5L16.5 7M16.5 7L11 12.5M16.5 7H1.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. EMPOWERING BUSINESSES WITH FUTURE-READY SOLUTIONS
          ───────────────────────────────────────────────────────────── */}
      <section ref={sec5Ref} className="relative z-10 w-full pt-6 sm:pt-8 pb-1 sm:pb-2 px-4 sm:px-6 lg:px-8 overflow-x-clip">
        <div className="max-w-[1290px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">
          {/* Left Column: Container (6).png (width: 629, height: 779, max-width: 630) */}
          <div ref={sec5LeftRef} className="w-full lg:w-[580px] max-w-[580px] flex-shrink-0 will-change-transform lg:pr-8 xl:pr-12">
            <div className="relative w-full max-w-[580px] h-[435px] sm:h-[445px] overflow-hidden shadow-sm border border-[#E9E4F5]">
              <Image
                src={container6}
                alt="Empowering businesses with analytics and cloud consulting"
                width={629}
                height={779}
                unoptimized
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Vertical Partitioning Line (Figma x=756) */}
          <div
            ref={sec5DividerRef}
            className="hidden lg:block w-[1px] bg-[#00000020] h-[435px] sm:h-[445px] flex-shrink-0 will-change-transform"
          />

          {/* Right Column: Content & Accordion Steps */}
          <div ref={sec5RightRef} className="w-full lg:w-[550px] max-w-[550px] flex flex-col justify-start will-change-transform lg:pl-8 xl:pl-14">
            <h2 className="text-[#111111] font-manrope font-normal text-[28px] sm:text-[34px] leading-[38px] sm:leading-[46px] tracking-[1.2px] capitalize">
              Empowering Businesses With{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#854CFF]">Future-Ready Solutions</span>
            </h2>

            <p className="mt-3 text-[#555555] font-manrope font-light text-[15px] leading-relaxed max-w-xl">
              We combine technology, creativity, and business expertise to build meaningful digital experiences.
            </p>

            {/* Action Button: Left white box with Arrow.png (50x59) + Right gradient box (173x59) */}
            <div className="mt-4 mb-5">
              <Link
                href="/about"
                className="inline-flex items-center group shadow-sm transition-transform duration-300 hover:scale-[1.01]"
              >
                {/* Arrow box: width: 50, height: 52, bg: #FFFFFF, padding: 20px 18px, border */}
                <div className="w-[50px] h-[52px] bg-white border border-[#00000020] border-r-0 flex items-center justify-center py-[20px] px-[18px]">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[12px] h-[10px] text-[#111111] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M7 1L11 5M11 5L7 9M11 5H1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Gradient text box: width: 173, height: 52, padding: 2px 22px, bg: linear-gradient */}
                <div
                  className="w-[173px] h-[52px] flex items-center justify-center pt-[2px] px-[22px] text-white text-[13px] font-semibold tracking-widest uppercase"
                  style={{
                    background: "linear-gradient(90deg, #504CFF 0%, #480090 100%)",
                  }}
                >
                  MORE ABOUT US
                </div>
              </Link>
            </div>

            {/* Accordion Container: width: 550 */}
            <div className="w-full max-w-[550px] flex flex-col">
              {METHODOLOGY_STEPS.map((step, index) => {
                const isOpen = activeStep === index;

                return (
                  <div
                    key={step.number}
                    className="w-full max-w-[550px] border-t border-[#00000033] py-3.5 cursor-pointer group transition-colors"
                    onClick={() => toggleStep(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5 sm:gap-6">
                        {/* Digit: color #545AFF, 18.2x24px, 15px font, 1.4px tracking */}
                        <span className="w-[18.2px] h-[24px] text-[#545AFF] font-manrope font-medium text-[15px] leading-[23.94px] tracking-[1.4px] uppercase flex items-center justify-center flex-shrink-0">
                          {step.number}
                        </span>
                        <span className="text-[#111111] font-manrope text-[17px] sm:text-[18px] font-normal leading-snug group-hover:text-[#545AFF] transition-colors">
                          {step.title}
                        </span>
                      </div>

                      {/* Circle: 40x40px, rounded-full, border: 1px solid #00000033 */}
                      <div
                        className={`w-[40px] h-[40px] rounded-none border border-[#00000033] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#545AFF] border-[#545AFF] rotate-90"
                            : "group-hover:border-[#545AFF] group-hover:bg-[#FAF7FF]"
                        }`}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-[10px] h-[10px] transition-colors duration-300 ${
                            isOpen ? "text-white" : "text-[#111111] group-hover:text-[#545AFF]"
                          }`}
                        >
                          <path
                            d="M3.5 1.5L7 5M7 5L3.5 8.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Expandable Detail */}
                    {isOpen && (
                      <p className="mt-3.5 pl-[42px] text-[#666666] font-manrope font-light text-[14px] leading-relaxed max-w-xl animate-fadeIn">
                        {step.detail}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. TECHNOLOGY BUILT AROUND YOUR BUSINESS (Coder Banner with 4 Tabs)
          ───────────────────────────────────────────────────────────── */}
      <section ref={sec6Ref} className="relative z-10 w-full pt-1 sm:pt-2 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-x-clip">
        <div className="max-w-[1290px] mx-auto">
          {/* Header Row: 2 Columns (Only text appears from left) */}
          <div ref={sec6HeaderRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-4 sm:mb-5 will-change-transform">
            <div>
              <h2 className="text-[#111111] font-manrope font-normal text-[30px] sm:text-[36.9px] leading-[42px] sm:leading-[54px] tracking-[1.35px] capitalize">
                Technology Built Around
                <br />
                <span className="text-[#854CFF]">Your Business</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-[#666666] text-[15px] leading-relaxed font-light">
                We engineer high-performance platforms, enterprise infrastructure, and secure digital architectures that empower your operations and drive long-term business scalability.
              </p>
            </div>
          </div>

          {/* Interactive Crossfading Banner */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/8] lg:min-h-[580px] overflow-hidden shadow-xl border border-black/10 select-none bg-black">
            {/* Background Images Stack with Smooth Crossfade */}
            {BANNER_TABS.map((tab, idx) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeTab === idx ? "opacity-100 z-0 scale-100" : "opacity-0 pointer-events-none scale-[1.02]"
                } transition-transform duration-1000 ease-out`}
              >
                <Image
                  src={tab.image}
                  alt={tab.title}
                  fill
                  unoptimized
                  priority={idx === 0}
                  sizes="(max-width: 1290px) 100vw, 1290px"
                  className="object-cover object-center brightness-[0.88] contrast-[1.05]"
                />
              </div>
            ))}

            {/* Vignette Overlay matching Figma */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 z-[1] pointer-events-none" />

            {/* 4 Full-Height Column Vertical Partition Lines matching Figma */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20 pointer-events-none z-[2]" />

            {/* Bottom 4 Column Interactive Tabs */}
            <div
              onMouseLeave={() => setHoveredTab(null)}
              className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 md:grid-cols-4 items-end pointer-events-none"
            >
              {BANNER_TABS.map((tab, idx) => {
                const isHovered = hoveredTab === idx;
                const isCurrentActive = activeTab === idx && hoveredTab === null;

                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    onMouseEnter={() => {
                      setHoveredTab(idx);
                      setActiveTab(idx);
                    }}
                    onClick={() => setActiveTab(idx)}
                    className={`pointer-events-auto relative w-full flex flex-col justify-end text-left overflow-hidden transition-[height,background-color,padding] duration-300 ease-out cursor-pointer group ${
                      isHovered
                        ? "h-[135px] sm:h-[150px] lg:h-[165px] p-5 sm:p-6 lg:p-7 bg-[#854CFF] text-white shadow-2xl z-20"
                        : "h-[58px] sm:h-[66px] lg:h-[72px] px-4 py-3 sm:px-5 sm:py-3.5 lg:px-7 lg:py-4 bg-black/60 backdrop-blur-sm text-white/85 hover:text-white border-t border-white/20"
                    }`}
                  >
                    {/* Subtle purple line if current active while not hovering */}
                    {isCurrentActive && (
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-[#854CFF]" />
                    )}

                    <span
                      className={`font-manrope leading-snug transition-colors ${
                        isHovered
                          ? "text-[16px] sm:text-[18px] lg:text-[19px] font-semibold text-white mb-1.5"
                          : isCurrentActive
                          ? "text-[13px] sm:text-[15px] lg:text-[16px] font-medium text-white"
                          : "text-[13px] sm:text-[15px] lg:text-[16px] font-normal text-white/85 group-hover:text-white"
                      }`}
                    >
                      {tab.title}
                    </span>

                    {isHovered && (
                      <span className="text-[12px] sm:text-[13px] lg:text-[13.5px] font-manrope font-normal text-white/95 leading-snug animate-fadeIn">
                        {tab.subtitle}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. LET'S WORK WITH US (CTA Banner)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0E101F] text-white">
        <div className="max-w-[1290px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-normal tracking-tight leading-tight">
              <span className="text-[#8B62FF]">Let&apos;s</span> work with Us
            </h2>
            <p className="mt-4 text-white/70 text-[15px] sm:text-[16px] leading-relaxed font-light">
              AGS is a premier digital technology partner, delivering enterprise web platforms, mobile solutions, AI automation, and robust cybersecurity.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => openForm()}
              className="inline-flex items-center gap-2.5 bg-white text-black px-8 py-3.5 text-[15px] font-medium transition-all duration-300 hover:bg-[#854CFF] hover:text-white group cursor-pointer shadow-lg whitespace-nowrap"
            >
              <span>Know More</span>
              <div className="w-[20px] h-[20px] rounded-none border border-[#000000] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:rotate-45">
                <img
                  src={ICONS.uilArrowUp}
                  alt=""
                  width="20"
                  height="20"
                  className="w-[20px] h-[20px] object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FOOTER
          ───────────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
