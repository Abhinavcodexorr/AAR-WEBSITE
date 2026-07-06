import { Container } from "@/components/ui/Container";
import { StatsBannerGrid } from "./StatsBannerGrid";

export function StatsBannerSection() {
  return (
    <section aria-label="Statistics" className="relative overflow-hidden bg-dark py-16 md:py-20">
      <div
        className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[800px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(232,69,26,0.15) 0%, rgba(0,0,0,0) 65%)",
        }}
        aria-hidden
      />

      <Container>
        <StatsBannerGrid />
      </Container>
    </section>
  );
}
