export type ContactFormValues = {
  fullName: string;
  companyName: string;
  designation: string;
  businessEmail: string;
  countryCode: string;
  phoneNumber: string;
  industry: string;
  researchRequirement: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const businessEmailPattern =
  /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

const namePattern = /^[a-zA-Z]+(?:[ '\-][a-zA-Z]+)*$/;

export function sanitizePhoneInput(value: string, countryCode = "+91") {
  const digits = value.replace(/\D/g, "");

  if (countryCode === "+91") {
    return digits.slice(0, 11);
  }

  return digits.slice(0, 15);
}

export function getPhoneMaxLength(countryCode: string, _phoneNumber: string) {
  if (countryCode === "+91") {
    return 11;
  }

  return 15;
}

export function validatePhoneNumber(countryCode: string, phoneDigits: string) {
  if (!phoneDigits) {
    return "Please enter your mobile number.";
  }

  if (countryCode === "+91") {
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return "Mobile number must be 10 or 11 digits.";
    }

    return undefined;
  }

  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    return "Please enter a valid phone number (7–15 digits).";
  }

  return undefined;
}

export function sanitizeNameInput(value: string) {
  return value.replace(/[^a-zA-Z\s'-]/g, "");
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const fullName = values.fullName.trim().replace(/\s+/g, " ");
  const companyName = values.companyName.trim();
  const businessEmail = values.businessEmail.trim().toLowerCase();
  const phoneDigits = sanitizePhoneInput(values.phoneNumber, values.countryCode);

  if (!fullName) {
    errors.fullName = "Please enter your full name.";
  } else if (fullName.length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  } else if (!namePattern.test(fullName)) {
    errors.fullName = "Name can only contain letters, spaces, hyphens, and apostrophes.";
  }

  if (!companyName) {
    errors.companyName = "Please enter your company name.";
  } else if (companyName.length < 2) {
    errors.companyName = "Company name must be at least 2 characters.";
  }

  if (!businessEmail) {
    errors.businessEmail = "Please enter your business email.";
  } else if (!businessEmailPattern.test(businessEmail)) {
    errors.businessEmail = "Please enter a valid business email address.";
  }

  const phoneError = validatePhoneNumber(values.countryCode, phoneDigits);
  if (phoneError) {
    errors.phoneNumber = phoneError;
  }

  return errors;
}

export function isContactFormValid(values: ContactFormValues): boolean {
  return Object.keys(validateContactForm(values)).length === 0;
}

export const initialContactFormValues: ContactFormValues = {
  fullName: "",
  companyName: "",
  designation: "",
  businessEmail: "",
  countryCode: "+91",
  phoneNumber: "",
  industry: "",
  researchRequirement: "",
  message: "",
};
