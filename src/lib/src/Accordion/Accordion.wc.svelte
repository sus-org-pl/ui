<svelte:options customElement="sus-accordion" />

<script lang="ts">
  import cn from "classnames";
  import { createEventDispatcher } from "svelte";

  import type { AccordionSize } from "./Accordion.types";
  import Icon from "../Icon/Icon.wc.svelte";

  const dispatch = createEventDispatcher<{
    toggle: { isOpen: boolean };
  }>();

  export let size: AccordionSize = "medium";
  export let isOpen: boolean = false;
  export let disabled: boolean = false;

  const toggleAccordion = () => {
    if (disabled) return;
    
    isOpen = !isOpen;
    dispatch("toggle", { isOpen });
  };

  const classNames = cn(["base", size], {
    open: isOpen,
    disabled,
  });
</script>

<div class={classNames}>
  <button
    class="header"
    on:click={toggleAccordion}
    disabled={disabled}
    aria-expanded={isOpen}
    aria-disabled={disabled}
  >
    <div class="title">
      <slot>Accordion Title</slot>
    </div>
    <div class="icon">
      <Icon
        item="chevron"
        color="currentColor"
        height={16}
        width={16}
        rotation={isOpen ? "180" : "0"}
      />
    </div>
  </button>
  
  {#if isOpen}
    <div class="content" role="region">
      <slot name="content">
        Stowarzyszenie Umarłych Statutów działa na rzecz praw ucznia. Zbyt często w
        życiu podążamy utartymi ścieżkami, zapominając, że można iść inaczej. Każdy
        z nas musi odnaleźć własną drogę.
      </slot>
    </div>
  {/if}
</div>

<style lang="scss">
  @use "./styles/sizes.scss";

  .base {
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    background: var(--gray-white);
    border: 1px solid var(--gray-white-100);

    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;

      .header {
        cursor: not-allowed;
      }
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    text-align: left;
    transition: background-color 0.2s ease-in-out;

    &:hover:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  .title {
    flex: 1;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;
  }

  .content {
    border-top: 1px solid var(--gray-white-100);
    line-height: 1.5;
  }
</style>
