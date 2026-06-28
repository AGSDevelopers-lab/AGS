const testimonials = [
  {
    name: "Ankit Ghosh",
    role: "Founder, Alfa Media",
    quote:
      "AGS gave our brand a much stronger digital identity. The website feels premium, performs smoothly, and finally reflects the quality of our business.",
  },
  {
    name: "James Mitchell",
    role: "Marketing Director, Hartwell Digital",
    quote:
      "The team understood our brief from day one. The site launch was smooth, and we've seen a steady increase in inbound enquiries since going live.",
  },
  {
    name: "Abhirup Mukhopadhyay",
    role: "Founder, Lifestyle Commerce Brand",
    quote:
      "They created a clean and conversion-focused experience for our brand. The final output was not only beautiful but also practical for business growth.",
  },
  {
    name: "Sarah Chen",
    role: "Co-founder, Bloom & Bridge Co.",
    quote:
      "AGS rebuilt our storefront with a focus on speed and clarity. Our bounce rate dropped within the first month, and checkout feels much smoother now.",
  },
  {
    name: "Priya Chatterjee",
    role: "Director, Education Venture",
    quote:
      "Working with AGS felt structured and professional throughout. They listened carefully, communicated clearly, and delivered exactly what we needed.",
  },
  {
    name: "Marcus Weber",
    role: "Head of Digital, Klein & Partners",
    quote:
      "Professional, responsive, and detail-oriented. They handled our requirements carefully and delivered a polished website we were confident launching.",
  },
];

function QuoteIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="group relative min-h-50 overflow-hidden border border-white/6 bg-white/4 p-5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_30px_-22px_rgba(255,255,255,0.42)] sm:min-h-[200px]">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-[42%] bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(255,255,255,0.22),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute left-0 top-0 h-14 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.2),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-x-5 bottom-0 h-8 rounded-full bg-white/0 blur-2xl transition duration-500 group-hover:bg-white/30" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[1.5rem] font-medium text-white">{item.name}</h3>
          <p className="mt-0.5 text-[0.52rem] uppercase tracking-[0.08em] text-white/45">
            {item.role}
          </p>
        </div>
        <QuoteIcon className="h-7 w-7 text-white/28" />
      </div>

      <p className="relative z-10 mt-6 max-w-[320px] text-[0.82rem] leading-[1.75] text-white/62">
        {item.quote}
      </p>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="relative container mx-auto z-10 -mt-2 w-full overflow-hidden pb-0 pt-0 sm:-mt-4">
      <div className="relative w-full bg-transparent px-6 py-4 sm:px-8 sm:py-6 lg:px-26 lg:py-8">
        <div className="pointer-events-none absolute right-[8%] top-[22%] h-[28rem] w-[28rem] text-white/[0.07]">
          <QuoteIcon className="h-full w-full" />
        </div>

        <div className="relative w-full px-0 py-3 sm:py-4">
          <div className="max-w-[700px]">
            <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
              What they say about us
            </h2>
            <p className="mt-5 w-full text-[1rem] leading-[1.75] text-white/78">
              Discover what our clients and partners have to say about their
              experiences working with us and how our services have helped their
              businesses grow and succeed.
            </p>
          </div>

          <div className="relative mt-6 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
