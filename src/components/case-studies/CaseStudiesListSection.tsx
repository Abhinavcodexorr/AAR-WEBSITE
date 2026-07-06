import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";

export function CaseStudiesListSection() {
  return (
    <section aria-label="Case study examples" className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto flex w-full max-w-[1107px] flex-col gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </Container>
    </section>
  );
}
