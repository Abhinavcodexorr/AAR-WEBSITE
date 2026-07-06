"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SiteLogo } from "@/components/ui/SiteLogo";
import { navLinks, topBar } from "@/data/home";
import { contactInfo } from "@/data/contact";
import { cn } from "@/lib/cn";

type HeaderProps = {
  pathname?: string;
};

export function Header({ pathname = "/" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (link: (typeof navLinks)[number]) =>
    link.href === pathname || (pathname === "/" && !!link.active);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-dark-deep text-white/70">
        <Container className="flex flex-col items-center gap-2 px-4 py-2.5 md:h-[38px] md:flex-row md:items-center md:justify-between md:gap-4 md:px-8 md:py-0">
          <p className="text-center text-[11px] uppercase leading-[15px] tracking-[0.04em] md:truncate md:text-left">
            {topBar.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[12px] leading-none md:ml-auto md:shrink-0 md:gap-8 md:text-[11px]">
            <a
              href={contactInfo.email.href}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <MailIcon className="size-3.5 md:size-[11px]" />
              <span className="whitespace-nowrap">
                <span className="sr-only">{contactInfo.email.label}: </span>
                {contactInfo.email.value}
              </span>
            </a>
            <a
              href={contactInfo.phone.href}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <PhoneIcon className="size-3.5 md:size-[11px]" />
              <span className="whitespace-nowrap">
                <span className="sr-only">{contactInfo.phone.label}: </span>
                {contactInfo.phone.value}
              </span>
            </a>
          </div>
        </Container>
      </div>

      <div className="border-b border-gray-100 bg-white shadow-sm">
        <Container className="flex h-[72px] items-center justify-between gap-4">
          <Link href="/" aria-label="AAR Insights home">
            <SiteLogo variant="header" priority />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative px-3.5 py-2 font-display text-[15px] font-medium transition-colors",
                  isActive(link)
                    ? "font-semibold text-orange"
                    : "text-gray-500 hover:text-text-dark",
                )}
              >
                {link.label}
                {isActive(link) && (
                  <span className="absolute inset-x-3.5 -bottom-px h-0.5 bg-orange" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="/contact" variant="ghost" size="sm">
              Contact
            </Button>
            <Button href="/contact" size="sm">
              Request a Proposal
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-gray-200 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </Container>

        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="border-t border-gray-100 bg-white px-8 py-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 font-display text-[15px]",
                      isActive(link)
                        ? "bg-peach-soft font-semibold text-orange"
                        : "text-gray-500",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 9 9"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <rect
        x="0.5"
        y="1.5"
        width="8"
        height="6"
        rx="0.5"
        stroke="currentColor"
      />
      <path d="M0.5 2l4 3 4-3" stroke="currentColor" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 9 9"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path
        d="M2 1h2l1 2-1.5 1a5 5 0 002.5 2.5L7 5l2 1v2a1 1 0 01-1 1C3.5 9 0 5.5 0 1a1 1 0 011-1z"
        stroke="currentColor"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
