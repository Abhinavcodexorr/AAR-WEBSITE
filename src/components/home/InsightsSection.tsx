import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { insights } from "@/data/home";

export function InsightsSection() {
  return (
    <section id="insights" aria-label="Insights" className="bg-white py-16 md:py-20">
      <Container>
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:mb-10 md:flex-row md:items-end">
          <div>
            <Badge className="mb-4 px-[13.6px] py-[4.8px] text-[11.52px] tracking-[0.9216px]">
              Trending Insights
            </Badge>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.195rem)] font-extrabold leading-[1.1] tracking-[-1.0539px] text-text-dark">
              Research perspectives for{" "}
              <GradientText>forward-thinking leaders</GradientText>
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-[6.4px] font-display text-[14px] font-bold leading-[21px] text-orange transition-colors hover:text-orange-light"
          >
            See all insights
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M3 7h8M8 4l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-orange/[0.08] bg-white p-px transition-all duration-200 hover:border-orange/20 hover:shadow-[0_12px_40px_rgba(232,69,26,0.08)]"
            >
              <div className="relative h-[175px] overflow-hidden bg-peach">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col p-[22.4px]">
                <span className="inline-block w-fit rounded-full bg-peach-soft px-[10.4px] py-[3px] font-body text-[10.88px] font-bold leading-[16.32px] text-orange-dark">
                  {article.category}
                </span>
                <h3 className="mt-3 font-display text-[15.2px] font-bold leading-[20.52px] tracking-[-0.152px] text-text-dark">
                  {article.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-[4.8px] text-xs leading-[18px] text-gray-400">
                    <ClockIcon />
                    {article.readTime} · {article.date}
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-[14px] bg-gradient-to-br from-peach-soft to-[#fdd5c8] text-orange">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path
                        d="M2 6h8M7 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <Link
                  href={article.href}
                  className="mt-4 block w-full rounded-lg border border-orange/[0.15] bg-peach-soft py-[9.4px] text-center font-display text-[12.8px] font-bold leading-[19.2px] tracking-[-0.128px] text-orange transition-colors hover:border-orange/30"
                >
                  Read Full Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
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
