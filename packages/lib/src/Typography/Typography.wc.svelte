<svelte:options customElement="sus-typography" />

<script lang="ts">
  import cn from "classnames";

  import { TypogprahyType, TypographyAsComponent } from "./Typography.types";

  export let type: TypogprahyType;
  export let forceNotCapitalize: boolean = false;
  export let as: TypographyAsComponent = TypographyAsComponent.includes(type)
    ? type
    : "p";

  const classNames = cn(["base", type], {
    forceNotCapitalize,
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
  @use "./styles/types.scss";

  .forceNotCapitalize {
    text-transform: none;
  }
</style>
