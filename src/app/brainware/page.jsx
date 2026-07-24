"use client"; import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AWSTraining from "@/components/AWSTraining";

/* ───────────────── NAVBAR ───────────────── */
function Navbar() {
  return (
    <div className="w-full bg-[#05070D]/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-[92px] sm:w-[104px] h-[40px]">
            <Image src="/ags_logo.png" alt="AGS logo" fill className="object-contain" priority />
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          {["Curriculum","Outcomes","Mentors","Pricing","FAQ"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white text-[13px] font-medium transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <a href="#pricing" className="bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-4 py-2 sm:px-6 sm:py-2.5 text-[11px] sm:text-[13px] font-bold transition-all shadow-[0_0_15px_rgba(123,92,255,0.3)]">
          Reserve Your Seat
        </a>
      </nav>
    </div>
  );
} /* ───────────────── HERO SECTION ───────────────── */
function Hero() {
  const features = [
    "120+ Practical Training Hours",
    "13 Industry-Focused Modules",
    "AWS Cloud + Python + ML",
    "Real Capstone Project",
    "Industry Mentorship",
    "Portfolio & Career Ready"
  ];
  
  const cardFeatures = [
    "120+ Hours of Live Training",
    "13 AWS-Integrated Modules",
    "Real Capstone AI Project",
    "1-on-1 Mentorship Included",
    "Portfolio-Ready Deliverables",
    "Program Completion Certificate"
  ];

  return (
    <section className="relative pt-8 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-[#05070D]">
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image src="/Academy/hero1.png" alt="Hero background" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070D] via-[#05070D]/80 via-[20%] to-transparent to-[45%]" />
      </div>
      <div className="max-w-[1536px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-4 md:mt-16">
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="text-[11px] font-medium tracking-wide mb-4">
              <span className="text-[#9D7AFF] font-bold">AGS Academy</span> <span className="text-white/40 px-1">•</span> <span className="text-white/60 uppercase">AWS & Google Cloud Accredited Industrial Training</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Launch Your Tech Career in <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#9795FF_0%,#D4B3FF_100%)]">AI, Full Stack, or Design.</span>
            </h1>
            <p className="text-white/60 text-[14px] md:text-[15px] mb-8 max-w-xl leading-relaxed">
              One industrial training academy, three job-ready career tracks AI & Machine Learning, Full Stack Web Development, and UI/UX & Product Design built in collaboration with Brainware University. Real projects, real deployment, real portfolios.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {features.map((item, idx) => (
                <div key={idx} className="bg-[#12141D] border border-white/5 px-4 py-3 text-center flex items-center justify-center">
                  <span className="text-white/40 text-[13px] font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-end gap-3 mb-4">
              <span className="text-4xl font-black text-white">₹4,000</span>
              <span className="text-lg text-white/40 mb-1 line-through decoration-white/40">₹12,000</span>
            </div>
            <a href="#pricing" className="inline-block bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-3.5 text-[14px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.4)] mb-4 w-full text-center sm:w-auto">
              Reserve Your Seat Now — Batch Filling Fast
            </a>
            <div className="text-white/50 text-[11px] flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-white text-[10px]">★ ★ ★ ★ ★</span> <span className="text-white/80">4.9</span> • 200+ students trained
            </div>
          </div>
          
          <div className="lg:col-span-5 xl:col-span-5 relative mt-8 lg:mt-0">
            <div className="bg-[#12131C]/90 backdrop-blur-2xl border border-white/5 p-8 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mt-10 lg:mt-[100px] rounded-sm">
              <h3 className="text-white font-bold text-xl mb-2">Seat Registration</h3>
              <p className="text-white/50 text-[12px] mb-6">Next batch starts soon. Secure your spot.</p>
              <div className="flex gap-3 mb-8 justify-between">
                {[
                  { label: "DAYS", value: "03" },
                  { label: "HOURS", value: "14" },
                  { label: "MINS", value: "22" },
                  { label: "SECS", value: "01" }
                ].map((time, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center bg-[#0C0E14] w-[72px] h-[72px] border border-white/5 shadow-inner rounded-sm">
                    <div className="text-[22px] leading-none font-black text-white mb-1.5">{time.value}</div>
                    <div className="text-[9px] text-white/50 tracking-wider font-semibold">{time.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 mb-8">
                {cardFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-white text-[12px] font-bold">✓</span>
                    <span className="text-white/70 text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#pricing" className="block w-full bg-[#7B5CFF] hover:bg-[#6a4cef] text-center text-white py-3 text-[14px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.3)] rounded-sm">
                Reserve Your Seat →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} /* ───────────────── STATS ───────────────── */
function Stats() { const statItems = [ { value:"120+", label:"Practical Training Hours" }, { value:"13", label:"Industry Modules" }, { value:"200+", label:"Students Trained" }, { value:"100%", label:"Project-Based Learning" } ]; return ( <section className="py-24 bg-[#0A0D18]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center"> <h4 className="text-white/40 text-[14px] font-bold tracking-[0.2em] uppercase mb-12">WHY 200+ STUDENTS CHOSE AGS ACADEMY</h4> <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"> {statItems.map((stat, idx) => ( <div key={idx} className="flex flex-col items-center justify-center text-center"> <div className="text-4xl md:text-5xl font-black text-[#7B5CFF] mb-2">{stat.value}</div> <div className="text-[12px] md:text-[13px] text-white/60 font-bold uppercase tracking-widest">{stat.label}</div> </div> ))} </div> </div> </section> );
} /* ───────────────── THE OPPORTUNITY ───────────────── */
function Opportunity() { return ( <section className="py-24 bg-[#05070D]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="text-center mb-16 w-full mx-auto"> <h4 className="text-[#7B5CFF] text-[10px] font-bold tracking-widest uppercase mb-4">WHY LEARN AI NOW</h4> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:whitespace-nowrap"> The AI Opportunity Is Growing. <span className="text-[#9D7AFF]">The Competition Is Too.</span> </h2> <p className="text-white/50 text-[14px] leading-relaxed max-w-2xl mx-auto"> Artificial Intelligence is transforming industries and companies are actively looking for professionals who can build real AI solutions. The challenge isn't finding opportunities. It's standing out from the competition. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> <div> <h3 className="text-[#7B5CFF] font-bold text-[15px] mb-4">The Problem</h3> <p className="text-white/60 text-[13px] leading-relaxed"> Every day, thousands of candidates apply for AI and Machine Learning roles. Many have completed online courses and earned certificates, but very few can demonstrate real projects or hands-on cloud experience. Employers don't hire certificates — they hire proof of skills. </p> </div> <div> <h3 className="text-[#7B5CFF] font-bold text-[15px] mb-4">Our Bridge</h3> <p className="text-white/60 text-[13px] leading-relaxed"> The professionals getting noticed are the ones who can showcase deployed applications, GitHub repositories, and real-world AI projects. In just 12 weeks, you'll build practical AI solutions, gain hands-on AWS experience, and create a portfolio that helps you stand out in interviews. </p> </div> </div> </div> </section> );
} /* ───────────────── METHODOLOGY ───────────────── */
function Methodology() { return ( <section className="py-24 bg-[#0A0D18]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="text-center mb-16 w-full mx-auto"> <h4 className="text-[#7B5CFF] text-[10px] font-bold tracking-widest uppercase mb-4">WHY AGS ACADEMY</h4> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:whitespace-nowrap"> We Don't Just Teach AI. <span className="text-[#9D7AFF]">We Teach You to Build With It.</span> </h2> <p className="text-white/50 text-[14px] leading-relaxed max-w-2xl mx-auto"> Anyone can watch AI tutorials. Very few actually build real AI applications. At AGS Academy, every module ends with a hands-on project not just a quiz. </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> <div className="space-y-6"> <div className="bg-[#161029] border border-white/5 p-8 h-40 flex flex-col justify-center"> <h4 className="text-white font-bold text-[14px] mb-2">Live AI Projects</h4> <p className="text-white/40 text-[12px] leading-relaxed">Deployed on AWS, not local notebooks that never see production.</p> </div> <div className="bg-[#161029] border border-white/5 p-8 h-40 flex flex-col justify-center"> <h4 className="text-white font-bold text-[14px] mb-2">Production-Ready Capstone</h4> <p className="text-white/40 text-[12px] leading-relaxed">One complete end-to-end AI application from data to deployment.</p> </div> </div> <div className="space-y-6"> <div className="bg-[#161029] border border-white/5 p-8 h-40 flex flex-col justify-center"> <h4 className="text-white font-bold text-[14px] mb-2">GitHub Portfolio</h4> <p className="text-white/40 text-[12px] leading-relaxed">A professional collection of code recruiters can actually open.</p> </div> <div className="bg-[#161029] border border-white/5 p-8 h-40 flex flex-col justify-center"> <h4 className="text-white font-bold text-[14px] mb-2">Industry Tools</h4> <p className="text-white/40 text-[12px] leading-relaxed">Hands-on experience with the exact stack companies use daily.</p> </div> </div> <div className="space-y-6"> <div className="bg-[#161029] border border-white/5 p-8 h-40 flex flex-col justify-center"> <h4 className="text-white font-bold text-[14px] mb-2">Most courses give a certificate.</h4> <p className="text-white/40 text-[12px] leading-relaxed">We give you proof of your skills at just ₹4,000.</p> </div> <div className="bg-[#161029] border border-white/5 p-8 h-40 flex flex-col justify-center"> <h4 className="text-white font-bold text-[14px] mb-2">Interview Confidence</h4> <p className="text-white/40 text-[12px] leading-relaxed">The ability to demonstrate your work, not just describe it.</p> </div> </div> </div> </div> </section> );
} /* ───────────────── TECH SKILLS ───────────────── */
function TechSkills() { const techSkills = ["Python Programming","NumPy & Pandas","Machine Learning","Deep Learning","NLP","Computer Vision"]; const industryTools = ["Amazon Web Services","Amazon SageMaker","Amazon S3","AWS Lambda","API Gateway","MLOps & CI/CD","Model Monitoring","Git & GitHub"]; return ( <section className="py-24 bg-[#05070D]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="text-center mb-16 w-full mx-auto"> <h4 className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-4">WHAT THE INDUSTRY NEEDS</h4> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:whitespace-nowrap"> Companies Don't Hire Theory. <span className="text-[#9D7AFF]">They Hire Proof.</span> </h2> <p className="text-white/50 text-[14px] leading-relaxed max-w-2xl mx-auto whitespace-normal"> Today's employers expect more than academic knowledge. With AGS Academy, you'll gain practical experience in the technologies companies use every day. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-16"> <div> <h4 className="text-[#7B5CFF] text-[11px] font-bold mb-6">Technical Skills You'll Build</h4> <div className="flex flex-wrap gap-3"> {techSkills.map((skill, idx) => ( <div key={idx} className="bg-white/5 border border-white/10 text-white/70 text-[11px] px-4 py-2"> {skill} </div> ))} </div> </div> <div> <h4 className="text-[#7B5CFF] text-[11px] font-bold mb-6">Industry Tools You'll Work With</h4> <div className="flex flex-wrap gap-3"> {industryTools.map((tool, idx) => ( <div key={idx} className="bg-white/5 border border-white/10 text-white/70 text-[11px] px-4 py-2"> {tool} </div> ))} </div> </div> </div> </div> </section> );
} /* ───────────────── CURRICULUM GRID ───────────────── */
/* ───────────────── CURRICULUM GRID ───────────────── */
function Curriculum() {
  const tags = ["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "MLOps", "AWS Cloud"];
  
  const modules = [
    {
      num: "00",
      title: "Orientation to AI/ML & AWS Setup",
      topics: ["AI/ML landscape & career paths", "AWS account & SageMaker setup", "Python & notebook environment", "AI-assisted coding tools"],
      deliverable: "AWS environment configured and first notebook shipped."
    },
    {
      num: "01",
      title: "Data Storage & Management",
      topics: ["S3, RDS & data lakes", "Data versioning", "Schema design for ML", "Access & security basics"],
      deliverable: "Structured data pipeline connected to cloud storage."
    },
    {
      num: "02",
      title: "Data Cleaning & Preprocessing",
      topics: ["Handling missing data", "Outlier detection", "Feature scaling & encoding", "Data quality checks"],
      deliverable: "Cleaned, production-ready dataset."
    },
    {
      num: "03",
      title: "Exploratory Data Analysis",
      topics: ["Visualizing distributions", "Correlation analysis", "Feature importance tracking", "Statistical testing"],
      deliverable: "Comprehensive EDA report with actionable insights."
    },
    {
      num: "04",
      title: "Classical Machine Learning on AWS",
      topics: ["Regression & classification", "Decision trees & ensembles", "SageMaker built-in algorithms", "Cross-validation"],
      deliverable: "Trained & benchmarked ML model on AWS."
    },
    {
      num: "05",
      title: "Model Evaluation & Optimization",
      topics: ["Precision, recall, F1, ROC-AUC", "Hyperparameter tuning", "Bias-variance tradeoff", "A/B testing basics"],
      deliverable: "Optimized model with documented metrics."
    },
    {
      num: "06",
      title: "Feature Engineering & Pipelines",
      topics: ["Feature stores", "Automated pipelines", "Data leakage prevention", "Reusable transforms"],
      deliverable: "Automated, reusable feature pipeline."
    },
    {
      num: "07",
      title: "Deep Learning on AWS",
      topics: ["Neural network fundamentals", "CNNs & RNNs", "SageMaker training jobs", "GPU-accelerated training"],
      deliverable: "Deep learning model trained on AWS GPUs."
    },
    {
      num: "08",
      title: "Natural Language Processing",
      topics: ["Text preprocessing & embeddings", "Transformers & LLM basics", "Sentiment & classification tasks", "Prompt engineering"],
      deliverable: "NLP model integrated into an application."
    },
    {
      num: "09",
      title: "Computer Vision Applications",
      topics: ["Image classification", "Object detection", "Transfer learning", "Real-time inference"],
      deliverable: "CV model deployed for image analysis."
    },
    {
      num: "10",
      title: "Deployment & Orchestration",
      topics: ["SageMaker endpoints", "Containerizing models", "CI/CD for ML", "API integration"],
      deliverable: "Model deployed as a live, callable endpoint."
    },
    {
      num: "11",
      title: "MLOps & Monitoring",
      topics: ["Model versioning & registry", "Drift detection", "Logging & alerting", "Cost optimization on AWS"],
      deliverable: "Monitored production ML pipeline."
    },
    {
      num: "12",
      title: "Capstone — End-to-End AI Deployment 🏁",
      topics: ["Own problem statement", "Full pipeline: data → model → deployment", "Stakeholder-style presentation", "Mock technical interview"],
      deliverable: "Deployed, end-to-end AI system + professional portfolio."
    }
  ];

  const fullStackTags = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "AI-Assisted Coding"];

  const fullStackModules = [
    {
      num: "00",
      title: "Developer Environment & AI-Augmented Workflow",
      topics: ["VS Code & terminal fluency", "Git & GitHub, PR workflows", "AI-assisted coding with Copilot/Claude/Cursor", "When not to trust AI-generated code"],
      deliverable: "Personal portfolio repository initialized with proper Git hygiene."
    },
    {
      num: "01",
      title: "Web Fundamentals",
      topics: ["HTTP/HTTPS, DNS, request lifecycle", "Semantic HTML5 & accessibility", "Modern CSS: Flexbox, Grid, Tailwind", "Core Web Vitals & performance"],
      deliverable: "Fully responsive, accessible multi-page site scoring 90+ on Lighthouse."
    },
    {
      num: "02",
      title: "JavaScript & TypeScript",
      topics: ["JS fundamentals & ES2024+", "Async programming & DOM", "Strict TypeScript", "Vite, ESLint/Biome, Prettier"],
      deliverable: "Interactive browser app (Expense Tracker) built in strict TypeScript."
    },
    {
      num: "03",
      title: "React Development",
      topics: ["Components, JSX, props, state", "Hooks & custom hooks", "Design systems & TanStack Query", "Testing & accessibility"],
      deliverable: "Component-driven React application with routing and state management."
    },
    {
      num: "04",
      title: "Backend with Node.js & APIs",
      topics: ["Node.js, Express/Fastify", "REST APIs, OpenAPI/Swagger", "JWT & OAuth authentication", "Rate limiting & pagination"],
      deliverable: "Documented and secured REST API with authentication and automated tests."
    },
    {
      num: "05",
      title: "Databases & Data Modeling",
      topics: ["PostgreSQL & schema design", "Prisma & Drizzle ORM", "MongoDB, Redis, vector databases", "GDPR & DPDP-aware design"],
      deliverable: "Normalized database integrated into backend APIs."
    },
    {
      num: "06",
      title: "Full Stack Integration with Next.js",
      topics: ["App Router, layouts, streaming", "Server components & server actions", "SSR, SSG, ISR", "End-to-end type safety"],
      deliverable: "Production-ready full stack application deployed to Vercel."
    },
    {
      num: "07",
      title: "AI-Powered Features",
      topics: ["LLM APIs (Anthropic/OpenAI)", "RAG & embeddings, pgvector", "AI chat interfaces & tool calling", "Responsible AI & prompt injection"],
      deliverable: "AI-powered feature integrated into the full stack application."
    },
    {
      num: "08",
      title: "DevOps, Cloud & Security",
      topics: ["Docker & GitHub Actions", "AWS, Vercel, Cloudflare Workers", "OWASP Top 10 & security headers", "Monitoring with Sentry"],
      deliverable: "Containerized application with CI/CD pipeline and production monitoring."
    },
    {
      num: "09",
      title: "Capstone — Portfolio & Career Sprint 🏁",
      topics: ["Production-grade full stack app", "System design & architecture reviews", "Resume, GitHub & portfolio polish", "Technical interview preparation"],
      deliverable: "Deployed capstone project, professional portfolio, and mock interview."
    }
  ];

  const designTags = ["UX Research", "UI Design", "Conversational UX", "Agentic UX", "Generative UI", "Figma AI"];

  const designModules = [
    {
      num: "01",
      title: "Modern UX Foundations",
      topics: ["UX fundamentals, design thinking", "Double Diamond & JTBD", "User research & personas", "Information architecture & usability"],
      deliverable: "User research, persona and journey map for a redesigned app."
    },
    {
      num: "02",
      title: "AI Product Thinking",
      topics: ["Understanding AI products vs automation", "Generative AI & LLMs for designers", "AI opportunity identification", "When to use — and not use — AI"],
      deliverable: "Evaluation of an existing product with proposed AI integrations."
    },
    {
      num: "03",
      title: "Conversational UX Design",
      topics: ["Chat interfaces & prompt-based UX", "AI personalities & multi-turn flows", "Context retention & error recovery"],
      deliverable: "Conversational flow designed for an AI banking assistant."
    },
    {
      num: "04",
      title: "DUI — Delegative UI",
      topics: ["Goal-oriented interfaces", "Task delegation models", "Autonomous workflows & human oversight"],
      deliverable: "Goal-based productivity system with delegation flows."
    },
    {
      num: "05",
      title: "Agentic UX Design (AUI)",
      topics: ["AI agents & agent ecosystems", "Multi-agent collaboration", "Human-in-the-loop systems"],
      deliverable: "AI project manager copilot with approval workflows."
    },
    {
      num: "06",
      title: "Generative UI (GenUI)",
      topics: ["Dynamic, context-aware interfaces", "Personalized experiences", "Real-time interface generation"],
      deliverable: "Adaptive e-commerce experience with dynamic screens."
    },
    {
      num: "07",
      title: "Explainable AI UX (XAI)",
      topics: ["AI transparency & confidence indicators", "Explainability patterns", "Trust-building design"],
      deliverable: "AI healthcare dashboard with decision breakdowns."
    },
    {
      num: "08",
      title: "Zero UI & Ambient Experience Design",
      topics: ["Voice UX & ambient computing", "Smart environments", "Gesture interfaces"],
      deliverable: "Hands-free workspace system with voice journey mapping."
    },
    {
      num: "09",
      title: "Neuro-Inclusive Design",
      topics: ["Cognitive diversity", "ADHD-friendly & autism-aware interfaces", "Dyslexia design principles"],
      deliverable: "Neuro-inclusive learning platform with accessibility redesign."
    },
    {
      num: "10",
      title: "Spatial UX (AR/VR/XR)",
      topics: ["Spatial computing & AR interfaces", "VR experiences", "Mixed reality design"],
      deliverable: "Virtual workspace design with XR prototyping."
    },
    {
      num: "11",
      title: "AI Systems & Workflow Design",
      topics: ["AI architecture for designers", "LLM & RAG fundamentals", "Multi-agent workflow design"],
      deliverable: "Enterprise AI workflow map for customer support and recruitment."
    },
    {
      num: "12",
      title: "AI Evaluation & Metrics",
      topics: ["Precision, recall, hallucination rate", "UX metrics: adoption, trust, task success"],
      deliverable: "AI UX audit report for an existing product."
    },
    {
      num: "13",
      title: "AI Tools for Designers",
      topics: ["Figma AI, Framer AI, Adobe Firefly", "ChatGPT, Claude & AI research agents", "Runway & Midjourney for visuals"],
      deliverable: "A complete workflow built end-to-end using AI tools."
    },
    {
      num: "14",
      title: "Ethics, Privacy & Responsible AI",
      topics: ["AI ethics & bias detection", "Privacy-first design", "Regulatory landscape"],
      deliverable: "Ethical review of an AI product."
    },
    {
      num: "15",
      title: "Capstone — Portfolio & Career Building 🏁",
      topics: ["Writing AI UX case studies", "LinkedIn branding & freelancing strategy", "AI UX interview preparation"],
      deliverable: "Portfolio website, LinkedIn profile and polished case-study resume."
    }
  ];
  
  return (
    <section id="curriculum" className="py-24 bg-[#05070D]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h4 className="text-[#7B5CFF] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">FULL CURRICULUM</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Pick Your Track.<br />
            Same Rigor, <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#9795FF_0%,#D4B3FF_100%)]">Different Modules.</span>
          </h2>
          <p className="text-white/60 text-[16px] leading-relaxed">
            Every track ends in a real, deployed capstone project and a portfolio that gets you hired.<br className="hidden md:block"/>
            Only the curriculum below changes by track — everything else about the program experience is the same.
          </p>
        </div>

        {/* AI Track */}
        <div className="mb-8 border-b border-white/10 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-[#9D7AFF] rounded-full"></div>
            <h3 className="text-xl md:text-2xl font-bold text-white">AI & Machine Learning</h3>
          </div>
          <div className="text-white/40 text-[12px] md:text-[14px]">
            12 Weeks • 13 Modules
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {tags.map((tag, idx) => (
            <div key={idx} className="border border-white/10 text-white/50 text-[12px] px-4 py-2 rounded-sm bg-[#0C0E14]">
              {tag}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-[#0C0E14] border border-white/5 p-6 md:p-8 rounded-sm hover:border-white/10 transition-colors flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#7B5CFF] flex items-center justify-center text-white font-bold text-[15px]">
                  {mod.num}
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-[16px] md:text-[18px] mb-3">
                  {mod.title}
                </h4>
                <div className="flex flex-wrap items-center text-white/50 text-[12px] md:text-[13px] gap-3 mb-5">
                  {mod.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-3">
                      <span>{topic}</span>
                      {tIdx < mod.topics.length - 1 && <span className="text-[#7B5CFF] text-[16px] leading-none">›</span>}
                    </div>
                  ))}
                </div>
                <div className="inline-block border border-[#7B5CFF]/30 bg-[#7B5CFF]/5 text-[#A58FFF] text-[11px] md:text-[12px] px-4 py-2 rounded-full">
                  Deliverable: {mod.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Stack Track */}
        <div className="mb-8 mt-24 border-b border-white/10 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-[#38BDF8] rounded-full"></div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Full Stack Web Development</h3>
          </div>
          <div className="text-white/40 text-[12px] md:text-[14px]">
            24 Weeks • 10 Modules
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {fullStackTags.map((tag, idx) => (
            <div key={idx} className="border border-white/10 text-white/50 text-[12px] px-4 py-2 rounded-sm bg-[#0C0E14]">
              {tag}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {fullStackModules.map((mod, idx) => (
            <div key={idx} className="bg-[#0C0E14] border border-white/5 p-6 md:p-8 rounded-sm hover:border-white/10 transition-colors flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#7B5CFF] flex items-center justify-center text-white font-bold text-[15px]">
                  {mod.num}
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-[16px] md:text-[18px] mb-3">
                  {mod.title}
                </h4>
                <div className="flex flex-wrap items-center text-white/50 text-[12px] md:text-[13px] gap-3 mb-5">
                  {mod.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-3">
                      <span>{topic}</span>
                      {tIdx < mod.topics.length - 1 && <span className="text-[#7B5CFF] text-[16px] leading-none">›</span>}
                    </div>
                  ))}
                </div>
                <div className="inline-block border border-[#7B5CFF]/30 bg-[#7B5CFF]/5 text-[#A58FFF] text-[11px] md:text-[12px] px-4 py-2 rounded-full">
                  Deliverable: {mod.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* UI/UX Track */}
        <div className="mb-8 mt-24 border-b border-white/10 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-[#FF66A1] rounded-full"></div>
            <h3 className="text-xl md:text-2xl font-bold text-white">UI/UX & Product Design</h3>
          </div>
          <div className="text-white/40 text-[12px] md:text-[14px]">
            15 Weeks • 15 Modules
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {designTags.map((tag, idx) => (
            <div key={idx} className="border border-white/10 text-white/50 text-[12px] px-4 py-2 rounded-sm bg-[#0C0E14]">
              {tag}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {designModules.map((mod, idx) => (
            <div key={idx} className="bg-[#0C0E14] border border-white/5 p-6 md:p-8 rounded-sm hover:border-white/10 transition-colors flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#7B5CFF] flex items-center justify-center text-white font-bold text-[15px]">
                  {mod.num}
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-[16px] md:text-[18px] mb-3">
                  {mod.title}
                </h4>
                <div className="flex flex-wrap items-center text-white/50 text-[12px] md:text-[13px] gap-3 mb-5">
                  {mod.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-3">
                      <span>{topic}</span>
                      {tIdx < mod.topics.length - 1 && <span className="text-[#7B5CFF] text-[16px] leading-none">›</span>}
                    </div>
                  ))}
                </div>
                <div className="inline-block border border-[#7B5CFF]/30 bg-[#7B5CFF]/5 text-[#A58FFF] text-[11px] md:text-[12px] px-4 py-2 rounded-full">
                  Deliverable: {mod.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
} /* ───────────────── TARGET AUDIENCE ───────────────── */
function TargetAudience() { const audiences = [ { title:"B.Tech & Engineering Students", desc:"Your college taught you concepts. We teach you what companies actually test in interviews." }, { title:"Aspiring AI & ML Engineers", desc:"A structured, proven path from zero to job-ready." }, { title:"Data Science Enthusiasts", desc:"Every module produces a deliverable you can add to your portfolio." }, { title:"Career Changers", desc:"We help you build proof, even if your background is non-technical." } ]; return ( <section className="py-24 bg-[#05070D]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="mb-16"> <h4 className="text-[#7B5CFF] text-[11px] font-bold tracking-widest uppercase mb-4">WHO IT'S FOR</h4> <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Built for <span className="text-[#9D7AFF]">Future AI Professionals</span></h2> <p className="text-white/60 text-[16px] max-w-2xl">Whether you're a student, career changer, or enthusiast this program meets you where you are.</p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {audiences.map((item, idx) => ( <div key={idx} className="bg-[#161029] border border-white/5 p-6 md:p-8 hover:border-white/10 transition-colors flex flex-col"> <div className="w-10 h-10 rounded-xl bg-[#12162A] mb-6"></div> <h3 className="text-white font-bold text-[16px] mb-4 leading-snug">{item.title}</h3> <p className="text-white/50 text-[16px] leading-relaxed">{item.desc}</p> </div> ))} </div> </div> </section> );
} /* ───────────────── WHAT YOU'LL HAVE ───────────────── */
function WhatYoullHave() {
  const items = [
    {
      title: "Deployed AI Application",
      desc: "Launch a live machine learning model on AWS — something real employers can see and interact with.",
    },
    {
      title: "Portfolio Projects",
      desc: "Multiple practical projects across NLP, Computer Vision, and Machine Learning — all ready to share.",
    },
    {
      title: "Industry Capstone",
      desc: "A complete end-to-end production-ready AI solution you built from scratch.",
    },
    {
      title: "AWS Experience",
      desc: "Hands-on experience with AWS cloud infrastructure and AI services that employers pay a premium for.",
    },
    {
      title: "GitHub & Figma Repository",
      desc: "A maintained collection of projects, notebooks, and deployments — your public proof of skill.",
    },
    {
      title: "Career Confidence",
      desc: "Walk into interviews with demonstrable proof of your skills — not just a course certificate.",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Text & List */}
          <div>
            <div className="mb-12">
              <h4 className="text-[#9D7AFF] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                WHAT YOU'LL HAVE
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-[1.15] tracking-tight">
                What You'll Have on Day 85
                <br />
                That You <span className="text-[#9D7AFF]">Don't Have Today</span>
              </h2>
            </div>
            
            <div className="space-y-0">
              {items.map((item, idx) => (
                <div key={idx} className={`py-5 flex gap-4 ${idx !== items.length - 1 ? 'border-b border-white/5' : ''}`}>
                  <div className="mt-2 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9D7AFF]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[14px] md:text-[15px] mb-1.5">{item.title}</h3>
                    <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certificate Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[650px] flex items-center justify-center lg:pl-10">
            <div className="relative w-full h-full scale-[1.05] md:scale-100">
              <Image
                src="/Academy/certificate.png"
                alt="AGS Academy Certificate"
                fill
                className="object-contain lg:object-right"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
/* ───────────────── INDUSTRY PROGRAMS ───────────────── */
function IndustryPrograms() {
  const programs = [
    {
      title: "AI/ML Engineer",
      image: "/Academy/img2.png",
      topics: "Artificial Intelligence • Machine Learning • Data Science",
      desc: "Learn Python, Machine Learning, Deep Learning, Generative AI, NLP, Computer Vision, and MLOps by building intelligent applications using real datasets and modern AI tools."
    },
    {
      title: "Advanced UI/UX Design",
      image: "/Academy/img3.png",
      topics: "UX Research • Prototyping • Design Systems",
      desc: "Create intuitive digital experiences through user research, wireframing, visual design, prototyping, usability testing, and modern design systems. Build a professional portfolio with real web and mobile application projects."
    },
    {
      title: "Full Stack Web Development",
      image: "/Academy/img1.png",
      topics: "React • Node.js • MongoDB • Cloud Deployment",
      desc: "Master end-to-end web development using HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, APIs, Git, and cloud deployment. Build scalable, production-ready applications using industry best practices."
    }
  ];

  return (
    <section className="py-24 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h4 className="text-[#7B5CFF] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            YOUR INSTRUCTORS
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 tracking-tight">
            Explore Our <span className="bg-[linear-gradient(90deg,#7B5CFF_0%,#BE9FFF_100%)] bg-clip-text text-transparent">Industry-Focused</span> Programs
          </h2>
          <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            Whether you aspire to build intelligent AI solutions, craft exceptional user experiences, or develop scalable web applications, our industry-focused programs equip you with the practical skills, real-world projects, and expert mentorship needed to launch a successful tech career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-[#12111A] flex flex-col h-full overflow-hidden border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-full relative">
                <img src={prog.image} alt={prog.title} className="w-full h-auto object-cover" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h4 className="text-white font-bold text-[17px] md:text-[19px] mb-2">{prog.title}</h4>
                <div className="text-[#9D7AFF] text-[12px] md:text-[13px] font-semibold mb-4 leading-relaxed">
                  {prog.topics}
                </div>
                <p className="text-white/50 text-[13px] md:text-sm leading-relaxed mt-auto">
                  {prog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} /* ───────────────── BONUSES ───────────────── */
function Bonuses() { const bonuses = [ { label:"LIBRARY", title:"AI & ML Resource Library", desc:"Curated templates, datasets, notebooks, and project starter kits." }, { label:"CAREER", title:"Career Guidance Sessions", desc:"Interview prep, resume review, and project presentation coaching." }, { label:"REVIEW", title:"Capstone Project Review", desc:"Get expert feedback on your final project before you take it into interviews." }, { label:"EXPOSURE", title:"Real Industry Exposure", desc:"Understand how AI systems are scoped, built, and deployed inside real businesses." } ]; return ( <section className="py-24 bg-[#05070D]"> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="mb-16"> <h4 className="text-[#7B5CFF] text-[11px] font-bold tracking-widest uppercase mb-4">INCLUDED BONUSES</h4> <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Everything Else That Comes <span className="text-[#9D7AFF]">With Your Enrollment</span></h2> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {bonuses.map((bonus, idx) => ( <div key={idx} className="bg-[#161029] border border-white/5 p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-white/10 transition-colors"> <div className="px-3 py-1 rounded-full bg-[#7B5CFF]/10 text-[#7B5CFF] text-[10px] font-bold uppercase tracking-widest shrink-0 mt-1"> {bonus.label || bonus.tag} </div> <div> <h3 className="text-white font-bold text-[16px] mb-2">{bonus.title}</h3> <p className="text-white/50 text-[16px] leading-relaxed">{bonus.desc}</p> </div> </div> ))} </div> </div> </section> );
}

/* ───────────────── MENTORS ───────────────── */
function Mentors() {
  const mentors = [
    {
      name: "Ankit Bhadra",
      image: "/Academy/Ankit-Bhadra.png",
      tag: "Mentor",
      tagColor: "border-[#7B5CFF]/30 text-[#BE9FFF] bg-[#7B5CFF]/10",
      roleColor: "text-[#7B5CFF]",
      roles: ["Pre-Sales Cloud Solution Architect", "Cloud Consultant"],
      desc: "7+ years of experience as a Technical SPOC and Cloud consultant. Currently a Pre-Sales Cloud Solution Architect with expertise in AWS, Microsoft Azure, and Google Cloud Platform (GCP). He helps organizations accelerate digital transformation by designing optimized cloud solutions, architectures, and AI/ML ecosystems.",
      badges: [
        { label: "AWS", icon: "cloud" },
        { label: "GCP", icon: "cloud" },
        { label: "AI/ML", icon: "chip" },
        { label: "Azure", icon: "cloud" }
      ]
    },
    {
      name: "Aritra Sen",
      image: "/Academy/Aritra-Sen.png",
      tag: "Mentor",
      tagColor: "border-[#7B5CFF]/30 text-[#BE9FFF] bg-[#7B5CFF]/10",
      roleColor: "text-[#7B5CFF]",
      roles: ["Sales & Business Development Expert"],
      desc: "16 years of work experience in Sales & Business Development. His expertise in technology sales with a strong consultancy expertise in AI, data engineering, cloud native and various digital engineering solutions.",
      badges: [
        { label: "AI", icon: "chip" },
        { label: "Data Engineering", icon: "chip" },
        { label: "Cloud Native", icon: "cloud" }
      ]
    },
    {
      name: "Atish Roy",
      image: "/Academy/atish roy.png",
      tag: "Mentor",
      tagColor: "border-[#FF4D6D]/30 text-[#FF8FA3] bg-[#FF4D6D]/10",
      roleColor: "text-[#FF4D6D]",
      roleIcon: "cursor",
      roles: ["Mentor For Advanced UI, UX"],
      desc: "Expert in advanced interface design and user experience strategies for complex digital products.",
      badges: [
        { label: "Advanced UI", icon: "layout" },
        { label: "UX Strategy", icon: "chart" }
      ]
    },
    {
      name: "Sayan Bhattacharjee",
      image: "/Academy/Sayan bhattacharjee (1).png",
      tag: "Mentor",
      tagColor: "border-[#FF4D6D]/30 text-[#FF8FA3] bg-[#FF4D6D]/10",
      roleColor: "text-[#FF4D6D]",
      roleIcon: "gradCap",
      roles: ["Mentor For Basic Course UI, UX"],
      badges: [
        { label: "UI Basics", icon: "layers" },
        { label: "Design Thinking", icon: "penTool" }
      ]
    },
    {
      name: "Pradip Mondal",
      image: "/Academy/Pradip-Mondal.png",
      imageClass: "object-cover object-top scale-[1.06]",
      tag: "Mentor",
      tagColor: "border-[#FF4D6D]/30 text-[#FF8FA3] bg-[#FF4D6D]/10",
      roleColor: "text-[#FF4D6D]",
      roleIcon: "briefcase",
      roles: ["Mentor For Basic Course UI, UX"],
      desc: "Focuses on practical wireframing and prototyping skills for beginners entering the design field.",
      badges: [
        { label: "Prototyping", icon: "layout" },
        { label: "Wireframing", icon: "cursor" }
      ]
    },
    {
      name: "Shrestha Samadder",
      image: "/Academy/Shrestha-Samadder.png",
      imageClass: "object-cover object-top scale-[1.06]",
      tag: "Mentor",
      tagColor: "border-[#FF4D6D]/30 text-[#FF8FA3] bg-[#FF4D6D]/10",
      roleColor: "text-[#FF4D6D]",
      roleIcon: "briefcase",
      roles: ["Mentor For Basic Course UI, UX"],
      desc: "Passionate about teaching visual design fundamentals and user-centric research methods.",
      badges: [
        { label: "Visual Design", icon: "eye" },
        { label: "User Research", icon: "search" }
      ]
    }
  ];

  const IconMap = {
    cloud: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    chip: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
    layout: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9h18M9 21V9" />
      </svg>
    ),
    chart: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
      </svg>
    ),
    cursor: (
      <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      </svg>
    ),
    gradCap: (
      <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4L3 9l9 5 9-5-9-5zM3 14v4c0 2.2 4 4 9 4s9-1.8 9-4v-4" />
      </svg>
    ),
    layers: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="2 12 12 17 22 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="2 17 12 22 22 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    penTool: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 3.5a2.121 2.121 0 0 1 3 3L7 17.5 3 18l.5-4 12-12.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 6.5l4 4" />
      </svg>
    ),
    briefcase: (
      <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="1.5" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    eye: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    ),
    search: (
      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" strokeWidth="1.5" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  };

  const renderMentorCard = (mentor, idx) => (
    <div key={idx} className="flex flex-col sm:flex-row w-full h-full bg-[#13111C] overflow-hidden">
      <div className="w-full sm:w-[45%] relative min-h-[300px] sm:min-h-[320px] flex-shrink-0 bg-transparent overflow-hidden">
        <Image 
          src={mentor.image} 
          alt={mentor.name} 
          fill
          quality={100}
          unoptimized
          className={mentor.imageClass || "object-cover object-top"} 
        />
      </div>
      <div className="w-full sm:w-[55%] p-6 lg:p-8 flex flex-col border border-l-0 border-white/5">
        <div className="flex flex-row items-center flex-wrap gap-3 mb-2">
          <h3 className="text-lg lg:text-[22px] font-bold text-white tracking-tight leading-none">{mentor.name}</h3>
          <span className={`px-2 py-0.5 border text-[10px] rounded-sm ${mentor.tagColor}`}>
            {mentor.tag}
          </span>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          {mentor.roles.map((role, i) => (
            <div key={i} className={`font-bold text-[12px] lg:text-[13px] flex items-center leading-snug ${mentor.roleColor}`}>
              {i === 0 && mentor.roleIcon && IconMap[mentor.roleIcon]}
              {role}
            </div>
          ))}
        </div>
        <p className="text-white/60 text-[12px] leading-relaxed mb-6">
          {mentor.desc}
        </p>
        <div className="mt-auto flex flex-col justify-end">
          {mentor.badges && mentor.badges.length > 0 ? (
            <div className="flex flex-wrap gap-2 mb-5">
              {mentor.badges.map((badge, i) => (
                <div key={i} className="flex items-center px-2 py-1 border border-[#7B5CFF]/30 text-[#BE9FFF] text-[10px] bg-[#7B5CFF]/10 rounded-sm">
                  {IconMap[badge.icon]}
                  {badge.label}
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-5 h-[24px]"></div>
          )}
          <a href="#" className={`hover:opacity-80 transition-opacity text-[12px] font-bold flex items-center gap-1.5 w-fit ${mentor.roleColor}`}>
            View Profile <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#05070D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <h4 className="text-[#7B5CFF] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            MEET YOUR MENTORS
          </h4>
          <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Learn from industry experts who <br className="hidden md:block" />
            ship <span className="text-[#7B5CFF]">real solutions.</span>
          </h2>
          <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed max-w-2xl">
            Our mentors bring years of real-world experience in AI/ML, UI/UX, and digital transformation.
          </p>
        </div>

        {/* AI Engineering Mentors */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="w-1 h-5 bg-[#7B5CFF]"></div>
            <h3 className="text-white font-bold text-[18px] lg:text-[20px]">AI Engineering Mentors</h3>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 auto-rows-fr">
            {mentors.slice(0, 2).map(renderMentorCard)}
          </div>
        </div>

        {/* UI/UX Design Mentors */}
        <div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-5 bg-[#FF4D6D]"></div>
              <h3 className="text-white font-bold text-[18px] lg:text-[20px]">UI/UX Design Mentors</h3>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  document.getElementById('uiux-scroll-container-brainware').scrollBy({ left: -300, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={() => {
                  document.getElementById('uiux-scroll-container-brainware').scrollBy({ left: 300, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          <div 
            id="uiux-scroll-container-brainware"
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {mentors.slice(2, 6).map((mentor, idx) => (
              <div key={idx} className="min-w-[100%] md:min-w-[calc(50%-12px)] xl:min-w-[calc(50%-12px)] snap-start">
                {renderMentorCard(mentor, idx)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── TESTIMONIALS ───────────────── */
function Testimonials() { 
  const students = [ 
    { 
      name:"Aman Kumar Singh", 
      role:"B.Tech (Computer Science)", 
      initial:"AS", 
      text:"Before joining this program, I had only theoretical knowledge of Machine Learning. The hands-on projects and AWS deployment experience helped me understand how AI solutions are built in the industry. The portfolio I developed during the training played a major role in helping me secure a Data Analyst internship." 
    }, 
    { 
      name:"Sutirtha Chatterjee", 
      role:"B.Tech (IT)", 
      initial:"SC", 
      text:"What makes this program different is its focus on real implementation. From data preprocessing to model deployment, every stage was covered through practical exercises. The live projects significantly strengthened my resume and improved my placement opportunities." 
    }, 
    { 
      name:"Arindam Sengupta", 
      role:"Computer Science Graduate", 
      initial:"AS", 
      text:"I was looking for a program that could help me transition into the AI/ML domain. The curriculum, mentor guidance, and cloud-based projects on AWS gave me industry-relevant skills. Within a few months of completing the training, I received interview calls for AI and Data Science roles." 
    } 
  ]; 

  return ( 
    <section id="outcomes" className="py-24 bg-[#05070D]"> 
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> 
        <div className="mb-16"> 
          <h4 className="text-[#7B5CFF] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            STUDENT OUTCOMES
          </h4> 
          <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Real Students. Real Projects. <br className="hidden md:block" />
            <span className="text-[#7B5CFF]">Real Outcomes.</span>
          </h2> 
          <p className="text-white/50 text-[14px] max-w-2xl">These aren't motivational quotes. These are people who came in without AI experience and left with deployed projects and job-ready portfolios.</p> 
        </div> 
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
          {students.map((student, idx) => ( 
            <div key={idx} className="bg-[#0A0D18] border border-white/5 p-8 flex flex-col justify-between"> 
              <div> 
                <div className="text-yellow-500 text-sm mb-6 tracking-widest">★★★★★</div> 
                <p className="text-white/40 text-[14px] leading-relaxed mb-8">"{student.text}"</p> 
              </div> 
              <div className="flex items-center gap-4"> 
                <div className="w-8 h-8 rounded-full bg-[#7B5CFF] flex items-center justify-center text-white font-bold text-[10px]"> 
                  {student.initial} 
                </div> 
                <div> 
                  <div className="text-white font-bold text-[14px]">{student.name}</div> 
                  <div className="text-white/30 text-[12px]">{student.role}</div> 
                </div> 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
    </section> 
  );
} /* ───────────────── PRICING ───────────────── */
function Pricing() { const features = ["120+ Hours of Live, Hands-On Training","13 Industry-Focused Modules","Full AWS Cloud Access Throughout","Machine Learning Projects","NLP & Computer Vision Projects","Capstone: End-to-End AI Deployment","1-on-1 Mentorship from Industry Engineers","Program Completion Certificate" ]; return ( <section id="pricing" className="py-24 bg-[#0A0D18]"> <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center"> <h4 className="text-[#7B5CFF] text-[10px] font-bold tracking-widest uppercase mb-8">LIMITED SPOTS AVAILABLE</h4> <h2 className="text-3xl md:text-4xl font-normal text-white mb-12 tracking-tight"> The Investment: ₹4,000. <span className="text-[#9D7AFF]">The Return: A Career in AI.</span> </h2> <div className="bg-[#161029] border border-white/10 p-10 max-w-lg mx-auto relative shadow-[0_0_50px_rgba(123,92,255,0.05)] text-left"> <div className="bg-[#75b798] text-[#0f5132] text-[8px] font-bold tracking-widest uppercase px-3 py-1 w-fit mb-6"> PRICE LOCKED FOR THIS INTAKE </div> <h3 className="text-white font-bold text-xl mb-2">Full Program. Zero Hidden Costs.</h3> <p className="text-white/50 text-[14px] mb-8">Everything included — nothing locked behind upgrades.</p> <div className="mb-2"> <span className="text-4xl font-black text-white">₹4,000</span> </div> <div className="text-white/30 text-[12px] pb-8 border-b border-white/5 mb-8"> One-time payment - No EMI confusion </div> <div className="space-y-4 mb-10"> {features.map((feature, idx) => ( <div key={idx} className="flex items-center gap-3"> <span className="text-[#7B5CFF] font-bold text-[12px]">✓</span> <span className="text-white/60 text-[14px]">{feature}</span> </div> ))} </div> <a href="#" className="block w-full bg-[#7B5CFF] hover:bg-[#6a4cef] text-white py-3.5 text-center text-[13px] font-bold transition-all"> Reserve Your Seat Now </a> <p className="text-white/20 text-[9px] mt-4 text-center">Price valid for current intake only. Once the batch fills, enrollment closes.</p> </div> </div> </section> );
} /* ───────────────── FAQ ───────────────── */
function FAQ() { const [openIdx, setOpenIdx] = useState(null); const faqs = [ { q:"Do I need prior AI or ML experience?", a:"No prior AI/ML experience is required, though a basic understanding of programming (like Python) is helpful. We cover the foundations before moving into advanced topics." }, { q:"Is this program practical or mostly theory?", a:"It is intensely practical. We believe in learning by doing, so every module involves hands-on coding, building, and deploying real AI systems rather than just watching lectures." }, { q:"Will I actually build projects?", a:"Yes. You will build multiple industry-grade projects throughout the course, including NLP tools and GenAI applications, which will form a robust portfolio you can show to recruiters." }, { q:"Will I learn AWS?", a:"Absolutely. Deploying models is just as important as building them. You will learn to use AWS services like SageMaker, EC2, and Lambda to host your AI applications in the cloud." }, { q:"Is there a capstone project?", a:"Yes. The program culminates in a comprehensive capstone project where you solve a real-world business problem end-to-end, from data ingestion to a live cloud deployment." }, { q:"Will I get a certificate?", a:"Yes, you will receive an industry-recognized certificate from AGS Academy upon successful completion of your capstone project, validating your practical skills." } ]; const toggleFaq = (idx) => { setOpenIdx(openIdx === idx ? null : idx); }; return ( <section id="faq" className="py-24 bg-[#05070D]"> <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12"> <div className="text-center mb-16"> <h4 className="text-[#7B5CFF] text-[12px] font-bold tracking-widest uppercase mb-4">COMMON QUESTIONS</h4> <h2 className="text-3xl font-bold text-white tracking-tight">Everything You Might Ask</h2> </div> <div className="space-y-2"> {faqs.map((faq, idx) => ( <div key={idx} className="border-b border-white/5 py-5 flex flex-col justify-center cursor-pointer" onClick={() => toggleFaq(idx)}> <div className="flex items-center justify-between"> <span className="text-white/80 font-bold text-[16px] md:text-[18px]">{faq.q}</span> <span className="text-[#7B5CFF] text-2xl transition-transform duration-300" style={{ transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span> </div> {openIdx === idx && ( <div className="mt-4 text-white/50 text-[15px] md:text-[16px] leading-relaxed pr-8"> {faq.a} </div> )} </div> ))} </div> </div> </section> );
} /* ───────────────── FOOTER ───────────────── */
function Footer() { return ( <footer className="bg-[#05070D]"> <div className="py-24 text-center border-t border-white/5"> <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Stop Reading About AI. <span className="text-[#9D7AFF]">Start Building It.</span></h2> <p className="text-white/50 text-[15px] md:text-[16px] max-w-xl mx-auto mb-8 leading-relaxed mt-6"> The next batch is forming now. Seats are limited and once they're gone, enrollment closes until the next intake. If you're serious about getting into AI, this is the program that actually prepares you for it. </p> <a href="#pricing" className="inline-block bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-4 text-[15px] md:text-[16px] font-bold transition-all mb-4"> Reserve Your Seat Now — It Takes 60 Seconds </a> <p className="text-white/40 text-[13px]">Join 200+ students who chose projects over theory and portfolios over empty certificates.</p> </div> <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-white/5"> <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8"> <div className="md:col-span-12 lg:col-span-4"> <h3 className="text-white font-bold text-xl mb-4 tracking-tight"><span className="text-[#7B5CFF]">AGS</span> Academy</h3> <p className="text-white/50 text-[12px] leading-relaxed max-w-sm"> A career program for AI & Machine Learning, built around real projects and AWS deployment. </p> </div> <div className="md:col-span-4 lg:col-span-2 lg:col-start-7"> <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">Program</h4> <ul className="space-y-4"> {["Curriculum","Outcomes","Mentors"].map(link => ( <li key={link}><a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-white transition-colors text-[13px]">{link}</a></li> ))} </ul> </div> <div className="md:col-span-4 lg:col-span-2"> <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">Resources</h4> <ul className="space-y-4"> {["FAQ","Pricing","Student Stories"].map(link => ( <li key={link}><a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-white transition-colors text-[13px]">{link}</a></li> ))} </ul> </div> <div className="md:col-span-4 lg:col-span-2"> <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">Contact</h4> <ul className="space-y-4"> {["hello@agsacademy.in","+91 98300 98300"].map(link => ( <li key={link}><a href="#" className="text-white/40 hover:text-white transition-colors text-[13px]">{link}</a></li> ))} </ul> </div> </div> <div className="mt-16 pt-8 text-center border-t border-white/5"> <p className="text-white/30 text-[12px]"> © 2026 AGS Academy. All rights reserved. </p> </div> </div> </footer> );
} /* ───────────────── PAGE EXPORT ───────────────── */
export default function AcademyPage() { return ( <main className="bg-[#05070D] min-h-screen text-white font-sans antialiased selection:bg-[#7B5CFF]/30 selection:text-white"> <Navbar /> <Hero /> <Stats /> {/* <Opportunity /> */} {/* <Methodology /> */} {/* <TechSkills /> */} <Curriculum /> <TargetAudience /> <WhatYoullHave /> <IndustryPrograms /> <Bonuses /> <AWSTraining /> <Mentors /> <Testimonials /> <Pricing /> <FAQ /> <Footer /> </main> );
}
