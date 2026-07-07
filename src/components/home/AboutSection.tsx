"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SectionFade, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { about } from "@/data/home";

export function AboutSection() {
  return (
    <SectionFade>
      <section id="about" aria-label="About AAR Insights" className="bg-peach py-16 md:py-20">
        <Container>
          <div className="grid items-stretch gap-10 lg:h-[650px] lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-12">
            <div className="flex flex-col justify-between lg:h-[650px]">
              <div>
                <Badge className="px-[13.6px] py-[4.8px] text-[11.52px] tracking-[0.9216px]">
                  {about.badge}
                </Badge>
                <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.562rem)] font-extrabold tracking-[-1.2296px] lg:text-[40.985px] lg:leading-[45.083px]">
                  <span className="block text-text-dark">{about.headline.line1}</span>
                  <span className="block text-text-dark">
                    {about.headline.line2}{" "}
                    <span className="text-orange">{about.headline.line2Accent}</span>
                  </span>
                  <span className="block">
                    <GradientText>{about.headline.line3}</GradientText>
                  </span>
                </h2>
                {about.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className={`max-w-[561px] font-medium text-[15.6px] leading-[28.86px] text-gray-600 ${
                      index === 0 ? "mt-6" : "mt-5"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <Button
                href="/about"
                variant="primary"
                size="md"
                showArrow
                className="mt-8 w-fit rounded-[10px] bg-gradient-to-br from-orange to-orange-light px-7 py-[13.6px] text-[14.4px] leading-[21.6px] shadow-[0px_4px_10px_rgba(232,69,26,0.3)] hover:from-orange hover:to-orange-light lg:mt-0"
              >
                {about.cta}
              </Button>
            </div>

            <div className="group relative h-[420px] w-full cursor-pointer sm:h-[520px] lg:h-[650px] lg:w-[520px]">
              <div className="relative h-full w-full overflow-hidden rounded-[20px] shadow-[0px_32px_80px_0px_rgba(232,69,26,0.15)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-3 group-hover:scale-[1.02] group-hover:shadow-[0px_40px_96px_0px_rgba(232,69,26,0.22)]">
                <Image
                  src="/images/about/founder.png"
                  alt="AAR Insights founder and research team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-[21px] left-[18px] right-[18px] rounded-[14px] bg-white/95 p-[25px] shadow-[0px_12px_41px_0px_rgba(0,0,0,0.15)]">
                  <div className="flex items-center gap-[16.4px]">
                    <span className="flex size-[43px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-orange to-orange-light">
                      <img
                        src="/images/about/award-icon.svg"
                        alt=""
                        width={21}
                        height={21}
                        className="size-[21px]"
                        aria-hidden
                      />
                    </span>
                    <div>
                      <p className="font-display text-[26.3px] font-extrabold leading-[26.3px] text-orange">
                        {about.founderCard.stat}
                      </p>
                      <p className="text-[12.8px] font-semibold leading-[19.2px] text-gray-500">
                        {about.founderCard.label}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-[21.5px] text-gray-600">
                    {about.founderCard.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center lg:mt-16">
            <h3 className="font-display text-[clamp(1.5rem,3vw,1.83rem)] font-extrabold leading-[1.2] tracking-[-0.73px] text-text-dark">
              What sets us apart
            </h3>
          </div>

          <StaggerContainer className="mt-8 grid gap-5 md:grid-cols-2">
            {about.differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <article className="rounded-[14px] border border-orange/[0.06] bg-white/50 p-[33px] transition-all duration-200 hover:border-orange/20 hover:bg-white hover:shadow-[0_8px_24px_rgba(232,69,26,0.06)]">
                  <div className="flex gap-4">
                    <span className="mt-2 size-1.5 shrink-0 rounded-[3px] bg-gradient-to-br from-orange to-orange-light" />
                    <div>
                      <h4 className="mb-2.5 font-display text-base font-bold leading-6 text-text-dark">
                        {item.title}
                      </h4>
                      <p className="text-[15.2px] leading-[25.6px] text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </SectionFade>
  );
}
