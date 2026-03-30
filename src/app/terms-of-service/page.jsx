import InfoPageLayout from "@/components/InfoPageLayout";

const sections = [
  {
    heading: "Use of Services",
    body: [
      "These sample terms describe the general expectations for working with AGS. By using this website or engaging our services, you agree to use them lawfully and respectfully.",
      "Any project timelines, deliverables, and commercial terms would typically be finalized separately in proposals, contracts, or written agreements.",
    ],
  },
  {
    heading: "Client Responsibilities",
    body: [
      "Clients are expected to provide accurate information, timely feedback, and all required assets or approvals needed to move a project forward.",
      "Delays caused by missing inputs, changes in scope, or approval bottlenecks may affect timelines and delivery plans.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "Unless otherwise agreed in writing, project materials, designs, code, and deliverables may remain subject to the ownership and licensing terms defined in the final commercial agreement.",
      "Third-party assets, licensed software, or platform-specific materials may remain governed by their own separate terms.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "This demo page does not create legal obligations, but a real terms page would typically explain service limitations, warranties, and liability boundaries.",
      "For any production website, final legal language should be reviewed by a qualified legal professional.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <InfoPageLayout
      eyebrow="AGS Legal"
      title="Terms of Service"
      intro="This is a placeholder terms page designed to match the site. It gives a simple outline of the kinds of service terms a digital solutions company may provide."
      sections={sections}
    />
  );
}
