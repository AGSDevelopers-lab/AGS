"use client";

import Link from "next/link";

const directors = [
  {
    name: "Tushar De",
    role: "Director, CEO",
    image: "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1775113907/Tushar_Sir_ub2mop.png",
    linkedin: "https://www.linkedin.com/in/0xtd",
  },
  {
    name: "Sharmistha Chatterjee",
    role: "Director, COO",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1775113883/Sharmistha_Ma_am_gtmxsq.png",
    linkedin: "https://www.linkedin.com/in/c-sharmistha/",
  },
  {
    name: "Atish Roy",
    role: "Chief Growth Officer",
    image: "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1775113883/Atish_Sir_qcjmrn.png",
    linkedin: "https://www.linkedin.com/in/atishroy/",
  },
];

const teamMembers = [
  {
    name: "Piyali Das",
    role: "Project Manager",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1775113883/piyali_hkbkvt.png",
  },
  {
    name: "Sayan Bhattacharjee",
    role: "UI/UX Designer",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775032385/Sayan_qrbnma.png",
  },
  {
    name: "Sristi Bhattacharyya",
    role: "Web Developer",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1775113890/sristi_alxrvr.png",
  },
  {
    name: "Pradip Mondal",
    role: "Graphic Designer",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775032384/Pradip_parqg3.png",
  },
  {
    name: "Shrestha Samadder",
    role: "Video Editor",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1775113889/shrestha_jixev8.png",
  },
  {
    name: "Abhijit Manna",
    role: "SEO Executive",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/q_auto/f_auto/v1775113883/abhijit_vork62.png",
  },
];

function LinkedInIcon() {
  return (
    <svg
      className="h-4 w-4 fill-white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function DirectorCard({ director }) {
  return (
    <article className="group relative overflow-hidden border border-white/10 bg-white/4 backdrop-blur-sm">
      <div className="relative min-h-130 overflow-hidden sm:min-h-20 lg:min-h-90">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-top grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
          style={{ backgroundImage: `url(${director.image})` }}
        />

        {/* Base gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,14,0.08)_0%,rgba(6,6,14,0.16)_38%,rgba(5,5,12,0.92)_100%)]" />

        {/* Hover backdrop — scoped to this card only */}
        <div className="absolute inset-0 bg-[rgba(8,8,18,0.50)] opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-6 top-6 h-20 w-20 rounded-full bg-[#6977ff]/18 blur-3xl" />

        {/* LinkedIn button */}
        <Link
          href={director.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 -translate-y-1.5 items-center justify-center rounded-md border border-white/20 bg-[rgba(10,102,194,0.85)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[rgba(10,102,194,1)]"
        >
          <LinkedInIcon />
        </Link>

        {/* Name / role block */}
        <div className="absolute inset-x-0 -bottom-4 z-10 p-6 transition-all duration-500 group-hover:bottom-0 sm:p-5 lg:p-8">
          <span className="inline-flex rounded-full border border-white/16 bg-white/8 px-3 py-1 text-[0.5rem] uppercase tracking-[0.14em] text-white/68">
            AGS Leadership
          </span>
          <h3 className="mt-5 text-[2rem] font-medium leading-[0.96] tracking-[-0.05em] text-white sm:mt-3 sm:text-[1.45rem] lg:text-[1.5rem]">
            {director.name}
          </h3>
          <p className="mt-3 text-[1rem] leading-[1.7] text-white/82 sm:mt-1.5 sm:text-[0.92rem] lg:text-[0.8rem]">
            {director.role}
          </p>
        </div>
      </div>
    </article>
  );
}

function TeamMemberCard({ member }) {
  return (
    <article className="group relative aspect-[0.76] overflow-hidden border border-white/10 bg-white/[0.04]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(246,244,248,0.96)_0%,rgba(232,230,236,0.92)_34%,rgba(206,203,212,0.88)_68%,rgba(184,180,192,0.82)_100%)] transition duration-500 group-hover:opacity-35" />
      <div
        className="absolute inset-0 bg-cover bg-top transition duration-700 group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${member.image})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,14,0.04)_0%,rgba(6,6,14,0.14)_48%,rgba(4,4,10,0.92)_100%)]" />
      <div className="absolute left-2 top-2 z-10 sm:left-2 sm:top-1">
        <span className="inline-flex bg-[rgba(20,20,28,0.06)] px-1 py-0.5 text-[0.52rem] uppercase tracking-[0.14em] text-white">
          Team Lead
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
        <h3 className="mt-3 text-[1.05rem] font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-[1.2rem]">
          {member.name}
        </h3>
        <p className="mt-1.5 text-[0.78rem] leading-[1.5] text-white/[0.76] sm:text-[0.86rem]">
          {member.role}
        </p>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative z-10 w-full overflow-hidden pb-12 pt-8 sm:pb-20 sm:pt-10 scroll-mt-20"
    >
      <div className="relative w-full px-6 py-4 sm:px-8 sm:py-6 lg:px-26 lg:py-8">
        <div className="relative">
          <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] lg:items-start lg:gap-10">
            <div className="max-w-105 pt-1">
              <h2 className="mt-3 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-[2.35rem] font-normal leading-[1.02] tracking-[-0.06em] text-transparent sm:text-[3rem] lg:text-[3.9rem]">
                Our Leadership Team
              </h2>
              <p className="mt-3 max-w-95 text-[0.92rem] leading-[1.7] text-white/70 sm:text-[1rem]">
                Meet the people guiding AGS with strategy, creativity, and
                execution across every stage of our client work.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {directors.map((director) => (
                <DirectorCard key={director.name} director={director} />
              ))}
            </div>
          </div>

          <div className="mt-10 sm:mt-14">
            <h3 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-[2.1rem] font-normal leading-[1.03] tracking-[-0.06em] text-transparent sm:text-[2.8rem] lg:text-[3.9rem]">
              Meet the Driving Force
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}