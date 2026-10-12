"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCtaForm } from "@/components/CtaFormProvider";
import AwsSection from "@/components/aws";
import GcpSection from "@/components/gcp";
import CTASection from "@/components/CTASection";
import TeamSection from "@/components/TeamSection";

function GetStartedButton({ className, compact = false }) {
   const { openForm } = useCtaForm();

   if (compact) {
      return (
         <button
            type="button"
            onClick={() => openForm()}
            className={className ?? "flex items-center space-x-2 bg-white text-black px-5 py-2.5 rounded-sm text-[0.8rem] font-semibold hover:bg-gray-200 transition"}
         >
            <span>Get Started</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M10 8l4 4-4 4" /></svg>
         </button>
      );
   }

   return (
      <button
         type="button"
         onClick={() => openForm()}
         className={className ?? "mx-auto group flex items-center space-x-3 border border-white bg-white px-6 py-3 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"}
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
   );
}

const storyData = [
   {
      label: "2026",
      title: "Building What Scales Without You",
      description: "The focus has shifted. Less about doing more work — more about building systems that do the work. Cloud, AI, and automation are not trends for us; they are leverage.\nAmrut Global Solutions Pvt. Ltd. is building an ecosystem that attracts clients, not just chasing them.\nFrom working in the business to building something bigger than ourselves.",
      image: "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1776329452/a1979363c047062ed0a24d75c7d1677c5143a142_xbksul.png",
      isAGSLogo: true
   },
   {
      label: "Late 2025",
      title: "Accelerating Global Reach",
      description: "We expanded our reach to more global clients and strengthened our cloud partnerships — including AWS and Google Cloud. Our infrastructure underwent a major overhaul, with more robust enterprise applications, an agile delivery model, and deeper technology partnerships.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      isAGSLogo: false
   },
   {
      label: "2025",
      title: "Pioneering AI Integration",
      description: "We embraced AI across all our internal processes, reducing delivery time and increasing quality. This marked the beginning of our AI-as-a-Service model for our early adopters.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      isAGSLogo: false
   },
   {
      label: "2024",
      title: "Developing the Core Framework",
      description: "A year of building our signature framework. We focused heavily on R&D, designing the architectural foundation that would later become the backbone of our largest client deployments.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      isAGSLogo: false
   },
   {
      label: "2023",
      title: "The Inception",
      description: "Where it all started. A small team of passionate developers aiming to simplify software delivery. We took on our first few clients, learned valuable lessons, and set our vision for the future.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      isAGSLogo: false
   }
];

const carouselImages = [
   "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1776329446/7fba7a64ffdbe1ee1d3764efe4d0ffc0dd278d2c_c0m2sk.jpg",
   "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1776329447/5e059194c77e6aa26bd73df3aaf102aae8376ce9_irmvir.jpg",
   "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1776329448/ac204367c809cee699fe560c3b123fd262c3ec6a_o3sbrb.jpg",
   "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1776329449/f7772afb478d264bfc6184cc6e25913ed6acfe4e_voypbf.jpg"
];

