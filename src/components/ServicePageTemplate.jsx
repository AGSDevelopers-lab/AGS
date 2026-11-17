"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const DEFAULT_PROJECTS = [
  {
    id: "mangal-materials",
    title: "Mangal Materials - e-commerce platform and mobile application",
    desc: "Our team of experienced professionals is dedicated to providing exceptional web design and development services for Mangal Materials, creating a seamless digital shopping experience for traditional Hindu ritual and puja items across West Bengal.",
    category: "Design / Development",
    image: "/showcase/mangal-materials.png",
    link: "/portfolio",
  },
  {
    id: "dhunseri",
    title: "Dhunseri - tea and macadamia plantation platform",
    desc: "Our team of experienced professionals is dedicated to providing exceptional web design, development, and user experience services for Dhunseri's global tea cultivation and macadamia nut production.",
    category: "Development / Design",
    image: "/showcase/dhunseri-tea.png",
    link: "/portfolio",
  },
  {
    id: "bhairal",
    title: "Bhairal - influencer & creator collaboration platform",
    desc: "Empowering content creators and brands to collaborate seamlessly with end-to-end campaign tracking and automated payment settlements.",
    category: "Development / Design",
    image: "/showcase/bhairal-connect.png",
    link: "/portfolio",
  },
  {
    id: "himalaya-darpan",
    title: "Himalaya Darpan - digital news & editorial platform",
    desc: "High-traffic modern news delivery platform engineered with sub-second page loads and comprehensive multilingual editorial CMS workflows.",
    category: "Design / Development",
    image: "/showcase/himalaya-darpan.png",
    link: "/portfolio",
  },
  {
    id: "molifera",
    title: "Molifera Media - creative agency showcase & production portal",
    desc: "Sophisticated digital portfolio and lead-generation portal built for a top-tier media and production powerhouse.",
    category: "Design / Development",
    image: "/showcase/molifera-media.png",
    link: "/portfolio",
  },
  {
    id: "totojan",
    title: "TotoJan - on-demand electric transit ride sharing app",
    desc: "Mobile application connecting riders with electric transit vehicles for greener, affordable urban commutes.",
    category: "Development / Design",
    image: "/showcase/totojan-ride.png",
    link: "/portfolio",
  },
];

const DEFAULT_WORKING_PROCESS = [
  {
    step: "01",
    title: "Analysis and Planning",
    desc: "The process begins by thoroughly understanding the client's objectives.",
  },
  {
    step: "02",
    title: "Current State Evaluation",
    desc: "Assess the client's existing IT infrastructure, systems, and processes",
  },
  {
    step: "03",
    title: "Implementation and Execution",
    desc: "Execute the project plan, which may involve deploying new software, hardware, or IT processes.",
  },
  {
    step: "04",
    title: "Evaluation and Maintenance",
    desc: "Assess the results of the implemented solutions against the predefined goals",
  },
];

