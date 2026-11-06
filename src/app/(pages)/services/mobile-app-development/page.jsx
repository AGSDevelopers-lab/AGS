"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

const MOBILE_APP_DATA = {
  heroImage: "/services-heroes/mobile-app-hero.png",
  titleGradient: "Mobile",
  titleRest: "App Development",
  subtitle:
    "End-to-end digital solutions, from native and cross-platform mobile apps to web and scalable cloud architectures, engineered for modern business.",
  serviceCategory: "Web App Development",
  descriptionHeading: "Service Description",
  descriptionText:
    "Mobile development refers to the process of creating software applications specifically designed to run on mobile devices, such as smartphones and tablets. This field encompasses various platforms, including iOS (Apple), Android (Google), and others, and it plays a crucial role in shaping the way people interact with technology in our increasingly mobile-driven world. Mobile developers work on designing, coding, testing, and optimizing mobile apps to provide users with seamless and efficient digital experiences on their handheld devices.",
  checklistItems: [
    "Discovery and Planning",
    "Design and User Experience",
    "Development",
    "Testing",
    "Deployment",
    "Maintenance and Updates",
  ],
  benefitsHeading: "Benefits",
  benefits: [
    {
      title: "Expanded Market Reach:",
      desc: "Mobile apps enable businesses to reach a broader audience as smartphones and tablets are ubiquitous across the globe.",
    },
    {
      title: "Enhanced User Experience:",
      desc: "Mobile apps provide an intuitive, fluid experience, leading to higher retention, engagement, and customer satisfaction.",
    },
    {
      title: "Improved Brand Loyalty:",
      desc: "A well-designed and reliable mobile app fosters lasting brand loyalty and continuous customer interaction.",
    },
    {
      title: "Increased Sales and Revenue:",
      desc: "Serves as a powerful recurring revenue channel through in-app transactions, subscriptions, and custom integrations.",
    },
    {
      title: "Access to Device Features:",
      desc: "Leverages native hardware capabilities like GPS, biometrics, camera, and sensors for bespoke user journeys.",
    },
    {
      title: "Offline Access & Push Alerts:",
      desc: "Maintains critical offline functionality and delivers targeted real-time push notifications to drive user retention.",
    },
  ],
};

export default function MobileAppServicePage() {
  return <ServicePageTemplate {...MOBILE_APP_DATA} />;
}

