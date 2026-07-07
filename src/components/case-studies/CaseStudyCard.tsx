import Image from "next/image";
import type { CaseStudyItem } from "@/data/caseStudies";
import { cn } from "@/lib/cn";

type CaseStudyCardProps = {
  study: CaseStudyItem;
};

function SectionBlock({
  label,
  children,
  labelClassName,
  className,
}: {
  label: string;
  children: React.ReactNode;
  labelClassName?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3
        className={cn(
          "font-display text-[12.8px] font-bold uppercase leading-[18px] tracking-[0.08em]",
          labelClassName,
        )}
      >
        {label}
      </h3>
      <p className="mt-[6.4px] font-body text-[15.2px] leading-[26.4px] text-gray-500">
        {children}
      </p>
    </div>
  );
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article
      id={study.id}
      aria-labelledby={`${study.id}-title`}
      className="overflow-hidden rounded-[24px] border border-orange/[0.08] bg-white p-px transition-all duration-200 hover:border-orange/20 hover:shadow-[0_12px_40px_rgba(232,69,26,0.08)]"
    >
      <div className="grid lg:grid-cols-[591fr_514fr]">
        <div
          className={cn(
            "relative min-h-[320px] bg-peach sm:min-h-[420px] lg:min-h-[591px]",
            study.reversed && "lg:order-2",
          )}
        >
          <Image
            src={study.image}
            alt={study.category}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 591px"
          />
          {study.showImageEdgeFade ? (
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 z-[2] w-[32%] max-lg:hidden",
                study.reversed
                  ? "left-0 bg-gradient-to-l from-transparent via-white/45 to-white/90"
                  : "right-0 bg-gradient-to-r from-transparent via-white/45 to-white/90",
              )}
              aria-hidden
            />
          ) : null}
          {study.showImageCategory ? (
            <span className="absolute left-5 top-5 z-10 inline-flex h-[28px] items-center justify-center rounded-full bg-orange px-[14px] font-display text-[10px] font-bold uppercase leading-none tracking-[0.4px] text-white">
              {study.category}
            </span>
          ) : null}
        </div>

        <div
          className={cn(
            "flex flex-col p-12",
            study.reversed && "lg:order-1",
          )}
        >
          <h2
            id={`${study.id}-title`}
            className="font-display text-[24px] font-extrabold leading-[24px] tracking-[-0.02em] text-text-dark"
          >
            {study.title}
          </h2>

          <SectionBlock label="Challenge" labelClassName="text-gray-400" className="mt-8">
            {study.challenge}
          </SectionBlock>

          <SectionBlock label="Our Approach" labelClassName="text-gray-400" className="mt-5">
            {study.approach}
          </SectionBlock>

          <div className="mt-5 rounded-[12px] border border-orange/10 bg-[#fff1f0] px-[21px] py-[17px]">
            <SectionBlock label="Outcome" labelClassName="text-orange">
              {study.outcome}
            </SectionBlock>
          </div>

          <ul className="mt-6 flex flex-wrap gap-[6.4px]">
            {study.tags.map((tag) => (
              <li key={tag}>
                <span className="inline-block rounded-full bg-peach-soft px-[11.2px] py-[3.5px] font-body text-[12.8px] font-normal leading-[18px] text-orange-dark">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
