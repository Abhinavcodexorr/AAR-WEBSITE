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
      className="grid overflow-hidden rounded-[20px] border border-orange/10 bg-white transition-all duration-200 hover:border-orange/20 hover:shadow-[0_12px_40px_rgba(232,69,26,0.08)] lg:grid-cols-[625fr_480fr]"
    >
      <div className="relative -mb-px aspect-[625/384] overflow-hidden bg-[#0f0d1e] lg:mb-0 lg:-mr-px lg:z-[1]">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 625px"
          quality={100}
          unoptimized
          priority
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[32%] bg-gradient-to-r from-transparent via-white/45 to-white/90 max-lg:hidden"
          aria-hidden
        />
        <span className="absolute left-5 top-5 z-10 inline-flex h-[23px] min-w-[86px] items-center justify-center rounded-full bg-orange px-[10px] font-display text-[10px] font-bold uppercase leading-none tracking-[0.4px] text-white">
          Featured
        </span>
      </div>

      <div className="relative z-[2] flex flex-col justify-center bg-white p-8 md:p-12 lg:-ml-10 lg:pl-10">
        <span className="inline-block w-fit rounded-full bg-peach-soft px-[11.2px] py-[3.5px] font-body text-[12.8px] font-bold leading-[18px] text-orange-dark">
          {article.category}
        </span>

        <h2
          id={`${article.id}-title`}
          className="mt-5 font-display text-[clamp(1.35rem,2.5vw,27.05px)] font-extrabold leading-[29px] tracking-[-0.54px] text-text-dark"
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
          className="mt-5 inline-flex w-fit items-center gap-[6.4px] font-display text-[15.2px] font-bold leading-[21px] text-orange transition-colors hover:text-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
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
