import AboutHero from "@/components/about/AboutHero";
import ClientsSection from "@/components/ClientsSection";
import AboutApproach from "@/components/about/AboutApproach";
import AboutBusinessGrowth from "@/components/about/AboutBusinessGrowth";
import AboutDigitalSolutionsShowcase from "@/components/about/AboutDigitalSolutionsShowcase";
import AboutDigitalExperiences from "@/components/about/AboutDigitalExperiences";
import AboutTransformation from "@/components/about/AboutTransformation";
import AboutFounders from "@/components/about/AboutFounders";
import AboutOfficers from "@/components/about/AboutOfficers";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";

export const metadata = {
  title: "About Us — Amrut Global Solutions (AGS)",
  description:
    "We are a team of passionate designers, developers, and strategists building innovative digital solutions that transform businesses and create impact.",
  keywords: [
    "About AGS",
    "Amrut Global Solutions",
    "Digital Transformation",
    "Leadership Team",
    "Founders",
    "Software Development Agency",
  ],
  openGraph: {
    title: "About Us — Amrut Global Solutions (AGS)",
    description:
      "We are a team of passionate designers, developers, and strategists building innovative digital solutions that transform businesses and create impact.",
    url: "https://amrutglobalsolutions.com/about",
    siteName: "AGS",
  },
};

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#FFFFFF] text-[#101015]">
      <ScrollTriggerRefresh />

      {/* 1. Hero & Navigation */}
      <AboutHero />

      {/* 2. Client and Partner Logos Carousel (reusing exact homepage marquee) */}
      <ClientsSection />

      {/* 3. Our Approach */}
      <AboutApproach />

      {/* 4. Fuel Your Business Expansion & Metrics & Supporting Growth Statement */}
      <AboutBusinessGrowth />

      {/* 5. Digital Solutions Photographic Showcase */}
      <AboutDigitalSolutionsShowcase />

      {/* 6. Building Digital Experiences That Drive Results */}
      <AboutDigitalExperiences />

      {/* 7. Transforming Ideas Into Digital Solutions That Deliver */}
      <AboutTransformation />

      {/* 8. Our Founders & Directors */}
      <AboutFounders />

      {/* 9. Our Officers */}
      <AboutOfficers />

      {/* 10. Let's work with Us CTA */}
      <AboutCTA />

      {/* 11 & 12. Footer */}
      <Footer />
    </main>
  );
}
