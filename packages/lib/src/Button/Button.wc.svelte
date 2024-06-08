<svelte:options customElement="sus-button" />

<script lang="ts">
  import cn from "classnames";

  import type {
    ButtonAsComponent,
    ButtonColor,
    ButtonSize,
    ButtonTabindex,
    ButtonVariant,
  } from "./Button.types";
  import Typography from "../Typography/Typography.wc.svelte";

  export let as: ButtonAsComponent;
  export let tabindex: ButtonTabindex = 0;
  export let size: ButtonSize;
  export let color: ButtonColor;
  export let variant: ButtonVariant;
  export let label: string;
  export let iconImageSource: string | null = null;

  const classNames = cn(["base", size, color, variant], {
    withIcon: Boolean(iconImageSource)
  });
</script>

<svelte:element
  this={as}
  on:click
  class={classNames}
  role="button"
  {tabindex}
>
  <Typography type="button" as="span">
    {label}
  </Typography>
</svelte:element>

<style lang="scss">
  @use './styles/colors-and-variants.scss';
  @use './styles/sizes.scss';

  .base {
    font-weight: bold;
    text-transform: uppercase;
    outline: 0;
    border: none;
    border-radius: 6px;
    box-shadow: none;
    cursor: pointer;
    font-size: 18px;
  }
</style>
