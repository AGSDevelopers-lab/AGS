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

  const nextIdx = (activeIdx + 1) % certificates.length;

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
        {/* 2-Column Layout matching Picture7.png precisely */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-12 items-start">
          
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

            {/* AWS Sales Accreditation: Tightly spaced directly below header matching Picture 7 */}
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

          {/* Right Column: Two Certificates Side-by-Side Matching Picture 7 with Smooth Slide Transitions */}
          <SlideIn from="right" distance={25} className="relative overflow-visible lg:pt-1">
            <div
              className="relative flex items-center gap-6 sm:gap-8 select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Active / Main Certificate: Larger, front with sharp dark offset drop shadow */}
              <div
                className="relative w-full max-w-[460px] sm:max-w-[490px] lg:max-w-[500px] z-20 cursor-pointer"
                onClick={nextCert}
                title="Click to advance certificate"
              >
                <div className="relative w-full aspect-[482/328] rounded-[2px] overflow-hidden bg-white border border-gray-200 shadow-[12px_14px_0px_0px_#475569] sm:shadow-[14px_16px_0px_0px_#475569] transition-transform duration-300 hover:-translate-y-1">
                  {certificates.map((cert, index) => {
                    const isCurrent = index === activeIdx;
                    const isPrev =
                      index ===
                      (activeIdx - 1 + certificates.length) % certificates.length;

                    return (
                      <div
                        key={`main-${cert.id}`}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          isCurrent
                            ? "opacity-100 translate-x-0 scale-100 z-10 pointer-events-auto"
                            : isPrev
                            ? "opacity-0 -translate-x-full scale-95 z-0 pointer-events-none"
                            : "opacity-0 translate-x-full scale-95 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={cert.image}
                          alt={cert.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 500px"
                          className="object-contain"
                          priority={index < 2}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Next / Preview Certificate: Smaller, vertically centered matching Picture 7 */}
              <div
                className="relative w-[240px] sm:w-[270px] lg:w-[290px] z-10 opacity-85 hover:opacity-100 cursor-pointer hidden md:block transition-opacity duration-300"
                onClick={nextCert}
                title="Click to view next certificate"
              >
                <div className="relative w-full aspect-[482/328] rounded-[2px] overflow-hidden bg-white border border-gray-200 shadow-[10px_12px_0px_0px_#475569] transition-transform duration-300 hover:-translate-y-1">
                  {certificates.map((cert, index) => {
                    const isNext = index === nextIdx;
                    const wasNext =
                      index ===
                      (nextIdx - 1 + certificates.length) % certificates.length;

                    return (
                      <div
                        key={`next-${cert.id}`}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          isNext
                            ? "opacity-100 translate-x-0 scale-100 z-10 pointer-events-auto"
                            : wasNext
                            ? "opacity-0 -translate-x-full scale-95 z-0 pointer-events-none"
                            : "opacity-0 translate-x-full scale-95 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={cert.image}
                          alt={cert.alt}
                          fill
                          sizes="300px"
                          className="object-contain"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </SlideIn>

        </div>
      </div>
    </section>
  );
}
