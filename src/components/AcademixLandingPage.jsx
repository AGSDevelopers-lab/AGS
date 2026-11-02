"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import step1Img from "../../public/Academy/step-1.png";
import step2Img from "../../public/Academy/step-2.png";
import step3Img from "../../public/Academy/step-3.png";
import step4Img from "../../public/Academy/step-4.png";
import step5Img from "../../public/Academy/step-5.png";
import step6Img from "../../public/Academy/step-6.png";

const STEPS_DATA = [
  {
    id: 1,
    title: "Learn",
    stepBadge: "Step 1",
    subtitle: "Understand AWS fundamentals and services.",
    image: step1Img,
  },
  {
    id: 2,
    title: "Practice",
    stepBadge: "Step 2",
    subtitle: "Apply concepts through hands-on cloud labs.",
    image: step2Img,
  },
  {
    id: 3,
    title: "Assess",
    stepBadge: "Step 3",
    subtitle: "Evaluate knowledge with weekly module quizzes.",
    image: step3Img,
  },
  {
    id: 4,
    title: "Improve",
    stepBadge: "Step 4",
    subtitle: "Target weak areas with mentor guidance and reviews.",
    image: step4Img,
  },
  {
    id: 5,
    title: "Document",
    stepBadge: "Step 5",
    subtitle: "Build architectural case studies and showcase projects.",
    image: step5Img,
  },
  {
    id: 6,
    title: "Attempt",
    stepBadge: "Step 6",
    subtitle: "Take official AWS exams with full confidence.",
    image: step6Img,
  },
];

const FAQS_DATA = [
  {
    q: "Is this programme suitable for beginners?",
    a: "Yes. Beginners can start with foundational cloud concepts through the Cloud Practitioner pathway.",
  },
  {
    q: "Does the programme guarantee AWS certification?",
    a: "No. The programme supports exam preparation through guided learning, practical work, and mock tests. Certification depends on your exam performance.",
  },
  {
    q: "Which certification pathway should I choose?",
    a: "Beginners can explore Cloud Practitioner, while learners with relevant experience may consider an Associate pathway. A counsellor can help you understand the available options.",
  },
  {
    q: "Are projects and mock tests included?",
    a: "Mock tests are part of the programme. Project availability varies by learning pathway and should be confirmed with the Academix team.",
  },
  {
    q: "How long is the programme?",
    a: "The programme runs for 24 weeks, with an estimated commitment of 15–20 hours per week.",
  },
];

