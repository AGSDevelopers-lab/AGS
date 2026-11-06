"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { DM_Sans } from "next/font/google";
import emailjs from "@emailjs/browser";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (statusMessage.text) {
      setStatusMessage({ type: "", text: "" });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      setStatusMessage({
        type: "error",
        text: "Please agree to the Terms and Conditions to proceed.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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
            phone: formData.phone || "N/A",
            service: formData.subject || "General Inquiry",
            message: formData.message,
          },
          { publicKey: emailjsPublicKey }
        );

        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        router.push("/thank-you");
        return;
      } catch (err) {
        console.warn("EmailJS direct send failed, using API route fallback...", err);
      }
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
          subject: formData.subject || "General Inquiry",
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      router.push("/thank-you");
    } catch (apiError) {
      console.error("Contact Form submission error:", apiError);
      setStatusMessage({
        type: "error",
        text: apiError.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION ("Contact Us")
          Exact match to Figma export: dark vignette overlay, centered text,
          white rectangular CTA button with arrow
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-[580px] lg:h-[660px] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image: Smartphone and Laptop Workflow */}
        <Image
          src="/contact/hero-bg.png"
          alt="Contact AGS Workflow"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />

        {/* Ambient Dark Indigo Overlay matching Figma */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(8, 12, 28, 0.78) 0%, rgba(10, 14, 34, 0.88) 100%)",
          }}
        />

        {/* Centered Hero Content */}
        <div className="relative z-10 w-full max-w-[860px] mx-auto px-6 text-center">
          <ScrollReveal direction="down" distance={100} duration={1.1}>
            <h1
              className={`${dmSans.className} text-[48px] sm:text-[58px] md:text-[68px] leading-[1.12] font-normal tracking-tight text-white`}
            >
              Contact Us
            </h1>

            <p className="mt-5 text-[15.5px] sm:text-[17px] md:text-[18px] text-white/85 font-light leading-relaxed max-w-[620px] mx-auto">
              Have a project in mind or just want to say hello? We&apos;d love to hear from you.
              <br className="hidden sm:inline" /> Let&apos;s turn your ideas into reality.
            </p>

            {/* White Rectangular Get Started Button matching Figma */}
            <div className="mt-8 sm:mt-10 flex justify-center">
              <button
                type="button"
                onClick={scrollToForm}
                className="group inline-flex items-center gap-3 bg-white text-[#111111] px-8 py-3.5 font-medium text-[15px] shadow-xl hover:bg-white/95 hover:scale-[1.02] transition-all duration-300 rounded-none cursor-pointer"
              >
                <span>Get Started</span>
                <Image
                  src="/contact/uil_arrow-up.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TWO-COLUMN MAIN CONTACT SECTION
          Left: Let's Connect! + 4 Contact Cards
          Right: Connect With AGS + Underlined Form
          ───────────────────────────────────────────────────────────── */}
      <section
        id="contact-section"
        className="relative z-10 w-full py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* ─────────────────────────────────────────────────────────
                LEFT COLUMN: Contact Information & Details
                ───────────────────────────────────────────────────────── */}
            <ScrollReveal
              direction="left"
              distance={130}
              duration={1.2}
              className="lg:col-span-6 lg:pr-12 lg:border-r lg:border-[#ECEFF5]"
            >
              <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-normal tracking-tight text-[#111111] leading-[1.18]">
                <span className="text-[#854CFF]">Let&apos;s Connect!</span> Reach
                <br />
                Out Anytime!
              </h2>

              <p className="text-[#555E70] font-manrope font-light text-[14.5px] sm:text-[15px] leading-relaxed mt-4 mb-10 sm:mb-12 max-w-md">
                Lorem suspend vivamus enim netus conval Viverra iaculis erat auctor vulputate mollis Eget porta.
              </p>

              {/* 4 Detail Items with Official Figma Icons */}
              <div className="space-y-8 sm:space-y-9">
                {/* 1. Email Us */}
                <div className="flex items-center gap-5">
                  <div className="w-[52px] h-[52px] bg-[#EEF0FA] flex items-center justify-center shrink-0 rounded-none shadow-sm">
                    <Image
                      src="/contact/Headphone.png"
                      alt="Email"
                      width={24}
                      height={20}
                      className="w-6 h-5 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#111111] font-semibold text-[16px] sm:text-[17px] leading-tight">
                      Email Us
                    </h3>
                    <a
                      href="mailto:hello@ags.digital"
                      className="text-[#555E70] hover:text-[#854CFF] transition-colors text-[14.5px] sm:text-[15px] font-light mt-1 block"
                    >
                      hello@ags.digital
                    </a>
                  </div>
                </div>

                {/* 2. Contact Us */}
                <div className="flex items-center gap-5">
                  <div className="w-[52px] h-[52px] relative shrink-0 overflow-hidden rounded-none shadow-sm">
                    <Image
                      src="/contact/Overlay (2).png"
                      alt="Phone Support"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#111111] font-semibold text-[16px] sm:text-[17px] leading-tight">
                      Contact Us
                    </h3>
                    <a
                      href="tel:+919876543210"
                      className="text-[#555E70] hover:text-[#854CFF] transition-colors text-[14.5px] sm:text-[15px] font-light mt-1 block"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* 3. Visit Us */}
                <div className="flex items-center gap-5">
                  <div className="w-[52px] h-[52px] relative shrink-0 overflow-hidden rounded-none shadow-sm">
                    <Image
                      src="/contact/Overlay (1).png"
                      alt="Location"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#111111] font-semibold text-[16px] sm:text-[17px] leading-tight">
                      Visit Us
                    </h3>
                    <span className="text-[#555E70] text-[14.5px] sm:text-[15px] font-light mt-1 block">
                      kolkata, india
                    </span>
                  </div>
                </div>

                {/* 4. Working Hours */}
                <div className="flex items-center gap-5">
                  <div className="w-[52px] h-[52px] relative shrink-0 overflow-hidden rounded-none shadow-sm">
                    <Image
                      src="/contact/Overlay (3).png"
                      alt="Hours"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#111111] font-semibold text-[16px] sm:text-[17px] leading-tight">
                      Working Hours
                    </h3>
                    <span className="text-[#555E70] text-[14.5px] sm:text-[15px] font-light mt-1 block">
                      Mon – Fri, 10:00 – 19:00
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ─────────────────────────────────────────────────────────
                RIGHT COLUMN: Underlined Interactive Contact Form
                ───────────────────────────────────────────────────────── */}
            <ScrollReveal
              direction="right"
              distance={130}
              duration={1.2}
              className="lg:col-span-6 lg:pl-6"
            >
              <h2 className="text-[28px] sm:text-[34px] font-normal tracking-tight text-[#111111]">
                Connect With <span className="text-[#854CFF]">AGS</span>
              </h2>

              <p className="text-[#555E70] font-manrope font-light text-[14.5px] sm:text-[15px] leading-relaxed mt-2.5 mb-10">
                Whether you have a question about our brews or just want to share your story, we&apos;re here to listen.
              </p>

              {statusMessage.text && (
                <div
                  className={`mb-6 p-4 text-[14px] ${
                    statusMessage.type === "error"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                {/* 1. Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    required
                    disabled={isSubmitting}
                    className="w-full pb-3.5 bg-transparent border-b border-[#E5E7EB] text-[#111111] placeholder-[#777777] text-[15px] font-manrope focus:outline-none focus:border-[#854CFF] transition-colors"
                  />
                </div>

                {/* 2. Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    required
                    disabled={isSubmitting}
                    className="w-full pb-3.5 bg-transparent border-b border-[#E5E7EB] text-[#111111] placeholder-[#777777] text-[15px] font-manrope focus:outline-none focus:border-[#854CFF] transition-colors"
                  />
                </div>

                {/* 3. Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone*"
                    disabled={isSubmitting}
                    className="w-full pb-3.5 bg-transparent border-b border-[#E5E7EB] text-[#111111] placeholder-[#777777] text-[15px] font-manrope focus:outline-none focus:border-[#854CFF] transition-colors"
                  />
                </div>

                {/* 4. Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject*"
                    disabled={isSubmitting}
                    className="w-full pb-3.5 bg-transparent border-b border-[#E5E7EB] text-[#111111] placeholder-[#777777] text-[15px] font-manrope focus:outline-none focus:border-[#854CFF] transition-colors"
                  />
                </div>

                {/* 5. Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Message*"
                    required
                    disabled={isSubmitting}
                    className="w-full pb-3.5 bg-transparent border-b border-[#E5E7EB] text-[#111111] placeholder-[#777777] text-[15px] font-manrope focus:outline-none focus:border-[#854CFF] transition-colors resize-none"
                  />
                </div>

                {/* 6. Terms Checkbox */}
                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      required
                      className="w-4 h-4 rounded-none border-[#D1D5DB] text-[#854CFF] focus:ring-0 cursor-pointer"
                    />
                    <span className="text-[14px] text-[#555E70] font-manrope font-light">
                      I Agree To The{" "}
                      <span className="text-[#111111] font-normal underline hover:text-[#854CFF] transition-colors">
                        Terms And Conditions
                      </span>
                    </span>
                  </label>
                </div>

                {/* 7. Signature Dual-Block Submit Button matching Figma */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-stretch shadow-md hover:scale-[1.02] transition-transform duration-300 group cursor-pointer rounded-none disabled:opacity-70 disabled:hover:scale-100"
                  >
                    <div className="w-[52px] h-[52px] bg-white border border-[#6C38FF]/40 flex items-center justify-center text-[#111111] text-[18px] transition-colors group-hover:bg-[#FAF7FF]">
                      →
                    </div>
                    <div className="h-[52px] px-8 bg-gradient-to-r from-[#504CFF] to-[#480090] text-white flex items-center justify-center font-manrope font-medium text-[13px] tracking-widest uppercase transition-opacity group-hover:opacity-95">
                      {isSubmitting ? "SUBMITTING..." : "SUBMIT NOW"}
                    </div>
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CTA SECTION ("Let's work with Us")
          ───────────────────────────────────────────────────────────── */}
      <CTASection />

      {/* ─────────────────────────────────────────────────────────────
          4. GLOBAL FOOTER
          ───────────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
