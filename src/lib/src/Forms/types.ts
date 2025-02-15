export interface FormConfiguration {
  fields: FormField[];
}

export interface FormField {
  field: {
    [fieldName: string]: string | boolean;
  };
  validator: Validators;
}

export type Validators = "email" | "name" | "phone" | "required";

export type FormValidationResult = {
  [fieldName: string]: string;
};
