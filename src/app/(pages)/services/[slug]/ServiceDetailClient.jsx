"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCtaForm } from "@/components/CtaFormProvider";
import ServiceVisual from "@/components/ServiceVisual";
import ScrollReveal from "@/components/ScrollReveal";

function normalizeTech(tech) {
  if (typeof tech === "string") return { name: tech, image: null };
  return tech;
}

function TechLogo({ name, image }) {
  const [error, setError] = useState(false);
  const initials = name
    .split(/[\s.&+/]+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const showPlaceholder = !image || error;

  if (!showPlaceholder) {
    return (
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-auto max-w-[120px] object-contain opacity-80 transition duration-300 hover:opacity-100"
        onError={() => setError(true)}
      />
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/[0.04]">
      <span className="text-[0.7rem] font-medium text-white/45">{initials}</span>
    </div>
  );
}

function TechStackGrid({ items }) {
  const techs = items.map(normalizeTech);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center gap-3 rounded-lg bg-white/[0.02] px-3 py-4 transition duration-300 hover:bg-white/[0.04]"
        >
          <TechLogo name={tech.name} image={tech.image} />
          <span className="text-center text-[0.78rem] font-medium leading-tight text-white/75">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

function HeroStats({ data }) {
  const stats =
    data.stats ??
    (data.statValue && data.statLabel
      ? [{ value: data.statValue, label: data.statLabel }]
      : []);

  if (stats.length === 0) return null;

  return (
    <div className="mt-10">
      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.2em] text-[#9795FF]/80">
        Performance benchmarks
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 max-w-xl">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border border-white/10 bg-white/[0.03] px-4 py-3.5 backdrop-blur-sm transition duration-300 hover:border-[#9795FF]/30 hover:bg-white/[0.05]"
          >
            <span className="block text-2xl font-light tracking-tight text-white sm:text-[1.65rem]">
              {stat.value}
            </span>
            <span className="mt-1 block text-[0.62rem] uppercase leading-snug tracking-[0.12em] text-white/45">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceDetailClient({ data }) {
  const { openForm } = useCtaForm();

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black pb-0">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#020205_22%,#010103_48%,#000000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_16%,rgba(86,126,255,0.16),rgba(0,0,0,0)_18%),radial-gradient(circle_at_96%_14%,rgba(120,96,255,0.18),rgba(0,0,0,0)_18%),radial-gradient(circle_at_3%_48%,rgba(72,118,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_97%_54%,rgba(126,84,255,0.15),rgba(0,0,0,0)_18%)]" />
        <div className="absolute left-[-15%] top-[10%] h-144 w-144 rounded-full bg-[radial-gradient(circle,rgba(123,92,255,0.22)_0%,rgba(0,0,0,0)_70%)] blur-[90px] mix-blend-screen" />
        <div className="absolute right-[-15%] top-[25%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(86,126,255,0.2)_0%,rgba(0,0,0,0)_70%)] blur-[95px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[120px_120px]" />
      </div>

      <div className="relative z-10 w-full pt-16 lg:pt-24">
        {/* HERO SECTION */}
        <section className="relative w-full px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32 overflow-hidden border-b border-white/10">
          <div className="mx-auto max-w-[1400px] sm:px-8 lg:px-26">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Text */}
              <div className="w-full lg:w-[58%] text-left">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#7b5cff] mb-6 hover:text-white transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:-translate-x-1">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  <span>Our Services</span>
                </Link>

                <h1 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-4xl sm:text-6xl font-light tracking-tight text-transparent leading-[1.1]">
                  {data.title}
                </h1>

                <p className="mt-4 text-lg sm:text-[1.32rem] text-[#b4b4c0] font-light leading-relaxed max-w-2xl">
                  {data.subtitle}
                </p>

                <p className="mt-6 text-[0.98rem] leading-[1.8] text-white/70 font-light max-w-xl">
                  {data.intro}
                </p>

                {/* Performance stats */}
                <HeroStats data={data} />
              </div>

              {/* Visual */}
              <div className="w-full lg:w-[42%] flex-shrink-0">
                {data.visual ? (
                  <ServiceVisual variant={data.visual} label={data.title} />
                ) : (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={data.heroImage}
                      alt={data.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover opacity-90"
                      priority
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="py-20 border-b border-white/5">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="up">
              <div className="mb-14">
                <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#7b5cff] font-semibold">
                  Core Capabilities
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-white mt-2">
                  What We Deliver Under This Pillar
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.capabilities.map((cap, i) => (
                <ScrollReveal
                  key={cap.title}
                  direction="up"
                  delay={i * 100}
                >
                  <article className="h-full bg-[#121225]/40 border border-white/5 p-8 flex flex-col justify-between hover:border-white/12 transition-all duration-300 rounded-sm">
                    <div>
                      <div className="text-[0.68rem] text-[#7b5cff] font-semibold mb-5 font-mono">
                        {`// CAPABILITY_0${i + 1}`}
                      </div>
                      <h3 className="text-lg font-medium text-white mb-3">
                        {cap.title}
                      </h3>
                      <p className="text-[0.88rem] leading-[1.65] text-white/60 font-light">
                        {cap.desc}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-20 border-b border-white/5">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="up">
              <div className="mb-16 text-center">
                <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#7b5cff] font-semibold">
                  The Blueprint
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-white mt-2">
                  Our Agile Process Step-by-Step
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.process.map((step, i) => (
                <ScrollReveal
                  key={step.phase}
                  direction="up"
                  delay={i * 100}
                >
                  <div className="relative p-6 bg-[#0f0f1c] border border-white/5 rounded-sm h-full flex flex-col justify-between">
                    <div>
                      <div className="text-5xl font-extralight text-white/10 mb-6">
                        {step.step}
                      </div>
                      <h3 className="text-[1.1rem] font-medium text-white mb-3">
                        {step.phase}
                      </h3>
                      <p className="text-[0.85rem] leading-[1.6] text-white/50 font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-14 bg-white/[0.01] border-b border-white/5">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
            <ScrollReveal direction="fade">
              <div className="mb-8 text-center">
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
                  Our Technical Capabilities
                </h3>
              </div>
              <TechStackGrid items={data.techStack} />
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 border-b border-white/5">
          <div className="mx-auto max-w-[900px] px-6">
            <ScrollReveal direction="up">
              <div className="mb-14 text-center">
                <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#7b5cff] font-semibold">
                  Common Inquiries
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-white mt-2">
                  Frequently Asked Questions
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {data.faqs.map((faq, i) => (
                <ScrollReveal
                  key={faq.q}
                  direction="up"
                  delay={i * 100}
                >
                  <div className="p-6 bg-[#121225]/20 border border-white/5 rounded-sm">
                    <h3 className="text-lg font-medium text-white mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-[0.9rem] leading-[1.65] text-white/60 font-light">
                      {faq.a}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE CTA */}
        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal direction="up">
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-6">
                Have an idea for a {data.title} project?
              </h2>
              <p className="text-white/60 font-light mb-10 max-w-xl mx-auto leading-relaxed">
                Connect with our senior architects for a comprehensive breakdown audit and precise estimate.
              </p>
              <button
                type="button"
                onClick={() => openForm({ service: data.title, lockService: true })}
                className="group inline-flex items-center gap-3 border border-white bg-white px-8 py-4 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"
              >
                <span>Initiate Audit Analysis</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-700 group-hover:rotate-45"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </main>
  );
}
