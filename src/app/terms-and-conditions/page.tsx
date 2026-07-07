import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalDocumentHeroSection } from "@/components/legal/LegalDocumentHeroSection";
import { LegalDocumentContentSection } from "@/components/legal/LegalDocumentContentSection";
import { termsAndConditionsPage } from "@/data/termsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions | AAR Insights",
  description:
    "Read the Terms & Conditions for using the AAR Insights and Research website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header pathname="/terms-and-conditions" />
      <main id="main-content">
        <LegalDocumentHeroSection
          hero={termsAndConditionsPage.hero}
          ariaLabel="Terms and Conditions hero"
        />
        <LegalDocumentContentSection
          page={termsAndConditionsPage}
          ariaLabel="Terms and Conditions content"
        />
      </main>
      <Footer showCtaBanner={false} />
    </>
  );
}