export default function ServicePageTemplate({
  heroImage,
  titleGradient,
  titleRest,
  subtitle,
  serviceCategory = "Web Development",
  descriptionHeading = "Service Description",
  descriptionText,
  checklistItems = [],
  benefitsHeading = "Benefits",
  benefits = [],
  workingProcessSteps = DEFAULT_WORKING_PROCESS,
  projects = DEFAULT_PROJECTS,
}) {
  const { openForm } = useCtaForm();
  const [projectIndex, setProjectIndex] = useState(0);

  const handleCtaClick = () => {
    openForm({
      service: serviceCategory,
      lockService: true,
    });
  };

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <main className="relative min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          Exact match to Figma design system:
          - Custom Neon digital hero background image with dark vignette
          - Clean compact vertical height, resolving excessive whitespace
          - Strict rounded-none
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex items-center overflow-hidden pt-20 sm:pt-24 pb-10 sm:pb-12">
        <Image
          src={heroImage}
          alt={`${titleGradient} ${titleRest} Hero`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />

        {/* Ambient Dark Indigo Vignette Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(7, 8, 22, 0.72) 0%, rgba(9, 10, 28, 0.86) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal direction="down" distance={70} duration={1.0}>
            <div className="max-w-[740px]">
              <h1 className="text-[30px] xs:text-[36px] sm:text-[44px] lg:text-[52px] font-normal tracking-tight leading-[1.14] bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_100%)] bg-clip-text text-transparent">
                {titleGradient ? `${titleGradient} ${titleRest}` : titleRest}
              </h1>

              <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-white/80 font-light leading-relaxed max-w-[580px]">
                {subtitle}
              </p>

              {/* Exact CTA Button from Figma */}
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center gap-3 text-white text-[14px] font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-none group"
                  style={{
                    width: "167px",
                    height: "46px",
                    border: "1.5px solid transparent",
                    background:
                      "linear-gradient(#08091A, #08091A) padding-box, linear-gradient(98.29deg, #504CFF 0%, #480091 100%) border-box",
                  }}
                >
                  <span>Get Started</span>
                  <span className="flex h-5 w-5 items-center justify-center shrink-0 rounded-full border border-white/80 text-white transition-transform duration-300 group-hover:rotate-45">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      className="w-3 h-3"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SERVICE DESCRIPTION SECTION
          White background, clean large title, and comprehensive copy
          Tightened vertical spacing matching Figma reference
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full bg-white pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1240px] mx-auto">
          <ScrollReveal direction="up" distance={60} duration={0.9}>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-normal tracking-tight text-[#111111]">
              {descriptionHeading}
            </h2>

            <p className="mt-2.5 sm:mt-3 text-[#555E70] font-light text-[15px] sm:text-[15.5px] leading-relaxed max-w-[1180px]">
              {descriptionText}
            </p>
          </ScrollReveal>

          {/* ─────────────────────────────────────────────────────────
              3. CHECKLIST CAPABILITIES + IMAGE SECTION
              Left: Image.png (strict rounded-none)
              Right: 6 Checklist items with square purple checkmarks
              Tightened gap to 32px matching Figma reference
              ───────────────────────────────────────────────────────── */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Image: Image.png */}
            <ScrollReveal
              direction="left"
              distance={80}
              duration={1.0}
              className="lg:col-span-6"
            >
              <div className="relative w-full aspect-[577/520] sm:aspect-[577/550] lg:aspect-[577/580] max-h-[460px] rounded-none overflow-hidden shadow-lg border border-[#F0F2F6]">
                <Image
                  src="/full-stack/Image.png"
                  alt={`${titleGradient} ${titleRest} Engineering Workflow`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>

            {/* Right Checklist Items */}
            <ScrollReveal
              direction="right"
              distance={80}
              duration={1.0}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <div className="divide-y divide-[#EAECEF]">
                {checklistItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-2.5 sm:py-3 flex items-center gap-3.5 group"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#703EFF] flex items-center justify-center shrink-0 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[#111111] text-[15px] sm:text-[16.5px] font-medium tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ─────────────────────────────────────────────────────────
              4. BENEFITS SECTION
              Lead-in bold titles with clear descriptive statements
              ───────────────────────────────────────────────────────── */}
          <div className="mt-8 sm:mt-10 pb-2 sm:pb-4">
            <ScrollReveal direction="up" distance={60} duration={0.9}>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-normal tracking-tight text-[#111111] mb-3.5 sm:mb-4">
                {benefitsHeading}
              </h2>

              <div className="space-y-2.5 sm:space-y-3 text-[14.5px] sm:text-[15.5px] text-[#555E70] leading-relaxed font-light">
                {benefits.map((benefit, idx) => (
                  <p key={idx}>
                    <strong className="font-semibold text-[#111111]">
                      {benefit.title}
                    </strong>{" "}
                    {benefit.desc}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WORKING PROCESS SECTION
          Dark Cosmic Section with 4 Staggered Translucent Glass Tiles
          Strict rounded-none
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12 overflow-hidden bg-[#070518]">
        {/* Radial Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, #281254 0%, #0F0A2A 45%, #070518 100%)",
          }}
        />

        {/* Decorative Concentric Rings in Background (rounded-full) */}
        <div
          className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#854CFF]/10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Subtitle */}
            <ScrollReveal
              direction="left"
              distance={80}
              duration={1.0}
              className="lg:col-span-5"
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-normal tracking-tight text-white leading-[1.12]">
                Working process
              </h2>

              <p className="mt-4 sm:mt-5 text-white/75 font-light text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-md">
                Our IT consulting process is a systematic journey comprising four stages: Assessment and Analysis, Planning, Implementation and Execution, and Monitoring and Optimization.
              </p>
            </ScrollReveal>

            {/* Right Column: 4 Staggered Circular Glass Tiles (2x2, rounded-full) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-5 lg:gap-6 items-start justify-items-center">
                {/* Column A (01, 03) */}
                <div className="flex flex-col gap-6 sm:gap-8">
                  {/* Step 01 */}
                  <ScrollReveal direction="down" distance={60} duration={0.9}>
                    <div className="w-[200px] h-[200px] xs:w-[220px] xs:h-[220px] sm:w-[240px] sm:h-[240px] rounded-full border border-white/15 bg-[#17123A]/55 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[#854CFF]/60 hover:scale-105 transition-all duration-300">
                      <span className="text-[30px] sm:text-[36px] font-bold text-white leading-none mb-1.5">
                        {workingProcessSteps[0].step}
                      </span>
                      <h3 className="text-[14px] sm:text-[15.5px] font-semibold text-white leading-snug mb-1">
                        {workingProcessSteps[0].title}
                      </h3>
                      <p className="text-[11px] sm:text-[12px] text-white/70 font-light leading-relaxed max-w-[170px]">
                        {workingProcessSteps[0].desc}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Step 03 */}
                  <ScrollReveal direction="up" distance={60} duration={0.9}>
                    <div className="w-[200px] h-[200px] xs:w-[220px] xs:h-[220px] sm:w-[240px] sm:h-[240px] rounded-full border border-white/15 bg-[#17123A]/55 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[#854CFF]/60 hover:scale-105 transition-all duration-300">
                      <span className="text-[30px] sm:text-[36px] font-bold text-white leading-none mb-1.5">
                        {workingProcessSteps[2].step}
                      </span>
                      <h3 className="text-[14px] sm:text-[15.5px] font-semibold text-white leading-snug mb-1">
                        {workingProcessSteps[2].title}
                      </h3>
                      <p className="text-[11px] sm:text-[12px] text-white/70 font-light leading-relaxed max-w-[170px]">
                        {workingProcessSteps[2].desc}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Column B (02, 04) - Staggered Downward */}
                <div className="flex flex-col gap-6 sm:gap-8 sm:pt-8 lg:pt-10">
                  {/* Step 02 */}
                  <ScrollReveal direction="down" distance={60} duration={1.0}>
                    <div className="w-[200px] h-[200px] xs:w-[220px] xs:h-[220px] sm:w-[240px] sm:h-[240px] rounded-full border border-white/15 bg-[#17123A]/55 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[#854CFF]/60 hover:scale-105 transition-all duration-300">
                      <span className="text-[30px] sm:text-[36px] font-bold text-white leading-none mb-1.5">
                        {workingProcessSteps[1].step}
                      </span>
                      <h3 className="text-[14px] sm:text-[15.5px] font-semibold text-white leading-snug mb-1">
                        {workingProcessSteps[1].title}
                      </h3>
                      <p className="text-[11px] sm:text-[12px] text-white/70 font-light leading-relaxed max-w-[170px]">
                        {workingProcessSteps[1].desc}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Step 04 */}
                  <ScrollReveal direction="up" distance={60} duration={1.0}>
                    <div className="w-[200px] h-[200px] xs:w-[220px] xs:h-[220px] sm:w-[240px] sm:h-[240px] rounded-full border border-white/15 bg-[#17123A]/55 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[#854CFF]/60 hover:scale-105 transition-all duration-300">
                      <span className="text-[30px] sm:text-[36px] font-bold text-white leading-none mb-1.5">
                        {workingProcessSteps[3].step}
                      </span>
                      <h3 className="text-[14px] sm:text-[15.5px] font-semibold text-white leading-snug mb-1">
                        {workingProcessSteps[3].title}
                      </h3>
                      <p className="text-[11px] sm:text-[12px] text-white/70 font-light leading-relaxed max-w-[170px]">
                        {workingProcessSteps[3].desc}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. OUR LATEST PROJECTS SECTION
          Left: Heading, Dual-block VIEW MORE button, Navigation Arrows
          Right: Dynamically Navigable Project Cards
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full bg-white py-10 sm:py-12 lg:py-14 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Header Column */}
            <ScrollReveal
              direction="left"
              distance={80}
              duration={1.0}
              className="lg:col-span-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-[30px] sm:text-[36px] font-normal tracking-tight text-[#111111] leading-[1.15] mb-4">
                  Our latest
                  <br />
                  projects
                </h2>

                {/* Dual Block VIEW MORE Button */}
                <div className="mb-4">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-stretch shadow-sm hover:scale-[1.02] transition-transform duration-300 group cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-[44px] h-[44px] bg-white border border-[#6C38FF]/40 flex items-center justify-center text-[#111111] transition-colors group-hover:bg-[#FAF7FF] shrink-0">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-3 text-current transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M1.5 6H14.5M10 1.5L14.5 6L10 10.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="h-[44px] px-5 bg-gradient-to-r from-[#504CFF] to-[#480090] text-white flex items-center justify-center font-medium text-[12px] tracking-widest uppercase transition-opacity group-hover:opacity-95">
                      VIEW MORE
                    </div>
                  </Link>
                </div>
              </div>

              {/* Navigation Arrows positioned at bottom with unambiguous direction */}
              <div className="flex items-center gap-3 pt-4 lg:pt-8 mt-auto">
                <button
                  type="button"
                  onClick={prevProject}
                  aria-label="Previous project"
                  className="w-10 h-10 rounded-full border border-[#854CFF]/50 text-[#854CFF] flex items-center justify-center hover:bg-[#854CFF] hover:text-white transition-all duration-300 cursor-pointer shrink-0 group shadow-xs"
                  style={{ borderRadius: "9999px" }}
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-3 text-current transition-transform duration-200 group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M14.5 6H1.5M6 1.5L1.5 6L6 10.5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Next project"
                  className="w-10 h-10 rounded-full border border-[#854CFF]/50 text-[#854CFF] flex items-center justify-center hover:bg-[#854CFF] hover:text-white transition-all duration-300 cursor-pointer shrink-0 group shadow-xs"
                  style={{ borderRadius: "9999px" }}
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-3 text-current transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M1.5 6H14.5M10 1.5L14.5 6L10 10.5"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </ScrollReveal>

            {/* Right Project Cards Column */}
            <ScrollReveal
              direction="right"
              distance={80}
              duration={1.0}
              className="lg:col-span-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-start">
                {[0, 1].map((offset) => {
                  const p = projects[(projectIndex + offset) % projects.length];
                  return (
                    <div key={p.id || offset} className="group flex flex-col transition-all duration-300">
                      <Link
                        href={p.link || "/portfolio"}
                        className="relative w-full aspect-[16/10] overflow-hidden shadow-sm block bg-[#0F0D24]/5 border border-black/5"
                      >
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          quality={95}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>

                      <h3 className="mt-3.5 text-[17px] sm:text-[18.5px] font-medium text-[#111111] leading-snug group-hover:text-[#854CFF] transition-colors">
                        <Link href={p.link || "/portfolio"}>{p.title}</Link>
                      </h3>

                      <p className="mt-1.5 text-[#555E70] text-[13px] sm:text-[13.5px] leading-relaxed line-clamp-3 font-light">
                        {p.desc}
                      </p>

                      <Link
                        href={p.link || "/portfolio"}
                        className="mt-2.5 text-[#854CFF] text-[13px] font-medium hover:underline inline-flex items-center gap-1.5 group/link"
                      >
                        <span>{p.category}</span>
                        <svg
                          className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. BOTTOM CTA SECTION ("Let's work with Us")
          ───────────────────────────────────────────────────────────── */}
      <CTASection />

      {/* ─────────────────────────────────────────────────────────────
          8. GLOBAL FOOTER
          ───────────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}

