"use client";

import {
  contactForm,
  industryOptions,
  researchRequirementOptions,
} from "@/data/contact";

const inputClassName =
  "w-full rounded-[10px] border border-gray-200 bg-white px-[17.5px] font-body text-[15.2px] leading-[17px] text-text-dark placeholder:text-gray-400 outline-none transition-colors focus:border-orange/40 focus:ring-2 focus:ring-orange/10";

const labelClassName =
  "mb-[6px] block font-body text-[15.2px] font-medium leading-[19px] text-text-dark";

export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="font-display text-[32px] font-extrabold leading-8 tracking-[-0.02em] text-text-dark">
        {contactForm.title}
      </h2>
      <p className="mt-1.5 text-[15.2px] leading-[20px] text-gray-500">
        {contactForm.description}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-4">
        <div>
          <label htmlFor="full-name" className={labelClassName}>
            {contactForm.fields.fullName.label}
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder={contactForm.fields.fullName.placeholder}
            className={`${inputClassName} h-[51px]`}
          />
        </div>
        <div>
          <label htmlFor="company-name" className={labelClassName}>
            {contactForm.fields.companyName.label}
          </label>
          <input
            id="company-name"
            name="companyName"
            type="text"
            required
            autoComplete="organization"
            placeholder={contactForm.fields.companyName.placeholder}
            className={`${inputClassName} h-[51px]`}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-4">
        <div>
          <label htmlFor="designation" className={labelClassName}>
            {contactForm.fields.designation.label}
          </label>
          <input
            id="designation"
            name="designation"
            type="text"
            autoComplete="organization-title"
            placeholder={contactForm.fields.designation.placeholder}
            className={`${inputClassName} h-[51px]`}
          />
        </div>
        <div>
          <label htmlFor="business-email" className={labelClassName}>
            {contactForm.fields.businessEmail.label}
          </label>
          <input
            id="business-email"
            name="businessEmail"
            type="email"
            required
            autoComplete="email"
            placeholder={contactForm.fields.businessEmail.placeholder}
            className={`${inputClassName} h-[51px]`}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="phone-number" className={labelClassName}>
          {contactForm.fields.phoneNumber.label}
        </label>
        <input
          id="phone-number"
          name="phoneNumber"
          type="tel"
          autoComplete="tel"
          placeholder={contactForm.fields.phoneNumber.placeholder}
          className={`${inputClassName} h-[51px]`}
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-4">
        <div>
          <label htmlFor="industry" className={labelClassName}>
            {contactForm.fields.industry.label}
          </label>
          <div className="relative">
            <select
              id="industry"
              name="industry"
              defaultValue=""
              className={`${inputClassName} h-[49px] appearance-none pr-10`}
            >
              <option value="" disabled>
                {contactForm.fields.industry.placeholder}
              </option>
              {industryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div>
          <label htmlFor="research-requirement" className={labelClassName}>
            {contactForm.fields.researchRequirement.label}
          </label>
          <div className="relative">
            <select
              id="research-requirement"
              name="researchRequirement"
              defaultValue=""
              className={`${inputClassName} h-[49px] appearance-none pr-10`}
            >
              <option value="" disabled>
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
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClassName}>
          {contactForm.fields.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={contactForm.fields.message.placeholder}
          className={`${inputClassName} min-h-[135px] resize-y py-[15px]`}
        />
      </div>

      <button
        type="submit"
        className="mt-8 flex h-[53.6px] w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-orange to-orange-light px-6 font-display text-[15.2px] font-bold leading-[22px] tracking-[-0.152px] text-white shadow-[0_8px_16px_rgba(232,69,26,0.35)] transition-opacity hover:opacity-95"
      >
        <CalendarIcon />
        {contactForm.submitLabel}
      </button>
    </form>
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
      <path d="M1.5 6h12M5 1v3M10 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
