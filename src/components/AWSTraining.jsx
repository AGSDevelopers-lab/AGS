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
    <section className="py-16 md:py-24 bg-[#070913] overflow-hidden">
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
      <div className="w-full px-6 sm:px-8 lg:px-26 mb-12">
        <h4 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#7B5CFF] uppercase mb-4">
          VERIFIED CREDENTIALS
        </h4>
        <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
          AWS-Accredited Training & Digital Badges
        </h2>
      </div>

      {/* Carousel Track */}
      <div className="relative w-full">
        {/* Fading Edges Removed */}

        <div className="flex w-[200%] animate-scroll">
          {/* Double the items for seamless looping */}
          {[...badges, ...badges].map((badge, idx) => (
            <div key={idx} className="flex-1 flex justify-center px-4 md:px-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 hover:scale-105 transition-transform duration-300">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
