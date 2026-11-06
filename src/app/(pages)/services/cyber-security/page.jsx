"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";

const CYBER_SECURITY_DATA = {
  heroImage: "/services-heroes/cyber-security-hero.png",
  titleGradient: "Cyber",
  titleRest: "Security & VAPT",
  subtitle:
    "Safeguard your digital infrastructure, applications, and enterprise assets with proactive vulnerability testing and resilient defense architectures.",
  serviceCategory: "Cyber Security & VAPT",
  descriptionHeading: "Service Description",
  descriptionText:
    "Vulnerability Assessment and Penetration Testing (VAPT) and Cyber Security services safeguard your digital assets against evolving threats, data breaches, and unauthorized access. Through rigorous security audits, proactive threat identification, simulated cyberattacks, and compliance checks, we protect your infrastructure, networks, and applications from end-to-end risks.",
  checklistItems: [
    "Automated & Manual Vulnerability Assessments",
    "Penetration Testing (Web, Network, & Mobile)",
    "Infrastructure & Security Code Audits",
    "Data Protection & Encryption Protocols",
    "Compliance Alignment & Governance Frameworks",
    "Remediation Support & Incident Prevention",
  ],
  benefitsHeading: "Benefits",
  benefits: [
    {
      title: "Proactive Vulnerability Identification:",
      desc: "Pinpoints security flaws in applications and networks before malicious hackers can exploit them.",
    },
    {
      title: "Data & Asset Protection:",
      desc: "Secures sensitive customer, financial, and proprietary data against unauthorized exposure or leaks.",
    },
    {
      title: "Regulatory Compliance Assurance:",
      desc: "Helips fulfill industry security standards and regulatory mandates (such as ISO 27001, GDPR, HIPAA, and PCI-DSS).",
    },
    {
      title: "Preserved Brand Reputation:",
      desc: "Protects corporate reputation and maintains client trust by preventing costly security breaches.",
    },
    {
      title: "Minimized Business Downtime:",
      desc: "Identifies infrastructure weaknesses early to prevent operational disruptions caused by cyber threats.",
    },
    {
      title: "Actionable Remediation Guidance:",
      desc: "Delivers detailed threat reports paired with step-by-step developer guidelines for rapid risk fixing.",
    },
  ],
};

export default function CyberSecurityServicePage() {
  return <ServicePageTemplate {...CYBER_SECURITY_DATA} />;
}

