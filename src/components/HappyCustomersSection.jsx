"use client";

import Image from "next/image";
import SlideIn from "@/components/SlideIn";

const allTestimonials = [
  {
    category: "SEAMLESS EXPERIENCE",
    quote:
      "From Planning To Execution, The Process Was Flawless. The Team Ensured Every Ad Campaign Aligned Perfectly With Our Goals And Audience Preferences.",
    author: "Jaylon Siphron",
    date: "18, Feb 2025",
  },
  {
    category: "CUSTOMER SERVICE",
    quote:
      "Their Media Planning And Creative Designs Brought A Fresh Perspective To Our Marketing Efforts. We've Seen A Significant Boost In Brand Awareness.",
    author: "Davis Curtis",
    date: "22, Feb 2025",
  },
  {
    category: "QUICK SETUP",
    quote:
      "They Didn't Just Provide Services—They Shaped Our Brand's Voice In A Way That Deeply Engaged Our Audience. Their Insight And Creativity Are Unmatched.",
    author: "Alina Staner",
    date: "26, Feb 2025",
  },
  {
    category: "DIGITAL GROWTH",
    quote:
      "Billboards, Radio Ads, And Print Campaigns—This Agency Does It All With Such Precision And Passion. We Couldn't Be Happier With The Results.",
    author: "Maria Saris",
    date: "10, Mar 2025",
  },
];

export default function HappyCustomersSection() {
  const marqueeReviews = [
    ...allTestimonials,
    ...allTestimonials,
    ...allTestimonials,
  ];

  return (
    <section
      className="relative z-10 w-full bg-white py-20 sm:py-28 lg:py-32 text-gray-900 border-t border-gray-100 overflow-x-clip"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
        {/* Heading sliding in from left with tint */}
        {/* Heading sliding in from left with tint */}
        <SlideIn from="left" distance={40} tint={true} className="mb-12 sm:mb-16 max-w-[890px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-normal tracking-tight text-gray-950 leading-[1.12]">
            Trusted By{" "}
            <span className="text-[#8B5CF6] font-medium">25,000+</span>
            <br />
            Happy Customers
          </h2>
        </SlideIn>

        {/* Rating Block & Testimonial Track sliding in from right with distance=15 */}
        <SlideIn from="right" distance={15}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Rating Column */}
            <div className="lg:col-span-4 flex flex-col justify-start lg:pr-10 lg:border-r lg:border-gray-200">
              <div>
                <span className="text-6xl sm:text-7xl lg:text-[80px] font-bold text-gray-950 tracking-tight leading-none">
                  4.9
                </span>

                <div className="mt-4 flex items-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-3 text-sm sm:text-base font-normal text-gray-500 tracking-wide">
                  2000+ Reviews
                </p>

                <div className="mt-6 relative w-[200px] h-[70px]">
                  <Image
                    src="/customer-avatars-clean.png"
                    alt="Customer community avatars"
                    width={200}
                    height={70}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Testimonials Marquee Track (Figma: Inter 400, 18.7px, line-height 29.9px, 288px width) */}
            <div className="lg:col-span-8 relative overflow-hidden">
              <div className="testimonial-marquee-track flex items-stretch">
                {marqueeReviews.map((item, idx) => (
                  <div
                    key={`${item.author}-${idx}`}
                    className="w-[288px] sm:w-[320px] shrink-0 flex flex-col justify-between border-r border-gray-200 px-6 sm:px-7 py-3 min-h-[280px]"
                  >
                    <div>
                      <span className="text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest block">
                        {item.category}
                      </span>

                      <p className="mt-4 font-inter text-[15px] lg:text-[18.7px] leading-[26px] lg:leading-[29.9px] text-[#585858] font-normal">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-8 pt-3 border-t border-gray-100">
                      <h4 className="text-base sm:text-lg font-medium text-gray-950">
                        {item.author}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlideIn>
      </div>

      <style jsx>{`
        .testimonial-marquee-track {
          width: max-content;
          animation: reviewScroll 18s linear infinite;
        }
        .testimonial-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes reviewScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
      `}</style>
    </section>
  );
}
