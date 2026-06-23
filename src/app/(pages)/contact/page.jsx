"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
   const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });
   const router = useRouter();

   const handleChange = (e) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
      if (submitMessage.text) setSubmitMessage({ type: "", text: "" });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitMessage({ type: "", text: "" });

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
         setSubmitMessage({ type: "error", text: "Please enter a valid email address." });
         setIsSubmitting(false);
         return;
      }

      const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID";
      const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID";
      const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY";

      const useEmailJS =
         emailjsServiceId &&
         emailjsServiceId !== "YOUR_EMAILJS_SERVICE_ID" &&
         emailjsTemplateId &&
         emailjsTemplateId !== "YOUR_EMAILJS_TEMPLATE_ID" &&
         emailjsPublicKey &&
         emailjsPublicKey !== "YOUR_EMAILJS_PUBLIC_KEY";

      if (useEmailJS) {
         try {
            await emailjs.send(
               emailjsServiceId,
               emailjsTemplateId,
               {
                  name: formData.name,
                  email: formData.email,
                  phone: "N/A",
                  service: formData.subject,
                  message: formData.message,
               },
               {
                  publicKey: emailjsPublicKey,
               }
            );

            setFormData({ name: "", email: "", subject: "", message: "" });
            router.push("/thank-you");
            return;
         } catch (emailjsError) {
            console.warn("EmailJS direct send failed, trying API route fallback...", emailjsError);
         }
      }

      // API route fallback / primary call
      try {
         const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               name: formData.name,
               email: formData.email,
               phone: "N/A",
               service: formData.subject,
               message: formData.message,
            }),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || "Failed to submit contact enquiry.");
         }

         setFormData({ name: "", email: "", subject: "", message: "" });
         router.push("/thank-you");
      } catch (apiError) {
         console.error("Standalone form API error:", apiError);
         setSubmitMessage({
            type: "error",
            text: apiError.message || "Something went wrong. Please try again later.",
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-black pb-0">
         {/* Background Glows (Same as About Page) */}
         <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#020205_22%,#010103_48%,#000000_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_16%,rgba(86,126,255,0.16),rgba(0,0,0,0)_18%),radial-gradient(circle_at_96%_14%,rgba(120,96,255,0.18),rgba(0,0,0,0)_18%),radial-gradient(circle_at_3%_48%,rgba(72,118,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_97%_54%,rgba(126,84,255,0.15),rgba(0,0,0,0)_18%),radial-gradient(circle_at_2%_82%,rgba(82,130,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_98%_88%,rgba(128,88,255,0.14),rgba(0,0,0,0)_18%)]" />
            <div className="absolute left-[-14%] top-[12%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(104,158,255,1)_0%,rgba(56,112,255,0.82)_22%,rgba(24,70,255,0.34)_52%,rgba(0,0,0,0)_76%)] blur-[96px] mix-blend-screen" />
            <div className="absolute right-[-16%] top-[2%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(145,108,255,0.98)_0%,rgba(87,90,255,0.76)_24%,rgba(50,53,186,0.3)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
            <div className="absolute left-[-18%] top-[26%] h-168 w-2xl rounded-full bg-[radial-gradient(circle,rgba(98,156,255,1)_0%,rgba(55,118,255,0.8)_24%,rgba(25,72,255,0.34)_54%,rgba(0,0,0,0)_78%)] blur-[108px] mix-blend-screen" />
            <div className="absolute right-[-14%] top-[34%] h-144 w-xl rounded-full bg-[radial-gradient(circle,rgba(101,160,255,0.96)_0%,rgba(54,111,255,0.72)_24%,rgba(25,71,236,0.28)_56%,rgba(0,0,0,0)_78%)] blur-[96px] mix-blend-screen" />
            {/* Lower glows removed so they don't sit behind the form section */}
            <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[120px_120px]" />
         </div>

         <div className="relative z-10 w-full pt-16 lg:pt-24">
            {/* HERO SECTION */}
            <section className="relative w-full h-[100vh] min-h-[500px] flex items-center justify-center -mt-24 pt-24 overflow-hidden border-b border-white/10">
               <div className="absolute inset-0 z-0">
                  <Image
                     src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                     alt="Global network"
                     fill
                     sizes="100vw"
                     className="object-cover select-none opacity-40 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f]/80 via-black/50 to-[#020205] transition-opacity" />
               </div>

               <div className="relative z-10 max-w-4xl px-6 text-center">
                  <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
                     Contact Us
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                     Have a project in mind or just want to say hello? We&apos;d love to hear from you. Let&apos;s turn your ideas into reality.
                  </p>
                  <button className="mx-auto group flex items-center space-x-3 border border-white bg-white px-6 py-3 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white">
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

            {/* INFO CARDS SECTION */}
            <section className="w-full px-6 py-16 sm:px-8 lg:px-26 max-w-[1400px] mx-auto z-20 relative">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {/* Card 1 */}
                  <div className="bg-[#1a1a24]/80 border border-white/5 backdrop-blur-md p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-500 rounded-sm">
                     <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-[#e3e3eb] shadow-sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#40386e" strokeWidth="1.5"><path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" /><rect x="3" y="5" width="18" height="14" rx="2" /></svg>
                     </div>
                     <h3 className="text-[1.2rem] font-medium mb-3 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-[#ffffff] to-[#a890e6]">Email Us</h3>
                     <p className="text-white/90 font-light text-[0.95rem] mb-1">hello@amrutglobalsolutions.com</p>
                     <p className="text-white/50 text-[0.75rem] font-light">We reply within 24 hours</p>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-[#1a1a24]/80 border border-white/5 backdrop-blur-md p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-500 rounded-sm">
                     <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-[#e3e3eb] shadow-sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#40386e" strokeWidth="1.5"><path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" /><circle cx="12" cy="7" r="4" /></svg>
                     </div>
                     <h3 className="text-[1.2rem] font-medium mb-3 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-[#ffffff] to-[#a890e6]">Get in touch</h3>
                     <p className="text-white/90 font-light text-[0.95rem] mb-1">+91 90381 30595</p>
                     <p className="text-white/50 text-[0.75rem] font-light">Mon-Fri, 10am-7pm IST</p>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-[#1a1a24]/80 border border-white/5 backdrop-blur-md p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-500 rounded-sm">
                     <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-[#e3e3eb] shadow-sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#40386e" strokeWidth="1.5"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" /><circle cx="12" cy="10" r="3" /></svg>
                     </div>
                     <h3 className="text-[1.2rem] font-medium mb-3 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-[#ffffff] to-[#a890e6]">Visit Us</h3>
                     <p className="text-white/90 font-light text-[0.95rem] mb-1">1119A, PS QUBE, Newtown, Kolkata, West Bengal 700161</p>
                     <p className="text-white/50 text-[0.75rem] font-light">Available for remote clients</p>
                  </div>
                  {/* Card 4 */}
                  <div className="bg-[#1a1a24]/80 border border-white/5 backdrop-blur-md p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-500 rounded-sm">
                     <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-[#e3e3eb] shadow-sm">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#40386e" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6V12L16 14" /></svg>
                     </div>
                     <h3 className="text-[1.2rem] font-medium mb-3 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-[#ffffff] to-[#a890e6]">Working Hours</h3>
                     <p className="text-white/90 font-light text-[0.95rem] mb-1">10 am to 6 pm</p>
                     <p className="text-white/50 text-[0.75rem] font-light">Weekend support active projects</p>
                  </div>
               </div>
            </section>

            {/* FORM SECTION */}
            <section className="px-6 pb-24 pt-12 sm:px-8 lg:px-26 max-w-[1400px] mx-auto w-full">
               <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-stretch">
                  {/* Left Column (Form) */}
                  <div className="flex flex-col">
                     <h2 className="text-4xl md:text-[42px] lg:text-[48px] font-normal leading-[1.15] mb-10 tracking-wide">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9795ff] to-[#c4a8fa]">Let&apos;s Start</span><br />
                        <span className="text-white/90">a Conversation</span>
                     </h2>

                     <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-2.5">
                           <label className="text-[0.85rem] text-white/70 font-light">Your Name</label>
                           <input type="text" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} className="w-full bg-[#1e1e28] border border-white/[0.03] text-white text-[0.95rem] px-4 py-3.5 focus:outline-none focus:border-[#9795FF]/50 focus:bg-[#252532] rounded-sm transition-colors" />
                        </div>
                        <div className="flex flex-col space-y-2.5">
                           <label className="text-[0.85rem] text-white/70 font-light">Your Email</label>
                           <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} className="w-full bg-[#1e1e28] border border-white/[0.03] text-white text-[0.95rem] px-4 py-3.5 focus:outline-none focus:border-[#9795FF]/50 focus:bg-[#252532] rounded-sm transition-colors" />
                        </div>
                        <div className="flex flex-col space-y-2.5">
                           <label className="text-[0.85rem] text-white/70 font-light">Subject</label>
                           <input type="text" name="subject" value={formData.subject} onChange={handleChange} required disabled={isSubmitting} className="w-full bg-[#1e1e28] border border-white/[0.03] text-white text-[0.95rem] px-4 py-3.5 focus:outline-none focus:border-[#9795FF]/50 focus:bg-[#252532] rounded-sm transition-colors" />
                        </div>
                        <div className="flex flex-col space-y-2.5">
                           <label className="text-[0.85rem] text-white/70 font-light">Message</label>
                           <textarea name="message" value={formData.message} onChange={handleChange} required disabled={isSubmitting} rows={4} className="w-full bg-[#1e1e28] border border-white/[0.03] text-white text-[0.95rem] px-4 py-3.5 focus:outline-none focus:border-[#9795FF]/50 focus:bg-[#252532] resize-none rounded-sm transition-colors" />
                        </div>

                        {submitMessage.text && (
                           <p className={`text-[0.85rem] ${submitMessage.type === "error" ? "text-red-400" : "text-green-400"}`}>
                              {submitMessage.text}
                           </p>
                        )}

                        <div className="pt-4">
                           <button type="submit" disabled={isSubmitting} className="group inline-flex items-center space-x-3 bg-white px-6 py-3 font-medium text-black transition-all hover:bg-gray-200 rounded-sm text-[0.9rem] disabled:opacity-70 disabled:hover:bg-white">
                              <span>{isSubmitting ? "Sending..." : "Get Started"}</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                 <circle cx="12" cy="12" r="10" />
                                 <path d="M10 14l4-4m0 0h-4m4 0v4" />
                              </svg>
                           </button>
                        </div>
                     </form>
                  </div>

                  {/* Right Column (Why Work With AGS) */}
                  <div className="bg-[#1a1a24]/60 border border-white/5 p-8 md:p-12 flex flex-col justify-center rounded-sm">
                     <h3 className="text-[1.75rem] md:text-[2rem] font-normal mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#9795ff] to-[#c4a8fa] tracking-wide">
                        Why Work With AGS?
                     </h3>
                     
                     <ul className="space-y-5 text-white/80 font-light text-[0.95rem]">
                        <li className="flex items-start">
                           <span className="mr-3.5 mt-2 w-1 h-1 bg-white/70 rounded-full flex-shrink-0"></span>
                           <span className="leading-relaxed">End-to-end design & development under one roof</span>
                        </li>
                        <li className="flex items-start">
                           <span className="mr-3.5 mt-2 w-1 h-1 bg-white/70 rounded-full flex-shrink-0"></span>
                           <span className="leading-relaxed">Transparent communication & agile workflow</span>
                        </li>
                        <li className="flex items-start">
                           <span className="mr-3.5 mt-2 w-1 h-1 bg-white/70 rounded-full flex-shrink-0"></span>
                           <span className="leading-relaxed">Cutting-edge tech stack (React, AI/ML, Cloud)</span>
                        </li>
                        <li className="flex items-start">
                           <span className="mr-3.5 mt-2 w-1 h-1 bg-white/70 rounded-full flex-shrink-0"></span>
                           <span className="leading-relaxed">Proven track record with 50+ successful projects</span>
                        </li>
                        <li className="flex items-start">
                           <span className="mr-3.5 mt-2 w-1 h-1 bg-white/70 rounded-full flex-shrink-0"></span>
                           <span className="leading-relaxed">Dedicated project manager for every engagement</span>
                        </li>
                        <li className="flex items-start">
                           <span className="mr-3.5 mt-2 w-1 h-1 bg-white/70 rounded-full flex-shrink-0"></span>
                           <span className="leading-relaxed">Post-launch support & maintenance included</span>
                        </li>
                     </ul>

                     <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-white/80 text-[0.9rem] mb-2 font-light">Prefer a quick chat?</p>
                        <a href="mailto:hello@amrutglobalsolutions.com" className="text-white hover:text-[#9795ff] transition-colors flex items-center text-[0.95rem] font-normal">
                           hello@amrutglobalsolutions.com <span className="ml-2 font-light">&rarr;</span>
                        </a>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         <div className="relative z-10 w-full mt-auto">
            <CTASection />
         </div>
      </main>
   );
}
