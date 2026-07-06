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
    const maxLength = digits.startsWith("0") ? 11 : 10;
    return digits.slice(0, maxLength);
  }

  return digits.slice(0, 15);
}

export function getPhoneMaxLength(countryCode: string, phoneNumber: string) {
  if (countryCode === "+91") {
    return phoneNumber.startsWith("0") ? 11 : 10;
  }

  return 15;
}

export function validatePhoneNumber(countryCode: string, phoneDigits: string) {
  if (!phoneDigits) {
    return undefined;
  }

  if (countryCode === "+91") {
    if (phoneDigits.startsWith("0")) {
      if (phoneDigits.length !== 11) {
        return "Mobile number starting with 0 must be 11 digits.";
      }
      return undefined;
    }

    if (phoneDigits.length !== 10) {
      return "Mobile number must be 10 digits.";
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
