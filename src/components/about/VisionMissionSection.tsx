import { Container } from "@/components/ui/Container";
import { visionMission } from "@/data/about";

export function VisionMissionSection() {
  return (
    <section aria-label="Vision and Mission" className="bg-peach py-16 md:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <VisionMissionCard
            title={visionMission.vision.title}
            description={visionMission.vision.description}
          />
          <VisionMissionCard
            title={visionMission.mission.title}
            description={visionMission.mission.description}
          />
        </div>
      </Container>
    </section>
  );
}

function VisionMissionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[20px] border border-orange/10 bg-white p-8 md:p-[49px]">
      <div
        className="h-[3px] w-9 rounded-sm bg-gradient-to-r from-orange to-orange-light"
        aria-hidden
      />
      <h3 className="mt-6 font-display text-[17.6px] font-extrabold tracking-[-0.02em] text-text-dark">
        {title}
      </h3>
      <p className="mt-4 text-[15.2px] leading-[28.12px] text-gray-500">
        {description}
      </p>
    </article>
  );
}
