import InfoPageLayout from "@/components/InfoPageLayout";

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "We may collect personal details you share with us through forms, calls, or direct communication, including your name, email address, phone number, and project requirements.",
      "We may also collect limited technical information such as browser type, device details, and anonymized usage data to improve site performance and user experience.",
    ],
  },
  {
    heading: "How We Use Information",
    body: [
      "We use the information you provide to respond to enquiries, discuss project requirements, prepare proposals, and deliver our services.",
      "We may also use contact information to send relevant updates related to your enquiry, service request, or ongoing engagement with AGS.",
    ],
  },
  {
    heading: "Data Protection",
    body: [
      "We take reasonable administrative and technical measures to protect your information from unauthorized access, misuse, or disclosure.",
      "While we aim to use secure systems and best practices, no online transmission or storage method can be guaranteed as fully secure.",
    ],
  },
  {
    heading: "Third-Party Services",
    body: [
      "We may use trusted third-party tools for hosting, analytics, communication, or project operations. These providers may process data only as needed to support our services.",
      "We do not sell personal information to third parties.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <InfoPageLayout
      eyebrow="AGS Legal"
      title="Privacy Policy"
      intro="This is a sample privacy policy page for demonstration purposes. It outlines the kind of information AGS may collect and how that information may be handled."
      sections={sections}
    />
  );
}
