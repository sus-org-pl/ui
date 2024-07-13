<svelte:options customElement="sus-small-donate-widget" />

<script lang="ts">
  import type { ButtonAction } from "../../Button/Button.types";
  import Button from "../../Button/Button.wc.svelte";
  import type { CardAsComponent } from "../../Card/Card.types";
  import Card from "../../Card/Card.wc.svelte";
  import Typography from "../../Typography/Typography.wc.svelte";
  import {
    DEFAULT_DONATE_BODY,
    DEFAULT_DONATE_BUTTON_ACTION,
    DEFAULT_DONATE_BUTTON_LABEL,
    DEFAULT_DONATE_TITLE,
  } from "./SmallDonateWidget.consts";

  export let as: CardAsComponent = "div";

  export let body: string = DEFAULT_DONATE_BODY;
  export let donateAction: ButtonAction = DEFAULT_DONATE_BUTTON_ACTION;
  export let donateCtaLabel: string = DEFAULT_DONATE_BUTTON_LABEL;
  export let title: string = DEFAULT_DONATE_TITLE;
</script>

<Card {as} color="gray" variant="flat">
  <Typography type="title" as="p">{title}</Typography>
  <div class="bodyWrapper">
    <Typography type="body2" as="p">
      {body}
    </Typography>
  </div>
  <Button
    action={donateAction}
    color="yellow"
    variant="filled"
    size="small"
    restProps={{ target: "_blank" }}
  >
    {donateCtaLabel}
  </Button>
</Card>

<style>
  .bodyWrapper {
    color: var(--blue-gray);
    margin-block: 16px 24px;
  }
</style>
