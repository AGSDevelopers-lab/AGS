const directors = [
  {
    name: "Tushar De",
    role: "Director, CEO",
    image: "/Tushar%20De.png",
  },
  {
    name: "Sharmistha Chatterjee",
    role: "Director, COO",
    image: "/Sharmistha%20Chatterjee.jpeg",
  },
  {
    name: "Atish Roy",
    role: "Chief Growth Officer",
    image: "/atish%20roy.jpeg",
  },
];

function TeamButton() {
  return (
    <button className="!hidden items-center gap-3 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
      <span>Our Directors</span>
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

function DirectorCard({ director }) {
  return (
    <article className="group relative overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm">
      <div className="relative min-h-[520px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
          style={{ backgroundImage: `url(${director.image})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,14,0.08)_0%,rgba(6,6,14,0.16)_38%,rgba(5,5,12,0.92)_100%)]" />
        <div className="pointer-events-none absolute left-6 top-6 h-20 w-20 rounded-full bg-[#6977ff]/18 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
          <span className="inline-flex rounded-full border border-white/16 bg-white/8 px-3 py-1 text-[0.72rem] uppercase tracking-[0.14em] text-white/68">
            AGS Leadership
          </span>
          <h3 className="mt-5 text-[2rem] leading-[0.96] font-medium tracking-[-0.05em] text-white sm:text-[2.5rem]">
            {director.name}
          </h3>
          <p className="mt-3 text-[1rem] leading-[1.7] text-white/82">
            {director.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="relative z-10 w-full overflow-hidden pb-20 pt-10 scroll-mt-20">
      <div className="relative w-full bg-transparent px-6 py-6 sm:px-8 lg:px-26 lg:py-8">
        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[720px] pr-3 sm:pr-4 lg:pr-8">
              <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
                Our Leadership Team
              </h2>
              <p className="mt-5 w-full text-[1rem] leading-[1.75] text-white/78">
                Meet the leadership team guiding AGS across strategy,
                operations, and business growth.
              </p>
            </div>

            <div className="lg:pt-[5.9rem]">
              <TeamButton />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {directors.map((director) => (
              <DirectorCard
                key={director.name}
                director={director}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
