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
    image:
      "/full-stack/65ca0b34d82771e109c427c5_pexels-cottonbro-studio-5082579-p-800.jpeg.png",
    link: "/portfolio/mangal-materials",
  },
  {
    id: "dhunseri",
    title: "Dhunseri - tea and macadamia plantation platform",
    desc: "Our team of experienced professionals is dedicated to providing exceptional web design, development, and user experience services for Dhunseri's global tea cultivation and macadamia nut production.",
    category: "Development / Design",
    image:
      "/full-stack/65ca0b42d82771e109c42b7d__luke-chesser-JKUTrJ4vK00-unsplash-p-800.jpeg.png",
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
          - Gradient highlight on first word / title part
          - 1.5px linear-gradient border "Get Started" CTA button
          - uil_arrow-up.png single circle arrow icon
          - Strict rounded-none
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden pt-28 pb-20">
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
          <ScrollReveal direction="down" distance={90} duration={1.1}>
            <div className="max-w-[740px]">
              <h1 className="text-[44px] sm:text-[56px] lg:text-[66px] font-normal tracking-tight text-white leading-[1.12]">
                <span className="bg-gradient-to-r from-[#9875FF] via-[#7B5CFF] to-[#504CFF] bg-clip-text text-transparent">
                  {titleGradient}
                </span>{" "}
                {titleRest}
              </h1>

              <p className="mt-5 sm:mt-6 text-[15.5px] sm:text-[17px] text-white/80 font-light leading-relaxed max-w-[580px]">
                {subtitle}
              </p>

              {/* Exact CTA Button from Figma */}
              <div className="mt-8 sm:mt-10">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center gap-3 text-white text-[15px] font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-none group"
                  style={{
                    width: "167px",
                    height: "49px",
                    border: "1.5px solid transparent",
                    background:
                      "linear-gradient(#08091A, #08091A) padding-box, linear-gradient(98.29deg, #504CFF 0%, #480091 100%) border-box",
                  }}
                >
                  <span>Get Started</span>
                  <Image
                    src="/full-stack/uil_arrow-up-white.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SERVICE DESCRIPTION SECTION
          White background, clean large title, and comprehensive copy
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full bg-white pt-20 sm:pt-28 pb-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1240px] mx-auto">
          <ScrollReveal direction="up" distance={80} duration={1.0}>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-normal tracking-tight text-[#111111]">
              {descriptionHeading}
            </h2>

            <p className="mt-6 text-[#555E70] font-light text-[15px] sm:text-[16px] leading-[1.8] max-w-[1180px]">
              {descriptionText}
            </p>
          </ScrollReveal>

          {/* ─────────────────────────────────────────────────────────
              3. CHECKLIST CAPABILITIES + IMAGE SECTION
              Left: Image.png (strict rounded-none)
              Right: 6 Checklist items with square purple checkmarks
              ───────────────────────────────────────────────────────── */}
          <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image: Image.png */}
            <ScrollReveal
              direction="left"
              distance={100}
              duration={1.1}
              className="lg:col-span-6"
            >
              <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-none overflow-hidden shadow-lg border border-[#F0F2F6]">
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
              distance={100}
              duration={1.1}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <div className="divide-y divide-[#EAECEF]">
                {checklistItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-5 sm:py-5.5 flex items-center gap-4.5 group"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#703EFF] flex items-center justify-center shrink-0 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="w-4 h-4 text-white"
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
                    <span className="text-[#111111] text-[17px] sm:text-[19px] font-medium tracking-tight">
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
          <div className="mt-20 sm:mt-28 pb-12">
            <ScrollReveal direction="up" distance={80} duration={1.0}>
              <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-normal tracking-tight text-[#111111] mb-8">
                {benefitsHeading}
              </h2>

              <div className="space-y-4 text-[15px] sm:text-[16px] text-[#555E70] leading-[1.8] font-light">
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
      <section className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden bg-[#070518]">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading & Subtitle */}
            <ScrollReveal
              direction="left"
              distance={100}
              duration={1.1}
              className="lg:col-span-5"
            >
              <h2 className="text-[40px] sm:text-[50px] lg:text-[56px] font-normal tracking-tight text-white leading-[1.12]">
                Working process
              </h2>

              <p className="mt-6 text-white/75 font-light text-[15px] sm:text-[16px] leading-relaxed max-w-md">
                Our IT consulting process is a systematic journey comprising four stages: Assessment and Analysis, Planning, Implementation and Execution, and Monitoring and Optimization.
              </p>
            </ScrollReveal>

            {/* Right Column: 4 Staggered Circular Glass Tiles (2x2, rounded-full) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 lg:gap-8 items-start justify-items-center">
                {/* Column A (01, 03) */}
                <div className="flex flex-col gap-8 sm:gap-10">
                  {/* Step 01 */}
                  <ScrollReveal direction="down" distance={70} duration={1.0}>
                    <div className="w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] rounded-full border border-white/15 bg-[#17123A]/55 backdrop-blur-md flex flex-col items-center justify-center p-6 sm:p-7 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[#854CFF]/60 hover:scale-105 transition-all duration-300">
                      <span className="text-[38px] sm:text-[42px] font-bold text-white leading-none mb-2">
                        {workingProcessSteps[0].step}
                      </span>
                      <h3 className="text-[16px] sm:text-[17px] font-semibold text-white leading-snug mb-1.5">
                        {workingProcessSteps[0].title}
                      </h3>
                      <p className="text-[12px] sm:text-[12.5px] text-white/70 font-light leading-relaxed max-w-[190px]">
                        {workingProcessSteps[0].desc}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Step 03 */}
                  <ScrollReveal direction="up" distance={70} duration={1.0}>
                    <div className="w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] rounded-full border border-white/15 bg-[#17123A]/55 backdrop-blur-md flex flex-col items-center justify-center p-6 sm:p-7 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[#854CFF]/60 hover:scale-105 transition-all duration-300">
                      <span className="text-[38px] sm:text-[42px] font-bold text-white leading-none mb-2">
                        {workingProcessSteps[2].step}
                      </span>
                      <h3 className="text-[16px] sm:text-[17px] font-semibold text-white leading-snug mb-1.5">
                        {workingProcessSteps[2].title}
                      </h3>
                      <p className="text-[12px] sm:text-[12.5px] text-white/70 font-light leading-relaxed max-w-[190px]">
                        {workingProcessSteps[2].desc}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Column B (02, 04) - Staggered Downward */}
                <div className="flex flex-col gap-8 sm:gap-10 sm:pt-14 lg:pt-16">
                  {/* Step 02 */}
                  <ScrollReveal direction="down" distance={70} duration={1.1}>
                    <div className="w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] rounded-full border border-white/15 bg-[#17123A]/55 backdrop-blur-md flex flex-col items-center justify-center p-6 sm:p-7 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[#854CFF]/60 hover:scale-105 transition-all duration-300">
                      <span className="text-[38px] sm:text-[42px] font-bold text-white leading-none mb-2">
                        {workingProcessSteps[1].step}
                      </span>
                      <h3 className="text-[16px] sm:text-[17px] font-semibold text-white leading-snug mb-1.5">
                        {workingProcessSteps[1].title}
                      </h3>
                      <p className="text-[12px] sm:text-[12.5px] text-white/70 font-light leading-relaxed max-w-[190px]">
                        {workingProcessSteps[1].desc}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Step 04 */}
                  <ScrollReveal direction="up" distance={70} duration={1.1}>
                    <div className="w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] rounded-full border border-white/15 bg-[#17123A]/55 backdrop-blur-md flex flex-col items-center justify-center p-6 sm:p-7 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[#854CFF]/60 hover:scale-105 transition-all duration-300">
                      <span className="text-[38px] sm:text-[42px] font-bold text-white leading-none mb-2">
                        {workingProcessSteps[3].step}
                      </span>
                      <h3 className="text-[16px] sm:text-[17px] font-semibold text-white leading-snug mb-1.5">
                        {workingProcessSteps[3].title}
                      </h3>
                      <p className="text-[12px] sm:text-[12.5px] text-white/70 font-light leading-relaxed max-w-[190px]">
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
          Left: Our Work pill, Heading, Dual-block VIEW MORE button, Navigation Arrows
          Right: Project Cards (Mangal Materials & Dhunseri)
          Strict rounded-none
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Header Column */}
            <ScrollReveal
              direction="left"
              distance={100}
              duration={1.0}
              className="lg:col-span-4"
            >
              <span className="bg-[#F4EEFF] text-[#854CFF] px-3.5 py-1 text-[12px] font-semibold tracking-wider uppercase inline-block mb-3.5 rounded-none">
                Our Work
              </span>

              <h2 className="text-[36px] sm:text-[44px] font-normal tracking-tight text-[#111111] leading-[1.15] mb-6">
                Our latest
                <br />
                projects
              </h2>

              {/* Dual Block VIEW MORE Button */}
              <div className="mb-10">
                <Link
                  href="/portfolio"
                  className="inline-flex items-stretch shadow-md hover:scale-[1.02] transition-transform duration-300 group cursor-pointer rounded-none"
                >
                  <div className="w-[46px] h-[46px] bg-white border border-[#6C38FF]/40 flex items-center justify-center text-[#111111] text-[16px] transition-colors group-hover:bg-[#FAF7FF]">
                    →
                  </div>
                  <div className="h-[46px] px-6 bg-gradient-to-r from-[#504CFF] to-[#480090] text-white flex items-center justify-center font-medium text-[12.5px] tracking-widest uppercase transition-opacity group-hover:opacity-95">
                    VIEW MORE
                  </div>
                </Link>
              </div>

              {/* Navigation Arrows (circular buttons matching Figma) */}
              <div className="flex items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={prevProject}
                  aria-label="Previous project"
                  className="w-11 h-11 rounded-full border border-[#854CFF]/35 text-[#854CFF] flex items-center justify-center hover:bg-[#854CFF] hover:text-white transition-colors duration-200 cursor-pointer text-[17px]"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Next project"
                  className="w-11 h-11 rounded-full border border-[#854CFF]/35 text-[#854CFF] flex items-center justify-center hover:bg-[#854CFF] hover:text-white transition-colors duration-200 cursor-pointer text-[17px]"
                >
                  →
                </button>
              </div>
            </ScrollReveal>

            {/* Right Project Cards Column */}
            <ScrollReveal
              direction="right"
              distance={100}
              duration={1.1}
              className="lg:col-span-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Project 1: Mangal Materials */}
                <div className="group flex flex-col">
                  <Link
                    href={projects[0].link}
                    className="relative w-full h-[260px] sm:h-[300px] overflow-hidden rounded-none shadow-sm block"
                  >
                    <Image
                      src={projects[0].image}
                      alt={projects[0].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <h3 className="mt-5 text-[20px] sm:text-[21px] font-medium text-[#111111] leading-snug group-hover:text-[#854CFF] transition-colors">
                    <Link href={projects[0].link}>{projects[0].title}</Link>
                  </h3>

                  <p className="mt-2.5 text-[#555E70] text-[13.5px] sm:text-[14px] leading-relaxed line-clamp-4 font-light">
                    {projects[0].desc}
                  </p>

                  <Link
                    href={projects[0].link}
                    className="mt-3.5 text-[#854CFF] text-[13.5px] font-medium hover:underline inline-block"
                  >
                    {projects[0].category}
                  </Link>
                </div>

                {/* Project 2: Dhunseri */}
                <div className="group flex flex-col">
                  <Link
                    href={projects[1].link}
                    className="relative w-full h-[260px] sm:h-[300px] overflow-hidden rounded-none shadow-sm block"
                  >
                    <Image
                      src={projects[1].image}
                      alt={projects[1].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <h3 className="mt-5 text-[20px] sm:text-[21px] font-medium text-[#111111] leading-snug group-hover:text-[#854CFF] transition-colors">
                    <Link href={projects[1].link}>{projects[1].title}</Link>
                  </h3>

                  <p className="mt-2.5 text-[#555E70] text-[13.5px] sm:text-[14px] leading-relaxed line-clamp-4 font-light">
                    {projects[1].desc}
                  </p>

                  <Link
                    href={projects[1].link}
                    className="mt-3.5 text-[#854CFF] text-[13.5px] font-medium hover:underline inline-block"
                  >
                    {projects[1].category}
                  </Link>
                </div>
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

