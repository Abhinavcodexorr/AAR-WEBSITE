import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustriesHeroSection } from "@/components/industries/IndustriesHeroSection";
import { IndustriesGridSection } from "@/components/industries/IndustriesGridSection";

export const metadata: Metadata = {
  title: "Industries | AAR Insights",
  description:
    "Cross-sector market research and business intelligence across 11 industries — technology, healthcare, manufacturing, BFSI, retail, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <Header pathname="/industries" />
      <main id="main-content">
        <IndustriesHeroSection />
        <IndustriesGridSection />
      </main>
      <Footer />
    </>
  );
}
