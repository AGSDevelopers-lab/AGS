import InfoPageLayout from "@/components/InfoPageLayout";

const sections = [
  {
    heading: "What Happens Next",
    body: [
      "Our team will review your enquiry and reach out with the next steps based on your service needs, timeline, and project goals.",
      "If your request is time-sensitive, we may prioritize the conversation and respond with the most relevant point of contact.",
    ],
  },
  {
    heading: "How We Usually Work",
    body: [
      "We typically begin with a short discovery conversation, align on scope, and then recommend the right strategy, solution, or build path.",
      "From there, we can move into planning, design, development, or growth support depending on what your business needs most.",
    ],
  },
];

export default function ThankYouPage() {
  return (
    <InfoPageLayout
      eyebrow="AGS Enquiry"
      title="Thank You"
      intro="Your enquiry has been received. We appreciate your interest in AGS and will get back to you soon."
      sections={sections}
      ctaHref="/"
      ctaLabel="Return to Home"
    />
  );
}
