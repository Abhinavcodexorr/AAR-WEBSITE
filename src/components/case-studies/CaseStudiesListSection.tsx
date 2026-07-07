"use client";

import { Container } from "@/components/ui/Container";
import { SectionFade, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";

export function CaseStudiesListSection() {
  return (
    <SectionFade>
      <section aria-label="Case study examples" className="bg-white py-16 md:py-20">
        <Container>
          <StaggerContainer className="mx-auto flex w-full max-w-[1107px] flex-col gap-6">
            {caseStudies.map((study) => (
              <StaggerItem key={study.id}>
                <CaseStudyCard study={study} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </SectionFade>
  );
}
