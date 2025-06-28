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
  export let rotation: "0" | "90" | "180" | "270" = "0";

  const classNames = cn({
    clickable: role === "button",
  });

  const rotationStyle = rotation ? `rotate(${rotation}deg)` : undefined;

  const as = href ? "a" : "div";
</script>

<svelte:element
  this={as}
  on:click
  class={classNames}
  {href}
  {role}
  style={rotationStyle}
  {...restProps}
>
  {@html resources[item]({ color, height, width })}
</svelte:element>

<style>
  .clickable {
    cursor: pointer;
  }
</style>
