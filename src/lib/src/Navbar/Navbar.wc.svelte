<svelte:options customElement="sus-navbar" />

<script lang="ts">
  import cn from "classnames";
  import { onMount } from "svelte";

  import Logo from "../Logo/Logo.wc.svelte";
  import Icon from "../Icon/Icon.wc.svelte";

  export let sticky: boolean = false;

  let showMobileMenu = false;

  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

  const mediaQueryHandler = (e: { matches: boolean }) => {
    if (!e.matches) {
      showMobileMenu = false;
    }
  };

  onMount(() => {
    const mediaListener = window.matchMedia("(max-width: 743px)");

    mediaListener.addEventListener("change", mediaQueryHandler);
  });

  const baseClassNames = cn(["base"], {
    sticky,
  });

  $: navElementsWrapperClassNames = cn(["elementsWrapper"], {
    visible: showMobileMenu,
  });
</script>

<nav class={baseClassNames}>
  <Logo height={38} clickable />
  <div class="mobileNavToggler">
    <Icon
      on:click={handleMobileIconClick}
      item="hamburger"
      width={16}
      height={16}
      color="var(--black)"
      role="button"
    />
  </div>
  <ul class={navElementsWrapperClassNames}>
    <slot>
      <li>Link 1</li>
      <li>Link 2</li>
      <li>Link 3</li>
    </slot>
  </ul>
</nav>

<style lang="scss">
  @import "$lib/scss/breakpoints.scss";

  .base {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    padding: 22px 24px;
    width: 100%;

    background: var(--white);
    border-radius: 0 0 8px 8px;
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 10%);

    z-index: 100;

    @include tablet-up {
      padding: 22px 88px;
    }

    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
    }
  }

  .mobileNavToggler {
    @include tablet-up {
      display: none;
    }
  }

  .elementsWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @include phone-only {
      display: none;
      position: absolute;
      flex-direction: column;
      justify-content: flex-start;

      &.visible {
        display: flex;
        background: white;
        width: 100%;
        left: 0;
        top: 84px;
        padding-bottom: 32px;
      }
    }

    @include tablet-up {
      gap: 45px;
    }
  }
</style>
