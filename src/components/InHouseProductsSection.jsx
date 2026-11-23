"use client";

import Image from "next/image";
import Link from "next/link";
import SlideIn from "@/components/SlideIn";

const inHouseProducts = [
  {
    id: "forumlyy",
    name: "FORUMLYY",
    subtitle: "Publishing for creators.",
    tag: "PUBLISHING PLATFORM",
    gradient: "linear-gradient(180deg, #FDF4F6 0%, #F5E8EE 100%)",
    logoType: "image",
    logoSrc: "/forumlyy_colorlogo.png",
    logoAlt: "Forumlyy",
    href: "https://forumlyy.com",
    external: true,
  },
  {
    id: "adx",
    name: "ADX",
    subtitle: "Performance ad generator.",
    tag: "AD CREATIVES",
    gradient: "linear-gradient(180deg, #F3EFF9 0%, #E8E0F5 100%)",
    logoType: "image",
    logoSrc: "/adx_colorlogo.png",
    logoAlt: "adx",
    href: "https://adxxpress.com/",
    external: true,
  },
  {
    id: "hotel-os",
    name: "HOTEL OS",
    subtitle: "All-in-one hotel management.",
    tag: "HOTEL MANAGEMENT SOFTWARE",
    gradient: "linear-gradient(180deg, #F0F6F1 0%, #E2EFE4 100%)",
    logoType: "text",
    textLogo: "Hotel OS",
    textColor: "text-[#22C55E]",
    logoAlt: "Hotel OS",
    href: "/products",
    external: false,
  },
  {
    id: "medicai",
    name: "MEDICAI",
    subtitle: "Precision Medical Knowledge.",
    tag: "MEDICAL STUDY ASSISTANT",
    gradient: "linear-gradient(180deg, #EFF7F9 0%, #E0EFF3 100%)",
    logoType: "text",
    textLogo: "MedicAI",
    textColor: "text-[#0284C7]",
    logoAlt: "MedicAI",
    href: "/products",
    external: false,
  },
];

export default function InHouseProductsSection() {
  return (
    <section
      id="products"
      className="relative z-10 w-full bg-white py-16 sm:py-20 lg:py-28 text-gray-950 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1560px] px-6 sm:px-12 lg:px-16">
        {/* Header: Our In House Products */}
        <SlideIn from="left" distance={30} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-normal tracking-tight text-gray-950 leading-[1.12]">
            Our In House{" "}
            <span className="text-[#8B5CF6] font-normal">Products</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            A growing portfolio of digital brands, from specialized publishing platforms to global media channels.
          </p>
        </SlideIn>

        {/* 4 Cards Grid / Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
          {inHouseProducts.map((prod, index) => {
            const CardWrapper = prod.external ? "a" : Link;
            const extraProps = prod.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <SlideIn
                key={prod.id}
                from="left"
                distance={20 + index * 10}
                className="w-full"
              >
                <CardWrapper
                  href={prod.href}
                  {...extraProps}
                  className="group relative flex flex-col justify-between h-[480px] sm:h-[506px] w-full border border-gray-200/90 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden select-none block"
                  style={{ background: prod.gradient }}
                >
                  {/* Subtle AGS Monogram Watermark in Top Right */}
                  <div className="pointer-events-none absolute right-3 top-3 w-[110px] h-[210px] opacity-[0.22] transition-opacity duration-300 group-hover:opacity-30">
                    <Image
                      src="/ags-monogram-hd.png"
                      alt="AGS Monogram"
                      fill
                      className="object-contain object-top"
                    />
                  </div>

                  {/* Top: Pill Tag */}
                  <div className="relative z-10 self-start">
                    <span className="inline-block bg-[#8E9297] text-white text-[10px] sm:text-[11px] font-semibold tracking-wider px-3 py-1.5 uppercase shadow-sm">
                      {prod.tag}
                    </span>
                  </div>

                  {/* Center: Brand Logo */}
                  <div className="relative z-10 flex flex-1 items-center justify-center my-6">
                    {prod.logoType === "image" ? (
                      <div className="relative w-44 sm:w-52 h-20 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={prod.logoSrc}
                          alt={prod.logoAlt}
                          fill
                          className="object-contain object-center"
                        />
                      </div>
                    ) : (
                      <span
                        className={`text-4xl sm:text-[46px] font-normal tracking-tight ${prod.textColor} transition-transform duration-300 group-hover:scale-105`}
                      >
                        {prod.textLogo}
                      </span>
                    )}
                  </div>

                  {/* Bottom: Title & Subtitle */}
                  <div className="relative z-10 flex flex-col pt-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
                      {prod.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-700 font-normal">
                      {prod.subtitle}
                    </p>
                  </div>
                </CardWrapper>
              </SlideIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
