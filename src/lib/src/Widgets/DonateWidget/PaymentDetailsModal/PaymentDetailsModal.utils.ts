import { validateForm } from "$lib/src/Forms/validateForm";

interface PaymentFormValues {
  firstnameValue: string;
  lastnameValue: string;
  emailValue: string;
  termsOfUseValue: boolean;
}

export const validatePaymentForm = ({
  firstnameValue,
  lastnameValue,
  emailValue,
  termsOfUseValue,
}: PaymentFormValues) => {
  return validateForm({
    fields: [
      {
        field: { firstnameValue },
        validator: "name",
      },
      {
        field: { lastnameValue },
        validator: "name",
      },
      {
        field: { emailValue },
        validator: "email",
      },
      {
        field: { termsOfUseValue },
        validator: "required",
      }
    ],
  });
};
