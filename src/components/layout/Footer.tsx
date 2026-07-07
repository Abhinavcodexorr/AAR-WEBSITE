"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionFade } from "@/components/MotionWrapper";
import { SiteLogo } from "@/components/ui/SiteLogo";
import { footer } from "@/data/home";
import { contactInfo } from "@/data/contact";

const footerIcons = {
  email: "/images/footer/email.svg",
  phone: "/images/footer/phone.svg",
  location: "/images/footer/location.svg",
  linkedin: "/images/footer/linkedin.svg",
  twitter: "/images/footer/twitter.svg",
  facebook: "/images/footer/facebook.svg",
} as const;

type FooterProps = {
  showCtaBanner?: boolean;
};

export function Footer({ showCtaBanner = true }: FooterProps) {
  return (
    <SectionFade>
    <footer className="bg-dark text-white/40" aria-label="Site footer">
      {showCtaBanner && (
        <div
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(171.45deg, #c73b15 0%, #e8451a 50%, #f05a35 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03) 0.57%, rgba(0,0,0,0) 0.57%), linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 0%)",
            }}
            aria-hidden
          />
          <Container className="relative flex min-h-[176px] flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-12">
            <div className="max-w-[523px]">
              <h3 className="font-display text-[25.6px] font-extrabold leading-[38.4px] tracking-[-0.512px] text-white">
                {footer.ctaBanner.title}
              </h3>
              <p className="mt-1 text-[14.4px] leading-[21.6px] text-white/75">
                {footer.ctaBanner.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-[10px] bg-white px-7 py-[13.6px] font-display text-[14.4px] font-bold leading-[21.6px] text-orange shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-opacity hover:opacity-95"
            >
              {footer.ctaBanner.button}
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
          </Container>
        </div>
      )}

      <Container className="pb-10 pt-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,357px)_minmax(0,178px)_minmax(0,178px)_minmax(0,250px)] lg:gap-x-12">
          <div>
            <SiteLogo variant="footer" />
            <p className="mt-5 max-w-[300px] text-[13.6px] uppercase leading-[25.16px] tracking-[0.04em] text-white/40">
              {footer.description}
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              <ContactItem
                href={contactInfo.email.href}
                icon={footerIcons.email}
                title={contactInfo.email.label}
                label={contactInfo.email.value}
              />
              <ContactItem
                href={contactInfo.phone.href}
                icon={footerIcons.phone}
                title={contactInfo.phone.label}
                label={contactInfo.phone.value}
              />
              <ContactItem
                icon={footerIcons.location}
                title={contactInfo.location.label}
                label={contactInfo.location.value}
              />
            </ul>

            <div className="mt-7">
              <p className="font-display text-[12px] font-bold uppercase tracking-[0.72px] text-white">
                Connect With Us
              </p>
              <div className="mt-[13.6px] flex gap-[10.4px]">
                <SocialLink href="#" label="LinkedIn" iconSrc={footerIcons.linkedin} />
                <SocialLink href="#" label="Twitter" iconSrc={footerIcons.twitter} />
                <SocialLink href="#" label="Facebook" iconSrc={footerIcons.facebook} />
              </div>
            </div>
          </div>

          <FooterColumn title="Quick Links" linkStyle="semibold">
            {footer.quickLinks.map((link) => (
              <FooterLink key={link} href={getFooterLinkHref(link)}>
                {link}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Industries" linkStyle="regular">
            {footer.footerIndustries.map((item) => (
              <FooterLink key={item} href={getFooterIndustryHref(item)}>
                {item}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services" linkStyle="semibold">
            {footer.services.map((item) => (
              <FooterLink key={item} href={getFooterServiceHref(item)}>
                {item}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>
      </Container>

      <div className="border-t border-orange/[0.12]">
        <Container className="flex flex-col items-start justify-between gap-4 py-[21px] pb-5 md:flex-row md:items-center">
          <p className="text-[12.8px] leading-[19.2px] text-white/[0.22]">
            {footer.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.8px] leading-[19.2px] text-white/[0.22]">
            {footer.legal.map((item) => (
              <Link key={item} href="#" className="transition-colors hover:text-white/40">
                {item}
              </Link>
            ))}
            <span>Noida, India</span>
          </div>
        </Container>
      </div>
    </footer>
    </SectionFade>
  );
}

function ContactItem({
  href,
  icon,
  title,
  label,
}: {
  href?: string;
  icon: string;
  title: string;
  label: string;
}) {
  const content = (
    <>
      <img src={icon} alt="" width={13} height={13} className="size-[13px] shrink-0" />
      <span>
        <span className="block font-display text-[11px] font-bold uppercase tracking-[0.66px] text-white/55">
          {title}
        </span>
        <span className="mt-0.5 block text-[13.28px] leading-[19.92px] text-white/40 transition-colors group-hover:text-white/60">
          {label}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="group flex items-start gap-[9.6px]">
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-[9.6px]">
      {content}
    </li>
  );
}

function getFooterIndustryHref(label: string) {
  const routes: Record<string, string> = {
    Technology: "/industries#technology-saas",
    Healthcare: "/industries#healthcare-life-sciences",
    Manufacturing: "/industries#manufacturing-industrial",
    BFSI: "/industries#banking-financial-services",
    Retail: "/industries#consumer-retail",
    Automotive: "/industries#automotive",
    Education: "/industries#education",
    Energy: "/industries#energy-utilities",
    Logistics: "/industries#logistics-supply-chain",
    Telecom: "/industries#telecom-media",
  };

  return routes[label] ?? "/industries";
}

function getFooterServiceHref(label: string) {
  const routes: Record<string, string> = {
    "Market Research": "/services#market-research",
    "Competitive Intelligence": "/services#competitive-intelligence",
    "Customer Insights": "/services#customer-insights",
    "Industry Research": "/services#industry-research",
    "Go-To-Market Strategy": "/services#go-to-market",
    "Business Intelligence & Analytics": "/services#business-intelligence",
  };

  return routes[label] ?? "/services";
}

function getFooterLinkHref(label: string) {
  const routes: Record<string, string> = {
    Home: "/",
    "About Us": "/about",
    Services: "/services",
    Industries: "/industries",
    "Case Studies": "/case-studies",
    Insights: "/insights",
    Contact: "/contact",
  };

  if (routes[label]) return routes[label];

  return `/#${label.toLowerCase().replace(/\s+/g, "-")}`;
}

function FooterColumn({
  title,
  linkStyle,
  children,
}: {
  title: string;
  linkStyle: "semibold" | "regular";
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-display text-[12.8px] font-bold uppercase tracking-[1.024px] text-white">
        {title}
      </h4>
      <ul
        className={
          linkStyle === "semibold"
            ? "mt-5 flex flex-col gap-[9.6px] font-semibold"
            : "mt-5 flex flex-col gap-[9.6px] font-normal"
        }
      >
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-[13.6px] leading-[20.4px] text-white/40 transition-colors hover:text-white/60"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  iconSrc,
}: {
  href: string;
  label: string;
  iconSrc: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-[8px] border border-white/[0.08] bg-white/[0.04] transition-colors hover:border-white/20 hover:bg-white/[0.08]"
    >
      <img src={iconSrc} alt="" width={16} height={16} className="size-4" />
    </a>
  );
}
