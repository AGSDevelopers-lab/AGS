"use client";

import Image from "next/image";

// Exact order matching the user's reference image:
// 1. Dhunseri -> 2. Renuka Eye Institute -> 3. JPNR -> 4. Farz Academy -> 5. Molifera Media -> 6. Himalaya
const clientLogos = [
  {
    name: "Dhunseri",
    src: "/dhunseri.png",
    alt: "Dhunseri Tea & Industries Limited",
    width: 821,
    height: 207,
    aspectClass: "w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-12 sm:h-16 md:h-20",
  },
  {
    name: "Renuka Eye Institute",
    src: "/renuka.png",
    alt: "Renuka Eye Institute",
    width: 782,
    height: 271,
    aspectClass: "w-[190px] sm:w-[250px] md:w-[290px] lg:w-[330px] h-12 sm:h-16 md:h-20",
  },
  {
    name: "JPNR",
    src: "/jpnr.png",
    alt: "JPNR Corporate Consultants Pvt Ltd",
    width: 568,
    height: 287,
    aspectClass: "w-[160px] sm:w-[210px] md:w-[250px] lg:w-[290px] h-12 sm:h-16 md:h-20",
  },
  {
    name: "Farz Academy",
    src: "/farz.png",
    alt: "Farz Academy",
    width: 660,
    height: 251,
    aspectClass: "w-[170px] sm:w-[230px] md:w-[270px] lg:w-[310px] h-12 sm:h-16 md:h-20",
  },
  {
    name: "Molifera Media",
    src: "/molifera.png",
    alt: "Molifera Media",
    width: 634,
    height: 123,
    aspectClass: "w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-11 sm:h-14 md:h-18",
  },
  {
    name: "Himalaya",
    src: "/himalaya.png",
    alt: "Himalaya Darpan",
    width: 815,
    height: 194,
    aspectClass: "w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-12 sm:h-16 md:h-20",
  },
];

// Double the logos for seamless, infinite looping
const marqueeLogos = [...clientLogos, ...clientLogos];

export default function ClientsSection() {
  return (
    <section className="relative z-20 w-full bg-white border-t border-gray-100 py-12 sm:py-16 md:py-20 overflow-hidden select-none">
      {/* Infinite Scrolling Track */}
      <div className="group flex w-full overflow-hidden">
        <div className="flex shrink-0 items-center gap-14 sm:gap-20 md:gap-28 lg:gap-36 animate-marquee group-hover:[animation-play-state:paused] pr-14 sm:pr-20 md:pr-28 lg:pr-36">
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
                className="max-h-full max-w-full w-auto h-auto object-contain transition-opacity duration-300 opacity-90 hover:opacity-100"
                priority={idx < 6}
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-14 sm:gap-20 md:gap-28 lg:gap-36 animate-marquee group-hover:[animation-play-state:paused] pr-14 sm:pr-20 md:pr-28 lg:pr-36"
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
                className="max-h-full max-w-full w-auto h-auto object-contain transition-opacity duration-300 opacity-90 hover:opacity-100"
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
