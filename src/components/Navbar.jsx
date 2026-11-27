"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCtaForm } from "@/components/CtaFormProvider";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
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
  const isLightPage =
    pathname === "/products/vidlens" ||
    pathname === "/products/lynkbeats" ||
    pathname === "/solutions/vidlens" ||
    pathname === "/solutions/lynkbeats";

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

  if (pathname.startsWith("/academy") || pathname.startsWith("/ags-academy") || pathname.startsWith("/services/aws-training")) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isLightPage
          ? scrolled
            ? "bg-white/95 backdrop-blur-md py-4 border-b border-[#CFCBD8]/70 shadow-xs"
            : "bg-white py-5 sm:py-6"
          : scrolled
            ? "bg-[#07051A]/95 py-4 border-b border-white/5"
            : "bg-transparent py-6"
      }`}
    >
      <div
        className={`mx-auto flex w-full items-center justify-between relative ${
          isLightPage
            ? "max-w-[1440px] px-6 sm:px-12 lg:px-[96px]"
            : "max-w-[1680px] 2xl:max-w-[1780px] px-4 sm:px-12 lg:px-20"
        }`}
      >
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
            {isLightPage ? (
              <span className="inline-flex h-[40px] sm:h-[44px] w-[96px] sm:w-[104px] items-center justify-start overflow-hidden shrink-0">
                <Image
                  src="/AGS-Logo.png"
                  alt="AGS"
                  width={108}
                  height={108}
                  unoptimized
                  className="h-[104px] w-[104px] object-contain object-left shrink-0"
                  priority
                />
              </span>
            ) : (
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
            )}
          </Link>
        </div>

        {/* CENTER: Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8 lg:space-x-10 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={getNavHref(item.href)}
              onClick={() => setMobileMenuOpen(false)}
              className={`transition-colors text-sm lg:text-[15px] tracking-[0.02em] font-normal whitespace-nowrap ${
                isLightPage
                  ? "text-[#14101F]/90 hover:text-[#7A3CFF]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: CTA Button + Mobile menu button */}
        <div className="flex items-center">
          {/* CTA Button */}
          {isLightPage ? (
            <button
              type="button"
              suppressHydrationWarning
              className="group hidden md:inline-flex h-[48px] min-w-[162px] items-center justify-center gap-3 border border-[#14101F] bg-white px-5 text-sm font-normal tracking-[0.02em] text-[#14101F] rounded-none transition-colors duration-200 hover:bg-[#14101F] hover:text-white cursor-pointer whitespace-nowrap"
              onClick={() => openForm()}
            >
              <span>Get Started</span>
              <Image
                src="/contact/uil_arrow-up.png"
                alt=""
                width={20}
                height={20}
                unoptimized
                className="h-5 w-5 shrink-0 transition-all duration-300 group-hover:invert group-hover:rotate-45"
              />
            </button>
          ) : (
            <button
              type="button"
              suppressHydrationWarning
              className="group hidden md:flex items-center gap-2.5 border border-white/80 bg-transparent px-5 py-2 text-sm font-normal tracking-[0.02em] text-white rounded-none transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              onClick={() => openForm()}
            >
              <span>Get Started</span>
              <span className="flex h-4 w-4 items-center justify-center shrink-0 rounded-full border border-current text-[10px] transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>
          )}

          {/* Mobile menu button */}
          <button
            type="button"
            suppressHydrationWarning
            className={`md:hidden ${isLightPage ? "text-[#14101F]" : "text-white"}`}
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
        <div
          className={`mx-4 mt-3 rounded-none border p-5 md:hidden sm:mx-8 ${
            isLightPage
              ? "border-[#CFCBD8] bg-white shadow-xl"
              : "border-white/10 bg-[rgba(10,12,24,0.98)]"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getNavHref(item.href)}
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors tracking-[0.02em] ${
                  isLightPage
                    ? "text-[#14101F] hover:text-[#7A3CFF]"
                    : "text-white/88 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              type="button"
              suppressHydrationWarning
              className={`mt-2 inline-flex items-center justify-center gap-2 rounded-none border px-4 py-3 text-sm font-medium transition ${
                isLightPage
                  ? "border-[#14101F] text-[#14101F] hover:bg-[#14101F] hover:text-white"
                  : "border-[#7B5CFF]/60 text-white hover:border-white hover:bg-white hover:text-black"
              }`}
              onClick={() => {
                setMobileMenuOpen(false);
                openForm();
              }}
            >
              <span>Get Started</span>
              {isLightPage ? (
                <Image
                  src="/contact/uil_arrow-up.png"
                  alt=""
                  width={18}
                  height={18}
                  unoptimized
                  className="h-[18px] w-[18px] shrink-0"
                />
              ) : (
                <span className="flex h-5 w-5 items-center justify-center shrink-0 rounded-full border border-current text-[11px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
