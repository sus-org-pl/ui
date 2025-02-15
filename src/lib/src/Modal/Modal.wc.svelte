<svelte:options customElement="sus-modal" />

<script lang="ts">
  import Icon from "../Icon/Icon.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import { fade, scale } from "svelte/transition";

  export let isOpen: boolean = false;
  export let hideCloseButton: boolean = false;
  export let title: string | undefined = undefined;
  export let titleVariant: "title" | "body1" = "title";
  export let onClose: (() => void) | undefined = undefined;

  const closeModal = () => {
    isOpen = false;
    onClose?.();
  };
</script>

{#if isOpen}
  <div class="modalOverlay" transition:fade={{ duration: 200 }}>
    <div class="modalDialog" transition:scale={{ duration: 500 }}>
      <div class="header">
        <div>
          {#if title}
            <Typography type={titleVariant}>
              {title}
            </Typography>
          {/if}
        </div>
        {#if !hideCloseButton}
          <Icon
            on:click={closeModal}
            item="cross"
            height={16}
            color="var(--black)"
          />
        {/if}
      </div>
      <div class="content">
        <slot>
          <Typography type="body1" />
        </slot>
      </div>
    </div>
  </div>
{/if}

<svelte:head>
  {#if isOpen}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<style lang="scss">
  @import "$lib/scss/breakpoints.scss";

  .modalOverlay {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00000073;
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100dvw;
    z-index: 1000;
  }

  .modalDialog {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    width: 90dvw;
    max-height: 90dvh;
    overflow-y: scroll;

    background: var(--gray-white);
    border: 1px solid var(--gray-white-100);
    border-radius: 8px;
    transition: 0.3s;
    opacity: 1;

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    @include tablet-up {
      width: auto;
      min-width: 400px;
      max-width: 65dvw;
      max-height: 80dvh;
    }
  }

  .header {
    display: flex;
    gap: 16px;
    justify-content: space-between;
  }
</style>
