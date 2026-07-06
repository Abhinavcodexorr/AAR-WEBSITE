"use client";

import { statsBanner } from "@/data/home";
import { parseStatValue, useCountUp, useInViewOnce } from "@/hooks/useCountUp";
import { cn } from "@/lib/cn";

function StatCard({
  stat,
  animate,
}: {
  stat: (typeof statsBanner)[number];
  animate: boolean;
}) {
  const { target, suffix } = parseStatValue(stat.value);
  const count = useCountUp(target, animate);

  return (
    <article className="rounded-[14px] border border-white/[0.06] px-[25px] py-[33px] text-center transition-all duration-200 hover:border-white/12 hover:bg-white/[0.04]">
      <div className="mx-auto mb-4 flex size-[42px] items-center justify-center rounded-[10px] bg-cyan/15">
        <img
          src={stat.icon}
          alt=""
          width={20}
          height={20}
          className="size-5"
          aria-hidden
        />
      </div>
      <p
        className={cn(
          "font-display text-[56px] font-extrabold leading-[56px] tracking-[-2.8px]",
          stat.color === "orange" ? "text-orange-dark" : "text-cyan",
        )}
      >
        {count}
        {suffix}
      </p>
      <p className="mt-2 font-display text-[14.4px] font-bold leading-[21.6px] text-white">
        {stat.label}
      </p>
      <p className="mt-1 text-[12.48px] leading-[18.72px] text-white/[0.35]">
        {stat.sublabel}
      </p>
    </article>
  );
}

export function StatsBannerGrid() {
  const { ref, isVisible } = useInViewOnce();

  return (
    <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {statsBanner.map((stat) => (
        <StatCard key={stat.id} stat={stat} animate={isVisible} />
      ))}
    </div>
  );
}
