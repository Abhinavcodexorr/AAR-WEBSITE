import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { servicesHero } from "@/data/services";

export function ServicesHeroSection() {
  return (
    <section
      aria-label="Services hero"
      className="relative overflow-hidden bg-dark pb-16 pt-20 md:min-h-[502px] md:pb-20 md:pt-20"
    >
      <div
        className="pointer-events-none absolute -left-[106px] -top-[206px] size-[652px] rounded-full opacity-30"
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
          className="mb-6 px-[15.4px] py-[6.6px] text-[11.84px] tracking-[1.184px]"
        >
          {servicesHero.badge}
        </Badge>

        <h1 className="max-w-[700px] font-display text-[clamp(2.25rem,5.5vw,58.55px)] font-extrabold leading-[63.234px] tracking-[-1.7565px]">
          <span className="block text-white">
            {servicesHero.headline.line1}{" "}
            {servicesHero.headline.line2Prefix}
          </span>
          <span className="block">
            <GradientText>{servicesHero.headline.line2Gradient}</GradientText>
          </span>
        </h1>

        <p className="mt-6 max-w-[560px] text-[16.8px] leading-[30.24px] text-white/50">
          {servicesHero.subtext}
        </p>
      </Container>
    </section>
  );
}
