export type InsightArticle = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
};

export const insightsPageHero = {
  badge: "Insights & Thought Leadership",
  headline: {
    line1: "Research perspectives for",
    gradient: "forward-thinking leaders",
  },
};

export const featuredInsight: InsightArticle = {
  id: "ai-led-market-research",
  category: "AI & Research Technology",
  title: "The Future of AI-Led Market Research",
  excerpt:
    "How artificial intelligence is transforming data collection, analysis, insight generation, and strategic decision-making for competitive organizations.",
  readTime: "7 min read",
  date: "May 2026",
  image: "/images/insights/featured-ai-led-research.png",
  featured: true,
};

export const insightArticles: InsightArticle[] = [
  {
    id: "competitive-intelligence",
    category: "Competitive Intelligence",
    title: "Why Competitive Intelligence Matters More Than Ever",
    excerpt:
      "How organizations can proactively monitor competitive moves, anticipate market shifts, and translate intelligence into strategic advantage.",
    readTime: "5 min read",
    date: "Apr 2026",
    image: "/images/insights/competitive-intelligence.png",
  },
  {
    id: "decision-making-research",
    category: "Strategic Planning",
    title: "Improving Decision-Making Through Research",
    excerpt:
      "A practical guide to integrating market research into executive planning cycles for faster, more confident strategic choices.",
    readTime: "6 min read",
    date: "Apr 2026",
    image: "/images/insights/strategic-planning.png",
  },
  {
    id: "b2b-research-trends",
    category: "B2B Research",
    title: "Emerging Trends Reshaping B2B Research",
    excerpt:
      "Technology, buyer behavior, and methodology shifts that are redefining how B2B organizations gather and apply market intelligence.",
    readTime: "8 min read",
    date: "Mar 2026",
    image: "/images/insights/b2b-research.png",
  },
  {
    id: "customer-intelligence",
    category: "Customer Intelligence",
    title: "The Growing Importance of Customer Intelligence",
    excerpt:
      "Why organizations that understand customers at a behavioral level outperform peers in retention, satisfaction, and growth.",
    readTime: "5 min read",
    date: "Mar 2026",
    image: "/images/insights/customer-intelligence.png",
  },
  {
    id: "strategic-intelligence",
    category: "Business Intelligence",
    title: "From Data to Direction: The Evolution of Strategic Intelligence",
    excerpt:
      "How businesses are moving beyond dashboards toward integrated intelligence frameworks that drive executive action.",
    readTime: "6 min read",
    date: "Feb 2026",
    image: "/images/insights/business-intelligence.png",
  },
];
