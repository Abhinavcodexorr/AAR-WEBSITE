import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { aboutHero } from "@/data/about";

export function AboutHeroSection() {
  return (
    <section
      aria-label="About Us hero"
      className="relative overflow-hidden bg-dark pb-14 pt-16 md:min-h-[505px] md:pb-20 md:pt-20"
    >
      <div
        className="pointer-events-none absolute left-[51%] top-[-236px] size-[712px] -translate-x-1/4 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(232,69,26,0.3) 0%, rgba(116,35,13,0.15) 32.5%, transparent 65%)",
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
          className="mb-4 px-[15.4px] py-[6.6px] text-[11.84px] tracking-[1.184px] md:mb-6"
        >
          {aboutHero.badge}
        </Badge>

        <h1 className="max-w-[720px] font-display text-[clamp(2.25rem,5.5vw,58.55px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
          <span className="block text-white">{aboutHero.headline.line1}</span>
          <span className="block text-white">
            {aboutHero.headline.line2Prefix}{" "}
            <GradientText>{aboutHero.headline.line2Gradient}</GradientText>
          </span>
          <span className="block">
            <GradientText>{aboutHero.headline.line3Gradient}</GradientText>
          </span>
        </h1>

        <p className="mt-4 max-w-[580px] text-[15.2px] leading-[26px] text-white/50 md:mt-6 md:text-[16.8px] md:leading-[30.24px]">
          {aboutHero.subtext}
        </p>
      </Container>
    </section>
  );
}
