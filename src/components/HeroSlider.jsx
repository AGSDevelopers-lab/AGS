"use client";

import { useState, useEffect } from "react";
import { useCtaForm } from "@/components/CtaFormProvider";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775027627/Branding_pgdxad.png",
    title: "Creative Solutions That Drive Growth",
    subtitle: "From concept to conversion.",
    cta: "Learn More",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940958/banner-2_wuntly.png",
    title: "Digital Growth  for Healthcare Brands",
    subtitle:
      "Helping hospitals and clinics grow online and attract more patients.",
    cta: "Learn More",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940959/banner-3_ke5feo.png",
    title: "Digital Solutions for Media & News Platforms",
    subtitle:
      "We help media brands build fast, scalable platforms to grow their audience.",
    cta: "Learn More",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775027628/ecommerce_gn6mja.png",
    title: "eCommerce Solutions for Growing Brands",
    subtitle: "High-converting stores that drive sales.",
    cta: "Learn More",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775027624/aws_vo4uvs.png",
    title: "Scalable Business Cloud Solutions",
    subtitle: "Build faster and scale smarter with cloud technology.",
    cta: "Learn More",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775027627/edtech_maj3bn.png",
    title: "Refined Solutions for eLearning Brands",
    subtitle: "Build and scale your online learning platform faster.",
    cta: "Learn More",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openForm } = useCtaForm();
  const activeSlide = slides[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-150 w-full flex items-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 mix-blend-screen"
            style={{ backgroundImage: "url(/overlay.png)" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,24,0.9)_0%,rgba(18,18,42,0.72)_28%,rgba(18,18,42,0.26)_48%,rgba(18,18,42,0.05)_68%,rgba(18,18,42,0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,16,0.14)_0%,rgba(6,7,16,0.28)_100%)]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="w-full mt-20 max-w-200 md:w-3/5 lg:max-w-190">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#EAE1FF] via-white to-[#c4a8fa] tracking-wide">
            {activeSlide.title}
          </h1>
          <p className="text-lg md:text-lg text-white/90 mb-10 font-thin">
            {activeSlide.subtitle}
          </p>
          <button
            type="button"
            className="group flex items-center space-x-3 border border-white bg-white px-6 py-3 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"
            onClick={() => openForm()}
          >
            <span>{activeSlide.cta}</span>
            <svg
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-700 group-hover:rotate-45"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}
