import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Web Development", slug: "website-development" },
  { label: "UI/UX Design", slug: "ui-ux-design" },
  { label: "Digital Solutions", slug: "digital-solutions" },
  { label: "AI Solutions", slug: "ai-solutions" },
  { label: "Cyber Security & VAPT", slug: "cyber-security" },
];

const AWS_BADGES = [
  {
    src: "/aws-cloud-quest-cloud-practitioner-training-badge.png",
    alt: "AWS Cloud Quest Cloud Practitioner",
  },
  {
    src: "/aws-knowledge-security-champion-training-badge.png",
    alt: "AWS Knowledge Security Champion",
  },
  {
    src: "/aws-partner-public-sector-for-sellers-business.png",
    alt: "AWS Partner Public Sector for Sellers",
  },
  {
    src: "/aws-partner-sales-accreditation-training-badge.png",
    alt: "AWS Partner Sales Accreditation",
  },
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919038130595",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.75.46 3.46 1.33 4.97L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.48 0 9.93-4.45 9.93-9.94A9.94 9.94 0 0 0 12.04 2zm0 18.08h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.81.83-3.03-.2-.31a8.1 8.1 0 0 1-1.25-4.3c0-4.47 3.64-8.13 8.12-8.13a8.13 8.13 0 0 1 .05 16.27zm4.46-6.05c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.57 4.08 3.61.57.25 1.01.4 1.36.51.57.18 1.08.15 1.49.09.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-ags/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.64c0-3.08-1.64-4.52-3.83-4.52-1.77 0-2.56.98-3 1.66V8.5h-3.38V20h3.38v-6.4c0-.34.02-.68.13-.93.27-.68.9-1.38 1.95-1.38 1.37 0 1.92 1.04 1.92 2.57V20H21V12.64h-.56z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DHd1rZUkd/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.49-1.46H16.7V4.96c-.3-.04-1.33-.12-2.52-.12-2.5 0-4.2 1.53-4.2 4.33V11H7.3v3h2.68v8h3.52z" />
      </svg>
    ),
  },
];

function FooterLinks({ title, children }) {
  return (
    <div>
      <h3 className="text-[1rem] font-medium text-white">{title}</h3>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full px-6 pb-10 pt-0 sm:px-8 lg:px-26">
      {/* Main links */}
      <div className="grid grid-cols-1 gap-10 py-10 sm:py-12 md:grid-cols-[1.5fr_0.8fr_0.8fr_1fr] md:gap-8 lg:gap-12">
        <div className="max-w-[360px]">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/ags_logo.png"
              alt="AGS logo"
              width={132}
              height={48}
              className="h-auto w-[108px] sm:w-[120px]"
            />
          </Link>
          <p className="mt-4 text-[0.95rem] leading-[1.7] text-white/60">
            Modern design, seamless user experience, and optimized solutions —
            built on AWS and Google Cloud infrastructure.
          </p>

          <div className="mt-6 flex items-center gap-6">
            <div className="relative h-6 w-14">
              <Image src="/aws.png" alt="AWS" fill sizes="56px" className="object-contain object-left opacity-90" />
            </div>
            <div className="relative h-6 w-32">
              <Image src="/google-cloud-image.png" alt="Google Cloud" fill sizes="128px" className="object-contain object-left opacity-90" />
            </div>
          </div>
        </div>

        <FooterLinks title="Company">
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-[0.92rem] text-white/65 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterLinks>

        <FooterLinks title="Services">
          <ul className="mt-4 space-y-2.5">
            {SERVICE_LINKS.map((item) => (
              <li key={item.label}>
                <Link href={`/services/${item.slug}`} className="text-[0.92rem] text-white/65 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterLinks>

        <FooterLinks title="Get in touch">
          <div className="mt-4 space-y-3 text-[0.92rem] text-white/65">
            <a href="tel:+919038130595" className="block transition hover:text-white">
              +91 90381 30595
            </a>
            <a href="mailto:hello@amrutglobalsolutions.com" className="block transition hover:text-white">
              hello@amrutglobalsolutions.com
            </a>
            <p className="leading-[1.6]">
              1119A, PS QUBE, Newtown,
              <br />
              Kolkata, West Bengal 700161
            </p>
          </div>
        </FooterLinks>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 text-[0.8rem] text-white/45 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
          <span>&copy; {new Date().getFullYear()} Amrut Global Solutions Pvt. Ltd.</span>
          {LEGAL_LINKS.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white/80">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-white/55 transition hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
