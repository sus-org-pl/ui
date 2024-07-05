<svelte:options customElement="sus-icon" />

<script lang="ts">
  import cn from "classnames";
  import type { AriaRole } from "svelte/elements";

  import type { IconHeight, IconItem, IconWidth } from "./Icon.types";
  import resources from "./resources";

  export let item: IconItem;
  export let color: string;
  export let height: IconHeight;
  export let width: IconWidth = height;
  export let role: AriaRole = "img";
  export let href: string | undefined = undefined;
  export let restProps: Record<string, unknown> = {};

  const classNames = cn({
    clickable: role === "button",
  });
  
  const as = href ? "a" : "div";
</script>

<svelte:element this={as} on:click class={classNames} {href} {role} {...restProps}>
  {@html resources[item]({ color, height, width })}
</svelte:element>

<style>
  .clickable {
    cursor: pointer;
  }
</style>
