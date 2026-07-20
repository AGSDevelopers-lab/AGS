"use client";

import Image from "next/image";

export default function AWSTraining() {
  const badges = [
    {
      src: "/aws-partner-public-sector-for-sellers-business.png",
      alt: "AWS Public Sector",
    },
    {
      src: "/aws-cloud-quest-cloud-practitioner-training-badge.png",
      alt: "AWS Cloud Practitioner",
    },
    {
      src: "/aws-knowledge-security-champion-training-badge.png",
      alt: "AWS Security Champion",
    },
    {
      src: "/aws generative ai practitioner.png",
      alt: "AWS Generative AI Practitioner",
    },
    {
      src: "/aws-partner-sales-accreditation-training-badge.png",
      alt: "AWS Sales Accreditation",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#05070D] border-t border-white/5">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h4 className="text-[#7B5CFF] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            VERIFIED CREDENTIALS
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            AWS-Accredited Training & Digital Badges
          </h2>
        </div>

        {/* Carousel Clipping Wrapper */}
        {/* Placed inside the padded container and styled with overflow-hidden so badges clip EXACTLY at the 'A' in 'AWS' */}
        <div className="overflow-hidden w-full relative">
          <div className="flex w-max animate-scroll">
            {[...badges, ...badges, ...badges, ...badges].map((badge, idx) => (
              <div key={idx} className="flex justify-center px-4 md:px-8 lg:px-10">
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] hover:scale-105 transition-transform duration-300">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
