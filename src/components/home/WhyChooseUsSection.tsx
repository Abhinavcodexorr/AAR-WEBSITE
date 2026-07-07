"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionFade, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { whyChooseUs } from "@/data/home";

export function WhyChooseUsSection() {
  return (
    <SectionFade>
      <section aria-label="Why Choose Us" className="bg-white py-16 md:py-20">
        <Container>
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Badge className="mb-4 px-[13.6px] py-[4.8px] text-[11.52px] tracking-[0.9216px]">
                Why Choose Us
              </Badge>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.562rem)] font-extrabold leading-[1.1] tracking-[-1.2296px] text-text-dark">
                Six reasons organizations choose{" "}
                <GradientText>AAR Insights</GradientText>
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-[6.4px] rounded-[9px] border border-orange/20 px-[21px] py-[10.6px] font-display text-[14px] font-semibold leading-[21px] text-gray-600 transition-colors hover:border-orange/40 hover:text-orange"
            >
              About Us
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

          <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason) => (
              <StaggerItem key={reason.number}>
                <article className="rounded-[14px] border border-orange/[0.08] bg-peach-light p-[30.6px] transition-all duration-200 hover:border-orange/20 hover:bg-white hover:shadow-[0_8px_24px_rgba(232,69,26,0.06)]">
                  <div className="flex items-center gap-[9.6px]">
                    <span className="font-display text-2xl font-extrabold leading-6 text-orange/[0.22]">
                      {reason.number}
                    </span>
                    <span
                      className="h-px flex-1 bg-gradient-to-r from-orange/15 to-transparent"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 font-display text-[15.2px] font-bold leading-[22.8px] tracking-[-0.152px] text-text-dark">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[13.68px] leading-[23.94px] text-gray-500">
                    {reason.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </SectionFade>
  );
}
