<svelte:options customElement="sus-icon" />

<script lang="ts">
  import cn from "classnames";
  import type { AriaRole } from "svelte/elements";

  import type { IconHeight, IconItem, IconWidth } from "./Icon.types";
  import resources from "./resources";

  export let item: IconItem;
  export let color: string;
  export let height: IconHeight;
  export let width: IconWidth;
  export let role: AriaRole = "img";

  const classNames = cn({
    clickable: role === "button",
  });
</script>

<div on:click class={classNames} {role}>
  {@html resources[item]({ color, height, width })}
</div>

<style>
  .clickable {
    cursor: pointer;
  }
</style>
