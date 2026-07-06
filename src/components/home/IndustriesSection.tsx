import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { industries } from "@/data/home";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-label="Industries We Serve"
      className="relative overflow-hidden bg-dark py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute right-0 top-[207px] size-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(0,0,0,0) 65%)",
        }}
        aria-hidden
      />

      <Container className="relative">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <Badge
              variant="peach"
              showDot={false}
              className="mb-4 border border-orange/25 bg-peach-soft px-[14.6px] py-[5.8px] text-[11.52px] tracking-[0.9216px]"
            >
              Industries We Serve
            </Badge>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.195rem)] font-extrabold leading-[1.1] tracking-[-1.0539px] text-white">
              Cross-sector intelligence across{" "}
              <GradientText>11 industries</GradientText>
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-[6.4px] rounded-[9px] border border-orange/25 bg-orange/[0.12] px-[21px] py-[10.6px] font-display text-[14px] font-semibold leading-[21px] text-orange-dark transition-colors hover:bg-orange/[0.18]"
          >
            View All
            <img
              src="/images/industries/arrow-view-all.svg"
              alt=""
              width={14}
              height={14}
              className="size-[14px] shrink-0"
              aria-hidden
            />
          </Link>
        </div>

        <div className="grid gap-[10px] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href="/industries"
              className="group flex h-[74px] cursor-pointer items-center justify-between rounded-[10px] border border-white/[0.08] bg-white/[0.04] px-[21px] py-[16.2px] transition-all duration-200 hover:border-orange/30 hover:bg-white/[0.08]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-orange/[0.12]">
                  <img
                    src={industry.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="size-4"
                    aria-hidden
                  />
                </span>
                <span className="truncate font-body text-[14px] font-medium leading-[21px] text-white/[0.68]">
                  {industry.name}
                </span>
              </div>
              <img
                src="/images/industries/arrow.svg"
                alt=""
                width={14}
                height={14}
                className="size-[14px] shrink-0 opacity-70 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
