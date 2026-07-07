"use client";

import { useEffect, useRef, useState } from "react";
import {
  contactForm,
  industryOptions,
  researchRequirementOptions,
} from "@/data/contact";
import { CountryCodeSelect } from "@/components/contact/CountryCodeSelect";
import {
  getPhoneMaxLength,
  initialContactFormValues,
  isContactFormValid,
  sanitizeNameInput,
  sanitizePhoneInput,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/contactFormValidation";
import { cn } from "@/lib/cn";

const inputClassName =
  "w-full rounded-[10px] border border-gray-200 bg-white px-[17.5px] font-body text-[15.2px] leading-[17px] text-text-dark placeholder:text-gray-400 outline-none transition-colors focus:border-orange/40 focus:ring-2 focus:ring-orange/10";

const labelClassName =
  "mb-[6px] block font-body text-[12.8px] font-normal uppercase leading-[15px] text-gray-600";

const errorInputClassName = "border-red-400 focus:border-red-400 focus:ring-red-100";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialContactFormValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!submitted) return;

    const frameId = window.requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });

    const timeoutId = window.setTimeout(() => {
      setSubmitted(false);
      setValues(initialContactFormValues);
      setErrors({});
    }, 2000);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [submitted]);

  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateContactForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        ref={successRef}
        className="flex flex-col items-center px-4 py-12 text-center sm:py-16"
        aria-live="polite"
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-peach-soft text-orange">
          <CheckIcon />
        </div>
        <h2 className="mt-6 font-display text-[28px] font-extrabold leading-8 tracking-[-0.02em] text-text-dark">
          {contactForm.successTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15.2px] leading-[24px] text-gray-500">
          {contactForm.successMessage}
        </p>
      </div>
    );
  }

  const phoneMaxLength = getPhoneMaxLength(values.countryCode, values.phoneNumber);
  const canSubmit = isContactFormValid(values);

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="font-display text-[26px] font-extrabold leading-[1.25] tracking-[-0.02em] text-text-dark sm:text-[32px] sm:leading-8">
        {contactForm.title}
      </h2>
      <p className="mt-3 text-[15px] leading-[24px] text-gray-500 sm:mt-4 sm:text-[15.2px] sm:leading-[22px]">
        {contactForm.description}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-4">
        <Field
          id="full-name"
          label={contactForm.fields.fullName.label}
          error={errors.fullName}
        >
          <input
            id="full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            placeholder={contactForm.fields.fullName.placeholder}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "full-name-error" : undefined}
            onChange={(event) =>
              updateField("fullName", sanitizeNameInput(event.target.value))
            }
            className={`${inputClassName} h-[51px] ${errors.fullName ? errorInputClassName : ""}`}
          />
        </Field>

        <Field
          id="company-name"
          label={contactForm.fields.companyName.label}
          error={errors.companyName}
        >
          <input
            id="company-name"
            name="companyName"
            type="text"
            autoComplete="organization"
            value={values.companyName}
            placeholder={contactForm.fields.companyName.placeholder}
            aria-invalid={!!errors.companyName}
            aria-describedby={errors.companyName ? "company-name-error" : undefined}
            onChange={(event) => updateField("companyName", event.target.value)}
            className={`${inputClassName} h-[51px] ${errors.companyName ? errorInputClassName : ""}`}
          />
        </Field>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-4">
        <Field id="designation" label={contactForm.fields.designation.label}>
          <input
            id="designation"
            name="designation"
            type="text"
            autoComplete="organization-title"
            value={values.designation}
            placeholder={contactForm.fields.designation.placeholder}
            onChange={(event) => updateField("designation", event.target.value)}
            className={`${inputClassName} h-[51px]`}
          />
        </Field>

        <Field
          id="business-email"
          label={contactForm.fields.businessEmail.label}
          error={errors.businessEmail}
        >
          <input
            id="business-email"
            name="businessEmail"
            type="email"
            autoComplete="email"
            value={values.businessEmail}
            placeholder={contactForm.fields.businessEmail.placeholder}
            aria-invalid={!!errors.businessEmail}
            aria-describedby={errors.businessEmail ? "business-email-error" : undefined}
            onChange={(event) => updateField("businessEmail", event.target.value)}
            className={`${inputClassName} h-[51px] ${errors.businessEmail ? errorInputClassName : ""}`}
          />
        </Field>
      </div>

      <Field
        id="phone-number"
        className="mt-4"
        label={contactForm.fields.phoneNumber.label}
        error={errors.phoneNumber}
      >
        <div className="flex gap-2">
          <CountryCodeSelect
            id="country-code"
            name="countryCode"
            value={values.countryCode}
            inputClassName={inputClassName}
            onChange={(countryCode) => {
              updateField("countryCode", countryCode);
              updateField(
                "phoneNumber",
                sanitizePhoneInput(values.phoneNumber, countryCode),
              );
            }}
          />
          <input
            id="phone-number"
            name="phoneNumber"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            value={values.phoneNumber}
            maxLength={phoneMaxLength}
            placeholder={contactForm.fields.phoneNumber.placeholder}
            required
            aria-required="true"
            aria-invalid={!!errors.phoneNumber}
            aria-describedby={errors.phoneNumber ? "phone-number-error" : undefined}
            onChange={(event) =>
              updateField(
                "phoneNumber",
                sanitizePhoneInput(event.target.value, values.countryCode),
              )
            }
            className={`${inputClassName} h-[51px] flex-1 ${errors.phoneNumber ? errorInputClassName : ""}`}
          />
        </div>
      </Field>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-4">
        <Field id="industry" label={contactForm.fields.industry.label}>
          <div className="relative">
            <select
              id="industry"
              name="industry"
              value={values.industry}
              onChange={(event) => updateField("industry", event.target.value)}
              className={`${inputClassName} h-[49px] appearance-none pr-10`}
            >
              <option value="">{contactForm.fields.industry.placeholder}</option>
              {industryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
        </Field>

        <Field
          id="research-requirement"
          label={contactForm.fields.researchRequirement.label}
        >
          <div className="relative">
            <select
              id="research-requirement"
              name="researchRequirement"
              value={values.researchRequirement}
              onChange={(event) =>
                updateField("researchRequirement", event.target.value)
              }
              className={`${inputClassName} h-[49px] appearance-none pr-10`}
            >
              <option value="">
                {contactForm.fields.researchRequirement.placeholder}
              </option>
              {researchRequirementOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
        </Field>
      </div>

      <Field id="message" className="mt-4" label={contactForm.fields.message.label}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          placeholder={contactForm.fields.message.placeholder}
          onChange={(event) => updateField("message", event.target.value)}
          className={`${inputClassName} min-h-[135px] resize-y py-[15px]`}
        />
      </Field>

      <button
        type="submit"
        disabled={!canSubmit}
        aria-disabled={!canSubmit}
        className={cn(
          "mt-8 flex h-[53.6px] w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-orange to-orange-light px-6 font-display text-[15.2px] font-bold leading-[22px] tracking-[-0.152px] text-white shadow-[0_8px_16px_rgba(232,69,26,0.35)] transition-[transform,opacity,box-shadow] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          canSubmit
            ? "cursor-pointer hover:-translate-y-1 hover:opacity-95 hover:shadow-[0_12px_24px_rgba(232,69,26,0.45)] active:translate-y-0"
            : "cursor-not-allowed opacity-50",
        )}
      >
        <CalendarIcon />
        {contactForm.submitLabel}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1 text-[12px] leading-[16px] text-gray-400">{hint}</p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1 text-[12px] leading-[16px] text-red-500"
        >
          {error}
        </p>
      )}
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

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <rect
        x="1.5"
        y="2.5"
        width="12"
        height="11"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M1.5 6h12M5 1v3M10 1v3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5l5 5L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
