"use client";

import Link from "next/link";
import SlideIn from "@/components/SlideIn";

const works = [
  {
    name: "Molifera Media",
    slug: "molifera-media",
    label: "Website Development",
    blurb: "Your 360° partner for strategy, marketing, and brand growth.",
    description:
      "Your 360° marketing partner—from strategy to execution, driving growth across digital and offline channels.",
    image: "/showcase/molifera-media.png",
    href: "https://www.moliferamedia.com/",
  },
  {
    name: "Mangal Materials",
    slug: "mangal-materials",
    label: "App Development",
    blurb:
      "It's your one-stop destination for goddess idols, puja samagri, and spiritual essentials.",
    description:
      "Mangal Materials provides goddess idols, puja samagri, and all essential items for every spiritual ritual.",
    image: "/showcase/mangal-materials.png",
    href: "https://www.figma.com/proto/xNnhifFuOzwF3uouIYKQWC/Mangal-Materials-Case-study?node-id=11-17&t=a8hh5O46d2GbS3ju-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "TotoJan",
    slug: "totojan",
    label: "App Development",
    blurb:
      "TotoJan makes toto rides simple—book your ride anytime, anywhere.",
    description:
      "TotoJan lets you book toto rides instantly for smooth and affordable local travel.",
    image: "/showcase/totojan-ride.png",
    href: "https://www.figma.com/proto/NBOI7DXn8ug8hMkQB6B7Do/Totojan-Case-study?node-id=1-157&t=xpe8bxWQX9I6tZ2H-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "Dhunseri",
    slug: "dhunseri",
    label: "Website Development",
    blurb:
      "It's engaged in the manufacturing and sale of premium tea with years.",
    description:
      "Dhunseri Tea & Industries Limited is a trusted name in tea manufacturing and distribution.",
    image: "/showcase/dhunseri-tea.png",
    href: "https://dhunseritea.com/",
  },
];

function PortfolioButton() {
  return (
    <Link
      href="/portfolio"
      className="group inline-flex items-center gap-2.5 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
    >
      <span>All Portfolio</span>
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-transform duration-300 group-hover:rotate-45">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-3 w-3"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </span>
    </Link>
  );
}

function WorkCard({ work }) {
  return (
    <article className="group flex flex-col overflow-hidden bg-transparent">
      {/* Top Banner Card with Gradient & Project Mockup */}
      <div className="relative grid min-h-[200px] sm:min-h-[220px] grid-cols-[1.15fr_0.85fr] overflow-hidden rounded-xl border border-gray-200/80 bg-[linear-gradient(90deg,#EBE6FF_0%,#F6F5FE_50%,#DFD9FF_100%)] p-5 sm:p-6 transition-all duration-300 hover:shadow-lg">
        {/* Left text inside preview banner */}
        <div className="relative z-10 flex flex-col justify-between pr-3">
          <div>
            <span className="inline-flex rounded-full border border-purple-300/80 bg-white/70 px-3 py-1 text-[11px] font-medium text-purple-700">
              {work.label}
            </span>
            <Link
              href={`/portfolio/${work.slug}`}
              className="mt-3 block text-xl sm:text-2xl font-bold tracking-tight text-gray-950 transition-colors group-hover:text-purple-700"
            >
              {work.name}
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              {work.blurb}
            </p>
          </div>
        </div>

        {/* Right preview artwork + Arrow pill */}
        <div className="relative z-10 flex items-center justify-end overflow-hidden">
          <Link
            href={`/portfolio/${work.slug}`}
            className="absolute inset-0 bg-contain bg-right bg-no-repeat transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${work.image})` }}
          />
          <a
            href={work.href}
            target="_blank"
            rel="noreferrer"
            title={`View ${work.name}`}
            className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-110"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="h-3.5 w-3.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Description matching Figma Slice 5 */}
      <div className="pt-4 pb-2">
        <Link
          href={`/portfolio/${work.slug}`}
          className="text-xl sm:text-2xl font-medium tracking-tight text-gray-950 transition-colors hover:text-[#8B5CF6]"
        >
          {work.name}
        </Link>
        <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
          {work.description}
        </p>
      </div>
    </article>
  );
}

export default function FeaturedWorks() {
  return (
    <section
      id="portfolio"
      className="relative z-10 w-full bg-[#FAF9FF] py-16 sm:py-20 lg:py-28 text-gray-950 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-12 lg:px-16">
        {/* Header: Title + Subtitle + All Portfolio Button */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12 sm:mb-16">
          <SlideIn from="left" distance={30} className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-normal tracking-tight text-gray-950 leading-[1.12]">
              Featured Works
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-500 font-light leading-relaxed">
              Delivering excellence across the digital landscape with bespoke development tailored to industry leaders.
            </p>
          </SlideIn>

          <SlideIn from="right" distance={20} className="shrink-0">
            <PortfolioButton />
          </SlideIn>
        </div>

        {/* 2x2 Grid of Featured Works */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2">
          {works.map((work, index) => (
            <SlideIn
              key={work.name}
              from={index % 2 === 0 ? "left" : "right"}
              distance={25}
            >
              <WorkCard work={work} />
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
