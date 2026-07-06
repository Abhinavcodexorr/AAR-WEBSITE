"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { capabilities } from "@/data/home";
import { useInViewOnce } from "@/hooks/useCountUp";
import { cn } from "@/lib/cn";

const CAPABILITY_IMAGE_SIZES = "(max-width: 1024px) 100vw, 522px";

export function CoreCapabilitiesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [preloadImages, setPreloadImages] = useState(false);
  const { ref: sectionRef, isVisible } = useInViewOnce(0.15);
  const active = capabilities[activeTab];

  useEffect(() => {
    if (isVisible) {
      setPreloadImages(true);
    }
  }, [isVisible]);

  const shouldRenderImage = (index: number) =>
    preloadImages || index === 0 || index === activeTab;

  return (
    <section
      id="services"
      aria-label="Core Capabilities"
      className="bg-white py-16 md:py-20"
    >
      <Container>
        <div className="mb-8 max-w-xl md:mb-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-peach-soft px-[13.6px] py-[4.8px] font-body text-[11.52px] font-bold uppercase tracking-[0.9216px] text-orange-dark">
            <img
              src="/images/hero/core-capabilities.svg"
              alt=""
              width={11}
              height={11}
              className="size-[11px] shrink-0"
              aria-hidden
            />
            Core Capabilities
          </span>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.562rem)] font-extrabold leading-[1.1] tracking-[-1.2296px] text-text-dark">
            <span className="block">Six research capabilities,</span>
            <span className="mt-1 block">
              <GradientText>one strategic partner</GradientText>
            </span>
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Research capabilities"
          className="-mx-2 mb-8 flex gap-1 overflow-x-auto border-b-2 border-[#f3f0ff] pb-[2px] md:mb-10"
        >
          {capabilities.map((cap, index) => (
            <button
              key={cap.id}
              role="tab"
              id={`tab-${cap.id}`}
              aria-selected={activeTab === index}
              aria-controls={`panel-${cap.id}`}
              onClick={() => {
                setPreloadImages(true);
                setActiveTab(index);
              }}
              onMouseEnter={() => setPreloadImages(true)}
              onFocus={() => setPreloadImages(true)}
              className={cn(
                "relative shrink-0 cursor-pointer rounded-lg px-4 py-3 font-display text-[13.6px] tracking-[-0.136px] transition-all duration-200",
                activeTab === index
                  ? "font-bold text-orange after:absolute after:inset-x-4 after:-bottom-[2px] after:h-0.5 after:bg-orange"
                  : "font-medium text-gray-400 hover:bg-peach-soft/70 hover:text-orange-dark",
              )}
            >
              {cap.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-peach-soft to-[#fdd5c8]">
                <img
                  src={active.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                  aria-hidden
                />
              </span>
              <span className="text-[12.48px] font-bold uppercase tracking-[0.9984px] text-orange">
                {active.tag}
              </span>
            </div>

            <h3 className="pt-5 font-display text-[clamp(1.35rem,3vw,1.83rem)] font-extrabold leading-[1.15] tracking-[-0.7319px] text-text-dark">
              {active.title}
            </h3>

            <p className="pt-4 text-[15.2px] leading-[28.12px] text-gray-500">
              {active.description}
            </p>

            <ul className="space-y-[10.4px] pt-7">
              {active.features.map((feature) => (
                <li key={feature} className="flex items-start gap-[10.4px]">
                  <CheckIcon />
                  <span className="text-[14px] leading-[21px] text-gray-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-1.5 font-display text-sm font-bold tracking-[-0.14px] text-orange transition-colors hover:text-orange-light"
            >
              Enquire about this service
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                <path
                  d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div ref={sectionRef} className="relative lg:pt-[41px]">
            <div className="relative aspect-[522/373] overflow-hidden rounded-[20px] bg-[#fff8f6] shadow-[0_24px_64px_rgba(232,69,26,0.12)]">
              {capabilities.map((cap, index) => {
                if (!shouldRenderImage(index)) {
                  return null;
                }

                const isActive = activeTab === index;

                return (
                  <Image
                    key={cap.id}
                    src={cap.image}
                    alt={isActive ? cap.imageAlt : ""}
                    width={522}
                    height={373}
                    sizes={CAPABILITY_IMAGE_SIZES}
                    quality={80}
                    priority={index === 0}
                    aria-hidden={!isActive}
                    className={cn(
                      "h-full w-full object-cover transition-opacity duration-150",
                      isActive
                        ? "relative z-10 opacity-100"
                        : "absolute inset-0 z-0 opacity-0",
                    )}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className="mt-0.5 shrink-0"
      aria-hidden
    >
      <circle cx="7.5" cy="7.5" r="7" stroke="#e8451a" strokeWidth="1" />
      <path
        d="M4.5 7.5l2 2 4-4"
        stroke="#e8451a"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
