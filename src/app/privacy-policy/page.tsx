import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrivacyPolicyHeroSection } from "@/components/legal/PrivacyPolicyHeroSection";
import { PrivacyPolicyContentSection } from "@/components/legal/PrivacyPolicyContentSection";

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
        <PrivacyPolicyHeroSection />
        <PrivacyPolicyContentSection />
      </main>
      <Footer showCtaBanner={false} />
    </>
  );
}
