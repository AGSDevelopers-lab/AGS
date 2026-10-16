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
      className="relative z-10 w-full bg-white py-14 sm:py-20 text-gray-900 overflow-x-clip"
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

          {/* Right Column: 3-Panel Coverflow Certificates Carousel */}
          {/* Left peeking, Middle enlarged main focus, Right peeking */}
          <SlideIn from="right" distance={25} className="relative overflow-visible lg:pt-1">
            <div
              className="relative w-full h-[280px] sm:h-[340px] md:h-[370px] lg:h-[390px] overflow-hidden sm:overflow-visible select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {certificates.map((cert, index) => {
                const N = certificates.length;
                const diff = (index - activeIdx + N) % N;

                const isCenter = diff === 0;
                const isRight = diff === 1;
                const isLeft = diff === N - 1;

                let transformStyle = "translateX(-50%) scale(0.6)";
                let opacityStyle = "opacity-0 pointer-events-none z-0";
                let shadowClass = "shadow-[8px_10px_0px_0px_#475569]";

                if (isCenter) {
                  transformStyle = "translateX(-50%) scale(1.0)";
                  opacityStyle = "opacity-100 z-20 pointer-events-auto cursor-pointer";
                  shadowClass = "shadow-[12px_14px_0px_0px_#475569] sm:shadow-[14px_16px_0px_0px_#475569]";
                } else if (isRight) {
                  transformStyle = "translateX(calc(-50% + 52%)) scale(0.74)";
                  opacityStyle = "opacity-75 hover:opacity-100 z-10 pointer-events-auto cursor-pointer";
                  shadowClass = "shadow-[8px_10px_0px_0px_#64748b]";
                } else if (isLeft) {
                  transformStyle = "translateX(calc(-50% - 52%)) scale(0.74)";
                  opacityStyle = "opacity-75 hover:opacity-100 z-10 pointer-events-auto cursor-pointer";
                  shadowClass = "shadow-[8px_10px_0px_0px_#64748b]";
                }

                return (
                  <div
                    key={cert.id}
                    onClick={() => {
                      if (isRight) nextCert();
                      if (isLeft) prevCert();
                      if (isCenter) nextCert();
                    }}
                    title={cert.alt}
                    className={`absolute top-0 left-1/2 w-[72vw] sm:w-[380px] md:w-[420px] lg:w-[440px] aspect-[482/328] rounded-[2px] overflow-hidden bg-white border border-gray-200 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${shadowClass} ${opacityStyle}`}
                    style={{
                      transform: transformStyle,
                      transformOrigin: "center center",
                    }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.alt}
                      fill
                      sizes="(max-width: 1024px) 72vw, 440px"
                      className="object-contain bg-white"
                      priority={index < 2}
                    />
                  </div>
                );
              })}

              {/* Navigation Left Arrow Button */}
              <button
                type="button"
                onClick={prevCert}
                aria-label="Previous certificate"
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-lg border border-gray-200/90 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Navigation Right Arrow Button */}
              <button
                type="button"
                onClick={nextCert}
                aria-label="Next certificate"
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-lg border border-gray-200/90 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </SlideIn>

        </div>
      </div>
    </section>
  );
}
