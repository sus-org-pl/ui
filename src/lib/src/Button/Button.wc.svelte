<svelte:options customElement="sus-button" />

<script lang="ts">
  import cn from "classnames";

  import type {
    ButtonAction,
    ButtonAsComponent,
    ButtonColor,
    ButtonSize,
    ButtonTabindex,
    ButtonVariant,
  } from "./Button.types";
  import Typography from "../Typography/Typography.wc.svelte";
  import type { IconItem } from "../Icon/Icon.types";
  import Icon from "../Icon/Icon.wc.svelte";

  const MAX_BUTTON_ICON_SIZE = 18;

  export let action: ButtonAction;
  export let tabindex: ButtonTabindex = 0;
  export let size: ButtonSize;
  export let color: ButtonColor;
  export let variant: ButtonVariant;
  export let iconItem: IconItem | null = null;
  export let iconColor: string = color;
  /** Pass any props direct to the component */
  export let restProps: Record<string, unknown> = {};

  const as: ButtonAsComponent = typeof action === "string" ? "a" : "button";
  const onClick = typeof action === "function" ? action : null;
  $: href = typeof action === "string" ? action : null;

  $: classNames = cn(["base", size, color, variant], {
    withIcon: Boolean(iconItem),
  });
</script>

<svelte:element
  this={as}
  on:click={onClick}
  {href}
  class={classNames}
  role="button"
  {tabindex}
  {...restProps}
>
  <Typography type="button" as="span">
    <slot>Label</slot>
  </Typography>
  {#if iconItem}
    <div class="iconWrapper">
      <Icon
        item={iconItem}
        width={MAX_BUTTON_ICON_SIZE}
        height={MAX_BUTTON_ICON_SIZE}
        color={iconColor}
      />
    </div>
  {/if}
</svelte:element>

<style lang="scss">
  @use "./styles/colors-and-variants.scss";
  @use "./styles/sizes.scss";

  .base {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    outline: 0;
    border: none;
    border-radius: 6px;
    box-shadow: none;
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    width: max-content;
    transition: all 0.3s ease-in-out;
  }

  .iconWrapper {
    margin-inline-start: 14px;
  }
</style>
