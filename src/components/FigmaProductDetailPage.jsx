"use client";

import Image from "next/image";
import Link from "next/link";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";

const PRODUCT_CONFIGS = {
  vidlens: {
    name: "VidLens",
    eyebrow: "An AGS Product",
    lead: "Meet VidLens – AGS’s YouTube Analytics & Research Solution.",
    description:
      "Developed by Amrut Global Solutions (AGS), VidLens is an AI-powered YouTube analytics and research platform designed to help creators understand channel performance, analyse competitors, discover content opportunities and make informed video strategy decisions.",
    heroImage: "/AGS Products 1 (1).png",
    heroAlt: "VidLens platform preview on laptop",
    exploreLabel: "Explore VidLens",
    exploreHref: "https://vidlens.in/",
    metaRows: [
      { label: "Built by", value: "AGS" },
      { label: "For", value: "YouTube creators" },
      { label: "Delivers", value: "Analytics, research & SEO" },
    ],
    featuresSectionId: "vidlens-features",
    featuresHeadingLine1: "What VidLens brings to your",
    featuresHeadingLine2: "YouTube strategy.",
    featuresSubtitle:
      "AGS brings essential YouTube analytics, research and optimisation capabilities together through VidLens, helping creators make better content decisions.",
    featuresLayout: "three-col-numbered",
    features: [
      {
        num: "01",
        title: "Channel Analytics",
        desc: "Track channel performance and understand growth patterns with VidLens.",
      },
      {
        num: "02",
        title: "Video Performance Analysis",
        desc: "Evaluate individual video performance and audience retention.",
      },
      {
        num: "03",
        title: "Competitor Analysis",
        desc: "Monitor competing channels and compare their performance to identify opportunities.",
      },
      {
        num: "04",
        title: "Keyword Research",
        desc: "Discover relevant keywords and explore new content opportunities.",
      },
      {
        num: "05",
        title: "AI-Powered Insights",
        desc: "Understand performance data and identify areas for improvement.",
      },
      {
        num: "06",
        title: "Video SEO Optimisation",
        desc: "Improve keyword selection and prepare videos for better search visibility.",
      },
    ],
    callout: null,
    challengesHeadingLine1: "Your YouTube Challenges. AGS Has a",
    challengesHeadingLine2: "Smarter Solution.",
    challengesSubtitle:
      "At AGS, we understand that growing a YouTube channel involves more than creating and uploading videos. Creators need the right insights to understand performance, research competitors and plan content effectively. That’s why we developed VidLens.",
    challengesLayout: "problem-labeled",
    challenges: [
      {
        label: "Problem 1",
        question: "Not Sure What’s Working on Your Channel?",
        solutionPrefix: "AGS Solution:",
        solutionText:
          "With VidLens, AGS helps creators analyse channel performance and understand which content is gaining attention.",
      },
      {
        label: "Problem 2",
        question: "Struggling to Understand Video Performance?",
        solutionPrefix: "AGS Solution:",
        solutionText:
          "VidLens provides individual video analytics and audience retention insights to help evaluate content performance.",
      },
      {
        label: "Problem 3",
        question: "Finding It Difficult to Track Competitors?",
        solutionPrefix: "AGS Solution:",
        solutionText:
          "VidLens helps monitor competitor channels and compare their performance to identify new opportunities.",
      },
      {
        label: "Problem 4",
        question: "Running Out of Content Ideas?",
        solutionPrefix: "AGS Solution:",
        solutionText:
          "VidLens supports keyword research and content discovery, helping creators explore relevant topics.",
      },
      {
        label: "Problem 5",
        question: "Unsure How to Optimise Videos?",
        solutionPrefix: "AGS Solution:",
        solutionText:
          "VidLens helps with keyword selection and video SEO preparation to support better content optimisation.",
      },
    ],
    bottomCta: {
      headingLine1: "Don’t Just Publish Stories.",
      headingLine2: "Understand Their Impact.",
      secondaryLabel: "Explore LynkBeats",
      secondaryHref: "https://linkbeats.in/",
    },
  },
  lynkbeats: {
    name: "LynkBeats",
    eyebrow: "An AGS Product",
    lead: "Understand Every Story. Measure Every Moment.",
    description:
      "Developed by AGS, LynkBeats is a real-time newsroom intelligence platform that helps media organisations track story performance, monitor editorial KPIs, analyse traffic sources and understand audience behaviour—all from one dashboard.",
    heroImage: "/AGS Products 1.png",
    heroAlt: "LynkBeats live newsroom telemetry preview on laptop",
    exploreLabel: "Explore LynkBeats",
    exploreHref: "https://linkbeats.in/",
    metaRows: [
      { label: "Built by", value: "AGS" },
      { label: "For", value: "Media organisations" },
      { label: "Delivers", value: "Real-time newsroom insights" },
    ],
    featuresSectionId: "lynkbeats-features",
    featuresHeadingLine1: "Everything Your Newsroom Needs to",
    featuresHeadingLine2: "Understand Performance.",
    featuresSubtitle: null,
    featuresLayout: "four-col",
    features: [
      {
        title: "Real-Time Story Tracking",
        desc: "Track published stories as they perform and identify which content is gaining audience attention.",
      },
      {
        title: "Editorial KPI Monitoring",
        desc: "Measure and compare editorial performance to understand how your content is delivering.",
      },
      {
        title: "Traffic Source Analysis",
        desc: "Discover where your readers come from and which channels drive traffic to your website.",
      },
      {
        title: "AI-Powered Audience Intelligence",
        desc: "Turn audience activity and performance data into actionable insights for informed editorial decisions.",
      },
    ],
    callout: {
      title: "Powered by AGS’s Product Innovation",
      desc: "LynkBeats reflects AGS’s commitment to developing practical technology solutions that help media organisations make better use of their data.",
    },
    challengesHeadingLine1: "Better Insights. Smarter Newsroom",
    challengesHeadingLine2: "Decisions.",
    challengesSubtitle: null,
    challengesLayout: "challenge-advantage",
    challenges: [
      {
        question: "Is Your Content Getting the Attention It Deserves?",
        challengeText:
          "Published stories don’t always get the expected audience attention, and identifying performance gaps takes time.",
        advantagePrefix: "The LynkBeats Advantage:",
        advantageText:
          "Track stories in real time and see what is gaining audience attention.",
      },
      {
        question: "Do You Know What Drives Your Website Traffic?",
        challengeText:
          "Without clear traffic insights, understanding which channels bring readers becomes difficult.",
        advantagePrefix: "The LynkBeats Advantage:",
        advantageText:
          "Analyse traffic sources and understand how audiences discover your content.",
      },
      {
        question: "Are You Measuring Editorial Performance Effectively?",
        challengeText:
          "Without consistent KPI monitoring, evaluating content performance and editorial outcomes becomes challenging.",
        advantagePrefix: "The LynkBeats Advantage:",
        advantageText:
          "Monitor editorial KPIs and compare story performance with greater clarity.",
      },
      {
        question: "Are You Creating Content Around Audience Interests?",
        challengeText:
          "Audience preferences change, making it difficult to identify relevant content opportunities.",
        advantagePrefix: "The LynkBeats Advantage:",
        advantageText:
          "Use AI-powered audience intelligence to uncover insights that support smarter content decisions.",
      },
      {
        question: "Can You See Your Newsroom’s Complete Performance at a Glance?",
        challengeText:
          "Scattered performance data makes it harder to understand the bigger picture.",
        advantagePrefix: "The LynkBeats Advantage:",
        advantageText:
          "Bring essential newsroom performance insights together in one dashboard.",
      },
    ],
    bottomCta: {
      headingLine1: "Don’t Just Publish Stories.",
      headingLine2: "Understand Their Impact.",
      secondaryLabel: "Explore LynkBeats",
      secondaryHref: "https://linkbeats.in/",
    },
  },
};

function EnquireButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex h-[49px] min-w-[167px] items-center justify-center gap-3.5 bg-[#14101F] px-6 text-[14px] font-medium text-white rounded-none transition-all duration-200 hover:bg-[#241D35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A3CFF] cursor-pointer whitespace-nowrap"
    >
      <span>Enquire Now</span>
      <Image
        src="/contact/uil_arrow-up.png"
        alt=""
        width={20}
        height={20}
        unoptimized
        className="h-5 w-5 shrink-0 brightness-0 invert transition-transform duration-300 group-hover:rotate-45"
      />
    </button>
  );
}

function ExploreButton({ href, label }) {
  const isExternal = /^https?:\/\//i.test(href);
  const isAnchor = href.startsWith("#");
  const className =
    "inline-flex h-[49px] min-w-[160px] items-center justify-center border border-[#14101F] bg-white px-7 text-[14px] font-medium text-[#14101F] rounded-none transition-colors duration-200 hover:bg-[#14101F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A3CFF] whitespace-nowrap";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <span>{label}</span>
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    );
  }

  if (isAnchor) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function FigmaProductDetailPage({ slug }) {
  const { openForm } = useCtaForm();
  const data = PRODUCT_CONFIGS[slug] || PRODUCT_CONFIGS.vidlens;

  const handleEnquire = () => {
    openForm({ service: data.name, lockService: true });
  };

  return (
    <main className="font-poppins relative min-h-screen bg-white text-[#14101F] overflow-x-clip">
      <ScrollTriggerRefresh />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Light Canvas matching Figma export)
          ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-white pt-[116px] sm:pt-[134px] lg:pt-[144px]">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-[96px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Back Link, Title, Lead, Description & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start min-w-0">
              <Link
                href="/products"
                className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#7A3CFF] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A3CFF]"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-x-0.5"
                >
                  <path
                    d="M13 8H3M7 4L3 8l4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Back to products</span>
              </Link>

              <h1 className="mt-4 text-[48px] sm:text-[60px] lg:text-[68px] font-light tracking-[-0.03em] leading-[1.03] text-[#14101F]">
                {data.name}
              </h1>

              <p className="mt-2.5 text-[13px] sm:text-[13.5px] font-medium text-[#555062]">
                {data.eyebrow}
              </p>

              <p className="mt-6 text-[17.5px] sm:text-[19px] font-medium text-[#14101F] leading-[1.35]">
                {data.lead}
              </p>

              <p className="mt-4 text-[14.5px] sm:text-[15.5px] font-normal text-[#555062] leading-[1.68] max-w-[580px]">
                {data.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <EnquireButton onClick={handleEnquire} />
                <ExploreButton
                  href={data.exploreHref}
                  label={data.exploreLabel}
                />
              </div>
            </div>

            {/* Right Column: Hero Mockup Image + Metadata Spec Rows */}
            <div className="lg:col-span-6 w-full min-w-0 lg:pl-4">
              <div className="relative w-full aspect-[587/375] overflow-hidden bg-[#F4F2EE]">
                <Image
                  src={data.heroImage}
                  alt={data.heroAlt}
                  fill
                  priority
                  loading="eager"
                  fetchPriority="high"
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 588px"
                  className="object-cover object-center"
                />
              </div>

              <dl className="mt-10 sm:mt-12 border-t border-[#CFCBD8]">
                {data.metaRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 border-b border-[#CFCBD8] py-3.5 sm:py-4 text-[13.5px] sm:text-[14px]"
                  >
                    <dt className="text-[#6E6A79] font-normal">{row.label}</dt>
                    <dd className="text-[#14101F] font-medium text-right">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-14 lg:mt-16 border-b border-[#CFCBD8]" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CAPABILITIES & FEATURES SECTION
          ───────────────────────────────────────────────────────────── */}
      <section id={data.featuresSectionId} className="w-full bg-white pt-10 sm:pt-12">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-[96px]">
          <ScrollReveal direction="up" distance={24} duration={0.7}>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-light tracking-[-0.025em] leading-[1.12] text-[#14101F]">
              {data.featuresHeadingLine1}
              <br className="hidden sm:inline" />{" "}
              {data.featuresHeadingLine2}
            </h2>

            {data.featuresSubtitle && (
              <p className="mt-4 text-[14px] sm:text-[15px] font-normal text-[#555062] leading-[1.6] max-w-[660px]">
                {data.featuresSubtitle}
              </p>
            )}
          </ScrollReveal>

          {data.featuresLayout === "three-col-numbered" ? (
            <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-12">
              {data.features.map((feat) => (
                <div key={feat.num} className="min-w-0">
                  <div className="h-[2px] w-full bg-[#7A3CFF] mb-5" />
                  <span className="block text-[12px] font-medium text-[#7A3CFF] mb-2">
                    {feat.num}
                  </span>
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#14101F] leading-snug mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] font-normal text-[#555062] leading-[1.58]">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-10 gap-y-10">
              {data.features.map((feat) => (
                <div key={feat.title} className="min-w-0">
                  <div className="h-[2px] w-full bg-[#7A3CFF] mb-5" />
                  <h3 className="text-[15.5px] sm:text-[16.5px] font-medium text-[#14101F] leading-snug mb-2.5">
                    {feat.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] font-normal text-[#555062] leading-[1.6]">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {data.callout && (
            <div className="mt-11 sm:mt-12 bg-[#F6F3FD] border-b border-[#CFCBD8] px-6 sm:px-8 py-6 sm:py-7">
              <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#14101F]">
                {data.callout.title}
              </h3>
              <p className="mt-3 text-[13.5px] sm:text-[14px] font-normal text-[#555062] leading-[1.6] max-w-[660px]">
                {data.callout.desc}
              </p>
            </div>
          )}

          {!data.callout && (
            <div className="mt-14 lg:mt-16 border-b border-[#CFCBD8]" />
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CHALLENGES & SOLUTIONS SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-white pt-12 sm:pt-16">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-[96px]">
          <ScrollReveal direction="up" distance={24} duration={0.7}>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-light tracking-[-0.025em] leading-[1.12] text-[#14101F]">
              {data.challengesHeadingLine1}
              <br className="hidden sm:inline" />{" "}
              {data.challengesHeadingLine2}
            </h2>

            {data.challengesSubtitle && (
              <p className="mt-3.5 text-[13.5px] sm:text-[14.5px] font-normal text-[#555062] leading-[1.6] max-w-[770px]">
                {data.challengesSubtitle}
              </p>
            )}
          </ScrollReveal>

          <div className="mt-10 sm:mt-12 border-t border-[#CFCBD8]">
            {data.challenges.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-[#CFCBD8] py-7 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start"
              >
                <div className="lg:col-span-6 min-w-0">
                  {data.challengesLayout === "problem-labeled" && item.label && (
                    <span className="block text-[12px] font-medium text-[#7A3CFF] mb-1.5">
                      {item.label}
                    </span>
                  )}
                  <h3 className="text-[17px] sm:text-[19px] font-medium text-[#14101F] leading-[1.35]">
                    {item.question}
                  </h3>
                </div>

                <div className="lg:col-span-6 lg:pl-6 min-w-0 text-[13.5px] sm:text-[14.5px] leading-[1.6]">
                  {data.challengesLayout === "problem-labeled" ? (
                    <p className="text-[#555062] font-normal">
                      <span className="font-medium text-[#7A3CFF]">
                        {item.solutionPrefix}
                      </span>{" "}
                      {item.solutionText}
                    </p>
                  ) : (
                    <div className="space-y-2.5">
                      <p className="text-[#555062] font-normal">
                        <strong className="font-semibold text-[#14101F]">
                          The Challenge:
                        </strong>{" "}
                        {item.challengeText}
                      </p>
                      <p className="text-[#555062] font-normal">
                        <span className="font-medium text-[#7A3CFF]">
                          {item.advantagePrefix}
                        </span>{" "}
                        {item.advantageText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. BOTTOM CENTERED IMPACT CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-[96px] text-center">
          <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-light tracking-[-0.025em] leading-[1.14] text-[#14101F] max-w-[680px] mx-auto">
            {data.bottomCta.headingLine1}
            <br />
            {data.bottomCta.headingLine2}
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <EnquireButton onClick={handleEnquire} />
            <ExploreButton
              href={data.bottomCta.secondaryHref}
              label={data.bottomCta.secondaryLabel}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. GLOBAL CTA ("Let's work with Us") & PRODUCT SUPPORT FOOTER
          ───────────────────────────────────────────────────────────── */}
      <CTASection />
      <Footer contactEmail="it-support@amrutglobalsolutions.com" />
    </main>
  );
}
