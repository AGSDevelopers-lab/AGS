"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import CTASection from "@/components/CTASection";

const CONTACT_INFO = [
  {
    title: "Email Us",
    value: "hello@amrutglobalsolutions.com",
    hint: "We reply within 24 hours",
    href: "mailto:hello@amrutglobalsolutions.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    value: "+91 9038130595",
    hint: "Mon–Fri, 10am–7pm IST",
    href: "tel:+919038130595",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Visit Us",
    value: "Kolkata, India",
    hint: "Available for remote clients worldwide",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Working Hours",
    value: "Mon – Fri, 10:00 – 19:00",
    hint: "Weekend support for active projects",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6V12L16 14" />
      </svg>
    ),
  },
];

const WHY_AGS = [
  "End-to-end design & development under one roof",
  "Transparent communication & agile workflow",
  "Cutting-edge tech stack (React, AI/ML, Cloud)",
  "Proven track record with 50+ successful projects",
  "Dedicated project manager for every engagement",
  "Post-launch support & maintenance included",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });
  const router = useRouter();

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          { publicKey: emailjsPublicKey }
        );

        setFormData({ name: "", email: "", subject: "", message: "" });
        router.push("/thank-you");
        return;
      } catch (emailjsError) {
        console.warn("EmailJS direct send failed, trying API route fallback...", emailjsError);
      }
    }

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
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#020205_22%,#010103_48%,#000000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_16%,rgba(86,126,255,0.16),rgba(0,0,0,0)_18%),radial-gradient(circle_at_96%_14%,rgba(120,96,255,0.18),rgba(0,0,0,0)_18%),radial-gradient(circle_at_3%_48%,rgba(72,118,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_97%_54%,rgba(126,84,255,0.15),rgba(0,0,0,0)_18%)]" />
        <div className="absolute left-[-15%] top-[10%] h-144 w-144 rounded-full bg-[radial-gradient(circle,rgba(123,92,255,0.22)_0%,rgba(0,0,0,0)_70%)] blur-[90px] mix-blend-screen" />
        <div className="absolute right-[-15%] top-[25%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(86,126,255,0.2)_0%,rgba(0,0,0,0)_70%)] blur-[95px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[120px_120px]" />
      </div>

      <div className="relative z-10 w-full pt-16 lg:pt-24">
        {/* HERO */}
        <section className="relative w-full overflow-hidden border-b border-white/10 px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#7b5cff] font-semibold">
              Get in Touch
            </span>
            <h1 className="mt-4 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-5xl font-light tracking-tight text-transparent md:text-7xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              Have a project in mind or need a security audit? Tell us about your goals — we typically reply within one business day.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="group inline-flex items-center gap-3 border border-white bg-white px-6 py-3 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"
              >
                <span>Send a Message</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-700 group-hover:translate-y-0.5"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
              <a
                href="mailto:hello@amrutglobalsolutions.com"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-[0.95rem] font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                hello@amrutglobalsolutions.com
              </a>
            </div>
          </div>
        </section>

        {/* INFO CARDS */}
        <section className="relative z-20 mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-8 lg:px-26">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {CONTACT_INFO.map((item) => {
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? { href: item.href, className: "group block h-full" }
                : { className: "h-full" };

              return (
                <Wrapper key={item.title} {...wrapperProps}>
                  <div className="flex h-full flex-col items-center rounded-sm border border-white/5 bg-[#121225]/40 p-8 text-center transition duration-300 hover:border-[#9795FF]/25 hover:bg-[#121225]/60">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#9795FF]/30 bg-[#9795FF]/10 text-[#9795FF] transition group-hover:border-[#9795FF]/50 group-hover:bg-[#9795FF]/15">
                      {item.icon}
                    </div>
                    <h3 className="mb-2 text-[1.05rem] font-medium text-white">{item.title}</h3>
                    <p className="text-[0.92rem] font-light text-white/85">{item.value}</p>
                    <p className="mt-1.5 text-[0.75rem] font-light text-white/45">{item.hint}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </section>

        {/* FORM */}
        <section id="contact-form" className="mx-auto w-full max-w-[1400px] scroll-mt-28 px-6 pb-24 pt-4 sm:px-8 lg:px-26">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div className="rounded-sm border border-white/5 bg-[#0f0f1c]/50 p-8 md:p-10">
              <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#7b5cff] font-semibold">
                Start a Project
              </span>
              <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">
                Let&apos;s Start a Conversation
              </h2>
              <p className="mt-3 max-w-lg text-[0.92rem] leading-relaxed text-white/55">
                Share a few details about your project and we&apos;ll get back to you with next steps.
              </p>

              <form className="mt-10 flex flex-col space-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact-name" className="text-[0.82rem] text-white/65 font-light">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-sm border border-white/8 bg-white/[0.03] px-4 py-3.5 text-[0.95rem] text-white transition-colors focus:border-[#9795FF]/50 focus:bg-white/[0.05] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact-email" className="text-[0.82rem] text-white/65 font-light">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-sm border border-white/8 bg-white/[0.03] px-4 py-3.5 text-[0.95rem] text-white transition-colors focus:border-[#9795FF]/50 focus:bg-white/[0.05] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact-subject" className="text-[0.82rem] text-white/65 font-light">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-sm border border-white/8 bg-white/[0.03] px-4 py-3.5 text-[0.95rem] text-white transition-colors focus:border-[#9795FF]/50 focus:bg-white/[0.05] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="contact-message" className="text-[0.82rem] text-white/65 font-light">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full resize-none rounded-sm border border-white/8 bg-white/[0.03] px-4 py-3.5 text-[0.95rem] text-white transition-colors focus:border-[#9795FF]/50 focus:bg-white/[0.05] focus:outline-none"
                  />
                </div>

                {submitMessage.text && (
                  <p className={`text-[0.85rem] ${submitMessage.type === "error" ? "text-red-400" : "text-green-400"}`}>
                    {submitMessage.text}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-3 border border-white bg-white px-6 py-3.5 text-[0.95rem] font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white disabled:opacity-70 disabled:hover:bg-white disabled:hover:text-black"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <svg
                      width="20"
                      height="20"
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
              </form>
            </div>

            <div className="flex flex-col justify-between rounded-sm border border-white/5 bg-[#121225]/30 p-8 md:p-10">
              <div>
                <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#7b5cff] font-semibold">
                  Why AGS
                </span>
                <h3 className="mt-3 text-2xl font-light text-white md:text-[1.75rem]">
                  Why Work With Us?
                </h3>
                <ul className="mt-8 space-y-4">
                  {WHY_AGS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.92rem] font-light leading-relaxed text-white/70">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9795FF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[0.85rem] font-light text-white/50">Prefer a quick chat?</p>
                <a
                  href="tel:+919038130595"
                  className="mt-2 inline-flex items-center gap-2 text-[1.05rem] text-white transition hover:text-[#9795ff]"
                >
                  +91 9038130595
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-10 w-full">
        <CTASection />
      </div>
    </main>
  );
}
