import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import CTASection from "@/components/CTASection";

const SERVICES_DETAIL_DATA = {
  "website-development": {
    title: "Website Development",
    subtitle: "High-Performance Web Platforms Engineered for Real Growth",
    heroImage: "/services/Website.png",
    statValue: "< 1.2s",
    statLabel: "Average Load Time",
    intro:
      "We design and build bespoke web experiences that marry breath-taking custom layouts with bleeding-edge engineering. From sleek corporate communication hubs to high-volume headless e-commerce networks, we build fast, scalable, secure, and SEO-optimized sites that convert users into brand advocates.",
    capabilities: [
      {
        title: "Headless & Jamstack Architecture",
        desc: "Building with Next.js, React, and server-side components for maximum security, instantaneous load times, and dynamic routing capabilities.",
      },
      {
        title: "Bespoke UI/UX Translation",
        desc: "Pixel-perfect implementation of Figma designs ensuring complete consistency, smooth micro-interactions, and premium aesthetics.",
      },
      {
        title: "E-Commerce Systems",
        desc: "Developing custom checkouts, subscriptions, product grids, and payment gateway integrations that reduce basket abandonment.",
      },
      {
        title: "Headless CMS Integrations",
        desc: "Empowering your content team with direct, intuitive layouts using Sanity, Contentful, or Strapi without risking breaking the code.",
      },
      {
        title: "Lighthouse & SEO Hardening",
        desc: "Aggressive optimization for Core Web Vitals, rich snippets, DOM elements, and structural schema markup.",
      },
      {
        title: "Cloud Infrastructure (AWS)",
        desc: "Deploying high-availability architectures with CloudFront CDN, serverless APIs, global edge functions, and secure firewalls.",
      },
    ],
    techStack: ["Next.js 16", "React 19", "Tailwind CSS", "Node.js", "GraphQL", "AWS CloudFront", "Sanity CMS", "PostgreSQL"],
    process: [
      {
        step: "01",
        phase: "Architectural Mapping",
        desc: "We perform a thorough breakdown of your user pathways, content schemas, and cloud deployment specifications before writing a single line of code.",
      },
      {
        step: "02",
        phase: "Pixel-Perfect Engineering",
        desc: "Our developers translate design tokens, typography scales, and structural layouts into high-performing component architectures.",
      },
      {
        step: "03",
        phase: "Vitals & Hardening",
        desc: "We conduct stress testing, accessibility checks, edge network caching tests, and load-vitals audits to secure a 100/100 Lighthouse score.",
      },
      {
        step: "04",
        phase: "Global Deployment & Handoff",
        desc: "Your application is built and shipped via CI/CD to AWS edge locations, accompanied by comprehensive CMS layouts training for your team.",
      },
    ],
    faqs: [
      {
        q: "What frameworks do you use for website development?",
        a: "We primarily engineer custom platforms using Next.js (React), Tailwind CSS, and headless backends. This delivers instantaneous, serverless architectures that perform far better than generic monolithic CMS models like WordPress.",
      },
      {
        q: "How do you ensure our website ranks high on Google?",
        a: "All our code is built on semantic HTML5 grids, utilizes server-side rendering (SSR) for zero-latency indexing, generates automated dynamic sitemaps, integrates Google Analytics cleanly, and implements custom structural schema tags.",
      },
      {
        q: "Will we be able to edit our site's content ourselves?",
        a: "Absolutely. We integrate intuitive, modular headless CMS dashboards (such as Sanity, Contentful, or Strapi) where your team can safely adjust landing copy, publish articles, or add cards without risking design disruption.",
      },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX & Graphic Design",
    subtitle: "Human-Centric Digital Interfaces Built to Captivate",
    heroImage: "/services/UX.png",
    statValue: "250+",
    statLabel: "Custom Screens Designed",
    intro:
      "We design digital interfaces that make complex interactions feel simple, intuitive, and delightful. Combining exhaustive user research with pixel-perfect visual artistry, we craft cohesive design systems and interactive prototypes that elevate your brand and drive product adoption.",
    capabilities: [
      {
        title: "User Research & Persona Auditing",
        desc: "Analyzing user behavior patterns, conducting qualitative interviews, and building detailed demographic paths.",
      },
      {
        title: "Interactive Prototyping",
        desc: "Creating high-fidelity, interactive prototypes in Figma simulating actual transitions, layout flows, and mobile interactions.",
      },
      {
        title: "Visual Design Systems",
        desc: "Authoring style guides with atomic design tokens, strict spacing scales, responsive grids, and standard components.",
      },
      {
        title: "Accessibility Audit (WCAG)",
        desc: "Ensuring compliance with WCAG 2.1 AA parameters by optimizing color contrast indices, tap target sizing, and typography legibility.",
      },
      {
        title: "Information Architecture",
        desc: "Structuring clean navigation logic, comprehensive user trees, and conversion funnel matrices.",
      },
      {
        title: "Brand Identity Design",
        desc: "Crafting beautiful vectors, custom logotypes, rich iconography suites, and complementary HSL color schemes.",
      },
    ],
    techStack: ["Figma", "Adobe CC", "Principle", "Atomic Design", "WCAG 2.1", "Tokens Studio", "Storybook", "SVG Vector"],
    process: [
      {
        step: "01",
        phase: "User & Competitor Discovery",
        desc: "Deep research into client target groups, structural competitor friction points, and product navigation benchmarks.",
      },
      {
        step: "02",
        phase: "Wireframing & Funnel UX",
        desc: "Building low-fidelity structural blueprints to test cognitive pathways, call-to-action locations, and hierarchy structures.",
      },
      {
        step: "03",
        phase: "High-Fidelity Interface UI",
        desc: "Infusing premium visual aesthetics, harmonic HSL gradients, custom icons, typography rules, and dark-mode compatibility.",
      },
      {
        step: "04",
        phase: "Design System Assembly",
        desc: "Compiling all icons, grids, buttons, forms, and typography elements into a strict, modular Figma library ready for developer handoff.",
      },
    ],
    faqs: [
      {
        q: "What is your design handoff process like for developers?",
        a: "We build strict atomic design systems in Figma using Auto Layout, Component Sets, and clear Design Tokens. We hold collaborative walkthrough sessions to guarantee that developers understand transitions, spacings, and typography systems.",
      },
      {
        q: "How do you ensure designs align with our target users?",
        a: "We begin by drafting user personas and mapping user journeys. We continuously refine low-fidelity wireframes based on practical navigation scenarios, ensuring every design element has a specific user conversion purpose.",
      },
      {
        q: "Do you design for both web and mobile screens?",
        a: "Yes. Every interface we design is responsive by default, including custom layout breakpoints for mobile devices (down to 320px) up to ultra-wide desktop monitors.",
      },
    ],
  },
  "digital-solutions": {
    title: "Digital Solutions",
    subtitle: "Accelerate Customer Acquisition & Scale Operations",
    heroImage: "/services/Frame 1597884173.png",
    statValue: "10x",
    statLabel: "Average Client ROI Lift",
    intro:
      "We provide digital solutions that bridges business strategy with performance marketing. From consulting and marketing automations to CRM structures and user acquisition funnels, we build high-performing engines that generate, nurture, and convert pipeline leads.",
    capabilities: [
      {
        title: "Digital Strategy & Consulting",
        desc: "Aligning your products, budgets, and distribution channels to achieve scalable growth and customer acquisition.",
      },
      {
        title: "Marketing Automation Flow",
        desc: "Setting up sophisticated automated sequences across email, CRM triggers, and ad networks that convert cold leads on autopilot.",
      },
      {
        title: "Analytics & Advanced Tracking",
        desc: "Implementing multi-touch attribution, server-side Google Analytics, Meta Pixel tracking, and user event matrices.",
      },
      {
        title: "SEO Content Strategy",
        desc: "Performing deep search keyword audits, topic cluster mapping, and indexing blueprints designed to build high organic search authority.",
      },
      {
        title: "Sales Funnel Architecture",
        desc: "Designing and optimization of landing pages, conversion elements, micro-copy, and lead magnets for B2B or B2C models.",
      },
      {
        title: "CRM & ERP Implementation",
        desc: "Connecting and syncing tools like HubSpot, Salesforce, or customized data lakes to keep customer records unified.",
      },
    ],
    techStack: ["Google Analytics 4", "HubSpot", "Zapier", "Meta Ads", "Google Tag Manager", "Mailchimp", "SEMrush", "SQL Data"],
    process: [
      {
        step: "01",
        phase: "Competitor & Funnel Audit",
        desc: "Reviewing your current digital presence, highlighting user leaks, keyword gaps, and automation blockages.",
      },
      {
        step: "02",
        phase: "Growth Engine Setup",
        desc: "Deploying high-converting landing setups, CRM custom objects, custom API endpoints, and event capture structures.",
      },
      {
        step: "03",
        phase: "Campaign Activation",
        desc: "Launching hyper-targeted campaigns alongside optimization of content assets to attract qualified organic search traffic.",
      },
      {
        step: "04",
        phase: "Conversion Auditing & Pivot",
        desc: "Continuous A/B testing of messaging, button colors, form fields, and audience segments to maximize ROI.",
      },
    ],
    faqs: [
      {
        q: "What CRM systems do you support?",
        a: "We have extensive integration experience across Hubspot, Salesforce, Zoho, ActiveCampaign, and custom database APIs. We focus on syncing data instantly between your Next.js frontend and CRM records.",
      },
      {
        q: "How long does it take to see results from SEO and Digital Strategy?",
        a: "While technical SEO optimizations (Core Web Vitals, meta layouts) are instantly rewarded by Google crawls, significant organic ranking lifts typically take 3 to 6 months of steady content-authority execution. Paid ads and conversion-funnel optimization yield immediate feedback.",
      },
      {
        q: "Do you handle campaign management or only implementation?",
        a: "We offer both! We can construct and deploy the tools, landing templates, and tracking codes, or provide long-term monthly support managing your ad accounts, SEO growth, and content clusters.",
      },
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    subtitle: "Robust iOS & Android App Engineering That Scales",
    heroImage: "/services/Frame 1597884174.png",
    statValue: "99.9%",
    statLabel: "Production Crash-Free Rate",
    intro:
      "We design and build robust, high-performance mobile applications for both iOS and Android platforms. Leveraging modern cross-platform frameworks and direct API integrations, we deliver smooth user interactions, native features, and seamless cloud integrations.",
    capabilities: [
      {
        title: "Cross-Platform Engineering",
        desc: "Using React Native and Flutter to ship unified codebases for both iOS and Android, drastically reducing build costs while keeping native speeds.",
      },
      {
        title: "Custom App UI/UX Design",
        desc: "App-specific interfaces respecting Apple Human Interface Guidelines and Google Material Design guidelines.",
      },
      {
        title: "Real-Time Cloud Integrations",
        desc: "Integrating WebSockets, real-time message brokers, serverless push notifications, and live tracking capabilities.",
      },
      {
        title: "Offline-First Synchronization",
        desc: "Structuring local SQLite or Realm databases inside the phone to keep app actions active without stable mobile signals.",
      },
      {
        title: "Secure Payment Integrations",
        desc: "Integrating Apple Pay, Google Pay, Razorpay, Stripe, and in-app purchase modules securely under PCI compliance standards.",
      },
      {
        title: "Store Optimization & Launch",
        desc: "Handling all aspects of Apple App Store and Google Play console setup, asset guidelines compliance, and app vetting processes.",
      },
    ],
    techStack: ["React Native", "Flutter", "Swift & Kotlin", "SQLite", "Firebase", "Node.js API", "WebSockets", "App Store Connect"],
    process: [
      {
        step: "01",
        phase: "Wireframes & User Flows",
        desc: "Designing simple user screens focusing on gesture dynamics, tap dimensions, and screen-to-screen routing grids.",
      },
      {
        step: "02",
        phase: "API & Logic Setup",
        desc: "Building the custom backend endpoints, setting up data storage schemas, and linking authentication libraries.",
      },
      {
        step: "03",
        phase: "Iterative Testing",
        desc: "Running extensive QA audits using physical mobile devices and automated testing simulators across different screen sizes.",
      },
      {
        step: "04",
        phase: "App Store Publishing",
        desc: "Setting store descriptions, preparing custom screenshots, signing build binaries, and navigating the review queues.",
      },
    ],
    faqs: [
      {
        q: "Should we build a React Native, Flutter, or Native app?",
        a: "For over 90% of business applications, React Native or Flutter is the smartest path. It lets you run a codebase that deploys to both iOS and Android, which reduces development and support budgets by nearly half while maintaining native speeds.",
      },
      {
        q: "Do you help publish the app to the Google Play Store and Apple App Store?",
        a: "Yes. We take full responsibility for preparing App Store Connect assets, compiling sign-keys, submitting builds, and answering App Store review comments until your application is live.",
      },
      {
        q: "Can the app function without an active internet connection?",
        a: "Yes. We build offline-first synchronization logic. The app reads and writes data to a secure database directly on the device, syncing with our cloud servers as soon as network signal is restored.",
      },
    ],
  },
  "ai-solutions": {
    title: "AI Solutions",
    subtitle: "Empower Business Workflows with Practical Intelligence",
    heroImage: "/services/Frame 1597884175.png",
    statValue: "65%",
    statLabel: "Workflow Time Reduced",
    intro:
      "We design, build, and deploy intelligent AI systems that transform operational efficiency. We bypass theoretical buzzwords and construct custom machine learning pipelines, LLM agents, automated classification engines, and predictive intelligence layers that save time and optimize returns.",
    capabilities: [
      {
        title: "Custom LLM Integrations",
        desc: "Setting up private, secure Large Language Models (OpenAI, Claude, Llama 3) integrated with your company's actual database files.",
      },
      {
        title: "Intelligent Automation Agents",
        desc: "Developing smart bots and autonomous workflows that handle data categorization, customer service tickets, and document checks.",
      },
      {
        title: "Predictive Analytics Models",
        desc: "Using regression models and pattern recognition algorithms to forecast purchase frequencies, customer attrition, and sales demand.",
      },
      {
        title: "Natural Language Processing (NLP)",
        desc: "Semantic searching, smart sentiment scoring, custom audio-to-text transcribers, and interactive automated support bots.",
      },
      {
        title: "Private Vector DB (RAG)",
        desc: "Building Retrieval-Augmented Generation architectures to let you securely search and chat with your private company PDFs and guides.",
      },
      {
        title: "Computer Vision Systems",
        desc: "Developing custom object detection models, automated image tagging, and visual quality audit pipelines.",
      },
    ],
    techStack: ["Python", "PyTorch", "OpenAI API", "LangChain", "Vector DB (Pinecone)", "FastAPI", "AWS SageMaker", "LlamaIndex"],
    process: [
      {
        step: "01",
        phase: "Dataset & Feasibility Audit",
        desc: "Auditing your digital spreadsheets, databases, and document logs to determine AI modeling suitability.",
      },
      {
        step: "02",
        phase: "Prompt & Pipeline Architecture",
        desc: "Engineering custom prompt structures, setting up vector models, and establishing API integrations inside Next.js.",
      },
      {
        step: "03",
        phase: "Precision Hardening",
        desc: "Testing agents for edge-case prompts, optimizing data token usage, and securing absolute API response latency.",
      },
      {
        step: "04",
        phase: "Deployment & Systems Sync",
        desc: "Deploying secure, serverless FastAPI pipelines on AWS connected directly to your employee UI systems.",
      },
    ],
    faqs: [
      {
        q: "Will our private data be shared with public AI models?",
        a: "No. We prioritize absolute data security. We design vector databases and LLM configurations using secure enterprise API structures, where OpenAI or custom hosted models (like Llama 3 on private AWS instances) are legally restricted from training on your inputs.",
      },
      {
        q: "What is RAG, and how does it help our business?",
        a: "Retrieval-Augmented Generation (RAG) is a highly efficient architecture. Instead of expensive fine-tuning, RAG indexes your private company documents (PDFs, docs, databases) into a private Vector Database. When a user asks a question, the system queries the vector index and feeds relevant context to a secure LLM, generating precise answers.",
      },
      {
        q: "What is the typical timeframe to build a custom AI integration?",
        a: "A standard LLM-agent chatbot or RAG database search module takes 4 to 6 weeks to model, refine, and deploy into your website. More complex predictive custom models require 8 to 12 weeks depending on dataset readiness.",
      },
    ],
  },
};

// Next.js dynamic metadata generator for individual slugs
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = SERVICES_DETAIL_DATA[slug];

  if (!data) {
    return {
      title: "Service Not Found — AGS",
      description: "Explore other custom digital transformation services by AGS.",
    };
  }

  return {
    title: `${data.title} Services — AGS | Amrut Global Solutions`,
    description: `${data.subtitle}. ${data.intro.substring(0, 120)}... Pixel-perfect Next.js setups engineered to convert.`,
    openGraph: {
      title: `${data.title} Services — AGS | Amrut Global Solutions`,
      description: data.subtitle,
      url: `https://amrutglobalsolutions.com/services/${slug}`,
      siteName: "AGS",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} Services — AGS`,
      description: data.subtitle,
    },
  };
}

export default async function ServiceDetailSubPage({ params }) {
  const { slug } = await params;
  const data = SERVICES_DETAIL_DATA[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <ServiceDetailClient data={data} />
      <CTASection />
    </>
  );
}

// Generate static parameters for SSG
export async function generateStaticParams() {
  return [
    { slug: "website-development" },
    { slug: "ui-ux-design" },
    { slug: "digital-solutions" },
    { slug: "mobile-app-development" },
    { slug: "ai-solutions" },
  ];
}
