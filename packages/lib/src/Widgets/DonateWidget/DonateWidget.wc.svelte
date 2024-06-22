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
    DONATE_WIDGET_EXAMPLE_PRICES,
    NGO_CAMPAIGN_ID,
  } from "./DonateWidget.consts";
  import { getPaymentLink } from "./DonateWidget.utils";

  export let body: string = DEFAULT_DONATE_BODY;
  export let choosePriceCta: string = DEFAULT_DONATE_CHOOSE_PRICE_CTA;
  export let title: string = DEFAULT_DONATE_TITLE;

  export let as: CardAsComponent = "section";
</script>

<Card {as} color="violet" variant="flat">
  <div class="slotWrapper">
    <Logo height={45} />
    <Typography type="title" as="p">{title}</Typography>
    <Typography type="body1" as="p">
      {body}
    </Typography>
    <Typography type="button" as="p" forceNotCapitalize>
      {choosePriceCta}
    </Typography>
    <div class="suggestedPricesWrapper">
      {#each DONATE_WIDGET_EXAMPLE_PRICES as price}
        <Button
          action={async () =>
            getPaymentLink({ price, campaignId: NGO_CAMPAIGN_ID })}
          variant="filled"
          color="white"
          size="small"
        >
          {price} PLN
        </Button>
      {/each}
    </div>
  </div>
</Card>

<style>
  .slotWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .suggestedPricesWrapper {
    display: flex;
    gap: 18px;
  }
</style>
