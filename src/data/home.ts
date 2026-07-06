export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
];

export const topBar = {
  tagline: "Strategic Market Research & Business Intelligence",
  email: "pre-sales@aarinsightsresearch.com",
  phone: "+91 96677 82298",
};

export const hero = {
  badge: "Strategic Research & Intelligence",
  headline: {
    line1: "Market Research &",
    line2: "Business Intelligence for",
    gradient: "confident decisions",
  },
  subtext:
    "Empowering startups, corporates, investors, and consulting firms with market research, competitive intelligence, customer insights, and strategic business intelligence.",
  cta: "Talk to Our Team",
  stats: [
    { value: "11+", label: "Industries Served" },
    { value: "6", label: "Service Areas" },
    { value: "100%", label: "Customized Engagements" },
  ],
  pills: [
    { label: "Market Sizing", icon: "/images/hero/market-sizing.svg" },
    { label: "Competitive Intel", icon: "/images/hero/competitive-intel.svg" },
    { label: "Customer Insights", icon: "/images/hero/customer-insights.svg" },
    { label: "Business Intelligence", icon: "/images/hero/business-intelligence.svg" },
  ],
  marquee: [
    "Market Research",
    "Competitive Intelligence",
    "Customer Insights",
    "Industry Analysis",
    "Go-To-Market Strategy",
    "Business Intelligence",
    "Strategic Research",
    "Brand Tracking",
    "Consumer Studies",
    "Pricing Intelligence",
    "Demand Forecasting",
    "Ecosystem Mapping",
  ],
};

export type CapabilityTab = {
  id: string;
  label: string;
  tag: string;
  icon: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
};

export const capabilities: CapabilityTab[] = [
  {
    id: "market-research",
    label: "Market Research",
    tag: "Market Research",
    icon: "/images/capabilities/icon-market-research.svg",
    image: "/images/capabilities/market-research.png",
    imageAlt: "Market research analytics dashboard",
    title: "Understand your market with precision",
    description:
      "Gain comprehensive understanding of markets, customers, competitors, and industry dynamics through customized research programs that support strategic business decisions.",
    features: [
      "Market sizing & TAM/SAM/SOM analysis",
      "Demand forecasting & market attractiveness",
      "Product validation & concept testing",
      "Customer segmentation & profiling",
      "Pricing strategy research",
    ],
  },
  {
    id: "competitive-intelligence",
    label: "Competitive Intelligence",
    tag: "Competitive Intelligence",
    icon: "/images/capabilities/icon-competitive-intelligence.svg",
    image: "/images/capabilities/competitive-intelligence.png",
    imageAlt: "Competitive intelligence analytics dashboard on laptop",
    title: "Stay ahead of every market move",
    description:
      "Stay ahead with structured competitor analysis, market monitoring, and intelligence programs that reveal strategic moves and inform proactive decision-making.",
    features: [
      "Competitor profiling & tracking",
      "Strategic benchmarking studies",
      "Market monitoring & alerting",
      "Pricing intelligence analysis",
      "SWOT & positioning reviews",
    ],
  },
  {
    id: "customer-insights",
    label: "Customer Insights",
    tag: "Customer Insights",
    icon: "/images/capabilities/icon-customer-insights.svg",
    image: "/images/capabilities/customer-insights.png",
    imageAlt: "Professional smiling during customer insights research",
    title: "Know what truly drives your customers",
    description:
      "Journey mapping, persona development, VoC studies, and behavioral analysis that transform raw feedback into evidence-based customer strategies that work.",
    features: [
      "Voice of Customer (VoC) programs",
      "Customer journey mapping",
      "NPS & satisfaction measurement",
      "Behavioral & preference analysis",
      "Experience optimization research",
    ],
  },
  {
    id: "industry-research",
    label: "Industry Research",
    tag: "Industry Research",
    icon: "/images/capabilities/icon-industry-research.svg",
    image: "/images/capabilities/industry-research.png",
    imageAlt: "Industry research analytics on laptop",
    title: "Deep sector intelligence for bold moves",
    description:
      "Industry structures, emerging trends, ecosystem developments, regulatory changes, and future growth opportunities — structured for strategic planning.",
    features: [
      "Market landscape & ecosystem analysis",
      "Emerging technology assessment",
      "Regulatory impact & trend forecasting",
      "Strategic outlook reports",
      "Investment intelligence",
    ],
  },
  {
    id: "go-to-market",
    label: "Go-To-Market Strategy",
    tag: "Go-To-Market Strategy",
    icon: "/images/capabilities/icon-go-to-market.svg",
    image: "/images/capabilities/industry-research.png",
    imageAlt: "Go-to-market strategy analytics on laptop",
    title: "Launch with confidence, not guesswork",
    description:
      "Evidence-based GTM research covering segmentation, positioning validation, messaging optimization, channel strategy, and market readiness assessment.",
    features: [
      "Market segmentation & targeting",
      "Value proposition development",
      "Positioning & messaging validation",
      "Channel strategy assessment",
      "Launch readiness evaluation",
    ],
  },
  {
    id: "business-intelligence",
    label: "Business Intelligence",
    tag: "Business Intelligence",
    icon: "/images/capabilities/icon-business-intelligence.svg",
    image: "/images/capabilities/business-intelligence.png",
    imageAlt: "Business intelligence code and data analytics",
    title: "Transform data into strategic direction",
    description:
      "Advanced analysis, interpretation, and strategic reporting that supports better forecasting, performance assessment, and decision-making across all business functions.",
    features: [
      "KPI monitoring & dashboard development",
      "Trend analysis & pattern recognition",
      "Business performance evaluation",
      "Forecasting & scenario modeling",
      "Decision-support analytics",
    ],
  },
];

