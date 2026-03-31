import Image from "next/image";

const products = [
  {
    name: "Forumlyy",
    description:
      "A dedicated blogging and publishing platform for creators. Forumlyy offers a seamless space to write, share, and discover engaging articles on diverse topics.",
    whiteLogo: "/forumlyy_whitelogo.png",
    colorLogo: "/forumlyy_colorlogo.png",
    gradient:
      "linear-gradient(135deg, #f04cbc 0%, #d93cbc 48%, #a72fc9 100%)",
    textFirst: true,
    href: "https://forumlyy.com",
  },
  {
    name: "adx",
    description:
      "An AGS-powered platform creating ready-to-run image and video ad creatives for Shopify and e-commerce brands - fast, affordable, and built for performance.",
    whiteLogo: "/adx_whitelogo.png",
    colorLogo: "/adx_colorlogo.png",
    gradient:
      "linear-gradient(135deg, #5510f7 0%, #7d16ff 50%, #b01cff 100%)",
    textFirst: false,
    href: "https://adxxpress.com/",
  },
];

function ProductsButton() {
  return (
    <button className="!hidden items-center gap-3 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
      <span>View More</span>
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-black text-[9px]">
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      </span>
    </button>
  );
}

function ProductTextCard({ description }) {
  return (
    <div className="flex min-h-[132px] items-center self-center bg-[#3a3a3f] px-6 py-6 sm:min-h-[176px] sm:px-10 sm:py-8">
      <p className="max-w-[32rem] text-[1rem] font-thin leading-[1.7] text-white/92 sm:text-[1.18rem] lg:text-[1.24rem]">
        {description}
      </p>
    </div>
  );
}

function ProductLogoCard({ product }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${product.name}`}
      className="group relative flex min-h-[228px] items-center justify-center self-stretch overflow-hidden px-8 py-8 transition duration-500 sm:min-h-[244px] lg:min-h-[236px]"
      style={{ backgroundImage: product.gradient }}
    >
      <div className="absolute inset-0 bg-white opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),rgba(255,255,255,0)_62%)] opacity-80 transition duration-500 group-hover:opacity-0" />
      <Image
        src={product.whiteLogo}
        alt={`${product.name} logo`}
        width={520}
        height={160}
        className="relative z-10 h-auto max-h-[110px] w-auto max-w-[84%] object-contain opacity-100 transition duration-500 group-hover:opacity-0 sm:max-h-[124px]"
      />
      <Image
        src={product.colorLogo}
        alt={`${product.name} logo`}
        width={520}
        height={160}
        className="absolute z-10 h-auto max-h-[110px] w-auto max-w-[84%] object-contain opacity-0 transition duration-500 group-hover:opacity-100 sm:max-h-[124px]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-4 px-6 py-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:px-8">
        <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.01em] text-black underline underline-offset-4">
          <span>{product.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
          <span className="flex h-5 w-5 items-center justify-center text-black">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </span>
        </span>
      </div>
    </a>
  );
}

function ProductRow({ product }) {
  return (
    <div
      className={`grid gap-0 grid-cols-1 ${
        product.textFirst
          ? "lg:grid-cols-[1.18fr_0.98fr]"
          : "lg:grid-cols-[0.98fr_1.18fr]"
      } lg:items-center`}
    >
      {product.textFirst ? (
        <>
          <div className="order-2 lg:order-1">
            <ProductTextCard description={product.description} />
          </div>
          <div className="order-1 lg:order-2">
            <ProductLogoCard product={product} />
          </div>
        </>
      ) : (
        <>
          <div className="order-1">
            <ProductLogoCard product={product} />
          </div>
          <div className="order-2">
            <ProductTextCard description={product.description} />
          </div>
        </>
      )}
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative z-10 w-full overflow-hidden pb-12 pt-8 scroll-mt-20 sm:pb-20 sm:pt-12"
    >
      <div className="relative w-full px-6 sm:px-8 lg:px-26">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[30px] px-4 py-3 sm:px-6 sm:py-4">
            <div className="grid gap-5 lg:grid-cols-[1.1fr_auto] lg:items-start">
              <div className="pr-4">
                <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
                  Our Products
                </h2>
                <p className="mt-5 w-full text-[1rem] leading-[1.75] text-white/78">
                  A growing portfolio of digital brands, serving from
                  specialized websites to global media channels.
                </p>
              </div>

              <div className="lg:pt-[5.9rem]">
                <ProductsButton />
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-7 lg:mt-10">
            {products.map((product) => (
              <ProductRow key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
