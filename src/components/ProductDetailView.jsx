"use client";

import { useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useCtaForm } from "@/components/CtaFormProvider";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";
import ClientsSection from "@/components/ClientsSection";
import AWSTraining from "@/components/AWSTraining";
import InnovativeProductsSection from "@/components/InnovativeProductsSection";
import CreationsShowcaseSection from "@/components/CreationsShowcaseSection";
import HappyCustomersSection from "@/components/HappyCustomersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const PRODUCT_HEROES = {
  lynkbeats: {
    title: "LynkBeats",
    subtitleLine1: "is almost here.",
    badge: "NOW FEATURING",
    badgeDotColor: "#EED616",
    bgImage: "/AGS Landing Page Images/LynkBeats Tablet on Abstract Gradient.png",
    alt: "LynkBeats - Editorial Intelligence Platform",
    descriptionLine1: "Track story performance and editorial KPIs in real time.",
    descriptionLine2: "Get early access when we launch.",
    features: [
      "Real-time story tracking",
      "Editorial KPI benchmarking",
      "Traffic source analysis",
      "AI audience intelligence",
    ],
  },
  newsbuddies: {
    title: "Newsbuddies",
    subtitleLine1: "is almost here.",
    badge: "LAUNCHING SOON",
    badgeDotColor: "#EED616",
    bgImage: "/image5.png",
    alt: "Newsbuddies - Editorial Audience & Headline Intelligence",
    descriptionLine1: "Optimize headlines, regional metadata, and search visibility to drive organic news traffic.",
    descriptionLine2: "Get early access to our automated headline optimization suite.",
    features: [
      "Automated Headline A/B Testing",
      "Regional Geo-Metadata Tagging",
      "Google Discover Optimization",
      "Automated Syndication Feeds",
    ],
  },
  vidlens: {
    title: "VidLens",
    subtitleLine1: "is almost here.",
    badge: "NOW FEATURING",
    badgeDotColor: "#EED616",
    bgImage: "/AGS Landing Page Images/VidLens Laptop on a Futuristic Gradient.png",
    alt: "VidLens - Video Intelligence That Drives Results",
    descriptionLine1: "Paste any channel. See why videos win and grow.",
    descriptionLine2: "Get early access when we launch.",
    features: [
      "Views & growth tracking",
      "Competitor benchmarking",
      "Keyword discovery",
      "AI-powered insights",
    ],
  },
  lumina: {
    title: "Lumina",
    subtitleLine1: "is almost here.",
    badge: "ENTERPRISE READY",
    badgeDotColor: "#818CF8",
    bgImage: "/products/lumina.png",
    alt: "Lumina - Next-Gen Learning Management System",
    descriptionLine1: "Streamline class management, lecture uploads, and student assessments on a unified LMS platform.",
    descriptionLine2: "Empower your institutions with unified digital learning.",
    features: [
      "Dynamic Syllabus Builder",
      "Automated Assessment Engine",
      "Student Retention Analytics",
      "High-Concurrency Cloud Core",
    ],
  },
  stmet: {
    title: "STmet",
    subtitleLine1: "is almost here.",
    badge: "ENTERPRISE READY",
    badgeDotColor: "#C084FC",
    bgImage: "/products/stmet.png",
    alt: "STmet - Ultra-Low Latency Virtual Classrooms",
    descriptionLine1: "Connect students and faculty with low-latency streaming and real-time collaboration tools.",
    descriptionLine2: "Experience next-gen digital interactive education.",
    features: [
      "Interactive Whiteboard",
      "Synchronized Code Editor",
      "Ultra-Low Latency Video",
      "Breakout Discussion Rooms",
    ],
  },
  nexus: {
    title: "Nexus",
    subtitleLine1: "is almost here.",
    badge: "ENTERPRISE READY",
    badgeDotColor: "#60A5FA",
    bgImage: "/products/nexus.png",
    alt: "Nexus - Unified Enterprise HR & Workforce Automation",
    descriptionLine1: "Automate employee onboarding, leave tracking, attendance, and payroll on one central platform.",
    descriptionLine2: "Centralize your entire workforce operations effortlessly.",
    features: [
      "Automated Employee Onboarding",
      "Leave & Attendance Telemetry",
      "Integrated Payroll Engine",
      "Custom Compliance Rules",
    ],
  },
};

