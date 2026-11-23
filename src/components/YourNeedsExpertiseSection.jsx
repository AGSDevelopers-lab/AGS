"use client";

import Link from "next/link";
import SlideIn from "@/components/SlideIn";

const expertiseServices = [
  {
    num: "01",
    title: "Web Design",
    description:
      "Beautiful, responsive, conversion-focused digital experiences designed around your users.",
    href: "/services/ui-ux-design",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Scalable, secure and modern websites and applications built for performance.",
    href: "/services/web-development",
  },
  {
    num: "03",
    title: "Branding",
    description:
      "Strong brand identity systems that create recognition, trust and lasting impact.",
    href: "/services",
  },
  {
    num: "04",
    title: "Product Design",
    description:
      "User-centred product experiences designed to make digital products easier and more useful.",
    href: "/services/ui-ux-design",
  },
  {
    num: "05",
    title: "Cloud Solutions",
    description:
      "Scalable, flexible cloud infrastructure designed to optimize performance, storage, and app deployment.",
    href: "/services/full-stack",
  },
  {
    num: "06",
    title: "Web Hosting",
    description:
      "Secure, high-speed hosting environments engineered to keep your websites safe, fast, and always accessible.",
    href: "/services",
  },
];

export default function YourNeedsExpertiseSection() {
  return (
    <section
      id="services"
      className="relative z-10 w-full bg-white py-16 sm:py-20 lg:py-28 text-gray-950 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-12 lg:px-16">
        {/* Header: Your Needs, Our Expertise */}
        <SlideIn from="left" distance={30} className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-normal tracking-tight text-gray-950 leading-[1.12]">
            Your Needs, Our{" "}
            <span className="text-[#8B5CF6] font-normal">Expertise</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            Your Vision, Our Expertise – Together, we bring ideas to life with tailored solutions that deliver real results. Let&apos;s build something amazing.
          </p>
        </SlideIn>

        {/* 6 Full-Width Service Rows */}
        <div className="w-full border-b border-gray-200/90">
          {expertiseServices.map((service, index) => (
            <SlideIn
              key={service.num}
              from="left"
              distance={20 + index * 5}
              className="w-full"
            >
              <Link
                href={service.href}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 py-7 sm:py-8 lg:py-9 border-t border-gray-200/90 transition-colors duration-300 hover:bg-gray-50/60 px-2 sm:px-4"
              >
                {/* Left: Number + Title */}
                <div className="flex items-center gap-5 sm:gap-8 shrink-0 md:w-[340px] lg:w-[420px]">
                  <span className="text-base sm:text-lg font-medium text-[#8B5CF6] shrink-0 w-8">
                    {service.num}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-gray-950 tracking-tight transition-colors duration-300 group-hover:text-[#8B5CF6]">
                    {service.title}
                  </h3>
                </div>

                {/* Middle: Description */}
                <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed flex-1 max-w-xl pl-13 md:pl-0">
                  {service.description}
                </p>

                {/* Right: Circular Arrow Button */}
                <div className="flex justify-end pl-13 md:pl-0 shrink-0">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#8B5CF6] text-[#8B5CF6] transition-all duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:scale-105 shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:rotate-45"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </Link>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
