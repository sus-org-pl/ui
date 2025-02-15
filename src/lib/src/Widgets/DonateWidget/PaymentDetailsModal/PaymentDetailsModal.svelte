<script lang="ts">
  import Button from "$lib/src/Button/Button.wc.svelte";
  import Checkbox from "$lib/src/Checkbox/Checkbox.wc.svelte";
  import type { FormValidationResult } from "$lib/src/Forms/types";
  import Input from "$lib/src/Input/Input.wc.svelte";
  import Modal from "$lib/src/Modal/Modal.wc.svelte";
  import Typography from "$lib/src/Typography/Typography.wc.svelte";
  import { getPaymentLink } from "../DonateWidget.utils";
  import { validatePaymentForm } from "./PaymentDetailsModal.utils";

  export let campaignId: number;
  export let startPaymentEndpoint: string;
  export let firstname: string | undefined = undefined;
  export let lastname: string | undefined = undefined;
  export let email: string | undefined = undefined;
  export let selectedPrice: number = 0;

  let firstnameValue = firstname || "";
  let lastnameValue = lastname || "";
  let emailValue = email || "";
  let termsOfUseValue = false;
  let marketingAgreementValue = false;

  let errors: FormValidationResult = {};

  const redirectToPayment = async () => {
    try {
      getPaymentLink({
        startPaymentEndpoint,
        price: selectedPrice,
        campaignId,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        isTermsOfUseAccepted: termsOfUseValue,
        isMarketingConsentAccepted: marketingAgreementValue,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onFormSubmit = async () => {
    errors = validatePaymentForm({
      firstnameValue,
      lastnameValue,
      emailValue,
      termsOfUseValue,
    });

    if (Object.keys(errors).length === 0) {
      await redirectToPayment();
    }
  };

  const onModalClose = () => {
    selectedPrice = 0;
    errors = {};
  };
</script>

<Modal
  isOpen={selectedPrice > 0}
  onClose={onModalClose}
  title="Już prawie gotowe"
>
  <div class="contentWrapper">
    <Typography type="body1">
      Dziękujemy, że chcesz wesprzeć naszą działalność. Prosimy o podanie
      wymaganych danych oraz zaaakceptowanie regulaminu wpłat.
    </Typography>
    <div class="formLayout">
      <Input
        outlined
        placeholder="Imię"
        bind:value={firstnameValue}
        errorMessage={errors["firstnameValue"]}
      />
      <Input
        outlined
        placeholder="Nazwisko"
        bind:value={lastnameValue}
        errorMessage={errors["lastnameValue"]}
      />
      <Input
        outlined
        placeholder="Adres e-mail"
        bind:value={emailValue}
        errorMessage={errors["emailValue"]}
      />
    </div>
    <Checkbox
      bind:checked={termsOfUseValue}
      label="Zapoznałem się oraz akceptuję regulamin kampanii"
      errorMessage={errors["termsOfUseValue"]}
    />
    <Checkbox
      bind:checked={marketingAgreementValue}
      label="Zapoznałem się z treścią klauzulii informacyjnej i wyrażam zgodę na umieszczenie moich danych osobowych w bazie organizacji oraz otrzymywanie informacji o jej działaniach."
    />
    <Button action={onFormSubmit} variant="filled" color="yellow" size="small">
      Przejdź do płatności ({selectedPrice} PLN)
    </Button>
  </div>
</Modal>

<style lang="scss">
  @import "$lib/scss/breakpoints.scss";

  .contentWrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: fit-content;
  }

  .formLayout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-block-start: 8px;

    @include tablet-up {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 1fr;
    }
  }
</style>
