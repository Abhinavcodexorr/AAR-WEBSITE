import Link from "next/link";
import type { ServiceItem } from "@/data/services";
import { cn } from "@/lib/cn";

type ServiceCardRowProps = {
  service: ServiceItem;
};

export function ServiceCardRow({ service }: ServiceCardRowProps) {
  const description = (
    <div className="flex h-full flex-col bg-white p-12">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-peach-soft to-[#fdd5c8]">
        <img
          src={service.icon}
          alt=""
          width={20}
          height={20}
          className="size-5"
          aria-hidden
        />
      </div>

      <h2
        id={`${service.id}-title`}
        className="pt-5 font-display text-[27px] font-extrabold leading-[33.666px] tracking-[-0.7319px] text-text-dark"
      >
        {service.title}
      </h2>

      <p className="pt-4 text-[15.2px] leading-[28.12px] text-gray-500">
        {service.description}
      </p>

      <Link
        href="/contact"
        className="mt-7 inline-flex w-fit items-center gap-[6.4px] font-display text-sm font-bold tracking-[-0.14px] text-orange transition-colors hover:text-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
      >
        Service to Enquire
        <img
          src="/images/services/arrow.svg"
          alt=""
          width={13}
          height={13}
          className="size-[13px] shrink-0"
          aria-hidden
        />
      </Link>
    </div>
  );

  const coverage = (
    <div className="flex h-full flex-col bg-peach p-12">
      <h3 className="font-display text-base font-bold leading-[19px] text-text-dark">
        What We Cover
      </h3>

      <ul className="flex flex-col gap-[12.8px] pt-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-[10.4px]">
            <img
              src="/images/services/check.svg"
              alt=""
              width={14}
              height={14}
              className="mt-0.5 size-[14px] shrink-0"
              aria-hidden
            />
            <span className="text-[15.2px] leading-[22.398px] text-gray-600">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <article
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className="grid overflow-hidden rounded-[20px] border border-orange/[0.08] transition-all duration-200 hover:border-orange/20 hover:shadow-[0_8px_24px_rgba(232,69,26,0.06)] lg:grid-cols-2"
    >
      <div className={cn(service.reversed && "lg:order-2")}>{description}</div>
      <div className={cn(service.reversed && "lg:order-1")}>{coverage}</div>
    </article>
  );
}
