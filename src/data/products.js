export const PRODUCTS = [
  {
    id: "academix",
    slug: "academix",
    name: "Academix",
    tagline: "Crack Your AWS Exam in One Go",
    category: "Education",
    status: "Live Platform",
    badgeColor: "bg-[#8B5CF6]/20 text-[#A78BFA] border-[#8B5CF6]/40",
    description: "Equip students with job-ready skills through hands-on project work and career placement prep.",
    fullDescription: "Academix is AGS's flagship cloud training and industrial engineering platform. Built in collaboration with AWS and premier institutions, it prepares engineers with 120+ hours of live cloud development, real capstone deployments, and career placement roadmaps.",
    image: "/products/academix.png",
    logo: "/products/logo-academyx.png",
    accent: "#8B5CF6",
    directHref: "/ags-academy",
    highlights: [
      "120+ Live Practical Hours",
      "13 AWS-Aligned Modules",
      "Full Capstone Project",
      "1-on-1 Mentorship Included"
    ],
    features: [
      {
        title: "Hands-on Cloud Lab Environment",
        desc: "Live access to AWS SageMaker, S3, and Lambda instances where code is deployed to real production environments, not isolated local notebooks."
      },
      {
        title: "Curriculum Designed for Industry",
        desc: "Modules authored by practicing cloud architects covering foundational infrastructure, distributed services, CI/CD, and ML operations."
      },
      {
        title: "1-on-1 Senior Mentorship",
        desc: "Weekly personalized project reviews, architecture sanity checks, and technical interview simulations with experienced practitioners."
      },
      {
        title: "Verifiable AWS Digital Badges",
        desc: "Official completion credentials and exam preparation for AWS Certified Cloud Practitioner and Solutions Architect certifications."
      }
    ],
    specs: [
      { label: "Deployment", value: "AWS Cloud Infrastructure" },
      { label: "Duration", value: "12-24 Weeks Tracks" },
      { label: "Target Audience", value: "Engineers & Tech Students" },
      { label: "Accreditation", value: "Official AWS Partner" }
    ]
  },
  {
    id: "lumina",
    slug: "lumina",
    name: "Lumina",
    tagline: "Next-Generation Learning Management System",
    category: "Education",
    status: "Enterprise Ready",
    badgeColor: "bg-[#6366F1]/20 text-[#818CF8] border-[#6366F1]/40",
    description: "Streamline class management, lecture uploads, and student assessments on a unified LMS platform.",
    fullDescription: "Lumina is a modern cloud-native LMS platform built for universities, schools, and professional training academies. It unifies lecture delivery, interactive quizzes, automated grading, and student progress telemetry into one intuitive interface.",
    image: "/products/lumina.png",
    logo: "/products/logo-lumina.png",
    accent: "#6366F1",
    highlights: [
      "Dynamic Syllabus Builder",
      "Automated Assessment Engine",
      "Student Retention Analytics",
      "High-Concurrency Cloud Core"
    ],
    features: [
      {
        title: "Unified Course & Lecture Hub",
        desc: "Effortlessly upload video lectures, supplementary reading materials, and interactive assignments with automatic transcode optimization."
      },
      {
        title: "Proctored Testing & Instant Grading",
        desc: "Deploy customized quizzes, timed examinations, and coding tests with automated evaluation and detailed performance diagnostics."
      },
      {
        title: "Actionable Retention Telemetry",
        desc: "Identify student drop-off risks early with automated engagement indicators, assignment completion velocity, and attendance tracking."
      },
      {
        title: "Multi-Tenant Academy Architecture",
        desc: "Support separate faculties, campuses, or organizational departments within isolated sub-domains and custom brand styling."
      }
    ],
    specs: [
      { label: "Architecture", value: "Serverless AWS Lambda" },
      { label: "Streaming", value: "Adaptive Bitrate HLS" },
      { label: "Compliance", value: "SCORM / LTI 1.3 Ready" },
      { label: "Authentication", value: "OAuth2 / SSO SAML" }
    ]
  },
  {
    id: "stmet",
    slug: "stmet",
    name: "STmet",
    tagline: "Ultra-Low Latency Virtual Classrooms & Collab",
    category: "Education",
    status: "Enterprise Ready",
    badgeColor: "bg-[#7C3AED]/20 text-[#C084FC] border-[#7C3AED]/40",
    description: "Connect students and faculty with low-latency streaming and real-time collaboration tools.",
    fullDescription: "STmet is an ultra-low-latency streaming and digital classroom environment designed for high-interactivity technical education. With multiplayer digital whiteboards and synchronized coding terminals, it replicates the intimacy of an in-person workshop.",
    image: "/products/card-stmet.png",
    logo: "/products/logo-stmet.png",
    accent: "#7C3AED",
    highlights: [
      "Sub-Second Live Video Streaming",
      "Collaborative Code Sandboxes",
      "Multi-Track Breakout Rooms",
      "Bandwidth-Adaptive Streaming"
    ],
    features: [
      {
        title: "Ultra-Low Latency Streaming",
        desc: "Sub-500ms audiovisual transmission powered by WebRTC, ensuring natural conversation without awkward delays or echo."
      },
      {
        title: "Multiplayer Live Code Sandbox",
        desc: "An integrated interactive code editor allowing instructors and students to collaborate, run scripts, and debug simultaneously in real time."
      },
      {
        title: "Infinite Collaborative Canvas",
        desc: "Vector-sharp digital whiteboard with mathematical shape recognition, PDF annotation, and one-click session export."
      },
      {
        title: "Intelligent Network Adaptation",
        desc: "Dynamic bitrate adaptation guarantees voice and screen share integrity even when students connect over poor mobile networks."
      }
    ],
    specs: [
      { label: "Protocol", value: "WebRTC / WebSocket" },
      { label: "Security", value: "End-to-End Encryption" },
      { label: "Recording", value: "Automatic Cloud Archive" },
      { label: "Capacity", value: "1,000+ per Room" }
    ]
  },
  {
    id: "vidlens",
    slug: "vidlens",
    name: "VidLens",
    tagline: "Video intelligence that drives results.",
    category: "Media Intelligence",
    status: "Launching Soon",
    badgeColor: "bg-[#EC4899]/20 text-[#F472B6] border-[#EC4899]/40",
    description: "Paste any channel. See why videos win and grow. Get early access when we launch.",
    fullDescription: "VidLens is an AI-powered video analytics and intelligence platform. By reverse-engineering high-performing channels, analyzing retention decay curves, and predicting audience topic interest, VidLens gives media companies and creators an unfair competitive advantage.",
    image: "/products/vidlens.png",
    mockupImage: "/products/vidlens-hero.png",
    logo: "/products/logo-vidlens.png",
    accent: "#EC4899",
    externalUrl: "https://vidlens.in/",
    highlights: [
      "Views & Growth Tracking",
      "Competitor Benchmarking",
      "Keyword & Topic Discovery",
      "AI-Powered Packaging Insights"
    ],
    features: [
      {
        title: "Channel Growth & Virality Radar",
        desc: "Continuously tracks view acceleration, subscriber momentum, and retention velocity across thousands of tracked niche channels."
      },
      {
        title: "Side-by-Side Competitor Benchmarking",
        desc: "Deconstruct your rivals' publishing cadence, top-performing video formats, and thumbnail styles to uncover high-ROI content opportunities."
      },
      {
        title: "Keyword & Search Volume Discovery",
        desc: "Uncover underserved, high-search-intent queries before competitors produce content on them, ensuring maximum organic discovery."
      },
      {
        title: "AI Thumbnail & Title Evaluation",
        desc: "Neural analysis scoring thumbnail contrast, face framing, and title psychology to maximize Click-Through Rates (CTR)."
      }
    ],
    specs: [
      { label: "Data Source", value: "YouTube Data API v3" },
      { label: "AI Models", value: "Custom LLM & Vision Classifiers" },
      { label: "Telemetry", value: "Hourly Ingestion" },
      { label: "Access", value: "Early Access Waitlist" }
    ]
  },
  {
    id: "lynkbeats",
    slug: "lynkbeats",
    name: "LynkBeats",
    tagline: "Editorial Intelligence Platform for Modern Newsrooms",
    category: "Media Intelligence",
    status: "Launching Soon",
    badgeColor: "bg-[#10B981]/20 text-[#34D399] border-[#10B981]/40",
    description: "See what your readers are reading, live across every story. Be first in line when we open the doors.",
    fullDescription: "LynkBeats is a real-time audience telemetry and editorial intelligence platform crafted specifically for digital newsrooms, publishers, and media agencies. It displays real-time reader counts, detects coverage gaps against competing publications, and flags breaking story spikes.",
    image: "/products/lynkbeats.png",
    mockupImage: "/products/lynkbeats-hero.png",
    logo: "/products/logo-lynkbeats.png",
    accent: "#10B981",
    externalUrl: "#",
    highlights: [
      "Real-Time Reader Counts",
      "Top-Performing Story Alerts",
      "Rival Coverage Gaps",
      "Built for News Portals"
    ],
    features: [
      {
        title: "Live Active Reader Counts",
        desc: "Monitor second-by-second reader distribution across every article, category, author, and geographic region with zero dashboard delay."
      },
      {
        title: "Breaking Trend & Surge Detection",
        desc: "Real-time alerts notify editorial staff when a topic begins gaining exponential traction on Google Discover or social networks."
      },
      {
        title: "Competitor Story Gap Monitoring",
        desc: "Automated competitive scanning identifies breaking developments published by rival portals that your newsroom hasn't covered yet."
      },
      {
        title: "Sub-5KB Lightweight Script",
        desc: "Engineered for maximum speed: zero impact on Core Web Vitals (LCP, INP, CLS) and fully compliant with privacy standards."
      }
    ],
    specs: [
      { label: "Tracker Footprint", value: "< 4.8 KB Gzipped" },
      { label: "Data Pipeline", value: "Real-Time WebSocket Stream" },
      { label: "Integrations", value: "WordPress, Ghost, Custom CMS" },
      { label: "Compliance", value: "GDPR & DPDP Privacy-First" }
    ]
  },
  {
    id: "newsbuddies",
    slug: "newsbuddies",
    name: "Newsbuddies",
    tagline: "Audience Growth & Automated Headline Optimization",
    category: "Media Intelligence",
    status: "Active Platform",
    badgeColor: "bg-[#F59E0B]/20 text-[#FBBF24] border-[#F59E0B]/40",
    description: "Optimize headlines, regional metadata, and search visibility to drive organic news traffic across syndication networks.",
    fullDescription: "Newsbuddies is a smart editorial distribution tool that automates headline variant testing, regional schema injection, and syndication workflows for publishers. It boosts search presence on Google Discover and top news aggregators.",
    image: "/products/card-newsbuddies.png",
    logo: "/products/newsbuddies.png",
    accent: "#F59E0B",
    externalUrl: "#",
    highlights: [
      "Automated Headline A/B Testing",
      "Regional Geo-Metadata Tagging",
      "Google Discover Optimization",
      "Automated Syndication Feeds"
    ],
    features: [
      {
        title: "Multi-Arm Bandit Headline Testing",
        desc: "Automatically tests multiple headline and thumbnail pairings on initial traffic cohorts, seamlessly locking in the highest CTR variant."
      },
      {
        title: "Google Discover Tuning",
        desc: "Algorithmic recommendations optimized for image aspect ratios, freshness cues, and topical entity authority."
      },
      {
        title: "Instant JSON-LD News Schema",
        desc: "Automatically emits structured metadata for NewsArticle, Author, and FactCheck schemas, speeding Googlebot indexing."
      },
      {
        title: "Multi-Platform Syndication",
        desc: "Deliver formatted content to Apple News, SmartNews, and partner networks simultaneously via automated webhooks."
      }
    ],
    specs: [
      { label: "Testing Engine", value: "Bayesian Multi-Arm Bandit" },
      { label: "Schema Support", value: "Full Schema.org NewsArticle" },
      { label: "Crawl Speed", value: "< 150ms Response Time" },
      { label: "CMS Plugins", value: "Native WordPress & Webflow" }
    ]
  },
  {
    id: "nexus",
    slug: "nexus",
    name: "Nexus",
    tagline: "Unified Enterprise HR & Workforce Automation",
    category: "Operations",
    status: "Enterprise Ready",
    badgeColor: "bg-[#3B82F6]/20 text-[#60A5FA] border-[#3B82F6]/40",
    description: "Automate employee onboarding, leave tracking, attendance, and payroll on one central platform.",
    fullDescription: "Nexus is an enterprise-grade HRMS and operations suite designed for technology businesses and agencies. It replaces disorganized spreadsheets with streamlined hiring workflows, biometric attendance, tax compliance, and automated payroll.",
    image: "/products/nexus.png",
    logo: "/products/logo-nexus.png",
    accent: "#3B82F6",
    highlights: [
      "Zero-Paper Onboarding",
      "Automated Shift & Leave Tracking",
      "Statutory Payroll Engine",
      "Enterprise Compliance Audit"
    ],
    features: [
      {
        title: "Frictionless Employee Onboarding",
        desc: "Digital contracts, automated credential verification, document collection, and role-based provisioning completed in minutes."
      },
      {
        title: "Attendance & Geo-Fenced Tracking",
        desc: "Flexible check-in options for remote, hybrid, and in-office teams with IP verification, biometric sync, and overtime audits."
      },
      {
        title: "One-Click Statutory Payroll",
        desc: "Automated calculations for tax deductions, provident funds, bonuses, and reimbursements with immediate payslip generation."
      },
      {
        title: "Granular Role-Based Permissions",
        desc: "Ensure sensitive employee financial and identity data remains confidential with enterprise role-based access control."
      }
    ],
    specs: [
      { label: "Security", value: "AES-256 Cloud Encryption" },
      { label: "Compliance", value: "Statutory Tax & Labor Laws" },
      { label: "Integrations", value: "Slack, MS Teams, Google Workspace" },
      { label: "Scalability", value: "10 to 10,000+ Employees" }
    ]
  }
];

export const PRODUCT_CATEGORIES = ["All", "Education", "Media Intelligence", "Operations"];

export function getProductBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return PRODUCTS.find(
    (p) => p.slug === normalized || p.id === normalized
  );
}
