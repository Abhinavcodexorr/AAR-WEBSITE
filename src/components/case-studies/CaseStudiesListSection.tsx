"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";

export function CaseStudiesListSection() {
  return (
    <FadeIn delay={0.3} y={30}>
      <section aria-label="Case study examples" className="bg-white py-16 md:py-20">
        <Container>
          <StaggerContainer
            animateOnMount
            delay={0.1}
            className="mx-auto flex w-full max-w-[1107px] flex-col gap-6"
          >
            {caseStudies.map((study) => (
              <StaggerItem key={study.id} className="w-full">
                <CaseStudyCard study={study} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </FadeIn>
  );
}
