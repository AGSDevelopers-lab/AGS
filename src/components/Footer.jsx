import Link from "next/link";
import Image from "next/image";

const SERVICE_LINKS = [
  { label: "Web Development", href: "/services/website-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Digital Solutions", href: "/services/digital-solutions" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Cyber Security", href: "/services/cyber-security" },
];

const INDUSTRY_LINKS = [
  { label: "Healthcare", href: "/services" },
  { label: "E-Commerce", href: "/services" },
  { label: "Media & News", href: "/services" },
  { label: "EdTech", href: "/services" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-ags/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/amrutglobalsolutions?igsh=MWpzenZuY3MwNGcyZA==",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
  {
    label: "WhatsApp",
    href: "https://wa.me/919038130595",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.75.46 3.46 1.33 4.97L2 22l5.24-1.37a9.9 9.9 0 0 0 4.8 1.23h.01c5.48 0 9.93-4.45 9.93-9.94A9.94 9.94 0 0 0 12.04 2zm0 18.08h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.81.83-3.03-.2-.31a8.1 8.1 0 0 1-1.25-4.3c0-4.47 3.64-8.13 8.12-8.13a8.13 8.13 0 0 1 .05 16.27zm4.46-6.05c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.57 4.08 3.61.57.25 1.01.4 1.36.51.57.18 1.08.15 1.49.09.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A14] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-50 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6">
              <Image
                src="/ags_logo.png"
                alt="AGS logo"
                width={132}
                height={48}
                className="h-auto w-[108px] sm:w-[120px]"
              />
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              Innovative digital solutions that transform businesses and help
              you prepare for the future.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Industries</h3>
            <ul className="space-y-4">
              {INDUSTRY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} AGS. All rights reserved.
            </p>
            <span className="hidden sm:block text-white/10">|</span>
            <div className="flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 px-3 py-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className="text-purple-400 shrink-0"
              >
                <path
                  d="M12 2L4 5.5V11C4 15.418 7.582 19.418 12 21C16.418 19.418 20 15.418 20 11V5.5L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs text-purple-300 font-medium">
                MSME Certified · Govt. of India
              </span>
            </div>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
