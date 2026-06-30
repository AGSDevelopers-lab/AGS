import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import CTASection from "@/components/CTASection";

const SERVICES_DETAIL_DATA = {
  "website-development": {
    title: "Website Development",
    subtitle: "High-Performance Web Platforms Engineered for Real Growth",
    heroImage: "/ags1/website development hero.png",
    frontCubeImage: "/ags1/website development page front cube.png",
    backCubeImage: "/ags1/website development page back cube.png",
    visual: "web",
    stats: [
      { value: "< 1.2s", label: "Average Load Time" },
      { value: "95+", label: "Lighthouse Performance" },
      { value: "< 2.5s", label: "LCP Target" },
      { value: "< 0.1", label: "Cumulative Layout Shift" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "Pass", label: "Core Web Vitals" },
    ],
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
    techStack: [
      { name: "Next.js", image: "/services/tech/nextjs.png" },
      { name: "React", image: "/services/tech/reactjs.png" },
      { name: "Wordpress", image: "/services/tech/wordpress.png" },
      { name: "Angular", image: "/services/tech/angular.png" },
      { name: "NodeJS", image: "/services/tech/nodejs.png" },
      { name: "WooCommerce", image: "/services/tech/woocommerce.png" },
      { name: "Shopify", image: "/services/tech/shopify-logo.png" },
      { name: "PHP", image: "/services/tech/php.png" },
      { name: "Laravel", image: "/services/tech/laravel.png" },
      { name: "Squarespace", image: "/services/tech/squarespace.png" },
      { name: "Magento", image: "/services/tech/magento.png" },
      { name: "Webflow", image: "/services/tech/webflow.png" },
      { name: "TypeScript", image: "/services/tech/typescript.png" },
      { name: "Tailwind CSS", image: "/services/tech/tailwindcss.png" },
      { name: "Sanity CMS", image: "/services/tech/sanity.png" },
    ],
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
    heroImage: "/ags1/ui-ux hero.png",
    frontCubeImage: "/ags1/ui-ux page front cube.png",
    backCubeImage: "/ags1/uiu-ux page back cube.png",
    visual: "design",
    stats: [
      { value: "250+", label: "Custom Screens Designed" },
      { value: "100%", label: "WCAG 2.1 AA Target" },
      { value: "40%", label: "Avg. Conversion Lift" },
      { value: "50+", label: "Design Systems Delivered" },
    ],
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
    techStack: [
      { name: "Figma", image: "/services/tech/figma.png" },
      { name: "Adobe Creative Cloud", image: "/services/tech/adobe.png" },
      { name: "Principle", image: "/services/tech/principle.svg" },
      { name: "Storybook", image: "/services/tech/storybook.svg" },
      { name: "Sketch", image: "/services/tech/sketch.png" },
      { name: "Miro", image: "/services/tech/miro.png" },
    ],
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
    heroImage: "/ags1/digital solutions page hero .png",
    frontCubeImage: "/ags1/digital solution page front cube .png",
    backCubeImage: "/ags1/digital solution back cube.png",
    visual: "digital",
    stats: [
      { value: "10x", label: "Average Client ROI Lift" },
      { value: "40%", label: "Lower Cost Per Lead" },
      { value: "3×", label: "Organic Traffic Growth" },
      { value: "85%", label: "Marketing Automation Rate" },
    ],
    statValue: "10x",
    statLabel: "Average Client ROI Lift",
    intro:
      "We provide digital solutions that bridge business strategy with performance marketing. From consulting and marketing automations to CRM structures and user acquisition funnels, we build high-performing engines that generate, nurture, and convert pipeline leads.",
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
    techStack: [
      { name: "Google Analytics 4", image: "/services/tech/google-analytics.png" },
      { name: "HubSpot", image: "/services/tech/hubspot.png" },
      { name: "Zapier", image: "/services/tech/zapier.png" },
      { name: "Meta Ads", image: "/services/tech/meta.png" },
      { name: "Google Tag Manager", image: "/services/tech/gtm.png" },
      { name: "Mailchimp", image: "/services/tech/mailchimp.png" },
      { name: "SEMrush", image: "/services/tech/semrush.png" },
      { name: "AHREFS", image: "/services/tech/ahrefs.png" },
    ],
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
    heroImage: "/ags1/mobile app development hero.png",
    frontCubeImage: "/ags1/mobile app development page front cube.png",
    backCubeImage: "/ags1/mobile app development page back cube.png",
    visual: "mobile",
    stats: [
      { value: "99.9%", label: "Production Crash-Free Rate" },
      { value: "2×", label: "Faster Cross-Platform Delivery" },
      { value: "< 200ms", label: "Average API Response" },
      { value: "4.8★", label: "Avg. App Store Rating" },
    ],
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
    techStack: [
      { name: "React Native", image: "/services/tech/react-native.png" },
      { name: "Flutter", image: "/services/tech/flutter.png" },
      { name: "Swift", image: "/services/tech/swift.png" },
      { name: "Kotlin", image: "/services/tech/kotlin.png" },
      { name: "SQLite", image: "/services/tech/sqlite.png" },
      { name: "Firebase", image: "/services/tech/firebase.png" },
      { name: "Node.js", image: "/services/tech/nodejs.png" },
      { name: "Apple App Store", image: "/services/tech/app-store.png" },
      { name: "Google Play Store", image: "/services/tech/google-play.png" },
    ],
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
    heroImage: "/ags1/ai solution page hero.png",
    frontCubeImage: "/ags1/ai solution page front cube .png",
    backCubeImage: "/ags1/ai solutions page back cube .png",
    visual: "ai",
    stats: [
      { value: "65%", label: "Workflow Time Reduced" },
      { value: "10×", label: "Faster Data Processing" },
      { value: "92%", label: "Classification Accuracy" },
      { value: "24/7", label: "Automated Agent Uptime" },
    ],
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
    techStack: [
      { name: "Python", image: "/services/tech/python.png" },
      { name: "PyTorch", image: "/services/tech/pytorch.png" },
      { name: "OpenAI", image: "/services/tech/openai.png" },
      { name: "LangChain", image: "/services/tech/langchain.png" },
      { name: "Pinecone", image: "/services/tech/pinecone.png" },
      { name: "FastAPI", image: "/services/tech/fastapi.png" },
      { name: "LlamaIndex", image: "/services/tech/llamaindex.jpeg" },
      { name: "Amazon Bedrock", image: "/services/tech/aws-bedrock.svg" },
      { name: "Amazon Q", image: "/services/tech/aws-q.svg" },
      { name: "AWS SageMaker", image: "/services/tech/aws-sagemaker.svg" },
      { name: "Amazon Comprehend", image: "/services/tech/aws-comprehend.svg" },
      { name: "Amazon Comprehend Medical", image: "/services/tech/aws-comprehend-medical.svg" },
      { name: "Amazon Lex", image: "/services/tech/aws-lex.svg" },
      { name: "Amazon Polly", image: "/services/tech/aws-polly.svg" },
      { name: "Amazon Transcribe", image: "/services/tech/aws-transcribe.svg" },
      { name: "Amazon Translate", image: "/services/tech/aws-translate.svg" },
      { name: "Amazon Rekognition", image: "/services/tech/aws-rekognition.svg" },
      { name: "Amazon Textract", image: "/services/tech/aws-textract.svg" },
      { name: "Amazon Kendra", image: "/services/tech/aws-kendra.svg" },
      { name: "Amazon Personalize", image: "/services/tech/aws-personalize.svg" },
      { name: "Amazon Forecast", image: "/services/tech/aws-forecast.svg" },
      { name: "Amazon Fraud Detector", image: "/services/tech/aws-fraud-detector.svg" },
      { name: "Amazon Lookout for Equipment", image: "/services/tech/aws-lookout-equipment.svg" },
      { name: "Amazon Augmented AI", image: "/services/tech/aws-a2i.svg" },
      { name: "Amazon CodeGuru", image: "/services/tech/aws-codeguru.svg" },
      { name: "Amazon DevOps Guru", image: "/services/tech/aws-devops-guru.svg" },
      { name: "AWS HealthLake", image: "/services/tech/aws-healthlake.svg" },
      { name: "Amazon Monitron", image: "/services/tech/aws-monitron.svg" },
      { name: "AWS Panorama", image: "/services/tech/aws-panorama.svg" },
    ],
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
  "cyber-security": {
    title: "Cyber Security & VAPT",
    subtitle: "Identify Threats Early. Harden Defenses. Stay Compliant.",
    heroImage: "/ags1/cyber security hero.png",
    frontCubeImage: "/ags1/cyber security page front cube.png",
    backCubeImage: "/ags1/cyber security page back cube.png",
    visual: "security",
    stats: [
      { value: "500+", label: "Vulnerabilities Remediated" },
      { value: "100%", label: "OWASP Top 10 Coverage" },
      { value: "48hr", label: "Critical Finding SLA" },
    ],
    statValue: "500+",
    statLabel: "Vulnerabilities Remediated",
    intro:
      "We deliver end-to-end Vulnerability Assessment and Penetration Testing (VAPT) alongside strategic cyber security consultation. Our experts simulate real-world attack scenarios across your web apps, APIs, mobile platforms, and cloud infrastructure — then guide your team through prioritized remediation, compliance readiness, and long-term security posture improvement.",
    capabilities: [
      {
        title: "Vulnerability Assessment (VA)",
        desc: "Automated and manual scanning to catalog security weaknesses across networks, applications, and cloud environments with severity scoring.",
      },
      {
        title: "Penetration Testing (PT)",
        desc: "Controlled exploitation of discovered vulnerabilities to validate real-world impact, privilege escalation paths, and data exposure risks.",
      },
      {
        title: "Web & API Security Testing",
        desc: "Deep testing for OWASP Top 10 flaws — injection, broken authentication, SSRF, IDOR, and insecure API endpoints on REST and GraphQL services.",
      },
      {
        title: "Mobile Application Security",
        desc: "Assessing iOS and Android apps for insecure data storage, certificate pinning bypass, API key exposure, and runtime manipulation risks.",
      },
      {
        title: "Cloud Security Assessment (AWS)",
        desc: "Auditing IAM policies, S3 bucket exposure, security group misconfigurations, GuardDuty alerts, and WAF rule effectiveness on AWS workloads.",
      },
      {
        title: "Cyber Security Consultation",
        desc: "Strategic advisory on security architecture, incident response planning, vendor risk management, and building a security-first engineering culture.",
      },
    ],
    techStack: [
      { name: "OWASP ZAP", image: "/services/tech/owasp-zap.svg" },
      { name: "Burp Suite", image: "/services/tech/burp-suite.jpg" },
      { name: "Nessus", image: "/services/tech/nessus.png" },
      { name: "Nmap", image: "/services/tech/nmap.png" },
      { name: "Wireshark", image: "/services/tech/wireshark.png" },
      { name: "Snyk", image: "/services/tech/snyk.png" },
      { name: "SonarQube", image: "/services/tech/sonarqube.svg" },
      { name: "AWS WAF", image: "/services/tech/aws-waf.svg" },
      { name: "AWS GuardDuty", image: "/services/tech/aws-guardduty.svg" },
      { name: "AWS Inspector", image: "/services/tech/aws-inspector.svg" },
      { name: "AWS Security Hub", image: "/services/tech/aws-security-hub.svg" },
    ],
    process: [
      {
        step: "01",
        phase: "Scope & Threat Modeling",
        desc: "Defining test boundaries, asset inventory, compliance requirements, and attack surface mapping aligned with your business risk profile.",
      },
      {
        step: "02",
        phase: "Discovery & Scanning",
        desc: "Running automated vulnerability scans combined with manual reconnaissance to identify misconfigurations, exposed endpoints, and weak credentials.",
      },
      {
        step: "03",
        phase: "Exploitation & Analysis",
        desc: "Safely exploiting confirmed vulnerabilities to measure blast radius, data access potential, and lateral movement paths within your environment.",
      },
      {
        step: "04",
        phase: "Report, Remediate & Retest",
        desc: "Delivering executive and technical reports with CVSS scoring, remediation guidance, and optional retesting to verify all critical fixes.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between Vulnerability Assessment and Penetration Testing?",
        a: "A Vulnerability Assessment (VA) identifies and lists potential security weaknesses across your systems. Penetration Testing (PT) goes further — our ethical hackers actively attempt to exploit those vulnerabilities to prove real-world impact. Most engagements combine both as VAPT for comprehensive coverage.",
      },
      {
        q: "How often should we conduct VAPT?",
        a: "We recommend at least annually for stable production systems, and after every major release, infrastructure change, or cloud migration. Regulated industries and PCI-DSS environments often require quarterly or bi-annual testing.",
      },
      {
        q: "Do you only provide reports, or help fix the vulnerabilities too?",
        a: "We deliver detailed technical and executive reports with prioritized remediation steps. Our development team can also implement fixes directly — patching code, hardening AWS configurations, and setting up WAF rules — then retest to confirm closure.",
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
    { slug: "cyber-security" },
  ];
}
