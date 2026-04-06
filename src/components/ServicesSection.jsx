"use client";

import { useCtaForm } from "@/components/CtaFormProvider";

const serviceCategories = [
  {
    id: "web-design",
    number: "01",
    label: "Web and App Design",
    services: [
      {
        title: "Website Dev",
        formService: "Web Development",
        description:
          "We build fast, responsive, and scalable websites tailored to your business goals.",
        theme: "violet",
        type: "browser",
      },
      {
        title: "UI/UX and Product Design",
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
        title: "Web App Development",
        formService: "Web App Development",
        description:
          "From marketing sites to complex web applications, we engineer performant, scalable solutions built for real-world growth.",
        theme: "lavender",
        type: "browser",
      },
    ],
  },
  {
    id: "ai-services",
    number: "02",
    label: "AI Services",
    services: [
      {
        title: "Digital Solutions",
        formService: "Digital Solutions",
        description:
          "Smart technology and digital strategies designed to streamline operations and accelerate business growth.",
        theme: "violet",
        type: "bag",
      },
      {
        title: "AI Automation & Business Systems",
        formService: "AI Automation & Business Systems",
        description:
          "Automate repetitive workflows and optimise business operations with intelligent AI-powered systems tailored to your processes.",
        theme: "slate",
        type: "robot",
      },
      {
        title: "AI-Powered Digital Marketing",
        formService: "AI-Powered Digital Marketing",
        description:
          "Leverage AI to create hyper-targeted campaigns, generate content, and maximise your marketing ROI across every channel.",
        theme: "lavender",
        type: "chart",
      },
      {
        title: "AI Consulting & Training",
        formService: "AI Consulting & Training",
        description:
          "Strategic AI advisory and hands-on training to help your team adopt, integrate, and maximise AI tools effectively.",
        theme: "graphite",
        type: "book",
      },
    ],
  },
  {
    id: "cyber-security",
    number: "03",
    label: "Cyber Security",
    services: [
      {
        title: "Website & Application Security",
        formService: "Website & Application Security",
        description:
          "Comprehensive security assessments and hardening for your web properties, protecting against modern attack vectors.",
        theme: "violet",
        type: "shield",
      },
      {
        title: "Business Security & Data Protection",
        formService: "Business Security & Data Protection",
        description:
          "End-to-end data security strategies that protect sensitive business assets and ensure regulatory compliance.",
        theme: "slate",
        type: "shield",
      },
      {
        title: "Cyber Security Audits",
        formService: "Cyber Security Audits",
        description:
          "In-depth security audits that identify vulnerabilities, assess risk exposure, and deliver a clear remediation roadmap.",
        theme: "graphite",
        type: "shield",
      },
      {
        title: "AI + Cyber Security",
        formService: "AI + Cyber Security",
        description:
          "Combining artificial intelligence with cybersecurity to detect threats faster, respond smarter, and stay ahead of attackers.",
        theme: "lavender",
        type: "robot",
      },
      {
        title: "Cyber Security Training",
        formService: "Cyber Security Training",
        description:
          "Practical security training programmes that empower your team to recognise threats and maintain a security-first culture.",
        theme: "violet",
        type: "book",
      },
      {
        title: "VAPT Services",
        formService: "VAPT Services",
        description:
          "Combining artificial intelligence with cybersecurity to test threats faster, respond smarter, and stay ahead of attackers.",
        theme: "graphite",
        type: "robot",
      },
    ],
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
          <div className="mx-4 mt-5 h-24 rounded-xl bg-white/14" />
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
            <div className="h-8 rounded-lg bg-white/10" />
            <div className="h-8 rounded-lg bg-white/10" />
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

  if (type === "robot") {
    return (
      <div className="absolute inset-y-0 right-0 w-[50%] overflow-hidden">
        <div className="absolute right-6 top-6 h-20 w-20 rounded-[18px] border border-white/15 bg-white/10">
          <div className="mx-3 mt-3 grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-white/20" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 right-4 h-2 w-20 rounded-full bg-white/10" />
        <div className="absolute bottom-4 right-8 h-2 w-14 rounded-full bg-white/10" />
        <div className="absolute right-12 top-28 h-12 w-12 rounded-full border border-white/10 bg-white/8" />
      </div>
    );
  }

  if (type === "chart") {
    return (
      <div className="absolute inset-y-0 right-0 w-[50%] overflow-hidden">
        <div className="absolute bottom-6 right-4 flex items-end gap-2">
          <div className="h-10 w-5 rounded-t bg-white/12" />
          <div className="h-16 w-5 rounded-t bg-white/18" />
          <div className="h-8 w-5 rounded-t bg-white/10" />
          <div className="h-20 w-5 rounded-t bg-white/15" />
          <div className="h-12 w-5 rounded-t bg-white/12" />
        </div>
        <div className="absolute right-5 top-5 h-2 w-16 rounded-full bg-white/10" />
        <div className="absolute right-8 top-10 h-2 w-10 rounded-full bg-white/10" />
      </div>
    );
  }

  if (type === "shield") {
    return (
      <div className="absolute inset-y-0 right-0 w-[50%] overflow-hidden">
        <div className="absolute right-8 top-5 h-24 w-20 rounded-t-[40px] border border-white/15 bg-white/10" />
        <div className="absolute right-11 top-10 h-14 w-14 rounded-t-[28px] border border-white/10 bg-white/8" />
        <div className="absolute bottom-6 right-6 h-2 w-18 rounded-full bg-white/10" />
        <div className="absolute bottom-3 right-9 h-2 w-12 rounded-full bg-white/10" />
      </div>
    );
  }

  if (type === "book") {
    return (
      <div className="absolute inset-y-0 right-0 w-[50%] overflow-hidden">
        <div className="absolute right-6 top-5 h-[72%] w-20 rounded-[10px] border border-white/15 bg-white/10">
          <div className="mx-3 mt-4 h-2 rounded-full bg-white/18" />
          <div className="mx-3 mt-2 h-2 rounded-full bg-white/12" />
          <div className="mx-3 mt-2 h-2 w-3/4 rounded-full bg-white/12" />
          <div className="mx-3 mt-4 h-2 rounded-full bg-white/10" />
          <div className="mx-3 mt-2 h-2 w-2/3 rounded-full bg-white/10" />
        </div>
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

  if (type === "robot") {
    return (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="7" y="8" width="10" height="9" rx="2" />
        <path d="M12 4v4M4 13h3M17 13h3" />
        <circle cx="10" cy="12.5" r="1" />
        <circle cx="14" cy="12.5" r="1" />
        <path d="M10 17h4" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M4 20h16M4 20V4" />
        <path d="M7 16v-4M11 16V9M15 16v-7M19 16v-10" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 3L5 6.5v5c0 4.4 3 7.9 7 9 4-1.1 7-4.6 7-9v-5L12 3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  if (type === "book") {
    return (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M4 4.5C4 3.7 4.7 3 5.5 3h14v18h-14A1.5 1.5 0 0 1 4 19.5v-15z" />
        <path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H19" />
        <path d="M8 7h8M8 11h6" />
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
      className={`relative min-h-70 overflow-hidden rounded-xs border border-white/6 px-5 py-6 transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] sm:px-6 sm:py-7 ${themeClasses[service.theme]} ${className}`}
    >
      <div className="pointer-events-none absolute -left-8 top-10 h-24 w-24 rounded-full bg-[#5f8cff]/20 blur-[50px]" />
      <ServiceArt type={service.type} />

      <div className="relative z-10 flex h-full max-w-[48%] flex-col">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white/90">
          <ServiceIcon type={service.type} />
        </div>
        <h3 className="mt-6 text-[1.35rem] leading-[1.1] font-semibold tracking-[-0.03em]">
          {service.title}
        </h3>
        <p className="mt-3 text-[0.8125rem] leading-[1.6] text-white/70">
          {service.description}
        </p>
      </div>
    </article>
  );
}

function getServiceSpanClass(index, total) {
  const isDesktopRowStart = index % 2 === 0;
  const isEvenRow = Math.floor(index / 2) % 2 === 0;
  const isLastOddCard = total % 2 === 1 && index === total - 1;

  if (isLastOddCard) {
    return "lg:col-span-6";
  }

  if (isDesktopRowStart) {
    return isEvenRow ? "lg:col-span-4" : "lg:col-span-3";
  }

  return isEvenRow ? "lg:col-span-3" : "lg:col-span-4";
}

function CategoryButton({ label }) {
  const { openForm } = useCtaForm();

  return (
    <div className="mt-5 flex justify-end">
      <button
        type="button"
        className="group flex items-center space-x-3 border-b border-white py-3 font-semibold text-white transition-all duration-700"
        onClick={() => openForm()}
      >
        <span>Reach Out</span>
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
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative container mx-auto z-10 w-full overflow-hidden pb-12 pt-4 scroll-mt-20 sm:pb-20">
      <div className="relative w-full px-6 sm:px-8 lg:px-26">
        <div className="relative px-4 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-6">
          <div className="relative flex flex-col gap-5 pb-4 sm:gap-6 sm:pb-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[760px]">
              <h2 className="max-w-[720px] bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.6rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[3.7rem] lg:text-[4rem]">
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

          <div className="relative space-y-10 sm:space-y-14">
            {serviceCategories.map((category) => (
              <div key={category.id}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="shrink-0 text-[0.6rem] font-medium tracking-[0.22em] text-white/30">
                    {category.number}
                  </span>
                  <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.22em] text-white/50">
                    {category.label}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-7">
                  {category.services.map((service, i) => (
                    <ServiceCard
                      key={service.formService}
                      service={service}
                      className={getServiceSpanClass(i, category.services.length)}
                    />
                  ))}
                </div>
                <CategoryButton label={category.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
