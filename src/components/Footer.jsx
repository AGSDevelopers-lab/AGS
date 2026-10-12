"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Web Development", href: "/services/website-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Digital Solutions", href: "/services/digital-solutions" },
  { label: "Mobile App Development", href: "/services/mobile-apps" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "Cyber Security & VAPT", href: "/services/cyber-security" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/amrutglobalsolutions?igsh=MWpzenZuY3MwNGcyZA==",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919038130595",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.75.46 3.46 1.33 4.97L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.48 0 9.93-4.45 9.93-9.94A9.94 9.94 0 0 0 12.04 2zm0 18.08h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.81.83-3.03-.2-.31a8.1 8.1 0 0 1-1.25-4.3c0-4.47 3.64-8.13 8.12-8.13a8.13 8.13 0 0 1 .05 16.27zm4.46-6.05c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.57 4.08 3.61.57.25 1.01.4 1.36.51.57.18 1.08.15 1.49.09.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-ags/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.64c0-3.08-1.64-4.52-3.83-4.52-1.77 0-2.56.98-3 1.66V8.5h-3.38V20h3.38v-6.4c0-.34.02-.68.13-.93.27-.68.9-1.38 1.95-1.38 1.37 0 1.92 1.04 1.92 2.57V20H21V12.64h-.56z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();
  const footerRef = useRef(null);
  const columnsRef = useRef(null);
  const bottomBarRef = useRef(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      if (columnsRef.current) {
        tl.fromTo(
          columnsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }

      if (bottomBarRef.current) {
        tl.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
    },
    { scope: footerRef }
  );

  if (pathname === "/academy") return null;

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#080911] text-white border-t border-white/10 pt-16 pb-12"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
        {/* Main 3-column Links Section */}
        <div
          ref={columnsRef}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16 pb-14"
        >
          {/* Col 1: AGS Logo + Tagline */}
          <div className="max-w-[400px]">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/ags_logo.png"
                alt="AGS logo"
                width={132}
                height={48}
                className="h-auto w-[110px] sm:w-[124px]"
              />
            </Link>
            <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-white/70 font-normal">
              Modern design, seamless user experience, and optimized SEO to turn
              your ideas into high-performing digital platforms.
            </p>
          </div>

          {/* Col 2: Company */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wide">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wide">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          ref={bottomBarRef}
          className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-white/50"
        >
          {/* Copyright */}
          <div>
            <span>© 2026 Amrut Global Solutions Pvt. Ltd. All rights reserved.</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-white/60 transition-colors hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

