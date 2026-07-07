"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionFade } from "@/components/MotionWrapper";
import { finalCta } from "@/data/home";

export function FinalCtaSection() {
  return (
    <SectionFade>
      <section
        id="contact"
        aria-label="Contact call to action"
        className="relative overflow-hidden bg-dark py-20 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 82.8% 35.7% at 50% 50%, rgba(232,69,26,0.1) 0%, transparent 100%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-[268px] h-[417px] w-[834px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(232,69,26,0.2) 0%, rgba(116,35,13,0.1) 32.5%, rgba(0,0,0,0) 65%)",
          }}
          aria-hidden
        />

        <Container className="relative text-center">
          <h2 className="mx-auto max-w-[720px] font-display text-[clamp(2rem,5vw,3.293rem)] font-extrabold leading-[1.08] tracking-[-1.8443px] text-white">
            <span className="block">{finalCta.headline.line1}</span>
            <span className="block">
              {finalCta.headline.line2Prefix}{" "}
              <GradientText>{finalCta.headline.line2Gradient}</GradientText>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[16.8px] leading-[31.08px] text-white/[0.48]">
            {finalCta.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-br from-orange to-orange-light px-[33.6px] py-4 font-display text-[15.2px] font-bold tracking-[-0.152px] text-white shadow-[0_8px_16px_rgba(232,69,26,0.4)] transition-opacity hover:opacity-95"
            >
              {finalCta.primaryCta}
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                <path
                  d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex h-[57px] items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.06] px-8 font-display text-[15.2px] font-semibold tracking-[-0.152px] text-white/80 transition-colors hover:bg-white/10"
            >
              {finalCta.secondaryCta}
            </Link>
          </div>
        </Container>
      </section>
    </SectionFade>
  );
}
