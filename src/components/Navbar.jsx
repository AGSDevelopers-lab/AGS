"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCtaForm } from "@/components/CtaFormProvider";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openForm } = useCtaForm();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const getNavHref = (href) => href;

  if (pathname.startsWith("/academy")) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07051A]/95 py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1680px] 2xl:max-w-[1780px] items-center justify-between px-6 sm:px-12 lg:px-20 relative">
        {/* LEFT: AGS Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center"
            onClick={(e) => {
              if (isHomePage) {
                handleSmoothScroll(e, "#home");
              } else {
                setMobileMenuOpen(false);
              }
            }}
          >
            <div className="relative w-[88px] sm:w-[98px] h-[38px] sm:h-[42px] shrink-0">
              <Image
                src="/ags_logo.png"
                alt="AGS"
                fill
                sizes="(max-width:640px) 88px, 98px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* CENTER: Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-9 lg:space-x-11 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={getNavHref(item.href)}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-white transition-colors text-sm lg:text-[15px] tracking-[0.02em] font-normal"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: CTA Button + Mobile menu button */}
        <div className="flex items-center">
          {/* CTA Button */}
          <button
            type="button"
            className="group hidden md:flex items-center justify-center border border-white/80 bg-transparent px-5 py-2 text-sm font-normal tracking-[0.02em] text-white rounded-[2px] transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            onClick={() => openForm()}
          >
            <span>Get Started</span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-white"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mx-6 mt-4 rounded-[22px] border border-white/10 bg-[rgba(10,12,24,0.98)] p-5 md:hidden sm:mx-8">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getNavHref(item.href)}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/88 transition-colors hover:text-white tracking-[0.02em]"
              >
                {item.name}
              </Link>
            ))}

            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded border border-[#7B5CFF]/60 px-4 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
              onClick={() => {
                setMobileMenuOpen(false);
                openForm();
              }}
            >
              <span>Get Started</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-current/50">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
