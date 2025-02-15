<svelte:options customElement="sus-logo" />

<script lang="ts">
  import type { AriaRole } from "svelte/elements";
  import { LOGO_SVG_ELEMENT, WHITE_LOGO_SVG_ELEMENT } from "./Logo.consts";
  import cn from "classnames";

  export let height: string | number;
  export let clickable: boolean = false;
  export let color: "default" | "white" = "default";

  const role: AriaRole = clickable ? "button" : "img";
  const width = Math.round(Number(height) * 2.97826086957);
  const as = clickable ? "a" : "div";
  const href = clickable ? "/" : null;

  const classNames = cn(["base"], {
    white: color === "white",
  });
</script>

<svelte:element
  this={as}
  {href}
  class={classNames}
  {role}
  aria-label="Stowarzyszenie Umarłych Statutów"
>
  {#if color === "white"}
    {@html WHITE_LOGO_SVG_ELEMENT({ height, width, color: "white" })}
  {:else}
    {@html LOGO_SVG_ELEMENT({ height, width })}
  {/if}
</svelte:element>
