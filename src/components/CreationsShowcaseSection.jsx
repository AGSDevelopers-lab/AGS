"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  {
    id: "molifera",
    title: "Molifera Media",
    category: "DIGITAL EXPERIENCE",
    url: "https://www.moliferamedia.com/",
    image: "/Website.png",
    alt: "Molifera Media - Crafting Innovations Creating Results",
  },
  {
    id: "brew",
    title: "BREW.",
    category: "BRAND EXPERIENCE",
    url: "#",
    image: "/Website.png",
    alt: "BREW Tea Estate & Brand Experience",
  },
  {
    id: "mangal",
    title: "Mangal Materials",
    category: "ECOMMERCE PLATFORM",
    url: "#",
    image: "/Website.png",
    alt: "Mangal Materials Platform",
  },
];

export default function CreationsShowcaseSection() {
  const sectionRef = useRef(null);
  const headingTextRef = useRef(null);
  const buttonRef = useRef(null);
  const centerShowcaseRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([headingTextRef.current, buttonRef.current, centerShowcaseRef.current], {
          x: 0,
          y: 0,
          autoAlpha: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? "20vw" : "35vw";

        // Text from left, Button from right
        gsap.set(headingTextRef.current, {
          x: `-${dist}`,
          autoAlpha: 0,
        });
        gsap.set(buttonRef.current, {
          x: dist,
          autoAlpha: 0,
        });
        gsap.set(centerShowcaseRef.current, {
          y: 30,
          autoAlpha: 0,
        });

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(headingTextRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
            gsap.to(buttonRef.current, {
              x: 0,
              autoAlpha: 1,
              duration: 1.3,
              ease: "power3.out",
            });
            gsap.to(centerShowcaseRef.current, {
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              delay: 0.15,
              ease: "power2.out",
            });
          },
        });

        if (st.progress > 0) {
          gsap.set([headingTextRef.current, buttonRef.current, centerShowcaseRef.current], {
            x: 0,
            y: 0,
            autoAlpha: 1,
          });
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative z-10 w-full bg-white py-20 sm:py-28 text-gray-900 border-t border-gray-100 overflow-hidden"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
        
        {/* Header with 'Achieve Goals' highlighted in purple */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-14 sm:mb-18 overflow-hidden">
          <div ref={headingTextRef}>
            <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-tight text-gray-950 leading-[1.08]">
              Empowering Businesses To
              <br />
              <span className="text-[#8B5CF6] font-medium">Achieve Goals</span> With
            </h2>
          </div>

          {/* Segmented Button: [ → | VIEW ALL PROJECTS ] (slides in from right) */}
          <div ref={buttonRef} className="shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-stretch shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <span className="flex items-center justify-center border border-[#7C3AED] bg-white px-5 py-3.5 text-[#7C3AED] text-lg font-light">
                →
              </span>
              <span className="flex items-center justify-center bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] px-7 py-3.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white">
                VIEW ALL PROJECTS
              </span>
            </Link>
          </div>
        </div>

        {/* Official Showcase Carousel Artwork matching Figma Attached Image 2 */}
        <div ref={centerShowcaseRef} className="relative w-full overflow-hidden rounded-2xl">
          <div className="relative w-full aspect-[1440/658] rounded-xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <Image
              src="/region-carousel.png"
              alt="Empowering Businesses Portfolio Carousel - Molifera Media, BREW, Mangal Materials"
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-contain"
            />

            {/* Clickable hotspots for Molifera, Dhunseri, and Mangal */}
            <div className="absolute inset-0 grid grid-cols-12 pointer-events-auto">
              {/* Left Flank hotspot: BREW / Dhunseri */}
              <Link
                href="/portfolio/dhunseri"
                className="col-span-3 h-full cursor-pointer opacity-0 hover:opacity-100 bg-black/5 transition-opacity"
                title="View Dhunseri Case Study"
              />

              {/* Center Flagship hotspot: Molifera Media */}
              <a
                href="https://www.moliferamedia.com/"
                target="_blank"
                rel="noreferrer"
                className="col-span-6 h-full cursor-pointer opacity-0 hover:opacity-100 bg-black/5 transition-opacity"
                title="Visit Molifera Media"
              />

              {/* Right Flank hotspot: Mangal Materials */}
              <Link
                href="/portfolio/mangal-materials"
                className="col-span-3 h-full cursor-pointer opacity-0 hover:opacity-100 bg-black/5 transition-opacity"
                title="View Mangal Materials Case Study"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

