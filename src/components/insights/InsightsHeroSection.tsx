"use client";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn, HeroTitle, HeroZoom } from "@/components/MotionWrapper";
import { insightsPageHero } from "@/data/insightsPage";

export function InsightsHeroSection() {
  return (
    <section
      aria-label="Insights hero"
      className="relative overflow-hidden bg-dark pb-16 pt-20 md:pb-16 md:pt-20"
    >
      <HeroZoom className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 -top-32 size-[551px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(232,69,26,0.3) 0%, rgba(116,35,13,0.15) 32.5%, rgba(0,0,0,0) 65%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 82.8% 35.7% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 100%)",
          }}
          aria-hidden
        />
      </HeroZoom>

      <Container className="relative z-10">
        <FadeIn delay={0.1} y={20}>
          <Badge
            variant="hero-dark"
            showDot={false}
            className="mb-6 px-[15px] py-[7px] text-[11.84px]"
          >
            {insightsPageHero.badge}
          </Badge>
        </FadeIn>

        <HeroTitle>
          <h1 className="max-w-[700px] font-display text-[clamp(2.25rem,5.5vw,3.66rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="block text-white lg:whitespace-nowrap">
              {insightsPageHero.headline.line1}
            </span>
            <span className="block lg:whitespace-nowrap">
              <GradientText>{insightsPageHero.headline.gradient}</GradientText>
            </span>
          </h1>
        </HeroTitle>
      </Container>
    </section>
  );
}
