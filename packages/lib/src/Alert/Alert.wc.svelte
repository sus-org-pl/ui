<svelte:options customElement="sus-alert" />

<script lang="ts">
  import cn from "classnames";

  import Button from "../Button/Button.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import type { AlertColor, AlertCtaAction } from "./Alert.types";
  import { getAlertButtonConfig } from "./Alert.utils";
  import Icon from "../Icon/Icon.wc.svelte";

  export let message: string;
  export let color: AlertColor;
  export let ctaLabel: string;
  export let ctaAction: AlertCtaAction;
  export let isOpen: boolean;

  const { btnColor, btnComponent } = getAlertButtonConfig({ color, ctaAction });

  const handleDismiss = () => (isOpen = false);

  const classNames = cn(["base", color]);
</script>

{#if isOpen}
  <section class={classNames}>
    <Icon
      on:click={handleDismiss}
      item="cross"
      width={12}
      height={12}
      color={btnColor}
      role="button"
    />
    <Typography type="button" as="p">
      {message}
    </Typography>
    <Button
      label={ctaLabel}
      as={btnComponent}
      color={btnColor}
      variant="outlined"
      size="small"
      iconItem="arrow"
    />
  </section>
{/if}

<style lang="scss">
  @use "./styles/color.scss";

  .base {
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr max-content;
    padding: 24px;
    gap: 24px;
  }
</style>
