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
        className="absolute inset-0 bg-[rgba(4,6,16,0.76)] backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative my-auto flex w-full max-w-[680px] flex-col overflow-hidden rounded-[22px] border border-white/16 bg-[linear-gradient(180deg,rgba(34,39,66,0.84)_0%,rgba(16,20,37,0.86)_100%)] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] sm:rounded-[28px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02)_36%,rgba(255,255,255,0)_68%)]" />
        <div className="pointer-events-none absolute -left-12 top-10 h-40 w-40 rounded-full bg-[#7f9dff]/24 blur-[80px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[-8%] h-48 w-48 rounded-full bg-[#a383ff]/24 blur-[90px]" />

        <div className="relative shrink-0 border-b border-white/10 px-4 py-3 sm:px-7 sm:py-5">
          <div className="flex items-start justify-between gap-4 sm:gap-6">
            <div className="max-w-[500px]">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/45">
                AGS Project Enquiry
              </p>
              <h3 className="mt-1.5 inline-block pb-1 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-[1.05rem] leading-[1.1] font-normal tracking-[-0.05em] text-transparent sm:mt-2 sm:pb-2 sm:text-[2rem]">
                {modalCopy.heading}
              </h3>
              <p className="mt-1 max-w-[430px] text-[0.84rem] leading-[1.5] text-white/72 sm:text-[0.92rem] sm:leading-[1.65]">
                {modalCopy.subtext}
              </p>
            </div>

            <button
              type="button"
              aria-label="Close form"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white/72 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white sm:h-10 sm:w-10"
              onClick={onClose}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative min-h-0 overflow-y-auto px-4 py-3 sm:px-7 sm:py-5">
          <form className="grid gap-2.5 sm:grid-cols-2 sm:gap-3" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-1.5 block text-[0.78rem] font-medium text-white/68 sm:mb-2 sm:text-[0.82rem]">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  disabled={isSubmitting}
                  className="w-full rounded-[14px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[0.92rem] text-white outline-none transition placeholder:text-white/28 focus:border-[#8a7aff] focus:bg-white/[0.06] sm:rounded-[16px] sm:px-4 sm:text-sm"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[0.78rem] font-medium text-white/68 sm:mb-2 sm:text-[0.82rem]">
                  Email address
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  className="w-full rounded-[14px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[0.92rem] text-white outline-none transition placeholder:text-white/28 focus:border-[#8a7aff] focus:bg-white/[0.06] sm:rounded-[16px] sm:px-4 sm:text-sm"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[0.78rem] font-medium text-white/68 sm:mb-2 sm:text-[0.82rem]">
                  Phone number
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  disabled={isSubmitting}
                  className="w-full rounded-[14px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[0.92rem] text-white outline-none transition placeholder:text-white/28 focus:border-[#8a7aff] focus:bg-white/[0.06] sm:rounded-[16px] sm:px-4 sm:text-sm"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[0.78rem] font-medium text-white/68 sm:mb-2 sm:text-[0.82rem]">
                  Service needed
                </span>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={config.lockService || isSubmitting}
                  className="w-full appearance-none rounded-[14px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[0.92rem] text-white outline-none transition focus:border-[#8a7aff] focus:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-100 sm:rounded-[16px] sm:px-4 sm:text-sm"
                  required
                >
                  <option value="" className="bg-[#0f1220] text-white">
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="bg-[#0f1220] text-white"
                    >
                      {option}
                    </option>
                  ))}
                </select>
                {config.lockService ? (
                  <span className="mt-1.5 block text-[0.72rem] text-white/45 sm:mt-2 sm:text-[0.76rem]">
                    This enquiry is linked to the selected service.
                  </span>
                ) : null}
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[0.78rem] font-medium text-white/68 sm:mb-2 sm:text-[0.82rem]">
                  Project details
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline, budget, or any features you already have in mind."
                  rows="2"
                  disabled={isSubmitting}
                  className="min-h-[88px] w-full rounded-[14px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[0.92rem] text-white outline-none transition placeholder:text-white/28 focus:border-[#8a7aff] focus:bg-white/[0.06] sm:min-h-[112px] sm:rounded-[16px] sm:px-4 sm:text-sm"
                  required
                />
              </label>

              {submitError ? (
                <p className="sm:col-span-2 text-sm leading-[1.6] text-[#ffb0b0]">
                  {submitError}
                </p>
              ) : null}

              <div className="sm:col-span-2 flex justify-end pt-0.5 sm:pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2.5 rounded border border-white bg-white px-4 py-2.5 text-[0.92rem] font-medium text-black transition hover:bg-transparent hover:text-white disabled:hover:bg-white disabled:hover:text-black sm:gap-3 sm:px-5 sm:py-3 sm:text-sm"
                >
                  <span>{isSubmitting ? "Sending..." : "Send enquiry"}</span>
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current text-[9px]">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </span>
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
