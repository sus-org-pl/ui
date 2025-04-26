<svelte:options customElement="sus-donate-widget" />

<script lang="ts">
  import type { CardAsComponent } from "../../Card/Card.types";
  import Button from "../../Button/Button.wc.svelte";
  import Card from "../../Card/Card.wc.svelte";
  import Logo from "../../Logo/Logo.wc.svelte";
  import Typography from "../../Typography/Typography.wc.svelte";
  import {
    DEFAULT_DONATE_BODY,
    DEFAULT_DONATE_CHOOSE_PRICE_CTA,
    DEFAULT_DONATE_TITLE,
    DONATE_WIDGET_SUGGESTED_PRICES,
  } from "./DonateWidget.consts";
  import type {
    DonateWidgetSuggestedPrices,
    ServiceTermsAndConditionsDocument,
  } from "./DonateWidget.types";
  import PaymentDetailsModal from "./PaymentDetailsModal/PaymentDetailsModal.svelte";
  import Input from "$lib/src/Input/Input.wc.svelte";

  import SUSCapsPattern from "./assets/sus_caps_pattern.svg";

  export let body: string = DEFAULT_DONATE_BODY;
  export let choosePriceCta: string = DEFAULT_DONATE_CHOOSE_PRICE_CTA;
  export let title: string = DEFAULT_DONATE_TITLE;
  export let suggestedPrices: DonateWidgetSuggestedPrices =
    DONATE_WIDGET_SUGGESTED_PRICES;
  export let serviceTermsAndConditionsDocs: ServiceTermsAndConditionsDocument[] =
    [];
  export let isCustomPriceAllowed: boolean = true;
  export let campaignId: number;
  export let startPaymentEndpoint: string;
  export let firstname: string | undefined = undefined;
  export let lastname: string | undefined = undefined;
  export let email: string | undefined = undefined;
  export let as: CardAsComponent = "section";
  export let isCapsPatternVisible: boolean = false;

  /** For WebComponents use */
  export let termsUrl: string | undefined = undefined;

  if (termsUrl) {
    serviceTermsAndConditionsDocs.push({
      url: termsUrl,
      name: "regulamin wpłat",
    });
  }

  let customPrice = "";

  $: selectedPrice = 0;
  $: isCustomPriceBoxVisible = false;

  const onChoosePrice: (price: number) => void = (price) => {
    selectedPrice = price;
  };

  const onCustomPriceClick: () => void = () => {
    isCustomPriceBoxVisible = true;
  };

  const style = isCapsPatternVisible
    ? `background: url(${SUSCapsPattern}) repeat`
    : "";
</script>

<Card {as} color="violet" variant="flat">
  <div class="slotWrapper" {style}>
    <Logo color="white" height={45} />
    <Typography type="title" as="p">{title}</Typography>
    <Typography type="body1" as="p">
      {body}
    </Typography>
    <Typography type="button" as="p" forceNotCapitalize>
      {choosePriceCta}
    </Typography>
    <div class:hidden={isCustomPriceBoxVisible} class="suggestedPricesWrapper">
      {#each suggestedPrices as price}
        <Button
          action={() => onChoosePrice(Number(price))}
          variant="filled"
          color="white"
          size="small"
        >
          {price} PLN
        </Button>
      {/each}
      {#if isCustomPriceAllowed}
        <Button
          action={onCustomPriceClick}
          variant="outlined"
          color="white"
          size="small"
        >
          Inna
        </Button>
      {/if}
    </div>
    <div class:hidden={!isCustomPriceBoxVisible} class="customPriceBox">
      <Input placeholder="Wpisz kwotę" fullHeight bind:value={customPrice} />
      <Button
        action={() => onChoosePrice(Number(customPrice))}
        variant="filled"
        color="white"
        size="small"
        >Wpłacam
      </Button>
    </div>
  </div>
</Card>

<PaymentDetailsModal
  bind:selectedPrice
  {campaignId}
  {startPaymentEndpoint}
  {firstname}
  {lastname}
  {email}
  {serviceTermsAndConditionsDocs}
/>

<style>
  .slotWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .suggestedPricesWrapper {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
  }

  .customPriceBox {
    display: flex;
    gap: 12px;
    min-height: 56px;
    max-width: 320px;
  }

  .hidden {
    display: none;
  }
</style>
