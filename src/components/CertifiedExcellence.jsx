"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SlideIn from "@/components/SlideIn";

const certificates = [
  {
    id: 1,
    image: "/aws-certificate-1.png",
    alt: "AWS PartnerCast - ACE 201: Best Practices for Cost Estimations for Containers - Business Completion Certificate",
  },
  {
    id: 2,
    image: "/aws-certificate-2.png",
    alt: "AWS Partner: Public Sector for Sellers - Business Completion Certificate",
  },
  {
    id: 3,
    image: "/Academy/certificate.png",
    alt: "AGS Academy Certificate of Completion",
  },
];

export default function CertifiedExcellence() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide every 3.8 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % certificates.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextCert = () => {
    setActiveIdx((prev) => (prev + 1) % certificates.length);
  };

  const prevCert = () => {
    setActiveIdx((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const dist = touchStartX.current - touchEndX.current;
    if (dist > 45) {
      nextCert();
    } else if (dist < -45) {
      prevCert();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      id="certified-excellence"
      className="relative z-10 w-full bg-white py-10 sm:py-14 text-gray-900 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
        {/* 2-Column Layout matching Picture 3 / Picture 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.40fr_0.60fr] gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Heading + Subtitle + AWS Sales Accreditation (Unified with tight gap) */}
          <SlideIn from="left" distance={30} tint={true} className="flex flex-col items-start">
            {/* Top Section Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-gray-950 leading-[1.12]">
                Certified Excellence
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 font-normal">
                Industry-recognized credentials that validate our expertise.
              </p>
            </div>

            {/* AWS Sales Accreditation: Tightly spaced directly below header */}
            <div className="mt-7 sm:mt-8">
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-normal leading-[1.18] tracking-tight text-gray-950">
                We&rsquo;ve Got{" "}
                <span className="text-[#567EFF] font-medium">AWS Sales</span>
                <br />
                Accreditation
              </h3>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-gray-600 font-normal max-w-md">
                Being appreciated by the clients we work with means the world to
                us. It also translates beautifully into our official ratings and
                awards, matching our commitment to align cloud infrastructure
                with business growth.
              </p>
            </div>
          </SlideIn>

          {/* Right Column: Sliding Certificates Track with Progress Indicator matching Picture 2 - Copy (2) */}
          <SlideIn from="right" distance={25} className="relative w-full lg:pt-1">
            <div
              className="relative w-full select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Carousel Track Viewport */}
              <div className="overflow-hidden w-full pb-4 pt-1">
                <div
                  className="flex transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform gap-5 sm:gap-6"
                  style={{
                    transform: `translateX(-${activeIdx * 100}%)`,
                  }}
                >
                  {certificates.map((cert, index) => {
                    const isActive = index === activeIdx;
                    return (
                      <div
                        key={cert.id}
                        onClick={() => setActiveIdx((index + 1) % certificates.length)}
                        title={cert.alt}
                        className={`w-full shrink-0 aspect-[482/328] rounded-[2px] overflow-hidden bg-white border transition-all duration-500 cursor-pointer ${
                          isActive
                            ? "border-[#567EFF]/50 shadow-[10px_12px_24px_-4px_rgba(71,85,105,0.22)] scale-[1.0]"
                            : "border-gray-200 shadow-md opacity-75 hover:opacity-100 scale-[0.98]"
                        }`}
                      >
                        <div className="relative w-full h-full p-2 bg-white">
                          <Image
                            src={cert.image}
                            alt={cert.alt}
                            fill
                            sizes="(max-width: 1024px) 90vw, 640px"
                            className="object-contain object-center"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Progress Bar & Navigation Controls matching Picture 2 - Copy (2) */}
              <div className="mt-5 flex items-center justify-between gap-6">
                {/* Horizontal Progress Slider Bar */}
                <div className="relative flex-1 h-[3px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 bottom-0 left-0 bg-[#567EFF] rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${100 / certificates.length}%`,
                      transform: `translateX(${activeIdx * 100}%)`,
                    }}
                  />
                </div>

                {/* Left & Right Arrow Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={prevCert}
                    aria-label="Previous certificate"
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow-sm border border-gray-200 transition-all duration-300 hover:border-gray-400 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={nextCert}
                    aria-label="Next certificate"
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow-sm border border-gray-200 transition-all duration-300 hover:border-gray-400 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SlideIn>

        </div>
      </div>
    </section>
  );
}
