<svelte:options customElement="sus-logo" />

<script lang="ts">
  import type { AriaRole } from "svelte/elements";
  import { LOGO_SVG_ELEMENT } from "./Logo.consts";

  export let height: string | number;
  export let clickable: boolean = false;

  const role: AriaRole = clickable ? "button" : "img";
  const width = Math.round(Number(height) * 2.97826086957);
  const as = clickable ? "a" : "div";
  const href = clickable ? "/" : null;
</script>

<svelte:element
  this={as}
  {href}
  class="base"
  {role}
  aria-label="Stowarzyszenie Umarłych Statutów"
>
  {@html LOGO_SVG_ELEMENT({ height, width })}
</svelte:element>