export const projectTypes = [
  {
    id: "data-collection",
    title: "Data Collection & Fieldwork",
    icon: "/images/project-types/data-collection.svg",
    description:
      "End-to-end quantitative and qualitative data collection through online, telephonic, and in-person methodologies with rigorous quality controls.",
    items: [
      "CATI (Telephone Interviews)",
      "Online Surveys",
      "Face-to-Face Interviews",
      "Intercept Surveys",
      "Recruitment & Panel Management",
      "Data Quality Validation",
    ],
  },
  {
    id: "quantitative-research",
    title: "Quantitative Research",
    icon: "/images/project-types/quantitative-research.svg",
    description:
      "Large-scale survey-based research designed to generate statistically robust insights for decision-making.",
    items: [
      "Brand Tracking",
      "Usage & Attitude Studies",
      "Customer Satisfaction",
      "Product Testing",
      "Market Measurement",
    ],
  },
  {
    id: "qualitative-research",
    title: "Qualitative Research",
    icon: "/images/project-types/qualitative-research.svg",
    description:
      "Exploring customer motivations, perceptions, and unmet needs through qualitative methodologies.",
    items: [
      "In-depth Interviews (IDIs)",
      "Focus Group Discussions (FGDs)",
      "Online Communities",
      "Ethnographic Research",
    ],
  },
  {
    id: "b2b-research",
    title: "B2B Research",
    icon: "/images/project-types/b2b-research.svg",
    description:
      "Specialized research targeting decision-makers, industry experts, and business stakeholders.",
    items: [
      "Executive Interviews",
      "Expert Network Studies",
      "Channel Partner Research",
      "Competitive Intelligence",
    ],
  },
];

export const statsBanner = [
  {
    id: "industries-served",
    value: "11+",
    label: "Industries Served",
    sublabel: "From tech to energy",
    icon: "/images/stats/industries-served.svg",
    color: "orange" as const,
  },
  {
    id: "core-research-areas",
    value: "6",
    label: "Core Research Areas",
    sublabel: "End-to-end coverage",
    icon: "/images/stats/core-research-areas.svg",
    color: "cyan" as const,
  },
  {
    id: "customized-engagements",
    value: "100%",
    label: "Customized Engagements",
    sublabel: "No one-size-fits-all",
    icon: "/images/stats/customized-engagements.svg",
    color: "orange" as const,
  },
  {
    id: "business-intelligence",
    value: "360°",
    label: "Business Intelligence",
    sublabel: "Full-spectrum insight",
    icon: "/images/stats/business-intelligence.svg",
    color: "cyan" as const,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Understand the Challenge",
    description:
      "Deep alignment on objectives, priorities, and decision-making requirements.",
  },
  {
    step: "02",
    title: "Design the Framework",
    description:
      "Customized methodology, sampling approach, and analytical instruments.",
  },
  {
    step: "03",
    title: "Execute Research",
    description:
      "Primary and secondary techniques drawing from multiple reliable sources.",
  },
  {
    step: "04",
    title: "Analyze & Interpret",
    description:
      "Rigorous evaluation, benchmarking, and trend analysis to surface real insight.",
  },
  {
    step: "05",
    title: "Deliver Recommendations",
    description:
      "Clear findings and strategic next steps that support confident action.",
  },
];

export const whyChooseUs = [
  {
    number: "01",
    title: "Decision-Focused Research",
    description:
      "Every engagement answers critical business questions — not just delivers data reports.",
  },
  {
    number: "02",
    title: "Tailored Frameworks",
    description:
      "Custom methodologies aligned to your specific objectives and industry context.",
  },
  {
    number: "03",
    title: "Strong Execution Discipline",
    description:
      "Structured project management ensuring timely delivery and rigorous quality.",
  },
  {
    number: "04",
    title: "Multi-Industry Expertise",
    description:
      "Cross-sector perspectives from 11 industries in a single research partner.",
  },
  {
    number: "05",
    title: "Actionable Intelligence",
    description:
      "Research translated into practical recommendations leadership teams can act on immediately.",
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description:
      "We succeed when you succeed — not when a deliverable is submitted.",
  },
];

