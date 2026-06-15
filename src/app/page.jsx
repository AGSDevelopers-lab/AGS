import HeroSlider from "@/components/HeroSlider";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import AwsSection from "@/components/aws";
import ProductsSection from "@/components/ProductsSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import CertificationsSection from "@/components/CertificationsSection";
import CertifiedExcellence from "@/components/CertifiedExcellence";
import ScrollReveal from "@/components/ScrollReveal";

function SectionConnector() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-190 lg:block">
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="intro-services-line" x1="1140" y1="40" x2="340" y2="730" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(143,107,255,0.95)" />
            <stop offset="0.48" stopColor="rgba(96,124,255,0.92)" />
            <stop offset="1" stopColor="rgba(110,71,255,0.88)" />
          </linearGradient>
          <filter id="intro-services-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M1120 108H1306C1336 108 1358 130 1358 160V284C1358 314 1336 336 1306 336H206C158 336 122 372 122 420V604C122 632 142 652 170 652H430"
          stroke="url(#intro-services-line)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#intro-services-glow)"
          className="opacity-90"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#020205_22%,#010103_48%,#000000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_4%_16%,rgba(86,126,255,0.16),rgba(0,0,0,0)_18%),radial-gradient(circle_at_96%_14%,rgba(120,96,255,0.18),rgba(0,0,0,0)_18%),radial-gradient(circle_at_3%_48%,rgba(72,118,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_97%_54%,rgba(126,84,255,0.15),rgba(0,0,0,0)_18%),radial-gradient(circle_at_2%_82%,rgba(82,130,255,0.14),rgba(0,0,0,0)_18%),radial-gradient(circle_at_98%_88%,rgba(128,88,255,0.14),rgba(0,0,0,0)_18%)]" />
        <div className="absolute left-[-14%] top-[12%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(104,158,255,1)_0%,rgba(56,112,255,0.82)_22%,rgba(24,70,255,0.34)_52%,rgba(0,0,0,0)_76%)] blur-[96px] mix-blend-screen" />
        <div className="absolute right-[-16%] top-[2%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(145,108,255,0.98)_0%,rgba(87,90,255,0.76)_24%,rgba(50,53,186,0.3)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
        <div className="absolute left-[-18%] top-[26%] h-168 w-2xl rounded-full bg-[radial-gradient(circle,rgba(98,156,255,1)_0%,rgba(55,118,255,0.8)_24%,rgba(25,72,255,0.34)_54%,rgba(0,0,0,0)_78%)] blur-[108px] mix-blend-screen" />
        <div className="absolute right-[-14%] top-[34%] h-144 w-xl rounded-full bg-[radial-gradient(circle,rgba(101,160,255,0.96)_0%,rgba(54,111,255,0.72)_24%,rgba(25,71,236,0.28)_56%,rgba(0,0,0,0)_78%)] blur-[96px] mix-blend-screen" />
        <div className="absolute left-[-14%] top-[48%] h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(144,96,255,0.96)_0%,rgba(92,74,255,0.68)_24%,rgba(54,42,188,0.24)_56%,rgba(0,0,0,0)_78%)] blur-[92px] mix-blend-screen" />
        <div className="absolute right-[-12%] top-[58%] h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(152,104,255,0.96)_0%,rgba(94,77,255,0.7)_24%,rgba(53,40,190,0.26)_56%,rgba(0,0,0,0)_78%)] blur-[94px] mix-blend-screen" />
        <div className="absolute left-[-16%] top-[72%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(106,162,255,0.96)_0%,rgba(56,114,255,0.72)_24%,rgba(28,70,236,0.26)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
        <div className="absolute right-[-18%] top-[82%] h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(148,104,255,0.92)_0%,rgba(92,74,255,0.66)_24%,rgba(51,40,186,0.22)_56%,rgba(0,0,0,0)_78%)] blur-[104px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[120px_120px]" />
      </div>

      <div className="relative z-10">
        <HeroSlider />
        <div className="relative">
          <SectionConnector />
          <ScrollReveal direction="up" delay={100}>
            <IntroSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <ServicesSection />
          </ScrollReveal>
        </div>
        <ScrollReveal direction="fade" delay={150}>
          <ClientsSection />
        </ScrollReveal>
        <ScrollReveal direction="fade" delay={150}>
          <CertificationsSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <AwsSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <CertifiedExcellence />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <ProductsSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <FeaturedWorks />
        </ScrollReveal>
        <ScrollReveal direction="fade" delay={200}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <CTASection />
        </ScrollReveal>
      </div>
    </main>
  );
}
