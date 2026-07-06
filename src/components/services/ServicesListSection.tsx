import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { ServiceCardRow } from "./ServiceCardRow";

export function ServicesListSection() {
  return (
    <section aria-label="Our services" className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto flex w-full max-w-[1107px] flex-col gap-0.5">
          {services.map((service) => (
            <ServiceCardRow key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
