"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const FEATURED_POST = {
  id: "creating-exceptional-digital-experiences",
  category: "Design",
  date: "February 13, 2024",
  title: "Creating Exceptional Digital Experiences",
  excerpt:
    "User-Centered Design is not just a process; it's a mindset that prioritizes the needs and experiences of users. By embracing UCD principles, designers can create digital experiences.",
  image: "/blog/Link (1).png",
  readTime: "5 min read",
  author: "AGS Design Team",
  fullContent: `User-Centered Design (UCD) is not just a methodology; it is a foundational philosophy that places the real needs, behaviors, and aspirations of users at the very center of software architecture.

In today's fast-paced digital ecosystem, companies often fall into the trap of prioritizing feature volume over feature clarity. By stepping back and adhering to foundational human-computer interaction (HCI) heuristics, design teams create products that feel intuitive, elegant, and effortless.

Key Pillars of Exceptional Digital Experiences:
1. Deep Contextual Empathy: Understanding not just what users click, but why they hesitate and what pain points they seek to resolve.
2. Progressive Disclosure: Presenting information in digestible layers to avoid cognitive overload while retaining technical depth for power users.
3. Rapid Prototyping & Iteration: Validating hypotheses early with real users rather than relying on boardroom assumptions.
4. Harmonious Aesthetics & Functionality: Visual beauty elevates credibility, but lightning-fast usability seals retention and brand loyalty.`,
};

const RECENT_POSTS = [
  {
    id: "key-principles-for-successful-projects",
    category: "Project Management",
    tag: "Recent Post",
    date: "February 13, 2024",
    title: "Key Principles for Successful Projects",
    image: "/blog/Listitem → Article.png",
    hideBadgeOverlay: true,
    readTime: "4 min read",
    author: "AGS Project Office",
    excerpt:
      "Mastering agile delivery, stakeholder alignment, and risk-adjusted milestone planning to ensure digital transformations land on schedule and within budget.",
    fullContent: `Managing complex software delivery requires balancing velocity, scope, and technical excellence.

Key principles that consistently determine project triumph include:
- Radical Transparency: Establishing real-time sprint dashboards and open communication channels between engineering, design, and executive sponsors.
- Scope Discipline & Buffer Allocation: Committing strictly to high-impact user stories while maintaining an intentional buffer for unforeseen edge cases.
- Continuous Integration and Feedback: Shortening feedback loops so that stakeholder reviews happen incrementally rather than in monumental waterfall reveals.`,
  },
  {
    id: "how-cloud-computing-transforms-business-operations",
    category: "Project Management",
    tag: "Recent Post",
    date: "February 13, 2024",
    title: "How Cloud Computing Transforms Business Operations",
    image: "/blog/team-laptop.png",
    hideBadgeOverlay: false,
    readTime: "6 min read",
    author: "AGS Cloud Solutions",
    excerpt:
      "From on-premise constraints to elastic cloud scaling, discover how modern enterprise architecture unblocks agility and drives bottom-line profitability.",
    fullContent: `Modern enterprises can no longer afford the rigid timelines and heavy capital expenditure of legacy on-premise servers.

Cloud transformation unlocks unprecedented agility:
- Elastic Resource Allocation: Scale compute power up or down in seconds based on live traffic fluctuations.
- Global High Availability: Multi-region failover and distributed edge CDN delivery ensure sub-second response times worldwide.
- Security and Automated Compliance: Enterprise-grade encryption, continuous vulnerability monitoring, and automated compliance pipelines protect critical data assets.`,
  },
];

