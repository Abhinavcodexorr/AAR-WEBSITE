"use client";

import { Container } from "@/components/ui/Container";
import { SectionFade, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { insightArticles } from "@/data/insightsPage";
import { InsightCard } from "./InsightCard";

export function InsightsGridSection() {
  return (
    <SectionFade>
      <section id="insights-articles" aria-label="Insight articles" className="bg-white pb-16 pt-8 md:pb-20">
        <Container>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {insightArticles.map((article) => (
              <StaggerItem key={article.id}>
                <InsightCard article={article} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </SectionFade>
  );
}
