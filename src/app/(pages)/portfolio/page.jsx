"use client";

import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";

const projects = [
  {
    name: "Bhairal",
    label: "Website Development",
    description:
      "Hire the right influencers to grow your brand faster.",
    tags: ["React", "Next.js", "Node.js"],
    image: "/product-5.png",
    href: "https://www.figma.com/proto/TC6Mlja9pb7gmhu7izyDvc/Influencer-Case-study?node-id=1-92&p=f&t=v7tYnM8ubREWLcyK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "Mangal Materials",
    label: "App Redesign",
    description:
      "Your one-stop destination for all essential items for every spiritual ritual.",
    tags: ["React", "Firebase", "UX"],
    image: "/product-2.png",
    href: "https://www.figma.com/proto/xNnhifFuOzwF3uouIYKQWC/Mangal-Materials-Case-study?node-id=11-17&t=a8hh5O46d2GbS3ju-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "TotoJan",
    label: "App Development",
    description:
      "TotoJan makes taxi rides simple. Book your ride anytime, anywhere.",
    tags: ["React Native", "AWS", "Node.js"],
    image: "/product-4.png",
    href: "https://www.figma.com/proto/NBOI7DXn8ug8hMkQB6B7Do/Totojan-Case-study?node-id=1-157&t=xpe8bxWQX9I6tZ2H-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "Dhunseri",
    label: "Website Redesign",
    description:
      "A trusted name in premium tea manufacturing and distribution.",
    tags: ["Next.js", "AWS", "Vercel"],
    image: "/product-3.png",
    href: "https://www.figma.com/proto/D9F8w0qbj3yeX1WwhjQTrT/Dhunseri-Case-Study?node-id=1-2&t=zLHzFULkEWQlHTgp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

function HeroCTA() {
  const { openForm } = useCtaForm();

  return (
    <button
      type="button"
      onClick={() => openForm()}
      className="group inline-flex items-center gap-3 border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-700 hover:bg-transparent hover:text-white"
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
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden border border-white/8 bg-transparent">
      <div className="grid">
        <div className="relative grid min-h-[152px] grid-cols-[1.18fr_0.82fr] overflow-hidden transition duration-500 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#E6DBFF_0%,#F6F6F6_44%,#D8D7FF_100%)] transition duration-500 group-hover:opacity-0" />
          <div className="absolute inset-0 bg-black/0 backdrop-blur-0 transition duration-500 group-hover:bg-black/55 group-hover:backdrop-blur-md" />
          <div className="relative z-10 flex flex-col justify-between p-3 text-black transition duration-500 group-hover:text-white sm:p-6">
            <div>
              <span className="inline-flex rounded-full border border-black/10 bg-black/5 px-2.5 py-1 text-[0.5rem] font-medium uppercase tracking-[0.08em] text-black/55 transition duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/70">
                {project.label}
              </span>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-[1.7rem] leading-none font-medium tracking-[-0.05em]"
              >
                {project.name}
              </a>
              <p className="mt-3 max-w-[290px] text-[0.78rem] leading-[1.65] text-black/80 transition duration-500 group-hover:text-white/72 sm:max-w-[260px]">
                {project.description}
              </p>
            </div>
          </div>

          <div className="relative z-10 overflow-hidden">
            <div
              className="absolute inset-3 bg-contain bg-right bg-no-repeat transition duration-500 group-hover:scale-[1.03]"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-white text-black"
            >
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
            </a>
          </div>
        </div>

        <div className="min-h-[88px] bg-transparent px-5 py-4 sm:px-6">
          <h4 className="text-[1.45rem] leading-none font-medium tracking-[-0.04em] text-white">
            {project.name}
          </h4>
          <p className="mt-3 max-w-[400px] text-[0.85rem] leading-[1.72] text-white/70">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black pb-0">
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
        <section className="relative flex w-full flex-col items-center justify-center px-6 pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
          <h1 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
            Featured Works
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-[1rem] leading-[1.75] text-white/78">
            Explore our portfolio of digital products crafted with precision and
            purpose.
          </p>
          <div className="mt-8">
            <HeroCTA />
          </div>
        </section>

        <section className="relative w-full px-6 pb-20 sm:px-8 lg:px-26">
          <div className="relative mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-10 w-full">
        <CTASection />
      </div>
    </main>
  );
}