export default function AboutPage() {
   const [activeStoryIndex, setActiveStoryIndex] = useState(0);

   return (
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-black pb-0">
         {/* Background Glows (Same as Home Page) */}
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
            {/* HERO SECTION */}
            <section className="relative w-full h-[100vh] min-h-[500px] flex items-center justify-center -mt-24 pt-24 overflow-hidden border-b border-white/10">
               <div className="absolute inset-0 z-0">
                  {/* Background image */}
                  <Image
                     src="https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1776329447/65a1e52cdd501c0325014c6ed34c72a4fdd6dfaf_uvtase.jpg"
                     alt="City building"
                     fill
                     sizes="100vw"
                     priority
                     className="object-cover select-none"
                  />
                  {/* Blackish on left fading to transparent to show image's real color */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent" />
               </div>

               <div className="relative z-10 max-w-4xl px-6 text-center">
                  <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
                     About Us
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                     A diverse team of innovators building scalable digital solutions — delivered with intelligence, precision, and honesty.
                  </p>
                  <GetStartedButton />
               </div>
            </section>

            {/* METRICS BENTO SECTION */}
            <section className="w-full py-16">
               <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-3 md:gap-4 h-auto lg:h-[600px] xl:h-[700px] w-full">
                  {/* Left Large Image */}
                  <div className="relative w-full h-[400px] lg:h-full overflow-hidden group">
                     <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Team working"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                     />
                  </div>

                  {/* Right Grid */}
                  <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-full">
                     {/* Top Left - Wireframe Image */}
                     <div className="relative overflow-hidden group bg-white">
                        <Image
                           src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
                           alt="Wireframes"
                           fill
                           sizes="(max-width: 1024px) 50vw, 25vw"
                           className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-luminosity"
                        />
                     </div>

                     {/* Top Right - Satisfied Clients */}
                     <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#1e1945] overflow-hidden relative">
                        <div className="absolute right-[-20%] bottom-[-40%] w-[120%] h-[120%] bg-white/[0.03] rounded-[100%] pointer-events-none"></div>
                        <div className="absolute right-[-10%] bottom-[-20%] w-[80%] h-[80%] bg-white/[0.04] rounded-[100%] pointer-events-none"></div>
                        <h3 className="text-lg sm:text-2xl font-normal text-white/90 leading-snug tracking-wide relative z-10">
                           We have 250+<br />Satisfied<br />Clients
                        </h3>
                        <div className="text-6xl sm:text-7xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] tracking-tight relative z-10">
                           250+
                        </div>
                     </div>

                     {/* Bottom Left - Satisfaction Rate */}
                     <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#2f2b3e] overflow-hidden relative">
                        <div className="absolute right-[-30%] bottom-[-50%] w-[140%] h-[140%] bg-white/[0.03] rounded-[100%] pointer-events-none"></div>
                        <div className="absolute right-[-15%] bottom-[-30%] w-[80%] h-[80%] bg-white/[0.04] rounded-[100%] pointer-events-none"></div>
                        <h3 className="text-lg sm:text-2xl font-normal text-white/90 leading-snug tracking-wide relative z-10">
                           Client<br />Satisfaction<br />Rate
                        </h3>
                        <div className="text-6xl sm:text-7xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] tracking-tight relative z-10">
                           98%
                        </div>
                     </div>

                     {/* Bottom Right - Phone Image */}
                     <div className="relative overflow-hidden group">
                        <Image
                           src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1974&auto=format&fit=crop"
                           alt="Mobile design"
                           fill
                           sizes="(max-width: 1024px) 50vw, 25vw"
                           className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                        />
                     </div>
                  </div>
               </div>
            </section>

            {/* OUR STORY SECTION */}
            <section className="px-6 py-20 sm:px-8 lg:px-26 w-full mx-auto border-t border-white/5 flex flex-col items-center">
               <div className="text-center mb-16">
                  <h2 className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">Our Story</h2>
                  <h3 className="text-3xl md:text-4xl font-light text-white">How we got here</h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 items-center max-w-5xl w-full">
                  {/* Timeline Nav */}
                  <div className="flex flex-col relative py-8 h-full justify-center">
                     {/* The track */}
                     <div className="absolute left-[0px] top-[15px] bottom-[15px] w-[2px] bg-white/40 -translate-x-[0.5px]" />

                     <div
                        className="absolute left-[-11.5px] top-[-10px] text-white/50 hover:text-white border border-transparent hover:border-white/20 rounded-full cursor-pointer p-1 z-10 bg-black/50 transition-colors"
                        onClick={() => setActiveStoryIndex(prev => Math.max(0, prev - 1))}
                     >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6" /></svg>
                     </div>

                     <div className="flex flex-col space-y-10 lg:space-y-12">
                        {storyData.map((item, index) => (
                           <div key={index} className="relative flex items-center group cursor-pointer" onClick={() => setActiveStoryIndex(index)}>
                              {/* The dot */}
                              {activeStoryIndex === index && (
                                 <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                                    <div className="w-[11px] h-[11px] rounded-full bg-white shadow-[0_0_10px_white]"></div>
                                    <div className="absolute w-[22px] h-[22px] rounded-full border border-white"></div>
                                 </div>
                              )}
                              {/* Year Text */}
                              <div className={`w-full text-center pr-4 pl-4 transition-all duration-300 ${activeStoryIndex === index ? "text-xl lg:text-2xl font-bold text-white tracking-wide" : "text-lg text-white/40 font-medium group-hover:text-white/70"
                                 }`}>
                                 {item.label}
                              </div>
                           </div>
                        ))}
                     </div>

                     <div
                        className="absolute left-[-11.5px] bottom-[-10px] text-white/50 hover:text-white border border-transparent hover:border-white/20 rounded-full cursor-pointer p-1 z-10 bg-black/50 transition-colors"
                        onClick={() => setActiveStoryIndex(prev => Math.min(storyData.length - 1, prev + 1))}
                     >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                     </div>
                  </div>

                  {/* Timeline Content */}
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center w-full">
                     <div className="flex-1 text-left">
                        <h3 className="text-3xl lg:text-4xl font-normal leading-tight mb-8">
                           {storyData[activeStoryIndex].title}
                        </h3>
                        <p className="text-[#a4a4af] lg:text-[1.05rem] leading-[1.8] font-light whitespace-pre-line pr-0 lg:pr-6">
                           {storyData[activeStoryIndex].description}
                        </p>
                     </div>

                     {/* Right graphic box */}
                     <div className="w-full lg:w-[400px] aspect-square relative flex items-center justify-center bg-transparent border-0 overflow-hidden">
                        {storyData[activeStoryIndex].isAGSLogo && (
                           <>
                              <div className="absolute inset-0 bg-[#0a0a1f] opacity-80 z-0"></div>
                              <Image
                                 src={storyData[activeStoryIndex].image}
                                 alt="Abstract mesh"
                                 fill
                                 sizes="(max-width: 1024px) 100vw, 400px"
                                 className="object-contain opacity-60 mix-blend-screen z-0 animate-in fade-in duration-700"
                              />
                              <div className="relative z-10 text-center animate-in zoom-in-95 duration-700">
                                 <div className="text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 mb-2">
                                    AGS
                                 </div>
                                 <div className="tracking-widest text-[#7b5cff] uppercase text-[10px] font-semibold">Your Vision, Our Innovation</div>
                              </div>
                           </>
                        )}
                        {!storyData[activeStoryIndex].isAGSLogo && (
                           <Image
                              src={storyData[activeStoryIndex].image}
                              alt={storyData[activeStoryIndex].title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 400px"
                              className="object-cover z-0 animate-in fade-in duration-700 rounded-none shadow-2xl"
                           />
                        )}
                     </div>
                  </div>
               </div>
            </section>

            {/* OUR VISION SECTION */}
            <section className="px-6 py-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto">
               <h2 className="text-base font-semibold text-white/90 tracking-widest mb-2">Our Vision</h2>
               <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] tracking-wide inline-block">
                  Honesty & Transparency
               </h3>

               <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-20 items-start mb-20">
                  <p className="text-[1.05rem] lg:text-[1.1rem] text-[#b6a2ff] leading-[1.8] font-light md:pr-4">
                     Our business is built on two principles: honesty and transparency. We deliver digital solutions powered by technology and innovation — but every step must be clear to our clients, and every quote must be fair.
                  </p>
                  <div className="flex flex-col space-y-6 text-[0.85rem] text-white/70 leading-relaxed font-light mt-1">
                     <p>We break down each client&apos;s vision and requirements, estimate the precise time required to complete the project, and determine pricing accordingly — nothing more, nothing less. Everything is shared and explained upfront.</p>
                     <p>Our aim is to improve people&apos;s lives through digital solutions while staying honest and transparent at every stage.</p>
                  </div>
               </div>

               <div className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-none md:rounded-sm overflow-hidden mb-20 border border-white/10">
                  {/* Values List */}
                  <div className="p-8 md:p-14 space-y-8 bg-[#1a1a24]">
                     <div className="flex items-start gap-4">
                        <div className="mt-2 w-3 h-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#a8a8bf)] shadow-sm flex-shrink-0"></div>
                        <p className="text-white/80 text-[0.85rem] leading-[1.6]">If a client&apos;s project idea doesn&apos;t align with their budget or deadline, we say so upfront.</p>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="mt-2 w-3 h-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#a8a8bf)] shadow-sm flex-shrink-0"></div>
                        <p className="text-white/80 text-[0.85rem] leading-[1.6]">If we need time to assemble the right team or expertise, we communicate that clearly before starting.</p>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="mt-2 w-3 h-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#a8a8bf)] shadow-sm flex-shrink-0"></div>
                        <p className="text-white/80 text-[0.85rem] leading-[1.6]">We only begin once both sides agree on scope, timeline, and expectations.</p>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="mt-2 w-3 h-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#a8a8bf)] shadow-sm flex-shrink-0"></div>
                        <p className="text-white/80 text-[0.85rem] leading-[1.6]">We work as your digital partner — committed to quality without compromise.</p>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="mt-2 w-3 h-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#a8a8bf)] shadow-sm flex-shrink-0"></div>
                        <p className="text-white/80 text-[0.85rem] leading-[1.6]">That&apos;s why our clients say AGS shapes dreams with honesty and transparency.</p>
                     </div>
                  </div>

                  {/* Right side picture */}
                  <div className="relative min-h-[300px] lg:min-h-full">
                     <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                        alt="Team meeting"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                     />
                  </div>
               </div>
            </section>

            <AwsSection />
            <GcpSection />

            {/* CULTURE / PEOPLE SECTION */}
            <section className="px-6 pb-20 sm:px-8 lg:px-26 max-w-[1400px] mx-auto overflow-hidden">
               {/* What we do best */}
               <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-8 lg:gap-12 mb-24 items-start">
                  <div className="inline-block w-fit">
                     <h2 className="text-4xl lg:text-[42px] font-normal leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] tracking-wide">
                        What we<br />do best
                     </h2>
                  </div>
                  <div className="flex flex-col space-y-8 text-[0.85rem] text-white/80 leading-[1.8] font-light pt-2 pl-0 md:pl-2">
                     <p>We start by listening — to your ideas, challenges, and requirements. We then break down the vision, research the market, and design a solution that stands out. We follow agile methodology and keep you informed at every step.</p>
                     <p>
                        To learn more about how we work, visit our{" "}
                        <Link href="/services" className="text-white underline underline-offset-4 transition hover:text-white/80">
                           Services
                        </Link>{" "}
                        page.
                     </p>

                     <div>
                        <GetStartedButton compact />
                     </div>
                  </div>
               </div>

               {/* People first always */}
               <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] xl:grid-cols-[240px_1fr] gap-8 lg:gap-12 mb-20 items-start">
                  <div className="inline-block w-fit">
                     <h2 className="text-4xl lg:text-[42px] font-normal leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] tracking-wide">
                        People first<br />always
                     </h2>
                  </div>
                  <div className="text-[0.85rem] text-white/80 leading-[1.8] font-light pt-2 pl-0 md:pl-2">
                     <p>AGS is more than an IT company. It&apos;s a team that has grown together over years — sharing ideas in code, design, marketing, and strategy. We&apos;re creators, problem-solvers, and a community of open-minded people who care about the work and each other.</p>
                  </div>
               </div>

            </section>

            <TeamSection />

            {/* Auto Image Carousel (Full Width) */}
            <div className="relative w-full overflow-hidden group pb-20 pt-4">



               <div className="flex gap-6 w-max animate-auto-scroll px-6">
                  {/* Group 1 */}
                  <div className="flex gap-6 flex-shrink-0">
                     {carouselImages.map((src, index) => (
                        <div key={index} className="relative w-[300px] md:w-[350px] lg:w-[420px] aspect-[4/3] rounded-md overflow-hidden flex-shrink-0">
                           <Image src={src} alt={`Culture image ${index + 1}`} fill sizes="(max-width:768px) 300px, (max-width:1024px) 350px, 420px" className="object-cover" />
                        </div>
                     ))}
                  </div>
                  {/* Group 2 */}
                  <div className="flex gap-6 flex-shrink-0">
                     {carouselImages.map((src, index) => (
                        <div key={index} className="relative w-[300px] md:w-[350px] lg:w-[420px] aspect-[4/3] rounded-md overflow-hidden flex-shrink-0">
                           <Image src={src} alt={`Culture image ${index + 1} clone`} fill sizes="(max-width:768px) 300px, (max-width:1024px) 350px, 420px" className="object-cover" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>

         </div>

         <div className="relative z-10 w-full">
            <CTASection />
         </div>
      </main>
   );
}
