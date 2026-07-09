"use client"; import { useState } from"react";
import Link from"next/link";
import Image from"next/image"; /* ───────────────── NAVBAR ───────────────── */
function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-[#7B5CFF] text-white text-[11px] md:text-xs font-medium text-center py-2 px-4 flex justify-center items-center gap-2">
        <span>New Cohort — Live Online - 22-23 June 2026</span>
        <span className="hidden md:inline text-white/50">•</span>
        <span className="hidden md:inline">Early-bird ends in 48 hours · <span className="font-bold">Only 14 seats left</span></span>
      </div>
      {/* Main Navbar */}
      <div className="w-full bg-[#05070D]/90 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[50px] h-[20px] sm:w-[60px] sm:h-[24px]">
              <Image src="/ags_logo.png" alt="AGS logo" fill className="object-contain" priority />
            </div>
            <span className="text-white/80 font-medium text-sm sm:text-base pl-3 border-l border-white/10">
              Academy
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {["Curriculum","Mentors","Pricing","FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-[13px] font-bold">
              <span className="text-white/40 line-through">₹4,999</span>
              <span className="text-white">₹499</span>
            </div>
            <a href="#pricing" className="bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-5 py-2.5 text-[13px] font-bold transition-colors inline-flex items-center gap-2">
              Reserve Seat <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
} /* ───────────────── HERO (VIDEO) ───────────────── */
function Hero() { return ( <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-[#05070D]"> {/* Video Background */} <div className="absolute inset-0 z-0"> <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-top opacity-50 mix-blend-screen" > <source src="/Academy/Digital_human_head_pulsing_light_202607031539.mp4" type="video/mp4" /> </video> <div className="absolute inset-0 bg-gradient-to-r from-[#05070D] via-[#05070D]/80 to-[#05070D]/40 pointer-events-none" /> </div> <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-center justify-between"> {/* Left Content */} <div className="w-full lg:w-1/2 flex flex-col items-start text-left pt-4 lg:pt-10"> <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#7B5CFF]/30 bg-[#7B5CFF]/10 text-[10px] font-bold tracking-widest text-[#7B5CFF] uppercase mb-6"> <div className="w-1.5 h-1.5 rounded-full bg-[#7B5CFF]"></div> AGS ACADEMY &middot; LIVE COHORT </div> <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] mb-6"> Become an <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B5CFF] to-[#FF5C77]"> AI Engineer </span>{""} in 12 <br className="hidden md:block" /> Hours </h1> <p className="text-white/70 text-[15px] md:text-[17px] leading-relaxed mb-8 max-w-xl"> A hands-on, build-first mastermind. Go from <span className="text-white font-bold">API integration</span> to shipping your own <span className="text-white font-bold">production-ready GenAI agents</span> on AWS — guided live by the team behind AGS. </p> {/* Badges */} <div className="flex flex-wrap gap-3 mb-10"> <span className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 text-[11px] font-medium text-white/80"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 12 hours - 2 days </span> <span className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 text-[11px] font-medium text-white/80"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> 22-23 June 2026 </span> <span className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 text-[11px] font-medium text-white/80"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> Live Online </span> <span className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 text-[11px] font-medium text-white/80"> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> English + Hindi </span> </div> <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 w-full"> <a href="#pricing" className="bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-3.5 text-[15px] font-bold transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(123,92,255,0.4)]"> Reserve Your Seat <span aria-hidden="true">&rarr;</span> </a> <div className="flex flex-col"> <div className="text-white font-bold text-lg leading-tight"> ₹499 <span className="text-sm font-normal text-white/60">only</span> </div> <div className="text-[11px] font-bold text-[#FF5C77] leading-tight"> <span className="text-white/40 line-through">₹4,999</span> - 90% OFF early-bird </div> </div> </div> <div className="flex items-center gap-4"> <div className="flex -space-x-2"> <div className="w-6 h-6 rounded-full bg-[#343746] border-2 border-[#05070D] flex items-center justify-center text-[8px] font-bold text-white">AB</div> <div className="w-6 h-6 rounded-full bg-[#343746] border-2 border-[#05070D] flex items-center justify-center text-[8px] font-bold text-white">SK</div> <div className="w-6 h-6 rounded-full bg-[#343746] border-2 border-[#05070D] flex items-center justify-center text-[8px] font-bold text-white">PN</div> <div className="w-6 h-6 rounded-full bg-[#343746] border-2 border-[#05070D] flex items-center justify-center text-[8px] font-bold text-white">+</div> </div> <div className="flex items-center gap-2"> <div className="flex gap-0.5 text-[#7B5CFF]"> {[1, 2, 3, 4, 5].map((star) => ( <svg key={star} width="10" height="10" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /> </svg> ))} </div> <span className="text-[11px] text-white/60">Joined by <span className="text-white font-bold">5,200+</span> learners</span> </div> </div> </div> {/* Right Content / Registration Card */} <div className="w-full lg:w-[45%] lg:pl-10 relative z-20"> <div className="bg-[#05070D]/40 backdrop-blur-3xl border border-white/20 p-8 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full rounded-2xl bg-gradient-to-br from-white/10 to-transparent"> <h3 className="text-white font-bold text-xl mb-2">Seat Registration</h3> <p className="text-white/50 text-xs mb-6">Reserve your spot for the upcoming live cohort.</p> {/* Timer */} <div className="flex justify-between gap-3 mb-8"> {[ { label:"DAYS", value:"01" }, { label:"HOURS", value:"23" }, { label:"MINS", value:"59" }, { label:"SECS", value:"50" }, ].map((time, idx) => ( <div key={idx} className="flex flex-col items-center justify-center bg-[#151722] w-[72px] h-[72px] border border-white/5 shadow-inner"> <div className="text-[22px] leading-none font-black text-white mb-1.5">{time.value}</div> <div className="text-[9px] text-white/50 tracking-wider font-semibold">{time.label}</div> </div> ))} </div> {/* Features */} <ul className="space-y-4 mb-8"> {["12 hours of live, hands-on training","8+ real GenAI projects you build & keep","AWS-verified completion certificate","Lifetime access to recordings & community" ].map((feature, idx) => ( <li key={idx} className="flex items-center gap-3"> <span className="text-white text-[14px] font-bold">✓</span> <span className="text-white/70 text-[13px]">{feature}</span> </li> ))} </ul> <a href="#pricing" className="block w-full bg-[#7B5CFF] hover:bg-[#6a4cef] text-white text-center py-4 text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.3)] hover:shadow-[0_0_30px_rgba(123,92,255,0.5)] mb-4"> Enroll for ₹499 <span aria-hidden="true">&rarr;</span> </a> <p className="flex items-center justify-center text-center text-[11px] font-bold text-[#FF5C77]"> <span className="inline-block w-2 h-2 rounded-full bg-[#FF5C77] mr-1.5 animate-pulse"></span> Only 14 of 100 seats remaining </p> </div> </div> </div> </section> );
} /* ───────────────── PARTNERS / TRUST BAR ───────────────── */
function TechStackBar() {
  const partners = [
    { name:"Molifera media", logo:"/molifera.png", width: 120 },
    { name:"Renuka Eye Institute", logo:"/renuka.png", width: 150 },
    { name:"Himalaya Darpan", logo:"/himalaya.png", width: 120 },
    { name:"Dhunseri", logo:"/dhunseri.png", width: 100 },
  ];
  return (
    <section className="pt-10 pb-6 bg-[#05070D] overflow-hidden">
      <style>{`
        @keyframes scrollPartners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-partners {
          animation: scrollPartners 30s linear infinite;
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
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#05070D] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#05070D] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-[200%] animate-scroll-partners">
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="flex-1 flex justify-center px-4 md:px-8 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="relative h-8 md:h-12 w-24 md:w-32 flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="h-full w-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} /* ───────────────── STATS ───────────────── */
function Stats() { const stats = [ { value:"12", label:"Hours of live build-along sessions" }, { value:"8+", label:"Production projects you ship" }, { value:"100%", label:"Hands-on \u2014 zero passive lectures" }, { value:"5.2k", label:"Learners trained by AGS" }, ]; return ( <section className="pb-16 md:pb-24 bg-[#05070D]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"> {stats.map((stat, index) => ( <div key={index} className="bg-[#0D101E] border border-white/5 p-6 md:p-8 flex flex-col items-center justify-center text-center hover:border-white/10 transition-colors" > <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7B5CFF] mb-2">{stat.value}</div> <div className="text-[11px] md:text-xs text-white/50 font-medium leading-snug max-w-[160px]"> {stat.label} </div> </div> ))} </div> </div> </section> );
} /* ───────────────── THE CURRICULUM ───────────────── */
function Curriculum() { const modules = [ { num:"01", hours:"Hour 1-2", title:"Foundations of GenAI & LLMs", desc:"How modern models actually work \u2014 tokens, embeddings, context windows \u2014 and how to think like an AI engineer instead of a prompt tinkerer." }, { num:"02", hours:"Hour 3-4", title:"API Integration & Prompt Systems", desc:"Wire up the Anthropic & OpenAI APIs, design reliable prompt pipelines, structure JSON outputs, and handle streaming responses in real apps." }, { num:"03", hours:"Hour 5-6", title:"RAG: Chat With Your Data", desc:"Build a retrieval-augmented chatbot over your own documents using vector databases, chunking strategies, and grounded answers." }, { num:"04", hours:"Hour 7-8", title:"Building Autonomous AI Agents", desc:"Give models tools, memory, and the ability to act. Design multi-step agents that plan, call functions, and complete real tasks end-to-end." }, { num:"05", hours:"Hour 9-10", title:"Deploy & Scale on AWS", desc:"Ship your agent to production with AWS Bedrock & serverless infrastructure \u2014 the exact stack AGS uses for client builds." }, { num:"06", hours:"Hour 11-12", title:"Capstone: Your AI Product", desc:"Combine everything into one portfolio-grade product, get live feedback from mentors, and learn how to take it to market." }, ]; return ( <section id="curriculum" className="py-16 md:py-24 bg-[#05070D]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="mb-12"> <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4"> The Curriculum </h3> <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"> Everything you build in{""} <span className="text-[#7B5CFF]">12 hours</span> </h2> <p className="text-white/70 max-w-2xl text-base md:text-lg"> No fluff. Each module ends with a working artifact you can put on your resume, GitHub, or ship to a client. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"> {modules.map((mod) => ( <div key={mod.num} className="bg-[#0D101E] border border-white/5 p-6 md:p-8 hover:border-white/10 transition-colors"> <div className="flex items-center justify-between mb-4"> <span className="text-[11px] font-bold text-[#7B5CFF] uppercase tracking-widest bg-[#7B5CFF]/10 px-2 py-1"> {mod.num} </span> <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider border border-white/10 rounded-full px-2.5 py-1 bg-white/5"> {mod.hours} </span> </div> <h4 className="text-white font-bold text-[17px] md:text-lg mb-3 leading-snug">{mod.title}</h4> <p className="text-white/50 text-[13px] md:text-sm leading-relaxed">{mod.desc}</p> </div> ))} </div> </div> </section> );
} /* ───────────────── TARGET AUDIENCE ───────────────── */
function TargetAudience() { const audiences = [ { title:"Developers", desc:"Add AI engineering to your stack and become the most valuable person on your team.", icon: ( <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polyline points="16 18 22 12 16 6"></polyline> <polyline points="8 6 2 12 8 18"></polyline> </svg> ) }, { title:"Founders", desc:"Prototype AI features yourself and stop burning runway on agencies that move slowly.", icon: ( <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v18z"></path> <polyline points="14 2 14 8 20 8"></polyline> </svg> ) }, { title:"Data & Analysts", desc:"Move beyond dashboards \u2014 build AI tools that turn your data into decisions.", icon: ( <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline> </svg> ) }, { title:"Students", desc:"Graduate with real, shippable AI projects that get you hired ahead of the curve.", icon: ( <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path> <path d="M6 12v5c3 3 9 3 12 0v-5"></path> </svg> ) }, ]; return ( <section className="py-16 md:py-24 bg-[#05070D]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="mb-12"> <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4"> WHO IT&apos;S FOR </h3> <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"> Built for builders at every stage </h2> </div> <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"> {audiences.map((aud, idx) => ( <div key={idx} className="bg-[#0D101E] border border-white/5 p-6 md:p-8 flex flex-col hover:border-white/10 transition-colors"> <div className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center text-[#7B5CFF] mb-6"> {aud.icon} </div> <h4 className="text-white font-bold text-[17px] mb-3">{aud.title}</h4> <p className="text-white/50 text-[13px] leading-relaxed">{aud.desc}</p> </div> ))} </div> </div> </section> );
} /* ───────────────── AWS ACCREDITED TRAINING & DIGITAL BADGES ───────────────── */
function AWSTraining() {
  const badges = [
    { src: "/aws-partner-public-sector-for-sellers-business.png", alt: "AWS Public Sector" },
    { src: "/aws-cloud-quest-cloud-practitioner-training-badge.png", alt: "AWS Cloud Practitioner" },
    { src: "/aws-knowledge-security-champion-training-badge.png", alt: "AWS Security Champion" },
    { src: "/aws generative ai practitioner.png", alt: "AWS Generative AI Practitioner" },
    { src: "/aws-partner-sales-accreditation-training-badge.png", alt: "AWS Sales Accreditation" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#070913] overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">
            VERIFIED CREDENTIALS
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight mx-auto max-w-4xl">
            AWS-Accredited Training &amp; Digital Badges
          </h2>
        </div>
      </div>
      
      {/* Carousel Track */}
      <div className="relative w-full">
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#070913] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#070913] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-[200%] animate-scroll">
          {/* Double the items for seamless looping */}
          {[...badges, ...badges].map((badge, idx) => (
            <div key={idx} className="flex-1 flex justify-center px-4 md:px-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 hover:scale-105 transition-transform duration-300">
                <Image src={badge.src} alt={badge.alt} fill className="object-contain" />
              </div>
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
    { name: "Ankit Bhadra", tag: "Mentor", role: "Pre-Sales Cloud Solution Architect", company: "Cloud Consultant", desc: "7+ years of experience as a Technical SPOC and Cloud consultant. Currently a Pre-Sales Cloud Solution Architect with expertise in AWS, Microsoft Azure, and Google Cloud Platform (GCP). He helps organizations accelerate digital transformation by designing optimized cloud solutions, architectures, and AI/ML ecosystems.", skills: ["AWS", "GCP", "AI/ML", "Azure"], image: "/Academy/Ankit-Bhadra.png" },
    { name: "Aritra Sen", tag: "Mentor", role: "Sales & Business Development Expert", company: "", desc: "16 years of work experience in Sales & Business Development. His expertise in technology sales with a strong consultancy expertise in AI, data engineering, cloud native and various digital engineering solutions.", skills: ["AI", "Data Engineering", "Cloud Native"], image: "/Academy/aritra-sen.png" },
  ];
  return (
    <section id="mentors" className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">MEET YOUR MENTORS</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl">
            Learn from industry experts who ship <br className="hidden md:block" />
            <span className="text-[#7B5CFF]">real solutions.</span>
          </h2>
          <p className="text-white/70 text-[15px] md:text-[17px] max-w-2xl leading-relaxed">
            Our mentors bring years of real-world experience in cloud, AI, and digital transformation.
          </p>
        </div>
        
        {/* MOBILE VIEW (Circular Avatar Layout) */}
        <div className="flex md:hidden flex-col gap-6">
          {mentors.map((mentor, idx) => (
            <div key={`mob-${idx}`} className="bg-[#0D101E] border border-white/5 p-6 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border border-white/10 bg-[#14172B]">
                  <Image src={mentor.image} alt={mentor.name} fill quality={100} className="object-cover object-top" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">{mentor.name}</h4>
                  <p className="text-[#7B5CFF] text-[13px] font-medium mb-1">{mentor.role}</p>
                  {mentor.company && <p className="text-white/80 text-[13px] mb-4">{mentor.company}</p>}
                  {!mentor.company && <div className="mb-4"></div>}
                  <div className="flex flex-wrap gap-2">
                    {mentor.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 border border-white/10 bg-white/5 text-[11px] text-white/70 font-medium rounded-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-[13px] leading-relaxed">{mentor.desc}</p>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW (Original Block Layout) */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {mentors.map((mentor, idx) => (
            <div key={`desk-${idx}`} className="bg-[#0D101E] border border-white/5 overflow-hidden flex flex-row hover:border-white/10 transition-colors">
              <div className="w-1/2 relative bg-[#14172B] min-h-[300px]">
                <Image src={mentor.image} alt={mentor.name} fill quality={100} className="object-cover object-top" />
              </div>
              <div className="w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-white font-bold text-xl">{mentor.name}</h4>
                  <span className="px-2 py-0.5 border border-[#7B5CFF]/30 text-[#7B5CFF] text-[10px] font-bold">{mentor.tag}</span>
                </div>
                <p className="text-[#7B5CFF] text-[13px] font-bold mb-1">{mentor.role}</p>
                {mentor.company && <p className="text-white font-semibold text-[13px] mb-4">{mentor.company}</p>}
                {!mentor.company && <div className="mb-4"></div>}
                <p className="text-white/60 text-[13px] leading-relaxed mb-6">{mentor.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {mentor.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 border border-white/10 bg-white/5 text-[11px] text-white/70 font-medium flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-[#7B5CFF]"></div>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
} /* ───────────────── BONUSES ───────────────── */
function Bonuses() { const bonuses = [ { title:"AI Engineer Starter Kit", desc:"Prompt libraries, agent boilerplates, and deployment templates ready to clone.", value:"₹6,000", icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path> <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline> <line x1="12" y1="22.08" x2="12" y2="12"></line> </svg> ) }, { title:"1:1 Project Review", desc:"Submit your capstone and get a personalised review from an AGS mentor.", value:"₹5,000", icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="12" r="10"></circle> <circle cx="12" cy="12" r="6"></circle> <circle cx="12" cy="12" r="2"></circle> </svg> ) }, { title:"Alumni Community Access", desc:"Lifetime entry to the AGS Academy network — jobs, collabs, and monthly AI sessions.", value:"₹7,000", icon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path> <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> </svg> ) }, ]; return ( <section className="py-16 md:py-24 bg-[#070913]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="mb-12"> <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4"> ENROLMENT BONUSES </h3> <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl"> Worth <span className="text-[#FF5C77]">₹18,000+</span> — yours free </h2> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"> {bonuses.map((bonus, idx) => ( <div key={idx} className="bg-[#0D101E] border border-white/5 p-6 md:p-8 hover:border-white/10 transition-colors flex flex-col"> <div className="flex justify-between items-start mb-6"> <div className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center text-[#7B5CFF]"> {bonus.icon} </div> <div className="text-[#FF5C77] text-[13px] font-bold">{bonus.value}</div> </div> <h4 className="text-white font-bold text-[16px] mb-3">{bonus.title}</h4> <p className="text-white/50 text-[13px] leading-relaxed">{bonus.desc}</p> </div> ))} </div> </div> </section> );
} /* ───────────────── TESTIMONIALS ───────────────── */
function Testimonials() { const testimonials = [ { name:"Aman Kumar Singh,", role:"B.Tech (Computer Science)", review:"Before joining this program, I had only theoretical knowledge of Machine Learning. The hands-on projects and AWS deployment experience helped me understand how AI solutions are built in the industry...", initial:"AS" }, { name:"Sutirtha Chatterjee,", role:"B.Tech (IT)", review:"What makes this program different is its focus on real implementation. From data preprocessing to model deployment, every stage was covered through practical exercises...", initial:"SC" }, { name:"Priyanjali Bose,", role:"MCA Student, Final year", review:"What makes this program different is its focus on real implementation. From data preprocessing to model deployment, every stage was covered through practical exercises...", initial:"PB" }, { name:"Arindam Sengupta,", role:"Computer Science Graduate", review:"I was looking for a program that could help me transition into the AI/ML domain. The curriculum, mentor guidance, and cloud-based projects on AWS gave me industry-relevant skills...", initial:"AS" }, { name:"Ankit Bhadra,", role:"Cloud Solution Architect", review:"This program provided practical industry-focused learning. The hands-on projects, cloud architecture sessions, and expert guidance helped me understand real-world implementation.", initial:"AB" }, { name:"Aritra Sen,", role:"AI & Data Engineering Consultant", review:"The best part of this program is its focus on real-world applications. From data preprocessing to deployment, every module is designed to give you practical exposure...", initial:"AS" }, ]; return ( <section className="py-16 md:py-24 bg-[#05070D]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="mb-12 text-left"> <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4"> LOVED BY LEARNERS </h3> <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"> Real people. Real builds. </h2> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {testimonials.map((test, idx) => ( <div key={idx} className="bg-[#0D101E] border border-white/5 p-8 flex flex-col hover:border-white/10 transition-colors"> <div className="flex gap-1 text-[#7B5CFF] mb-6"> {[1, 2, 3, 4, 5].map((star) => ( <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /> </svg> ))} </div> <p className="text-white/60 text-[13px] leading-relaxed mb-8 flex-grow"> &quot;{test.review}&quot; </p> <div className="flex items-center gap-4 mt-auto"> <div className={`w-9 h-9 rounded-full bg-[#252836] flex items-center justify-center text-white/70 font-bold text-xs shrink-0`}> {test.initial} </div> <div> <h4 className="text-white font-bold text-[13px]">{test.name}</h4> <p className="text-white/40 text-[12px]">{test.role}</p> </div> </div> </div> ))} </div> </div> </section> );
} /* ───────────────── PRICING ───────────────── */
function Pricing() { const features = ["12 hours of live, hands-on AI engineering","8+ build-along projects you keep forever","AWS-verified completion certificate","₹18,000+ in enrolment bonuses","Lifetime recordings & alumni community", ]; return ( <section id="pricing" className="py-16 md:py-24 bg-[#070913]"> <div className="max-w-3xl mx-auto px-6 sm:px-8"> <div className="text-center mb-8"> <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase mb-4"> SIMPLE PRICING </h3> <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"> Reserve your seat today </h2> </div> <div className="bg-[#0D101E] border border-white/5 p-8 md:p-12 relative max-w-2xl mx-auto flex flex-col"> <div className="inline-block px-3 py-1.5 rounded-full bg-[#FF5C77] text-white text-[10px] font-bold uppercase tracking-wider mb-6 w-max"> EARLY-BIRD - 90% OFF </div> <div className="flex items-end gap-3 mb-2"> <span className="text-5xl md:text-7xl font-bold text-white leading-none">₹499</span> <span className="text-xl md:text-2xl text-white/40 line-through mb-1">₹4,999</span> </div> <p className="text-[#FF5C77] text-sm md:text-[15px] font-bold mb-10"> You save ₹4,500 — offer ends when the timer hits zero. </p> <div className="w-full mb-10"> {features.map((feature, idx) => ( <div key={idx} className="flex items-start gap-4 py-3"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7B5CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span className="text-white/80 text-[14px] md:text-[15px]">{feature}</span> </div> ))} </div> <a href="#" className="flex w-full items-center justify-center gap-2 bg-[#7B5CFF] hover:bg-[#6a4cef] text-white py-4 text-[16px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.3)] hover:shadow-[0_0_30px_rgba(123,92,255,0.5)] mb-6"> Enroll Now — ₹499 <span aria-hidden="true">&rarr;</span> </a> <p className="text-white/40 text-[11px] md:text-xs text-center leading-relaxed"> Secure checkout - 100% money-back if you attend day 1 and don&apos;t love it. </p> </div> </div> </section> );
} /* ───────────────── FAQ ───────────────── */
function FAQ() { const faqs = [ { question:"Do I need to know how to code?", answer:"Basic programming familiarity helps, but we start from foundations. If you can write a simple Python script, you'll keep up comfortably. Complete beginners are welcome and supported." }, { question:"Is this live or recorded?", answer:"The sessions are primarily live to ensure you can build along with the instructor and ask questions in real-time." }, { question:"What do I need to attend?", answer:"Just a laptop and a stable internet connection. All tools and cloud infrastructure will be provided or set up during the sessions." }, { question:"Will I really build things, or just watch?", answer:"You will build. This is a 100% hands-on program. You'll be writing code, deploying to AWS, and testing live models during every single session." }, { question:"What's the refund policy?", answer:"We offer a 7-day money-back guarantee. If you decide the program isn't for you within the first week, we'll refund your full investment." }, { question:"Is the certificate recognised?", answer:"Yes, our program completion certificates and AWS-aligned training are recognized by our hiring partners and industry network." }, ]; const [openIndex, setOpenIndex] = useState(0); return ( <section id="faq" className="py-16 md:py-24 bg-[#05070D]"> <div className="max-w-3xl mx-auto px-6 sm:px-8"> <div className="text-center mb-12"> <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4"> QUESTIONS </h3> <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"> Everything you might ask </h2> </div> <div className="space-y-4"> {faqs.map((faq, idx) => ( <div key={idx} className="border border-white/5 bg-[#0D101E]"> <button className="w-full text-left p-6 flex items-center justify-between focus:outline-none" onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}> <span className="text-white font-bold text-[14px] md:text-[15px] pr-8">{faq.question}</span> <span className="text-[#7B5CFF] shrink-0 transition-transform duration-300 text-xl font-medium"> {openIndex === idx ?"−" :"+"} </span> </button> <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ?"max-h-40 pb-6 px-6 opacity-100" :"max-h-0 opacity-0 px-6"}`}> <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed">{faq.answer}</p> </div> </div> ))} </div> </div> </section> );
} /* ───────────────── FOOTER (WITH CTA) ───────────────── */
function Footer() { return ( <footer className="bg-[#0A0C16]"> {/* Final CTA Section */} <div className="py-20 md:py-32 border-b border-white/5 relative"> <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7B5CFF]/10 blur-[100px] pointer-events-none"></div> <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10"> <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.2]"> Stop reading about AI. <br /> <span className="text-[#7B5CFF]">Start building it.</span> </h2> <p className="text-white/70 text-[15px] md:text-[17px] max-w-2xl mx-auto mb-10 leading-relaxed"> Join the next AGS Academy cohort and gain the practical AI &amp; Machine Learning experience that employers actually look for. </p> <div className="flex flex-col items-center justify-center"> <a href="#pricing" className="inline-flex items-center justify-center bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-4 text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.4)] hover:shadow-[0_0_30px_rgba(123,92,255,0.6)] mb-4"> Reserve Your Seat Now → </a> <p className="text-[#FF5C77] text-[12px] font-bold"> Only 14 of 100 seats left for the 22-23 June cohort </p> </div> </div> </div> {/* Main Footer Links */} <div className="hidden md:block max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16"> <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8"> <div className="md:col-span-12 lg:col-span-5"> <Link href="/" className="inline-block mb-6"> <h3 className="text-white font-bold text-xl tracking-tight"> <span className="text-[#7B5CFF]">AGS</span> Academy </h3> </Link> <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed max-w-sm"> Practical AI &amp; Machine Learning training built around real projects, live cloud deployments, and industry mentorship. Build a portfolio employers can actually evaluate. </p> </div> <div className="md:col-span-4 lg:col-span-2 lg:col-start-7"> <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">PROGRAM</h4> <ul className="space-y-4"> {["Curriculum","Outcomes","Mentors","Pricing"].map((link, idx) => ( <li key={idx}> <Link href={`#${link.toLowerCase()}`} className="text-white/50 hover:text-white text-[13px] md:text-[14px] transition-colors">{link}</Link> </li> ))} </ul> </div> <div className="md:col-span-4 lg:col-span-2"> <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">RESOURCES</h4> <ul className="space-y-4"> {["Student Stories","Project Gallery","Blog","FAQ"].map((link, idx) => ( <li key={idx}> <Link href="#" className="text-white/50 hover:text-white text-[13px] md:text-[14px] transition-colors">{link}</Link> </li> ))} </ul> </div> <div className="md:col-span-4 lg:col-span-2"> <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">CONTACT</h4> <ul className="space-y-4"> {["hello@agsacademy.in","WhatsApp Us","Instagram","LinkedIn"].map((link, idx) => ( <li key={idx}> <Link href="#" className="text-white/50 hover:text-white text-[13px] md:text-[14px] transition-colors">{link}</Link> </li> ))} </ul> </div> </div> <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"> <p className="text-white/40 text-[12px] md:text-[13px]"> © {new Date().getFullYear()} AGS Academy. All rights reserved. </p> <div className="flex gap-4 md:gap-6 text-white/40 text-[12px] md:text-[13px]"> <a href="#" className="hover:text-white transition-colors">Instagram</a> <a href="#" className="hover:text-white transition-colors">LinkedIn</a> <a href="#" className="hover:text-white transition-colors">Twitter / X</a> <a href="#" className="hover:text-white transition-colors">YouTube</a> </div> </div> </div> <div className="block md:hidden max-w-7xl mx-auto px-6 py-12"> <div className="flex flex-col"> <div className="flex items-center gap-2 mb-2"> <div className="relative w-[60px] h-[24px]"> <Image src="/ags_logo.png" alt="AGS logo" fill className="object-contain" /> </div> <span className="text-white/70 font-light text-[17px]">Academy</span> </div> <p className="text-[#646A85] text-[13px] mb-8">Build real AI. Ship real products.</p> <div className="flex gap-4 mb-10"> {["X", "in", "fb", "ig"].map(icon => ( <a href="#" key={icon} className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#7B5CFF]/20 bg-[#7B5CFF]/5 text-white hover:bg-[#7B5CFF]/10 transition"> {icon === 'X' ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg> : null} {icon === 'in' ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> : null} {icon === 'fb' ? <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> : null} {icon === 'ig' ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> : null} </a> ))} </div> <div className="grid grid-cols-2 gap-8 mb-12"> <div> <h4 className="text-white font-bold text-[13px] tracking-widest uppercase mb-5">COURSES</h4> <ul className="space-y-4"> {["AI Engineer Bootcamp", "GenAI for Product Teams", "AWS AI Certification", "All Programs"].map(link => ( <li key={link}><a href="#" className="text-[#646A85] hover:text-white text-[14px]">{link}</a></li> ))} </ul> </div> <div> <h4 className="text-white font-bold text-[13px] tracking-widest uppercase mb-5">GET IN TOUCH</h4> <ul className="space-y-4"> {["Contact Us", "Refund Policy", "Privacy Policy", "Terms of Service"].map(link => ( <li key={link}><a href="#" className="text-[#646A85] hover:text-white text-[14px]">{link}</a></li> ))} </ul> </div> </div> <div className="border-t border-white/5 pt-8 text-center"> <p className="text-[#646A85] text-[12px]">© 2025 AGS Academy · All rights reserved</p> </div> </div> </div> </footer> );
} /* ───────────────── PAGE EXPORT ───────────────── */
export default function AcademyV2Page() { return ( <main className="bg-[#05070D] min-h-screen text-white font-sans antialiased selection:bg-[#7B5CFF]/30 selection:text-white"> <Navbar /> <Hero /> <TechStackBar /> <Stats /> <Curriculum /> <TargetAudience /> <AWSTraining /> <MentorsSection /> <Bonuses /> <Testimonials /> <Pricing /> <FAQ /> <Footer /> </main> );
}
