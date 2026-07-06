export type IndustryItem = {
  id: string;
  title: string;
  tags: string[];
  image: string;
};

export const industriesHero = {
  badge: "Industries",
  headline: {
    line1: "Cross-sector intelligence",
    line2Prefix: "across",
    line2Gradient: "11 industries",
  },
  subtext:
    "Diverse industry experience enables cross-sector perspectives, best practices, and contextual understanding in every project.",
};

export const industries: IndustryItem[] = [
  {
    id: "technology-saas",
    title: "Technology & SaaS",
    tags: [
      "Product-market fit research",
      "Competitive landscape",
      "Customer segmentation",
      "Market sizing",
    ],
    image: "/images/industries/technology-saas.jpg",
  },
  {
    id: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    tags: [
      "Patient & provider insights",
      "Regulatory landscape",
      "Market access analysis",
      "Competitive benchmarking",
    ],
    image: "/images/industries/healthcare-life-sciences.jpg",
  },
  {
    id: "manufacturing-industrial",
    title: "Manufacturing & Industrial",
    tags: [
      "Supply chain intelligence",
      "B2B buyer behavior",
      "Market opportunity",
      "Industry trend forecasting",
    ],
    image: "/images/industries/manufacturing-industrial.jpg",
  },
  {
    id: "banking-financial-services",
    title: "Banking, Financial Services & Insurance",
    tags: [
      "Customer experience",
      "Competitive positioning",
      "Product opportunity",
      "Regulatory intelligence",
    ],
    image: "/images/industries/banking-financial-services.jpg",
  },
  {
    id: "consumer-retail",
    title: "Consumer & Retail",
    tags: [
      "Consumer behavior",
      "Shopper journey",
      "Brand health tracking",
      "Category & trend analysis",
    ],
    image: "/images/industries/consumer-retail.jpg",
  },
  {
    id: "automotive",
    title: "Automotive",
    tags: [
      "EV adoption research",
      "Customer preferences",
      "Distribution intelligence",
      "Market opportunity sizing",
    ],
    image: "/images/industries/automotive.jpg",
  },
  {
    id: "consulting-professional-services",
    title: "Consulting & Professional Services",
    tags: [
      "Market assessments",
      "Industry benchmarking",
      "Competitive mapping",
      "Growth analysis",
    ],
    image: "/images/industries/consulting-professional-services.jpg",
  },
  {
    id: "education",
    title: "Education",
    tags: [
      "Learner needs assessment",
      "Ed-tech market analysis",
      "Institutional benchmarking",
      "Program demand research",
    ],
    image: "/images/industries/education.jpg",
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    tags: [
      "Energy transition research",
      "Renewable market analysis",
      "Regulatory intelligence",
      "Stakeholder insights",
    ],
    image: "/images/industries/energy-utilities.jpg",
  },
  {
    id: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    tags: [
      "Ecosystem mapping",
      "Customer expectation",
      "Market opportunity",
      "Competitive intelligence",
    ],
    image: "/images/industries/logistics-supply-chain.jpg",
  },
  {
    id: "telecom-media",
    title: "Telecom & Media",
    tags: [
      "Consumer behavior",
      "Digital consumption",
      "OTT & content analysis",
      "Competitive benchmarking",
    ],
    image: "/images/industries/telecom-media.jpg",
  },
];
