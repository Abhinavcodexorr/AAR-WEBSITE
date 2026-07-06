import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InsightsHeroSection } from "@/components/insights/InsightsHeroSection";
import { InsightsFeaturedSection } from "@/components/insights/InsightsFeaturedSection";
import { InsightsGridSection } from "@/components/insights/InsightsGridSection";

export const metadata: Metadata = {
  title: "Insights | AAR Insights",
  description:
    "Research perspectives and thought leadership for forward-thinking leaders — AI, competitive intelligence, B2B research, and strategic decision-making.",
};

export default function InsightsPage() {
  return (
    <>
      <Header pathname="/insights" />
      <main id="main-content">
        <InsightsHeroSection />
        <InsightsFeaturedSection />
        <InsightsGridSection />
      </main>
      <Footer />
    </>
  );
}
