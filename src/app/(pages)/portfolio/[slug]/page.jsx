import { notFound } from "next/navigation";
import PortfolioDetailClient from "./PortfolioDetailClient";
import CTASection from "@/components/CTASection";

const PORTFOLIO_DETAIL_DATA = {
  "bhairal": {
    name: "Bhairal",
    label: "Website Development",
    tags: ["React", "Next.js", "Node.js", "GraphQL"],
    bgTheme: "from-[#080711] via-[#0d0a21] to-[#080711]",
    accentColor: "#7B5CFF",
    heroImage: "/product-5.png",
    figmaUrl: "https://www.figma.com/proto/TC6Mlja9pb7gmhu7izyDvc/Influencer-Case-study?node-id=1-92&p=f&t=v7tYnM8ubREWLcyK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    tagline: "Bridging Brands and Verified Creators at Scale",
    about: "Bhairal is a premium influencer marketplace engineered to let brands search, audit, hire, and track social media creators globally. By integrating multi-platform social APIs and custom campaign pipelines, Bhairal simplifies marketing attribution and accelerates verified influencer campaigns.",
    challenge: "Traditional influencer networks rely on manual agency negotiations, leading to high processing friction, untrusted engagement rates, and opaque invoicing structures. Bhairal required a central, lightning-fast dashboard that automates campaign pipelines and verifies creator statistics in real time.",
    research: [
      { metric: "84%", label: "Marketers struggle to track ROI on influencer campaigns." },
      { metric: "3.2x", label: "Increase in engagement efficiency using automated matching." },
      { metric: "65%", label: "Reduction in campaign launch latency via direct smart contracts." }
    ],
    sitemap: [
      { node: "Brand Portal", children: ["Campaign Planner", "Creator Analytics Search", "Invoicing Logs"] },
      { node: "Creator Dashboard", children: ["Media Kit Builder", "Offers Hub", "Earnings Wallet"] },
      { node: "Admin System", children: ["Escrow Management", "API Diagnostics", "Verification Engine"] }
    ],
    wireframes: [
      { name: "Creator Search Grid", desc: "Advanced filter grid allowing instant keyword indexing, follower count ranges, and average engagement index checks." },
      { name: "Live Campaign Tracker", desc: "Interactive timeline tracking content drafts submission, client approval flags, live URL posting, and attribution data logs." }
    ],
    finalUi: [
      { title: "Smart Campaign Planner", desc: "A sleek, dark dashboard designed with modern gradients. Centralizes media spend widgets and active campaign metrics." },
      { title: "Real-time Creator Analytics", desc: "Visual interactive charts summarizing subscriber demographics, click rates, and verified channel data." }
    ],
    palette: [
      { name: "Deep Violet", hex: "#7B5CFF", desc: "Primary brand accent conveying premium technical innovation." },
      { name: "Soft Lilac", hex: "#D8D7FF", desc: "Secondary UI utility used for headers, badges, and lines." },
      { name: "Neutral Slate", hex: "#121225", desc: "Dark background card base establishing modern aesthetic contrast." }
    ]
  },
  "mangal-materials": {
    name: "Mangal Materials",
    label: "App Redesign",
    tags: ["React", "Firebase", "UX Research", "Mobile UI"],
    bgTheme: "from-[#05110c] via-[#081f16] to-[#05110c]",
    accentColor: "#00a37b",
    heroImage: "/product-2.png",
    figmaUrl: "https://www.figma.com/proto/xNnhifFuOzwF3uouIYKQWC/Mangal-Materials-Case-study?node-id=11-17&t=a8hh5O46d2GbS3ju-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    tagline: "E-Commerce App Redesign for Spiritual Puja Rituals",
    about: "Mangal Materials is an offline-first spiritual e-commerce application. It delivers a curated ecosystem providing deity idols, custom puja packages, and ritual items directly to users. The redesign prioritizes tactile interface elements, simplified navigation trees, and accessibility standards.",
    challenge: "The initial mobile experience was plagued by excessive catalog fragmentation, complicated ritual-selection screens, and a multi-step checkout funnel that alienated older non-technical user demographics. The redesign targeted cognitive-load reduction and WCAG contrast conformance.",
    research: [
      { metric: "73%", label: "PUJA orders fail due to confusing multi-item ritual package grids." },
      { metric: "99.8%", label: "Search speed lift through elastic indexing and dynamic swatches." },
      { metric: "42%", label: "Cart abandonment drop under our unified 1-click package checkouts." }
    ],
    sitemap: [
      { node: "Puja Package Catalog", children: ["Ritual Planner", "Deity Selection", "Custom Material Bundles"] },
      { node: "Tactile Cart", children: ["1-Click checkout", "Scheduled delivery settings", "Priest booking addon"] },
      { node: "User Profiles", children: ["Family puja logs", "Holy event alerts", "Orders history"] }
    ],
    wireframes: [
      { name: "Tactile Package Configurator", desc: "A clean, responsive flow where users select their upcoming festival, and all necessary elements are bundled automatically." },
      { name: "Accessible Checkout Funnel", desc: "Unified single-page card checkout with highly visible text contrast indices, large touch target fields, and micro-instructions." }
    ],
    finalUi: [
      { title: "Emerald Brand Interface", desc: "A breathtaking dark emerald-green and mint layout. Utilizes soft card gradients and organic visual structures." },
      { title: "Simplified Ritual Bundler", desc: "Bespoke checkout interfaces enabling users to instantly configure complex religious kits in two taps." }
    ],
    palette: [
      { name: "Deep Emerald", hex: "#081F16", desc: "Primary brand background color instilling deep peace and holiness." },
      { name: "Tactile Mint", hex: "#00A37B", desc: "Interactive brand accent color highlighting CTA actions and cards." },
      { name: "Pure Sand", hex: "#F3EFE0", desc: "Light text contrast color echoing spiritual sand and clay assets." }
    ]
  },
  "totojan": {
    name: "TotoJan",
    label: "App Development",
    tags: ["React Native", "AWS", "Node.js", "WebSockets"],
    bgTheme: "from-[#110f05] via-[#211f0a] to-[#110f05]",
    accentColor: "#F59E0B",
    heroImage: "/product-4.png",
    figmaUrl: "https://www.figma.com/proto/NBOI7DXn8ug8hMkQB6B7Do/Totojan-Case-study?node-id=1-157&t=xpe8bxWQX9I6tZ2H-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    tagline: "Instant Affordable E-Rickshaw Ride Booking",
    about: "TotoJan is a lightweight ride-hailing application developed for local e-rickshaw (Toto) networks. Operating under serverless AWS backends, TotoJan utilizes WebSockets to sync live coordinates between passengers and nearby drivers instantly.",
    challenge: "E-rickshaw drivers operate under limited data signals and rely on simple mobile devices. The app required extremely optimized background tracking scripts, a custom offline-sync map engine, and an ultra-lightweight codebase requiring zero memory overhead.",
    research: [
      { metric: "< 3s", label: "Real-time dispatch synchronization latency over WebSockets." },
      { metric: "99.9%", label: "Background tracking stability under low cellular data signals." },
      { metric: "140ms", label: "Average API response speed using geo-partitioned serverless lambdas." }
    ],
    sitemap: [
      { node: "Passenger App", children: ["Interactive booking map", "Live driver tracker", "Fare estimator"] },
      { node: "Driver Portal", children: ["Earnings log", "Active requests radar", "Route navigation map"] },
      { node: "Geo Dispatch Engine", children: ["WebSocket broadcast", "Attribution matches", "Payouts automation"] }
    ],
    wireframes: [
      { name: "WebSocket Radar Panel", desc: "Minimal interface showing passenger pins and driver locations updating smoothly in real time." },
      { name: "Fare Settlement Checkout", desc: "Large tactile buttons designed to settle fares immediately with cash or dynamic UPI QR codes." }
    ],
    finalUi: [
      { title: "High-Contrast Amber Interface", desc: "A sleek, dark charcoal-grey app base accented with vibrant neon-amber highlights for optimal daytime readability." },
      { title: "One-Tap Dispatch Trigger", desc: "A bold central button enabling passengers to request ride pickups instantaneously without navigation friction." }
    ],
    palette: [
      { name: "Vibrant Amber", hex: "#F59E0B", desc: "High-visibility brand accent color used for tracking indicators and buttons." },
      { name: "Carbon Grey", hex: "#1A1A1A", desc: "Secondary card base providing glare-free visual comfort under sunlight." },
      { name: "Signal White", hex: "#FFFFFF", desc: "Primary text contrast used to maintain clear navigation indexes." }
    ]
  },
  "dhunseri": {
    name: "Dhunseri",
    label: "Website Redesign",
    tags: ["Next.js", "Tailwind CSS", "Lighthouse", "SEO"],
    bgTheme: "from-[#080705] via-[#1f1a14] to-[#080705]",
    accentColor: "#C29A5B",
    heroImage: "/product-3.png",
    figmaUrl: "https://www.figma.com/proto/D9F8w0qbj3yeX1WwhjQTrT/Dhunseri-Case-Study?node-id=1-2&t=zLHzFULkEWQlHTgp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    tagline: "Bespoke Web Platform for Premium Orthodox Teas",
    about: "Dhunseri is a global orthodox tea manufacturer. The website redesign presents a high-luxury, cinematic interface featuring custom narrative grids, agricultural transparency, and seamless wholesale sitemap integrations.",
    challenge: "The legacy wholesale portal was slow, structurally disconnected from the brand's rich heritage, and non-responsive. The objective was to craft a lightning-fast showcase representing their estates, while organizing automated B2B sample requesting pipelines.",
    research: [
      { metric: "100/100", label: "Lighthouse core performance and SEO indexing score." },
      { metric: "3.5x", label: "B2B sample inquiry lift within 30 days of redesign launch." },
      { metric: "100%", label: "Layout responsiveness across mobile devices, tablets, and desktops." }
    ],
    sitemap: [
      { node: "Heritage Portal", children: ["Estates narrative", "Orthodox process", "Sustainability logs"] },
      { node: "Wholesale Portal", children: ["B2B catalog search", "Dynamic sample builder", "Logistics tracking"] },
      { node: "Global Distribution", children: ["B2B inquiry funnel", "Tea brokers dashboard", "Corporate contacts"] }
    ],
    wireframes: [
      { name: "Luxury Heritage Showcase", desc: "Cinematic media grids integrating smooth scrolling effects and text layers detailing estate history." },
      { name: "Automated B2B Request Panel", desc: "Elegant multi-step form built with clean validation matrices to capture corporate sample requests." }
    ],
    finalUi: [
      { title: "Gold & Charcoal Redesign", desc: "A luxurious visual canvas accented with elegant gold trims, classic typography, and premium card layouts." },
      { title: "Interactive Tea Collection", desc: "A custom filter system allowing corporate distributors to browse and filter leaf grades instantly." }
    ],
    palette: [
      { name: "Orthodox Gold", hex: "#C29A5B", desc: "Luxurious brand tone representing the absolute premium quality of orthodox teas." },
      { name: "Warm Charcoal", hex: "#1F1A14", desc: "Background canvas mimicking rich agricultural soil and organic tea leaves." },
      { name: "Ivory Silk", hex: "#FAFAFA", desc: "Clean typography contrast tone mimicking luxury tea packaging elements." }
    ]
  }
};

// Generate dynamic SEO metadata matching the project slug
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO_DETAIL_DATA[slug];

  if (!project) {
    return {
      title: "Project Case Study Not Found — AGS",
      description: "Explore our featured technical case studies and solutions built by AGS.",
    };
  }

  return {
    title: `${project.name} Case Study — AGS | Portfolio`,
    description: `${project.tagline}. ${project.about.substring(0, 120)}... Discover the engineering strategy behind the redesign.`,
    openGraph: {
      title: `${project.name} Case Study — AGS | Portfolio`,
      description: project.tagline,
      url: `https://amrutglobalsolutions.com/portfolio/${slug}`,
      siteName: "AGS",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Case Study — AGS`,
      description: project.tagline,
    },
  };
}

export default async function PortfolioDetailSubPage({ params }) {
  const { slug } = await params;
  const project = PORTFOLIO_DETAIL_DATA[slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <PortfolioDetailClient project={project} />
      <CTASection />
    </>
  );
}

// Generate static parameters for portfolio projects
export async function generateStaticParams() {
  return [
    { slug: "bhairal" },
    { slug: "mangal-materials" },
    { slug: "totojan" },
    { slug: "dhunseri" }
  ];
}
