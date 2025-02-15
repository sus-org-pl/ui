import type { FormConfiguration, FormValidationResult } from "./types";
import { Validators } from "./validators";
import { VALIDATION_MESSAGES } from "./validators/messages";

export const validateForm = ({
  fields,
}: FormConfiguration): FormValidationResult => {
  const errors: FormValidationResult = {};

  fields.forEach(({ field, validator }) => {
    const [fieldName, fieldValue] = Object.entries(field)[0];
    let isFieldValid: boolean = false;

    if (typeof fieldValue === "boolean") {
      isFieldValid = Validators.required(fieldValue);
    } else {
      isFieldValid = Validators[validator](fieldValue);
    }

    if (!isFieldValid) {
      errors[fieldName] = VALIDATION_MESSAGES[validator];
    }
  });

  return errors;
};
