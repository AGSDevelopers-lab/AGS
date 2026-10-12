import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import AboutMetricsSection from "@/components/AboutMetricsSection";
import DigitalExcellenceSection from "@/components/DigitalExcellenceSection";
import AwsEcosystemBanner from "@/components/AwsEcosystemBanner";
import InnovativeProductsSection from "@/components/InnovativeProductsSection";
import AWSTraining from "@/components/AWSTraining";
import CertifiedExcellence from "@/components/CertifiedExcellence";
import CreationsShowcaseSection from "@/components/CreationsShowcaseSection";
import HappyCustomersSection from "@/components/HappyCustomersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";

export const metadata = {
  title: "AGS — Proud Official AWS Partner | Digital Engineering & Cloud Solutions",
  description:
    "Amrut Global Solutions (AGS) is an official AWS Partner empowering businesses with enterprise cloud architectures, full-stack software development, UI/UX design, and AI solutions.",
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-black">
      <ScrollTriggerRefresh />
      {/* 1. Full-Width Hero Section (7-Slide Immersive Background Transitions matching Figma) */}
      <HeroSection />

      {/* Solid White Block: Clients, About, Digital Excellence */}
      <div className="relative w-full bg-white">
        <ClientsSection />
        <AboutMetricsSection />
        <DigitalExcellenceSection />
      </div>

      {/* 5. AWS Cloud Ecosystem Banner (Dark Background with Glowing Cloud Hologram) */}
      <AwsEcosystemBanner />

      {/* 6. AWS-Accredited Training & Digital Badges (Moving Carousel from carousel certificates .png) */}
      <AWSTraining />

      {/* 7. Innovative Digital Products (Dark Theme with Academix, Lumina, STmet Cards) */}
      <InnovativeProductsSection />

      {/* 8. Certified Excellence (White Background with Interactive Certificate Carousel) */}
      <CertifiedExcellence />

      {/* 9. Empowering Businesses To Achieve Goals (Portfolio Showcase with Molifera Media) */}
      <CreationsShowcaseSection />

      {/* 10. Testimonials / Happy Customers (White Background with 4.9 Rating & Reviews) */}
      <HappyCustomersSection />

      {/* 11. CTA Banner */}
      <CTASection />

      {/* 12. Full Comprehensive Footer matching Figma Frame 1597884149 */}
      <Footer />
    </main>
  );
}
