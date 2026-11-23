import Desktop3Hero from "@/components/Desktop3Hero";
import ClientsSection from "@/components/ClientsSection";
import LearnAboutUsSection from "@/components/LearnAboutUsSection";
import YourNeedsExpertiseSection from "@/components/YourNeedsExpertiseSection";
import AwsEcosystemBanner from "@/components/AwsEcosystemBanner";
import InHouseProductsSection from "@/components/InHouseProductsSection";
import AWSTraining from "@/components/AWSTraining";
import CertifiedExcellence from "@/components/CertifiedExcellence";
import Desktop3FeaturedWorks from "@/components/Desktop3FeaturedWorks";
import Desktop3Testimonials from "@/components/Desktop3Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";

export const metadata = {
  title: "AWS Partner — Amrut Global Solutions | Official Partnership",
  description:
    "Amrut Global Solutions (AGS) is an official AWS Partner in association with Redington. Building smarter and scaling faster on AWS with enterprise cloud architecture, digital solutions, and certified cloud excellence.",
};

export default function AwsPartnerPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#030614]">
      <ScrollTriggerRefresh />

      {/* 1. Full-Width AWS Partnership Announcement Hero Section (matching Desktop - 3.png) */}
      <Desktop3Hero />

      {/* 2. Client Brand Partners Strip (White Background) */}
      <ClientsSection />

      {/* 3. Who We Are / Learn About us (Dark Theme with Container (6) & 2x2 Metric Cards) */}
      <LearnAboutUsSection />

      {/* 4. Your Needs, Our Expertise (White Theme with 6 Interactive Numbered Services) */}
      <YourNeedsExpertiseSection />

      {/* 5. AWS Cloud Ecosystem Banner (In Association with Redington Limited) */}
      <AwsEcosystemBanner />

      {/* 6. Our In House Products (White Theme with Forumlyy, ADX, Hotel OS, MedicAI) */}
      <InHouseProductsSection />

      {/* 7. AWS-Accredited Training & Digital Badges (White Theme with Continuous Moving Badges) */}
      <AWSTraining />

      {/* 8. Certified Excellence (Dark Theme with Interactive Certificate Carousel) */}
      <CertifiedExcellence />

      {/* 9. Featured Works (White Theme with All Portfolio CTA & 4 Project Cards) */}
      <Desktop3FeaturedWorks />

      {/* 10. What they say about us (Dark Theme with 6 Testimonial Cards & Avatars) */}
      <Desktop3Testimonials />

      {/* 11. Let's work with Us (CTA Section) */}
      <CTASection />

      {/* 12. Full Comprehensive Footer */}
      <Footer />
    </main>
  );
}
