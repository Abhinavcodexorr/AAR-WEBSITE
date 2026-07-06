import { Container } from "@/components/ui/Container";
import { featuredInsight } from "@/data/insightsPage";
import { FeaturedInsightCard } from "./FeaturedInsightCard";

export function InsightsFeaturedSection() {
  return (
    <section aria-label="Featured insight" className="bg-white py-16">
      <Container>
        <FeaturedInsightCard article={featuredInsight} />
      </Container>
    </section>
  );
}
