<svelte:options customElement="sus-card" />

<script lang="ts">
  import cn from "classnames";

  import type {
    CardAsComponent,
    CardColor,
    CardPaddingSize,
    CardVariant,
  } from "./Card.types";

  export let as: CardAsComponent = "div";
  export let color: CardColor;
  export let variant: CardVariant;
  export let fullWidth: boolean = false;
  export let paddingSize: CardPaddingSize = "medium";

  const classNames = cn(["base", color, variant, `padding-${paddingSize}`], {
    fullWidth,
  });
</script>

<svelte:element this={as} class={classNames}>
  <slot>
    Stowarzyszenie Umarłych Statutów działa na rzecz praw ucznia. Zbyt często w
    życiu podążamy utartymi ścieżkami, zapominając, że można iść inaczej. Każdy
    z nas musi odnaleźć własną drogę.
  </slot>
</svelte:element>

<style lang="scss">
  @use "./styles/colors.scss";
  @use "./styles/sizes.scss";
  @use "./styles/variants.scss";

  .base {
    border-radius: 10px;
  }
</style>
