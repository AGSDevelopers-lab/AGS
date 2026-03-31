"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCtaForm } from "@/components/CtaFormProvider";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openForm } = useCtaForm();

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/45 backdrop-blur-xl supports-[backdrop-filter]:bg-black/35 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex w-full items-center justify-between px-6 sm:px-8 lg:px-26">
        <Link
          href="/"
          className="inline-flex items-center"
          onClick={(e) => {
            if (pathname === "/") {
              handleSmoothScroll(e, "#home");
            } else {
              setMobileMenuOpen(false);
            }
          }}
        >
          <Image
            src="/ags_logo.png"
            alt="AGS logo"
            width={108}
            height={40}
            className="h-auto w-[92px] sm:w-[104px]"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-white hover:text-white/80 transition-colors text-sm tracking-wide font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="hidden md:flex items-center space-x-2 rounded border border-[#7B5CFF]/60 bg-transparent px-5 py-2 text-sm font-medium text-white transition-all hover:border-white hover:bg-white hover:text-black"
          onClick={() => openForm()}
        >
          <span>Get Started</span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-current/50">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </button>

        {/* Mobile menu button placeholder */}
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

      {mobileMenuOpen ? (
        <div className="mx-6 mt-4 rounded-[22px] border border-white/10 bg-[rgba(10,12,24,0.9)] p-5 backdrop-blur-xl md:hidden sm:mx-8">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-white/88 transition-colors hover:text-white"
              >
                {item.name}
              </a>
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
      ) : null}
    </nav>
  );
}
