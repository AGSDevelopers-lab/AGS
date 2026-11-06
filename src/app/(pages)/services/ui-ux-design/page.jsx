"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

const UI_UX_DATA = {
  heroImage: "/services-heroes/ui-ux-hero.png",
  titleGradient: "UI/UX",
  titleRest: "& Graphic Design",
  subtitle:
    "Design experiences that resonate. We craft user-centric interfaces and compelling visual identities, from mobile and web products to scalable brand systems.",
  serviceCategory: "UI/UX Design",
  descriptionHeading: "Service Description",
  descriptionText:
    "UI/UX Design refers to the process of crafting digital interfaces and interactions that are visually engaging, highly intuitive, and user-centered. It encompasses research, wireframing, prototyping, and visual design to ensure seamless experiences across mobile, desktop, and web applications. UI/UX designers focus on aligning user needs with business goals to deliver functional, aesthetic, and high-converting digital products.",
  checklistItems: [
    "Research and User Discovery",
    "Wireframing and UX Architecture",
    "UI Visual Design and Branding",
    "Interactive Prototyping",
    "Usability Testing and Iteration",
    "Design System & Developer Handoff",
  ],
  benefitsHeading: "Benefits",
  benefits: [
    {
      title: "Enhanced User Engagement:",
      desc: "Intuitive and visually appealing interfaces keep users engaged and reduce friction during navigation.",
    },
    {
      title: "Higher Conversion Rates:",
      desc: "Strategic UX flows guide users smoothly toward conversion goals, increasing signup and sales performance.",
    },
    {
      title: "Improved Brand Perception:",
      desc: "A polished, modern UI builds trust and projects professionalism across every digital touchpoint.",
    },
    {
      title: "Reduced Development Costs:",
      desc: "Thorough UX research and wireframing resolve usability flaws early, saving time and development expenses later.",
    },
    {
      title: "Consistent Design Scalability:",
      desc: "Building a robust design system ensures design consistency across all product features and future platforms.",
    },
    {
      title: "Accessibility & Inclusivity:",
      desc: "User-centered design standards guarantee your application is accessible and easy to navigate for all users.",
    },
  ],
};

export default function UiUxDesignServicePage() {
  return <ServicePageTemplate {...UI_UX_DATA} />;
}

