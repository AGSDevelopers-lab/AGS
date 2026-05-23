import Image from "next/image";
import Link from "next/link";

const AWS_BADGES = [
  {
    src: "/aws-cloud-quest-cloud-practitioner-training-badge.png",
    alt: "AWS Cloud Quest: Cloud Practitioner",
  },
  {
    src: "/aws-knowledge-security-champion-training-badge.png",
    alt: "AWS Knowledge: Security Champion",
  },
  {
    src: "/aws-partner-public-sector-for-sellers-business.png",
    alt: "AWS Partner: Public Sector for Sellers",
  },
  {
    src: "/aws-partner-sales-accreditation-training-badge.png",
    alt: "AWS Partner: Sales Accreditation",
  },
];

const SERVICE_LINKS = [
  { label: "Website Development", slug: "website-development" },
  { label: "UI/UX & Graphic Design", slug: "ui-ux-design" },
  { label: "Digital Solutions", slug: "digital-solutions" },
  { label: "Mobile App Development", slug: "mobile-app-development" },
  { label: "AI Solutions", slug: "ai-solutions" },
];

const SOCIAL_LINKS = [
  {
    label: "instagram",
    href: "https://www.instagram.com/amrutglobalsolutions?igsh=MWpzenZuY3MwNGcyZA==",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z" />
      </svg>
    ),
  },
  {
    label: "whatsapp",
    href: "https://wa.me/919038130595",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.75.46 3.46 1.33 4.97L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.48 0 9.93-4.45 9.93-9.94A9.94 9.94 0 0 0 12.04 2zm0 18.08h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.81.83-3.03-.2-.31a8.1 8.1 0 0 1-1.25-4.3c0-4.47 3.64-8.13 8.12-8.13a8.13 8.13 0 0 1 .05 16.27zm4.46-6.05c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.57 4.08 3.61.57.25 1.01.4 1.36.51.57.18 1.08.15 1.49.09.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
    ),
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/company/the-ags/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.64c0-3.08-1.64-4.52-3.83-4.52-1.77 0-2.56.98-3 1.66V8.5h-3.38V20h3.38v-6.4c0-.34.02-.68.13-.93.27-.68.9-1.38 1.95-1.38 1.37 0 1.92 1.04 1.92 2.57V20H21V12.64h-.56z" />
      </svg>
    ),
  },
  {
    label: "facebook",
    href: "https://www.facebook.com/share/1DHd1rZUkd/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.49-1.46H16.7V4.96c-.3-.04-1.33-.12-2.52-.12-2.5 0-4.2 1.53-4.2 4.33V11H7.3v3h2.68v8h3.52z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-background pt-20 pb-10 border-t border-white/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-50 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full px-6 sm:px-8 lg:px-26 relative z-10">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-[1.6fr_0.7fr_1fr]">
          {/* Logo + description */}
          <div>
            <Link href="/" className="inline-flex items-center mb-6">
              <Image
                src="/ags_logo.png"
                alt="AGS logo"
                width={132}
                height={48}
                className="h-auto w-27 sm:w-30"
              />
            </Link>
            <p className="text-gray-400 max-w-sm">
              Innovative digital solutions that transform businesses and help
              you prepare for the future.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {SERVICE_LINKS.map(({ label, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in touch</h3>
            <div className="space-y-4 text-[0.95rem] text-gray-400">
              <a
                href="tel:+919038130595"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <span className="mt-1 text-gray-500 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.25a2 2 0 0 1 2.11-.45c.85.33 1.73.56 2.63.68A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>+91 90381 30595</span>
              </a>

              <a
                href="mailto:hello@amrutglobalsolutions.com"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <span className="mt-1 text-gray-500 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                    <path d="m22 7-10 7L2 7" />
                  </svg>
                </span>
                <span>hello@amrutglobalsolutions.com</span>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-1 text-gray-500 shrink-0">
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

        {/* AWS Badges */}
        <div className="mb-12 flex flex-wrap items-center gap-6">
          {AWS_BADGES.map((badge) => (
            <Image
              key={badge.src}
              src={badge.src}
              alt={badge.alt}
              width={100}
              height={100}
              className="h-25 w-25 object-contain opacity-90 transition hover:opacity-100"
            />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Amrut Global Solutions Private Limited. All rights reserved.
            </p>
            <span className="hidden sm:block text-white/10">|</span>
            <div className="flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 px-3 py-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-purple-400 shrink-0">
                <path d="M12 2L4 5.5V11C4 15.418 7.582 19.418 12 21C16.418 19.418 20 15.418 20 11V5.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs text-purple-300 font-medium">
                MSME Certified · Govt. of India
              </span>
            </div>
            <span className="hidden sm:block text-white/10">|</span>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
