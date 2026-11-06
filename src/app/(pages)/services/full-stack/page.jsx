"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

const FULL_STACK_DATA = {
  heroImage: "/full-stack/hero-bg.png",
  titleGradient: "Full",
  titleRest: "Stack Development",
  subtitle:
    "End-to-end digital solutions, from mobile and web apps to scalable cloud-native architectures, engineered for modern business.",
  serviceCategory: "Web Development",
  descriptionHeading: "Service Description",
  descriptionText:
    "Full Stack Development involves end-to-end software creation, handling both front-end visual interfaces and back-end server, database, and API architectures. By unifying client-side interactive design with robust server-side engineering, full stack development delivers scalable, fast, and secure web applications built on modern frameworks tailored to your specific business requirements.",
  checklistItems: [
    "Front-End & Interface Engineering",
    "Back-End Architecture & API Development",
    "Database Design & Optimization",
    "Performance & Load Testing",
    "Cloud Deployment & DevOps Setup",
    "Code Refactoring & Security Auditing",
  ],
  benefitsHeading: "Benefits",
  benefits: [
    {
      title: "End-to-End Synergy:",
      desc: "Seamless integration between user interface design and server-side code ensures cohesive application architecture.",
    },
    {
      title: "Cost & Time Efficiency:",
      desc: "Streamlined development workflows reduce turnaround time and lower overall development expenses.",
    },
    {
      title: "High Scalability:",
      desc: "Built with modern stack architectures designed to handle growing traffic, data loads, and expanded user features effortlessly.",
    },
    {
      title: "Enhanced Performance:",
      desc: "Optimized codebases, efficient database querying, and server caching deliver fast loading speeds.",
    },
    {
      title: "Flexible Customization:",
      desc: "Tailored software logic fits unique business processes without the constraints of off-the-shelf templates.",
    },
    {
      title: "Easier Maintenance:",
      desc: "Unified code structures make future updates, feature extensions, and system troubleshooting significantly simpler.",
    },
  ],
};

export default function FullStackPage() {
  return <ServicePageTemplate {...FULL_STACK_DATA} />;
}
