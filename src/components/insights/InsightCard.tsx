import Image from "next/image";
import Link from "next/link";
import type { InsightArticle } from "@/data/insightsPage";

type InsightCardProps = {
  article: InsightArticle;
};

export function InsightCard({ article }: InsightCardProps) {
  return (
    <article id={article.id} aria-labelledby={`${article.id}-title`}>
      <Link
        href={`/insights#${article.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-orange/[0.08] bg-white p-px transition-shadow hover:shadow-[0_12px_40px_rgba(232,69,26,0.08)]"
      >
        <div className="relative h-[180px] overflow-hidden bg-peach">
          <Image
            src={article.image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            aria-hidden
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="inline-block w-fit rounded-full bg-peach-soft px-[10.4px] py-1 font-body text-[10.88px] font-bold leading-[16px] text-orange-dark">
            {article.category}
          </span>

          <h3
            id={`${article.id}-title`}
            className="mt-3 font-display text-[15.2px] font-bold leading-[20.52px] tracking-[-0.152px] text-text-dark"
          >
            {article.title}
          </h3>

          <p className="mt-[10.4px] flex-1 text-[15.2px] leading-[26px] text-gray-500">
            {article.excerpt}
          </p>

          <div className="mt-auto flex items-end justify-between pt-6">
            <span className="inline-flex items-center gap-[4.8px] text-xs leading-[18px] text-gray-400">
              <ClockIcon />
              {article.readTime} · {article.date}
            </span>
            <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-peach-soft to-[#fdd5c8] text-orange transition-colors group-hover:bg-orange group-hover:text-white">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
                <path
                  d="M2 5.5h7M6 2.5l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

function ClockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
      <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M5.5 3v2.5l1.5 1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
