"use client";

import { parseStatValue, useCountUp, useInViewOnce } from "@/hooks/useCountUp";

type HeroStat = {
  value: string;
  label: string;
};

type HeroStatsProps = {
  stats: HeroStat[];
};

function HeroStatItem({
  stat,
  animate,
}: {
  stat: HeroStat;
  animate: boolean;
}) {
  const { target, suffix } = parseStatValue(stat.value);
  const count = useCountUp(target, animate);

  return (
    <div className="text-center">
      <p className="font-display text-[38.4px] font-extrabold leading-[38.4px] tracking-[-1.92px] text-gradient-stat">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-[12.48px] leading-[18.72px] tracking-[0.2496px] text-white/[0.38]">
        {stat.label}
      </p>
    </div>
  );
}

export function HeroStats({ stats }: HeroStatsProps) {
  const { ref, isVisible } = useInViewOnce();

  return (
    <div
      ref={ref}
      className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16"
    >
      {stats.map((stat) => (
        <HeroStatItem key={stat.label} stat={stat} animate={isVisible} />
      ))}
    </div>
  );
}
