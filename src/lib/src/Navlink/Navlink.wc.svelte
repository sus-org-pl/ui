<svelte:options customElement="sus-navlink" />

<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import Icon from "../Icon/Icon.wc.svelte";
  import NavSection from "../NavSection/NavSection.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import { ACTIVE_NAV_SECTION } from "./Navlink.stores.js";
  import type {
    NavlinkSectionTargetConfig,
    NavlinkTarget,
  } from "./Navlink.types";

  export let target: NavlinkTarget;

  const isSection = typeof target === "object";
  const href = typeof target === "string" ? target : undefined;

  let isSectionOpen = isSection ? false : undefined;

  const toggleIsOpenSection = isSection
    ? () =>
        ACTIVE_NAV_SECTION.set(
          isSectionOpen ? null : (target as NavlinkSectionTargetConfig).title
        )
    : undefined;

  if (typeof isSectionOpen === "boolean") {
    ACTIVE_NAV_SECTION.subscribe((currentOpenState) => {
      isSectionOpen =
        currentOpenState === (target as NavlinkSectionTargetConfig).title;
    });
  }

  onNavigate(() => {
    if (isSectionOpen) {
      ACTIVE_NAV_SECTION.set(null);
    }
  });
</script>

<a {href} on:click={toggleIsOpenSection} class="base">
  <Typography type="nav" as="span">
    <slot>Aktualności</slot>
  </Typography>
  {#if isSection}
    <Icon
      item="chevron"
      height={20}
      color="var(--deep-gray)"
      rotation={isSectionOpen ? "180" : "0"}
    />
  {/if}
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
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      color: var(--black);
    }
  }
</style>
