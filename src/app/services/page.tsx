import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesListSection } from "@/components/services/ServicesListSection";

export const metadata: Metadata = {
  title: "Services | AAR Insights",
  description:
    "Explore AAR Insights research services — market research, competitive intelligence, customer insights, industry research, go-to-market strategy, and business intelligence.",
};

export default function ServicesPage() {
  return (
    <>
      <Header pathname="/services" />
      <main id="main-content">
        <ServicesHeroSection />
        <ServicesListSection />
      </main>
      <Footer />
    </>
  );
}
