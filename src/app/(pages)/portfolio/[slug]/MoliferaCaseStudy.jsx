"use client"

import { moliferaCaseStudy } from "@/data/caseStudies"
import CaseStudyHero from "@/components/case-study/CaseStudyHero"
import AboutSection from "@/components/case-study/AboutSection"
import ProblemStatement from "@/components/case-study/ProblemStatement"
import ProblemSolution from "@/components/case-study/ProblemSolution"
import TargetAudience from "@/components/case-study/TargetAudience"
import DesignProcess from "@/components/case-study/DesignProcess"
import DesignStrategy from "@/components/case-study/DesignStrategy"
import SiteMap from "@/components/case-study/SiteMap"
import InfoArchitecture from "@/components/case-study/InfoArchitecture"
import VisualDesignSystem from "@/components/case-study/VisualDesignSystem"
import TypographySection from "@/components/case-study/TypographySection"
import StyleGuide from "@/components/case-study/StyleGuide"
import IndustriesSection from "@/components/case-study/IndustriesSection"
import MockupDisplay from "@/components/case-study/MockupDisplay"
import OtherPages from "@/components/case-study/OtherPages"
import MobileFirst from "@/components/case-study/MobileFirst"
import CaseStudyCTA from "@/components/case-study/CaseStudyCTA"

const study = moliferaCaseStudy

export default function CaseStudyPage() {
  return (
    <main>
      {/* 1. Hero */}
      <CaseStudyHero data={study.hero} />

      {/* 2. About */}
      <AboutSection data={study.about} />

      {/* 3. Problem Statement */}
      <ProblemStatement data={study.problemStatement} />

      {/* 3.5 Problem Solution */}
      <ProblemSolution data={study.problemSolution} />

      {/* 4. Target Audience */}
      <TargetAudience data={study.targetAudience} />

      {/* 5. Design Process */}
      <DesignProcess data={study.designProcess} />

      {/* 6. Design Strategy */}
      <DesignStrategy data={study.designStrategy} />

      {/* 7. Site Map */}
      <SiteMap data={study.siteMap} />

      {/* 8. Information Architecture */}
      <InfoArchitecture data={study.infoArchitecture} />

      {/* 9. Visual Design System */}
      <VisualDesignSystem data={study.visualDesignSystem} />

      {/* 10. Typography */}
      <TypographySection data={study.typography} />

      {/* 11. Style Guide */}
      <StyleGuide data={study.styleGuide} />

      {/* 12. Industries We Serve */}
      <IndustriesSection data={study.industries} />

      {/* 13. Visual Design (Mockups) */}
      <MockupDisplay data={study.visualDesign} />

      {/* 14. Other Pages */}
      <OtherPages data={study.otherPages} />

      {/* 15. Mobile-First */}
      <MobileFirst data={study.mobileFirst} />

      {/* 16. Thanks for Watching */}
      <CaseStudyCTA data={study.closing} />
    </main>
  )
}
