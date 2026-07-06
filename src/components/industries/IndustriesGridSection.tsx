import { Container } from "@/components/ui/Container";
import { industries } from "@/data/industries";
import { IndustryCard } from "./IndustryCard";

export function IndustriesGridSection() {
  return (
    <section aria-label="Industries we serve" className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto grid w-full max-w-[1107px] gap-5 sm:grid-cols-2">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
