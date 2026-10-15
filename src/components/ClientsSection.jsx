"use client";

import Image from "next/image";

// Exact order matching Picture 2 reference image:
// 1. Renuka Eye Institute -> 2. JPNR -> 3. Farz Academy -> 4. Molifera Media -> 5. Himalaya Darpan -> 6. Dhunseri
const clientLogos = [
  {
    name: "Renuka Eye Institute",
    src: "/renuka.png",
    alt: "Renuka Eye Institute",
    width: 782,
    height: 271,
    aspectClass: "h-11 sm:h-13 md:h-15 lg:h-16 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[300px]",
  },
  {
    name: "JPNR",
    src: "/jpnr.png",
    alt: "JPNR Corporate Consultants Pvt Ltd",
    width: 568,
    height: 287,
    aspectClass: "h-11 sm:h-13 md:h-15 lg:h-16 w-auto max-w-[190px] sm:max-w-[230px] md:max-w-[260px]",
  },
  {
    name: "Farz Academy",
    src: "/farz.png",
    alt: "Farz Academy",
    width: 660,
    height: 251,
    aspectClass: "h-11 sm:h-13 md:h-15 lg:h-16 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px]",
  },
  {
    name: "Molifera Media",
    src: "/molifera.png",
    alt: "Molifera Media",
    width: 634,
    height: 123,
    aspectClass: "h-9 sm:h-11 md:h-13 lg:h-14 w-auto max-w-[210px] sm:max-w-[250px] md:max-w-[290px]",
  },
  {
    name: "Himalaya",
    src: "/himalaya.png",
    alt: "Himalaya Darpan",
    width: 815,
    height: 194,
    aspectClass: "h-10 sm:h-12 md:h-14 lg:h-15 w-auto max-w-[210px] sm:max-w-[250px] md:max-w-[290px]",
  },
  {
    name: "Dhunseri",
    src: "/dhunseri.png",
    alt: "Dhunseri Tea & Industries Limited",
    width: 821,
    height: 207,
    aspectClass: "h-11 sm:h-13 md:h-15 lg:h-16 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[300px]",
  },
];

// Double the logos for seamless, infinite looping
const marqueeLogos = [...clientLogos, ...clientLogos];

export default function ClientsSection() {
  return (
    <section className="relative z-20 w-full bg-white border-y border-gray-200/80 py-5 sm:py-6 lg:py-7 overflow-hidden select-none">
      {/* Infinite Scrolling Track */}
      <div className="group flex w-full overflow-hidden items-center">
        <div className="flex shrink-0 items-center gap-12 sm:gap-16 md:gap-20 lg:gap-28 animate-marquee group-hover:[animation-play-state:paused] pr-12 sm:pr-16 md:pr-20 lg:pr-28">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className={`relative flex items-center justify-center shrink-0 ${logo.aspectClass}`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-h-full w-auto object-contain transition-opacity duration-300 opacity-95 hover:opacity-100"
                priority={idx < 6}
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-12 sm:gap-16 md:gap-20 lg:gap-28 animate-marquee group-hover:[animation-play-state:paused] pr-12 sm:pr-16 md:pr-20 lg:pr-28"
        >
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`clone-${logo.name}-${idx}`}
              className={`relative flex items-center justify-center shrink-0 ${logo.aspectClass}`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-h-full w-auto object-contain transition-opacity duration-300 opacity-95 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
