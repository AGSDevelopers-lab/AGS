import { notFound } from "next/navigation";
import ProductDetailView from "@/components/ProductDetailView";

const ALLOWED_SLUGS = ["lynkbeats", "newsbuddies"];

export async function generateStaticParams() {
  return ALLOWED_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const normalized = (slug || "").toLowerCase();
  if (!ALLOWED_SLUGS.includes(normalized)) {
    return {
      title: "Product Not Found — AGS",
    };
  }

  const isLynk = normalized === "lynkbeats";
  return {
    title: isLynk
      ? "LynkBeats — Editorial Intelligence Platform | AGS Products"
      : "Newsbuddies — Automated Headline & Audience Optimization | AGS Products",
    description: isLynk
      ? "Track story performance and editorial KPIs in real time with LynkBeats."
      : "Optimize headlines, regional metadata, and search visibility to drive organic news traffic.",
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const normalized = (slug || "").toLowerCase();
  if (!ALLOWED_SLUGS.includes(normalized)) {
    notFound();
  }
  return <ProductDetailView slug={normalized} />;
}
