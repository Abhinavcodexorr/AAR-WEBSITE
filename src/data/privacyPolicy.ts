import type { LegalPageData } from "./legalPageTypes";

export const privacyPolicyPage: LegalPageData = {
  hero: {
    badge: "Legal",
    headline: {
      line1: "Privacy",
      gradient: "Policy",
    },
    subtext:
      "How we collect, use, and protect your information when you visit our website or contact our team.",
  },
  effectiveDate: "July 6, 2026",
  intro: [
    "Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
    "By using our website, you agree to the practices described in this Privacy Policy.",
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      subsections: [
        {
          title: "Information You Provide",
          intro:
            "When you contact us through our website, we may collect information including:",
          items: [
            "Full Name",
            "Company Name",
            "Email Address",
            "Phone Number",
            "Industry or Business Information",
            "Project or Research Requirements",
            "Any additional information you choose to provide",
          ],
        },
        {
          title: "Automatically Collected Information",
          intro:
            "When you browse our website, we may automatically collect certain technical information, including:",
          items: [
            "IP address",
            "Browser type",
            "Device information",
            "Operating system",
            "Pages visited",
            "Date and time of visits",
            "Referral sources",
            "General usage statistics",
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "2. How We Use Your Information",
      paragraphs: ["We use the information we collect to:"],
      items: [
        "Respond to inquiries.",
        "Provide research and consulting services.",
        "Understand your business requirements.",
        "Improve our website and user experience.",
        "Communicate regarding our services.",
        "Maintain website security.",
        "Comply with legal obligations.",
        "We do not sell your personal information.",
      ],
    },
    {
      id: "cookies",
      title: "3. Cookies",
      paragraphs: ["Our website may use cookies and similar technologies to:"],
      items: [
        "Improve website functionality.",
        "Analyze website traffic.",
        "Remember user preferences.",
        "Enhance user experience.",
      ],
      paragraphsAfter: [
        "You may disable cookies through your browser settings; however, some website features may not function properly.",
      ],
    },
    {
      id: "sharing-of-information",
      title: "4. Sharing of Information",
      paragraphs: ["We may share information only when necessary:"],
      items: [
        "With trusted service providers assisting in website operations.",
        "To comply with applicable laws or legal requests.",
        "To protect our legal rights or prevent fraud.",
        "We do not sell or rent your personal information to third parties.",
      ],
    },
    {
      id: "data-security",
      title: "5. Data Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.",
        "While we strive to protect your information, no method of internet transmission or electronic storage is completely secure.",
      ],
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      paragraphs: ["We retain personal information only for as long as necessary to:"],
      items: [
        "Respond to inquiries.",
        "Deliver requested services.",
        "Meet legal and regulatory obligations.",
        "Resolve disputes.",
        "Enforce our agreements.",
      ],
    },
    {
      id: "your-rights",
      title: "7. Your Rights",
      paragraphs: [
        "Depending on applicable privacy laws, you may have the right to:",
      ],
      items: [
        "Request access to your personal information.",
        "Request correction of inaccurate information.",
        "Request deletion of your personal information.",
        "Withdraw consent where applicable.",
        "Request restrictions on processing.",
      ],
      paragraphsAfter: [
        "To exercise these rights, please contact us using the information available on our Contact Us page.",
      ],
    },
    {
      id: "third-party-services",
      title: "8. Third-Party Services",
      paragraphs: [
        "Our website may use third-party tools such as website analytics or embedded services. These providers may collect information according to their own privacy policies.",
        "We encourage you to review their respective privacy practices.",
      ],
    },
    {
      id: "childrens-privacy",
      title: "9. Children's Privacy",
      paragraphs: [
        "Our website is intended for business users and is not directed toward individuals under the age of 18. We do not knowingly collect personal information from children.",
      ],
    },
    {
      id: "changes-to-policy",
      title: "10. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or website functionality.",
        "The updated version will be published on this page with a revised effective date.",
      ],
    },
    {
      id: "contact-us",
      title: "11. Contact Us",
      paragraphs: [
        "If you have any questions regarding this Privacy Policy or wish to exercise your privacy rights, please contact us using the details provided on our Contact Us page.",
        "We will make reasonable efforts to respond to your request in a timely manner.",
      ],
    },
  ],
};
