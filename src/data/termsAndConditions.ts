import type { LegalPageData } from "./legalPageTypes";

export const termsAndConditionsPage: LegalPageData = {
  hero: {
    badge: "Legal",
    headline: {
      line1: "Terms &",
      gradient: "Conditions",
    },
    subtext:
      "The rules and guidelines that apply when you access or use our website and services.",
  },
  effectiveDate: "July 6, 2026",
  intro: [
    "Welcome to our website. By accessing or using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using our website.",
  ],
  sections: [
    {
      id: "about-our-services",
      title: "1. About Our Services",
      paragraphs: [
        "We provide research, market intelligence, industry analysis, business insights, and case studies designed to support strategic decision-making. The information available on this website is intended for general informational purposes only.",
      ],
    },
    {
      id: "intellectual-property",
      title: "2. Intellectual Property",
      paragraphs: [
        "All content available on this website, including but not limited to research reports, case studies, articles, text, graphics, icons, images, logos, documents, and other materials, is the exclusive property of the website owner unless otherwise stated.",
        "You may not:",
      ],
      items: [
        "Copy, reproduce, distribute, or publish any content without prior written permission.",
        "Modify or create derivative works from our content.",
        "Use our content for commercial purposes without authorization.",
      ],
      paragraphsAfter: [
        "You may reference our publicly available content with proper attribution.",
      ],
    },
    {
      id: "accuracy-of-information",
      title: "3. Accuracy of Information",
      paragraphs: [
        "We strive to provide accurate, current, and reliable information. However, we do not guarantee that all information is complete, accurate, or up to date at all times.",
        "Business conditions, industries, regulations, and markets change frequently, and users should independently verify any information before making business or investment decisions.",
      ],
    },
    {
      id: "no-professional-advice",
      title: "4. No Professional Advice",
      paragraphs: [
        "The research, reports, case studies, and insights provided on this website are intended for informational purposes only and should not be considered legal, financial, accounting, investment, or professional consulting advice.",
        "Users should seek independent professional advice appropriate to their specific circumstances.",
      ],
    },
    {
      id: "user-submissions",
      title: "5. User Submissions",
      paragraphs: ["When you submit information through our contact form, you agree that:"],
      items: [
        "The information provided is accurate and truthful.",
        "You have the authority to submit the information.",
        "You will not submit unlawful, offensive, or misleading content.",
      ],
      paragraphsAfter: [
        "We reserve the right to ignore or remove inappropriate submissions.",
      ],
    },
    {
      id: "third-party-links",
      title: "6. Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites for reference or convenience.",
        "We are not responsible for the content, policies, or practices of any external websites.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "7. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:",
      ],
      items: [
        "Use of this website.",
        "Reliance on information published on this website.",
        "Temporary interruptions or website downtime.",
        "Technical errors or inaccuracies.",
      ],
    },
    {
      id: "website-availability",
      title: "8. Website Availability",
      paragraphs: [
        "We aim to maintain uninterrupted access to our website. However, we do not guarantee continuous availability and may suspend or modify the website without prior notice.",
      ],
    },
    {
      id: "privacy",
      title: "9. Privacy",
      paragraphs: [
        "Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.",
      ],
    },
    {
      id: "changes-to-terms",
      title: "10. Changes to These Terms",
      paragraphs: [
        "We reserve the right to update these Terms & Conditions at any time. Updated versions will be posted on this page with the revised effective date.",
        "Continued use of the website constitutes acceptance of the updated terms.",
      ],
    },
    {
      id: "governing-law",
      title: "11. Governing Law",
      paragraphs: [
        "These Terms & Conditions shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction in which our business operates.",
      ],
    },
    {
      id: "contact-us",
      title: "12. Contact Us",
      paragraphs: [
        "If you have any questions regarding these Terms & Conditions, please contact us using the contact information provided on our Contact Us page.",
      ],
    },
  ],
};
