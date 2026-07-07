"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { services } from "@/data/services";
import { ServiceCardRow } from "./ServiceCardRow";

export function ServicesListSection() {
  return (
    <FadeIn delay={0.3} y={30}>
      <section aria-label="Our services" className="bg-white py-16 md:py-20">
        <Container>
          <StaggerContainer
            animateOnMount
            delay={0.1}
            className="mx-auto flex w-full max-w-[1107px] flex-col gap-0.5"
          >
            {services.map((service) => (
              <StaggerItem key={service.id} className="w-full">
                <ServiceCardRow service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </FadeIn>
  );
}
