"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { LegalPageData, LegalPageSection } from "@/data/legalPageTypes";

type LegalDocumentContentSectionProps = {
  page: LegalPageData;
  ariaLabel: string;
};

export function LegalDocumentContentSection({
  page,
  ariaLabel,
}: LegalDocumentContentSectionProps) {
  return (
    <section aria-label={ariaLabel} className="bg-white pb-16 pt-10 md:pb-20 md:pt-12">
      <Container>
        <div className="mx-auto max-w-[820px]">
          <div className="rounded-[20px] border border-orange/10 bg-peach-light p-8 md:p-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-peach-soft px-[14px] py-[6px] font-body text-[12.8px] font-semibold uppercase tracking-[0.08em] text-orange-dark">
              Effective Date: {page.effectiveDate}
            </p>

            <div className="mt-8 space-y-4">
              {page.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[15.2px] leading-[28px] text-gray-500"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 space-y-10">
              {page.sections.map((section) => (
                <LegalSection key={section.id} section={section} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LegalSection({ section }: { section: LegalPageSection }) {
  return (
    <article id={section.id} className="scroll-mt-28">
      <div
        className="h-[3px] w-9 rounded-sm bg-gradient-to-r from-orange to-orange-light"
        aria-hidden
      />
      <h2 className="mt-5 font-display text-[20px] font-extrabold tracking-[-0.02em] text-text-dark md:text-[22px]">
        {section.title}
      </h2>

      {section.paragraphs?.map((paragraph) => (
        <LegalParagraph key={paragraph}>{paragraph}</LegalParagraph>
      ))}

      {section.subsections?.map((subsection) => (
        <div key={subsection.title} className="mt-5">
          <h3 className="font-display text-[15.2px] font-bold leading-[22px] text-text-dark">
            {subsection.title}
          </h3>
          {subsection.intro ? (
            <p className="mt-2 text-[15.2px] leading-[28px] text-gray-500">
              {subsection.intro}
            </p>
          ) : null}
          <LegalList items={subsection.items} />
        </div>
      ))}

      {section.items ? <LegalList items={section.items} /> : null}

      {section.paragraphsAfter?.map((paragraph) => (
        <LegalParagraph key={paragraph}>{paragraph}</LegalParagraph>
      ))}
    </article>
  );
}

function LegalParagraph({ children }: { children: string }) {
  if (children.includes("Contact Us page")) {
    const [before, after] = children.split("Contact Us page");

    return (
      <p className="mt-4 text-[15.2px] leading-[28px] text-gray-500">
        {before}
        <Link
          href="/contact"
          className="font-semibold text-orange transition-colors hover:text-orange-light"
        >
          Contact Us page
        </Link>
        {after}
      </p>
    );
  }

  if (children.includes("Privacy Policy")) {
    const [before, after] = children.split("Privacy Policy");

    return (
      <p className="mt-4 text-[15.2px] leading-[28px] text-gray-500">
        {before}
        <Link
          href="/privacy-policy"
          className="font-semibold text-orange transition-colors hover:text-orange-light"
        >
          Privacy Policy
        </Link>
        {after}
      </p>
    );
  }

  return (
    <p className="mt-4 text-[15.2px] leading-[28px] text-gray-500">{children}</p>
  );
}

function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[15.2px] leading-[28px] text-gray-500"
        >
          <span
            className="mt-[11px] size-1.5 shrink-0 rounded-full bg-orange/70"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
