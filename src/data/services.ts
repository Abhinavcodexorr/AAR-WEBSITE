export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  reversed?: boolean;
};

export const servicesHero = {
  badge: "Our Services",
  headline: {
    line1: "Research solutions built",
    line2Prefix: "around",
    line2Gradient: "your business",
  },
  subtext:
    "Six core capabilities spanning the full spectrum of market intelligence — every engagement customized to your specific challenge.",
};

export const services: ServiceItem[] = [
  {
    id: "market-research",
    title: "Market Research",
    icon: "/images/services/icon-market-research.svg",
    description:
      "Gain comprehensive understanding of markets, customers, competitors, and industry dynamics through customized research programs that support strategic business decisions.",
    features: [
      "Market sizing & TAM/SAM/SOM",
      "Demand forecasting & attractiveness",
      "Product validation & concept testing",
      "Customer segmentation studies",
      "Pricing strategy research",
      "Brand perception assessments",
    ],
  },
  {
    id: "competitive-intelligence",
    title: "Competitive Intelligence",
    icon: "/images/services/icon-competitive-intelligence.svg",
    description:
      "Stay ahead with structured competitor analysis, market monitoring, strategic benchmarking, pricing intelligence, and positioning assessments that help you anticipate shifts and strengthen advantage.",
    features: [
      "Competitor profiling & tracking",
      "Strategic benchmarking studies",
      "Market monitoring & alerting",
      "Pricing intelligence analysis",
      "SWOT & positioning reviews",
      "Digital footprint assessments",
    ],
    reversed: true,
  },
  {
    id: "customer-insights",
    title: "Customer Insights",
    icon: "/images/services/icon-customer-insights.svg",
    description:
      "Understand what truly drives customer decisions, loyalty, satisfaction, and purchasing behavior through journey mapping, persona development, and behavioral analysis.",
    features: [
      "Voice of Customer (VoC) programs",
      "Customer journey mapping",
      "NPS & satisfaction measurement",
      "Behavioral & preference analysis",
      "Persona development",
      "Experience optimization",
    ],
  },
  {
    id: "industry-research",
    title: "Industry Research",
    icon: "/images/services/icon-industry-research.svg",
    description:
      "Develop deeper understanding of industry structures, emerging trends, ecosystem developments, regulatory changes, and future growth opportunities for informed strategic planning.",
    features: [
      "Market landscape analysis",
      "Ecosystem & value chain mapping",
      "Emerging technology assessment",
      "Regulatory impact analysis",
      "Trend forecasting",
      "Strategic outlook reports",
    ],
    reversed: true,
  },
  {
    id: "go-to-market",
    title: "Go-To-Market Strategy",
    icon: "/images/services/icon-go-to-market.svg",
    description:
      "Launch products and solutions with confidence through evidence-based research covering segmentation, positioning validation, messaging optimization, and channel strategy.",
    features: [
      "Market segmentation & targeting",
      "Value proposition development",
      "Positioning validation",
      "Messaging optimization",
      "Channel strategy assessment",
      "Launch readiness evaluation",
    ],
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence & Analytics",
    icon: "/images/services/icon-business-intelligence.svg",
    description:
      "Transform fragmented data into meaningful business intelligence through advanced analysis and strategic reporting that supports better decision-making across all business functions.",
    features: [
      "Dashboard development & KPIs",
      "Trend analysis & pattern recognition",
      "Business performance evaluation",
      "Decision support analytics",
      "Forecasting & scenario modeling",
      "Strategic reporting frameworks",
    ],
    reversed: true,
  },
];
