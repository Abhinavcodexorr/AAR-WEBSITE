import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { processSteps } from "@/data/home";

export function ProcessSection() {
  return (
    <section aria-label="Our Process" className="bg-peach py-16 md:py-20">
      <Container>
        <div className="mb-10 md:mb-12">
          <Badge className="mb-4 px-[13.6px] py-[4.8px] text-[11.52px] tracking-[0.9216px]">
            Our Approach
          </Badge>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.562rem)] font-extrabold leading-[1.1] tracking-[-1.2296px] text-text-dark">
            From question to clarity —{" "}
            <GradientText>five steps</GradientText>
          </h2>
        </div>

        <div className="relative isolate pt-8 md:pt-10">
          {/* Connector line — behind cards only, links step circles */}
          <div
            className="pointer-events-none absolute left-7 right-7 z-0 hidden h-[2px] lg:block"
            style={{ top: "57px" }}
            aria-hidden
          >
            <div className="absolute inset-0 bg-orange/[0.12]" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange via-orange-light to-cyan" />
          </div>

          <div className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-[3px]">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="relative rounded-2xl border border-orange/[0.08] bg-white px-[25px] py-[33px] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(232,69,26,0.08)]"
              >
                <div className="relative z-20 flex size-12 items-center justify-center rounded-[24px] bg-gradient-to-br from-peach-soft to-[#fdd5c8] font-display text-[13.6px] font-extrabold leading-[20.4px] text-orange ring-[6px] ring-white">
                  {step.step}
                </div>
                <h3 className="mt-5 font-display text-[14.4px] font-bold leading-[21.6px] tracking-[-0.144px] text-text-dark">
                  {step.title}
                </h3>
                <p className="mt-[9.6px] text-[13.12px] leading-[22.96px] text-gray-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
