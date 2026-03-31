const directors = [
  {
    name: "Tushar De",
    role: "Director, CEO",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940429/Tushar_ovrrfq.jpg",
  },
  {
    name: "Sharmistha Chatterjee",
    role: "Director, COO",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940494/Sharmistha_Chatterjee_e8fxwo.jpg",
  },
  {
    name: "Atish Roy",
    role: "Chief Growth Officer",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940472/atish_roy_nwqxx4.jpg",
  },
];

const teamMembers = [
  {
    name: "Piyali Das",
    role: "Project Manager",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940428/Piyali_skqmi0.jpg",
  },
  {
    name: "Sayan Bhattacharjee",
    role: "UI/UX Designer",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940433/sayan_su1ziv.png",
  },
  {
    name: "Sristi Bhattacharyya",
    role: "Web Developer",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940429/Sristi_zdqjdy.png",
  },
  {
    name: "Pradip Mondal",
    role: "Graphic Designer",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940428/Pradip_zilmk0.jpg",
  },
  {
    name: "Shrestha Samadder",
    role: "Video Editor",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940429/Shrestha_cirxup.jpg",
  },
  {
    name: "Abhijit Manna",
    role: "SEO Executive",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1774940430/Abhijit_mcdhhu.png",
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

function TeamMemberCard({ member }) {
  return (
    <article className="group relative overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm">
      <div className="relative min-h-[390px] overflow-hidden sm:min-h-[430px]">
        <div
          className="absolute inset-0 bg-cover bg-top transition duration-700 group-hover:scale-[1.04] group-hover:grayscale"
          style={{ backgroundImage: `url(${member.image})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,14,0.02)_0%,rgba(6,6,14,0.08)_45%,rgba(4,4,10,0.9)_100%)]" />
        <div className="pointer-events-none absolute left-5 top-5 h-16 w-16 bg-[#6977ff]/16 blur-3xl" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
          <span className="inline-flex border border-white/16 bg-white/8 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-white/66">
            Team Lead
          </span>
          <h3 className="mt-4 text-[1.55rem] leading-[1.02] font-medium tracking-[-0.04em] text-white sm:text-[1.75rem]">
            {member.name}
          </h3>
          <p className="mt-2 text-[0.96rem] leading-[1.65] text-white/78">
            {member.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="relative z-10 w-full overflow-hidden pb-12 pt-8 scroll-mt-20 sm:pb-20 sm:pt-10">
      <div className="relative w-full bg-transparent px-6 py-4 sm:px-8 sm:py-6 lg:px-26 lg:py-8">
        <div className="relative flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[720px] pr-3 sm:pr-4 lg:pr-8">
              <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
                Our Leadership Team
              </h2>
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

          <div>
            <div className="flex flex-col gap-2 pb-5 sm:pb-6">
              <h3 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.4rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[3.2rem] lg:text-[4rem]">
                Meet the Driving Force
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
