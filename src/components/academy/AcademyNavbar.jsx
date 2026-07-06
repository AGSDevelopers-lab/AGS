"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Curriculum", href: "#curriculum" },
  { name: "Outcomes", href: "#outcomes" },
  { name: "Mentors", href: "#mentors" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function AcademyNavbar() {
  const [scrolled, setScrolled] = useState(false);

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
      const y = elem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex w-full items-center justify-between px-6 sm:px-8 lg:px-26">
        {/* Left: Logo */}
        <Link href="/academy" className="flex items-center gap-2">
          <div className="relative w-[50px] h-[20px] sm:w-[60px] sm:h-[24px]">
            <Image
              src="/ags_logo.png"
              alt="AGS logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-white/60 font-medium text-sm sm:text-base border-l border-white/20 pl-2">
            Academy
          </span>
        </Link>

        {/* Center: Links (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <a
          href="#pricing"
          onClick={(e) => handleSmoothScroll(e, "#pricing")}
          className="bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-sm text-sm sm:text-[15px] font-medium transition-colors inline-flex items-center gap-2"
        >
          <span className="hidden sm:inline">Reserve Your Seat</span>
          <span className="sm:hidden">Enroll Now</span>
          <span>→</span>
        </a>
      </div>
    </nav>
  );
}