export const about = {
  badge: "About AAR Insights",
  headline: {
    line1: "Founded by research",
    line2: "professionals,",
    line2Accent: "built for",
    line3: "built for decision-makers",
  },
  paragraphs: [
    "AAR Insights and Research was founded with a clear mission: to deliver strategic market intelligence that enables confident business decisions. Our team brings deep expertise across multiple industries, combining rigorous research methodologies with practical business insight.",
    "Unlike one-size-fits-all research firms, we take a fully customized approach to every engagement. From startup founders validating new markets to corporate executives evaluating strategic moves, we provide the intelligence that matters most to your specific challenges.",
  ],
  cta: "Learn More About Us",
  founderCard: {
    stat: "100%",
    label: "Customized Projects",
    description:
      "Every engagement tailored to your unique objectives and industry context.",
  },
  differentiators: [
    {
      title: "Founder-Led Engagements",
      description:
        "Direct involvement from experienced research leaders throughout every project phase.",
    },
    {
      title: "Fully Customized Research",
      description:
        "No templated approaches — every methodology is designed for your specific challenge.",
    },
    {
      title: "Flexible Engagement Models",
      description:
        "From one-off studies to ongoing intelligence programs — we adapt to how you work.",
    },
    {
      title: "Decision-Ready Deliverables",
      description:
        "Insights packaged for executive consumption with clear recommendations and next steps.",
    },
  ],
};

export const industries = [
  {
    id: "technology-saas",
    name: "Technology & SaaS",
    icon: "/images/industries/technology-saas.svg",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: "/images/industries/healthcare.svg",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    icon: "/images/industries/manufacturing.svg",
  },
  {
    id: "banking",
    name: "Banking, Financial Services & Insurance",
    icon: "/images/industries/banking.svg",
  },
  {
    id: "consumer-retail",
    name: "Consumer & Retail",
    icon: "/images/industries/consumer-retail.svg",
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: "/images/industries/automotive.svg",
  },
  {
    id: "consulting",
    name: "Consulting & Professional Services",
    icon: "/images/industries/consulting.svg",
  },
  {
    id: "education",
    name: "Education",
    icon: "/images/industries/education.svg",
  },
  {
    id: "energy-utilities",
    name: "Energy & Utilities",
    icon: "/images/industries/energy-utilities.svg",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: "/images/industries/logistics.svg",
  },
  {
    id: "telecom-media",
    name: "Telecom & Media",
    icon: "/images/industries/telecom-media.svg",
  },
];

export const insights = [
  {
    image: "/images/insight-1.png",
    category: "Healthcare",
    title: "Digital Health Market Trends: Key Insights for 2026",
    readTime: "7 min read",
    date: "May 2026",
  },
  {
    image: "/images/insight-2.png",
    category: "Technology",
    title: "SaaS Competitive Positioning: Winning in Crowded Markets",
    readTime: "6 min read",
    date: "May 2026",
  },
  {
    image: "/images/insight-3.png",
    category: "Financial Services",
    title: "Customer Experience in Banking: Research-Backed Strategies",
    readTime: "5 min read",
    date: "Apr 2026",
  },
  {
    image: "/images/insight-4.png",
    category: "Manufacturing",
    title: "Supply Chain Intelligence: Navigating Market Disruption",
    readTime: "8 min read",
    date: "Apr 2026",
  },
];

export const finalCta = {
  headline: {
    line1: "Ready to turn intelligence",
    line2Prefix: "into",
    line2Gradient: "action?",
  },
  description:
    "Every successful strategy begins with the right insight. Let's discuss how AAR Insights and Research can support your organization's growth.",
  primaryCta: "Schedule a Consultation",
  secondaryCta: "View Case Studies",
};

export const footer = {
  ctaBanner: {
    title: "Ready to make smarter business decisions?",
    description:
      "Let's discuss how our research capabilities can support your growth.",
    button: "Schedule a Consultation",
  },
  description:
    "Strategic market research and business intelligence helping organizations make confident decisions through reliable insights and actionable intelligence.",
  email: "presales@aarinsights.com",
  phone: "+91 96677 82298",
  location: "Noida, Uttar Pradesh, India",
  quickLinks: [
    "Home",
    "About Us",
    "Services",
    "Industries",
    "Case Studies",
    "Insights",
    "Contact",
  ],
  footerIndustries: [
    "Technology",
    "Healthcare",
    "Manufacturing",
    "BFSI",
    "Retail",
    "Automotive",
    "Education",
    "Energy",
    "Logistics",
    "Telecom",
  ],
  services: [
    "Market Research",
    "Competitive Intelligence",
    "Customer Insights",
    "Industry Research",
    "Go-To-Market Strategy",
    "Business Intelligence & Analytics",
  ],
  copyright: "© 2026 AAR Insights and Research. All Rights Reserved.",
  legal: ["Privacy Policy", "Terms & Conditions"],
};
