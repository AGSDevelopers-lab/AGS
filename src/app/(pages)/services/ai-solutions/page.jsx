"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

const AI_SOLUTIONS_DATA = {
  heroImage: "/services-heroes/ai-solutions-hero.png",
  titleGradient: "AI",
  titleRest: "Solutions",
  subtitle:
    "Build the future with data-driven intelligence. AI systems to automate complex workflows and scale enterprise efficiency.",
  serviceCategory: "AI Consulting & Training",
  descriptionHeading: "Service Description",
  descriptionText:
    "AI Solutions leverage machine learning, artificial intelligence, and intelligent automation to help organizations optimize operational processes, extract actionable data insights, and elevate customer experience. From generative AI tools and smart chatbots to predictive analytics models, we integrate cutting-edge AI technologies tailored to your core business goals.",
  checklistItems: [
    "Custom Machine Learning & Predictive Models",
    "Generative AI & LLM Integration",
    "AI-Powered Chatbots & Conversational Agents",
    "Process Automation & Intelligent Document Processing",
    "Customer Personalization Engines",
    "Data Analytics & Pattern Recognition",
  ],
  benefitsHeading: "Benefits",
  benefits: [
    {
      title: "Automated Routine Workflows:",
      desc: "Frees human staff from repetitive operational tasks using intelligent task automation.",
    },
    {
      title: "24/7 Smart Customer Engagement:",
      desc: "Instant automated support via AI agents reduces response times and boosts user satisfaction.",
    },
    {
      title: "Data-Driven Predictive Insights:",
      desc: "Forecasts trends, user behavior, and operational needs through historical data pattern analysis.",
    },
    {
      title: "Hyper-Personalized Experiences:",
      desc: "Delivers individualized content, product suggestions, and recommendations to each customer automatically.",
    },
    {
      title: "Enhanced Decision Quality:",
      desc: "Evaluates large datasets rapidly to inform executive strategies with data-backed precision.",
    },
    {
      title: "Competitive Market Edge:",
      desc: "Modernizes product offerings and operational capabilities by utilizing industry-leading artificial intelligence technologies.",
    },
  ],
};

export default function AiSolutionsServicePage() {
  return <ServicePageTemplate {...AI_SOLUTIONS_DATA} />;
}

