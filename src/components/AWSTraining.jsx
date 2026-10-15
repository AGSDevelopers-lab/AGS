"use client";

import Image from "next/image";
import SlideIn from "@/components/SlideIn";

const badges = [
  {
    id: "badge-ml",
    title: "AWS Cloud Quest: Machine Learning (Trained)",
    image: "/badges/badge-ml.png",
  },
  {
    id: "badge-ai-architect",
    title: "AWS SimuLearn: AI Architect (Trained)",
    image: "/badges/badge-ai-architect.png",
  },
  {
    id: "badge-solutions-architect",
    title: "AWS Cloud Quest: Solutions Architect (Trained)",
    image: "/badges/badge-solutions-architect.png",
  },
  {
    id: "badge-security",
    title: "AWS Cloud Quest: Security (Trained)",
    image: "/badges/badge-security.png",
  },
  {
    id: "badge-ai-practitioner",
    title: "AWS SimuLearn: AI Practitioner (Trained)",
    image: "/badges/badge-ai-practitioner.png",
  },
  {
    id: "badge-serverless",
    title: "AWS SimuLearn: Serverless Developer (Trained)",
    image: "/badges/badge-serverless.png",
  },
];

// Double the badges for seamless, continuous, infinite auto-moving carousel
const marqueeBadges = [...badges, ...badges];

export default function AWSTraining() {
  return (
    <section className="relative z-10 w-full bg-white pt-10 pb-12 sm:pt-12 sm:pb-16 text-gray-900 overflow-x-clip">
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
        <SlideIn from="left" distance={40} className="mb-6 sm:mb-8">
          <span className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#7C3AED]">
            VERIFIED CREDENTIALS
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-[46.5px] font-normal tracking-[-1.2px] text-black leading-[1.15]">
            AWS-Accredited Training &amp; Digital Badges
          </h2>
        </SlideIn>
      </div>

      {/* Auto-moving continuous carousel track */}
      <div className="group flex relative w-full overflow-hidden py-4">
        <div className="flex shrink-0 items-center gap-12 sm:gap-16 lg:gap-24 animate-badge-marquee group-hover:[animation-play-state:paused] will-change-transform pr-12 sm:pr-16 lg:pr-24">
          {marqueeBadges.map((badge, idx) => (
            <div
              key={`badge-track-1-${badge.id}-${idx}`}
              className="relative shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
              title={badge.title}
            >
              <div className="relative w-[130px] sm:w-[160px] lg:w-[190px] aspect-[180/200] drop-shadow-md">
                <Image
                  src={badge.image}
                  alt={badge.title}
                  fill
                  sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 190px"
                  className="object-contain"
                  priority={idx < 6}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-12 sm:gap-16 lg:gap-24 animate-badge-marquee group-hover:[animation-play-state:paused] will-change-transform pr-12 sm:pr-16 lg:pr-24"
        >
          {marqueeBadges.map((badge, idx) => (
            <div
              key={`badge-track-2-${badge.id}-${idx}`}
              className="relative shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
              title={badge.title}
            >
              <div className="relative w-[130px] sm:w-[160px] lg:w-[190px] aspect-[180/200] drop-shadow-md">
                <Image
                  src={badge.image}
                  alt={badge.title}
                  fill
                  sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 190px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes badgeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-badge-marquee {
          animation: badgeScroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
