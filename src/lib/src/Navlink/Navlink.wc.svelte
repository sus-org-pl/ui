<svelte:options customElement="sus-navlink" />

<script lang="ts">
  import NavSection from "../NavSection/NavSection.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import type { NavlinkTarget } from "./Navlink.types";

  export let target: NavlinkTarget;
  let isSectionOpen = false;

  const href = typeof target === "string" ? target : undefined;

  const toggleIsOpenSection =
    typeof target === "object"
      ? () => (isSectionOpen = !isSectionOpen)
      : undefined;
</script>

<a {href} on:click={toggleIsOpenSection} class="base">
  <Typography type="nav" as="span">
    <slot>Aktualności</slot>
  </Typography>
</a>

{#if typeof target === "object" && isSectionOpen}
  <NavSection as="div" title={target.title} elements={target.elements} />
{/if}

<style lang="scss">
  .base {
    text-decoration: none;
    color: var(--gray);
    transition: 0.25s;
    cursor: pointer;

    &:hover {
      color: var(--black);
    }
  }
</style>