export default function ProductDetailView({ slug }) {
  const { openForm } = useCtaForm();
  const [emailInput, setEmailInput] = useState("");

  const normalizedSlug = (slug || "").toLowerCase();

  // Redirect academix directly to its dedicated academy landing page
  if (normalizedSlug === "academix") {
    redirect("/services/aws-training");
  }

  // Fallback if slug not found in map
  const heroData = PRODUCT_HEROES[normalizedSlug] || {
    title: normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1),
    subtitleLine1: "is almost here.",
    badge: "LAUNCHING SOON",
    badgeDotColor: "#EED616",
    bgImage: "/AGS Landing Page Images/LynkBeats Tablet on Abstract Gradient.png",
    alt: `${normalizedSlug} platform`,
    descriptionLine1: "Experience our proprietary digital solutions built for scalable growth.",
    descriptionLine2: "Get early access when we launch.",
    features: [
      "Real-time analytics & KPIs",
      "High-performance cloud core",
      "Enterprise security architecture",
      "Seamless CMS & API integrations",
    ],
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-black select-none">
      <ScrollTriggerRefresh />

      {/* ─────────────────────────────────────────────────────────────
          1. PRODUCT HERO SECTION
          Exact match to Figma export & Homepage Product Slide Layout
          ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-screen min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[740px] xl:min-h-[780px] max-h-[1080px] overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroData.bgImage}
            alt={heroData.alt}
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-right sm:object-center lg:object-right"
          />

          {/* Dedicated Scrim: Guarantees high contrast over bright mockups */}
          {/* Mobile: Full-coverage dark scrim + vertical gradient */}
          <div className="absolute inset-0 bg-[#07051A]/70 sm:hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07051A]/85 via-transparent to-[#07051A]/90 sm:hidden" />

          {/* Desktop: Gentle left-to-right gradient so mockup stays clear and vibrant on the right */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#07051A]/90 via-[#07051A]/40 to-transparent" />
        </div>

        {/* Foreground Content Container — Vertically centered matching Figma layout */}
        <div className="relative z-20 mx-auto flex h-full max-w-[1680px] 2xl:max-w-[1780px] flex-col justify-center px-4 sm:px-12 lg:px-20 2xl:px-24 pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-12">
          <div className="relative w-full max-w-[850px] lg:max-w-[940px] 2xl:max-w-[1020px] flex flex-col items-start justify-center">
            
            {/* Badge: Glowing dot + LAUNCHING SOON */}
            <div className="mb-4 sm:mb-6 w-fit self-start">
              <div className="inline-flex items-center gap-2 border border-white/20 bg-black/40 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-medium tracking-[0.1em] text-white uppercase rounded-none">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: heroData.badgeDotColor || "#EED616",
                    boxShadow: `0 0 10px ${heroData.badgeDotColor || "#EED616"}`,
                  }}
                />
                <span>{heroData.badge}</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[84px] font-normal tracking-tight text-white leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                {heroData.title}
              </h1>
              <p className="mt-2.5 sm:mt-3.5 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal tracking-tight text-[#C4B5FD] sm:text-[#9B86EB] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                {heroData.subtitleLine1}
              </p>
            </div>

            {/* Subtitle / Description */}
            <div className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-white/95 sm:text-white/85 font-normal leading-relaxed max-w-[560px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              <p>{heroData.descriptionLine1}</p>
              <p>{heroData.descriptionLine2}</p>
            </div>

            {/* 4 Feature Bullet Items */}
            {heroData.features && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-5 sm:mt-6 text-xs sm:text-sm text-white font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                {heroData.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5">
                    <span className="text-[#C4B5FD] sm:text-[#9B86EB] font-bold text-base select-none">
                      |
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Waitlist Form: 2 Separate Boxes */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                openForm({ email: emailInput });
              }}
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-[560px]"
            >
              {/* Box 1: Email Input */}
              <input
                type="email"
                placeholder="Your work email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full sm:w-[220px] md:w-[240px] bg-black/65 sm:bg-black/40 border border-white/40 px-4 py-3 text-sm text-white placeholder-white/60 outline-none rounded-none transition-colors focus:border-white/80 font-normal backdrop-blur-md"
              />

              {/* Box 2: Button */}
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-white px-5 sm:px-6 py-3 text-sm font-medium text-black rounded-none transition-all duration-300 hover:bg-white/90 hover:scale-[1.01] shrink-0 cursor-pointer whitespace-nowrap"
              >
                <span>Get Started</span>
                <span className="flex h-5 w-5 items-center justify-center shrink-0 rounded-full border border-black/80 text-black transition-transform duration-300 group-hover:rotate-45">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                  >
                    <path d="M7 17L17 7H7M17 7V17" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CLIENTS SECTION (Trusted by Enterprise Brands)
          Solid White Block matching Homepage & Figma layout
          ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full bg-white">
        <ClientsSection />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. AWS-ACCREDITED TRAINING & DIGITAL BADGES
          Auto-scrolling verified credentials marquee
          ───────────────────────────────────────────────────────────── */}
      <AWSTraining />

      {/* ─────────────────────────────────────────────────────────────
          4. INNOVATIVE DIGITAL PRODUCTS CAROUSEL
          Academix, Lumina, STmet, Nexus, Lynkbeats, Vidlens, Newsbuddies
          ───────────────────────────────────────────────────────────── */}
      <InnovativeProductsSection />

      {/* ─────────────────────────────────────────────────────────────
          5. PORTFOLIO SHOWCASE: "Creations that define excellence"
          ───────────────────────────────────────────────────────────── */}
      <CreationsShowcaseSection />

      {/* ─────────────────────────────────────────────────────────────
          6. TESTIMONIALS / HAPPY CUSTOMERS
          ───────────────────────────────────────────────────────────── */}
      <HappyCustomersSection />

      {/* ─────────────────────────────────────────────────────────────
          7. CTA SECTION: "Let's work with Us"
          ───────────────────────────────────────────────────────────── */}
      <CTASection />

      {/* ─────────────────────────────────────────────────────────────
          8. FULL COMPREHENSIVE FOOTER
          ───────────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
