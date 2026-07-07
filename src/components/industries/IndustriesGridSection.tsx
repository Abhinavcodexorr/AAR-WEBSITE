"use client";

import { Container } from "@/components/ui/Container";
import { SectionFade, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { industries } from "@/data/industries";
import { IndustryCard } from "./IndustryCard";

export function IndustriesGridSection() {
  return (
    <SectionFade>
      <section aria-label="Industries we serve" className="bg-white py-16 md:py-20">
        <Container>
          <StaggerContainer className="mx-auto grid w-full max-w-[1107px] gap-5 sm:grid-cols-2">
            {industries.map((industry) => (
              <StaggerItem key={industry.id}>
                <IndustryCard industry={industry} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </SectionFade>
  );
}
