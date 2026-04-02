"use client";

import { useCtaForm } from "@/components/CtaFormProvider";
import Image from "next/image";
import Link from "next/link";

const SERVICE_LINKS = [
  { label: "Web Development", service: "Web Development" },
  { label: "UI/UX Design", service: "UI/UX Design" },
  { label: "Branding", service: "Branding" },
  { label: "Digital Marketing", service: "AI-Powered Digital Marketing" },
];

function ServiceList() {
  const { openForm } = useCtaForm();
  return (
    <ul className="mt-5 space-y-3 text-[1rem] text-white/85">
      {SERVICE_LINKS.map(({ label, service }) => (
        <li key={label}>
          <button
            type="button"
            onClick={() => openForm({ service, lockService: true })}
            className="transition hover:text-white hover:underline underline-offset-4"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

function CTAButton() {
  const { openForm } = useCtaForm();

  return (
    <button
      type="button"
      className="group inline-flex items-center gap-3 border border-white bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-700 hover:bg-transparent hover:text-white"
      onClick={() => openForm()}
    >
      <span>Create Your Digital Experience</span>
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

function SocialLink({ label }) {
  const icons = {
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z" />
      </svg>
    ),
    whatsapp: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.75.46 3.46 1.33 4.97L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.48 0 9.93-4.45 9.93-9.94A9.94 9.94 0 0 0 12.04 2zm0 18.08h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.81.83-3.03-.2-.31a8.1 8.1 0 0 1-1.25-4.3c0-4.47 3.64-8.13 8.12-8.13a8.13 8.13 0 0 1 .05 16.27zm4.46-6.05c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.57 4.08 3.61.57.25 1.01.4 1.36.51.57.18 1.08.15 1.49.09.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
    ),
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.64c0-3.08-1.64-4.52-3.83-4.52-1.77 0-2.56.98-3 1.66V8.5h-3.38V20h3.38v-6.4c0-.34.02-.68.13-.93.27-.68.9-1.38 1.95-1.38 1.37 0 1.92 1.04 1.92 2.57V20H21V12.64h-.56z" />
      </svg>
    ),
    facebook: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.49-1.46H16.7V4.96c-.3-.04-1.33-.12-2.52-.12-2.5 0-4.2 1.53-4.2 4.33V11H7.3v3h2.68v8h3.52z" />
      </svg>
    ),
  };

  const links = {
    instagram:
      "https://www.instagram.com/amrutglobalsolutions?igsh=MWpzenZuY3MwNGcyZA==",
    whatsapp: "https://wa.me/919038130595",
    linkedin: "https://www.linkedin.com/company/the-ags/",
    facebook: "https://www.facebook.com/share/1DHd1rZUkd/",
  };

  return (
    <a
      href={links[label]}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-white transition hover:text-white/75"
    >
      {icons[label]}
    </a>
  );
}

export default function CTASection() {
  return (
    <section id="contact" className="relative z-10 w-full overflow-hidden pt-0">
      <div className="relative w-full border-t border-white/10">
        <div className="border-b border-white/10 px-6 py-8 sm:px-8 sm:py-12 lg:px-26 lg:py-14">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[720px]">
              <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
                Let&apos;s Work With Us
              </h2>
              <p className="mt-5 max-w-[620px] text-[1rem] leading-[1.75] text-white/78">
                Partner with AGS for web development, UI/UX design, branding,
                and digital solutions built to help your business grow.
              </p>
            </div>

            <div className="lg:pt-[5.9rem]">
              <CTAButton />
            </div>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-26 lg:py-12">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-[1.6fr_0.6fr_1fr]">
            <div className="max-w-[360px]">
              <Link
                href="/"
                className="inline-flex items-center"
              >
                <Image
                  src="/ags_logo.png"
                  alt="AGS logo"
                  width={132}
                  height={48}
                  className="h-auto w-[108px] sm:w-[120px]"
                />
              </Link>
              <p className="mt-4 text-[1rem] leading-[1.6] text-white/82">
                Modern design, seamless user experience, and optimized SEO to
                turn your ideas into high-performing digital platforms.
              </p>
            </div>

            <div>
              <h3 className="text-[1.2rem] font-medium text-white">Services</h3>
              <ServiceList />
            </div>

            <div>
              <h3 className="text-[1.2rem] font-medium text-white">
                Get in touch
              </h3>
              <div className="mt-5 space-y-4 text-[1rem] text-white/85">
                <a
                  href="tel:+919038130595"
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <span className="mt-1 text-white/60">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.25a2 2 0 0 1 2.11-.45c.85.33 1.73.56 2.63.68A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>+91 90381 30595</span>
                </a>

                <a
                  href="mailto:hello@amrutglobalsolutions.com"
                  className="flex items-start gap-3 transition hover:text-white"
                >
                  <span className="mt-1 text-white/60">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                      <path d="m22 7-10 7L2 7" />
                    </svg>
                  </span>
                  <span>hello@amrutglobalsolutions.com</span>
                </a>

                <div className="flex items-start gap-3">
                  <span className="mt-1 text-white/60">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
                      <circle cx="12" cy="11" r="2.2" />
                    </svg>
                  </span>
                  <span>1119A, PS QUBE, Newtown, Kolkata, West Bengal 700161</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-18 sm:gap-6 sm:pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 text-[0.95rem] text-white/76 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <span>
                &copy; 2026 Amrut Global Solutions Pvt. Ltd. All rights reserved.
              </span>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div>

            <div className="flex items-center gap-5">
              <SocialLink label="instagram" />
              <SocialLink label="whatsapp" />
              <SocialLink label="linkedin" />
              <SocialLink label="facebook" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
