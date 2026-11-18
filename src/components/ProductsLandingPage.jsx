"use client";

import Image from "next/image";
import Link from "next/link";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const products = [
  {
    id: "academix",
    name: "Academix",
    category: "Education",
    description: "Equip students with job-ready skills through hands-on project work and career placement prep.",
    image: "/products/academix.png",
    logo: "/products/logo-academyx.png",
    clickable: false,
  },
  {
    id: "lumina",
    name: "Lumina",
    category: "Education",
    description: "Streamline class management, lecture uploads, and student assessments on a unified LMS platform.",
    image: "/products/lumina.png",
    logo: "/products/logo-lumina.png",
    clickable: false,
  },
  {
    id: "stmet",
    name: "STmet",
    category: "Education",
    description: "Connect students and faculty with low-latency streaming and real-time collaboration tools.",
    image: "/products/card-stmet.png",
    logo: "/products/stmet.png",
    clickable: false,
  },
  {
    id: "nexus",
    name: "Nexus",
    category: "Operations",
    description: "Automate employee onboarding, leave tracking, attendance, and payroll on one central platform.",
    image: "/products/nexus.png",
    logo: "/products/logo-nexus.png",
    clickable: false,
  },
  {
    id: "lynkbeats",
    name: "LynkBeats",
    category: "Media",
    description: "Track real-time story performance and editorial KPIs to optimize newsroom coverage instantly.",
    image: "/products/lynkbeats.png",
    logo: "/products/logo-lynkbeats.png",
    clickable: true,
    href: "/products/lynkbeats",
  },
  {
    id: "vidlens",
    name: "Vidlens",
    category: "Media",
    description: "Analyze competitor channels, track audience retention, and optimize video content strategy effortlessly.",
    image: "/products/vidlens.png",
    logo: "/products/logo-vidlens.png",
    clickable: false,
  },
  {
    id: "newsbuddies",
    name: "Newsbuddies",
    category: "Media",
    description: "Optimize headlines, regional metadata, and search visibility to drive organic news traffic.",
    image: "/products/card-newsbuddies.png",
    logo: "/products/newsbuddies.png",
    clickable: true,
    href: "/products/newsbuddies",
  },
];

export default function ProductsLandingPage() {
  const { openForm } = useCtaForm();

  return (
    <main className="relative min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: "Our Products"
          Background: Neon Orange and Cyan Circuitry
          Exact match to Figma reference screenshot
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 px-6 sm:px-10 lg:px-16 bg-[#07051A]">
        {/* Background Image: Neon Orange and Cyan Circuitry */}
        <Image
          src="/solutions/Neon Orange and Cyan Circuitry.png"
          alt="Our Products Circuitry Hero"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center transform-gpu scale-105"
        />

        {/* Ambient Dark Overlays — NO white gradient so circuit lines stay crisp to the bottom */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(7, 5, 26, 0.15) 0%, rgba(7, 5, 26, 0.55) 100%)",
          }}
        />

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Our Products
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white/90 font-light max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
            Discover our growing suite of in-house creations crafted to solve real-world challenges.
          </p>

          <div className="mt-7 sm:mt-8">
            <button
              type="button"
              onClick={() => openForm()}
              className="group inline-flex items-center gap-2.5 bg-white text-black hover:bg-neutral-100 px-6 py-2.5 text-sm font-normal transition-all duration-300 rounded-none shadow-lg cursor-pointer hover:scale-[1.01]"
            >
              <span>Get Started</span>
              <span className="flex h-4 w-4 items-center justify-center shrink-0 rounded-full border border-black/80 text-black transition-transform duration-300 group-hover:rotate-45">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-2.5 h-2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN SECTION: "Powering businesses with digital products"
          Background: Pure white
          Exact 3-column product cards matching homepage precision
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full bg-white pt-10 sm:pt-14 pb-20 sm:pb-24 px-6 sm:px-10 lg:px-16 text-gray-900">
        <div className="mx-auto max-w-[1380px]">
          {/* Header Row: Left 2-line title + Right description */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-gray-950 leading-[1.15]">
                Powering businesses
                <br />
                with{" "}
                <span className="text-[#854CFF] font-medium">
                  digital products
                </span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-[#555555] font-light text-[15px] sm:text-[16px] leading-relaxed">
                Explore our proprietary suite of scalable enterprise and consumer platforms, each designed to solve real challenges and drive measurable value.
              </p>
            </div>
          </div>

          {/* 3-Column Product Grid (7 Products precisely aligned) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {products.map((prod) => {
              const CardWrapper = prod.clickable ? Link : "div";
              const wrapperProps = prod.clickable
                ? {
                    href: prod.href,
                    className:
                      "group relative flex flex-col justify-between overflow-hidden rounded-none aspect-[4/5] min-h-[460px] sm:min-h-[500px] p-7 sm:p-9 border border-white/10 shadow-2xl transition-all duration-300 hover:border-purple-500/50 cursor-pointer block",
                  }
                : {
                    className:
                      "group relative flex flex-col justify-between overflow-hidden rounded-none aspect-[4/5] min-h-[460px] sm:min-h-[500px] p-7 sm:p-9 border border-white/10 shadow-2xl transition-all duration-300 block select-none cursor-default",
                  };

              return (
                <CardWrapper key={prod.id} {...wrapperProps}>
                  {/* Background Image */}
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover object-center transition-transform duration-700 ${
                      prod.clickable ? "group-hover:scale-105" : ""
                    }`}
                    quality={90}
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/35 transition-opacity duration-300 ${
                      prod.clickable ? "group-hover:from-black/90" : ""
                    }`}
                  />

                  {/* Top Row: Circular Glassmorphic Logo Badge & Category */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      style={{ borderRadius: "9999px" }}
                      className={`flex h-13 w-13 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-black/45 backdrop-blur-md border border-white/20 p-2.5 shadow-2xl transition-transform duration-300 ${
                        prod.clickable ? "group-hover:scale-105" : ""
                      }`}
                    >
                      <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                        <Image
                          src={prod.logo}
                          alt={prod.name}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>
                    </div>

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
                      <div
                        style={{ borderRadius: "9999px" }}
                        className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full ${
                          prod.clickable
                            ? "bg-[#6D28D9] group-hover:bg-[#7C3AED] text-white shadow-xl shadow-purple-950/60 transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                            : "bg-[#6D28D9]/60 text-white/70 shadow-lg cursor-default"
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className={`transition-transform duration-300 ${
                            prod.clickable
                              ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              : ""
                          }`}
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>

          {/* Centered "See more" Action Button matching Figma design */}
          <div className="mt-14 sm:mt-18 flex justify-center">
            <button
              type="button"
              onClick={() => openForm()}
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:border-black hover:text-black transition-all rounded-none cursor-pointer shadow-xs"
            >
              See more
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CTA SECTION: "Let's work with Us"
          ───────────────────────────────────────────────────────────── */}
      <CTASection
        heading="Let's work with Us"
        description="Responsibly build great user experiences with our cloud architecture, engineering, and digital solutions."
      />

      {/* ─────────────────────────────────────────────────────────────
          4. GLOBAL FOOTER
          ───────────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
