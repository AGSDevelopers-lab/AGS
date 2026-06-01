"use client";

import Image from "next/image";
import { useState } from "react";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";

/* ─── Data ──────────────────────────────────────────────────────── */

const cultureCards = [
  {
    title: "Company Values",
    description: "We uphold integrity, innovation, and a client-first mindset in everything we deliver.",
    image: "/image 1.png",
  },
  {
    title: "Friendly atmosphere",
    description: "A warm, inclusive workplace where collaboration and mutual respect drive success.",
    image: "/image 3.png",
  },
  {
    title: "Work-life balance",
    description: "Flexible hours and remote options so you can thrive at work and at home.",
    image: "/image 5.png",
  },
  {
    title: "Everyday grow",
    description: "Continuous learning, mentorship, and career paths designed for real growth.",
    image: "/image 6.png",
  },
];

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: "Health Insurance",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" /><path d="M12 7v5l3 3" />
      </svg>
    ),
    label: "Flexible timing",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    label: "Courses & Trainings",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: "Team Events",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    label: "Competitive salary",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "5+ Paid leave",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    label: "Remote work",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" /><path d="M22 4L12 14l-3-3" />
      </svg>
    ),
    label: "30 Paid Off",
  },
];

const peepImages = [
  { src: "/image 1.png", alt: "Team working on UX design" },
  { src: "/image 3.png", alt: "Collaborative problem solving" },
  { src: "/image 5.png", alt: "Mobile development" },
  { src: "/image 6.png", alt: "AI and tech innovation" },
];

const hiringSteps = [
  {
    number: "01",
    title: "Find a role that suits you",
    description: "Discover our open positions and find the perfect match for your skills, experience, and career goals.",
  },
  {
    number: "02",
    title: "Receive your interview invite",
    description: "Our HR team reviews your application and sends you an interview invitation within 3-5 business days.",
  },
  {
    number: "03",
    title: "Choose an interview slot",
    description: "Pick a convenient date and time from our available interview slots via our scheduling system.",
  },
  {
    number: "04",
    title: "Preliminary interview",
    description: "A relaxed conversation to get to know you, understand your experience, and discuss your aspirations.",
  },
  {
    number: "05",
    title: "Meet the panel interview",
    description: "In-depth technical and cultural fit assessment with our senior team members and leadership.",
  },
  {
    number: "06",
    title: "Interview with AGS",
    description: "Final round with the founders. We discuss vision, growth plans, and how you can make an impact.",
  },
];

const openPositions = [
  {
    title: "Full-Stack Developer",
    type: "Engineering",
    location: "Remote / Kolkata",
    experience: "2-4 years",
    description: "We're looking for a passionate Full-Stack Developer to join our Engineering team. You will work closely with Product, Design and Marketing to analyze trends, develop ideas, and craft meaningful experiences.",
  },
  {
    title: "Application developer (react native)",
    type: "Engineering",
    location: "Remote / Kolkata",
    experience: "1-3 years",
    description: "Join our mobile team to build cross-platform applications using React Native. You'll collaborate with senior engineers to ship production-ready features.",
  },
  {
    title: "Senior Product Designer",
    type: "Design",
    location: "Remote",
    experience: "3-5 years",
    description: "Drive UX/UI direction for client and in-house products. You'll own the design system, run user research sessions, and mentor junior designers.",
  },
  {
    title: "Product Manager",
    type: "Management",
    location: "Kolkata",
    experience: "2-4 years",
    description: "Lead product strategy and roadmap for our growing portfolio. You'll work cross-functionally with Engineering, Design, and Marketing teams.",
  },
  {
    title: "Product Owner",
    type: "Management",
    location: "Remote / Kolkata",
    experience: "2-4 years",
    description: "Own the product backlog, prioritize features, and ensure timely delivery of high-impact releases across our product suite.",
  },
];

