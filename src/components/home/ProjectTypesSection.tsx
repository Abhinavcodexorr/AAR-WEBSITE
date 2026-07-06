import { Container } from "@/components/ui/Container";
import { projectTypes } from "@/data/home";

export function ProjectTypesSection() {
  return (
    <section aria-label="Project Types" className="bg-peach py-16 md:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-peach-soft px-[13.6px] py-[4.8px] font-body text-[11.52px] font-bold uppercase tracking-[0.9216px] text-orange-dark">
            <img
              src="/images/project-types/research-expertise.svg"
              alt=""
              width={11}
              height={11}
              className="size-[11px] shrink-0"
              aria-hidden
            />
            Research Expertise
          </span>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.562rem)] font-extrabold leading-[1.1] tracking-[-1.2296px] text-text-dark">
            Project types we support
          </h2>
          <p className="mt-4 text-[16px] leading-[29.6px] text-gray-500">
            From telephone interviews to B2B executive studies, our data
            collection capabilities cover every methodology your research
            demands.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectTypes.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-orange/[0.08] bg-white p-[33px]"
            >
              <div className="flex items-center gap-[13.6px]">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br from-peach-soft to-[#fdd5c8]">
                  <img
                    src={project.icon}
                    alt=""
                    width={21}
                    height={21}
                    className="size-[21px]"
                    aria-hidden
                  />
                </span>
                <h3 className="font-display text-base font-bold leading-6 tracking-[-0.16px] text-text-dark">
                  {project.title}
                </h3>
              </div>
              <p className="pt-4 text-[14px] leading-[24.5px] text-gray-500">
                {project.description}
              </p>
              <ul className="space-y-2 pt-5">
                {project.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-[8.8px] text-[13.36px] leading-[20.04px] text-gray-600"
                  >
                    <span
                      className="size-[5px] shrink-0 rounded-[2.5px] bg-gradient-to-br from-orange to-orange-light"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
