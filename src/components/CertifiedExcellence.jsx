"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import SlideIn from "@/components/SlideIn";

const certificates = [
  {
    id: 1,
    image: "/1.png",
    alt: "AWS Partner Accreditation Certificate - Amrut Global Solutions",
  },
  {
    id: 2,
    image: "/2.png",
    alt: "AWS Certification - Amrut Global Solutions",
  },
];

// Replicate the certificates into a circular buffer for a seamless infinite loop
// Indexes 0..1, 2..3 (initial base pair), 4..5, 6..7
const CERT_LOOP = [
  ...certificates,
  ...certificates,
  ...certificates,
  ...certificates,
];

export default function CertifiedExcellence() {
  // Start at index 2 (Card 1 of base pair)
  const [currentIndex, setCurrentIndex] = useState(2);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(520);
  const [gapWidth, setGapWidth] = useState(32);

  const cardRef = useRef(null);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateDimensions = useCallback(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
    if (trackRef.current) {
      const computed = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(computed.columnGap || computed.gap);
      if (!isNaN(gap)) {
        setGapWidth(gap);
      }
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  // When transition was temporarily disabled for instant wrap-around snap,
  // re-enable it on the next animation frame so subsequent movements animate smoothly.
  useEffect(() => {
    if (!withTransition) {
      const frame1 = requestAnimationFrame(() => {
        const frame2 = requestAnimationFrame(() => {
          setWithTransition(true);
        });
        return () => cancelAnimationFrame(frame2);
      });
      return () => cancelAnimationFrame(frame1);
    }
  }, [withTransition]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Handle seamless snap at the loop boundaries
  const handleTransitionEnd = (e) => {
    if (e.target !== trackRef.current) return;
    if (currentIndex >= 4) {
      setWithTransition(false);
      setCurrentIndex((currentIndex % 2) + 2);
    } else if (currentIndex < 2) {
      setWithTransition(false);
      setCurrentIndex((currentIndex % 2) + 2);
    }
  };

  const offset = currentIndex * (cardWidth + gapWidth);

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
      setWithTransition(true);
      setCurrentIndex((prev) => prev + 1);
    } else if (dist < -45) {
      setWithTransition(true);
      setCurrentIndex((prev) => prev - 1);
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleCardClick = (index) => {
    if (index === currentIndex) return;
    setWithTransition(true);
    setCurrentIndex(index);
  };

  return (
    <section
      id="certified-excellence"
      className="relative z-10 w-full bg-white py-8 sm:py-12 lg:py-14 text-gray-900 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-14">
        {/* 2-Column Layout matching user reference design precisely */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.40fr_0.60fr] gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Heading + Subtitle + AWS Sales Accreditation */}
          <SlideIn from="left" distance={25} className="flex flex-col items-start z-10">
            {/* Top Section Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-gray-950 leading-[1.12]">
                Certified Excellence
              </h2>
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-gray-500 font-normal">
                Industry-recognized credentials that validate our expertise.
              </p>
            </div>

            {/* AWS Sales Accreditation */}
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-normal leading-[1.18] tracking-tight text-gray-950">
                We&rsquo;ve Got{" "}
                <span className="text-[#504CFF] font-medium">AWS Sales</span>
                <br className="hidden sm:inline" />
                Accreditation
              </h3>

              <p className="mt-4 sm:mt-5 text-[15px] sm:text-base leading-relaxed text-gray-500 font-normal max-w-[420px]">
                Being appreciated by the clients we work with means the world to
                us. It also translates beautifully into our official ratings and
                awards, matching our commitment to align cloud infrastructure
                with business growth.
              </p>
            </div>
          </SlideIn>

          {/* Right Column: Sliding Certificates Track (Clipped so it never overlaps left text, but right side peeks continuously) */}
          <SlideIn from="right" distance={25} className="relative w-full overflow-hidden">
            <div
              className="relative w-full select-none overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Carousel Track Viewport */}
              <div className="overflow-hidden w-full py-4 px-1">
                <div
                  ref={trackRef}
                  onTransitionEnd={handleTransitionEnd}
                  className={`flex will-change-transform gap-5 sm:gap-7 lg:gap-8 ${
                    withTransition
                      ? "transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      : "transition-none"
                  }`}
                  style={{
                    transform: `translateX(-${offset}px)`,
                  }}
                >
                  {CERT_LOOP.map((cert, index) => {
                    const isActive = index === currentIndex;
                    return (
                      <div
                        ref={index === 0 ? cardRef : null}
                        key={`${cert.id}-${index}`}
                        onClick={() => handleCardClick(index)}
                        title={cert.alt}
                        className={`w-[82%] sm:w-[78%] lg:w-[480px] xl:w-[520px] shrink-0 aspect-[482/328] rounded-none bg-white shadow-[0_14px_34px_rgba(0,0,0,0.20)] cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "opacity-100 scale-100"
                            : "opacity-80 hover:opacity-100 scale-[0.98]"
                        }`}
                      >
                        <div className="relative w-full h-full bg-white p-1">
                          <Image
                            src={cert.image}
                            alt={cert.alt}
                            fill
                            quality={95}
                            sizes="(max-width: 1024px) 82vw, 520px"
                            className="object-contain object-center"
                            priority={index < 4}
                          />
                        </div>
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
