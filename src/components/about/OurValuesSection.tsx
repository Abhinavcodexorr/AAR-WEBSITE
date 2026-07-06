import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { ourValues } from "@/data/about";

export function OurValuesSection() {
  const topRow = ourValues.items.slice(0, 3);
  const bottomRow = ourValues.items.slice(3);

  return (
    <section aria-label="Our Values" className="bg-white py-16 md:py-20">
      <Container>
        <Badge showDot={false} className="mb-5">
          {ourValues.badge}
        </Badge>

        <h2 className="font-display text-[clamp(1.75rem,4vw,40.985px)] font-extrabold leading-[45.083px] tracking-[-1.2296px] text-text-dark lg:whitespace-nowrap">
          {ourValues.title}{" "}
          <GradientText>{ourValues.gradient}</GradientText>
        </h2>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {topRow.map((value) => (
            <ValueCard key={value.number} {...value} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-[calc(66.666%+20px)] lg:grid-cols-2">
          {bottomRow.map((value) => (
            <ValueCard key={value.number} {...value} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ValueCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[14px] border border-orange/[0.08] bg-peach-light p-[33px]">
      <div className="flex items-center gap-2.5">
        <span className="font-display text-2xl font-extrabold text-orange/22">
          {number}
        </span>
        <span
          className="h-px flex-1 bg-gradient-to-r from-orange/15 to-transparent"
          aria-hidden
        />
      </div>
      <h3 className="mt-3.5 font-display text-base font-bold tracking-[-0.01em] text-text-dark">
        {title}
      </h3>
      <p className="mt-2 text-[13.68px] leading-[23.94px] text-gray-500">
        {description}
      </p>
    </article>
  );
}
