import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { ourStory } from "@/data/about";

export function OurStorySection() {
  return (
    <section aria-label="Our Story" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,513.5px)_minmax(0,513.5px)] lg:justify-between lg:gap-12">
          <div className="relative mx-auto w-full max-w-[513.5px] lg:mx-0">
            <div className="relative aspect-[513.5/641.875] overflow-hidden rounded-[20px] bg-peach shadow-[0_24px_64px_rgba(232,69,26,0.12)]">
              <Image
                src="/images/about/about-office.jpg"
                alt="AAR Insights team collaborating in a modern office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 514px"
              />
            </div>

            <div
              className="absolute left-[65.5%] top-[86%] w-[201px] rounded-[14px] px-6 py-5 shadow-[0_16px_20px_rgba(232,69,26,0.35)] max-lg:left-auto max-lg:right-0 max-lg:top-auto max-lg:bottom-0 max-lg:translate-y-1/4"
              style={{
                background:
                  "linear-gradient(150.48deg, #e8451a 0%, #f05a35 100%)",
              }}
            >
              <p className="font-display text-[35.2px] font-extrabold leading-[52.8px] tracking-[-1.408px] text-white">
                {ourStory.stat.value}
              </p>
              <p className="pt-0.5 text-[12.48px] leading-[18.72px] text-white/75">
                {ourStory.stat.label}
              </p>
            </div>
          </div>

          <div className="max-w-[513.5px] lg:pt-[83px]">
            <Badge
              showDot={false}
              className="mb-5 px-[13.6px] py-[4.8px] text-[11.52px] tracking-[0.9216px]"
            >
              {ourStory.badge}
            </Badge>

            <h2 className="max-w-[514px] font-display text-[clamp(1.75rem,3.5vw,35.13px)] font-extrabold leading-[38.643px] tracking-[-1.0539px] text-text-dark">
              {ourStory.title}{" "}
              <GradientText>{ourStory.gradient}</GradientText>
            </h2>

            <p className="mt-6 max-w-[514px] text-[15.2px] leading-[28.88px] text-gray-500">
              {ourStory.paragraphs[0]}
            </p>
            <p className="mt-5 max-w-[514px] pb-8 text-[15.2px] leading-[28.88px] text-gray-500">
              {ourStory.paragraphs[1]}
            </p>

            <Link
              href="/contact"
              className="inline-flex h-[48.188px] items-center gap-2 rounded-[10px] px-7 py-[13.6px] font-display text-[14px] font-bold leading-[21px] text-white shadow-[0_4px_8px_rgba(232,69,26,0.35)] transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              style={{
                background:
                  "linear-gradient(165.25deg, #e8451a 0%, #f05a35 100%)",
              }}
            >
              {ourStory.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
