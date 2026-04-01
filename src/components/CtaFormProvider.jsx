"use client";

import emailjs from "@emailjs/browser";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";

const SERVICE_OPTIONS = [
  "Web Development",
  "UI/UX Design",
  "Branding",
  "Digital Solutions",
  "AI Automation & Business Systems",
  "AI-Powered Digital Marketing",
  "Web App Development",
  "AI Consulting & Training",
  "Website & Application Security",
  "Business Security & Data Protection",
  "Cyber Security Audits",
  "AI + Cyber Security",
  "Cyber Security Training",
];

const CtaFormContext = createContext(null);

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY";

function getModalCopy(service, lockService) {
  if (service && lockService) {
    return {
      heading: `Let's talk about ${service}`,
      subtext: "Share your details and we will get back to you shortly.",
    };
  }

  return {
    heading: "Start your next digital project",
    subtext: "Tell us what you need and our team will reach out soon.",
  };
}

function CtaFormModal({ isOpen, config, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: config.service || "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const modalCopy = useMemo(
    () => getModalCopy(config.service, config.lockService),
    [config.lockService, config.service]
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (submitError) {
      setSubmitError("");
    }

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitError("");
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      onClose();
      router.push("/thank-you");
    } catch (error) {
      setSubmitError(
        "We could not send your enquiry right now. Please verify your EmailJS keys and template IDs, then try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto px-3 py-3 sm:items-center sm:px-6 sm:py-4">
      <button
        type="button"
        aria-label="Close form overlay"
        className="absolute inset-0 bg-[rgba(4,6,16,0.82)] backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative my-auto flex w-full max-w-190 flex-col overflow-hidden border border-white/10 bg-[#0b0d1a] shadow-[0_60px_160px_rgba(0,0,0,0.7)] max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100dvh-3rem)]">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[linear-gradient(90deg,transparent_0%,#9795FF_30%,#ffffff_50%,#BE9FFF_70%,transparent_100%)]" />

        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#7f9dff]/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[#a383ff]/10 blur-[90px]" />

        {/* Header */}
        <div className="relative shrink-0 border-b border-white/8 px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#9795FF]" />
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9795FF]">
                  AGS Project Enquiry
                </p>
              </div>
              <h3 className="bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_50%,#BE9FFF_100%)] bg-clip-text text-[1.5rem] leading-[1.1] font-light tracking-[-0.04em] text-transparent sm:text-[2.2rem]">
                {modalCopy.heading}
              </h3>
              <p className="mt-3 max-w-105 text-[0.82rem] leading-[1.6] text-white/50 sm:text-[0.88rem]">
                {modalCopy.subtext}
              </p>
            </div>

            <button
              type="button"
              aria-label="Close form"
              className="group mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 text-white/50 transition-all duration-300 hover:border-white/40 hover:text-white sm:h-9 sm:w-9"
              onClick={onClose}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form body */}
        <div className="relative min-h-0 overflow-y-auto px-6 py-6 sm:px-10 sm:py-8">
          <form className="grid gap-0 sm:grid-cols-2" onSubmit={handleSubmit}>

            {/* Name */}
            <label className="group block border-b border-white/8 pb-5 pt-1 sm:border-r sm:border-b-0 sm:pr-8 sm:pb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[0.6rem] font-medium tracking-[0.2em] text-white/25">01</span>
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-white/45">Name</span>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                disabled={isSubmitting}
                className="w-full bg-transparent py-1 text-[1rem] text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:placeholder:text-white/10 sm:text-[1.05rem]"
                required
              />
              <div className="mt-3 h-px w-full bg-white/10 transition-all duration-300 group-focus-within:bg-[#9795FF]" />
            </label>

            {/* Email */}
            <label className="group block border-b border-white/8 pb-5 pt-1 sm:border-b-0 sm:pl-8 sm:pb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[0.6rem] font-medium tracking-[0.2em] text-white/25">02</span>
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-white/45">Email address</span>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                disabled={isSubmitting}
                className="w-full bg-transparent py-1 text-[1rem] text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:placeholder:text-white/10 sm:text-[1.05rem]"
                required
              />
              <div className="mt-3 h-px w-full bg-white/10 transition-all duration-300 group-focus-within:bg-[#9795FF]" />
            </label>

            {/* Phone */}
            <label className="group block border-b border-white/8 py-5 sm:border-r sm:border-b-0 sm:pr-8 sm:py-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[0.6rem] font-medium tracking-[0.2em] text-white/25">03</span>
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-white/45">Phone number</span>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                disabled={isSubmitting}
                className="w-full bg-transparent py-1 text-[1rem] text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:placeholder:text-white/10 sm:text-[1.05rem]"
                required
              />
              <div className="mt-3 h-px w-full bg-white/10 transition-all duration-300 group-focus-within:bg-[#9795FF]" />
            </label>

            {/* Service */}
            <label className="group block border-b border-white/8 py-5 sm:border-b-0 sm:pl-8 sm:py-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[0.6rem] font-medium tracking-[0.2em] text-white/25">04</span>
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-white/45">Service needed</span>
              </div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                disabled={config.lockService || isSubmitting}
                className="w-full appearance-none bg-transparent py-1 text-[1rem] text-white outline-none transition-all duration-300 disabled:cursor-not-allowed sm:text-[1.05rem] [&>option]:bg-[#0b0d1a] [&>option]:text-white"
                required
              >
                <option value="" className="text-white/40">Select a service</option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <div className="mt-3 h-px w-full bg-white/10 transition-all duration-300 group-focus-within:bg-[#9795FF]" />
              {config.lockService ? (
                <span className="mt-2 block text-[0.68rem] tracking-wide text-[#9795FF]/60">
                  Linked to selected service
                </span>
              ) : null}
            </label>

            {/* Message */}
            <label className="group block border-b border-white/8 py-5 sm:col-span-2 sm:border-b-0 sm:py-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[0.6rem] font-medium tracking-[0.2em] text-white/25">05</span>
                <span className="text-[0.72rem] uppercase tracking-[0.18em] text-white/45">Project details</span>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your goals, timeline, budget, or any features you have in mind."
                rows="2"
                disabled={isSubmitting}
                className="min-h-18 w-full resize-none bg-transparent py-1 text-[1rem] leading-relaxed text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:placeholder:text-white/10 sm:min-h-22 sm:text-[1.05rem]"
                required
              />
              <div className="mt-3 h-px w-full bg-white/10 transition-all duration-300 group-focus-within:bg-[#9795FF]" />
            </label>

            {submitError ? (
              <p className="sm:col-span-2 pt-2 text-[0.82rem] leading-[1.6] text-[#ffb0b0]">
                {submitError}
              </p>
            ) : null}

            {/* Submit */}
            <div className="sm:col-span-2 flex items-center justify-between pt-6 sm:pt-8">
              <p className="text-[0.7rem] tracking-wide text-white/25 max-w-50 sm:max-w-none">
                We&apos;ll respond within 24 hours.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center space-x-3 border border-white bg-white px-6 py-3 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white disabled:opacity-60 disabled:hover:bg-white disabled:hover:text-black"
              >
                <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
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
      </div>
    </div>
  );
}

export function CtaFormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState({
    service: "",
    lockService: false,
  });

  const openForm = ({ service = "", lockService = false } = {}) => {
    setConfig({
      service,
      lockService,
    });
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  const value = useMemo(
    () => ({
      openForm,
      closeForm,
      serviceOptions: SERVICE_OPTIONS,
    }),
    []
  );

  return (
    <CtaFormContext.Provider value={value}>
      {children}
      <CtaFormModal
        key={`${isOpen}-${config.service}-${config.lockService}`}
        isOpen={isOpen}
        config={config}
        onClose={closeForm}
      />
    </CtaFormContext.Provider>
  );
}

export function useCtaForm() {
  const context = useContext(CtaFormContext);

  if (!context) {
    throw new Error("useCtaForm must be used within a CtaFormProvider");
  }

  return context;
}
