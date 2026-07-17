"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AWSTraining from "@/components/AWSTraining";

/* ───────────────── NAVBAR ───────────────── */
function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-[#7B5CFF] text-white text-[11px] md:text-xs font-medium text-center py-2 px-4 flex justify-center items-center gap-2">
        <span>New Cohort — Live Online - 22-23 June 2026</span>
        <span className="hidden md:inline text-white/50">•</span>
        <span className="hidden md:inline">
          Early-bird ends in 48 hours ·{" "}
          <span className="font-bold">Only 14 seats left</span>
        </span>
      </div>
      {/* Main Navbar */}
      <div className="w-full bg-[#05070D]/90 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[50px] h-[20px] sm:w-[60px] sm:h-[24px]">
              <Image
                src="/ags_logo.png"
                alt="AGS logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white/80 font-medium text-sm sm:text-base pl-3 border-l border-white/10">
              Academy
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {["Curriculum", "Mentors", "Pricing", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-[13px] font-bold">
              <span className="text-white/40 line-through">₹4,999</span>
              <span className="text-white">₹499</span>
            </div>
            <a
              href="#pricing"
              className="bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-5 py-2.5 text-[13px] font-bold transition-colors inline-flex items-center gap-2"
            >
              Reserve Seat <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
} /* ───────────────── HERO (VIDEO) ───────────────── */
function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#05070D]">
      {" "}
      {/* Video Background */}{" "}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top mix-blend-screen"
        >
          <source
            src="/Academy/Digital_human_head_pulsing_light_202607031539.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start justify-between">
        {" "}
        {/* Left Content */}{" "}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left pt-4 lg:pt-10">
          {" "}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#7B5CFF]/30 bg-[#7B5CFF]/10 text-[10px] font-bold tracking-widest text-[#7B5CFF] uppercase mb-6">
            {" "}
            <div className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]"></div> AGS
            ACADEMY &middot; LIVE COHORT{" "}
          </div>{" "}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] font-bold text-white leading-[1.1] mb-6">
            <span className="block mb-1">Build Real Projects. Learn from Industry Experts.</span>
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#9795FF_0%,#D4B3FF_100%)]">
              Become Job-Ready in AI, UI/UX & Full Stack.
            </span>
          </h1>
          <p className="text-white/70 text-[15px] md:text-[17px] leading-relaxed mb-8 max-w-xl">
            Stop watching endless tutorials. Learn by building <span className="text-white font-bold">real-world projects</span> with live mentorship, <span className="text-white font-bold">industry-focused training</span>, and a portfolio that helps you stand out to recruiters and clients.
          </p>{" "}
          {/* Badges */}{" "}
          <div className="flex flex-wrap gap-3 mb-10">
            {" "}
            <span className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-transparent text-[11px] font-medium text-white/70">
              {" "}
              <svg
                className="text-[#7B5CFF]"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>{" "}
              12 hours - 2 days{" "}
            </span>{" "}
            <span className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-transparent text-[11px] font-medium text-white/70">
              {" "}
              <svg
                className="text-[#7B5CFF]"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>{" "}
              22-23 June 2026{" "}
            </span>{" "}
            <span className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-transparent text-[11px] font-medium text-white/70">
              {" "}
              <svg
                className="text-[#7B5CFF]"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>{" "}
              Live Online{" "}
            </span>{" "}
            <span className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-transparent text-[11px] font-medium text-white/70">
              {" "}
              <svg
                className="text-[#7B5CFF]"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>{" "}
              English + Hindi{" "}
            </span>{" "}
          </div>{" "}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 w-full">
            {" "}
            <a
              href="#pricing"
              className="bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-3.5 text-[15px] font-bold transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(123,92,255,0.4)]"
            >
              {" "}
              Reserve Your Seat <span aria-hidden="true">&rarr;</span>{" "}
            </a>{" "}
            <div className="flex flex-col">
              {" "}
              <div className="text-white font-bold text-lg leading-tight">
                {" "}
                ₹499{" "}
                <span className="text-sm font-normal text-white/60">
                  only
                </span>{" "}
              </div>{" "}
              <div className="text-[11px] font-bold text-[#FF5C77] leading-tight">
                {" "}
                <span className="text-white/40 line-through">₹4,999</span> - 90%
                OFF early-bird{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-center gap-4">
            {" "}
            <div className="flex -space-x-2">
              {" "}
              <div className="w-6 h-6 rounded-full bg-[#343746] border-2 border-[#05070D] flex items-center justify-center text-[8px] font-bold text-white">
                AB
              </div>{" "}
              <div className="w-6 h-6 rounded-full bg-[#343746] border-2 border-[#05070D] flex items-center justify-center text-[8px] font-bold text-white">
                SK
              </div>{" "}
              <div className="w-6 h-6 rounded-full bg-[#343746] border-2 border-[#05070D] flex items-center justify-center text-[8px] font-bold text-white">
                PN
              </div>{" "}
              <div className="w-6 h-6 rounded-full bg-[#343746] border-2 border-[#05070D] flex items-center justify-center text-[8px] font-bold text-white">
                +
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-2">
              {" "}
              <div className="flex gap-0.5 text-[#7B5CFF]">
                {" "}
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {" "}
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />{" "}
                  </svg>
                ))}{" "}
              </div>{" "}
              <span className="text-[11px] text-white/60">
                Joined by <span className="text-white font-bold">5,200+</span>{" "}
                learners
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Right Content / Registration Card */}{" "}
        <div className="w-full lg:w-[45%] lg:pl-10 relative z-20 lg:mt-[92px]">
          {" "}
          <div className="bg-[#05070D]/40 backdrop-blur-3xl border border-white/20 p-8 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full bg-gradient-to-br from-white/10 to-transparent">
            {" "}
            <h3 className="text-white font-bold text-xl mb-2">
              Reserve Your Seat Today
            </h3>{" "}
            <p className="text-white/50 text-xs mb-6">
              Secure your place in our upcoming live cohort and start building real-world projects with expert mentors.
            </p>{" "}
            {/* Timer */}{" "}
            <div className="flex justify-between gap-3 mb-8">
              {" "}
              {[
                { label: "DAYS", value: "01" },
                { label: "HOURS", value: "23" },
                { label: "MINS", value: "59" },
                { label: "SECS", value: "50" },
              ].map((time, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-[#151722] w-[72px] h-[72px] border border-white/5 shadow-inner"
                >
                  {" "}
                  <div className="text-[22px] leading-none font-black text-white mb-1.5">
                    {time.value}
                  </div>{" "}
                  <div className="text-[9px] text-white/50 tracking-wider font-semibold">
                    {time.label}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
            {/* Features */}{" "}
            <ul className="space-y-4 mb-8">
              {" "}
              {[
                "Build 50+ real-world portfolio projects",
                "Live mentor-led classes with doubt-solving",
                "AWS-verified completion certificate",
                "Lifetime access to recordings & community",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  {" "}
                  <span className="text-white text-[14px] font-bold">
                    ✓
                  </span>{" "}
                  <span className="text-white/70 text-[13px]">
                    {feature}
                  </span>{" "}
                </li>
              ))}{" "}
            </ul>{" "}
            <a
              href="#pricing"
              className="block w-full bg-[#7B5CFF] hover:bg-[#6a4cef] text-white text-center py-4 text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.3)] hover:shadow-[0_0_30px_rgba(123,92,255,0.5)] mb-4"
            >
              {" "}
              Reserve Your Seat — ₹499 <span aria-hidden="true">&rarr;</span>{" "}
            </a>{" "}
            <div className="flex items-center justify-center w-full pt-1">
              {" "}
              <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden mr-3 hidden sm:block">
                <div className="w-[86%] h-full bg-gradient-to-r from-[#FF5C77] to-[#FF8A77]"></div>
              </div>
              <span className="text-[11px] font-bold text-[#FF5C77]">
                Only 14 seats left — Early-bird pricing ends soon.
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
} /* ───────────────── PARTNERS / TRUST BAR ───────────────── */
function TechStackBar() {
  const partners = [
    { name: "Molifera media", logo: "/molifera.png", width: 120 },
    { name: "Renuka Eye Institute", logo: "/renuka.png", width: 150 },
    { name: "Himalaya Darpan", logo: "/himalaya.png", width: 120 },
    { name: "Dhunseri", logo: "/dhunseri.png", width: 100 },
  ];
  return (
    <section className="pt-10 pb-6 bg-[#05070D] overflow-hidden">
      <style>{`
        @keyframes scrollPartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-partners {
          animation: scrollPartners 10s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-scroll-partners {
            animation: scrollPartners 30s linear infinite;
          }
        }
        .animate-scroll-partners:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-8">
        <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
          Our Learners &amp; Partners Come From Teams Like
        </h3>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Fading Edges Removed */}

        <div className="flex w-[200%] animate-scroll-partners">
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex-1 flex justify-center px-4 md:px-8 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="relative h-8 md:h-12 w-24 md:w-32 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} /* ───────────────── STATS ───────────────── */
function Stats() {
  const stats = [
    { value: "12", label: "Hours of live build-along sessions" },
    { value: "8+", label: "Production projects you ship" },
    { value: "100%", label: "Hands-on \u2014 zero passive lectures" },
    { value: "5.2k", label: "Learners trained by AGS" },
  ];
  return (
    <section className="pb-16 md:pb-24 bg-[#05070D]">
      {" "}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {" "}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {" "}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#161029] border border-white/5 p-6 md:p-8 flex flex-col items-center justify-center text-center hover:border-white/10 transition-colors"
            >
              {" "}
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7B5CFF] mb-2">
                {stat.value}
              </div>{" "}
              <div className="text-[11px] md:text-xs text-white/50 font-medium leading-snug max-w-[160px]">
                {" "}
                {stat.label}{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

/* ───────────────── INDUSTRY PROGRAMS ───────────────── */
function IndustryPrograms() {
  const programs = [
    {
      title: "AI Engineering",
      image: "/Academy/img2.png",
      topics: "Python • Machine Learning • Generative AI • LLMs",
      desc: "Learn how to build real AI applications using Python, Machine Learning, Large Language Models (LLMs), Prompt Engineering, AI Agents, RAG, and cloud deployment. Gain hands-on experience by creating portfolio-ready projects with modern AI tools used across the industry.",
      cta: "Explore AI Curriculum →"
    },
    {
      title: "UI/UX Design",
      image: "/Academy/img3.png",
      topics: "Figma • UX Research • Wireframing • Prototyping",
      desc: "Master the complete product design process—from user research and wireframing to high-fidelity UI design and interactive prototyping. Build portfolio-ready web and mobile app designs while learning industry-standard tools and design systems.",
      cta: "Explore UI/UX Curriculum →"
    },
    {
      title: "Full Stack Development",
      image: "/Academy/img1.png",
      topics: "React • Node.js • MongoDB • REST APIs",
      desc: "Build modern, scalable web applications from frontend to backend using HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git, APIs, and cloud deployment. Create real-world projects that strengthen your portfolio and prepare you for industry roles.",
      cta: "Explore Full Stack Curriculum →"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight xl:whitespace-nowrap">
            Choose the Right <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#9795FF_0%,#D4B3FF_100%)]">Tech Career</span> for Your Future
          </h2>
          <p className="text-white/70 max-w-5xl text-base md:text-lg">
            Whether you want to become an AI Engineer, UI/UX Designer, or Full Stack Developer, our live cohort programs combine expert mentorship, hands-on projects, and real-world learning to help you build practical skills, create an impressive portfolio, and become industry-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-[#161029] border border-white/5 flex flex-col hover:border-white/10 transition-colors h-full">
              <div className="w-full relative">
                <img src={prog.image} alt={prog.title} className="w-full h-auto object-cover" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h4 className="text-white font-bold text-[17px] md:text-[19px] mb-2">{prog.title}</h4>
                <div className="text-[#7B5CFF] text-[12px] md:text-[13px] font-semibold mb-3 leading-relaxed">
                  {prog.topics}
                </div>
                <p className="text-white/50 text-[13px] md:text-sm leading-relaxed mb-6">
                  {prog.desc}
                </p>
                <div className="mt-auto text-[#7B5CFF] font-bold text-[13px] hover:text-[#9D7AFF] transition-colors cursor-pointer w-fit flex items-center gap-1">
                  {prog.cta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 

/* ───────────────── WHY AGS ACADEMY ───────────────── */
function WhyAgsAcademy() {
  const reasons = [
    { title: "Learn by Building", desc: "Work on practical, real-world projects that help you apply your knowledge and build a portfolio employers value." },
    { title: "Live Industry Mentorship", desc: "Learn directly from experienced professionals who bring real industry insights, best practices, and practical guidance to every session." },
    { title: "Career-Focused Curriculum", desc: "Our curriculum is designed around the latest industry trends, helping you develop skills that are relevant, practical, and job-ready." },
    { title: "Portfolio-Ready Projects", desc: "Graduate with projects that showcase your abilities and strengthen your portfolio for internships, freelance work, and full-time opportunities." },
    { title: "Industry-Recognized Certification", desc: "Earn a certificate that validates your learning and demonstrates your commitment to continuous professional development." },
    { title: "Learning Community & Support", desc: "Join a growing community of learners, mentors, and professionals where you can collaborate, ask questions, and continue learning beyond the classroom." }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0A0D18]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center md:text-left">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">
            WHY AGS ACADEMY
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            More Than a Course. A <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#9795FF_0%,#D4B3FF_100%)]">Career Launchpad</span>.
          </h2>
          <p className="text-white/70 max-w-3xl text-base md:text-lg mx-auto md:mx-0">
            At AGS Academy, you don't just learn concepts—you build real-world skills through live mentorship, hands-on projects, and industry-focused training designed to help you become career-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-[#161029] border border-white/5 p-6 hover:border-white/10 transition-colors">
              <h4 className="text-white font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-white/50 text-[13px] md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#7B5CFF]/10 border border-[#7B5CFF]/20 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6 lg:mb-0">
            <span className="text-2xl">🎯</span>
            <span className="text-white font-bold text-[15px] md:text-lg">Learn. Build. Showcase. Get Career-Ready.</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <h4 className="text-white font-bold text-[15px] sm:mb-0">Start Building Your Future Today</h4>
            <a href="#pricing" className="w-full sm:w-auto bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-3.5 text-center text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.3)]">
              Reserve Your Seat — ₹499
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CURRICULUM (LEARNING ROADMAP) ───────────────── */
function CurriculumTabs() {
  const [activeTab, setActiveTab] = useState("AI");

  const curriculums = {
    AI: {
      badge: "AI Engineering",
      title: "Become an AI Engineer by Building Real-World Applications",
      desc: "Master the complete AI development workflow—from Python fundamentals to deploying intelligent AI applications. Learn by building real projects using today's most in-demand technologies, including Large Language Models, Prompt Engineering, AI Agents, Retrieval-Augmented Generation (RAG), and cloud deployment.",
      modules: [
        { num: "01", title: "Foundations of GenAI & LLMs", desc: "How modern models actually work — tokens, embeddings, context windows — and how to think like an AI engineer instead of a prompt tinkerer." },
        { num: "02", title: "API Integration & Prompt Systems", desc: "Wire up the Anthropic & OpenAI APIs, design reliable prompt pipelines, structure JSON outputs, and handle streaming responses in real apps." },
        { num: "03", title: "RAG: Chat With Your Data", desc: "Build a retrieval-augmented chatbot over your own documents using vector databases, chunking strategies, and grounded answers." },
        { num: "04", title: "Building Autonomous AI Agents", desc: "Give models tools, memory, and the ability to act. Design multi-step agents that plan, call functions, and complete real tasks end-to-end." },
        { num: "05", title: "Deploy & Scale on AWS", desc: "Ship your agent to production with AWS Bedrock & serverless infrastructure — the exact stack AGS uses for client builds." },
        { num: "06", title: "Capstone: Your AI Product", desc: "Combine everything into one portfolio-grade product, get live feedback from mentors, and learn how to take it to market." },
      ]
    },
    FS: {
      badge: "Full Stack Development",
      title: "Build Modern Web Applications from Frontend to Deployment",
      desc: "Master both frontend and backend development by building scalable web applications with today's most popular technologies. Learn the complete development workflow—from designing interfaces to deploying production-ready applications.",
      modules: [
        { num: "01", title: "Frontend Fundamentals", desc: "Build responsive websites using HTML, CSS, Bootstrap, and modern layout techniques." },
        { num: "02", title: "JavaScript Essentials", desc: "Master JavaScript fundamentals, DOM manipulation, ES6+, and asynchronous programming." },
        { num: "03", title: "React Development", desc: "Build fast, interactive user interfaces using React, Hooks, Routing, and State Management." },
        { num: "04", title: "Backend Development", desc: "Develop secure backend applications using Node.js, Express.js, REST APIs, and authentication." },
        { num: "05", title: "Database Management", desc: "Store, retrieve, and manage application data using MongoDB and Mongoose." },
        { num: "06", title: "Deployment & Git", desc: "Deploy full-stack applications, manage projects with GitHub, and follow modern development workflows." },
      ]
    },
    UIUX: {
      badge: "UI / UX Design",
      title: "Design Digital Experiences That Users Love",
      desc: "Learn the complete product design process—from understanding user behavior to designing beautiful, user-friendly digital experiences. Build portfolio-ready projects using industry-standard tools, design systems, and real-world workflows.",
      modules: [
        { num: "01", title: "UX Fundamentals & Design Thinking", desc: "Learn user-centered design principles and solve real problems through structured design thinking." },
        { num: "02", title: "User Research & Information Architecture", desc: "Understand user behavior, create personas, map user journeys, and organize content for better experiences." },
        { num: "03", title: "Wireframing & User Flows", desc: "Plan intuitive user journeys and transform ideas into structured wireframes." },
        { num: "04", title: "UI Design with Figma", desc: "Design modern, responsive web and mobile interfaces using components, Auto Layout, and design systems." },
        { num: "05", title: "Interactive Prototyping & Testing", desc: "Create clickable prototypes, conduct usability testing, and improve designs based on user feedback." },
        { num: "06", title: "Portfolio & Case Study Creation", desc: "Build professional case studies and a portfolio that showcases your design process and creativity." },
      ]
    }
  };

  const current = curriculums[activeTab];

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">
            CURRICULUM
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
            Learning <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#9795FF_0%,#D4B3FF_100%)]">Roadmap</span>
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {[
              { id: "AI", label: "AI ENGINEERING" },
              { id: "FS", label: "FULL STACK DEVELOPMENT" },
              { id: "UIUX", label: "UI / UX DESIGN" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-[13px] font-bold transition-all border ${
                  activeTab === tab.id 
                    ? "bg-[#7B5CFF] text-white border-[#7B5CFF] shadow-[0_0_15px_rgba(123,92,255,0.4)]" 
                    : "bg-[#161029] text-white/50 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12 max-w-4xl mx-auto text-center border border-white/10 bg-[#161029] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9795FF] to-[#D4B3FF]"></div>
          <div className="inline-block border border-white/10 rounded-full px-4 py-1.5 bg-white/5 text-white/70 text-[11px] font-bold tracking-widest uppercase mb-6">
            {current.badge}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
            {current.title}
          </h3>
          <p className="text-white/60 text-[14px] md:text-base leading-relaxed max-w-3xl mx-auto">
            {current.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {current.modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-[#161029] border border-white/5 p-6 md:p-8 hover:border-white/10 transition-colors group hover:shadow-[0_0_30px_rgba(123,92,255,0.05)]"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] md:text-[13px] font-bold text-[#7B5CFF] tracking-widest bg-[#7B5CFF]/10 px-3 py-1 border border-[#7B5CFF]/20">
                  MODULE {mod.num}
                </span>
              </div>
              <h4 className="text-white font-bold text-[17px] md:text-[19px] mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#D4B3FF] transition-all">
                {mod.title}
              </h4>
              <p className="text-white/50 text-[13px] md:text-sm leading-relaxed">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PORTFOLIO PROJECTS ───────────────── */
function PortfolioProjects() {
  const tracks = [
    {
      title: "AI Engineering",
      projects: ["AI Chatbot", "AI Agent", "AI Resume Analyzer", "RAG Application"]
    },
    {
      title: "UI/UX Design",
      projects: ["Mobile App UI", "SaaS Dashboard", "E-commerce Website", "Interactive Prototype"]
    },
    {
      title: "Full Stack Development",
      projects: ["Portfolio Website", "E-commerce Platform", "Admin Dashboard", "REST API Project"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0A0D18]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">
            PORTFOLIO PROJECTS
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Build a Portfolio That <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#9795FF_0%,#D4B3FF_100%)]">Gets You Hired</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Real-world projects that showcase your skills and help you stand out to recruiters, clients, and hiring managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tracks.map((track, idx) => (
            <div key={idx} className="bg-[#161029] border border-white/5 p-8 flex flex-col hover:border-white/10 transition-colors">
              <h4 className="text-white font-bold text-xl mb-6 pb-4 border-b border-white/5">{track.title}</h4>
              <h5 className="text-white/50 text-xs font-bold uppercase tracking-wider mb-4">Projects You'll Build</h5>
              <ul className="space-y-4">
                {track.projects.map((project, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-3">
                    <span className="text-[#0f5132] bg-[#75b798] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="text-white/80 text-[14px] font-medium">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <h4 className="text-white font-bold text-xl mb-6">Ready to turn your skills into a portfolio?</h4>
          <a href="#pricing" className="w-full sm:w-auto bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-10 py-4 text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.3)] hover:shadow-[0_0_30px_rgba(123,92,255,0.5)]">
            Reserve Your Seat — ₹499
          </a>
        </div>
      </div>
    </section>
  );
} 

/* ───────────────── TARGET AUDIENCE ───────────────── */
function TargetAudience() {
  const audiences = [
    {
      title: "Students",
      desc: "Start your tech career with structured learning, live mentorship, and hands-on projects designed for beginners.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
    {
      title: "Working Professionals",
      desc: "Upgrade your skills, stay relevant, and transition into high-demand tech roles with industry-focused training.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: "Career Switchers",
      desc: "Move into AI, UI/UX, or Full Stack Development with a step-by-step learning path and portfolio-ready projects.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
    },
    {
      title: "Freelancers & Creators",
      desc: "Build in-demand skills that help you work with clients, create digital products, and grow your freelance career.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v18z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">
            IS THIS PROGRAM RIGHT FOR YOU?
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#9795FF_0%,#D4B3FF_100%)]">Yes—</span>If You Want to Build a Career in Tech
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className="bg-[#161029] border border-white/5 p-6 md:p-8 flex flex-col hover:border-white/10 transition-colors"
            >
              <div className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center text-[#7B5CFF] mb-6">
                {aud.icon}
              </div>
              <h4 className="text-white font-bold text-[17px] mb-3">
                {aud.title}
              </h4>
              <p className="text-white/50 text-[13px] leading-relaxed">
                {aud.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ───────────────── MENTORS ───────────────── */
function MentorsSection() {
  const mentors = [
    {
      name: "Ankit Bhadra",
      image: "/Academy/ankit bhadra.png",
      tag: "Mentor",
      roles: ["Pre-Sales Cloud Solution Architect", "Cloud Consultant"],
      desc: "7+ years of experience as a Technical SPOC and Cloud consultant. Currently a Pre-Sales Cloud Solution Architect with expertise in AWS, Microsoft Azure, and Google Cloud Platform (GCP). He helps organizations accelerate digital transformation by designing optimized cloud solutions, architectures, and AI/ML ecosystems.",
      badges: [
        { label: "AWS", icon: "cloud" },
        { label: "GCP", icon: "cloud" },
        { label: "AI/ML", icon: "chip" },
        { label: "Azure", icon: "cloud" }
      ]
    },
    {
      name: "Aritra Sen",
      image: "/Academy/aritra sen.png",
      tag: "Mentor",
      roles: ["Sales & Business Development Expert"],
      desc: "16 years of work experience in Sales & Business Development. His expertise in technology sales with a strong consultancy expertise in AI, data engineering, cloud native and various digital engineering solutions.",
      badges: [
        { label: "AI", icon: "chip" },
        { label: "Data Engineering", icon: "chip" },
        { label: "Cloud Native", icon: "cloud" }
      ]
    },
    {
      name: "Atish Roy",
      image: "/Academy/atish roy.png",
      tag: "Mentor",
      roleColor: "text-[#FF4D6D]",
      roleIcon: "cursor",
      roles: ["Mentor For Advanced UI, UX"],
      desc: "Expert in advanced interface design and user experience strategies for complex digital products.",
      badges: [
        { label: "Advanced UI", icon: "layout" },
        { label: "UX Strategy", icon: "chart" }
      ]
    },
    {
      name: "Sayan Bhattacharjee",
      image: "/Academy/Sayan bhattacharjee (1).png",
      tag: "Mentor",
      roleColor: "text-[#FF4D6D]",
      roleIcon: "gradCap",
      roles: ["Mentor For Basic Course UI, UX"],
      desc: "Specializes in foundational design principles and introducing students to the world of UI/UX.",
      badges: [
        { label: "UI Basics", icon: "layers" },
        { label: "Design Thinking", icon: "penTool" }
      ]
    }
  ];

  const IconMap = {
    cloud: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    chip: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
    layout: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9h18M9 21V9" />
      </svg>
    ),
    chart: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
      </svg>
    ),
    cursor: (
      <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      </svg>
    ),
    gradCap: (
      <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4L3 9l9 5 9-5-9-5zM3 14v4c0 2.2 4 4 9 4s9-1.8 9-4v-4" />
      </svg>
    ),
    layers: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="2 12 12 17 22 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="2 17 12 22 22 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    penTool: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 3.5a2.121 2.121 0 0 1 3 3L7 17.5 3 18l.5-4 12-12.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 6.5l4 4" />
      </svg>
    )
  };

  return (
    <section id="mentors" className="py-24 bg-[#05070D] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <h4 className="text-[#7B5CFF] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            MEET YOUR MENTORS
          </h4>
          <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem] mb-6">
            Learn from industry experts who <br className="hidden md:block" />
            ship real solutions.
          </h2>
          <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed max-w-2xl">
            Our mentors bring years of real-world experience in cloud, AI, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 auto-rows-fr">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row w-full h-full bg-[#13111C] border border-white/5 overflow-hidden">
              <div className="w-full sm:w-[40%] bg-[#888A96] relative min-h-[250px] sm:min-h-[300px] flex-shrink-0">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="absolute inset-0 w-full h-full object-cover object-top" 
                />
              </div>
              <div className="w-full sm:w-[60%] p-6 lg:p-8 flex flex-col">
                <div className="flex flex-row items-center flex-wrap gap-2 mb-2">
                  <h3 className="text-lg lg:text-[22px] font-bold text-white tracking-tight leading-none">{mentor.name}</h3>
                  <span className="px-2 py-0.5 border border-[#7B5CFF]/40 text-[#BE9FFF] text-[9px] uppercase tracking-widest bg-[#7B5CFF]/10 shrink-0">
                    {mentor.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  {mentor.roles.map((role, i) => (
                    <div key={i} className={`font-bold text-[12px] lg:text-[13px] flex items-center leading-snug ${mentor.roleColor || (i === 0 ? 'text-[#9D7AFF]' : 'text-white')}`}>
                      {i === 0 && mentor.roleIcon && IconMap[mentor.roleIcon]}
                      {role}
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-[12px] leading-relaxed mb-6">
                  {mentor.desc}
                </p>
                <div className="mt-auto flex flex-col justify-end">
                  {mentor.badges && mentor.badges.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {mentor.badges.map((badge, i) => (
                        <div key={i} className="flex items-center px-2 py-1 border border-[#7B5CFF]/30 text-[#BE9FFF] text-[10px] bg-transparent">
                          {IconMap[badge.icon]}
                          {badge.label}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mb-5 h-[24px]"></div>
                  )}
                  <a href="#" className={`hover:text-[#BE9FFF] transition-colors text-[12px] font-bold flex items-center gap-1.5 w-fit ${mentor.roleColor || 'text-[#9D7AFF]'}`}>
                    View Profile <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} /* ───────────────── BONUSES ───────────────── */
function Bonuses() {
  const bonuses = [
    {
      title: "AI & Developer Starter Kit",
      desc: "Ready-to-use prompts, project templates, deployment resources, and developer tools to help you build faster.",
      value: "Value: ₹6,000",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      title: "1:1 Portfolio Review",
      desc: "Receive personalized feedback from an industry mentor to improve your portfolio before applying for jobs.",
      value: "Value: ₹5,000",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
    },
    {
      title: "Lifetime Community Access",
      desc: "Get lifetime access to mentors, job updates, networking opportunities, exclusive sessions, and a supportive learner community.",
      value: "Value: ₹7,000",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Resume & LinkedIn Toolkit",
      desc: "ATS-friendly resume templates, LinkedIn optimization guide, and interview preparation resources.",
      value: "Value: ₹3,000",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">
            ENROLLMENT BONUSES
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Enroll Today & Unlock <span className="text-[#FF5C77]">₹21,000+</span> in Exclusive Bonuses
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-[#161029] border border-white/5 p-6 md:p-8 hover:border-white/10 transition-colors flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center text-[#7B5CFF]">
                  {bonus.icon}
                </div>
                <div className="text-[#FF5C77] text-[13px] font-bold">
                  {bonus.value}
                </div>
              </div>
              <h4 className="text-white font-bold text-[16px] mb-3">
                {bonus.title}
              </h4>
              <p className="text-white/50 text-[13px] leading-relaxed">
                {bonus.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto bg-[#161029] border border-white/5 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5C77] to-[#7B5CFF]"></div>
          <h4 className="text-white font-bold text-xl md:text-2xl mb-4 leading-snug">
            Everything you need to learn, build, and launch your tech career—all included at no extra cost.
          </h4>
          <a href="#pricing" className="mt-6 w-full sm:w-auto bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-10 py-4 text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.3)] hover:shadow-[0_0_30px_rgba(123,92,255,0.5)]">
            Unlock All Bonuses Today
          </a>
        </div>
      </div>
    </section>
  );
} /* ───────────────── TESTIMONIALS ───────────────── */
function Testimonials() {
  const testimonials = [
    {
      name: "Aman Kumar Singh,",
      role: "B.Tech (Computer Science)",
      review:
        "Before joining this program, I had only theoretical knowledge of Machine Learning. The hands-on projects and AWS deployment experience helped me understand how AI solutions are built in the industry...",
      initial: "AS",
    },
    {
      name: "Sutirtha Chatterjee,",
      role: "B.Tech (IT)",
      review:
        "What makes this program different is its focus on real implementation. From data preprocessing to model deployment, every stage was covered through practical exercises...",
      initial: "SC",
    },
    {
      name: "Priyanjali Bose,",
      role: "MCA Student, Final year",
      review:
        "What makes this program different is its focus on real implementation. From data preprocessing to model deployment, every stage was covered through practical exercises...",
      initial: "PB",
    },
    {
      name: "Arindam Sengupta,",
      role: "Computer Science Graduate",
      review:
        "I was looking for a program that could help me transition into the AI/ML domain. The curriculum, mentor guidance, and cloud-based projects on AWS gave me industry-relevant skills...",
      initial: "AS",
    },
    {
      name: "Ankit Bhadra,",
      role: "Cloud Solution Architect",
      review:
        "This program provided practical industry-focused learning. The hands-on projects, cloud architecture sessions, and expert guidance helped me understand real-world implementation.",
      initial: "AB",
    },
    {
      name: "Aritra Sen,",
      role: "AI & Data Engineering Consultant",
      review:
        "The best part of this program is its focus on real-world applications. From data preprocessing to deployment, every module is designed to give you practical exposure...",
      initial: "AS",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-[#05070D]">
      {" "}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {" "}
        <div className="mb-12 text-left">
          {" "}
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">
            {" "}
            LOVED BY LEARNERS{" "}
          </h3>{" "}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {" "}
            Real people. Real builds.{" "}
          </h2>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {" "}
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-[#161029] border border-white/5 p-8 flex flex-col hover:border-white/10 transition-colors"
            >
              {" "}
              <div className="flex gap-1 text-[#7B5CFF] mb-6">
                {" "}
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {" "}
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />{" "}
                  </svg>
                ))}{" "}
              </div>{" "}
              <p className="text-white/60 text-[13px] leading-relaxed mb-8 flex-grow">
                {" "}
                &quot;{test.review}&quot;{" "}
              </p>{" "}
              <div className="flex items-center gap-4 mt-auto">
                {" "}
                <div
                  className={`w-9 h-9 rounded-full bg-[#252836] flex items-center justify-center text-white/70 font-bold text-xs shrink-0`}
                >
                  {" "}
                  {test.initial}{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="text-white font-bold text-[13px]">
                    {test.name}
                  </h4>{" "}
                  <p className="text-white/40 text-[12px]">{test.role}</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
} /* ───────────────── PRICING ───────────────── */
function Pricing() {
  const features = [
    "12 hours of live, hands-on AI engineering",
    "8+ build-along projects you keep forever",
    "AWS-verified completion certificate",
    "₹18,000+ in enrolment bonuses",
    "Lifetime recordings & alumni community",
  ];
  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#070913]">
      {" "}
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        {" "}
        <div className="text-center mb-8">
          {" "}
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase mb-4">
            {" "}
            SIMPLE PRICING{" "}
          </h3>{" "}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {" "}
            Reserve your seat today{" "}
          </h2>{" "}
        </div>{" "}
        <div className="bg-[#161029] border border-white/5 p-8 md:p-12 relative max-w-2xl mx-auto flex flex-col">
          {" "}
          <div className="inline-block px-3 py-1.5 rounded-full bg-[#FF5C77] text-white text-[10px] font-bold uppercase tracking-wider mb-6 w-max">
            {" "}
            EARLY-BIRD - 90% OFF{" "}
          </div>{" "}
          <div className="flex items-end gap-3 mb-2">
            {" "}
            <span className="text-5xl md:text-7xl font-bold text-white leading-none">
              ₹499
            </span>{" "}
            <span className="text-xl md:text-2xl text-white/40 line-through mb-1">
              ₹4,999
            </span>{" "}
          </div>{" "}
          <p className="text-[#FF5C77] text-sm md:text-[15px] font-bold mb-10">
            {" "}
            You save ₹4,500 — offer ends when the timer hits zero.{" "}
          </p>{" "}
          <div className="w-full mb-10">
            {" "}
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 py-3">
                {" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7B5CFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                >
                  {" "}
                  <polyline points="20 6 9 17 4 12"></polyline>{" "}
                </svg>{" "}
                <span className="text-white/80 text-[14px] md:text-[15px]">
                  {feature}
                </span>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <a
            href="#"
            className="flex w-full items-center justify-center gap-2 bg-[#7B5CFF] hover:bg-[#6a4cef] text-white py-4 text-[16px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.3)] hover:shadow-[0_0_30px_rgba(123,92,255,0.5)] mb-6"
          >
            {" "}
            Enroll Now — ₹499 <span aria-hidden="true">&rarr;</span>{" "}
          </a>{" "}
          <p className="text-white/40 text-[11px] md:text-xs text-center leading-relaxed">
            {" "}
            Secure checkout - 100% money-back if you attend day 1 and don&apos;t
            love it.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
} /* ───────────────── FAQ ───────────────── */
function FAQ() {
  const faqs = [
    {
      question: "Do I need any prior experience?",
      answer: "No. Our programs are designed for beginners as well as learners with some experience. We start with the fundamentals and gradually move to advanced concepts through practical projects."
    },
    {
      question: "Are the classes live or recorded?",
      answer: "Live sessions are conducted by industry mentors. Session recordings are also provided so you can revisit lessons anytime."
    },
    {
      question: "Which course should I choose?",
      answer: "Choose AI Engineering if you're interested in artificial intelligence, UI/UX Design if you enjoy creating digital experiences, or Full Stack Development if you want to build complete web applications."
    },
    {
      question: "Will I build real projects?",
      answer: "Yes. Every program includes hands-on projects that help you build a professional portfolio showcasing your practical skills."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes. After successfully completing the program, you'll receive a certificate of completion from AGS Academy."
    },
    {
      question: "Is there placement assistance?",
      answer: "We provide career guidance, portfolio reviews, resume support, and interview preparation to help you confidently apply for opportunities."
    },
    {
      question: "How long will I have access to the course?",
      answer: "You'll receive access according to your enrollment plan, including recordings and community support where applicable."
    },
    {
      question: "What do I need to get started?",
      answer: "A laptop, a stable internet connection, and the willingness to learn. We'll guide you through everything else."
    }
  ];
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">
            QUESTIONS
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you might ask
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/5 bg-[#161029]">
              <button
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="text-white font-bold text-[14px] md:text-[15px] pr-8">
                  {faq.question}
                </span>
                <span className="text-[#7B5CFF] shrink-0 transition-transform duration-300 text-xl font-medium">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-40 pb-6 px-6 opacity-100" : "max-h-0 opacity-0 px-6"}`}
              >
                <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── STILL HAVE QUESTIONS ───────────────── */
function StillHaveQuestions() {
  return (
    <section className="py-16 md:py-24 bg-[#0A0D18] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Still Have <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#9795FF_0%,#D4B3FF_100%)]">Questions?</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Our team is here to help you choose the right program and answer any questions before you enroll.
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-4 text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.4)] hover:shadow-[0_0_30px_rgba(123,92,255,0.6)]"
          >
            Talk to an Advisor
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── FOOTER (WITH CTA) ───────────────── */
function Footer() {
  return (
    <footer className="bg-[#0A0C16]">
      {" "}
      {/* Final CTA Section */}{" "}
      <div className="py-20 md:py-32 border-b border-white/5 relative">
        {" "}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7B5CFF]/10 blur-[100px] pointer-events-none"></div>{" "}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          {" "}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.2]">
            {" "}
            Stop reading about AI. <br />{" "}
            <span className="text-[#7B5CFF]">Start building it.</span>{" "}
          </h2>{" "}
          <p className="text-white/70 text-[15px] md:text-[17px] max-w-2xl mx-auto mb-10 leading-relaxed">
            {" "}
            Join the next AGS Academy cohort and gain the practical AI &amp;
            Machine Learning experience that employers actually look for.{" "}
          </p>{" "}
          <div className="flex flex-col items-center justify-center">
            {" "}
            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-4 text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.4)] hover:shadow-[0_0_30px_rgba(123,92,255,0.6)] mb-4"
            >
              {" "}
              Reserve Your Seat Now →{" "}
            </a>{" "}
            <p className="text-[#FF5C77] text-[12px] font-bold">
              {" "}
              Only 14 of 100 seats left for the 22-23 June cohort{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Main Footer Links */}{" "}
      <div className="hidden md:block max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {" "}
          <div className="md:col-span-12 lg:col-span-5">
            {" "}
            <Link href="/" className="inline-block mb-6">
              {" "}
              <h3 className="text-white font-bold text-xl tracking-tight">
                {" "}
                <span className="text-[#7B5CFF]">AGS</span> Academy{" "}
              </h3>{" "}
            </Link>{" "}
            <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed max-w-sm">
              {" "}
              Practical AI &amp; Machine Learning training built around real
              projects, live cloud deployments, and industry mentorship. Build a
              portfolio employers can actually evaluate.{" "}
            </p>{" "}
          </div>{" "}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-7">
            {" "}
            <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">
              PROGRAM
            </h4>{" "}
            <ul className="space-y-4">
              {" "}
              {["Curriculum", "Outcomes", "Mentors", "Pricing"].map(
                (link, idx) => (
                  <li key={idx}>
                    {" "}
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-white/50 hover:text-white text-[13px] md:text-[14px] transition-colors"
                    >
                      {link}
                    </Link>{" "}
                  </li>
                ),
              )}{" "}
            </ul>{" "}
          </div>{" "}
          <div className="md:col-span-4 lg:col-span-2">
            {" "}
            <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">
              RESOURCES
            </h4>{" "}
            <ul className="space-y-4">
              {" "}
              {["Student Stories", "Project Gallery", "Blog", "FAQ"].map(
                (link, idx) => (
                  <li key={idx}>
                    {" "}
                    <Link
                      href="#"
                      className="text-white/50 hover:text-white text-[13px] md:text-[14px] transition-colors"
                    >
                      {link}
                    </Link>{" "}
                  </li>
                ),
              )}{" "}
            </ul>{" "}
          </div>{" "}
          <div className="md:col-span-4 lg:col-span-2">
            {" "}
            <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">
              CONTACT
            </h4>{" "}
            <ul className="space-y-4">
              {" "}
              {[
                "hello@agsacademy.in",
                "WhatsApp Us",
                "Instagram",
                "LinkedIn",
              ].map((link, idx) => (
                <li key={idx}>
                  {" "}
                  <Link
                    href="#"
                    className="text-white/50 hover:text-white text-[13px] md:text-[14px] transition-colors"
                  >
                    {link}
                  </Link>{" "}
                </li>
              ))}{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          {" "}
          <p className="text-white/40 text-[12px] md:text-[13px]">
            {" "}
            © {new Date().getFullYear()} AGS Academy. All rights reserved.{" "}
          </p>{" "}
          <div className="flex gap-4 md:gap-6 text-white/40 text-[12px] md:text-[13px]">
            {" "}
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>{" "}
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>{" "}
            <a href="#" className="hover:text-white transition-colors">
              Twitter / X
            </a>{" "}
            <a href="#" className="hover:text-white transition-colors">
              YouTube
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="block md:hidden max-w-7xl mx-auto px-6 py-12">
        {" "}
        <div className="flex flex-col">
          {" "}
          <div className="flex items-center gap-2 mb-2">
            {" "}
            <div className="relative w-[60px] h-[24px]">
              {" "}
              <Image
                src="/ags_logo.png"
                alt="AGS logo"
                fill
                className="object-contain"
              />{" "}
            </div>{" "}
            <span className="text-white/70 font-light text-[17px]">
              Academy
            </span>{" "}
          </div>{" "}
          <p className="text-[#646A85] text-[13px] mb-8">
            Build real AI. Ship real products.
          </p>{" "}
          <div className="flex gap-4 mb-10">
            {" "}
            {["X", "in", "fb", "ig"].map((icon) => (
              <a
                href="#"
                key={icon}
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#7B5CFF]/20 bg-[#7B5CFF]/5 text-white hover:bg-[#7B5CFF]/10 transition"
              >
                {" "}
                {icon === "X" ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                ) : null}{" "}
                {icon === "in" ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                ) : null}{" "}
                {icon === "fb" ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ) : null}{" "}
                {icon === "ig" ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                ) : null}{" "}
              </a>
            ))}{" "}
          </div>{" "}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-white font-bold text-[13px] tracking-widest uppercase mb-5">
                COURSES
              </h4>{" "}
              <ul className="space-y-4">
                {" "}
                {[
                  "AI Engineer Bootcamp",
                  "GenAI for Product Teams",
                  "AWS AI Certification",
                  "All Programs",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#646A85] hover:text-white text-[14px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
            <div>
              {" "}
              <h4 className="text-white font-bold text-[13px] tracking-widest uppercase mb-5">
                GET IN TOUCH
              </h4>{" "}
              <ul className="space-y-4">
                {" "}
                {[
                  "Contact Us",
                  "Refund Policy",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#646A85] hover:text-white text-[14px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="border-t border-white/5 pt-8 text-center">
            {" "}
            <p className="text-[#646A85] text-[12px]">
              © 2025 AGS Academy · All rights reserved
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
} /* ───────────────── PAGE EXPORT ───────────────── */
export default function AcademyV2Page() {
  return (
    <main className="bg-[#05070D] min-h-screen text-white font-sans antialiased selection:bg-[#7B5CFF]/30 selection:text-white">
      {" "}
      <Navbar /> <Hero /> <TechStackBar /> <Stats /> <IndustryPrograms /> <WhyAgsAcademy /> <CurriculumTabs /> <PortfolioProjects />{" "}
      <TargetAudience /> <AWSTraining /> <MentorsSection /> <Bonuses />{" "}
      <Testimonials /> <Pricing /> <FAQ /> <StillHaveQuestions /> <Footer />{" "}
    </main>
  );
}
