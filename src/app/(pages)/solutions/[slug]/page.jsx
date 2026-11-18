import ProductDetailView from "@/components/ProductDetailView";
import { PRODUCTS, getProductBySlug } from "@/data/products";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Solution Not Found — AGS",
    };
  }
  return {
    title: `${product.name} — ${product.tagline} | AGS Solutions`,
    description: product.description,
  };
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  return <ProductDetailView slug={slug} />;
}