const GRID_POSTS = [
  {
    id: "top-10-cybersecurity-threats-2023",
    category: "Artificial Intelligence",
    date: "February 12, 2024",
    title: "Top 10 Cybersecurity Threats in 2023 and How to Defend Against Them",
    excerpt:
      "As the digital landscape continues to evolve, so do the cybersecurity threats that businesses face. Being proactive, informed, and continuously adapting your security measures is the key to defending against these threats in 2023 and beyond.",
    image: "/blog/Link (2).png",
    hideBadgeOverlay: false,
    readTime: "7 min read",
    author: "AGS Security & VAPT Team",
    fullContent: `Cybersecurity is no longer an afterthought—it is a cornerstone of business continuity. As automated threat vectors and AI-driven phishing attacks proliferate, organizations must adopt a zero-trust posture.

Critical defense strategies:
- Zero-Trust Architecture: Verify explicitly, authorize dynamically, and assume breach across all endpoints and microservices.
- Continuous Vulnerability Auditing & Penetration Testing (VAPT): Uncover exposed ports, outdated dependencies, and logic vulnerabilities before adversaries do.
- Employee Awareness & Phishing Simulations: People remain the primary attack vector; frequent, realistic training builds a reliable human firewall.`,
  },
  {
    id: "navigating-it-project-management-strategies",
    category: "Project Management",
    date: "February 12, 2024",
    title: "Navigating IT Project Management: Strategies for Success",
    excerpt:
      "Effective IT project management is essential for delivering successful outcomes in a rapidly evolving technology landscape. By implementing these strategies and best practices, your organization can navigate the complexities of IT projects with confidence.",
    image: "/blog/Link (4).png",
    hideBadgeOverlay: false,
    readTime: "5 min read",
    author: "AGS Delivery Excellence",
    fullContent: `IT project management requires navigating shifting market demands, technical hurdles, and cross-functional teams.

Proven execution tactics:
- Clear Definition of Done (DoD): Eradicate ambiguity by setting strict acceptance criteria for every user story and sprint goal.
- Proactive Risk Identification: Maintain a living risk register to preempt blockers, API deprecations, and integration bottlenecks.
- Stakeholder Alignment Cadence: Synchronize business objectives with sprint reviews to celebrate incremental milestones and recalibrate priority backlogs.`,
  },
  {
    id: "benefits-of-migrating-to-the-cloud-comprehensive-guide",
    category: "Artificial Intelligence",
    date: "February 12, 2024",
    title: "The Benefits of Migrating to the Cloud: A Comprehensive Guide",
    excerpt:
      "The benefits of migrating to the cloud are abundant, making it a strategic move for businesses looking to streamline operations, reduce costs, and stay competitive in today's digital age. However, a successful cloud migration requires careful planning, evaluation of providers, and a well-executed strategy.",
    image: "/blog/Link (5).png",
    hideBadgeOverlay: true,
    readTime: "8 min read",
    author: "AGS DevOps & Cloud Practice",
    fullContent: `Moving enterprise workloads to AWS or modern cloud environments transforms the entire operational velocity of modern organizations.

Strategic migration advantages:
- Operational Resilience: High-durability object storage, automated multi-AZ database clustering, and self-healing container fleets.
- Financial Optimization: Transition from bulky upfront hardware CAPEX to transparent, usage-based OPEX with predictable cost modeling.
- Innovation Acceleration: Tap directly into managed machine learning models, serverless microservices, and big data pipelines without managing physical hardware.`,
  },
];

