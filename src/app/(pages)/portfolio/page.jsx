"use client";

import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { useCtaForm } from "@/components/CtaFormProvider";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────
// 9 FEATURED PROJECTS FROM FIGMA DESKTOP - 8 (EXACT HOVER TEXT SPECS)
// ─────────────────────────────────────────────────────────────────────────────
const PORTFOLIO_PROJECTS = [
  {
    id: "dhunseri",
    title: "Dhunseri",
    badge: "Website Redesign",
    description: "A trusted name in premium tea manufacturing and also distribution.",
    image: "/portfolio/Dhunseri Tea Website Laptop Mockup.png",
    href: "/portfolio/dhunseri",
  },
  {
    id: "bhairal",
    title: "Bhairal",
    badge: "Website Development",
    description: "The first influencer platform for freelancing. Find and hire top creators.",
    image: "/portfolio/Bhairal Influencer Platform Laptop Mockup.png",
    href: "/portfolio/bhairal",
  },
  {
    id: "mangal-materials-web",
    title: "Mangal Materials",
    badge: "Website Development",
    description: "Your one-stop destination for all essential items for every spiritual ritual.",
    image: "/portfolio/Mangal Materials Sacred Rituals Website.png",
    href: "/portfolio/mangal-materials",
  },
  {
    id: "himalaya-darpan-web",
    title: "Himalaya Darpan",
    badge: "Website Development",
    description: "A digital news platform delivering regional and international news.",
    image: "/portfolio/हिमालय दर्पण समाचार डेस्क.png",
    href: "/portfolio/himalayan-darpan",
  },
  {
    id: "cng",
    title: "CNG",
    badge: "Website Redesign",
    description: "A hub for cyclist registrations, flagship events, and brand sponsorships.",
    image: "/portfolio/Cycling Community Laptop Hero Scene.png",
    href: "/portfolio/cng",
  },
  {
    id: "molifera-media",
    title: "Molifera Media",
    badge: "Website Redesign",
    description: "Your 360° partner for strategy, marketing, and brand growth.",
    image: "/portfolio/Molifera Media Laptop Workspace.png",
    href: "/portfolio/molifera-media",
  },
  {
    id: "himalaya-darpan-app",
    title: "Himalaya Darpan",
    badge: "App Development",
    description: "A digital news platform delivering regional and international news.",
    image: "/portfolio/Himalaya Darpan News on Smartphone.png",
    href: "/portfolio/himalayan-darpan",
  },
  {
    id: "mangal-materials-app",
    title: "Mangal Materials",
    badge: "App Redesign",
    description: "Your one-stop destination for all essential items for every spiritual ritual.",
    image: "/portfolio/Mangal Materials Pooja App on Smartphone.png",
    href: "/portfolio/mangal-materials",
  },
  {
    id: "totojan",
    title: "TotoJan",
    badge: "App Development",
    description: "TotoJan makes taxi rides simple. Book your ride anytime, anywhere.",
    image: "/portfolio/Eco-Friendly Ride App on Wooden Desk.png",
    href: "/portfolio/totojan",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HERO CTA BUTTON (Using uil_arrow-up.png icon)
// ─────────────────────────────────────────────────────────────────────────────
function HeroCTA() {
  const { openForm } = useCtaForm();

  return (
    <button
      type="button"
      onClick={() => openForm()}
      className="group inline-flex items-center gap-3 bg-white px-7 py-3.5 text-[15px] font-medium text-[#111111] shadow-xl transition-all duration-300 hover:bg-white/95 hover:scale-[1.02] cursor-pointer"
    >
      <span>Get Started</span>
      <Image
        src="/portfolio/uil_arrow-up.png"
        alt=""
        width={22}
        height={22}
        className="w-5 h-5 object-contain transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CARD WITH INTERACTIVE FIGMA HOVER STATE
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  return (
    <article className="group relative w-full aspect-[414/480] overflow-hidden bg-[#F4F4F6] shadow-sm hover:shadow-2xl transition-all duration-500">
      <Link href={project.href} className="block w-full h-full relative">
        {/* Top-Left Category Badge */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 px-3 py-1 sm:px-3.5 sm:py-1.5 bg-black/60 backdrop-blur-md border border-white/15 text-white font-manrope font-normal text-[11px] sm:text-[13px] tracking-wide pointer-events-none">
          {project.badge}
        </div>

        {/* Top-Right Circular Purple Button with Diagonal Arrow ↗ (Appears on Hover) */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-gradient-to-br from-[#6C38FF] to-[#480090] flex items-center justify-center shadow-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none group-hover:brightness-110">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>

        {/* Device Mockup Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3}
            className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Floating Bottom Box: Default Pill -> Expands to Title + Description on Hover */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex flex-row items-stretch shadow-xl transition-all duration-300 group-hover:-translate-y-1">
          {/* White Card Box */}
          <div className="flex-1 bg-white px-5 sm:px-6 py-3.5 sm:py-4 flex flex-col justify-center min-w-0 transition-all duration-300">
            <h3 className="text-[#111111] font-manrope font-normal text-[20px] sm:text-[22px] tracking-tight leading-none truncate m-0 p-0">
              {project.title}
            </h3>
            {/* Description Text (expands smoothly on hover matching Figma) */}
            <p className="text-[#666666] font-manrope font-light text-[13px] sm:text-[14px] leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300 overflow-hidden m-0 p-0">
              {project.description}
            </p>
          </div>

          {/* Attached Purple Gradient Arrow Box (Perfect level match, self-stretch, collapses on hover) */}
          <div className="w-[50px] sm:w-[54px] self-stretch shrink-0 bg-gradient-to-br from-[#6C38FF] to-[#480090] flex items-center justify-center transition-all duration-300 group-hover:w-0 group-hover:opacity-0 group-hover:pointer-events-none overflow-hidden">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="text-white transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PORTFOLIO PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const { openForm } = useCtaForm();

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black pb-0">
      {/* Ambient background glows matching original theme */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#020205_22%,#010103_48%,#000000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_16%,rgba(86,126,255,0.16),rgba(0,0,0,0)_18%),radial-gradient(circle_at_96%_14%,rgba(120,96,255,0.18),rgba(0,0,0,0)_18%),radial-gradient(circle_at_3%_48%,rgba(72,118,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_97%_54%,rgba(126,84,255,0.15),rgba(0,0,0,0)_18%),radial-gradient(circle_at_2%_82%,rgba(82,130,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_98%_88%,rgba(128,88,255,0.14),rgba(0,0,0,0)_18%)]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Our Portfolio - Exact Figma Specs)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full pt-16 lg:pt-24 flex justify-center">
        <section className="relative flex w-full min-h-[580px] lg:h-[785px] max-w-[1440px] flex-col items-center justify-center px-6 pb-16 pt-20 text-center overflow-hidden sm:pb-24 sm:pt-28">
          {/* Hero background image */}
          <Image
            src="/frame2.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          {/* Exact Figma Gradient Overlay: linear-gradient(270deg, rgba(38, 35, 107, 0) 0%, #1B1A32 100%) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, rgba(38, 35, 107, 0) 0%, #1B1A32 100%)",
              opacity: 1,
            }}
          />
          {/* Subtle dark tint for optimal readability */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          {/* Bottom gradient fade into page */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          {/* Heading with exact specs:
              background: linear-gradient(91.16deg, #9795FF 1.74%, #FFFFFF 43.71%, #FFFFFF 61.62%, #BE9FFF 102.48%);
              font-family: DM Sans;
              font-weight: 400;
              font-size: 68px;
              line-height: 75px;
              letter-spacing: 0%;
              text-align: center;
              max-width: 794px;
          */}
          <h1
            className={`${dmSans.className} relative z-10 text-[32px] xs:text-[42px] sm:text-[54px] md:text-[68px] leading-[1.12] md:leading-[75px] font-normal tracking-[0%] text-center max-w-[794px] mx-auto bg-[linear-gradient(91.16deg,#9795FF_1.74%,#FFFFFF_43.71%,#FFFFFF_61.62%,#BE9FFF_102.48%)] bg-clip-text text-transparent`}
          >
            Our Portfolio
          </h1>

          {/* Subtitle from media_1793779932734_0d082a03.jpg */}
          <p className="relative z-10 mx-auto mt-5 max-w-[794px] text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed text-white/85 font-light">
            A diverse portfolio of digital solutions — websites, applications, and brands we&apos;ve crafted for our clients across industries.
          </p>

          <div className="relative z-10 mt-8 sm:mt-10">
            <HeroCTA />
          </div>
        </section>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. PROJECT SHOWCASE: HEADER + 9-PROJECT 3-COLUMN GRID
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-[1290px] mx-auto">
          {/* Section Header: 2 Columns */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <ScrollReveal direction="left" distance={150} duration={1.2} delay={50}>
              <h2 className="text-[#111111] font-manrope font-normal text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] tracking-tight">
                Crafted with Precision,
                <br />
                <span className="text-[#854CFF]">Built for Scale</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={150} duration={1.2} delay={200} className="max-w-lg">
              <p className="text-[#555555] font-manrope font-light text-[15px] sm:text-[16px] leading-relaxed">
                Explore how we empower brands through custom web architecture,
                mobile app engineering, strategic UI/UX redesigns, and engaging
                creative design solutions that deliver measurable growth.
              </p>
            </ScrollReveal>
          </div>

          {/* 3-Column Project Grid (9 Projects) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BEST SOLUTIONS FOR YOUR VISION (Stepped 01, 02, 03 + Big Button)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#F0EDF6] overflow-hidden">
        <div className="max-w-[1290px] mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-12">
            <ScrollReveal direction="left" distance={140} duration={1.2} delay={50}>
              <h2 className="text-[#111111] font-manrope font-normal text-[36px] sm:text-[46px] lg:text-[54px] leading-[1.12] tracking-tight">
                Best solutions for
                <br />
                <span className="text-[#854CFF]">your vision</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* 3 Stepped Columns + Circular CTA Button (Appears from bottom to up) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start pt-6 sm:pt-10">
            {/* Step 01: Concept to Reality (Lowest on desktop) */}
            <ScrollReveal direction="up" distance={110} duration={1.2} delay={100} className="relative flex items-start lg:mt-36">
              {/* Vertical Marker: w: 15, h: 248 with purple dot */}
              <div className="flex flex-col items-center w-[15px] h-[248px] mr-6 sm:mr-8 shrink-0 relative">
                <div className="w-[1.5px] h-[64px] bg-[#0A152F]" />
                <div className="w-[1.5px] flex-1 border-l border-dashed border-[#0A152F]" />
                <div className="w-[15px] h-[15px] rounded-full bg-[#7C3AED] shrink-0" />
              </div>

              {/* Step Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[#111111] font-manrope font-normal text-[22px] sm:text-[24px]">
                    Concept to Reality
                  </h3>
                  <p className="mt-3 text-[#555555] font-manrope font-light text-[15px] leading-relaxed max-w-xs">
                    Turning complex business challenges into sleek, production-ready
                    digital products for forward-thinking brands.
                  </p>
                </div>

                {/* Outlined Large Number 01: w: 124, h: 94, font-size: 94, font-weight: 700, stroke: #0A152F */}
                <div className="mt-6">
                  <svg viewBox="0 0 124 94" className="w-[124px] h-[94px] select-none pointer-events-none">
                    <text
                      x="0"
                      y="80"
                      fill="none"
                      stroke="#0A152F"
                      strokeWidth="1"
                      fontFamily="var(--font-manrope), sans-serif"
                      fontSize="94"
                      fontWeight="700"
                      letterSpacing="0"
                    >
                      01
                    </text>
                  </svg>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 02: High-Performance Delivery (Middle on desktop) */}
            <ScrollReveal direction="up" distance={110} duration={1.2} delay={250} className="relative flex items-start lg:mt-18">
              {/* Vertical Marker: w: 15, h: 248 with purple dot */}
              <div className="flex flex-col items-center w-[15px] h-[248px] mr-6 sm:mr-8 shrink-0 relative">
                <div className="w-[1.5px] h-[64px] bg-[#0A152F]" />
                <div className="w-[1.5px] flex-1 border-l border-dashed border-[#0A152F]" />
                <div className="w-[15px] h-[15px] rounded-full bg-[#7C3AED] shrink-0" />
              </div>

              {/* Step Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[#111111] font-manrope font-normal text-[22px] sm:text-[24px]">
                    High-Performance Delivery
                  </h3>
                  <p className="mt-3 text-[#555555] font-manrope font-light text-[15px] leading-relaxed max-w-xs">
                    Building resilient, secure infrastructure and engaging
                    experiences designed to support rapid scaling.
                  </p>
                </div>

                {/* Outlined Large Number 02: w: 124, h: 94 */}
                <div className="mt-6">
                  <svg viewBox="0 0 124 94" className="w-[124px] h-[94px] select-none pointer-events-none">
                    <text
                      x="0"
                      y="80"
                      fill="none"
                      stroke="#0A152F"
                      strokeWidth="1"
                      fontFamily="var(--font-manrope), sans-serif"
                      fontSize="94"
                      fontWeight="700"
                      letterSpacing="0"
                    >
                      02
                    </text>
                  </svg>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 03: Sustained Momentum (Highest on desktop) + Circular Button */}
            <ScrollReveal direction="up" distance={110} duration={1.2} delay={400} className="flex flex-col justify-between lg:mt-0">
              <div className="relative flex items-start">
                {/* Vertical Marker: w: 15, h: 248 with purple dot */}
                <div className="flex flex-col items-center w-[15px] h-[248px] mr-6 sm:mr-8 shrink-0 relative">
                  <div className="w-[1.5px] h-[64px] bg-[#0A152F]" />
                  <div className="w-[1.5px] flex-1 border-l border-dashed border-[#0A152F]" />
                  <div className="w-[15px] h-[15px] rounded-full bg-[#7C3AED] shrink-0" />
                </div>

                {/* Step Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#111111] font-manrope font-normal text-[22px] sm:text-[24px]">
                      Sustained Momentum
                    </h3>
                    <p className="mt-3 text-[#555555] font-manrope font-light text-[15px] leading-relaxed max-w-xs">
                      Empowering organizations with smart technologies and
                      data-backed tactics to maintain long-term competitive
                      advantage.
                    </p>
                  </div>

                  {/* Outlined Large Number 03: w: 124, h: 94 */}
                  <div className="mt-6">
                    <svg viewBox="0 0 124 94" className="w-[124px] h-[94px] select-none pointer-events-none">
                      <text
                        x="0"
                        y="80"
                        fill="none"
                        stroke="#0A152F"
                        strokeWidth="1"
                        fontFamily="var(--font-manrope), sans-serif"
                        fontSize="94"
                        fontWeight="700"
                        letterSpacing="0"
                      >
                        03
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Large Circular CTA Button Matching Figma (w: 200, h: 200, max-w: 200 with link image.png) */}
              <div className="mt-12 sm:mt-16 flex justify-start md:justify-end lg:pr-6">
                <button
                  type="button"
                  onClick={() => openForm()}
                  aria-label="Start your project with AGS"
                  className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] max-w-[200px] rounded-full bg-gradient-to-br from-[#7A3BFF] to-[#480090] text-white flex items-center justify-center shadow-2xl hover:scale-105 hover:shadow-purple-500/25 transition-all duration-300 group cursor-pointer"
                >
                  <Image
                    src="/portfolio/link image.png"
                    alt=""
                    width={64}
                    height={64}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. LET'S MAKE YOUR PROJECT GLOW (Appears from top above into place)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#F0EDF6] text-center overflow-hidden">
        <div className="max-w-[1290px] mx-auto">
          {/* Heading: appears from top above into place */}
          <ScrollReveal direction="down" distance={110} duration={1.2} delay={50}>
            <h2 className="text-[#111111] font-manrope font-medium text-[44px] sm:text-[76px] md:text-[112px] lg:text-[154px] tracking-[0%] leading-[1.05] lg:leading-[150px] text-center max-w-[1114px] mx-auto">
              Let’s make your
              <br />
              <span className="text-[#854CFF]">project glow</span>
            </h2>
          </ScrollReveal>

          {/* Subtitle: appears from top above into place */}
          <ScrollReveal direction="down" distance={80} duration={1.1} delay={220}>
            <p className="mt-6 sm:mt-8 text-[#000000] font-manrope font-normal text-[18px] sm:text-[24px] md:text-[30px] leading-[30px] sm:leading-[40px] md:leading-[48px] tracking-[0%] text-center max-w-[611px] mx-auto">
              Our team will get back to you within 24 hours
            </p>
          </ScrollReveal>

          {/* Action Buttons: appears from top above into place */}
          <ScrollReveal direction="down" distance={70} duration={1.1} delay={380}>
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12">
              {/* Contact us Button */}
              <button
                type="button"
                onClick={() => openForm()}
                className="h-[52px] px-[32px] inline-flex items-center justify-center bg-gradient-to-r from-[#504CFF] to-[#480090] text-white text-[15px] font-medium transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                Contact us
              </button>

              {/* About us Button: exact border gradient, 2px stroke weight, h: 52px, padding: 16px 32px */}
              <Link
                href="/about"
                className="h-[52px] px-[32px] inline-flex items-center justify-center bg-white text-[#111111] text-[15px] font-medium transition-all duration-300 hover:bg-[#FAF7FF] hover:scale-[1.02]"
                style={{
                  border: "2px solid transparent",
                  borderImage:
                    "linear-gradient(90deg, #504DFF 0.18%, #480090 100.18%) 1",
                }}
              >
                About us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. LET'S WORK WITH US (Dark CTA Section)
          ───────────────────────────────────────────────────────────── */}
      <CTASection />

      {/* ─────────────────────────────────────────────────────────────
          6. FOOTER
          ───────────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
