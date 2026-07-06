"use client";

import { useEffect, useId, useRef, useState } from "react";
import { countryCodes } from "@/data/countryCodes";
import { cn } from "@/lib/cn";

type CountryCodeSelectProps = {
  id?: string;
  name?: string;
  value: string;
  onChange: (code: string) => void;
  inputClassName: string;
};

export function CountryCodeSelect({
  id,
  name,
  value,
  onChange,
  inputClassName,
}: CountryCodeSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  function selectCode(code: string) {
    onChange(code);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative shrink-0">
      {name ? <input type="hidden" name={name} value={value} /> : null}

      <button
        type="button"
        id={id}
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="listbox"
        aria-label={`Country code ${value}`}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className={cn(
          inputClassName,
          "flex h-[51px] w-[72px] items-center justify-between px-2.5 pr-7 text-[14px] font-semibold sm:w-[76px]",
        )}
      >
        <span className="truncate">{value}</span>
        <ChevronIcon className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
      </button>

      {open ? (
        <div className="absolute left-0 top-[calc(100%+4px)] z-50 w-[min(280px,calc(100vw-4rem))] overflow-hidden rounded-[10px] border border-gray-200 bg-white shadow-[0_12px_40px_rgba(15,13,30,0.12)]">
          <ul
            id={listId}
            role="listbox"
            aria-label="Country codes"
            className="max-h-[220px] overflow-y-auto py-1"
          >
            {countryCodes.map(({ code, country, iso }) => (
              <li key={`${code}-${iso}`} role="option" aria-selected={code === value}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] transition-colors hover:bg-peach-soft",
                    code === value && "bg-peach-soft/70",
                  )}
                  onClick={() => selectCode(code)}
                >
                  <span className="w-[40px] shrink-0 font-semibold text-text-dark">
                    {code}
                  </span>
                  <span className="w-7 shrink-0 text-[11px] font-medium uppercase text-gray-400">
                    {iso}
                  </span>
                  <span className="truncate text-gray-600">{country}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M1 1l3.5 3L8 1"
        stroke="#9ca3af"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
