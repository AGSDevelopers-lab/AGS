"use client";

import Image from "next/image";
import Link from "next/link";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";

const servicesData = [
  {
    title: "Website Development",
    slug: "website-development",
    description:
      "We craft high-performance websites tailored to your brand identity and business goals. From sleek corporate sites to complex e-commerce platforms, our development team delivers pixel-perfect, lightning-fast experiences that convert visitors into customers.",
    image: "/Website.png",
    bullets: [
      "Custom Website Design",
      "E-Commerce Development",
      "CMS Integration",
      "Performance Optimization",
      "Responsive Design",
      "SEO-Ready Architecture",
    ],
  },
  {
    title: "UI/UX & Graphic Design",
    slug: "ui-ux-design",
    description:
      "Great design is more than aesthetics — it's about creating intuitive, accessible experiences that delight users. Our design team combines user research with creative excellence to deliver interfaces and visuals that elevate your brand.",
    image: "/image 1.png",
    bullets: [
      "User Research & Wireframing",
      "Interactive Prototyping",
      "Visual Design Systems",
      "Accessibility Compliance",
      "Brand Identity Design",
      "Illustration & Iconography",
    ],
  },
  {
    title: "Digital Solutions",
    slug: "digital-solutions",
    description:
      "Navigate the digital landscape with confidence. We provide end-to-end digital strategy and marketing solutions that drive measurable growth, helping you reach the right audience with the right message at the right time.",
    image: "/image 3.png",
    bullets: [
      "Digital Strategy Consulting",
      "Marketing Automation",
      "Analytics & Reporting",
      "Social Media Management",
      "Content Strategy",
      "Lead Generation",
    ],
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Bring your ideas to life on every screen. We build robust, scalable mobile applications for iOS and Android that deliver seamless experiences — from concept and design through launch and ongoing support.",
    image: "/image 5.png",
    bullets: [
      "iOS & Android Development",
      "Cross-Platform Apps",
      "App UI/UX Design",
      "API Integration",
      "App Store Optimization",
      "Maintenance & Support",
    ],
  },
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    description:
      "Unlock the power of artificial intelligence to automate processes, uncover insights, and create competitive advantages. Our AI experts design and deploy intelligent systems that transform how your business operates.",
    image: "/image 6.png",
    bullets: [
      "AI Strategy & Consulting",
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "AI-Powered Analytics",
      "Intelligent Automation",
    ],
  },
];

export default function ServicesPage() {
  const { openForm } = useCtaForm();

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black pb-0">
      {/* Background Glows (Same as About Page) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#020205_22%,#010103_48%,#000000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_16%,rgba(86,126,255,0.16),rgba(0,0,0,0)_18%),radial-gradient(circle_at_96%_14%,rgba(120,96,255,0.18),rgba(0,0,0,0)_18%),radial-gradient(circle_at_3%_48%,rgba(72,118,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_97%_54%,rgba(126,84,255,0.15),rgba(0,0,0,0)_18%),radial-gradient(circle_at_2%_82%,rgba(82,130,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_98%_88%,rgba(128,88,255,0.14),rgba(0,0,0,0)_18%)]" />
        <div className="absolute left-[-14%] top-[12%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(104,158,255,1)_0%,rgba(56,112,255,0.82)_22%,rgba(24,70,255,0.34)_52%,rgba(0,0,0,0)_76%)] blur-[96px] mix-blend-screen" />
        <div className="absolute right-[-16%] top-[2%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(145,108,255,0.98)_0%,rgba(87,90,255,0.76)_24%,rgba(50,53,186,0.3)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
        <div className="absolute left-[-18%] top-[26%] h-168 w-2xl rounded-full bg-[radial-gradient(circle,rgba(98,156,255,1)_0%,rgba(55,118,255,0.8)_24%,rgba(25,72,255,0.34)_54%,rgba(0,0,0,0)_78%)] blur-[108px] mix-blend-screen" />
        <div className="absolute right-[-14%] top-[34%] h-144 w-xl rounded-full bg-[radial-gradient(circle,rgba(101,160,255,0.96)_0%,rgba(54,111,255,0.72)_24%,rgba(25,71,236,0.28)_56%,rgba(0,0,0,0)_78%)] blur-[96px] mix-blend-screen" />
        <div className="absolute left-[-14%] top-[48%] h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(144,96,255,0.96)_0%,rgba(92,74,255,0.68)_24%,rgba(54,42,188,0.24)_56%,rgba(0,0,0,0)_78%)] blur-[92px] mix-blend-screen" />
        <div className="absolute right-[-12%] top-[58%] h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(152,104,255,0.96)_0%,rgba(94,77,255,0.7)_24%,rgba(53,40,190,0.26)_56%,rgba(0,0,0,0)_78%)] blur-[94px] mix-blend-screen" />
        <div className="absolute left-[-16%] top-[72%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(106,162,255,0.96)_0%,rgba(56,114,255,0.72)_24%,rgba(28,70,236,0.26)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
        <div className="absolute right-[-18%] top-[82%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(148,104,255,0.92)_0%,rgba(92,74,255,0.66)_24%,rgba(51,40,186,0.22)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[120px_120px]" />
      </div>

      <div className="relative z-10 w-full pt-16 lg:pt-24">
        {/* HERO SECTION */}
        <section className="relative w-full flex flex-col items-center justify-center px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/10">
          <div className="relative z-10 max-w-4xl text-center">
            <h1 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-5xl md:text-7xl font-light tracking-tight text-transparent">
              Our Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              End-to-end digital solutions designed to transform your business — from stunning websites and intuitive apps to AI-powered intelligence.
            </p>
            <button
              type="button"
              onClick={() => openForm()}
              className="mt-10 mx-auto group inline-flex items-center gap-3 border border-white bg-white px-6 py-3 font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"
            >
              <span>Get Started</span>
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
        </section>

        {/* SERVICE SECTIONS */}
        {servicesData.map((service, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <section
              key={service.title}
              className="border-t border-white/5 py-20"
            >
              <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-26">
                <div
                  className={`flex flex-col gap-12 lg:gap-16 items-center ${
                    isImageLeft
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading={index < 2 ? "eager" : "lazy"}
                      className="object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="w-full lg:w-1/2">
                    <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-3xl md:text-4xl lg:text-[2.75rem] font-normal tracking-tight text-transparent leading-tight">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-[1rem] leading-[1.8] text-white/70 font-light">
                      {service.description}
                    </p>

                    {/* Bullet Grid */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-center gap-3"
                        >
                          <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
                          <span className="text-[0.9rem] text-white/70">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons Double Setup */}
                    <div className="mt-10 flex flex-wrap gap-4 items-center">
                      <Link
                        href={`/services/${service.slug}`}
                        className="group inline-flex items-center gap-3 border border-white/30 bg-transparent px-5 py-3 text-[0.95rem] font-medium text-white transition-all duration-700 hover:border-white hover:bg-white hover:text-black"
                      >
                        <span>Learn More</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="transition-transform duration-700 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>

                      <button
                        type="button"
                        onClick={() => openForm({ service: service.title, lockService: true })}
                        className="group inline-flex items-center gap-3 border border-white bg-white px-5 py-3 text-[0.95rem] font-medium text-black transition-all duration-700 hover:bg-transparent hover:text-white"
                      >
                        <span>Get Started</span>
                        <svg
                          width="20"
                          height="20"
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
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="relative z-10 w-full">
        <CTASection />
      </div>
    </main>
  );
}
