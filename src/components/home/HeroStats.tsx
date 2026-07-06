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
      <p className="font-display text-[26px] font-extrabold leading-[26px] tracking-[-1.2px] text-gradient-stat md:text-[38.4px] md:leading-[38.4px] md:tracking-[-1.92px]">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-[9px] leading-[13px] tracking-[0.02em] text-white/[0.38] md:text-[12.48px] md:leading-[18.72px] md:tracking-[0.2496px]">
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
      className="grid grid-cols-3 items-center gap-x-2 max-md:gap-x-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-16 md:gap-y-6"
    >
      {stats.map((stat) => (
        <HeroStatItem key={stat.label} stat={stat} animate={isVisible} />
      ))}
    </div>
  );
}
