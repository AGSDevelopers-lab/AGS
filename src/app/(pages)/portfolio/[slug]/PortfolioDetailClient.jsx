"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useCtaForm } from "@/components/CtaFormProvider";

function CaseStudyCTA({ accentColor }) {
  const { openForm } = useCtaForm();
  return (
    <button
      type="button"
      onClick={() => openForm()}
      className="group inline-flex items-center gap-3 border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white mt-8"
    >
      <span>Start Your Project</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="transition-transform duration-700 group-hover:rotate-45"
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </button>
  );
}

export default function PortfolioDetailClient({ project }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black pb-0 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-b ${project.bgTheme}`} />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[80px_80px]" />
        <div
          className="absolute top-[5%] left-[15%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{ backgroundColor: project.accentColor }}
        />
        <div
          className="absolute top-[25%] right-[10%] w-[400px] h-[400px] rounded-full blur-[110px] opacity-10"
          style={{ backgroundColor: project.accentColor }}
        />
      </div>

      <div className="relative z-10 w-full pt-20 lg:pt-28">

        {/* ── HERO ── */}
        <section className="relative px-6 pt-20 pb-16 sm:px-8 lg:px-26 max-w-[1400px] mx-auto">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-10 transition-colors text-white/50 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:-translate-x-1">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Portfolio</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <span
                className="inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em]"
                style={{
                  borderColor: `${project.accentColor}40`,
                  backgroundColor: `${project.accentColor}15`,
                  color: project.accentColor,
                }}
              >
                {project.label}
              </span>

              <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]">
                <span className="bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_50%,#B3B3B3_100%)] bg-clip-text text-transparent">
                  {project.name}
                </span>
              </h1>

              <p className="mt-5 text-lg sm:text-xl font-light leading-relaxed text-white/65 max-w-lg">
                {project.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/75 font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: hero image */}
            {project.heroImage && (
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src={project.heroImage}
                  alt={`${project.name} showcase`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="mt-16 h-px w-full bg-white/8" />
        </section>

        {/* ── ABOUT & CHALLENGE ── */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

              <ScrollReveal direction="up">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8" style={{ backgroundColor: project.accentColor }} />
                    <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                      Overview
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 tracking-tight">
                    About the Project
                  </h2>
                  <p className="text-[1rem] leading-[1.85] text-white/65 font-light">
                    {project.about}
                  </p>

                  <div className="mt-14">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-px w-8" style={{ backgroundColor: project.accentColor }} />
                      <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                        The Challenge
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 tracking-tight">
                      Core Problem Statement
                    </h2>
                    <p className="text-[1rem] leading-[1.85] text-white/65 font-light">
                      {project.challenge}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Research Metrics */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8" style={{ backgroundColor: project.accentColor }} />
                  <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                    Key Metrics
                  </span>
                </div>
                {project.research.map((res, i) => (
                  <ScrollReveal key={i} direction="right" delay={i * 120}>
                    <div className="border border-white/6 bg-white/[0.02] p-6 sm:p-7 flex items-center gap-6">
                      <div
                        className="text-4xl sm:text-5xl font-light tracking-tight shrink-0 min-w-[100px]"
                        style={{ color: project.accentColor }}
                      >
                        {res.metric}
                      </div>
                      <div className="h-10 w-px bg-white/10 shrink-0" />
                      <p className="text-sm text-white/55 font-light leading-relaxed">
                        {res.label}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── INFORMATION ARCHITECTURE / SITEMAP ── */}
        <section className="py-16 sm:py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="up">
              <div className="text-center mb-14">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-8" style={{ backgroundColor: project.accentColor }} />
                  <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                    Information Architecture
                  </span>
                  <div className="h-px w-8" style={{ backgroundColor: project.accentColor }} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  Structured Sitemap
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {project.sitemap.map((tree, i) => (
                <ScrollReveal key={tree.node} direction="up" delay={i * 100}>
                  <div className="border border-white/6 bg-white/[0.015] p-6 sm:p-7 h-full flex flex-col">
                    <div className="flex items-center gap-3 border-b border-white/8 pb-4 mb-5">
                      <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: project.accentColor }} />
                      <h3 className="text-base font-semibold text-white tracking-wide">{tree.node}</h3>
                    </div>
                    <ul className="space-y-3.5 flex-1">
                      {tree.children.map((child, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-white/50 font-light">
                          <span className="h-px w-4 rounded-full shrink-0" style={{ backgroundColor: `${project.accentColor}50` }} />
                          <span>{child}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── WIREFRAMES & USER FLOW ── */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: project.accentColor }} />
                <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                  Interaction Blueprint
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-14 tracking-tight">
                User Flow & Wireframes
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.wireframes.map((wf, i) => (
                <ScrollReveal key={wf.name} direction="up" delay={i * 150}>
                  <div className="border border-white/6 bg-white/[0.015] overflow-hidden h-full flex flex-col">
                    {/* Wireframe visual — clean abstract representation */}
                    <div
                      className="relative aspect-[16/9] w-full p-6 flex flex-col justify-between"
                      style={{ background: `linear-gradient(135deg, ${project.accentColor}08 0%, #0a0a1a 100%)` }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: `${project.accentColor}60` }} />
                        <span className="h-2 w-2 rounded-full bg-white/15" />
                        <span className="h-2 w-2 rounded-full bg-white/10" />
                        <span className="ml-auto h-1.5 w-20 rounded bg-white/8" />
                      </div>
                      <div className="grid grid-cols-3 gap-3 mt-4 flex-1 items-end">
                        <div className="h-full min-h-[40px] rounded border border-white/8 bg-white/[0.03]" />
                        <div className="col-span-2 h-full min-h-[40px] rounded border border-white/8 bg-white/[0.03] flex items-center justify-center">
                          <div className="w-2/3 space-y-2">
                            <div className="h-1.5 w-full rounded bg-white/10" />
                            <div className="h-1.5 w-3/4 rounded bg-white/7" />
                            <div className="h-6 w-1/2 rounded mt-3" style={{ backgroundColor: `${project.accentColor}20`, border: `1px solid ${project.accentColor}30` }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Text content */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">{wf.name}</h3>
                      <p className="text-sm text-white/50 font-light leading-relaxed flex-1">{wf.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL UI DESIGNS ── */}
        <section className="py-16 sm:py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: project.accentColor }} />
                <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                  Final Deliverables
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-14 tracking-tight">
                High-Fidelity UI Designs
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.finalUi.map((ui, i) => (
                <ScrollReveal key={ui.title} direction="up" delay={i * 120}>
                  <div className="border border-white/6 bg-white/[0.015] overflow-hidden h-full flex flex-col">
                    {/* UI mockup visual */}
                    <div
                      className="relative aspect-[16/9] w-full overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${project.accentColor}10 0%, #0a0a14 60%, #121225 100%)` }}
                    >
                      {/* Laptop frame */}
                      <div className="absolute inset-x-[12%] top-[14%] bottom-[8%] bg-[#08080f] rounded-t-lg border border-white/10 overflow-hidden shadow-2xl">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/8">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                          <div className="ml-3 h-1.5 w-24 rounded bg-white/8" />
                        </div>
                        {/* Screen content */}
                        <div className="p-3 space-y-2">
                          <div className="h-2 w-1/3 rounded bg-white/12" />
                          <div className="h-14 rounded" style={{ backgroundColor: `${project.accentColor}12`, border: `1px solid ${project.accentColor}20` }} />
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-6 rounded bg-white/5" />
                            <div className="h-6 rounded bg-white/5" />
                            <div className="h-6 rounded bg-white/5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card text */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-white mb-2">{ui.title}</h3>
                      <p className="text-sm text-white/50 font-light leading-relaxed flex-1">{ui.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── COLOR PALETTE & TYPOGRAPHY ── */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: project.accentColor }} />
                <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                  Visual Identity
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-14 tracking-tight">
                Color Palette & Typography
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
              {/* Color swatches */}
              <div className="space-y-4">
                {project.palette.map((color) => (
                  <ScrollReveal key={color.name} direction="up">
                    <div className="border border-white/6 bg-white/[0.015] p-5 flex items-center gap-5">
                      <div
                        className="h-14 w-14 rounded shrink-0 border border-white/10 shadow-lg"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3">
                          <h4 className="text-sm font-semibold text-white">{color.name}</h4>
                          <span className="text-xs font-mono text-white/35">{color.hex}</span>
                        </div>
                        <p className="mt-1 text-xs text-white/45 font-light leading-relaxed">{color.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Typography */}
              <div className="border border-white/6 bg-white/[0.015] p-7 sm:p-8">
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-8">Typography Scale</h3>
                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-mono">H1 / Display</span>
                    <p className="text-3xl font-light text-white mt-2 tracking-tight">Manrope Light 48px</p>
                  </div>
                  <div className="h-px bg-white/6" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-mono">H3 / Subtitle</span>
                    <p className="text-lg font-normal text-white mt-2">Manrope Regular 18px</p>
                  </div>
                  <div className="h-px bg-white/6" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-mono">Body / Paragraph</span>
                    <p className="text-sm font-light text-white/60 mt-2 leading-[1.8]">Manrope Light 14px / 1.8 line-height</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FIGMA PROTOTYPE CTA ── */}
        {project.figmaUrl && (
          <section className="py-16 sm:py-20 border-t border-white/5">
            <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26 text-center">
              <ScrollReveal direction="up">
                <h2 className="text-2xl sm:text-3xl font-light text-white mb-4 tracking-tight">
                  Explore the Full Prototype
                </h2>
                <p className="text-sm text-white/50 font-light mb-8 max-w-lg mx-auto">
                  View the interactive Figma prototype to experience the complete design system and user flows.
                </p>
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-500 hover:bg-transparent hover:text-white hover:border-white"
                  style={{ borderColor: project.accentColor }}
                >
                  <span>View Figma Prototype</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </a>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* ── START YOUR PROJECT CTA ── */}
        <section className="py-16 sm:py-20 border-t border-white/5 bg-white/[0.01]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26 text-center">
            <ScrollReveal direction="up">
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-tight">
                Have a similar project in mind?
              </h2>
              <p className="text-base text-white/55 font-light mb-2 max-w-xl mx-auto leading-relaxed">
                Let&apos;s discuss how we can bring your vision to life with the same level of precision and care.
              </p>
              <CaseStudyCTA accentColor={project.accentColor} />
            </ScrollReveal>
          </div>
        </section>

      </div>
    </main>
  );
}
