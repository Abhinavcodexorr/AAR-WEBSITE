import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/data/contact";
import { ContactForm } from "./ContactForm";

export function ContactMainSection() {
  return (
    <section aria-label="Contact details and form" className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[348fr_695fr] lg:gap-12">
          <aside aria-label="Contact information">
            <ul className="space-y-[24px]">
              <ContactInfoItem
                icon={<MailIcon />}
                label={contactInfo.email.label}
                href={contactInfo.email.href}
              >
                {contactInfo.email.value}
              </ContactInfoItem>
              <ContactInfoItem
                icon={<PhoneIcon />}
                label={contactInfo.phone.label}
                href={contactInfo.phone.href}
              >
                {contactInfo.phone.value}
              </ContactInfoItem>
              <ContactInfoItem icon={<LocationIcon />} label={contactInfo.location.label}>
                {contactInfo.location.value}
              </ContactInfoItem>
            </ul>

            <div className="mt-10 rounded-2xl border border-orange/10 bg-peach-soft px-7 py-7">
              <div className="flex items-center gap-2">
                <span
                  className="size-2 shrink-0 rounded-full bg-orange"
                  aria-hidden
                />
                <h3 className="font-display text-[15.2px] font-bold leading-[18px] text-text-dark">
                  {contactInfo.responseCommitment.title}
                </h3>
              </div>
              <p className="mt-3 pt-3 text-[15.2px] leading-[26px] text-gray-500">
                {contactInfo.responseCommitment.description}
              </p>
            </div>
          </aside>

          <div className="rounded-[20px] border border-orange/10 bg-white p-[49px] shadow-[0_24px_64px_rgba(15,13,30,0.06)]">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactInfoItem({
  icon,
  label,
  href,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const valueClassName =
    "font-body text-[15.2px] leading-[21px] text-gray-600 transition-colors hover:text-orange";

  return (
    <li className="flex gap-4 sm:gap-4">
      <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-peach-soft to-[#fdd5c8] text-orange">
        {icon}
      </span>
      <div>
        <p className="font-body text-[15.2px] font-medium leading-[18px] text-gray-400">
          {label}
        </p>
        {href ? (
          <a href={href} className={`mt-1 inline-block ${valueClassName}`}>
            {children}
          </a>
        ) : (
          <p className={`mt-1 ${valueClassName.replace(" hover:text-orange", "")}`}>
            {children}
          </p>
        )}
      </div>
    </li>
  );
}

function MailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden>
      <rect x="1.5" y="3.5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 5l7 4.5L15.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden>
      <path
        d="M4 2h3l1.5 3-2 1.5a8 8 0 003.5 3.5L11 8l3 1.5V14a1.5 1.5 0 01-1.5 1.5C5.5 15.5 1.5 11.5 1.5 5.5A1.5 1.5 0 014 2z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden>
      <path
        d="M8.5 1.5a5 5 0 015 5c0 3.75-5 8.5-5 8.5S3.5 10.25 3.5 6.5a5 5 0 015-5z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="8.5" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
