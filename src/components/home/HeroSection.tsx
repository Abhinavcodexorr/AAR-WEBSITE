import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { hero } from "@/data/home";
import { HeroParticles } from "./HeroParticles";
import { HeroStats } from "./HeroStats";

export function HeroSection() {
  const marqueeItems = [...hero.marquee, ...hero.marquee];

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-dark pb-0 pt-20 text-white md:pt-[80px]"
    >
      <HeroParticles />

      <div
        className="pointer-events-none absolute -left-[93px] -top-[181px] size-[752px] rounded-full opacity-[0.22]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,69,26,0.35) 0%, rgba(116,35,13,0.175) 32.5%, rgba(0,0,0,0) 65%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[403px] top-[385px] size-[769px] rounded-full opacity-[0.21]"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(3,91,106,0.1) 32.5%, rgba(0,0,0,0) 65%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 82.8% 35.7% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 pb-12 text-center md:pb-16">
        <div className="mb-8 flex justify-center">
          <Badge
            variant="hero-dark"
            className="border-orange/[0.32] bg-orange/[0.14] px-[17px] py-[7.4px] text-[11.84px] font-semibold tracking-[1.184px] text-orange-dark"
          >
            {hero.badge}
          </Badge>
        </div>

        <h1 className="mx-auto max-w-5xl font-display text-[clamp(2.5rem,8vw,4.76rem)] font-extrabold leading-[1.05] tracking-[-2.664px]">
          <span className="block text-white">{hero.headline.line1}</span>
          <span className="block text-white">{hero.headline.line2}</span>
          <span className="mt-1 block">
            <GradientText className="text-gradient-primary">
              {hero.headline.gradient}
            </GradientText>
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-[650px] text-[17.6px] leading-[32.56px] text-white/[0.72]">
          {hero.subtext}
        </p>

        <div className="mt-8 flex justify-center md:mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-br from-orange to-orange-light px-[33.6px] py-4 font-display text-[14.72px] font-bold tracking-[-0.1472px] text-white shadow-[0_8px_16px_rgba(232,69,26,0.4)] transition-opacity hover:opacity-95"
          >
            {hero.cta}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="mt-12 border-t border-white/[0.07] pt-8 md:mt-16 md:pt-10">
          <HeroStats stats={hero.stats} />
        </div>
      </Container>

      <div className="relative z-10 hidden justify-center pb-8 md:flex">
        <div className="flex flex-wrap justify-center gap-4">
          {hero.pills.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex h-[34px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-[15.4px] py-[8.2px] text-[11.52px] font-medium tracking-[0.2304px] text-white/[0.65]"
            >
              <img
                src={pill.icon}
                alt=""
                width={12}
                height={12}
                className="size-3 shrink-0"
                aria-hidden
              />
              {pill.label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-y border-white/10 bg-dark-alt/50 py-5">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-4 px-6 text-[12.48px] font-medium uppercase tracking-[0.8736px] text-white/30"
            >
              <span
                className="size-1 rounded-[2px] bg-gradient-to-br from-orange to-cyan"
                aria-hidden
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
