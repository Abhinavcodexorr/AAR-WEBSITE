import { Container } from "@/components/ui/Container";
import { insightArticles } from "@/data/insightsPage";
import { InsightCard } from "./InsightCard";

export function InsightsGridSection() {
  return (
    <section aria-label="Insight articles" className="bg-white pb-16 pt-8 md:pb-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insightArticles.map((article) => (
            <InsightCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
