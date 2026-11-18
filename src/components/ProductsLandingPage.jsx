"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function ProductsLandingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { openForm } = useCtaForm();

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#08061E] text-white">
      {/* Background ambient radial gradients matching AGS brand */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute top-[40%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(80,76,255,0.12)_0%,transparent_70%)] blur-[90px]" />
        <div className="absolute top-[70%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.1)_0%,transparent_70%)] blur-[90px]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Products / Solutions Hub
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-32 pb-16 sm:pt-40 sm:pb-20 px-6 sm:px-10 lg:px-16 text-center">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
              AGS Digital Product Ecosystem
            </span>
          </div>

          {/* Heading matching Figma editorial styling */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-[0.5px] text-white leading-tight lg:leading-[78px]"
          >
            Powering Businesses With
            <br />
            <span className="bg-[linear-gradient(91.16deg,#9795FF_1.74%,#FFFFFF_43.71%,#FFFFFF_61.62%,#BE9FFF_102.48%)] bg-clip-text text-transparent">
              Innovative Digital Products
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Explore our proprietary portfolio of cloud-native platforms, AI intelligence suites, and enterprise automation tools built for modern scale.
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => openForm()}
              className="group inline-flex items-center gap-3 bg-white px-8 py-3.5 text-sm font-medium text-black rounded-none transition-all duration-300 hover:bg-[#FAF7FF] hover:scale-[1.02] shadow-xl cursor-pointer"
            >
              <span>Explore Custom Solutions</span>
              <span className="flex h-5 w-5 items-center justify-center shrink-0 rounded-full border border-black/80 text-[11px] transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>

            <a
              href="#product-grid"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white/85 bg-white/5 border border-white/15 rounded-none hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <span>Browse Catalog</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 10l5 5 5-5" />
              </svg>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#8B5CF6]">7+</div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Proprietary Products</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#38BDF8]">100%</div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Cloud Native (AWS)</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#34D399]">Real-Time</div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Telemetry & Analytics</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#F472B6]">24 / 7</div>
              <div className="text-xs uppercase tracking-wider text-white/50 mt-1">Enterprise SLA Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CATEGORY FILTER TABS
          ───────────────────────────────────────────────────────────── */}
      <section id="product-grid" className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pt-4 pb-8">
        <div className="mx-auto max-w-[1440px] flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-medium text-white">
              All Products &amp; Platforms
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light mt-1">
              Select a category to filter through our product lineup
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm tracking-wide transition-all duration-300 rounded-none cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#6D28D9] text-white border border-purple-400 font-medium shadow-lg shadow-purple-950/50"
                    : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PRODUCT CATALOG GRID
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((prod) => {
              const targetUrl = prod.directHref || `/products/${prod.slug}`;

              return (
                <article
                  key={prod.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-none aspect-[4/5] min-h-[500px] sm:min-h-[540px] p-7 sm:p-9 border border-white/10 shadow-2xl transition-all duration-500 hover:border-purple-500/50 bg-[#0B0925]"
                >
                  {/* Background Image */}
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 transition-opacity duration-300 group-hover:from-black/90 pointer-events-none" />

                  {/* Top Row: Logo Badge & Status/Category */}
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    {/* Glassmorphic Logo Badge matching Figma Screenshot */}
                    <div
                      style={{ borderRadius: "9999px" }}
                      className="flex h-13 w-13 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 p-2.5 shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    >
                      <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                        <Image
                          src={prod.logo}
                          alt={`${prod.name} logo`}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Status & Category Badges */}
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase px-2.5 py-1 bg-black/60 border border-white/15 text-white/90 backdrop-blur-md">
                        {prod.category}
                      </span>
                      <span
                        className={`text-[10px] sm:text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 border ${prod.badgeColor}`}
                      >
                        {prod.status}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 mt-auto pt-6">
                    <div className="mb-4">
                      <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight leading-tight group-hover:text-purple-200 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-purple-300/80 font-medium tracking-wide mt-1">
                        {prod.tagline}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-white/80 font-light leading-relaxed line-clamp-3">
                        {prod.description}
                      </p>
                    </div>

                    {/* Feature Highlights Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {prod.highlights.slice(0, 2).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] text-white/70 bg-white/5 border border-white/10 px-2 py-1"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>

                    {/* Action Link & Arrow */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/15">
                      <Link
                        href={targetUrl}
                        className="text-xs sm:text-sm text-white font-medium tracking-wide group-hover:text-purple-300 transition-colors flex items-center gap-1.5"
                      >
                        <span>View Product Details</span>
                      </Link>

                      {/* Purple Circular Arrow Button matching Figma */}
                      <Link
                        href={targetUrl}
                        aria-label={`View details for ${prod.name}`}
                        style={{ borderRadius: "9999px" }}
                        className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#6D28D9] group-hover:bg-[#7C3AED] text-white shadow-xl shadow-purple-950/60 transition-all duration-300 group-hover:scale-110 cursor-pointer"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. COMING SOON SPOTLIGHT: VidLens & LynkBeats (From Figma Components 55 & 56)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-10 lg:px-16 bg-[#040312] border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8B5CF6] font-semibold">
              Emerging Innovations
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Next-Generation Media Intelligence
            </h2>
            <p className="mt-4 text-white/70 text-sm sm:text-base font-light">
              Get an exclusive preview of our upcoming analytical suites designed for newsrooms and video creators.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* VidLens Spotlight */}
            <div className="relative border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                  <span>LAUNCHING SOON</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-normal text-white">
                  VidLens <span className="text-[#F472B6]">Intelligence</span>
                </h3>
                <p className="mt-3 text-sm text-white/75 font-light leading-relaxed">
                  Paste any YouTube channel or niche. Understand why videos win, pinpoint audience retention cliffs, and benchmark against top competitors.
                </p>

                <div className="mt-6 relative w-full aspect-[16/10] overflow-hidden border border-white/10 bg-black/40">
                  <Image
                    src="/products/vidlens-hero.png"
                    alt="VidLens Platform Preview"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/products/vidlens"
                  className="text-sm font-medium text-[#F472B6] hover:text-white transition-colors"
                >
                  Explore VidLens Features →
                </Link>
                <button
                  type="button"
                  onClick={() => openForm()}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#EC4899] text-white hover:bg-[#db2777] transition-all"
                >
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* LynkBeats Spotlight */}
            <div className="relative border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>LAUNCHING SOON</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-normal text-white">
                  LynkBeats <span className="text-[#34D399]">Newsroom Telemetry</span>
                </h3>
                <p className="mt-3 text-sm text-white/75 font-light leading-relaxed">
                  Second-by-second reader heatmaps across every active story. Track velocity spikes, editorial KPIs, and competitor exclusive gaps in real time.
                </p>

                <div className="mt-6 relative w-full aspect-[16/10] overflow-hidden border border-white/10 bg-black/40">
                  <Image
                    src="/products/lynkbeats-hero.png"
                    alt="LynkBeats Platform Preview"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/products/lynkbeats"
                  className="text-sm font-medium text-[#34D399] hover:text-white transition-colors"
                >
                  Explore LynkBeats Features →
                </Link>
                <button
                  type="button"
                  onClick={() => openForm()}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#10B981] text-white hover:bg-[#059669] transition-all"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CTA SECTION
          ───────────────────────────────────────────────────────────── */}
      <CTASection />

      {/* ─────────────────────────────────────────────────────────────
          6. FOOTER
          ───────────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
