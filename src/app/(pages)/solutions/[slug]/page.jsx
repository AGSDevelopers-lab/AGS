import { notFound, redirect } from "next/navigation";
import ProductDetailView from "@/components/ProductDetailView";

const ALLOWED_SLUGS = ["lynkbeats", "newsbuddies", "vidlens"];

export async function generateStaticParams() {
  return [...ALLOWED_SLUGS, "academix"].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const normalized = (slug || "").toLowerCase();
  if (normalized === "academix") {
    return {
      title: "AWS Certification Training — Academix by AGS",
      description:
        "Crack Your AWS Exam in One Go. Expert-led AWS Certification Training with hands-on projects, live mentor support, and exam preparation.",
    };
  }
  if (!ALLOWED_SLUGS.includes(normalized)) {
    return {
      title: "Solution Not Found — AGS",
    };
  }

  if (normalized === "vidlens") {
    return {
      title: "VidLens — Video Intelligence Platform | AGS Solutions",
      description: "Analyze competitor channels, track audience retention, and optimize video content strategy effortlessly with VidLens.",
    };
  }

  const isLynk = normalized === "lynkbeats";
  return {
    title: isLynk
      ? "LynkBeats — Editorial Intelligence Platform | AGS Solutions"
      : "Newsbuddies — Automated Headline & Audience Optimization | AGS Solutions",
    description: isLynk
      ? "Track story performance and editorial KPIs in real time with LynkBeats."
      : "Optimize headlines, regional metadata, and search visibility to drive organic news traffic.",
  };
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  const normalized = (slug || "").toLowerCase();
  if (normalized === "academix") {
    redirect("/services/aws-training");
  }
  if (!ALLOWED_SLUGS.includes(normalized)) {
    notFound();
  }
  return <ProductDetailView slug={normalized} />;
}
