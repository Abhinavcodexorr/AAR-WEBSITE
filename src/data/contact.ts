export const siteTagline = "Strategic Market Research & Business Intelligence";

export const contactPageHero = {
  badge: "Contact Us",
  headline: {
    line1: "Let's start a",
    gradient: "conversation",
  },
  subtext:
    "Every successful strategy begins with the right insight. Let's discuss how AAR Insights and Research can support your organization's growth.",
};

export const contactInfo = {
  email: {
    label: "Email",
    value: "presales@aarinsights.com",
    href: "mailto:presales@aarinsights.com",
  },
  phone: {
    label: "Phone",
    value: "+91 96677 82298",
    href: "tel:+919667782298",
  },
  location: {
    label: "Location",
    value: "Noida, Uttar Pradesh, India",
  },
  responseCommitment: {
    title: "Response Commitment",
    description:
      "We respond to all enquiries within 24 business hours with a tailored outline of how we can support your research objectives.",
  },
};

export const contactForm = {
  title: "Schedule a Consultation",
  description:
    "Fill in the form and our team will be in touch to discuss your research requirements and schedule a consultation.",
  submitLabel: "Schedule a Consultation",
  successMessage:
    "Thank you! Our team will respond within 24 business hours to discuss your research requirements.",
  fields: {
    fullName: { label: "Full Name *", placeholder: "Your full name" },
    companyName: { label: "Company Name *", placeholder: "Your organization" },
    designation: { label: "Designation", placeholder: "Your role" },
    businessEmail: { label: "Business Email *", placeholder: "you@company.com" },
    phoneNumber: { label: "Phone", placeholder: "00000 00000" },
    industry: { label: "Industry", placeholder: "Select industry" },
    researchRequirement: {
      label: "Research Requirement",
      placeholder: "Select service",
    },
    message: {
      label: "Message / Research Brief",
      placeholder:
        "Describe your research objectives, key questions, timeline, and any context that will help us prepare.",
    },
  },
};

export const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "US / Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+61", country: "Australia" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "Singapore" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+82", country: "South Korea" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+27", country: "South Africa" },
  { code: "+55", country: "Brazil" },
] as const;

export const industryOptions = [
  "Technology & SaaS",
  "Healthcare & Life Sciences",
  "Manufacturing & Industrial",
  "Banking & Financial Services",
  "Consumer & Retail",
  "Automotive",
  "Education",
  "Energy & Utilities",
  "Logistics & Supply Chain",
  "Telecom & Media",
  "Consulting & Professional Services",
  "Other",
];

export const researchRequirementOptions = [
  "Market Research",
  "Competitive Intelligence",
  "Customer Insights",
  "Industry Research",
  "Go-To-Market Strategy",
  "Business Intelligence & Analytics",
  "Other",
];
