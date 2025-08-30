<svelte:options customElement="sus-nav-section" />

<script lang="ts">
  import Typography from "../Typography/Typography.wc.svelte";
  import SmallDonateWidget from "../Widgets/SmallDonateWidget/SmallDonateWidget.wc.svelte";
  import type {
    NavSectionAsComponent,
    NavSectionElement,
  } from "./NavSection.types";
  import Navlink from "../Navlink/Navlink.wc.svelte";

  export let as: NavSectionAsComponent;
  export let title: string;
  export let elements: NavSectionElement[] = [];
</script>

<svelte:element this={as} class="base">
  <div class="navigation">
    <Typography type="nav" as="h2">
      <span class="sectionTitle">{title}</span>
    </Typography>
    <div class="sectionElements">
      {#each elements as { label, target }}
        <Navlink {target}>{label}</Navlink>
      {/each}
    </div>
  </div>

  <div class="endingCard">
    <SmallDonateWidget />
  </div>
</svelte:element>

<style lang="scss">
  @use "./styles/navigation";
  @use "./styles/widgets";

  @import "$lib/scss/breakpoints.scss";

  .base {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    align-items: center;
    gap: 24px;
    background: var(--white);
    top: 104px;
    left: 0;
    max-width: 100%;
    padding: 22px 88px;
    z-index: 10000;
    border-radius: 8px;

    @include phone-only {
      border: {
        top: 1px solid var(--blue-gray);
        bottom: 1px solid var(--blue-gray);
        radius: 0;
      }
      text-align: center;
      padding-top: 0;

      .endingCard {
        display: none;
      }
    }

    @include tablet-up {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: 1fr;
      position: absolute;
      box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 10%);
    }
  }
</style>
