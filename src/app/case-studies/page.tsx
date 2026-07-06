import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudiesHeroSection } from "@/components/case-studies/CaseStudiesHeroSection";
import { CaseStudiesListSection } from "@/components/case-studies/CaseStudiesListSection";

export const metadata: Metadata = {
  title: "Case Studies | AAR Insights",
  description:
    "Four examples of how AAR Insights transformed complex research questions into actionable intelligence and measurable business impact.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header pathname="/case-studies" />
      <main id="main-content">
        <CaseStudiesHeroSection />
        <CaseStudiesListSection />
      </main>
      <Footer />
    </>
  );
}
