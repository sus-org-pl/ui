<svelte:options customElement="sus-typography" />

<script lang="ts">
  import cn from "classnames";

  import { TypogprahyType, TypographyAsComponent } from "./Typography.types";

  export let type: TypogprahyType;
  export let as: TypographyAsComponent = TypographyAsComponent.includes(type) ? type : "p";
  
  const classNames = cn(["base", type]);
</script>

<svelte:element this={as} class={classNames}>
  <slot />
</svelte:element>

<style lang="scss">
  @use "./styles/types.scss";
</style>
