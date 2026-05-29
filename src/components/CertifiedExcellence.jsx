"use client";

import Image from "next/image";

const certificates = [
  {
    title: "AWS PartnerCast - ACE 201: Best Practices for Cost Estimations for Containers - Business",
    completedDate: "May 21, 2026",
    awardedTo: "Amrut Global Solutions Private Limited",
    signedBy: "Michelle Vaz",
    signerTitle: "Director, AWS Training & Certification",
  },
  {
    title: "AWS Partner: Public Sector for Sellers - Business",
    completedDate: "May 21, 2026",
    awardedTo: "Amrut Global Solutions Private Limited",
    signedBy: "Michelle Vaz",
    signerTitle: "Director, AWS Training & Certification",
  },
  {
    title: "AWS PartnerCast - Cloud Essentials for Business Decision Makers",
    completedDate: "May 20, 2026",
    awardedTo: "Amrut Global Solutions Private Limited",
    signedBy: "Michelle Vaz",
    signerTitle: "Director, AWS Training & Certification",
  },
  {
    title: "AWS Partner: Generative AI Essentials - Business",
    completedDate: "May 19, 2026",
    awardedTo: "Amrut Global Solutions Private Limited",
    signedBy: "Michelle Vaz",
    signerTitle: "Director, AWS Training & Certification",
  },
];

function CertificateCard({ cert }) {
  return (
    <div className="cert-card group relative flex-shrink-0 w-[340px] sm:w-[390px] overflow-hidden">
      <div className="relative bg-white rounded-sm px-7 py-7 sm:px-8 sm:py-8 h-full flex flex-col justify-between min-h-[260px]">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.08em] text-[#232F3E]">
              AWS Training &amp; Certification
            </p>
          </div>
          <p className="text-[0.56rem] text-[#6B7280] tracking-wide uppercase">
            Completion Certificate
          </p>

          {/* Title */}
          <h4 className="mt-4 text-[1rem] sm:text-[1.1rem] font-bold leading-[1.35] text-[#232F3E] tracking-[-0.01em]">
            {cert.title}
          </h4>
          <p className="mt-1.5 text-[0.68rem] text-[#6B7280]">
            Completed: {cert.completedDate}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-[0.62rem] text-[#6B7280] mb-0.5">Awarded to</p>
            <p className="text-[0.78rem] font-semibold text-[#232F3E] leading-tight">
              {cert.awardedTo}
            </p>
            <div className="mt-4 border-t border-[#E5E7EB] pt-3">
              <p className="text-[0.92rem] text-[#4B5563] italic font-serif tracking-wide">
                {cert.signedBy}
              </p>
              <p className="text-[0.56rem] text-[#9CA3AF] mt-0.5">
                {cert.signerTitle}
              </p>
            </div>
          </div>
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 opacity-80">
            <Image
              src="/aws.png"
              alt="AWS"
              fill
              sizes="64px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertifiedExcellence() {
  // Double the certificates array for seamless infinite scroll
  const scrollCerts = [...certificates, ...certificates];

  return (
    <section
      id="certified-excellence"
      className="relative z-10 w-full overflow-hidden pb-12 pt-8 scroll-mt-20 sm:pb-20 sm:pt-12"
    >
      <div className="relative w-full px-6 sm:px-8 lg:px-26">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[28px] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">

          {/* Section heading */}
          <div className="mb-4 sm:mb-6">
            <h2 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 pr-2 text-[2.8rem] leading-[1.08] font-normal tracking-[-0.06em] text-transparent sm:text-[4rem] lg:text-[4.9rem]">
              Certified Excellence
            </h2>
            <p className="mt-3 w-full text-[1rem] leading-[1.75] text-white/78">
              Industry-recognized credentials that validate our expertise.
            </p>
          </div>

          {/* Content: Left text + Right certificates */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.48fr_0.52fr] gap-6 lg:gap-0 border border-white/8 overflow-hidden">

            {/* Left side — AWS Sales Accreditation text */}
            <div className="relative flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14 bg-gradient-to-br from-black/0 to-black/0">
              {/* Subtle ambient glow */}
              <div className="pointer-events-none absolute -left-20 top-1/4 h-52 w-52 rounded-full bg-[#9795FF]/8 blur-[80px]" />

              <h3 className="relative z-10 text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] font-light leading-[1.12] tracking-[-0.04em] text-white">
                We&rsquo;ve Got AWS
                <br />
                <span className="font-normal">Sales Accreditation</span>
              </h3>
              <p className="relative z-10 mt-6 max-w-[38ch] text-[0.9rem] leading-[1.75] text-white/55">
                Being appreciated by the clients we work with means the world to
                us. It also translates beautifully into our official ratings and
                awards, matching our commitment to align cloud infrastructure
                with business growth.
              </p>
            </div>

            {/* Right side — Scrolling certificates */}
            <div className="relative overflow-hidden border-t border-white/8 lg:border-t-0 lg:border-l lg:border-white/8 bg-[#0a0a12]">
              {/* Fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#0a0a12] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#0a0a12] to-transparent" />

              <div className="flex items-center py-8 sm:py-10 lg:py-12 cert-scroll-container">
                <div className="flex gap-5 cert-scroll-track">
                  {scrollCerts.map((cert, i) => (
                    <CertificateCard key={`${cert.title}-${i}`} cert={cert} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll animation styles */}
      <style jsx>{`
        .cert-scroll-track {
          animation: cert-scroll 30s linear infinite;
        }
        .cert-scroll-container:hover .cert-scroll-track {
          animation-play-state: paused;
        }
        @keyframes cert-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
