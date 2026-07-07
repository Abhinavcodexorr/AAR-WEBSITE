import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalDocumentHeroSection } from "@/components/legal/LegalDocumentHeroSection";
import { LegalDocumentContentSection } from "@/components/legal/LegalDocumentContentSection";
import { privacyPolicyPage } from "@/data/privacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | AAR Insights",
  description:
    "Learn how AAR Insights and Research collects, uses, and protects your personal information when you visit our website or contact our team.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header pathname="/privacy-policy" />
      <main id="main-content">
        <LegalDocumentHeroSection
          hero={privacyPolicyPage.hero}
          ariaLabel="Privacy Policy hero"
        />
        <LegalDocumentContentSection
          page={privacyPolicyPage}
          ariaLabel="Privacy Policy content"
          linkPrivacyPolicy={false}
        />
      </main>
      <Footer showCtaBanner={false} />
    </>
  );
}
