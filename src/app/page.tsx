import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CoreCapabilitiesSection } from "@/components/home/CoreCapabilitiesSection";
import { ProjectTypesSection } from "@/components/home/ProjectTypesSection";
import { StatsBannerSection } from "@/components/home/StatsBannerSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <CoreCapabilitiesSection />
        <ProjectTypesSection />
        <StatsBannerSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <AboutSection />
        <IndustriesSection />
        <InsightsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
