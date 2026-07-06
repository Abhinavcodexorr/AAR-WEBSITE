import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { caseStudiesHero } from "@/data/caseStudies";

export function CaseStudiesHeroSection() {
  return (
    <section
      aria-label="Case Studies hero"
      className="relative overflow-hidden bg-dark pb-16 pt-20 md:pb-16 md:pt-20"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-52 size-[646px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(232,69,26,0.3) 0%, rgba(116,35,13,0.15) 32.5%, rgba(0,0,0,0) 65%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 82.8% 35.7% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 100%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10">
        <Badge
          variant="hero-dark"
          showDot={false}
          className="mb-6 px-[15px] py-[7px] text-[11.84px]"
        >
          {caseStudiesHero.badge}
        </Badge>

        <h1 className="max-w-[700px] font-display text-[clamp(2.25rem,5.5vw,3.66rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
          <span className="text-white">{caseStudiesHero.headline.line1}</span>
          <span className="mt-1 block">
            <GradientText>{caseStudiesHero.headline.gradient}</GradientText>
          </span>
        </h1>

        <p className="mt-6 max-w-[560px] text-base leading-[29px] text-white/50 md:text-[16.8px] md:leading-[30px]">
          {caseStudiesHero.subtext}
        </p>
      </Container>
    </section>
  );
}
