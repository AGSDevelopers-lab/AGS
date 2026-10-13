"use client";

import { useState } from "react";
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
];

export default function CertifiedExcellence() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="certified-excellence"
      className="relative z-10 w-full bg-white py-20 sm:py-28 text-gray-900 border-t border-gray-100 overflow-x-clip"
    >
      <div className="relative mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
        {/* Section Heading & Subtitle sliding in from Left */}
        <SlideIn from="left" distance={40} tint={true} className="mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-tight text-gray-950 leading-[1.12]">
            Certified Excellence
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500 font-normal">
            Industry-recognized credentials that validate our expertise.
          </p>
        </SlideIn>

        {/* 2-Column: Left Text (SlideIn left) + Right Certificate Showcase (SlideIn right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-12 lg:gap-14 items-center">
          
          {/* Left: AWS Sales Accreditation */}
          <SlideIn from="left" distance={40} tint={true} className="flex flex-col items-start">
            <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-normal leading-[1.18] tracking-tight text-gray-950">
              We&rsquo;ve Got{" "}
              <span className="text-[#567EFF] font-medium">AWS Sales</span>
              <br />
              Accreditation
            </h3>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-600 font-normal max-w-md">
              Being appreciated by the clients we work with means the world to
              us. It also translates beautifully into our official ratings and
              awards, matching our commitment to align cloud infrastructure
              with business growth.
            </p>
          </SlideIn>

          {/* Right: Certificate Showcase with physical paper cards (SlideIn from right) */}
          <SlideIn from="right" distance={25} className="relative overflow-visible">
            <div className="relative flex items-center gap-6 sm:gap-8">
              {certificates.map((cert, index) => {
                const isCurrent = index === activeIdx;
                const isNext = index === (activeIdx + 1) % certificates.length;

                return (
                  <div
                    key={cert.id}
                    onClick={() => setActiveIdx(index)}
                    className={`relative cursor-pointer transition-all duration-700 ease-out ${
                      isCurrent
                        ? "w-full max-w-[560px] z-20 opacity-100 scale-100"
                        : isNext
                        ? "w-[280px] sm:w-[340px] z-10 opacity-80 translate-x-4 scale-95 hidden md:block"
                        : "hidden"
                    }`}
                  >
                    <div className="relative w-full aspect-[482/328] rounded-xl overflow-hidden shadow-[0_22px_55px_rgba(0,0,0,0.18)] border border-gray-200/90 bg-white hover:shadow-2xl transition-shadow">
                      <Image
                        src={cert.image}
                        alt={cert.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </SlideIn>

        </div>
      </div>
    </section>
  );
}
