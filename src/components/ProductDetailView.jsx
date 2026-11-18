"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, PRODUCTS } from "@/data/products";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function ProductDetailView({ slug }) {
  const product = getProductBySlug(slug);
  const { openForm } = useCtaForm();

  if (!product) {
    notFound();
  }

  // Related products (exclude current)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#07051A] text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-12 left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full blur-[110px] opacity-25"
          style={{
            background: `radial-gradient(circle, ${product.accent} 0%, transparent 70%)`,
          }}
        />
        <div className="absolute top-[45%] right-[-10%] h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(80,76,255,0.12)_0%,transparent_70%)] blur-[90px]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. BREADCRUMBS
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full pt-28 sm:pt-32 px-6 sm:px-10 lg:px-16 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto max-w-[1440px] py-4 flex items-center justify-between text-xs text-white/60">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-white transition-colors">
              Solutions
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{product.name}</span>
          </div>

          <Link
            href="/solutions"
            className="text-xs text-purple-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>← All Products</span>
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. PRODUCT HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-12 pb-16 sm:pt-16 sm:pb-24 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Product Info & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 bg-white/5 border border-white/15 text-white/90">
                  {product.category}
                </span>
                <span
                  className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 border ${product.badgeColor}`}
                >
                  {product.status}
                </span>
                <span className="text-xs text-white/50 tracking-wider font-light">
                  • AN AGS PRODUCT
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  style={{ borderRadius: "9999px" }}
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-black/60 border border-white/20 p-3 shadow-2xl shrink-0"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={product.logo}
                      alt={`${product.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-none"
                  >
                    {product.name}
                  </h1>
                  <p
                    className="text-base sm:text-lg font-normal mt-1.5"
                    style={{ color: product.accent }}
                  >
                    {product.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
                {product.fullDescription}
              </p>

              {/* Key Bullet Highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
                {product.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 bg-white/5 border border-white/10 text-xs sm:text-sm text-white/85"
                  >
                    <span className="text-purple-400 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openForm()}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white px-8 py-3.5 text-sm font-medium rounded-none shadow-xl hover:brightness-110 transition-all cursor-pointer"
                >
                  <span>{product.status === "Launching Soon" ? "Get Early Access" : "Request Enterprise Demo"}</span>
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current text-[10px]">
                    ↗
                  </span>
                </button>

                {product.directHref && (
                  <Link
                    href={product.directHref}
                    className="inline-flex items-center gap-2 border border-purple-500/50 bg-purple-950/30 text-purple-200 px-6 py-3.5 text-sm font-medium rounded-none hover:bg-purple-900/40 hover:text-white transition-all"
                  >
                    <span>Open Training Academy</span>
                    <span>→</span>
                  </Link>
                )}

                {product.externalUrl && (
                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white px-6 py-3.5 text-sm font-medium rounded-none hover:bg-white/10 transition-all"
                  >
                    <span>Visit Live Portal</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Hero Visual / Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden border border-white/15 bg-black/40 shadow-2xl">
                <Image
                  src={product.mockupImage || product.image}
                  alt={`${product.name} visual`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 z-10 p-4 bg-black/60 backdrop-blur-md border border-white/15">
                  <div className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
                    AGS Engineering Standard
                  </div>
                  <div className="text-sm font-normal text-white mt-1">
                    Enterprise SLA • 99.99% Uptime • AWS Cloud Partner
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FEATURE DEEP-DIVE GRID (4 Columns/Cards)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-10 lg:px-16 bg-[#040312] border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8B5CF6] font-semibold">
              Capabilities & Architecture
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Built for Performance, <br className="hidden sm:block"/>
              Engineered for Enterprise
            </h2>
            <p className="mt-4 text-white/70 text-sm sm:text-base font-light">
              Here is how {product.name} solves core bottlenecks with modern cloud engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-7 bg-[#0B0925] border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1"
              >
                <div>
                  <div
                    className="text-2xl font-bold font-mono mb-4"
                    style={{ color: product.accent }}
                  >
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-white/40">
                    Feature Spec
                  </span>
                  <span className="text-xs font-bold" style={{ color: product.accent }}>
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. TECHNICAL SPECIFICATIONS
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#08061E] border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="border border-white/15 bg-white/[0.02] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <span className="text-xs uppercase tracking-widest text-[#8B5CF6] font-semibold">
                  Technical Overview
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium text-white mt-1">
                  Cloud Infrastructure &amp; Security
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 font-light">
                  Deployable as a dedicated private cloud instance or managed enterprise SaaS.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {product.specs.map((s, idx) => (
                  <div key={idx} className="p-4 bg-black/40 border border-white/10">
                    <div className="text-[11px] uppercase tracking-wider text-white/50">
                      {s.label}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-white mt-1">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. EARLY ACCESS / DEMO FORM CTA BANNER
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-10 lg:px-16 bg-[#040312] border-t border-white/10 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8B5CF6] font-semibold">
            Ready to Get Started?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium text-white">
            Transform Your Workflows with {product.name}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 font-light max-w-xl mx-auto">
            Schedule a personalized walkthrough with our engineering leadership or register for early access.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openForm()}
              className="px-8 py-3.5 bg-white text-black text-sm font-medium rounded-none hover:bg-purple-100 transition-all shadow-xl cursor-pointer"
            >
              Contact Our Solutions Team
            </button>
            <Link
              href="/solutions"
              className="px-6 py-3.5 bg-white/5 border border-white/20 text-white text-sm font-medium rounded-none hover:bg-white/10 transition-all"
            >
              View Other Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CROSS-NAVIGATION: OTHER PRODUCTS
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-20 px-6 sm:px-10 lg:px-16 bg-[#07051A] border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8B5CF6] font-semibold">
                Explore More Solutions
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-white mt-1">
                Other AGS Software Products
              </h3>
            </div>
            <Link
              href="/solutions"
              className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-wider text-purple-400 hover:text-white transition-colors"
            >
              View Full Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => {
              const targetUrl = rel.directHref || `/products/${rel.slug}`;
              return (
                <Link
                  key={rel.id}
                  href={targetUrl}
                  className="group relative flex flex-col justify-between p-6 bg-[#0B0925] border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {rel.category}
                    </div>
                    <span className="text-[10px] text-purple-300 border border-purple-500/30 px-2 py-0.5">
                      {rel.status}
                    </span>
                  </div>

                  <h4 className="text-xl font-medium text-white group-hover:text-purple-300 transition-colors">
                    {rel.name}
                  </h4>
                  <p className="mt-2 text-xs text-white/70 font-light line-clamp-2">
                    {rel.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/90">
                    <span>Learn More</span>
                    <span className="text-purple-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CTA SECTION
          ───────────────────────────────────────────────────────────── */}
      <CTASection />

      {/* ─────────────────────────────────────────────────────────────
          8. FOOTER
          ───────────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
