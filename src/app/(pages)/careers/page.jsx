"use client";

import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";

export default function CareersPage() {
   const { openForm } = useCtaForm();

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
            {/* ══════════════════════════════════════════════════════════ */}
            {/* 1. HERO SECTION                                          */}
            {/* ══════════════════════════════════════════════════════════ */}
            <section className="relative w-full min-h-[90vh] flex items-center justify-center -mt-24 pt-24 overflow-hidden border-b border-white/10">
               <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f]/80 via-black/50 to-[#020205]" />
               </div>

               <div className="relative z-10 max-w-4xl px-6 text-center">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-tight">
                     Join the Team!
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                     Be part of a passionate team building the future of digital solutions.
                  </p>
                  <button
                     onClick={() => openForm()}
                     className="mx-auto group flex items-center space-x-3 border border-white bg-white px-6 py-3 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"
                  >
                     <span>Get Started</span>
                     <svg
                        width="29"
                        height="29"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform duration-700 group-hover:rotate-45"
                     >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                     </svg>
                  </button>
               </div>
            </section>

            {/* ══════════════════════════════════════════════════════════ */}
            {/* 2. WHY AGS IS A GREAT PLACE TO WORK                      */}
            {/* ══════════════════════════════════════════════════════════ */}
            <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto">
               <div className="text-center mb-6">
                  <h2 className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Culture &amp; Values</h2>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
                     Why we make AGS a great place to work?
                  </h3>
               </div>
               <div className="max-w-3xl mx-auto mt-10">
                  <p className="text-[1.05rem] text-white/70 leading-[1.9] font-light text-center">
                     At AGS, we believe that great products come from great teams. Our culture is rooted in innovation, collaboration, and mutual respect. We foster an environment where every voice is heard, ideas are celebrated, and growth is a shared journey. Whether you&apos;re a seasoned professional or just starting out, AGS offers you the space to do your best work — with people who genuinely care about what they build and who they build it with.
                  </p>
               </div>
            </section>

            {/* ══════════════════════════════════════════════════════════ */}
            {/* 3. WHAT'S IN FOR YOU — BENEFITS GRID                     */}
            {/* ══════════════════════════════════════════════════════════ */}
            <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
               <div className="text-center mb-14">
                  <h2 className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Benefits</h2>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
                     What&apos;s in for you?
                  </h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {/* Card 1 — Flexible Work */}
                  <div className="glass-card glass-card-hover rounded-sm p-8 flex flex-col items-start group">
                     <div className="w-12 h-12 rounded-lg bg-[#7B5CFF]/15 flex items-center justify-center mb-5 group-hover:bg-[#7B5CFF]/25 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
                           <path d="M12 7v5l3 3" />
                        </svg>
                     </div>
                     <h4 className="text-[1.1rem] font-medium text-white mb-2">Flexible Work Environment</h4>
                     <p className="text-white/55 text-[0.85rem] leading-relaxed font-light">
                        Work when and where you&apos;re most productive. We offer flexible hours and remote-friendly options to fit your lifestyle.
                     </p>
                  </div>

                  {/* Card 2 — Learning & Growth */}
                  <div className="glass-card glass-card-hover rounded-sm p-8 flex flex-col items-start group">
                     <div className="w-12 h-12 rounded-lg bg-[#7B5CFF]/15 flex items-center justify-center mb-5 group-hover:bg-[#7B5CFF]/25 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                           <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                     </div>
                     <h4 className="text-[1.1rem] font-medium text-white mb-2">Continuous Learning &amp; Growth</h4>
                     <p className="text-white/55 text-[0.85rem] leading-relaxed font-light">
                        Access to courses, workshops, and mentorship programs to sharpen your skills and advance your career.
                     </p>
                  </div>

                  {/* Card 3 — Team-First Culture */}
                  <div className="glass-card glass-card-hover rounded-sm p-8 flex flex-col items-start group">
                     <div className="w-12 h-12 rounded-lg bg-[#7B5CFF]/15 flex items-center justify-center mb-5 group-hover:bg-[#7B5CFF]/25 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                           <circle cx="9" cy="7" r="4" />
                           <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                           <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                     </div>
                     <h4 className="text-[1.1rem] font-medium text-white mb-2">Team-First Culture</h4>
                     <p className="text-white/55 text-[0.85rem] leading-relaxed font-light">
                        Collaboration isn&apos;t just a buzzword here. We build together, support each other, and celebrate wins as a team.
                     </p>
                  </div>

                  {/* Card 4 — Creative Freedom */}
                  <div className="glass-card glass-card-hover rounded-sm p-8 flex flex-col items-start group">
                     <div className="w-12 h-12 rounded-lg bg-[#7B5CFF]/15 flex items-center justify-center mb-5 group-hover:bg-[#7B5CFF]/25 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M12 2L2 7l10 5 10-5-10-5z" />
                           <path d="M2 17l10 5 10-5" />
                           <path d="M2 12l10 5 10-5" />
                        </svg>
                     </div>
                     <h4 className="text-[1.1rem] font-medium text-white mb-2">Creative Freedom</h4>
                     <p className="text-white/55 text-[0.85rem] leading-relaxed font-light">
                        We encourage experimentation and out-of-the-box thinking. Your ideas have the power to shape real products.
                     </p>
                  </div>

                  {/* Card 5 — Competitive Compensation */}
                  <div className="glass-card glass-card-hover rounded-sm p-8 flex flex-col items-start group">
                     <div className="w-12 h-12 rounded-lg bg-[#7B5CFF]/15 flex items-center justify-center mb-5 group-hover:bg-[#7B5CFF]/25 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <line x1="12" y1="1" x2="12" y2="23" />
                           <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                     </div>
                     <h4 className="text-[1.1rem] font-medium text-white mb-2">Competitive Compensation</h4>
                     <p className="text-white/55 text-[0.85rem] leading-relaxed font-light">
                        We value your contributions and reward them fairly with competitive salaries, bonuses, and performance incentives.
                     </p>
                  </div>

                  {/* Card 6 — Health & Wellness */}
                  <div className="glass-card glass-card-hover rounded-sm p-8 flex flex-col items-start group">
                     <div className="w-12 h-12 rounded-lg bg-[#7B5CFF]/15 flex items-center justify-center mb-5 group-hover:bg-[#7B5CFF]/25 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                     </div>
                     <h4 className="text-[1.1rem] font-medium text-white mb-2">Health &amp; Wellness Support</h4>
                     <p className="text-white/55 text-[0.85rem] leading-relaxed font-light">
                        Comprehensive health benefits, wellness programs, and mental health support to keep you at your best.
                     </p>
                  </div>
               </div>
            </section>

            {/* ══════════════════════════════════════════════════════════ */}
            {/* 4. INTERESTED IN JOINING US AT AGS?                      */}
            {/* ══════════════════════════════════════════════════════════ */}
            <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
               <div className="glass-card rounded-sm p-10 md:p-16 text-center">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
                     Interested in joining us at AGS?
                  </h3>
                  <p className="text-white/70 text-[1.05rem] leading-relaxed max-w-2xl mx-auto mb-8 font-light">
                     We&apos;re always on the lookout for talented individuals who are passionate about technology and innovation. Send us your resume and let&apos;s start a conversation.
                  </p>
                  <a
                     href="mailto:careers@amrutglobalsolutions.com"
                     className="inline-flex items-center gap-3 text-[#9795FF] hover:text-white text-[1.1rem] font-medium transition-colors duration-300"
                  >
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                        <path d="m22 7-10 7L2 7" />
                     </svg>
                     <span>careers@amrutglobalsolutions.com</span>
                  </a>
               </div>
            </section>

            {/* ══════════════════════════════════════════════════════════ */}
            {/* 5. TESTIMONIALS FROM EMPLOYEES                           */}
            {/* ══════════════════════════════════════════════════════════ */}
            <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
               <div className="text-center mb-14">
                  <h2 className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Testimonials</h2>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
                     Don&apos;t just take our word for it
                  </h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                  {/* Testimonial 1 */}
                  <div className="glass-card glass-card-hover rounded-sm p-8 flex flex-col relative">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#7B5CFF]/30 mb-5 flex-shrink-0">
                        <path d="M3 21c3-6 3-10 3-14h4c0 4-1 8-4 14H3zm11 0c3-6 3-10 3-14h4c0 4-1 8-4 14h-3z" fill="currentColor" />
                     </svg>
                     <p className="text-white/70 text-[0.9rem] leading-[1.8] font-light mb-6 flex-1">
                        &ldquo;Joining AGS was a turning point in my career. The environment here is incredibly supportive — the leadership genuinely invests in your growth. I&apos;ve worked on projects I never imagined possible, and I&apos;ve grown more as a developer in one year here than in three years at my previous company.&rdquo;
                     </p>
                     <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                        <div className="w-10 h-10 rounded-full bg-[#7B5CFF]/20 flex items-center justify-center text-[#9795FF] text-sm font-semibold">
                           RS
                        </div>
                        <div>
                           <p className="text-white text-[0.85rem] font-medium">Rahul Sharma</p>
                           <p className="text-white/40 text-[0.75rem]">Senior Full-Stack Developer</p>
                        </div>
                     </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="glass-card glass-card-hover rounded-sm p-8 flex flex-col relative">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#7B5CFF]/30 mb-5 flex-shrink-0">
                        <path d="M3 21c3-6 3-10 3-14h4c0 4-1 8-4 14H3zm11 0c3-6 3-10 3-14h4c0 4-1 8-4 14h-3z" fill="currentColor" />
                     </svg>
                     <p className="text-white/70 text-[0.9rem] leading-[1.8] font-light mb-6 flex-1">
                        &ldquo;What I love most about AGS is the creative freedom. As a designer, I&apos;m trusted to explore bold ideas without being micromanaged. The team is collaborative, the feedback culture is healthy, and every project feels like a new adventure. It truly feels like a second home.&rdquo;
                     </p>
                     <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                        <div className="w-10 h-10 rounded-full bg-[#7B5CFF]/20 flex items-center justify-center text-[#9795FF] text-sm font-semibold">
                           PM
                        </div>
                        <div>
                           <p className="text-white text-[0.85rem] font-medium">Priya Mukherjee</p>
                           <p className="text-white/40 text-[0.75rem]">Lead UI/UX Designer</p>
                        </div>
                     </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="glass-card glass-card-hover rounded-sm p-8 flex flex-col relative">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#7B5CFF]/30 mb-5 flex-shrink-0">
                        <path d="M3 21c3-6 3-10 3-14h4c0 4-1 8-4 14H3zm11 0c3-6 3-10 3-14h4c0 4-1 8-4 14h-3z" fill="currentColor" />
                     </svg>
                     <p className="text-white/70 text-[0.9rem] leading-[1.8] font-light mb-6 flex-1">
                        &ldquo;I started as an intern and now lead a team of five. AGS believes in people — they don&apos;t just talk about growth, they actively create pathways for it. The flexible work culture lets me balance my personal life while doing meaningful work every single day.&rdquo;
                     </p>
                     <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                        <div className="w-10 h-10 rounded-full bg-[#7B5CFF]/20 flex items-center justify-center text-[#9795FF] text-sm font-semibold">
                           AD
                        </div>
                        <div>
                           <p className="text-white text-[0.85rem] font-medium">Arjun Das</p>
                           <p className="text-white/40 text-[0.75rem]">Engineering Team Lead</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* ══════════════════════════════════════════════════════════ */}
            {/* 6. HOW TO APPLY AT AGS — STEP BY STEP                    */}
            {/* ══════════════════════════════════════════════════════════ */}
            <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
               <div className="text-center mb-14">
                  <h2 className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Application Process</h2>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
                     How to apply at AGS?
                  </h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-5xl mx-auto">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center px-6 py-8">
                     <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#7B5CFF] bg-[#7B5CFF]/10 flex items-center justify-center mb-6">
                        <span className="text-[#9795FF] text-xl font-semibold">1</span>
                     </div>
                     <div className="hidden lg:block absolute top-[2.5rem] left-[calc(50%+2rem)] right-0 h-[2px] bg-gradient-to-r from-[#7B5CFF]/40 to-[#7B5CFF]/10" />
                     <h4 className="text-[1rem] font-medium text-white mb-2">Submit Your Application</h4>
                     <p className="text-white/50 text-[0.82rem] leading-relaxed font-light">
                        Send us your resume and portfolio via email or our online form. Tell us about yourself and the role you&apos;re interested in.
                     </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center text-center px-6 py-8">
                     <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#7B5CFF] bg-[#7B5CFF]/10 flex items-center justify-center mb-6">
                        <span className="text-[#9795FF] text-xl font-semibold">2</span>
                     </div>
                     <div className="hidden lg:block absolute top-[2.5rem] left-[calc(50%+2rem)] right-0 h-[2px] bg-gradient-to-r from-[#7B5CFF]/40 to-[#7B5CFF]/10" />
                     <h4 className="text-[1rem] font-medium text-white mb-2">Initial Screening</h4>
                     <p className="text-white/50 text-[0.82rem] leading-relaxed font-light">
                        Our HR team reviews your application and schedules a brief introductory call to understand your goals and expectations.
                     </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col items-center text-center px-6 py-8">
                     <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#7B5CFF] bg-[#7B5CFF]/10 flex items-center justify-center mb-6">
                        <span className="text-[#9795FF] text-xl font-semibold">3</span>
                     </div>
                     <div className="hidden lg:block absolute top-[2.5rem] left-[calc(50%+2rem)] right-0 h-[2px] bg-gradient-to-r from-[#7B5CFF]/40 to-[#7B5CFF]/10" />
                     <h4 className="text-[1rem] font-medium text-white mb-2">Technical Interview</h4>
                     <p className="text-white/50 text-[0.82rem] leading-relaxed font-light">
                        A hands-on discussion with our engineering team to assess your skills, problem-solving approach, and cultural fit.
                     </p>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex flex-col items-center text-center px-6 py-8">
                     <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#9795FF] bg-[#9795FF]/15 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(123,92,255,0.25)]">
                        <span className="text-white text-xl font-semibold">4</span>
                     </div>
                     <h4 className="text-[1rem] font-medium text-white mb-2">Welcome to AGS!</h4>
                     <p className="text-white/50 text-[0.82rem] leading-relaxed font-light">
                        Once selected, you&apos;ll receive your offer letter and begin your onboarding journey with us. Welcome aboard!
                     </p>
                  </div>
               </div>

               {/* Mobile connector lines */}
               <div className="block lg:hidden max-w-5xl mx-auto">
                  <div className="flex justify-center">
                     <div className="w-[2px] h-0 bg-transparent" />
                  </div>
               </div>
            </section>

            {/* ══════════════════════════════════════════════════════════ */}
            {/* 7. WE WANT TO HEAR FROM YOU                              */}
            {/* ══════════════════════════════════════════════════════════ */}
            <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
               <div className="text-center">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
                     We want to hear from you!
                  </h3>
                  <p className="text-white/70 text-[1.05rem] leading-relaxed max-w-2xl mx-auto mb-8 font-light">
                     Have a question about working at AGS? Curious about our culture, roles, or anything else? Don&apos;t hesitate to reach out — we&apos;d love to connect.
                  </p>
                  <button
                     onClick={() => openForm()}
                     className="group inline-flex items-center gap-3 border border-white bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-700 hover:bg-transparent hover:text-white"
                  >
                     <span>Get in Touch</span>
                     <svg
                        width="29"
                        height="29"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform duration-700 group-hover:rotate-45"
                     >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                     </svg>
                  </button>
               </div>
            </section>

            {/* ══════════════════════════════════════════════════════════ */}
            {/* 8. INTERNSHIP PROGRAM                                    */}
            {/* ══════════════════════════════════════════════════════════ */}
            <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto border-t border-white/5">
               <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 items-start">
                  <div className="inline-block w-fit">
                     <h2 className="text-4xl lg:text-[42px] font-normal leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] tracking-wide">
                        Internship<br />Program
                     </h2>
                  </div>
                  <div className="flex flex-col space-y-6">
                     <div>
                        <h3 className="text-2xl md:text-3xl font-normal mb-6 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent tracking-wide inline-block">
                           Grow Your Career with Our Internship Program
                        </h3>
                     </div>
                     <p className="text-[0.95rem] text-white/70 leading-[1.8] font-light">
                        Our internship program is designed to give you real-world experience from day one. You won&apos;t be fetching coffee — you&apos;ll be writing code, designing interfaces, and contributing to live projects alongside our senior team members. We believe that the best way to learn is by doing, and our structured mentorship ensures you&apos;re never left without guidance.
                     </p>
                     <p className="text-[0.95rem] text-white/70 leading-[1.8] font-light">
                        Whether you&apos;re still in college or a fresh graduate, our internship offers a clear pathway to a full-time role at AGS. Many of our current team leads started as interns — and we&apos;re proud of that legacy.
                     </p>

                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <div className="glass-card rounded-sm p-5 text-center">
                           <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] mb-1">3–6</div>
                           <p className="text-white/50 text-[0.78rem] font-light">Months Duration</p>
                        </div>
                        <div className="glass-card rounded-sm p-5 text-center">
                           <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] mb-1">1:1</div>
                           <p className="text-white/50 text-[0.78rem] font-light">Mentor Assigned</p>
                        </div>
                        <div className="glass-card rounded-sm p-5 text-center">
                           <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] mb-1">85%</div>
                           <p className="text-white/50 text-[0.78rem] font-light">Convert to Full-Time</p>
                        </div>
                     </div>

                     <div className="pt-4">
                        <button
                           onClick={() => openForm()}
                           className="flex items-center space-x-2 bg-white text-black px-5 py-2.5 rounded-sm text-[0.8rem] font-semibold hover:bg-gray-200 transition"
                        >
                           <span>Apply for Internship</span>
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M10 8l4 4-4 4" />
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         {/* ══════════════════════════════════════════════════════════ */}
         {/* 9. CTA SECTION (Footer)                                  */}
         {/* ══════════════════════════════════════════════════════════ */}
         <div className="relative z-10 w-full">
            <CTASection />
         </div>
      </main>
   );
}
