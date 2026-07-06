export type CaseStudyItem = {
  id: string;
  category: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  image: string;
  reversed?: boolean;
};

export const caseStudiesHero = {
  badge: "Case Studies",
  headline: {
    line1: "Research that delivered",
    gradient: "real business impact",
  },
  subtext:
    "Four examples of how we transformed complex questions into actionable intelligence — and measurable results for our clients.",
};

export const caseStudies: CaseStudyItem[] = [
  {
    id: "saas-market-expansion",
    category: "Technology & SaaS",
    title: "Market Expansion Strategy for a SaaS Provider",
    challenge:
      "A high-growth SaaS company needed clarity on which geographies offered the best opportunity and how to prioritize market entry sequence.",
    approach:
      "Multi-market assessment, evaluating attractiveness across six regions, analyzing competitive density, regulatory requirements, and customer adoption patterns.",
    outcome:
      "Phased expansion strategy supporting confident, evidence-backed market entry with clear regional prioritization and a validated go-to-market roadmap.",
    tags: ["Market Entry", "Market Sizing", "Competitive Analysis"],
    image: "/images/case-studies/saas-expansion.png",
  },
  {
    id: "real-estate-sentiment",
    category: "Real Estate",
    title: "Buyer & Investor Sentiment Study for a Real Estate Developer",
    challenge:
      "A leading residential developer needed to understand shifting buyer priorities and investor sentiment across three cities before launching a premium project pipeline.",
    approach:
      "CATI surveys with prospective homebuyers, in-depth interviews with HNI investors, and focus group discussions exploring price sensitivity, amenity preferences, and location trade-offs.",
    outcome:
      "Informed product configuration, pricing tiers, and marketing messaging for two flagship launches — reducing unsold inventory risk and shortening the pre-launch sales cycle.",
    tags: ["CATI Surveys", "In-depth Interviews", "Focus Groups", "B2B Research"],
    image: "/images/case-studies/real-estate.png",
    reversed: true,
  },
  {
    id: "retail-cx-transformation",
    category: "Consumer & Retail",
    title: "Customer Experience Transformation for a Retail Brand",
    challenge:
      "A national retail brand facing increasing churn lacked granular understanding of where in the customer journey the experience was breaking down.",
    approach:
      "VoC program including ethnographic research, exit surveys, NPS studies, and journey mapping across digital and physical touchpoints.",
    outcome:
      "Improved customer satisfaction scores and reduced churn through targeted recommendations enabling more effective retention programs.",
    tags: ["Customer Insights", "Journey Mapping", "VoC"],
    image: "/images/case-studies/retail.jpg",
  },
  {
    id: "investor-industry-intelligence",
    category: "Financial Services",
    title: "Industry Intelligence Program for an Investor Group",
    challenge:
      "A private equity group needed continuous, structured intelligence on emerging sector developments to inform deal evaluation and portfolio strategy.",
    approach:
      "Ongoing monitoring program covering 4 key sectors, delivering bi-monthly intelligence briefs, quarterly trend analyses, and on-demand deep-dive reports.",
    outcome:
      "Enabled more informed and timely investment decisions across the portfolio with a continuously updated intelligence backbone.",
    tags: ["Industry Research", "Market Intelligence", "Investment"],
    image: "/images/case-studies/investor.png",
    reversed: true,
  },
];
