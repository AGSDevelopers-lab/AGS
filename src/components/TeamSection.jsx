"use client";

import Link from "next/link";

const directors = [
  {
    name: "Tushar De",
    role: "Director, CEO",
    image: "/tushar.jpeg",
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
    department: "Operations",
  },
  {
    name: "Sayan Bhattacharjee",
    department: "Design",
  },
{
    name: "Pradip Mondal",
    department: "Design",
  },
  {
    name: "Shrestha Samadder",
    department: "Creative",
  },
  {
    name: "Abhijit Manna",
    department: "Marketing",
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
    <article className="group relative mx-auto w-full max-w-xs overflow-hidden border border-white/10 bg-white/4 backdrop-blur-sm">
      {/* Top accent line that animates in on hover */}
      <div className="absolute left-0 top-0 z-30 h-0.5 w-0 bg-linear-to-r from-[#9795FF] to-[#BE9FFF] transition-all duration-500 group-hover:w-full" />

      <div className="relative aspect-4/5 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-top grayscale transition-all duration-700 group-hover:scale-[1.05] group-hover:grayscale-0"
          style={{ backgroundImage: `url(${director.image})` }}
        />

        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

        {/* LinkedIn button */}
        <Link
          href={director.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 -translate-y-1.5 items-center justify-center rounded border border-white/15 bg-[rgba(10,102,194,0.85)] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[rgba(10,102,194,1)]"
        >
          <LinkedInIcon />
        </Link>

        {/* Name / role block */}
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#9795FF]">
            {director.role}
          </p>
          <h3 className="mt-1.5 text-[1.35rem] font-medium leading-tight tracking-[-0.04em] text-white lg:text-[1.25rem]">
            {director.name}
          </h3>
          <div className="mt-3 h-px w-0 bg-white/20 transition-all duration-500 delay-75 group-hover:w-full" />
        </div>
      </div>
    </article>
  );
}

function TeamMemberCard({ member }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b0f1a] to-[#141023] flex flex-col items-center justify-center p-6 sm:p-8 hover:border-white/20 transition-colors">
      <div className="text-center">
        <h3 className="text-[0.95rem] font-medium leading-tight tracking-[-0.03em] text-white sm:text-[1.05rem]">
          {member.name}
        </h3>
        <span className="mt-2 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
          {member.department}
        </span>
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

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
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