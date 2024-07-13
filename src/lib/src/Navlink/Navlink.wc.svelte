<svelte:options customElement="sus-navlink" />

<script lang="ts">
  import NavSection from "../NavSection/NavSection.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import { ACTIVE_NAV_SECTION } from "./Navlink.stores.js";
  import type { NavlinkTarget } from "./Navlink.types";

  export let target: NavlinkTarget;

  const isSection = typeof target === "object";
  const href = typeof target === "string" ? target : undefined;

  let isSectionOpen = isSection ? false : undefined;

  const toggleIsOpenSection = isSection
    ? () => ACTIVE_NAV_SECTION.set(isSectionOpen ? null : target.title)
    : undefined;

  if (typeof isSectionOpen === "boolean") {
    ACTIVE_NAV_SECTION.subscribe((currentOpenState) => {
      isSectionOpen = currentOpenState === target.title;
    });
  }
</script>

<a {href} on:click={toggleIsOpenSection} class="base">
  <Typography type="nav" as="span">
    <slot>Aktualności</slot>
  </Typography>
</a>

{#if isSection && isSectionOpen}
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
