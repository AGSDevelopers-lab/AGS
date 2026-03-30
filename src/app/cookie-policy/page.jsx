import InfoPageLayout from "@/components/InfoPageLayout";

const sections = [
  {
    heading: "What Cookies Are",
    body: [
      "Cookies are small text files placed on a device to help websites remember preferences, understand usage, and improve browsing experiences.",
      "Some cookies are essential for site functionality, while others support analytics, personalization, or performance monitoring.",
    ],
  },
  {
    heading: "How We May Use Cookies",
    body: [
      "A site like AGS may use cookies to understand page visits, improve content performance, and maintain a smoother user journey.",
      "We may also use similar technologies to measure campaign effectiveness or optimize digital experiences across devices.",
    ],
  },
  {
    heading: "Managing Preferences",
    body: [
      "Most browsers allow you to manage, block, or delete cookies through browser settings. Disabling some cookies may affect the way certain features behave.",
      "If a cookie consent tool is added in the future, it may allow visitors to manage preferences directly on the site.",
    ],
  },
  {
    heading: "Policy Updates",
    body: [
      "This placeholder page may be updated as the website evolves, especially if analytics, integrations, or additional marketing tools are introduced.",
      "For a live business deployment, the final cookie policy should reflect the exact tools and tracking systems in use.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <InfoPageLayout
      eyebrow="AGS Legal"
      title="Cookie Policy"
      intro="This sample cookie policy explains in simple terms how cookies and related technologies may be used to support website functionality and performance."
      sections={sections}
    />
  );
}
