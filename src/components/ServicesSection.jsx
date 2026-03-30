"use client";

import { useCtaForm } from "@/components/CtaFormProvider";

const services = [
  {
    title: "Website Dev",
    formService: "Web Development",
    description:
      "We build fast, responsive, and scalable websites tailored to your business goals.",
    theme: "violet",
    type: "browser",
  },
  {
    title: "UI/UX Design",
    formService: "UI/UX Design",
    description:
      "Creating intuitive and engaging user experiences that make digital products simple and enjoyable to use.",
    theme: "slate",
    type: "wireframe",
  },
  {
    title: "Branding",
    formService: "Branding",
    description:
      "We craft strong brand identities that help your business stand out and connect with your audience.",
    theme: "graphite",
    type: "device",
  },
  {
    title: "Digital Solutions",
    formService: "Digital Solutions",
    description:
      "Smart technology and digital strategies designed to streamline operations and accelerate business growth.",
    theme: "lavender",
    type: "bag",
  },
];

function ArrowButton({ label }) {
  const { openForm } = useCtaForm();

  return (
    <button
      type="button"
      className="!hidden items-center gap-3 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
      onClick={() => openForm()}
    >
      <span>{label}</span>
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

function ServiceArt({ type }) {
  if (type === "browser") {
    return (
      <div className="absolute inset-y-0 right-0 w-[54%] overflow-hidden">
        <div className="absolute left-6 right-4 top-6 h-[78%] rounded-[18px] border border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <div className="flex gap-1 px-4 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
          <div className="mx-4 mt-3 h-3 rounded-full bg-white/10" />
          <div className="mx-4 mt-5 h-24 rounded-[12px] bg-white/14" />
          <div className="mx-4 mt-4 h-2 w-28 rounded-full bg-white/10" />
          <div className="mx-4 mt-2 h-2 w-20 rounded-full bg-white/10" />
        </div>
      </div>
    );
  }

  if (type === "wireframe") {
    return (
      <div className="absolute inset-y-0 right-0 w-[42%] overflow-hidden">
        <div className="absolute bottom-0 right-4 top-5 w-[76%] rounded-t-[18px] border border-white/10 bg-white/10">
          <div className="mx-4 mt-5 h-7 rounded-[10px] bg-white/13" />
          <div className="mx-4 mt-4 h-2 rounded-full bg-white/12" />
          <div className="mx-4 mt-2 h-2 w-3/4 rounded-full bg-white/12" />
          <div className="mx-4 mt-4 grid grid-cols-2 gap-2">
            <div className="h-8 rounded-[8px] bg-white/10" />
            <div className="h-8 rounded-[8px] bg-white/10" />
          </div>
          <div className="mx-4 mt-4 h-10 rounded-[10px] bg-white/10" />
        </div>
      </div>
    );
  }

  if (type === "device") {
    return (
      <div className="absolute inset-y-0 right-0 w-[46%] overflow-hidden">
        <div className="absolute -bottom-5 right-4 h-40 w-32 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] rotate-[18deg]" />
        <div className="absolute bottom-0 right-14 h-36 w-24 rounded-t-[120px] bg-white/8 blur-[1px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-y-0 right-0 w-[52%] overflow-hidden">
      <div className="absolute -bottom-12 right-7 h-44 w-32 rounded-[26px] border border-white/10 bg-white/8 rotate-[16deg]" />
      <div className="absolute right-20 top-5 h-24 w-24 rounded-full border-[10px] border-white/18" />
      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-tl-[110px] bg-white/10" />
    </div>
  );
}

function ServiceIcon({ type }) {
  if (type === "browser") {
    return (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4a12.3 12.3 0 0 1 3 8 12.3 12.3 0 0 1-3 8 12.3 12.3 0 0 1-3-8 12.3 12.3 0 0 1 3-8z" />
      </svg>
    );
  }

  if (type === "wireframe") {
    return (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M4 6.5h16M9 4v5M15 4v5M7.5 20v-7a4.5 4.5 0 0 1 9 0v7M12 12.5v7" />
      </svg>
    );
  }

  if (type === "device") {
    return (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M10 4.5h4l6 6-8.5 8.5-7-7z" />
        <circle cx="14" cy="8.5" r="1.1" />
      </svg>
    );
  }

  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M7.5 9V7.5a4.5 4.5 0 0 1 9 0V9" />
      <path d="M5.5 9h13l-1 10h-11z" />
      <path d="M9.5 13h5" />
    </svg>
  );
}

function ServiceCard({ service, className = "" }) {
  const { openForm } = useCtaForm();
  const themeClasses = {
    violet:
      "bg-[linear-gradient(135deg,#4f46ff_0%,#5d52ff_45%,#4155e9_100%)] text-white",
    slate:
      "bg-[linear-gradient(135deg,#23212f_0%,#2f2b3f_55%,#37295a_100%)] text-white",
    graphite:
      "bg-[linear-gradient(135deg,#181720_0%,#242230_55%,#353041_100%)] text-white",
    lavender:
      "bg-[linear-gradient(135deg,#8c54ff_0%,#a265ff_45%,#c188ff_100%)] text-white",
  };

  return (
    <article
      className={`relative min-h-[240px] overflow-hidden rounded-[2px] border border-white/6 px-5 py-5 sm:px-6 sm:py-6 ${themeClasses[service.theme]} ${className}`}
    >
      <div className="pointer-events-none absolute -left-8 top-10 h-24 w-24 rounded-full bg-[#5f8cff]/20 blur-[50px]" />
      <ServiceArt type={service.type} />

      <div className="relative z-10 flex h-full max-w-[48%] flex-col">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-white/12 text-white/90">
          <ServiceIcon type={service.type} />
        </div>
        <h3 className="mt-5 text-[1.35rem] leading-[1.05] font-medium tracking-[-0.03em]">
          {service.title}
        </h3>
        <p className="mt-3 text-[11px] leading-[1.55] text-white/65">
          {service.description}
        </p>
        <a
          href="#"
          className="mt-auto inline-flex items-center gap-2 pt-8 text-[0.95rem] font-medium tracking-[0.01em] text-white underline underline-offset-3"
          onClick={(event) => {
            event.preventDefault();
            openForm({
              service: service.formService,
              lockService: true,
            });
          }}
        >
          <span>Start with us</span>
          <span className="text-[0.95rem]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 w-full overflow-hidden pb-20 pt-0 scroll-mt-20">
      <div className="relative w-full px-6 sm:px-8 lg:px-26">
        <div className="relative px-5 py-4 sm:px-8 lg:px-10 lg:py-6">
        <div className="relative flex flex-col gap-6 pb-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[760px]">
            <h2 className="max-w-[720px] bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.6rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[3.7rem] lg:text-[4.45rem]">
              Let&apos;s Work Together With Us
            </h2>
            <p className="mt-5 w-full text-[1rem] leading-[1.75] text-white/78">
              Together, we can transform your vision into impactful digital
              products.
            </p>
          </div>

          <div className="lg:pt-[5.9rem]">
            <ArrowButton label="Get Started" />
          </div>
        </div>

        <div className="relative space-y-3">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.32fr_0.88fr]">
            <ServiceCard service={services[0]} />
            <ServiceCard service={services[1]} />
          </div>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[0.88fr_1.32fr]">
            <ServiceCard service={services[2]} />
            <ServiceCard service={services[3]} />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
