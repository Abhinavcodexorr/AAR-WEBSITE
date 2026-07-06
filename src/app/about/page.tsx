import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { OurStorySection } from "@/components/about/OurStorySection";
import { VisionMissionSection } from "@/components/about/VisionMissionSection";
import { OurValuesSection } from "@/components/about/OurValuesSection";

export const metadata: Metadata = {
  title: "About Us | AAR Insights",
  description:
    "Learn about AAR Insights — a strategic intelligence partner helping organizations navigate complexity and make confident business decisions.",
};

export default function AboutPage() {
  return (
    <>
      <Header pathname="/about" />
      <main id="main-content">
        <AboutHeroSection />
        <OurStorySection />
        <VisionMissionSection />
        <OurValuesSection />
      </main>
      <Footer />
    </>
  );
}
