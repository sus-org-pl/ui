<svelte:options customElement="sus-nav-section" />

<script lang="ts">
  import Icon from "../Icon/Icon.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import SmallDonateWidget from "../Widgets/SmallDonateWidget/SmallDonateWidget.wc.svelte";
  import type {
    NavSectionAsComponent,
    NavSectionElement,
    NavSectionSocialMediaUrls,
  } from "./NavSection.types";
  import Navlink from "../Navlink/Navlink.wc.svelte";
  import { STATIC_SOCIAL_MEDIA_ICON_PROPS } from "./NavSection.consts";

  export let socialMediaUrls: NavSectionSocialMediaUrls = {};
  export let as: NavSectionAsComponent;
  export let title: string;
  export let elements: NavSectionElement[] = [];
</script>

<svelte:element this={as} class="base">
  <div class="socialMediaWrapper">
    <Icon
      href={socialMediaUrls.facebook}
      item="facebook"
      {...STATIC_SOCIAL_MEDIA_ICON_PROPS}
    />
    <Icon
      href={socialMediaUrls.twitter}
      item="twitter"
      {...STATIC_SOCIAL_MEDIA_ICON_PROPS}
    />
    <Icon
      href={socialMediaUrls.instagram}
      item="instagram"
      {...STATIC_SOCIAL_MEDIA_ICON_PROPS}
    />
  </div>

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

  .base {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    align-items: center;
    gap: 24px;
    background: var(--white);
    position: absolute;
    top: 86px;
    left: 0;
    max-width: 100%;
    padding: 22px 88px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: 1fr;
    }
  }
</style>
