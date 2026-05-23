"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function PortfolioDetailClient({ project }) {
  return (
    <main className={`relative min-h-screen overflow-hidden bg-black pb-0 bg-gradient-to-b ${project.bgTheme} text-white`}>
      {/* Background grids */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[80px_80px]" />
      
      {/* Visual Ambient Glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[100vh] z-0 opacity-20">
        <div className={`absolute top-[10%] left-[20%] w-144 h-144 rounded-full bg-[radial-gradient(circle,${project.accentColor}_0%,transparent_70%)] blur-[96px]`} />
        <div className={`absolute top-[30%] right-[10%] w-152 h-152 rounded-full bg-[radial-gradient(circle,${project.accentColor}_0%,transparent_70%)] blur-[104px]`} />
      </div>

      <div className="relative z-10 w-full pt-20 lg:pt-28">
        
        {/* CASE STUDY HERO */}
        <section className="relative px-6 pt-20 pb-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-b border-white/10">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-8 transition-colors text-white/50 hover:text-white"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:-translate-x-1">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Portfolio</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span 
                className="inline-flex rounded-full border px-3.5 py-1 text-xs font-medium uppercase tracking-[0.08em]"
                style={{ borderColor: `${project.accentColor}35`, backgroundColor: `${project.accentColor}12`, color: project.accentColor }}
              >
                {project.label} Case Study
              </span>
              <h1 className="bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_45%,#E0E0E0_70%,#B3B3B3_100%)] bg-clip-text pb-3 mt-4 text-4xl sm:text-6xl font-light tracking-tight text-transparent leading-[1.1]">
                {project.name}
              </h1>
              <p className="mt-4 text-lg sm:text-[1.35rem] font-light leading-relaxed text-white/70">
                {project.tagline}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/80 rounded-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Laptop Mockup Wrapper using custom CSS (Matches attached case study layout) */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-160 aspect-[16/10] bg-[#1a1a2e] border-[8px] border-white/10 rounded-t-[18px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Glossy Reflection layer */}
                <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-20" />
                
                {/* Custom app layout rendering inside screen matching accent color theme */}
                <div className="absolute inset-0 bg-[#0A0A14] p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/8 pb-2">
                    <span className="text-[10px] font-bold tracking-[0.1em]" style={{ color: project.accentColor }}>{project.name.toUpperCase()} HUB</span>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 my-2 flex-1">
                    <div className="col-span-2 rounded bg-white/4 border border-white/6 p-3 flex flex-col justify-between">
                      <div className="h-1.5 w-1/2 rounded bg-white/15" />
                      <div className="h-8 rounded mt-2" style={{ backgroundColor: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30` }} />
                      <div className="flex gap-2 mt-2">
                        <div className="h-1.5 w-8 rounded bg-white/10" />
                        <div className="h-1.5 w-12 rounded bg-white/10" />
                      </div>
                    </div>
                    <div className="rounded bg-white/4 border border-white/6 p-3 flex flex-col justify-between">
                      <div className="h-4 w-4 rounded-full mx-auto" style={{ backgroundColor: project.accentColor }} />
                      <div className="h-1 w-full rounded bg-white/12 mt-2" />
                      <div className="h-1 w-2/3 rounded bg-white/12 mx-auto" />
                      <div className="h-1 w-1/2 rounded bg-white/12 mx-auto" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/8 pt-2 text-[8px] text-white/45">
                    <span>SYSTEM ONLINE // V1.0.4</span>
                    <span>100% SECURE SSL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & THE CHALLENGE */}
        <section className="py-20 border-b border-white/5">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              <ScrollReveal direction="left">
                <h2 className="text-2xl sm:text-3xl font-light text-white mb-6 uppercase tracking-wider">
                  About the Project
                </h2>
                <p className="text-[1rem] leading-[1.8] text-white/70 font-light pr-0 lg:pr-8">
                  {project.about}
                </p>
                
                <h2 className="text-2xl sm:text-3xl font-light text-white mt-12 mb-6 uppercase tracking-wider">
                  The Core Challenge
                </h2>
                <p className="text-[1rem] leading-[1.8] text-white/70 font-light pr-0 lg:pr-8">
                  {project.challenge}
                </p>
              </ScrollReveal>

              {/* Research Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                {project.research.map((res, i) => (
                  <ScrollReveal key={i} direction="right" delay={i * 100}>
                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm flex flex-col lg:flex-row items-center gap-6">
                      <div 
                        className="text-4xl sm:text-5xl font-light tracking-tight shrink-0" 
                        style={{ color: project.accentColor }}
                      >
                        {res.metric}
                      </div>
                      <div className="text-sm text-white/60 font-light leading-relaxed text-center lg:text-left">
                        {res.label}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* BRAINSTORMING & SITEMAP */}
        <section className="py-20 border-b border-white/5 bg-white/[0.01]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26 text-center">
            <ScrollReveal direction="up">
              <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                Information Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white mt-2 mb-14">
                Structured Sitemap tree
              </h2>
            </ScrollReveal>

            {/* Sitemap Visualizer Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto text-left">
              {project.sitemap.map((tree, i) => (
                <ScrollReveal key={tree.node} direction="up" delay={i * 100}>
                  <div className="bg-[#121225]/45 border border-white/6 p-6 rounded-sm h-full flex flex-col">
                    <div className="flex items-center gap-3 border-b border-white/8 pb-4 mb-4">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: project.accentColor }} />
                      <h3 className="text-base font-semibold text-white tracking-wide">{tree.node}</h3>
                    </div>
                    <ul className="space-y-3 flex-1">
                      {tree.children.map((child, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-white/50 font-light">
                          <span className="h-1 w-3 rounded-full bg-white/20" />
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

        {/* WIREFRAME BLUEPRINTS */}
        <section className="py-20 border-b border-white/5">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="up">
              <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                Interaction Blueprint
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white mt-2 mb-14">
                User Flow & Wireframe layout
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.wireframes.map((wf, i) => (
                <ScrollReveal key={wf.name} direction="up" delay={i * 150}>
                  <div className="bg-transparent border border-white/8 p-6 sm:p-8 rounded-sm">
                    <h3 className="text-[1.2rem] font-semibold tracking-wide text-white mb-3">{wf.name}</h3>
                    <p className="text-sm text-white/50 font-light leading-relaxed mb-6">{wf.desc}</p>
                    
                    {/* Schematic CSS Wireframe Grid representing mock interface */}
                    <div className="border border-white/10 rounded bg-white/[0.01] p-4 flex flex-col gap-3">
                      <div className="h-6 w-1/4 rounded bg-white/10" />
                      <div className="grid grid-cols-4 gap-2">
                        <div className="h-12 rounded bg-white/5 border border-white/8" />
                        <div className="h-12 rounded bg-white/5 border border-white/8" />
                        <div className="h-12 rounded bg-white/5 border border-white/8" />
                        <div className="h-12 rounded bg-white/5 border border-white/8" />
                      </div>
                      <div className="h-24 rounded bg-white/5 border border-white/8 flex items-center justify-center text-[10px] uppercase font-mono tracking-widest text-white/20">
                        Content Canvas Placeholder
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* VIRTUAL WHITEBOARDING */}
        <section className="py-20 border-b border-white/5 bg-white/[0.01] overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26 text-center">
            <ScrollReveal direction="up">
              <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                Collaborative Ideation
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white mt-2 mb-14">
                Virtual Whiteboard & Retrospectives
              </h2>
            </ScrollReveal>

            {/* Glowing Post-It Board representation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
              <ScrollReveal direction="up" delay={50}>
                <div className="bg-[#fbbf24]/12 border border-[#fbbf24]/30 p-6 rounded shadow-[0_0_15px_rgba(251,191,36,0.06)] transform rotate-1 flex flex-col justify-between h-44">
                  <p className="text-sm font-medium text-[#fbbf24]/90 leading-relaxed font-sans">Verify API queries latency & structure offline fallback sync.</p>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-white/35 font-semibold">@tech_lead</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={150}>
                <div className="bg-[#ec4899]/12 border border-[#ec4899]/30 p-6 rounded shadow-[0_0_15px_rgba(236,72,153,0.06)] transform -rotate-2 flex flex-col justify-between h-44">
                  <p className="text-sm font-medium text-[#ec4899]/90 leading-relaxed font-sans">Maximize font contrast score to WCAG 2.1 AA parameters.</p>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-white/35 font-semibold">@ux_designer</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={250}>
                <div className="bg-[#3b82f6]/12 border border-[#3b82f6]/30 p-6 rounded shadow-[0_0_15px_rgba(59,130,246,0.06)] transform rotate-2 flex flex-col justify-between h-44">
                  <p className="text-sm font-medium text-[#3b82f6]/90 leading-relaxed font-sans">Simplify ritual configs down to direct 1-click packages.</p>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-white/35 font-semibold">@product_owner</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={350}>
                <div className="bg-[#10b981]/12 border border-[#10b981]/30 p-6 rounded shadow-[0_0_15px_rgba(16,185,129,0.06)] transform -rotate-1 flex flex-col justify-between h-44">
                  <p className="text-sm font-medium text-[#10b981]/90 leading-relaxed font-sans">Test responsive layouts on physical mobile targets first.</p>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-white/35 font-semibold">@qa_tester</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FINAL UI DESIGNS */}
        <section className="py-20 border-b border-white/5">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="up">
              <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                Premium Aesthetics
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white mt-2 mb-14">
                High-fidelity final UI designs
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.finalUi.map((ui, i) => (
                <ScrollReveal key={ui.title} direction="up" delay={i * 100}>
                  <div className="bg-white/[0.01] border border-white/5 p-6 rounded-sm">
                    <div 
                      className="aspect-[16/9] w-full rounded relative overflow-hidden mb-6 flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${project.accentColor}12 0%, #121225 100%)`, border: `1px solid ${project.accentColor}20` }}
                    >
                      <div className="absolute inset-x-8 top-8 bottom-0 bg-[#08080f] rounded-t border border-white/8 p-4 flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                          <span className="h-1 w-1 rounded-full bg-white/30" />
                          <span className="h-1 w-1 rounded-full bg-white/20" />
                        </div>
                        <div className="h-2 w-1/3 rounded bg-white/10 mt-1" />
                        <div className="h-12 rounded mt-2" style={{ backgroundColor: `${project.accentColor}15` }} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{ui.title}</h3>
                    <p className="text-sm text-white/50 font-light leading-relaxed">{ui.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ACCESSIBILITY & STYLESHEET */}
        <section className="py-20 border-b border-white/5 bg-white/[0.01]">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="up">
              <span className="text-[0.68rem] uppercase tracking-[0.25em] font-semibold" style={{ color: project.accentColor }}>
                Visual Identity
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white mt-2 mb-14">
                Color Palette & Typography
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Color swatches */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-6">Unified Color Palette</h3>
                {project.palette.map((color) => (
                  <ScrollReveal key={color.name} direction="up">
                    <div className="bg-[#121225]/30 border border-white/6 p-4 rounded-sm flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded border border-white/10" style={{ backgroundColor: color.hex }} />
                        <div>
                          <h4 className="text-sm font-semibold text-white">{color.name}</h4>
                          <p className="text-xs text-white/45">{color.hex}</p>
                        </div>
                      </div>
                      <div className="text-[0.8rem] text-white/50 font-light max-w-[60%] text-right">{color.desc}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Typography specs */}
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-sm">
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-6">Typography scale</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.1em] text-white/35 font-mono">H1 / Heading Light</span>
                    <p className="text-2xl sm:text-3xl font-light text-white mt-2 font-sans tracking-tight">Manrope Light - 45px / 1.1</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.1em] text-white/35 font-mono">H3 / Subtitle Regular</span>
                    <p className="text-lg font-normal text-white mt-2 font-sans">Manrope Regular - 18px / 1.5</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.1em] text-white/35 font-mono">Body / Description Light</span>
                    <p className="text-sm font-light text-white/70 mt-2 leading-[1.8] font-sans">Manrope Light - 14px / 1.8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
