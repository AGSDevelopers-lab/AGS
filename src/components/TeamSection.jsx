const directors = [
  {
    name: "Tushar De",
    role: "Director, CEO",
    image:
      "Tusharrr.jpeg",
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
      "atishhhh.jpg",
  },
];

const teamMembers = [
  {
    name: "Piyali Das",
    role: "Project Manager",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775032384/Piyali_woxsla.png",
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
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775032385/Sristi_ytoekh.png",
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
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775033648/Shrestha_ctdswp.png",
  },
  {
    name: "Abhijit Manna",
    role: "SEO Executive",
    image:
      "https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775032384/Abhijit_b6g3h4.png",
  },
];

function DirectorCard({ director }) {
  return (
    <article className="group relative overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm">
      <div className="relative min-h-[520px] overflow-hidden sm:min-h-[320px] lg:min-h-[360px]">
        <div
          className="absolute inset-0 bg-cover bg-top grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
          style={{ backgroundImage: `url(${director.image})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,14,0.08)_0%,rgba(6,6,14,0.16)_38%,rgba(5,5,12,0.92)_100%)]" />
        <div className="pointer-events-none absolute left-6 top-6 h-20 w-20 rounded-full bg-[#6977ff]/18 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-5 lg:p-8">
          <span className="inline-flex rounded-full border border-white/16 bg-white/8 px-3 py-1 text-[0.5rem] uppercase tracking-[0.14em] text-white/68">
            AGS Leadership
          </span>
          <h3 className="mt-5 text-[2rem] leading-[0.96] font-medium tracking-[-0.05em] text-white sm:mt-3 sm:text-[1.45rem] lg:text-[1.5rem]">
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
        <span className="inline-flex  bg-[rgba(20,20,28,0.06)] px-1 py-0.5 text-[0.52rem] uppercase tracking-[0.14em] text-white">
          Team Lead
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
        <h3 className="mt-3 text-[1.05rem] leading-[1.02] font-medium tracking-[-0.04em] text-white sm:text-[1.2rem]">
          {member.name}
        </h3>
        <p className="mt-1.5 text-[0.78rem] leading-[1.5] text-white/76 sm:text-[0.86rem]">
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
      className="relative z-10 w-full overflow-hidden pb-12 pt-8 scroll-mt-20 sm:pb-20 sm:pt-10"
    >
      <div className="relative w-full px-6 py-4 sm:px-8 sm:py-6 lg:px-26 lg:py-8">
        <div className="relative">
          <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] lg:items-start lg:gap-10">
            <div className="max-w-[420px] pt-1">
              <h2 className="mt-3 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-[2.35rem] leading-[1.02] font-normal tracking-[-0.06em] text-transparent sm:text-[3rem] lg:text-[3.9rem]">
                Our Leadership Team
              </h2>
              <p className="mt-3 max-w-[380px] text-[0.92rem] leading-[1.7] text-white/70 sm:text-[1rem]">
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
            <h3 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-[2.1rem] leading-[1.03] font-normal tracking-[-0.06em] text-transparent sm:text-[2.8rem] lg:text-[3.9rem]">
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