export default function AcademixLandingPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    status: "",
  });

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentStep = STEPS_DATA.find((s) => s.id === activeStep) || STEPS_DATA[0];

  return (
    <div className="font-poppins min-h-screen bg-[#101010] text-white selection:bg-[#6E3BFF] selection:text-white relative overflow-x-clip">
      {/* ───────────────── BACKGROUND LIGHTING (Confined exclusively to Hero section) ───────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Continuous top gradient that flows seamlessly through navbar and hero */}
        <div className="absolute top-0 left-0 right-0 h-[1150px] bg-[radial-gradient(ellipse_120%_80%_at_50%_-5%,#352466_0%,#241947_35%,#160F30_65%,#101010_100%)]" />

        {/* Left vertical soft purple light streak */}
        <div className="absolute top-0 left-[-60px] w-[600px] h-[950px] bg-[radial-gradient(ellipse_55%_75%_at_40%_25%,rgba(139,98,255,0.22)_0%,rgba(93,48,235,0.12)_45%,transparent_75%)] blur-[75px]" />

        {/* Right vertical soft purple light streak */}
        <div className="absolute top-0 right-[-60px] w-[600px] h-[950px] bg-[radial-gradient(ellipse_55%_75%_at_60%_25%,rgba(139,98,255,0.22)_0%,rgba(93,48,235,0.12)_45%,transparent_75%)] blur-[75px]" />
      </div>

      {/* ───────────────── TOP NAVBAR (100% Transparent, No Box, Seamless Background) ───────────────── */}
      <header className="relative z-50 w-full bg-transparent">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-12 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-[25px] sm:text-[27px] font-bold tracking-tight text-white leading-none">
              ACADEMIX
            </span>
            <span className="text-[11px] text-white/50 tracking-wider uppercase font-medium mt-1">
              An AGS Product
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9 text-[15px] text-white/85 font-normal">
            <button
              onClick={() => scrollToSection("why-academix")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("instructors")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Meet the mentor
            </button>
            <button
              onClick={() => scrollToSection("curriculum")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection("progress")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQs
            </button>
          </nav>

          {/* Contact Button (Exact Figma Spec: Sharp Corners rounded-none) */}
          <button
            onClick={() => scrollToSection("eligibility-form")}
            className="bg-[#0070F3] hover:bg-[#0060df] text-white text-[15px] font-medium px-8 py-3 rounded-none transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            Contact us
          </button>
        </div>
      </header>

      {/* ───────────────── HERO SECTION ───────────────── */}
      <section className="relative z-10 pt-10 sm:pt-14 pb-12 px-6 sm:px-8 text-center">
        <div className="max-w-[1240px] mx-auto">
          {/* Avatar & Text Header (NO background box, NO border, pure elements sitting on background) */}
          <div className="inline-flex items-center justify-center gap-3.5 mb-8">
            {/* 5 Overlapping Avatars (Clean circular photos, NO black borders) */}
            <div className="flex -space-x-3 overflow-visible">
              {[
                "/Academy/User Image.png",
                "/Academy/User Image (1).png",
                "/Academy/User Image (2).png",
                "/Academy/User Image (3).png",
                "/Academy/User Image (4).png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-full overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`AWS Trainee ${i + 1}`}
                    fill
                    sizes="50px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Text beside avatars */}
            <div className="text-left ml-1">
              <p className="text-[14px] font-normal text-white leading-[19.6px]">
                Expert-Led AWS Certification Training
              </p>
              <p className="text-[12px] text-[#FFFFFF99] font-normal leading-[16.8px] mt-0.5">
                Practical Learning · Mentor Support · Exam Preparation
              </p>
            </div>
          </div>

          {/* Hero Headlines (Exact Figma Specs) */}
          <h1 className="text-white text-5xl sm:text-7xl lg:text-[80px] font-medium tracking-[-0.8px] leading-[1.1] sm:leading-[88px] max-w-[960px] mx-auto">
            Crack Your
          </h1>
          <h2 className="text-[#8B62FF] text-5xl sm:text-7xl lg:text-[80px] font-medium tracking-[-0.8px] leading-[1.1] sm:leading-[88px] max-w-[960px] mx-auto mt-1 sm:mt-2">
            AWS Exam in One Go.
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-[15px] sm:text-[16px] text-white/75 max-w-[740px] mx-auto leading-[26px] font-normal">
            Prepare smart with expert guidance, hands-on projects, and exam-focused
            <br className="hidden sm:inline" />{" "}
            practice designed to strengthen your AWS knowledge and build exam confidence.
          </p>

          {/* Hero Buttons (Exact Figma Specs: Sharp Corners rounded-none) */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("eligibility-form")}
              className="w-[215px] h-[48px] bg-[#6E3BFF] hover:bg-[#5d2ee5] text-white text-[15px] font-medium rounded-none transition-all cursor-pointer shadow-[0_4px_20px_rgba(110,59,255,0.4)]"
            >
              Get Course Details
            </button>
            <button
              onClick={() => scrollToSection("curriculum")}
              className="w-[194px] h-[48px] bg-[#2D2D2DB2] hover:bg-[#3d3d3db2] border border-white/10 text-white text-[15px] font-medium rounded-none transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>View Curriculum</span>
              <span className="text-[16px]">→</span>
            </button>
          </div>

          {/* Hero Media Card (Exact Figma Spec: Sharp corners, rounded-none) */}
          <div
            onClick={() => setVideoModalOpen(true)}
            className="mt-14 max-w-[1220px] mx-auto rounded-none overflow-hidden border border-[#8B62FF]/40 shadow-[0_0_60px_rgba(139,98,255,0.22)] relative group cursor-pointer aspect-[16/9] sm:aspect-[1074/604]"
          >
            <Image
              src="/Academy/Container (5).png"
              alt="AWS Architecture Dashboard"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1220px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Centered Glowing Red Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-16 h-11 sm:w-20 sm:h-14 bg-[#FF0000] rounded-[14px] flex items-center justify-center shadow-[0_4px_25px_rgba(255,0,0,0.5)] group-hover:scale-110 transition-transform">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="ml-1"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 4 FEATURES ROW (Exact Icon Mapping matching Figma) ───────────────── */}
      <section className="relative z-10 py-12 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
          {/* Feature 1: Hands-On AWS Projects -> SVG.png (Dash) */}
          <div className="flex items-center gap-3">
            <div className="relative w-[25px] h-[24px] flex-shrink-0">
              <Image
                src="/Academy/SVG.png"
                alt=""
                fill
                sizes="25px"
                className="object-contain"
              />
            </div>
            <span className="text-white text-[15px] sm:text-[16px] font-medium">
              Hands-On AWS Projects
            </span>
          </div>

          {/* Feature 2: Live Mentor Support -> SVG (1).png (Door/Arrow) */}
          <div className="flex items-center gap-3">
            <div className="relative w-[25px] h-[24px] flex-shrink-0">
              <Image
                src="/Academy/SVG (1).png"
                alt=""
                fill
                sizes="25px"
                className="object-contain"
              />
            </div>
            <span className="text-white text-[15px] sm:text-[16px] font-medium">
              Live Mentor Support
            </span>
          </div>

          {/* Feature 3: Exam-Focused Practice -> SVG (2).png (Shield) */}
          <div className="flex items-center gap-3">
            <div className="relative w-[25px] h-[24px] flex-shrink-0">
              <Image
                src="/Academy/SVG (2).png"
                alt=""
                fill
                sizes="25px"
                className="object-contain"
              />
            </div>
            <span className="text-white text-[15px] sm:text-[16px] font-medium">
              Exam-Focused Practice
            </span>
          </div>

          {/* Feature 4: Recorded Lessons for Revision -> SVG (3).png (Cloud) */}
          <div className="flex items-center gap-3">
            <div className="relative w-[25px] h-[24px] flex-shrink-0">
              <Image
                src="/Academy/SVG (3).png"
                alt=""
                fill
                sizes="25px"
                className="object-contain"
              />
            </div>
            <span className="text-white text-[15px] sm:text-[16px] font-medium">
              Recorded Lessons for Revision
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────── WHY ACADEMIX ? ───────────────── */}
      <section id="why-academix" className="relative z-10 pt-20 pb-20 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto text-center">
          <h2 className="text-white text-4xl sm:text-[48px] font-medium tracking-[-0.8px] leading-[52.8px]">
            Why Academix ?
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#FFFFFFB2] max-w-[730px] mx-auto leading-[25.6px] font-normal">
            Build your AWS knowledge through guided learning, practical application, and
            <br className="hidden sm:inline" /> exam-focused preparation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("curriculum")}
              className="px-7 h-[48px] bg-[#6E3BFF] hover:bg-[#5d2ee5] text-white text-[15px] font-medium rounded-none transition-all cursor-pointer"
            >
              Explore The Courses
            </button>
            <button
              onClick={() => scrollToSection("curriculum")}
              className="px-7 h-[48px] bg-[#2D2D2DB2] hover:bg-[#3d3d3db2] border border-white/10 text-white text-[15px] font-medium rounded-none transition-all cursor-pointer flex items-center gap-2"
            >
              <span>View Curriculum</span>
              <span>→</span>
            </button>
          </div>

          {/* 3 Why Academix Cards (Figma Specs: sharp corners, rounded-none) */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#FFFFFF0D] border border-white/10 rounded-none p-8 flex flex-col justify-between min-h-[340px] hover:border-[#8B62FF]/50 transition-all">
              <div>
                <div className="relative w-16 h-16">
                  <Image
                    src="/Academy/Background+Border.png"
                    alt="Live Mentor Support"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-white text-[24px] font-medium leading-[31.2px] mt-8 mb-3">
                  Live Mentor Support
                </h3>
                <p className="text-[#FFFFFFB2] text-[14px] leading-[21px] font-normal">
                  Get help understanding AWS concepts and resolving doubts through guided
                  learning and dedicated support.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFFFF0D] border border-white/10 rounded-none p-8 flex flex-col justify-between min-h-[340px] hover:border-[#8B62FF]/50 transition-all">
              <div>
                <div className="relative w-16 h-16">
                  <Image
                    src="/Academy/Background+Border (1).png"
                    alt="Exam-Oriented Learning"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-white text-[24px] font-medium leading-[31.2px] mt-8 mb-3">
                  Exam-Oriented Learning
                </h3>
                <p className="text-[#FFFFFFB2] text-[14px] leading-[21px] font-normal">
                  Focus on certification-relevant concepts and strengthen your understanding
                  through regular practice.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFFFF0D] border border-white/10 rounded-none p-8 flex flex-col justify-between min-h-[340px] hover:border-[#8B62FF]/50 transition-all">
              <div>
                <div className="relative w-16 h-16">
                  <Image
                    src="/Academy/Background+Border (2).png"
                    alt="Hands-On Projects"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-white text-[24px] font-medium leading-[31.2px] mt-8 mb-3">
                  Hands-On Projects
                </h3>
                <p className="text-[#FFFFFFB2] text-[14px] leading-[21px] font-normal">
                  Apply your AWS knowledge through practical cloud exercises and projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── TURN AWS CONCEPTS INTO PRACTICAL SKILLS ───────────────── */}
      <section className="relative z-10 py-16 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto">
          {/* Video Banner Card (Overlay+Border.png: Sharp corners, rounded-none) */}
          <div
            onClick={() => setVideoModalOpen(true)}
            className="rounded-none overflow-hidden relative group cursor-pointer aspect-[16/9] sm:aspect-[1220/540] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/Academy/Overlay+Border.png"
              alt="Turn AWS Concepts into Practical Skills"
              fill
              sizes="(max-width: 1280px) 100vw, 1220px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            {/* Centered Glowing Red Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/15 transition-colors">
              <div className="w-16 h-11 sm:w-20 sm:h-14 bg-[#FF0000] rounded-[14px] flex items-center justify-center shadow-[0_4px_25px_rgba(255,0,0,0.6)] group-hover:scale-110 transition-transform">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="ml-1"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* 3 Columns Below Video (Exact Figma icons mapping) */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Col 1: Guided Learning -> SVG3.png (Armchair / Mentor) */}
            <div>
              <div className="flex items-center gap-3">
                <div className="relative w-[19px] h-[19px]">
                  <Image
                    src="/Academy/SVG3.png"
                    alt=""
                    fill
                    sizes="19px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-white text-[16px] font-medium">Guided Learning</h4>
              </div>
              <p className="mt-2 text-white/60 text-[14px] leading-relaxed">
                Learn AWS concepts with structured
                <br className="hidden sm:inline" /> instruction and practical support.
              </p>
            </div>

            {/* Col 2: Exam Preparation -> SVG (1)2.png (Calendar / Schedule) */}
            <div>
              <div className="flex items-center gap-3">
                <div className="relative w-[19px] h-[19px]">
                  <Image
                    src="/Academy/SVG (1)2.png"
                    alt=""
                    fill
                    sizes="19px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-white text-[16px] font-medium">Exam Preparation</h4>
              </div>
              <p className="mt-2 text-white/60 text-[14px] leading-relaxed">
                Strengthen your knowledge through
                <br className="hidden sm:inline" /> assessments and mock tests.
              </p>
            </div>

            {/* Col 3: Practical Projects -> SVG (2)1.png (Laptop / Hands-on) */}
            <div>
              <div className="flex items-center gap-3">
                <div className="relative w-[19px] h-[19px]">
                  <Image
                    src="/Academy/SVG (2)1.png"
                    alt=""
                    fill
                    sizes="19px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-white text-[16px] font-medium">Practical Projects</h4>
              </div>
              <p className="mt-2 text-white/60 text-[14px] leading-relaxed">
                Apply your learning to cloud scenarios
                <br className="hidden sm:inline" /> and document your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── INTERACTIVE 6-STEP SECTION (No outer box, rounded-none buttons) ───────────────── */}
      <section id="curriculum" className="relative z-10 py-20 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-8 lg:gap-12 items-start">
          {/* Left Column: 6 Interactive Step Buttons (Exact Figma Spec: rounded-none) */}
          <div className="flex flex-col gap-2.5">
            {STEPS_DATA.map((step) => {
              const isActive = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full h-[76px] px-6 rounded-none flex items-center justify-between text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#211B35] border border-[#8B62FF] shadow-[0_0_20px_rgba(139,98,255,0.25)] text-white"
                      : "bg-[#18151E] border border-white/5 text-white/75 hover:bg-[#201C29] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Circular Arrow Badge */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                        isActive
                          ? "bg-[#8B62FF] border-[#8B62FF] text-white"
                          : "bg-[#26222E] border-white/10 text-white/60"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                    <span className="text-[17px] sm:text-[18px] font-medium">
                      {step.title}
                    </span>
                  </div>

                  {/* Step Pill Badge */}
                  <span
                    className={`text-[12px] font-medium px-4 py-1 rounded-full border transition-colors ${
                      isActive
                        ? "border-[#D9B6FF] text-[#D9B6FF] bg-[#8B62FF]/20"
                        : "border-[#8B62FF]/40 text-[#D9B6FF]/80"
                    }`}
                  >
                    {step.stepBadge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Graphic Card & Disclaimer */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[600/320] rounded-[16px] overflow-hidden border border-white/10 shadow-2xl bg-[#090714]">
              <Image
                key={currentStep.id}
                src={currentStep.image}
                alt={currentStep.title}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-opacity duration-500"
                priority
              />
            </div>
            {/* Disclaimer Matching Exact Figma Specs */}
            <p className="mt-4 text-[16px] leading-[25.6px] tracking-[0.2px] text-[#FFFFFFB2] max-w-[614px] font-normal text-left">
              Training supports exam preparation but does not guarantee certification.
              <br className="hidden sm:inline" /> AWS awards certification upon successful completion of the relevant
              <br className="hidden sm:inline" /> exam.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── TRACK YOUR PROGRESS SECTION (Exact Figma: max-w-[760px], border border-[#FFFFFF4D], bg-[#FFFFFF0D], rounded-none) ───────────────── */}
      <section id="progress" className="relative z-10 py-20 px-6 sm:px-8">
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-[44px] font-medium tracking-tight">
            Track Your Progress. Identify Your Gaps.
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-white/70 font-normal">
            Regular assessments help you evaluate your understanding throughout the programme.
          </p>

          <div className="mt-12 text-left space-y-4">
            {/* Assessment 1 */}
            <div className="bg-[#FFFFFF0D] border border-[#FFFFFF4D] rounded-none min-h-[125.58px] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-[17px] font-medium">Weekly Assessments</h4>
                  <span className="text-white text-[18px] font-semibold">30%</span>
                </div>
                <p className="text-[#FFFFFFB2] text-[14px] mt-1.5 mb-4 font-normal leading-relaxed">
                  Measure your understanding of the topics covered each week.
                </p>
              </div>
              <div className="w-full max-w-[710px] h-[8px] rounded-[9px] bg-[#FFFFFF4D] overflow-hidden">
                <div className="h-full bg-white rounded-[9px] w-[30%]" />
              </div>
            </div>

            {/* Assessment 2 */}
            <div className="bg-[#FFFFFF0D] border border-[#FFFFFF4D] rounded-none min-h-[125.58px] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-[17px] font-medium">Practical Assignments</h4>
                  <span className="text-white text-[18px] font-semibold">25%</span>
                </div>
                <p className="text-[#FFFFFFB2] text-[14px] mt-1.5 mb-4 font-normal leading-relaxed">
                  Evaluate how you apply AWS concepts through hands-on work.
                </p>
              </div>
              <div className="w-full max-w-[710px] h-[8px] rounded-[9px] bg-[#FFFFFF4D] overflow-hidden">
                <div className="h-full bg-white rounded-[9px] w-[25%]" />
              </div>
            </div>

            {/* Assessment 3 */}
            <div className="bg-[#FFFFFF0D] border border-[#FFFFFF4D] rounded-none min-h-[125.58px] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-[17px] font-medium">Mock Tests</h4>
                  <span className="text-white text-[18px] font-semibold">25%</span>
                </div>
                <p className="text-[#FFFFFFB2] text-[14px] mt-1.5 mb-4 font-normal leading-relaxed">
                  Practice exam-style questions and identify areas that need revision.
                </p>
              </div>
              <div className="w-full max-w-[710px] h-[8px] rounded-[9px] bg-[#FFFFFF4D] overflow-hidden">
                <div className="h-full bg-white rounded-[9px] w-[25%]" />
              </div>
            </div>

            {/* Assessment 4 */}
            <div className="bg-[#FFFFFF0D] border border-[#FFFFFF4D] rounded-none min-h-[125.58px] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-[17px] font-medium">Final Assessment</h4>
                  <span className="text-white text-[18px] font-semibold">20%</span>
                </div>
                <p className="text-[#FFFFFFB2] text-[14px] mt-1.5 mb-4 font-normal leading-relaxed">
                  Review your overall understanding at the end of the programme.
                </p>
              </div>
              <div className="w-full max-w-[710px] h-[8px] rounded-[9px] bg-[#FFFFFF4D] overflow-hidden">
                <div className="h-full bg-white rounded-[9px] w-[20%]" />
              </div>
            </div>

            <div className="text-right pr-2 pt-2">
              <span className="text-white/80 text-[14px] font-medium">Total: 100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── ELIGIBILITY FORM BANNER (Exact Figma: rounded-none, input styles #0A06288C) ───────────────── */}
      <section id="eligibility-form" className="relative z-10 py-16 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto rounded-none p-8 sm:p-14 bg-gradient-to-r from-[#5022D9] via-[#6434EC] to-[#8048FF] shadow-[0_20px_60px_rgba(80,34,217,0.35)]">
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="text-white text-3xl sm:text-[40px] font-semibold tracking-tight">
              Find the Right AWS Learning Pathway.
            </h2>
            <p className="mt-3 text-white/85 text-[15px] sm:text-[16px] font-normal leading-relaxed">
              Starting from scratch or building on existing IT skills? Tell us about your goals to
              <br className="hidden sm:inline" /> explore the right learning pathway.
            </p>

            {formSubmitted ? (
              <div className="mt-10 p-8 bg-white/10 rounded-none border border-white/20 text-white backdrop-blur-sm animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-white text-[#5022D9] flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Thank You!</h3>
                <p className="mt-2 text-white/80 text-sm">
                  Our cloud learning counsellor will review your profile and reach out within 24
                  hours with your tailored AWS pathway.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-10 space-y-5 text-left max-w-[710px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] text-white/90 mb-1.5 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full sm:w-[343px] h-[52px] px-4 rounded-none bg-[#0A06288C] border border-[#FFFFFF47] text-white text-[14px] placeholder:text-[#FFFFFF80] focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-white/90 mb-1.5 font-medium">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Your mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full sm:w-[343px] h-[52px] px-4 rounded-none bg-[#0A06288C] border border-[#FFFFFF47] text-white text-[14px] placeholder:text-[#FFFFFF80] focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] text-white/90 mb-1.5 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full sm:w-[343px] h-[52px] px-4 rounded-none bg-[#0A06288C] border border-[#FFFFFF47] text-white text-[14px] placeholder:text-[#FFFFFF80] focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-white/90 mb-1.5 font-medium">
                      Current Status
                    </label>
                    <select
                      required
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full sm:w-[343px] h-[52px] px-4 rounded-none bg-[#0A06288C] border border-[#FFFFFF47] text-white text-[14px] focus:outline-none focus:border-white transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-[#0A0628] text-white">
                        Select your status
                      </option>
                      <option value="student" className="bg-[#0A0628] text-white">
                        Student / Fresher
                      </option>
                      <option value="working-it" className="bg-[#0A0628] text-white">
                        Working IT Professional
                      </option>
                      <option value="career-switcher" className="bg-[#0A0628] text-white">
                        Career Switcher
                      </option>
                      <option value="other" className="bg-[#0A0628] text-white">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 mx-auto block px-9 h-[48px] bg-white text-[#5022D9] hover:bg-white/90 font-medium text-[15px] rounded-none transition-all cursor-pointer shadow-md"
                >
                  Check my eligibility
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ───────────────── LEARN AWS BY BUILDING REAL WORLD SOLUTIONS ───────────────── */}
      <section className="relative z-10 py-20 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-[44px] font-medium tracking-tight">
            Learn AWS by Building Real World Solutions
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-white/70 font-normal">
            Explore practical project examples across different learning levels.
          </p>

          {/* 3 Level Cards (Figma Specs: 345.33w x 348.34h, border: 1px solid #D9B6FF12, bg: #FFFFFF12, rounded-none) */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-[1100px] mx-auto justify-items-center">
            {/* Card 1: Foundation */}
            <div className="bg-[#FFFFFF12] border border-[#D9B6FF12] rounded-none w-full max-w-[345.33px] min-h-[348.34px] p-7 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-white/10 text-white/80 text-[12px] font-medium px-3 py-1 rounded-none mb-4">
                  Foundation
                </span>
                <h3 className="text-white text-[22px] font-medium mb-6">Foundation Level</h3>
                <div className="divide-y divide-white/10 text-[15px] text-white/80">
                  <div className="py-4">AWS Cloud Infrastructure Setup</div>
                  <div className="py-4">Serverless Web Application</div>
                  <div className="py-4">AWS AI-Powered Chatbot</div>
                </div>
              </div>
            </div>

            {/* Card 2: Associate */}
            <div className="bg-[#FFFFFF12] border border-[#D9B6FF12] rounded-none w-full max-w-[345.33px] min-h-[348.34px] p-7 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-white/10 text-white/80 text-[12px] font-medium px-3 py-1 rounded-none mb-4">
                  Associate
                </span>
                <h3 className="text-white text-[22px] font-medium mb-6">Associate Level</h3>
                <div className="divide-y divide-white/10 text-[15px] text-white/80">
                  <div className="py-4">Highly Available E-Commerce Platform</div>
                  <div className="py-4">Cloud Data Engineering and Analytics Pipeline</div>
                  <div className="py-4">Machine Learning Prediction Platform</div>
                </div>
              </div>
            </div>

            {/* Card 3: Professional */}
            <div className="bg-[#FFFFFF12] border border-[#D9B6FF12] rounded-none w-full max-w-[345.33px] min-h-[348.34px] p-7 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-white/10 text-white/80 text-[12px] font-medium px-3 py-1 rounded-none mb-4">
                  Professional
                </span>
                <h3 className="text-white text-[22px] font-medium mb-6">Professional Level</h3>
                <div className="divide-y divide-white/10 text-[15px] text-white/80">
                  <div className="py-4">
                    Enterprise Multi-Region Cloud
                    <br className="hidden sm:inline" /> Architecture
                  </div>
                  <div className="py-4">
                    Automated DevOps and Container
                    <br className="hidden sm:inline" /> Platform
                  </div>
                  <div className="py-4">
                    Enterprise Generative AI and RAG
                    <br className="hidden sm:inline" /> Platform
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-[15px] text-white/70">
            Understand the concepts. Apply your skills. Document your work.
          </p>

          <button
            onClick={() => scrollToSection("eligibility-form")}
            className="mt-4 px-8 h-[48px] bg-[#6E3BFF] hover:bg-[#5d2ee5] text-white text-[15px] font-medium rounded-none transition-all cursor-pointer shadow-md inline-flex items-center justify-center"
          >
            Get course details
          </button>
        </div>
      </section>

      {/* ───────────────── A LEARNING PATHWAY FOR YOUR NEXT STEP ───────────────── */}
      <section className="relative z-10 py-20 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-[44px] font-medium tracking-tight">
            A Learning Pathway for Your Next Step.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Pathway 1 */}
            <div className="bg-[#FFFFFF08] border border-white/10 rounded-none p-8 flex flex-col justify-between hover:border-[#8B62FF]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/Academy/SVG11.png"
                      alt=""
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-white text-[20px] font-medium mb-3">
                  Students and Beginners
                </h3>
                <p className="text-white/60 text-[14px] leading-relaxed">
                  Start with cloud fundamentals and explore
                  <br className="hidden sm:inline" /> the Cloud Practitioner pathway.
                </p>
              </div>
            </div>

            {/* Pathway 2 */}
            <div className="bg-[#FFFFFF08] border border-white/10 rounded-none p-8 flex flex-col justify-between hover:border-[#8B62FF]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/Academy/SVG (1)14.png"
                      alt=""
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-white text-[20px] font-medium mb-3">
                  Fresh Graduates and Career Switchers
                </h3>
                <p className="text-white/60 text-[14px] leading-relaxed">
                  Develop practical AWS knowledge and
                  <br className="hidden sm:inline" /> build a foundation for exploring cloud-
                  <br className="hidden sm:inline" />related careers.
                </p>
              </div>
            </div>

            {/* Pathway 3 */}
            <div className="bg-[#FFFFFF08] border border-white/10 rounded-none p-8 flex flex-col justify-between hover:border-[#8B62FF]/50 transition-all">
              <div>
                <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <div className="relative w-6 h-6">
                    <Image
                      src="/Academy/SVG (2)12.png"
                      alt=""
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-white text-[20px] font-medium mb-3">
                  Working IT Professionals
                </h3>
                <p className="text-white/60 text-[14px] leading-relaxed">
                  Strengthen your cloud skills and explore an
                  <br className="hidden sm:inline" /> associate-level pathway suited to your
                  <br className="hidden sm:inline" /> experience.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-[15px] text-white/60">
            Not sure where to start? Our counsellor can help you explore the available options.
          </p>

          <button
            onClick={() => scrollToSection("eligibility-form")}
            className="mt-4 px-8 h-[48px] bg-[#6E3BFF] hover:bg-[#5d2ee5] text-white text-[15px] font-medium rounded-none transition-all cursor-pointer shadow-md inline-flex items-center justify-center"
          >
            Help me choose a pathway
          </button>
        </div>
      </section>

      {/* ───────────────── LEARN WITH EXPERT GUIDANCE ───────────────── */}
      <section className="relative z-10 py-16 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-[44px] font-medium tracking-tight">
            Learn with Expert Guidance
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-white/70 max-w-2xl mx-auto font-normal">
            Get the guidance, practical insights, and learning resources you need
            <br className="hidden sm:inline" /> to strengthen your AWS knowledge and prepare for certification.
          </p>

          {/* 4 Feature Cards (Exact Figma: rounded-none, icons matching screenshot) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {/* Box 1: Live mentor sessions -> u.png (Person) */}
            <div className="bg-[#FFFFFF08] border border-white/10 rounded-none p-5 flex items-center gap-3.5">
              <div className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src="/Academy/u.png"
                  alt=""
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <span className="text-white text-[15px] font-medium leading-snug">
                Live mentor sessions
              </span>
            </div>

            {/* Box 2: Dedicated doubt-clearing -> k.png (Checkmark) */}
            <div className="bg-[#FFFFFF08] border border-white/10 rounded-none p-5 flex items-center gap-3.5">
              <div className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src="/Academy/k.png"
                  alt=""
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <span className="text-white text-[15px] font-medium leading-snug">
                Dedicated doubt-clearing
              </span>
            </div>

            {/* Box 3: Recorded lessons for revision -> SVG (3)13.png (Video screen) */}
            <div className="bg-[#FFFFFF08] border border-white/10 rounded-none p-5 flex items-center gap-3.5">
              <div className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src="/Academy/SVG (3)13.png"
                  alt=""
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <span className="text-white text-[15px] font-medium leading-snug">
                Recorded lessons for revision
              </span>
            </div>

            {/* Box 4: Certification pathway guidance -> t (1).png (Bullseye target) */}
            <div className="bg-[#FFFFFF08] border border-white/10 rounded-none p-5 flex items-center gap-3.5">
              <div className="relative w-6 h-6 flex-shrink-0">
                <Image
                  src="/Academy/t (1).png"
                  alt=""
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>
              <span className="text-white text-[15px] font-medium leading-snug">
                Certification pathway guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── MEET YOUR CLOUD INSTRUCTORS (With glowing atmospheric purple gradient) ───────────────── */}
      <section id="instructors" className="relative z-10 py-24 px-6 sm:px-8 overflow-hidden">
        {/* Glowing atmospheric purple gradient matching screenshot 3 */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(110,59,255,0.22)_0%,rgba(75,30,190,0.12)_45%,transparent_75%)] blur-[90px]" />

        <div className="max-w-[1100px] mx-auto relative z-10">
          <h2 className="text-white text-3xl sm:text-[44px] font-medium tracking-tight text-center mb-16">
            Meet Your Cloud Instructors
          </h2>

          <div className="space-y-16">
            {/* Instructor 1: Ankit Bhadra */}
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-center">
              <div className="relative aspect-[382/473] max-w-[380px] w-full mx-auto rounded-none overflow-hidden border border-white/10 shadow-xl bg-[#111116]">
                <Image
                  src="/Academy/ankit-bhadra-figma.png"
                  alt="Ankit Bhadra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-[#D9B6FF] text-[16px] font-normal leading-[25.6px] tracking-[0.2px] block max-w-[520px]">
                  Pre-Sales Cloud Solution Architect
                </span>
                <h3 className="text-white text-3xl sm:text-[38px] font-semibold mt-1 mb-5">
                  Ankit Bhadra
                </h3>
                <p className="text-[#FFFFFFB2] text-[15px] sm:text-[16px] leading-[26px] font-normal mb-6 max-w-[520px]">
                  Ankit Bhadra is a multi-cloud consultant with over seven
                  <br className="hidden sm:inline" /> years of industry experience designing robust enterprise
                  <br className="hidden sm:inline" /> infrastructures. He specializes in driving digital
                  <br className="hidden sm:inline" /> transformations across AWS, Azure, and GCP ecosystems
                  <br className="hidden sm:inline" /> by implementing optimized multi-cloud architectures,
                  <br className="hidden sm:inline" /> strategic commercial frameworks, and advanced AI/ML
                  <br className="hidden sm:inline" /> capabilities.
                </p>
                <p className="text-[#FFFFFFB2] text-[15px] sm:text-[16px] leading-[26px] font-normal max-w-[520px]">
                  Holding elite credentials including an AWS Professional
                  <br className="hidden sm:inline" /> designation, four AWS Associate certificates, and three
                  <br className="hidden sm:inline" /> Azure certifications, Ankit leverages his deep technical
                  <br className="hidden sm:inline" /> expertise to guide organizations and mentor individuals
                  <br className="hidden sm:inline" /> building successful cloud careers.
                </p>
              </div>
            </div>

            {/* Instructor 2: Aritra Sen */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-center">
              <div className="text-left order-2 lg:order-1">
                <span className="text-[#D9B6FF] text-[16px] font-normal leading-[25.6px] tracking-[0.2px] block max-w-[520px]">
                  Sales & Digital Business Development Specialist
                </span>
                <h3 className="text-white text-3xl sm:text-[38px] font-semibold mt-1 mb-5">
                  Aritra Sen
                </h3>
                <p className="text-[#FFFFFFB2] text-[15px] sm:text-[16px] leading-[26px] font-normal mb-6 max-w-[520px]">
                  Aritra Sen is a senior business development
                  <br className="hidden sm:inline" /> professional with over sixteen years of industry
                  <br className="hidden sm:inline" /> experience driving technology sales initiatives. He
                  <br className="hidden sm:inline" /> specializes in enabling digital transformations across
                  <br className="hidden sm:inline" /> enterprise ecosystems by implementing strategic
                  <br className="hidden sm:inline" /> consulting frameworks, modern data engineering
                  <br className="hidden sm:inline" /> pipelines, and advanced cloud-native architectures.
                </p>
                <p className="text-[#FFFFFFB2] text-[15px] sm:text-[16px] leading-[26px] font-normal max-w-[520px]">
                  Holding a strong technical acumen in client
                  <br className="hidden sm:inline" /> acquisition, market expansion, and solution
                  <br className="hidden sm:inline" /> positioning, Aritra leverages his deep commercial
                  <br className="hidden sm:inline" /> expertise to guide organizations and mentor
                  <br className="hidden sm:inline" /> individuals building successful business careers.
                </p>
              </div>
              <div className="relative aspect-[382/473] max-w-[380px] w-full mx-auto rounded-none overflow-hidden border border-white/10 shadow-xl bg-[#111116] order-1 lg:order-2">
                <Image
                  src="/Academy/aritra-sen-figma.png"
                  alt="Aritra Sen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── PRICING: INVEST IN YOUR CERTIFICATION GOALS ───────────────── */}
      <section id="pricing" className="relative z-10 py-24 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto text-center">
          <span className="text-[#9D78FF] text-[12px] font-semibold tracking-widest uppercase">
            AWS CLOUD CERTIFICATION TRAINING
          </span>
          <h2 className="text-white font-medium text-4xl sm:text-[48px] leading-[52.8px] tracking-[-0.8px] text-center max-w-[782px] mx-auto mt-2">
            Invest in Your Certification Goals
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-white/70 max-w-2xl mx-auto font-normal">
            Choose a structured learning programme with mentor support, practical
            <br className="hidden sm:inline" /> projects, and exam-focused preparation for your AWS certification journey.
          </p>

          {/* 2 Cards Grid (Figma Specs: 419w, rounded-none) */}
          <div className="mt-14 max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-left items-start justify-items-center">
            {/* Card 1: Purple Fee Card (Figma Specs: 419w x 541h, bg #6E3BFF, opacity 0.99) */}
            <div className="bg-[#6E3BFF] w-full max-w-[419px] min-h-[541px] rounded-none p-8 sm:p-10 flex flex-col justify-between shadow-[0_10px_40px_rgba(110,59,255,0.3)] mx-auto opacity-[0.99]">
              <div>
                <h3 className="text-white font-medium text-[24px] leading-[28.8px] tracking-[-0.32px] max-w-[256px]">
                  AWS Cloud
                  <br className="hidden sm:inline" /> Certification Training
                </h3>
                <p className="text-white/80 text-[14px] mt-2 font-normal leading-relaxed">
                  Structured preparation for your selected
                  <br className="hidden sm:inline" /> certification pathway.
                </p>

                <div className="mt-6 mb-6">
                  <span className="text-white text-[40px] font-medium italic leading-[48px] tracking-[-2.4px]">
                    ₹4,000
                  </span>
                  <p className="text-white/70 text-[13px] mt-1 font-normal">Programme Fee</p>
                </div>

                <div className="divide-y divide-white/15 text-[14px] text-white">
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-white/80">Duration</span>
                    <span className="font-medium">24 weeks</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-white/80">Weekly Commitment</span>
                    <span className="font-medium">15–20 hours</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-white/80">Learning Mode</span>
                    <span className="font-medium">Offline / Hybrid</span>
                  </div>
                  <div className="py-2.5 flex justify-between items-center">
                    <span className="text-white/80">Next Batch</span>
                    <span className="font-medium">[Add confirmed date]</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("eligibility-form")}
                className="w-full h-[48px] bg-white text-[#6E3BFF] hover:bg-white/95 font-semibold text-[15px] rounded-none transition-all cursor-pointer shadow-md flex items-center justify-center mt-6"
              >
                Enquire about admission
              </button>
            </div>

            {/* Card 2: Black Offers Card (Figma Specs: 419w x 484h, bg #FFFFFF0D, opacity 0.95) */}
            <div className="bg-[#FFFFFF0D] border border-white/10 w-full max-w-[419px] min-h-[484px] rounded-none p-8 sm:p-10 flex flex-col justify-between mx-auto opacity-[0.95]">
              <div>
                <h3 className="text-white font-medium text-[24px] leading-[28.8px] tracking-[-0.32px] max-w-[256px]">
                  What the
                  <br className="hidden sm:inline" /> programme offers
                </h3>
                <p className="text-white/60 text-[14px] mt-2 mb-8 font-normal leading-relaxed">
                  Structured preparation for your selected
                  <br className="hidden sm:inline" /> certification pathway.
                </p>

                <div className="space-y-4">
                  {[
                    "Live mentor sessions and doubt-clearing",
                    "Weekly assessments and mock tests",
                    "Hands-on projects, by learning pathway",
                    "Recorded lessons for revision",
                    "Certification pathway guidance",
                  ].map((offer, i) => (
                    <div key={i} className="flex items-center gap-3.5">
                      <div className="w-6 h-6 rounded-none bg-[#FFFFFF0D] flex items-center justify-center flex-shrink-0">
                        <div className="relative w-4 h-4">
                          <Image
                            src="/Academy/k.png"
                            alt=""
                            fill
                            sizes="16px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <span className="text-white/85 text-[15px]">{offer}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection("faqs")}
                className="w-full h-[48px] bg-[#6E3BFF] hover:bg-[#5d2ee5] text-white font-medium text-[15px] rounded-none transition-all cursor-pointer shadow-md flex items-center justify-center mt-6"
              >
                Read the FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── FREQUENTLY ASKED QUESTIONS ───────────────── */}
      <section id="faqs" className="relative z-10 py-20 px-6 sm:px-8">
        <div className="max-w-[960px] mx-auto text-center">
          <h2 className="text-white text-4xl sm:text-[48px] font-medium tracking-[-0.8px] leading-[52.8px] text-center max-w-[386px] mx-auto">
            Frequently
            <br className="hidden sm:inline" /> asked questions
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-white/60 font-normal">
            Everything you need to know about the AWS Cloud Engineering Program.
          </p>

          <div className="mt-12 text-left divide-y divide-white/10">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 text-white hover:text-[#A37BFF] transition-colors cursor-pointer"
                  >
                    <span className="text-[17px] sm:text-[18px] font-normal leading-snug">
                      {faq.q}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#8B62FF]" : "text-white/60"
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-white/70 text-[15px] leading-relaxed pr-8 animate-fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────── TAKE YOUR NEXT STEP CTA BANNER (Using newsletter-background.svg.png) ───────────────── */}
      <section className="relative z-10 py-20 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto rounded-none relative overflow-hidden shadow-[0_20px_60px_rgba(81,35,212,0.4)] min-h-[340px] p-8 sm:p-14">
          {/* Background image: 68ea90227e6dfceb98fd993b_newsletter-background.svg.png */}
          <Image
            src="/Academy/68ea90227e6dfceb98fd993b_newsletter-background.svg.png"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1220px"
            className="object-cover pointer-events-none"
            priority
          />

          {/* Abstract decorative cards on right matching exact Figma specs */}
          <div className="absolute right-0 top-0 bottom-0 w-[580px] pointer-events-none hidden lg:flex flex-col justify-center gap-2 overflow-hidden pr-0">
            {/* Top row */}
            <div className="flex items-end gap-2 translate-y-[-10px]">
              <div className="w-[200px] h-[52px] rounded-[8px] bg-[#0000004D] flex-shrink-0" />
              <div className="relative w-[296px] h-[52px] rounded-[8px] overflow-hidden flex-shrink-0">
                <Image
                  src="/Academy/Container (9).png"
                  alt=""
                  fill
                  sizes="296px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle row: 296x175, radius 8px */}
            <div className="flex items-center gap-2">
              <div className="relative w-[296px] h-[175px] rounded-[8px] overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  src="/Academy/Container (8).png"
                  alt=""
                  fill
                  sizes="296px"
                  className="object-cover"
                />
              </div>
              <div className="w-[296px] h-[175px] rounded-[8px] bg-[#0000004D] flex-shrink-0 shadow-lg" />
            </div>

            {/* Bottom row */}
            <div className="flex items-start gap-2 translate-y-[10px]">
              <div className="w-[200px] h-[52px] rounded-[8px] bg-[#0000004D] flex-shrink-0" />
              <div className="relative w-[296px] h-[52px] rounded-[8px] overflow-hidden flex-shrink-0">
                <Image
                  src="/Academy/Container (10).png"
                  alt=""
                  fill
                  sizes="296px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-[620px]">
            <h2 className="text-white text-3xl sm:text-[44px] font-semibold tracking-tight leading-tight">
              Take Your Next Step into Cloud Computing
            </h2>
            <p className="mt-4 text-white/85 text-[15px] sm:text-[16px] leading-relaxed">
              Build practical AWS skills, learn with guidance, and prepare for your certification
              goals with Academix by AGS.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("eligibility-form")}
                className="px-7 h-[48px] bg-white text-[#5123d4] hover:bg-white/95 font-semibold text-[15px] rounded-none transition-all cursor-pointer shadow-lg"
              >
                Talk to a counsellor
              </button>
              <button
                onClick={() => scrollToSection("curriculum")}
                className="px-7 h-[48px] bg-[#2D2D2DB2] hover:bg-[#3d3d3db2] border border-white/20 text-white font-medium text-[15px] rounded-none transition-all cursor-pointer"
              >
                Course details
              </button>
            </div>

            <p className="mt-4 text-white/60 text-[12px]">
              Get clarity on the curriculum, learning mode, fees, and certification pathways before
              enrolling.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <footer className="relative z-10 border-t border-white/10 pt-12 pb-16 px-6 sm:px-8">
        <div className="max-w-[1220px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pb-10">
            {/* Left: Brand */}
            <div className="flex flex-col items-start">
              <Link href="/" className="inline-block">
                <span className="text-[22px] font-bold tracking-tight text-white leading-none">
                  ACADEMIX
                </span>
                <span className="text-[10px] text-white/50 tracking-wider uppercase font-medium block mt-1">
                  An AGS Product
                </span>
              </Link>
              <p className="text-white opacity-[0.99] font-normal text-[11px] leading-[14px] tracking-[0.2px] mt-3 max-w-[286px]">
                Certification depends on your preparation and exam performance.
              </p>
            </div>

            {/* Center: Slogan (Mathematically centered) */}
            <div className="text-white/70 text-[14px] font-normal text-center">
              Learn. Practise. Prepare. Progress.
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center justify-start md:justify-end gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                title="X (Twitter)"
              >
                <div className="relative w-4 h-4">
                  <Image
                    src="/Academy/Link - X.png"
                    alt="X"
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                </div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <div className="relative w-4 h-4">
                  <Image
                    src="/Academy/Link - Instagram.png"
                    alt="Instagram"
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                </div>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <div className="relative w-4 h-4">
                  <Image
                    src="/Academy/Link - facebook.png"
                    alt="Facebook"
                    fill
                    sizes="16px"
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-[12px]">
            © 2026 Amrut Global Solutions Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ───────────────── VIDEO MODAL ───────────────── */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#0F0A20] rounded-none overflow-hidden border border-white/20 shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
            <div className="aspect-[16/9] w-full relative bg-black">
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                src="/Academy/Digital_human_head_pulsing_light_202607031539.mp4"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