const blogPosts = [
  {
    title: "How we build the Dispatcher in 6 months",
    image: "/image 1.png",
  },
  {
    title: "The best atmosphere for inclusive factory",
    image: "/image 3.png",
  },
  {
    title: "The Role of Repetition in Communication Design",
    image: "/image 5.png",
  },
  {
    title: "What I Learned Getting Hired",
    image: "/image 6.png",
  },
];

const categories = ["All positions", "Engineering", "Design", "Management"];

/* ─── Component ─────────────────────────────────────────────────── */

export default function CareersPage() {
  const { openForm } = useCtaForm();
  const [activeCategory, setActiveCategory] = useState("All positions");

  const filteredPositions =
    activeCategory === "All positions"
      ? openPositions
      : openPositions.filter((p) => p.type === activeCategory);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black pb-0">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#020205_22%,#010103_48%,#000000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_16%,rgba(86,126,255,0.16),rgba(0,0,0,0)_18%),radial-gradient(circle_at_96%_14%,rgba(120,96,255,0.18),rgba(0,0,0,0)_18%),radial-gradient(circle_at_3%_48%,rgba(72,118,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_97%_54%,rgba(126,84,255,0.15),rgba(0,0,0,0)_18%),radial-gradient(circle_at_2%_82%,rgba(82,130,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_98%_88%,rgba(128,88,255,0.14),rgba(0,0,0,0)_18%)]" />
        <div className="absolute left-[-14%] top-[12%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(104,158,255,1)_0%,rgba(56,112,255,0.82)_22%,rgba(24,70,255,0.34)_52%,rgba(0,0,0,0)_76%)] blur-[96px] mix-blend-screen" />
        <div className="absolute right-[-16%] top-[2%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(145,108,255,0.98)_0%,rgba(87,90,255,0.76)_24%,rgba(50,53,186,0.3)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
        <div className="absolute left-[-18%] top-[26%] h-168 w-2xl rounded-full bg-[radial-gradient(circle,rgba(98,156,255,1)_0%,rgba(55,118,255,0.8)_24%,rgba(25,72,255,0.34)_54%,rgba(0,0,0,0)_78%)] blur-[108px] mix-blend-screen" />
        <div className="absolute right-[-14%] top-[34%] h-144 w-xl rounded-full bg-[radial-gradient(circle,rgba(101,160,255,0.96)_0%,rgba(54,111,255,0.72)_24%,rgba(25,71,236,0.28)_56%,rgba(0,0,0,0)_78%)] blur-[96px] mix-blend-screen" />
        <div className="absolute left-[-14%] top-[48%] h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(144,96,255,0.96)_0%,rgba(92,74,255,0.68)_24%,rgba(54,42,188,0.24)_56%,rgba(0,0,0,0)_78%)] blur-[92px] mix-blend-screen" />
        <div className="absolute right-[-12%] top-[58%] h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(152,104,255,0.96)_0%,rgba(94,77,255,0.7)_24%,rgba(53,40,190,0.26)_56%,rgba(0,0,0,0)_78%)] blur-[94px] mix-blend-screen" />
        <div className="absolute left-[-16%] top-[72%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(106,162,255,0.96)_0%,rgba(56,114,255,0.72)_24%,rgba(28,70,236,0.26)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
        <div className="absolute right-[-18%] top-[82%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(148,104,255,0.92)_0%,rgba(92,74,255,0.66)_24%,rgba(51,40,186,0.22)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[120px_120px]" />
      </div>

      <div className="relative z-10 w-full pt-16 lg:pt-24">

        {/* ═══ 1. HERO ═══ */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center -mt-24 pt-24 overflow-hidden border-b border-white/10">
          <Image
            src="/frame 3.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

          <div className="relative z-10 max-w-4xl px-6 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-tight">
              Join the team
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
              AGS is an innovative digital solutions company that builds custom technology,
              automating mission-critical processes, designed with meticulous care and expertise.
            </p>
            <p className="text-[0.9rem] text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
              We give priority to an open & dynamic work environment.
            </p>
            <button
              onClick={() => openForm()}
              className="mx-auto group flex items-center space-x-3 border border-white bg-white px-6 py-3 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"
            >
              <span>See Careers ↗</span>
            </button>
          </div>
        </section>

        {/* ═══ 2. WHY AGS — CULTURE CARDS ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              What make AGS a great place<br />to work?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cultureCards.map((card) => (
              <div key={card.title} className="group relative overflow-hidden rounded-sm border border-white/8 bg-transparent">
                <div className="relative h-44 overflow-hidden">
                  <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div className="p-5">
                  <h4 className="text-[0.95rem] font-medium text-white mb-1.5">{card.title}</h4>
                  <p className="text-[0.78rem] text-white/50 leading-relaxed font-light">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 3. WHAT BENEFITS ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              What benefits are waiting for you?
            </h2>
            <p className="mt-4 text-white/55 text-[0.95rem] font-light max-w-xl mx-auto">
              Amrut craft offers a series of team benefits/perks that you can take advantage of.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {benefits.map((b) => (
              <div key={b.label} className="glass-card glass-card-hover rounded-sm p-5 flex flex-col items-center text-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-[#7B5CFF]/15 flex items-center justify-center">
                  {b.icon}
                </div>
                <p className="text-[0.78rem] text-white/70 font-medium">{b.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 4. TAKE A PEEP — PHOTO GALLERY ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              Take a peep at what goes on at AGS
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {peepImages.map((img, i) => (
              <div key={img.src} className={`group relative overflow-hidden rounded-sm ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
                <div className={`relative w-full ${i === 0 ? "h-64 lg:h-full" : "h-44 lg:h-52"}`}>
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                {i === peepImages.length - 1 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <span className="text-white text-sm font-medium border border-white/30 px-4 py-2 rounded-sm hover:bg-white/10 transition-colors cursor-pointer">
                      Explore more →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 5. TESTIMONIALS ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              Don&apos;t just take our word for it!
            </h2>
            <p className="mt-3 text-white/55 text-[1rem] font-light">
              See the feedback from your teammates.
            </p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="glass-card rounded-sm p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#7B5CFF]/20 flex items-center justify-center text-[#9795FF] text-sm font-semibold shrink-0">
                  AG
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-[0.95rem] font-medium">Ankit Ghosh</p>
                      <p className="text-white/40 text-[0.78rem]">Founder of Molifera Media</p>
                    </div>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#7B5CFF]/30 shrink-0">
                      <path d="M3 21c3-6 3-10 3-14h4c0 4-1 8-4 14H3zm11 0c3-6 3-10 3-14h4c0 4-1 8-4 14h-3z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-[0.92rem] leading-[1.85] font-light">
                &ldquo;I&apos;d admire the company culture and I like that everything is done on time. The code quality standards here blended with proficiency. If you&apos;re going to start working on a goal of your time, this is the best experience to do that. Amrut craft with services at baseline in our profession.&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <p className="text-white/40 text-[0.75rem]">AGS Testimonials</p>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/40 hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/40 hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. HOW TO BECOME A AGSer ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              How to become a AGSer?
            </h2>
            <p className="mt-3 text-white/55 text-[0.95rem] font-light max-w-2xl mx-auto">
              Getting on couldn&apos;t be easier! Check out our application process down below. If you have any intent or doubt? Do reach out to our team.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Left — image */}
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden hidden lg:block">
              <Image src="/frame 3.png" alt="AGS interview process" fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Right — steps */}
            <div className="flex flex-col gap-0">
              {hiringSteps.map((step, i) => (
                <div key={step.number} className="relative flex gap-5 pb-8">
                  {/* Vertical line */}
                  {i < hiringSteps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-[#7B5CFF]/40 to-[#7B5CFF]/10" />
                  )}
                  {/* Number circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full border border-[#7B5CFF]/50 bg-[#7B5CFF]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#9795FF] text-xs font-semibold">{step.number}</span>
                  </div>
                  {/* Content */}
                  <div className="pt-1.5">
                    <h4 className="text-[0.95rem] font-medium text-white mb-1">{step.title}</h4>
                    <p className="text-[0.82rem] text-white/50 leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 7. OPEN POSITIONS ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              We have {openPositions.length} open positions now!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
            {/* Left — filter tabs */}
            <div className="flex flex-row lg:flex-col gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-4 py-2.5 text-[0.85rem] font-medium rounded-sm transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#7B5CFF]/20 text-white border border-[#7B5CFF]/40"
                      : "text-white/50 hover:text-white/80 border border-transparent hover:border-white/10"
                  }`}
                >
                  {cat} {cat === "All positions" && `(${openPositions.length})`}
                  {cat === "Engineering" && ` (${openPositions.filter((p) => p.type === "Engineering").length})`}
                  {cat === "Design" && ` (${openPositions.filter((p) => p.type === "Design").length})`}
                  {cat === "Management" && ` (${openPositions.filter((p) => p.type === "Management").length})`}
                </button>
              ))}
            </div>

            {/* Right — job cards */}
            <div className="flex flex-col gap-4">
              {filteredPositions.map((pos) => (
                <div key={pos.title} className="glass-card glass-card-hover rounded-sm p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-[1.2rem] font-medium text-white mb-2">{pos.title}</h3>
                      <div className="flex flex-wrap gap-3 text-[0.75rem] text-white/45 mb-3">
                        <span className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                          {pos.location}
                        </span>
                        <span>•</span>
                        <span>{pos.experience}</span>
                        <span>•</span>
                        <span>{pos.type}</span>
                      </div>
                      <p className="text-[0.85rem] text-white/55 leading-relaxed font-light">{pos.description}</p>
                    </div>
                    <button
                      onClick={() => openForm()}
                      className="shrink-0 self-start text-[0.8rem] font-medium text-[#9795FF] border border-[#7B5CFF]/40 px-4 py-2 rounded-sm hover:bg-[#7B5CFF]/15 transition-colors"
                    >
                      Apply Now →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 8. INTERNSHIP PROGRAM ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              Launch Your Career with Our Internship Program
            </h2>
            <p className="mt-4 text-white/55 text-[0.95rem] font-light max-w-2xl mx-auto">
              Get hands-on experience with our team of seasoned developers and design from industry experts, where innovation comes naturally.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => openForm()}
              className="group inline-flex items-center gap-3 border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-700 hover:bg-transparent hover:text-white"
            >
              <span>Discover more</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-700 group-hover:rotate-45">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </section>

        {/* ═══ 9. STORIES BY AGS ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              Stories by AGS
            </h2>
            <p className="mt-3 text-white/55 text-[0.95rem] font-light">
              Read more on our blog.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogPosts.map((post) => (
              <div key={post.title} className="group glass-card glass-card-hover rounded-sm overflow-hidden cursor-pointer">
                <div className="relative h-40 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="p-5">
                  <h4 className="text-[0.88rem] font-medium text-white leading-snug line-clamp-2">{post.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ 10. LET'S WORK WITH US ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="glass-card rounded-sm p-10 md:p-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block mb-4">
                  Let&apos;s work with Us
                </h2>
                <p className="text-white/55 text-[0.95rem] font-light max-w-lg leading-relaxed">
                  Blog writing is a Magical Content of Freelance, who provides the services to companies and help them reach their goals by putting digital experiences.
                </p>
              </div>
              <button
                onClick={() => openForm()}
                className="shrink-0 self-start group inline-flex items-center gap-3 border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"
              >
                <span>Join Now ↗</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* CTA SECTION */}
      <div className="relative z-10 w-full">
        <CTASection />
      </div>
    </main>
  );
}
