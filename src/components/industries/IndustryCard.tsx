import Image from "next/image";
import type { IndustryItem } from "@/data/industries";

type IndustryCardProps = {
  industry: IndustryItem;
};

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <article
      id={industry.id}
      aria-labelledby={`${industry.id}-title`}
      className="overflow-hidden rounded-[14px] border border-orange/[0.08] bg-white p-px"
    >
      <div className="relative h-[160px] overflow-hidden bg-peach">
        <Image
          src={industry.image}
          alt={`${industry.title} research and intelligence`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 543px"
        />
      </div>

      <div className="p-6">
        <h2
          id={`${industry.id}-title`}
          className="font-display text-[16px] font-bold leading-[24px] text-text-dark"
        >
          {industry.title}
        </h2>

        <ul className="mt-[14.4px] flex flex-wrap gap-[6.4px]">
          {industry.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block rounded-full bg-peach-soft px-[11.2px] py-[3.5px] font-body text-[12.8px] font-normal leading-[18px] text-orange-dark">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
