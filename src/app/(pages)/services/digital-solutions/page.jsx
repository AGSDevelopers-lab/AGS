"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

const DIGITAL_SOLUTIONS_DATA = {
  heroImage: "/services-heroes/digital-solutions-hero.png",
  titleGradient: "Digital",
  titleRest: "Solutions",
  subtitle:
    "Digital marketing thrives to help brands virtually to grow an online presence and gain recognition. As a spearheading digital marketing agency, we transform workflows and scale businesses.",
  serviceCategory: "Digital Solutions",
  descriptionHeading: "Service Description",
  descriptionText:
    "Digital Solutions empower businesses to transform traditional operations into modern, automated, and cloud-first digital ecosystems. We analyze existing workflows to design, build, and integrate custom digital products, workflow automation systems, and enterprise cloud solutions that increase efficiency, optimize productivity, and drive modern business growth.",
  checklistItems: [
    "Business Workflow & Process Automation",
    "Enterprise Cloud Migration & Integration",
    "Custom Web & Internal Management Systems",
    "Legacy System Modernization",
    "Data Migration & API Connectivity",
    "Digital Transformation Consulting",
  ],
  benefitsHeading: "Benefits",
  benefits: [
    {
      title: "Streamlined Operational Efficiency:",
      desc: "Eliminates repetitive manual tasks by automating complex business workflows and data routines.",
    },
    {
      title: "Seamless Cloud Scalability:",
      desc: "Migrates core business infrastructure to flexible cloud environments for instant scalability and remote access.",
    },
    {
      title: "Data Centralization:",
      desc: "Connects disparate operational tools into a single, unified system for accurate real-time reporting.",
    },
    {
      title: "Reduced Operational Overhead:",
      desc: "Decreases administrative costs and minimizes human errors across daily workflows.",
    },
    {
      title: "Improved Decision-Making:",
      desc: "Provides actionable real-time insights and analytics derived from connected business processes.",
    },
    {
      title: "Future-Proof Business Model:",
      desc: "Upgrades legacy systems so your technical infrastructure easily adapts to market changes.",
    },
  ],
};

export default function DigitalSolutionsServicePage() {
  return <ServicePageTemplate {...DIGITAL_SOLUTIONS_DATA} />;
}

