<svelte:options customElement="sus-typography" />

<script lang="ts">
  import cn from "classnames";

  import {
    TypographyColor,
    TypogprahyType,
    TypographyAsComponent,
  } from "./Typography.types";

  export let color: TypographyColor | undefined = undefined;
  export let type: TypogprahyType;
  export let forceNotCapitalize: boolean = false;
  export let as: TypographyAsComponent = TypographyAsComponent.includes(type)
    ? type
    : "p";
  export let restProps: Record<string, unknown> = {};

  const classNames = cn(["base", type, color], {
    forceNotCapitalize,
  });
</script>

<svelte:element this={as} class={classNames} {...restProps}>
  <slot>
    Stowarzyszenie Umarłych Statutów działa na rzecz praw ucznia. Zbyt często w
    życiu podążamy utartymi ścieżkami, zapominając, że można iść inaczej. Każdy
    z nas musi odnaleźć własną drogę.
  </slot>
</svelte:element>

<style lang="scss">
  @use "./styles/colors.scss";
  @use "./styles/types.scss";

  .base {
    text-decoration: none;
  }

  .forceNotCapitalize {
    text-transform: none;
  }
</style>
