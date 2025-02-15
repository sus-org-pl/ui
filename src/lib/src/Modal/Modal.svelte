<script lang="ts">
  import Icon from "../Icon/Icon.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import { fade } from 'svelte/transition';

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
    <div class="modalDialog">
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
    position: absolute;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100dvw;
  }

  .modalDialog {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    width: 90dvw;

    background: var(--gray-white);
    border: 1px solid var(--gray-white-100);
    border-radius: 8px;
    transition: .3s;
    opacity: 1;

    @include tablet-up {
      width: auto;
      min-width: 400px;
      max-width: 65dvw;
    }
  }

  .header {
    display: flex;
    gap: 16px;
    justify-content: space-between;
  }
</style>
