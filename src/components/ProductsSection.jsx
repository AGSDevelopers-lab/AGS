import Image from "next/image";
import Link from "next/link";

const releasedProducts = [
  {
    name: "Forumlyy",
    tag: "Publishing Platform",
    description:
      "A dedicated blogging and publishing platform for creators. Forumlyy offers a seamless space to write, share, and discover engaging articles on diverse topics.",
    whiteLogo: "/forumlyy_whitelogo.png",
    colorLogo: "/forumlyy_colorlogo.png",
    href: "https://forumlyy.com",
    gradient: "linear-gradient(135deg, #f04cbc 0%, #d93cbc 48%, #a72fc9 100%)",
    accent: "#d93cbc",
  },
  {
    name: "adx",
    tag: "Ad Creatives",
    description:
      "An AGS-powered platform creating ready-to-run image and video ad creatives for Shopify and e-commerce brands — fast, affordable, and built for performance.",
    whiteLogo: "/adx_whitelogo.png",
    colorLogo: "/adx_colorlogo.png",
    href: "https://adxxpress.com/",
    gradient: "linear-gradient(135deg, #5510f7 0%, #7d16ff 50%, #b01cff 100%)",
    accent: "#7d16ff",
  },
];

const flagshipProduct = {
  name: "MedicAI",
  tag: "Medical AI · Powered By AWS",
  description:
    "An AI-powered chatbot built for Post-Graduate Medical Students. MedicAI delivers fast, accurate, curriculum-aligned answers to help PG students study smarter and prepare with confidence. Built on AWS Bedrock, it combines the power of large language models with medically curated knowledge.",
  gradient: "linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #14b8a6 100%)",
  accent: "#06b6d4",
};

const readyProducts = [
  {
    name: "AI Learning Suite",
    tag: "Learning Management System",
    description:
      "An AI-powered Learning Management System designed to deliver personalized, adaptive education experiences — built for institutions that want to move beyond static course delivery.",
    gradient: "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
    accent: "#f97316",
  },
  {
    name: "Hotel OS",
    tag: "Hotel Management Software",
    description:
      "A full-stack hotel management platform covering reservations, front desk operations, housekeeping, and guest experience — built for modern hospitality businesses.",
    gradient: "linear-gradient(135deg, #16a34a 0%, #84cc16 100%)",
    accent: "#4ade80",
  },
];


function ArrowIcon({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H9M17 7v8" />
    </svg>
  );
}

