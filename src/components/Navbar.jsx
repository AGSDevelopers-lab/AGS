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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-black/45 backdrop-blur-xl supports-backdrop-filter:bg-black/35 py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="flex w-full items-center justify-between px-6 sm:px-8 lg:px-26">

        {/* LOGO + COMPANY NAME + TAGLINE */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 sm:gap-4"
          onClick={(e) => {
            if (isHomePage) {
              handleSmoothScroll(e, "#home");
            } else {
              setMobileMenuOpen(false);
            }
          }}
        >
          <div className="relative w-[92px] sm:w-[104px] h-[40px] shrink-0 flex items-center justify-center">
            <Image
              src="/ags_logo.png"
              alt="AGS logo"
              fill
              sizes="(max-width:640px) 92px, 104px"
              className={`object-contain transition-all duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
              priority
            />
            <Image
              src="/favicon.png"
              alt="AGS logo"
              fill
              sizes="(max-width:640px) 92px, 104px"
              className={`object-contain transition-all duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
              priority
            />
          </div>

          {/* Divider */}
          <div
            className={`hidden sm:block h-8 w-px bg-white/20 shrink-0 transition-all duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Company name + tagline */}
          <div
            className={`transition-all duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <p className="text-white text-[0.78rem] sm:text-[0.88rem] font-semibold tracking-[0.06em] leading-none">
              Amrut Global Solutions
            </p>
            <p className="hidden sm:block mt-1 text-[0.58rem] tracking-[0.2em] uppercase text-white/45">
              Your Vision, Our Innovation
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={getNavHref(item.href)}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-white/80 transition-colors text-[15px] tracking-[0.04em] font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className="group hidden md:flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-5 py-2.5 text-[14px] font-medium tracking-[0.02em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
          onClick={() => openForm()}
        >
          <span>Get Started</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform duration-500 group-hover:rotate-45"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mx-6 mt-4 rounded-[22px] border border-white/10 bg-[rgba(10,12,24,0.9)] p-5 backdrop-blur-xl md:hidden sm:mx-8">
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