export default function BlogPage() {
  const { openForm } = useCtaForm();
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedArticle]);

  return (
    <main className="relative min-h-screen bg-white text-[#111111] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#07051A]">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/Laptop WordPress Editing Workspace.png"
            alt="AGS Blog Hero Workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          {/* Gradients to match Figma dark tone */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07051A]/85 via-[#0A071E]/70 to-[#07051A]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#07051A_80%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center pt-24 pb-16">
          <ScrollReveal direction="up" distance={50} duration={0.9}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-medium tracking-tight text-white mb-6">
              Our Blog
            </h1>
            <p className="text-base sm:text-lg md:text-[18px] text-white/80 max-w-2xl mx-auto leading-relaxed mb-9 font-light">
              Welcome to our blog where we dive deep into the philosophy of simplicity in an increasingly complex world
            </p>
            <div>
              <button
                type="button"
                onClick={() => openForm()}
                className="group inline-flex items-center gap-3 bg-white px-7 py-3.5 text-[15px] font-medium text-[#111111] transition-all duration-300 hover:bg-white/95 hover:scale-[1.02] shadow-xl rounded-none cursor-pointer"
              >
                <span>Get Started</span>
                <div className="w-5 h-5 rounded-full border border-black/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/full-stack/uil_arrow-up.png"
                    alt=""
                    width={11}
                    height={11}
                    className="w-2.5 h-2.5 rotate-45 object-contain"
                    aria-hidden="true"
                  />
                </div>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE & RECENT POSTS SECTION */}
      <section className="relative z-10 w-full bg-white py-14 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
        <div className="mx-auto max-w-[1340px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: Large Featured Article (Col 1-7) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" distance={40} duration={0.8}>
                <article
                  className="group flex flex-col cursor-pointer"
                  onClick={() => setSelectedArticle(FEATURED_POST)}
                >
                  {/* Image Container with Badge */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 rounded-none shadow-sm">
                    <Image
                      src={FEATURED_POST.image}
                      alt={FEATURED_POST.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block bg-[#703EFF] text-white text-[11px] sm:text-xs font-semibold px-3 py-1 uppercase tracking-wider rounded-none">
                        {FEATURED_POST.category}
                      </span>
                    </div>
                  </div>

                  {/* Meta & Content */}
                  <div className="mt-5 text-sm text-[#737380] font-normal">
                    {FEATURED_POST.date}
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#111111] leading-tight transition-colors duration-200 group-hover:text-[#703EFF]">
                    {FEATURED_POST.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-[#666666] leading-relaxed font-light">
                    {FEATURED_POST.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 text-[#703EFF] font-semibold text-sm sm:text-base transition-all duration-300 group-hover:gap-2.5">
                      <span>Read more</span>
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            </div>

            {/* RIGHT COLUMN: Stacked 2 Recent Posts (Col 8-12) */}
            <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-10">
              {RECENT_POSTS.map((post, idx) => (
                <ScrollReveal
                  key={post.id}
                  direction="up"
                  distance={40}
                  duration={0.8}
                  delay={idx * 150}
                >
                  <article
                    className="group flex flex-col cursor-pointer"
                    onClick={() => setSelectedArticle(post)}
                  >
                    {/* Image Container with Badge */}
                    <div className="relative w-full h-[210px] sm:h-[230px] overflow-hidden bg-gray-100 rounded-none shadow-sm">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {!post.hideBadgeOverlay && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-block bg-[#703EFF] text-white text-[11px] font-semibold px-2.5 py-1 uppercase tracking-wider rounded-none">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Meta Row */}
                    <div className="mt-3.5 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-[#703EFF] font-semibold">
                        {post.tag}
                      </span>
                      <span className="text-[#737380] font-normal">
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-lg sm:text-xl font-semibold text-[#111111] leading-snug transition-colors duration-200 group-hover:text-[#703EFF]">
                      {post.title}
                    </h3>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE-COLUMN BLOG GRID SECTION */}
      <section className="relative z-10 w-full bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1340px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {GRID_POSTS.map((post, idx) => (
              <ScrollReveal
                key={post.id}
                direction="up"
                distance={40}
                duration={0.8}
                delay={idx * 120}
              >
                <article
                  className="group flex flex-col h-full cursor-pointer"
                  onClick={() => setSelectedArticle(post)}
                >
                  {/* Image Container with Badge */}
                  <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden bg-gray-100 rounded-none shadow-sm">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {!post.hideBadgeOverlay && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-block bg-[#703EFF] text-white text-[11px] font-semibold px-2.5 py-1 uppercase tracking-wider rounded-none">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Date */}
                  <div className="mt-4 text-xs sm:text-sm text-[#737380] font-normal">
                    {post.date}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-lg sm:text-xl font-semibold text-[#111111] leading-snug transition-colors duration-200 group-hover:text-[#703EFF]">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-sm text-[#666666] leading-relaxed font-light line-clamp-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-4 pt-1">
                    <span className="inline-flex items-center gap-1.5 text-[#703EFF] font-semibold text-sm transition-all duration-300 group-hover:gap-2.5">
                      <span>Read more</span>
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REUSABLE CTA BANNER SECTION */}
      <CTASection />

      {/* 5. REUSABLE FOOTER */}
      <Footer />

      {/* 6. INTERACTIVE ARTICLE READER MODAL */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white text-[#111111] p-6 sm:p-10 shadow-2xl rounded-none border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 text-gray-500 hover:text-black p-2 rounded-none transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3">
              <span className="bg-[#703EFF] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider rounded-none">
                {selectedArticle.category}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 font-normal">
                {selectedArticle.date}
              </span>
              {selectedArticle.readTime && (
                <>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs sm:text-sm text-gray-500 font-normal">
                    {selectedArticle.readTime}
                  </span>
                </>
              )}
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
              {selectedArticle.title}
            </h2>

            {selectedArticle.author && (
              <p className="mt-2 text-xs sm:text-sm text-gray-500 font-medium">
                Published by {selectedArticle.author}
              </p>
            )}

            {/* Article Image */}
            <div className="relative w-full h-64 sm:h-80 my-6 bg-gray-100 rounded-none overflow-hidden">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            {/* Article Excerpt */}
            <blockquote className="border-l-4 border-[#703EFF] pl-4 py-1 italic text-gray-700 my-4 text-sm sm:text-base bg-purple-50/50">
              {selectedArticle.excerpt}
            </blockquote>

            {/* Article Body */}
            <div className="mt-6 text-gray-700 leading-relaxed text-sm sm:text-base space-y-4 whitespace-pre-line font-light">
              {selectedArticle.fullContent}
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-500">
                Want to discuss this topic or explore a partnership?
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedArticle(null);
                  openForm();
                }}
                className="inline-flex items-center gap-2 bg-[#703EFF] text-white px-6 py-2.5 text-sm font-semibold rounded-none hover:bg-[#5b2bd4] transition-colors cursor-pointer"
              >
                <span>Get in Touch</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