function ProductCard({ product }) {
  return (
    <Link
      href={product.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${product.name}`}
      className="group flex flex-col border border-white/[0.07] hover:border-white/16 transition-colors duration-300 overflow-hidden"
    >
      <div
        className="relative flex items-center justify-center px-10 py-16 lg:py-20 overflow-hidden"
        style={{ backgroundImage: product.gradient }}
      >
        <div className="absolute inset-0 bg-black/52 group-hover:bg-black/38 transition-colors duration-500" />
        <Image
          src={product.whiteLogo}
          alt={`${product.name} logo`}
          width={200}
          height={72}
          className="relative z-10 h-auto max-h-12 w-auto max-w-40 object-contain"
        />
      </div>
      <div className="h-px shrink-0 bg-white/[0.07] group-hover:bg-white/16 transition-colors duration-300" />
      <div
        className="flex flex-col flex-1 px-7 py-7 lg:px-9 lg:py-8 gap-3 border-l-2"
        style={{ borderLeftColor: product.accent + "55" }}
      >
        <span className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-white/30">
          {product.tag}
        </span>
        <h3 className="text-[1.55rem] lg:text-[1.75rem] font-extralight tracking-[-0.03em] text-white leading-none">
          {product.name}
        </h3>
        <p className="text-[0.88rem] leading-[1.75] text-white/45 font-light">
          {product.description}
        </p>
        <div className="mt-auto pt-5 flex items-center gap-1.5 text-[0.75rem] text-white/25 group-hover:text-white/55 transition-colors duration-300">
          <span>{product.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
}

function FlagshipCard({ product }) {
  return (
    <div
      className="relative flex flex-col lg:flex-row border border-dashed overflow-hidden"
      style={{ borderColor: product.accent + "33" }}
    >
      {/* Top gradient bar */}
      <div className="absolute top-0 inset-x-0 h-[3px]" style={{ backgroundImage: product.gradient }} />

      {/* Subtle bg tint */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: product.gradient }} />

      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        {/* Left — identity */}
        <div className="flex flex-col justify-center px-8 pt-10 pb-8 lg:px-12 lg:py-12 lg:w-[340px] xl:w-[380px] shrink-0 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-white/35">
              {product.tag}
            </span>
            <span
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.6rem] font-medium tracking-[0.14em] uppercase"
              style={{ borderColor: product.accent + "50", color: product.accent }}
            >
              Coming Soon
            </span>
          </div>
          <h3
            className="text-[2.4rem] lg:text-[3rem] xl:text-[3.4rem] font-extralight tracking-[-0.05em] leading-none"
            style={{
              backgroundImage: product.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {product.name}
          </h3>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px shrink-0" style={{ backgroundColor: product.accent + "22" }} />
        <div className="lg:hidden h-px shrink-0" style={{ backgroundColor: product.accent + "22" }} />

        {/* Right — description */}
        <div className="flex flex-col justify-center flex-1 px-8 pb-10 pt-0 lg:px-12 lg:py-12 gap-4">
          <p className="text-[0.95rem] leading-[1.85] text-white/50 font-light max-w-2xl">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ReadyCard({ product }) {
  return (
    <div className="relative group flex flex-col border border-white/10 overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-[3px] w-full shrink-0" style={{ backgroundImage: product.gradient }} />

      {/* Subtle bg tint — always */}
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: product.gradient }} />
      {/* Hover bg tint — lifts on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300" style={{ backgroundImage: product.gradient }} />

      <div className="relative z-10 flex flex-col flex-1 px-7 py-8 lg:px-9 lg:py-10 gap-4">
        <span className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-white/35">
          {product.tag}
        </span>
        <h3
          className="text-[1.7rem] lg:text-[2rem] font-extralight tracking-[-0.04em] leading-none"
          style={{
            backgroundImage: product.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {product.name}
        </h3>
        <p className="text-[0.88rem] leading-[1.8] text-white/45 font-light flex-1">
          {product.description}
        </p>
        <a
          href="#contact"
          className="group/btn mt-2 self-start relative flex items-center gap-2 px-4 py-2.5 text-[0.78rem] font-medium tracking-wide border overflow-hidden transition-colors duration-300"
          style={{ borderColor: product.accent + "55", color: product.accent }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"
            style={{ backgroundColor: product.accent }}
          />
          <span className="relative z-10">Contact to Purchase</span>
          <span className="relative z-10"><ArrowIcon size={10} /></span>
        </a>
      </div>
    </div>
  );
}


export default function ProductsSection() {
  return (
    <section id="products" className="relative z-10 w-full overflow-hidden pb-12 pt-8 scroll-mt-20 sm:pb-20 sm:pt-12">
      <div className="relative w-full px-6 sm:px-8 lg:px-26">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[28px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          {/* Header */}
          <div className="relative flex flex-col gap-5 pb-4 sm:gap-6 sm:pb-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[720px]">
              <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
                Our Products
              </h2>
              <p className="mt-5 w-full text-[1rem] leading-[1.75] text-white/78">
                A growing portfolio of digital brands, from specialized publishing platforms to global media channels.
              </p>
            </div>
          </div>

        <div className="flex flex-col gap-px">
          {/* Row 1 — Released (with logos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
            {releasedProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          {/* Row 2 — MedicAI flagship */}
          <FlagshipCard product={flagshipProduct} />

          {/* Row 3 — Ready to sell */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
            {readyProducts.map((product) => (
              <ReadyCard key={product.name} product={product} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
