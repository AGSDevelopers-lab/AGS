import Image from "next/image";

const capabilities = [
  {
    label: "Security",
    description: "Enterprise-grade encryption and compliance built into every layer.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4z" />
      </svg>
    ),
  },
  {
    label: "Scalability",
    description: "Infrastructure that expands seamlessly as your business grows.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 17l4-4 4 4 4-6 4 2" />
        <path d="M21 21H3" />
      </svg>
    ),
  },
  {
    label: "Performance",
    description: "Low latency and high throughput for demanding workloads.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    label: "Reliability",
    description: "99.9% uptime backed by AWS global infrastructure.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" />
        <path d="M22 4L12 14l-3-3" />
      </svg>
    ),
  },
];

export default function AwsSection() {
  return (
    <section className="relative container mx-auto z-10 w-full overflow-hidden pb-12 pt-0 sm:pb-20">
      <div className="relative w-full px-6 sm:px-8 lg:px-26">

        <div className="relative overflow-hidden border border-white/8">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#9795FF]/8 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-[#BE9FFF]/8 blur-[100px]" />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent_0%,#9795FF_30%,#ffffff_50%,#BE9FFF_70%,transparent_100%)]" />

          {/* Main panel: text left, image right */}
          <div className="grid lg:grid-cols-[1fr_0.9fr]">

            {/* Left: content */}
            <div className="relative flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-14 lg:px-14">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-8 bg-[#9795FF] shrink-0" />
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#9795FF]">
                  AWS Cloud Ecosystem Company
                </p>
              </div>

              {/* Heading */}
              <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-[2.2rem] leading-none font-normal tracking-[-0.05em] text-transparent sm:text-[3rem] lg:text-[3.8rem]">
                Built on{" "}
                <span className="relative inline-flex translate-y-[0.15em] w-24 sm:w-32 lg:w-30.25 h-15.5 sm:h-14">
                  <Image
                    src="/aws.png"
                    alt="AWS"
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </span>
                <br />
                Designed for Scale
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-[46ch] text-[0.95rem] leading-[1.7] text-white/60">
                We are an AWS Ecosystem Partner, leveraging world-class cloud
                infrastructure to build secure, scalable, and high-performance
                digital solutions. From startups to enterprises, we ensure your
                technology grows without limits.
              </p>
            </div>

            {/* Right: image */}
            <div className="relative min-h-65 border-t border-white/8 lg:border-t-0 lg:border-l lg:border-white/8">
              <Image
                src="https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775027624/aws_vo4uvs.png"
                alt="AWS cloud solutions"
                fill
                className="object-cover opacity-80"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              {/* Fade into section on left edge */}
              <div className="absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,rgba(11,13,26,1)_0%,transparent_100%)] hidden lg:block" />
              {/* Fade on bottom */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent_0%,rgba(11,13,26,0.8)_100%)]" />
            </div>

          </div>

          {/* Capabilities grid */}
          <div className="grid grid-cols-2 border-t border-white/8 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <div
                key={cap.label}
                className={`flex flex-col gap-3 px-6 py-7 sm:px-8 sm:py-8 ${
                  i < capabilities.length - 1 ? "border-r border-white/8" : ""
                } ${i >= 2 ? "border-t border-white/8 lg:border-t-0" : ""}`}
              >
                <div className="flex h-9 w-9 items-center justify-center border border-white/12 bg-white/4 text-[#9795FF]">
                  {cap.icon}
                </div>
                <h4 className="text-[0.88rem] font-medium tracking-[0.02em] text-white">
                  {cap.label}
                </h4>
                <p className="text-[0.76rem] leading-[1.6] text-white/45">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
