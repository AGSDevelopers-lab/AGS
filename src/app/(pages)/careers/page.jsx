"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";

/* ─── Data ──────────────────────────────────────────────────────── */

const cultureCards = [
  {
    title: "Company Values",
    description: "We uphold integrity, innovation, and a client-first mindset in everything we deliver.",
    image: "/ags1/What make AGS a great place to work 1.png",
  },
  {
    title: "Friendly atmosphere",
    description: "A warm, inclusive workplace where collaboration and mutual respect drive success.",
    image: "/ags1/What make AGS a great place to work 2.png",
  },
  {
    title: "Work-life balance",
    description: "Flexible hours and remote options so you can thrive at work and at home.",
    image: "/ags1/What make AGS a great place to work 3.png",
  },
  {
    title: "Everyday grow",
    description: "Continuous learning, mentorship, and career paths designed for real growth.",
    image: "/ags1/What make AGS a great place to work 1.png",
  },
];

const benefits = [
  { text: "Health care Insurance", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg> },
  { text: "Marriage bonus", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg> },
  { text: "Marriage bonus", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg> },
  { text: "30 days paid vacation", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M10 14h4v4h-4z" /></svg> },
  { text: "Fun team events", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><path d="M4 20L20 4" /><path d="M2 12l6 6" /><path d="M12 2l6 6" /><circle cx="16" cy="16" r="2" /></svg> },
  { text: "Employee referral bonus", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /><line x1="22" y1="2" x2="16" y2="8" /></svg> },
  { text: "Competitive salary", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M22 12h-4v-4" /><path d="M2 12h4v4" /></svg> },
  { text: "Birthdays celebration", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white"><path d="M12 2v4" /><rect x="4" y="10" width="16" height="12" rx="2" /><path d="M4 14h16" /></svg> },
];

const peepImages = [
  "/ags1/career take a peep at what goes on ags 1.png",
  "/ags1/career take a peep at what goes on ags 2.png",
  "/ags1/career take a peep at what goes on ags 3.png",
  "/ags1/career take a peep at what goes on ags 4.png",
  "/ags1/career take a peep at what goes on ags 5.png",
];

const openPositions = [
  {
    title: "Full-Stack Developers",
    tags: ["Tartu", "Full-time"],
    description: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    title: "Application developer (react native)",
    tags: ["Tartu", "Full-time"],
    description: "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    title: "Senior Product designer",
    tags: ["Hybrid", "Tallinn", "Full-time"],
    description: "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let's talk!",
  },
  {
    title: "Product Manager",
    tags: ["Remote", "Netherlands", "Full-time"],
    description: "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.",
  },
  {
    title: "Product Owner",
    tags: ["Tartu", "Full-time"],
    description: "We've worked on 30+ major projects from 8 different industries that are being. Need full-cycle product development or an improvement cycle? Let's talk!",
  },
];

const blogPosts = [
  {
    title: "How we build the Dagmarket on 6 months",
    author: "Kaur Kaljuma",
    date: "May 20th 2020",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    image: "/ags1/stories by ags 1.png",
    authorImg: "/ags1/career take a peep at what goes on ags 2.png"
  },
  {
    title: "The last anonncement for success factory",
    author: "Raigo Tuulik",
    date: "May 20th 2020",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    image: "/ags1/stories by ags 2.png",
    authorImg: "/ags1/career take a peep at what goes on ags 4.png"
  },
  {
    title: "The Role of Repetition in Conversation Design",
    author: "Jüri Siilivask",
    date: "May 20th 2020",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    image: "/ags1/stories by ags 3.png",
    authorImg: "/ags1/career take a peep at what goes on ags 1.png"
  },
  {
    title: "What I Learned Getting Hired",
    author: "Mazdak Shakiba",
    date: "May 20th 2020",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    image: "/ags1/stories by ags 4.png",
    authorImg: "/ags1/career take a peep at what goes on ags 3.png"
  },
];

const categories = ["All positions", "Engineering", "Design", "Management"];

const testimonials = [
  {
    quote: "I do admire the company culture and, I like that. Visioncraft is truly the place where good attitudes have blended with proficiency. If you're going to craft something great and you have a strong eagerness to do that, Visioncraft will remove all hassles in your journey.",
    name: "James Olson",
    role: "Product Designer"
  },
  {
    quote: "Working here has completely transformed my career trajectory. The emphasis on continuous learning and the supportive environment are unparalleled. Every day brings a new challenge.",
    name: "Sarah Jenkins",
    role: "Frontend Engineer"
  },
  {
    quote: "The leadership team genuinely cares about our well-being and professional growth. We are given the autonomy to make impactful decisions while having a safety net of brilliant colleagues.",
    name: "Marcus Chen",
    role: "Backend Developer"
  },
  {
    quote: "Collaboration is at the heart of everything we do. I've never worked with a more dedicated, passionate, and intelligent group of people.",
    name: "Elena Rodriguez",
    role: "Project Manager"
  },
  {
    quote: "Innovation isn't just a buzzword here; it's practically built into our daily routines. The freedom to experiment and push the boundaries of what's possible is truly liberating.",
    name: "David Kim",
    role: "UX Researcher"
  },
  {
    quote: "I've been here for three years, and the growth I've experienced is astounding. We are solving real-world problems with cutting-edge technology.",
    name: "Aisha Patel",
    role: "Data Scientist"
  }
];

/* ─── Component ─────────────────────────────────────────────────── */

export default function CareersPage() {
  const { openForm } = useCtaForm();
  const [activeCategory, setActiveCategory] = useState("All positions");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.timeline-step').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
            src="/ags1/career hero.png"
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
            <Link
              href="/contact"
              className="mx-auto w-fit group inline-flex items-center gap-2 border border-white bg-white px-6 py-3 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"
            >
              <span>See Careers</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="group relative w-full h-20 sm:h-24 flex items-center justify-start px-4 overflow-hidden rounded-md border border-white/10 bg-[#252535] hover:bg-[#323246] transition-colors">
                <div className="flex-shrink-0 mr-3 opacity-80 group-hover:opacity-100 transition-opacity">
                  {benefit.icon}
                </div>
                <span className="text-white/90 text-sm font-medium text-left leading-tight">
                  {benefit.text}
                </span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px] max-w-6xl mx-auto">
            {/* Column 1: Guy at desk (Top), Guy in chair (Bottom) */}
            <div className="flex flex-col gap-4 h-[600px] md:h-full">
              <div className="relative w-full flex-[5] overflow-hidden rounded-xl group">
                <Image src="/ags1/career take a peep at what goes on ags 1.png" fill unoptimized className="object-cover object-top transition-transform duration-700 group-hover:scale-105" alt="AGS Team 1" />
              </div>
              <div className="relative w-full flex-[3] overflow-hidden rounded-xl group">
                <Image src="/ags1/career take a peep at what goes on ags 3.png" fill unoptimized className="object-cover object-top transition-transform duration-700 group-hover:scale-105" alt="AGS Team 2" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 h-[600px] md:h-full">
              <div className="relative w-full flex-[5] overflow-hidden rounded-xl group">
                <Image src="/ags1/career take a peep at what goes on ags 5.png" fill unoptimized className="object-cover object-top transition-transform duration-700 group-hover:scale-105" alt="AGS Team 3" />
              </div>
              <div className="relative w-full flex-[3] overflow-hidden rounded-xl group">
                <Image src="/ags1/career take a peep at what goes on ags 2.png" fill unoptimized className="object-cover object-top transition-transform duration-700 group-hover:scale-105" alt="AGS Team 7" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 h-[600px] md:h-full">
              <div className="relative w-full flex-1 overflow-hidden rounded-xl group">
                <Image src="/ags1/career take a peep at what goes on ags 6.png" fill unoptimized className="object-cover object-top transition-transform duration-700 group-hover:scale-105" alt="AGS Team 4" />
              </div>
              <div className="relative w-full flex-1 overflow-hidden rounded-xl group">
                <Image src="/ags1/career take a peep at what goes on ags 7.png" fill unoptimized className="object-cover object-top transition-transform duration-700 group-hover:scale-105" alt="AGS Team 5" />
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#2a1b8d] px-8 py-4 text-white hover:bg-[#32239e] transition-colors">
              <span className="text-[1.15rem] font-light">Explore more</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
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

          <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Image Side */}
            <div className="col-span-12 lg:col-span-3 relative h-[300px] lg:h-[450px] rounded-xl overflow-hidden">
              <Image src="/ags1/Don't just take our word for it left.png" fill unoptimized className="object-cover transition-opacity duration-500" alt="Testimonial author" />
            </div>

            {/* Middle Quote Side (Overlaps Left) */}
            <div className="col-span-12 lg:col-span-6 bg-white rounded-xl p-8 md:p-12 lg:p-14 flex flex-col justify-center min-h-[350px] relative z-10 lg:-ml-12 lg:shadow-xl">
              <div className="relative">
                <svg className="absolute -top-6 -left-6 text-black/5 w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-[#333333] text-[1.15rem] leading-relaxed relative z-10 font-light mb-10">
                  &quot;{testimonials[activeTestimonial].quote}&quot;
                </p>
                <div>
                  <h4 className="text-black font-semibold text-lg">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-black/50 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
                {/* LinkedIn Badge */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#0a66c2] flex justify-center items-center shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-black/60">LinkedIn profile</span>
                </div>
              </div>
            </div>

            {/* Right Images Column */}
            <div className="hidden lg:flex col-span-3 flex-row gap-2 h-[350px]">
              <div className="relative flex-1 rounded-xl overflow-hidden">
                <Image src="/ags1/Don't just take our word for it right 1.png" fill unoptimized className="object-cover" alt="Author photo 1" />
              </div>
              <div className="relative flex-1 rounded-xl overflow-hidden">
                <Image src="/ags1/Don't just take our word for it right 2.png" fill unoptimized className="object-cover" alt="Author photo 2" />
              </div>
              <div className="relative flex-1 rounded-xl overflow-hidden">
                <Image src="/ags1/Don't just take our word for it righ 3.png" fill unoptimized className="object-cover" alt="Author photo 3" />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 max-w-6xl mx-auto flex justify-between items-end w-full px-2">
            <div className="flex flex-col">
              <div className="text-white/60 text-[0.95rem] mb-4 font-light tracking-wide">{activeTestimonial + 1}/{testimonials.length} Testimonials</div>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <div key={idx} className={`h-[2px] transition-all duration-300 ${activeTestimonial === idx ? 'bg-white w-10' : 'bg-white/20 w-10'}`} />
                ))}
              </div>
            </div>
            <button onClick={nextTestimonial} className="text-white text-[1.1rem] font-light flex items-center gap-2 group hover:opacity-80 transition-opacity">
              Next
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </section>

        {/* ═══ 6. HOW TO BECOME A AGSer ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              How to become a AGSer?
            </h2>
          </div>

          <div className="mt-20 max-w-4xl mx-auto relative pb-8">
            {/* Center Line */}
            <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/20 transform md:-translate-x-1/2" />

            {/* Step 1 */}
            <div className="timeline-step opacity-0 translate-y-12 transition-all duration-1000 ease-out relative flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
              <div className="hidden md:block w-5/12" />
              <div className="absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full bg-white text-black font-medium text-[1.3rem] flex items-center justify-center transform -translate-x-1/2 border-[3px] border-[#0033ff] shadow-sm z-10 transition-all duration-700 delay-300">01</div>
              <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <h4 className="text-white text-[1.1rem] font-medium mb-2">Find a role that suits you</h4>
                <p className="text-white/80 text-[1rem] leading-relaxed">Discover open positions and find your desired one in the Visioncraft website, job listings or social media.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="timeline-step opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-200 relative flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
              <div className="w-full md:w-5/12 pl-20 md:pr-12 md:pl-0 md:text-right order-2 md:order-1">
                <h4 className="text-white text-[1.1rem] font-medium mb-2">Send your application</h4>
                <p className="text-white/60 text-[0.95rem] leading-relaxed">Some simple questions should be answered and your contact information is required.</p>
              </div>
              <div className="absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full bg-white text-black font-medium text-[1.3rem] flex items-center justify-center transform -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 transition-all duration-700 delay-500">02</div>
              <div className="hidden md:block w-5/12 order-3" />
            </div>

            {/* Step 3 */}
            <div className="timeline-step opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300 relative flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
              <div className="hidden md:block w-5/12" />
              <div className="absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full bg-white text-black font-medium text-[1.3rem] flex items-center justify-center transform -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 transition-all duration-700 delay-500">03</div>
              <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <h4 className="text-white text-[1.1rem] font-medium mb-2">Receive your interview invite</h4>
                <p className="text-white/60 text-[0.95rem] leading-relaxed">We review all applications within 3 working days and send invitations to candidates.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="timeline-step opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-500 relative flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
              <div className="w-full md:w-5/12 pl-20 md:pr-12 md:pl-0 md:text-right order-2 md:order-1">
                <h4 className="text-white text-[1.1rem] font-medium mb-2">Choose an interview slot</h4>
                <p className="text-white/60 text-[0.95rem] leading-relaxed">You will have a friendly discussion with the CEO and your supervisor to talk about the work, life and etc.</p>
              </div>
              <div className="absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full bg-white text-black font-medium text-[1.3rem] flex items-center justify-center transform -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 transition-all duration-700 delay-700">04</div>
              <div className="hidden md:block w-5/12 order-3" />
            </div>

            {/* Step 5 */}
            <div className="timeline-step opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300 relative flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
              <div className="hidden md:block w-5/12" />
              <div className="absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full bg-white text-black font-medium text-[1.3rem] flex items-center justify-center transform -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 transition-all duration-700 delay-500">05</div>
              <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <h4 className="text-white text-[1.1rem] font-medium mb-2">Preliminary Interview</h4>
                <p className="text-white/60 text-[0.95rem] leading-relaxed">Sometimes, we ask candidates to participate in some technical challenge that is designated to demonstrate candidates' proficiency.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="timeline-step opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-500 relative flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
              <div className="w-full md:w-5/12 pl-20 md:pr-12 md:pl-0 md:text-right order-2 md:order-1">
                <h4 className="text-white text-[1.1rem] font-medium mb-2">Meet your teammates</h4>
                <p className="text-white/60 text-[0.95rem] leading-relaxed">To us, it is crucial to make sure all team members feel comfortable. It is why we try to have diverse but culturally fitted team members.</p>
              </div>
              <div className="absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full bg-white text-black font-medium text-[1.3rem] flex items-center justify-center transform -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 transition-all duration-700 delay-700">06</div>
              <div className="hidden md:block w-5/12 order-3" />
            </div>

            {/* Step 7 */}
            <div className="timeline-step opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300 relative flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
              <div className="hidden md:block w-5/12" />
              <div className="absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full bg-white text-black font-medium text-[1.3rem] flex items-center justify-center transform -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 transition-all duration-700 delay-500">07</div>
              <div className="w-full md:w-5/12 pl-20 md:pl-0">
                <h4 className="text-white text-[1.1rem] font-medium mb-2">Interview with our CEO</h4>
                <p className="text-white/60 text-[0.95rem] leading-relaxed">Your colleagues are waiting for you to say a warm welcome.</p>
              </div>
            </div>

            {/* Step 8 (Handshake) */}
            <div className="timeline-step opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-500 relative flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="w-full md:w-5/12 pl-20 md:pr-12 md:pl-0 md:text-right order-2 md:order-1">
                <h4 className="text-white text-[1.1rem] font-medium mb-2">Start a new journey!</h4>
              </div>
              <div className="absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full bg-white text-2xl flex items-center justify-center transform -translate-x-1/2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 transition-all duration-700 delay-700">🤝</div>
              <div className="hidden md:block w-5/12 order-3" />
            </div>
          </div>
        </section>

        {/* ═══ 7. OPEN POSITIONS ═══ */}
        <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
              We have 17 open positions now!
            </h2>
          </div>

          <div className="mt-14 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="flex flex-col mb-12">
                <div className="bg-white text-black font-medium text-[0.95rem] py-4 px-6 border-l-[3px] border-[#0033ff]">All positions (17)</div>
                <div className="text-white/70 hover:text-white font-medium text-[0.95rem] py-4 px-6 cursor-pointer">Engineering (7)</div>
                <div className="text-white/70 hover:text-white font-medium text-[0.95rem] py-4 px-6 cursor-pointer">Product (3)</div>
                <div className="text-white/70 hover:text-white font-medium text-[0.95rem] py-4 px-6 cursor-pointer">Design (1)</div>
                <div className="text-white/70 hover:text-white font-medium text-[0.95rem] py-4 px-6 cursor-pointer">Operation (4)</div>
                <div className="text-white/70 hover:text-white font-medium text-[0.95rem] py-4 px-6 cursor-pointer">Marketing (2)</div>
              </div>
              <p className="text-white/60 text-[0.9rem] leading-relaxed pr-4">
                We are always seeking talented people. In case you cannot find your desired position here, please send us your LinkedIn profile and give us your contact information. We will be in touch.
              </p>
            </div>

            {/* Right Job Cards */}
            <div className="lg:col-span-9 flex flex-col gap-6">
              {openPositions.map((job, idx) => (
                <div key={idx} className="bg-white rounded-md p-6 md:p-8 flex flex-col relative">
                  <h3 className="text-black text-xl font-bold mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-4 py-1 rounded-full border border-black/20 text-black/70 text-[0.8rem]">{tag}</span>
                    ))}
                  </div>
                  <p className="text-black/80 text-[0.9rem] leading-relaxed mb-6 lg:mb-0 lg:mr-44">
                    {job.description}
                  </p>
                  <div className="lg:absolute lg:bottom-8 lg:right-8 flex justify-start lg:justify-end mt-4 lg:mt-0">
                    <Link href="/contact" className="bg-[#0f0f0f] text-white px-5 py-2.5 font-medium text-[0.85rem] hover:bg-black/80 transition-colors group flex items-center gap-2">
                      See positions
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {blogPosts.map((post, i) => (
              <div key={i} className="group overflow-hidden rounded-md border border-white/10 bg-[#252535] hover:border-white/30 transition-colors flex flex-col">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-white font-medium text-[1.1rem] leading-snug mb-5">{post.title}</h3>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={post.authorImg} alt={post.author} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-white/90 text-sm font-medium">{post.author}</div>
                      <div className="text-white/50 text-xs">{post.date}</div>
                    </div>
                  </div>
                  <div className="flex-grow mb-6">
                    <p className={`text-white/60 text-sm leading-relaxed transition-all duration-300 ${expandedBlogIndex === i ? '' : 'line-clamp-4'}`}>
                      {post.description}
                    </p>
                  </div>
                  <button 
                    onClick={() => setExpandedBlogIndex(expandedBlogIndex === i ? null : i)}
                    className="bg-white text-black px-4 py-2 text-[0.85rem] font-medium self-start hover:bg-white/80 transition-colors flex items-center gap-2"
                  >
                    {expandedBlogIndex === i ? 'Read less' : 'Read more'} 
                    <span className={`transition-transform duration-300 ${expandedBlogIndex === i ? '-rotate-90' : ''}`}>→</span>
                  </button>
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
                  Join a team of innovators and creators who are passionate about building digital products that transform businesses and elevate user experiences.
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
