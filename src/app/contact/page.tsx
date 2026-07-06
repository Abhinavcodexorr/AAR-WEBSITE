import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactMainSection } from "@/components/contact/ContactMainSection";

export const metadata: Metadata = {
  title: "Contact Us | AAR Insights",
  description:
    "Get in touch with AAR Insights and Research — schedule a consultation to discuss your market research, competitive intelligence, and business intelligence requirements.",
};

export default function ContactPage() {
  return (
    <>
      <Header pathname="/contact" />
      <main id="main-content">
        <ContactHeroSection />
        <ContactMainSection />
      </main>
      <Footer />
    </>
  );
}
