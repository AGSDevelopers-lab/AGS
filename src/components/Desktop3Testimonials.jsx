"use client";

import { useState } from "react";
import Image from "next/image";
import SlideIn from "@/components/SlideIn";

const testimonialsList = [
  {
    name: "Ankit Ghosh",
    role: "Founder of Molifera Media",
    avatar: "/Academy/User Image (4).png",
    fallbackAvatar: "/testimonials/user-4.png",
    quote:
      "Very professional company. Assisted my channel with utmost care and support. I recommend wholeheartedly.",
  },
  {
    name: "Nikhil Sharma",
    role: "Founder of TotoJan",
    avatar: "/Academy/User Image (1).png",
    fallbackAvatar: "/testimonials/user-1.png",
    quote:
      "Working with AGS transformed our taxi booking platform into a seamless, reliable experience that our drivers and riders love every day.",
  },
  {
    name: "Madhumita Roy",
    role: "Founder of Dabur",
    avatar: "/Academy/User Image.png",
    fallbackAvatar: "/testimonials/user-0.png",
    quote:
      "The engineering standard and attention to detail delivered by AGS exceeded our expectations across every phase of digital rollout.",
  },
  {
    name: "Sayan Dutta",
    role: "Full Stack Development",
    avatar: "/Academy/User Image (3).png",
    fallbackAvatar: "/testimonials/user-3.png",
    quote:
      "From architecture to deployment, AGS delivered robust, highly scalable cloud infrastructure with zero downtime and exceptional speed.",
  },
  {
    name: "Piyal Sen",
    role: "UI/UX Designer",
    avatar: "/Academy/User Image (2).png",
    fallbackAvatar: "/testimonials/user-2.png",
    quote:
      "The design system and intuitive UX created by the team elevated our product usability and customer engagement significantly.",
  },
  {
    name: "Rizwan Modak",
    role: "Web Developer",
    avatar: "/Academy/User Image (1).png",
    fallbackAvatar: "/testimonials/user-1.png",
    quote:
      "Outstanding collaboration and technical expertise. The clean code architecture made scaling and maintenance effortless.",
  },
];

function QuoteIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function TestimonialAvatar({ item }) {
  const [src, setSrc] = useState(item.avatar);
  return (
    <Image
      src={src}
      alt={item.name}
      fill
      unoptimized
      sizes="48px"
      onError={() => {
        if (item.fallbackAvatar && src !== item.fallbackAvatar) {
          setSrc(item.fallbackAvatar);
        }
      }}
      className="object-cover object-center"
    />
  );
}

export default function Desktop3Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-10 w-full bg-[#080B13] py-16 sm:py-20 lg:py-28 text-white overflow-hidden border-t border-white/5"
    >
      {/* Subtle large quote watermark in background */}
      <div className="pointer-events-none absolute right-[5%] top-[15%] h-[400px] w-[400px] text-white/[0.03] select-none">
        <QuoteIcon className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-6 sm:px-12 lg:px-16">
        {/* Header: What they say about us */}
        <SlideIn from="left" distance={30} className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-normal tracking-tight text-white leading-[1.12]">
            What they say{" "}
            <span className="text-[#8B5CF6] font-normal">about us</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Discover what our clients and partners have to say about their experiences working with us and how our services have helped their businesses grow and succeed.
          </p>
        </SlideIn>

        {/* 3x2 Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {testimonialsList.map((item, index) => (
            <SlideIn
              key={item.name}
              from={index % 2 === 0 ? "left" : "right"}
              distance={20 + (index % 3) * 10}
            >
              <article className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:-translate-y-1 h-full shadow-lg">
                <div>
                  {/* Top: Avatar, Name, Role, Quote Icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/20 shrink-0 bg-white/10">
                        <TestimonialAvatar item={item} />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-base sm:text-lg font-medium text-white tracking-tight leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs text-white/50 font-light mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <QuoteIcon className="h-6 w-6 text-white/25 shrink-0" />
                  </div>

                  {/* Quote Paragraph */}
                  <p className="mt-5 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    {item.quote}
                  </p>
                </div>
              </article>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
