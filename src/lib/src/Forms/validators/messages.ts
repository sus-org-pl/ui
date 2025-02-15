import type { Validators } from "../types";

export const VALIDATION_MESSAGES: Record<Validators, string> = {
  email: "Nieprawidłowy adres email",
  name: "Nieprawidłowe dane",
  phone: "Nieprawidłowy numer telefonu",
  required: "To pole jest wymagane",
};
