import Image from "next/image";
import type { InsightArticle } from "@/data/insightsPage";

type FeaturedInsightCardProps = {
  article: InsightArticle;
};

export function FeaturedInsightCard({ article }: FeaturedInsightCardProps) {
  return (
    <article
      id={article.id}
      aria-labelledby={`${article.id}-title`}
      className="grid overflow-hidden rounded-[20px] border border-orange/10 bg-white lg:grid-cols-[625fr_480fr]"
    >
      <div className="relative min-h-[280px] bg-peach sm:min-h-[360px] lg:min-h-[384px]">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 56vw"
          priority
          aria-hidden
        />
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12">
        <span className="inline-block w-fit rounded-full bg-peach-soft px-[11.2px] py-[3.5px] font-body text-[12.8px] leading-[18px] text-gray-500">
          {article.category}
        </span>

        <h2
          id={`${article.id}-title`}
          className="mt-5 font-display text-[clamp(1.35rem,2.5vw,1.69rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-text-dark"
        >
          {article.title}
        </h2>

        <p className="mt-4 text-[15.2px] leading-[26px] text-gray-500">
          {article.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[15.2px] leading-[19px] text-gray-400">
          <span className="inline-flex items-center gap-[4.8px]">
            <ClockIcon />
            {article.readTime}
          </span>
          <span>{article.date}</span>
        </div>

        <a
          href="#insights-articles"
          className="mt-[19px] inline-flex w-fit items-center gap-2 font-display text-[15.2px] font-bold leading-[21px] text-orange transition-colors hover:text-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          Read Article
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
            <path
              d="M2 6.5h9M7.5 3l3 3.5-3 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M6 3.5V6l2 1"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
