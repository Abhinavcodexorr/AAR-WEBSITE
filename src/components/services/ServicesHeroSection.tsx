"use client";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn, HeroTitle, HeroZoom } from "@/components/MotionWrapper";
import { servicesHero } from "@/data/services";

export function ServicesHeroSection() {
  return (
    <section
      aria-label="Services hero"
      className="relative overflow-hidden bg-dark pb-14 pt-16 md:min-h-[502px] md:pb-20 md:pt-20"
    >
      <HeroZoom className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-[106px] -top-[206px] size-[652px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(232,69,26,0.3) 0%, rgba(116,35,13,0.15) 32.5%, transparent 65%)",
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
            className="mb-4 px-[15.4px] py-[6.6px] text-[11.84px] tracking-[1.184px] md:mb-6"
          >
            {servicesHero.badge}
          </Badge>
        </FadeIn>

        <HeroTitle>
          <h1 className="max-w-[700px] font-display text-[clamp(2.25rem,5.5vw,58.55px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            <span className="block text-white lg:whitespace-nowrap">
              {servicesHero.headline.line1}
            </span>
            <span className="block lg:whitespace-nowrap">
              <GradientText>{servicesHero.headline.line2Gradient}</GradientText>
            </span>
          </h1>
        </HeroTitle>

        <FadeIn delay={0.7} y={20}>
          <p className="mt-4 max-w-[560px] text-[15.2px] leading-[26px] text-white/50 md:mt-6 md:text-[16.8px] md:leading-[30.24px]">
            {servicesHero.subtext}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
