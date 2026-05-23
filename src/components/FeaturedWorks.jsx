import Link from "next/link";

const works = [
  {
    name: "Bhairal",
    slug: "bhairal",
    label: "Website Development",
    blurb:
      "Hire the right influencers to grow your brand faster.",
    description:
      "Connect with verified creators, launch campaigns, and drive real engagement across social platforms.",
    image: "/product-5.png",
    href: "https://www.figma.com/proto/TC6Mlja9pb7gmhu7izyDvc/Influencer-Case-study?node-id=1-92&p=f&t=v7tYnM8ubREWLcyK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "Mangal Materials",
    slug: "mangal-materials",
    label: "App Redesign",
    blurb:
      "It is your one-stop destination for all essential items for every spiritual ritual.",
    description:
      "Mangal Materials provides goddess idols and all essential items for every spiritual ritual.",
    image: "/product-2.png",
    href: "https://www.figma.com/proto/xNnhifFuOzwF3uouIYKQWC/Mangal-Materials-Case-study?node-id=11-17&t=a8hh5O46d2GbS3ju-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "TotoJan",
    slug: "totojan",
    label: "App Development",
    blurb:
      "TotoJan makes taxi rides simple. Book your ride anytime, anywhere.",
    description:
      "TotoJan lets you book toto rides instantly for smooth and affordable local travel.",
    image: "/product-4.png",
    href: "https://www.figma.com/proto/NBOI7DXn8ug8hMkQB6B7Do/Totojan-Case-study?node-id=1-157&t=xpe8bxWQX9I6tZ2H-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "Dhunseri",
    slug: "dhunseri",
    label: "Website Redesign",
    blurb:
      "It is engaged in the manufacturing and sale of premium tea.",
    description:
      "Dhunseri Tea & Industries Limited is a trusted name in tea manufacturing and distribution.",
    image: "/product-3.png",
    href: "https://www.figma.com/proto/D9F8w0qbj3yeX1WwhjQTrT/Dhunseri-Case-Study?node-id=1-2&t=zLHzFULkEWQlHTgp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

function PortfolioButton() {
  return (
    <Link 
      href="/portfolio"
      className="group inline-flex items-center gap-3 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
    >
      <span>All Portfolio</span>
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-black text-[9px] transition-transform duration-500 group-hover:rotate-45">
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
    </Link>
  );
}

function WorkCard({ work }) {
  return (
    <article className="group relative overflow-hidden border border-white/8 bg-transparent">
      <div className="grid">
        <div className="relative grid min-h-[152px] grid-cols-[1.18fr_0.82fr] overflow-hidden transition duration-500 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#E6DBFF_0%,#F6F6F6_44%,#D8D7FF_100%)] transition duration-500 group-hover:opacity-0" />
          <div className="absolute inset-0 bg-black/0 backdrop-blur-0 transition duration-500 group-hover:bg-black/55 group-hover:backdrop-blur-md" />
          <div className="relative z-10 flex flex-col justify-between p-3 text-black transition duration-500 group-hover:text-white sm:p-6">
            <div>
              <span className="inline-flex rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-[0.5rem] font-medium uppercase tracking-[0.08em] text-black/55 transition duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/70">
                {work.label}
              </span>
              <Link
                href={`/portfolio/${work.slug}`}
                className="mt-3 block text-[1.7rem] leading-none font-medium tracking-[-0.05em]"
              >
                {work.name}
              </Link>
              <p className="mt-3 max-w-[290px] text-[0.78rem] leading-[1.65] text-black/80 transition duration-500 group-hover:text-white/72 sm:max-w-[260px]">
                {work.blurb}
              </p>
            </div>
          </div>

          <div className="relative z-10 overflow-hidden">
            <Link
              href={`/portfolio/${work.slug}`}
              className="absolute inset-3 bg-contain bg-right bg-no-repeat transition duration-500 group-hover:scale-[1.03]"
              style={{ backgroundImage: `url(${work.image})` }}
            />
            <a
              href={work.href}
              target="_blank"
              rel="noreferrer"
              title="View Figma Prototype"
              className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black hover:bg-white/80 transition-colors shadow-md"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
          </div>
        </div>

        <div className="min-h-[88px] bg-transparent px-5 py-4 sm:px-6">
          <Link
            href={`/portfolio/${work.slug}`}
            className="text-[1.45rem] leading-none font-medium tracking-[-0.04em] text-white hover:text-white/80 transition-colors"
          >
            {work.name}
          </Link>
          <p className="mt-3 max-w-[400px] text-[0.85rem] leading-[1.72] text-white/70">
            {work.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedWorks() {
  return (
    <section id="portfolio" className="relative z-10 w-full overflow-hidden pb-12 pt-8 scroll-mt-20 sm:pb-20 sm:pt-12">
      <div className="relative w-full px-6 sm:px-8 lg:px-26">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[28px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="relative flex flex-col gap-5 pb-4 sm:gap-6 sm:pb-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[720px]">
              <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
                Featured Works
              </h2>
              <p className="mt-5 w-full text-[1rem] leading-[1.75] text-white/78">
                Explore our range of high-quality products crafted with care
                and expertise.
              </p>
            </div>

            <div className="lg:pt-[5.9rem]">
              <PortfolioButton />
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-2">
            {works.map((work) => (
              <WorkCard key={work.name} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
