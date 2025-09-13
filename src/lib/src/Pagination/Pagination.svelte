<script lang="ts">
  import cn from "classnames";
  import Icon from "../Icon/Icon.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import type { PaginationSize, PaginationVariant } from "./Pagination.types";

  export let currentPage: number = 1;
  export let totalPages: number = 1;
  export let size: PaginationSize = "medium";
  export let variant: PaginationVariant = "default";
  export let onPageChange: (page: number) => void = () => {};
  export let showFirstLast: boolean = false;
  export let maxVisiblePages: number = 5;

  $: visiblePages = getVisiblePages(currentPage, totalPages, maxVisiblePages);
  $: canGoPrevious = currentPage > 1;
  $: canGoNext = currentPage < totalPages;

  function getVisiblePages(current: number, total: number, max: number): number[] {
    const pages: number[] = [];
    const half = Math.floor(max / 2);
    
    let start = Math.max(1, current - half);
    let end = Math.min(total, start + max - 1);
    
    if (end - start + 1 < max) {
      start = Math.max(1, end - max + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  function handlePageClick(page: number) {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  }

  function handlePrevious() {
    if (canGoPrevious) {
      handlePageClick(currentPage - 1);
    }
  }

  function handleNext() {
    if (canGoNext) {
      handlePageClick(currentPage + 1);
    }
  }

  function handleFirst() {
    handlePageClick(1);
  }

  function handleLast() {
    handlePageClick(totalPages);
  }

  const classNames = cn(["base", size, variant]);
</script>

<div class={classNames}>
  <button
    class="navButton prevButton"
    class:disabled={!canGoPrevious}
    on:click={handlePrevious}
    disabled={!canGoPrevious}
    aria-label="Previous page"
  >
    <Icon
      item="arrow"
      width={16}
      height={16}
      color="var(--black)"
      rotation="180"
    />
  </button>

  {#if showFirstLast && visiblePages[0] > 1}
    <button
      class="pageButton"
      on:click={handleFirst}
      aria-label="Go to first page"
    >
      <Typography type="button" as="span">1</Typography>
    </button>
    {#if visiblePages[0] > 2}
      <span class="ellipsis">...</span>
    {/if}
  {/if}

  {#each visiblePages as page}
    <button
      class="pageButton"
      class:active={page === currentPage}
      on:click={() => handlePageClick(page)}
      aria-label="Go to page {page}"
      aria-current={page === currentPage ? "page" : undefined}
    >
      <Typography type="button" as="span">{page}</Typography>
    </button>
  {/each}

  {#if showFirstLast && visiblePages[visiblePages.length - 1] < totalPages}
    {#if visiblePages[visiblePages.length - 1] < totalPages - 1}
      <span class="ellipsis">...</span>
    {/if}
    <button
      class="pageButton"
      on:click={handleLast}
      aria-label="Go to last page"
    >
      <Typography type="button" as="span">{totalPages}</Typography>
    </button>
  {/if}

  <button
    class="navButton nextButton"
    class:disabled={!canGoNext}
    on:click={handleNext}
    disabled={!canGoNext}
    aria-label="Next page"
  >
    <Icon
      item="arrow"
      width={16}
      height={16}
      color="var(--black)"
    />
  </button>
</div>

<style lang="scss">
  .base {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px 0;
  }

  .navButton,
  .pageButton {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    min-width: 40px;
    height: 40px;
    padding: 0 12px;

    &:hover:not(.disabled) {
      background: var(--white, #f5f7fa);
    }

    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  .pageButton {
    &.active {
      background: var(--blue, #007bff);
      color: var(--white, #ffffff);
      
      :global(span) {
        color: var(--white, #ffffff);
      }
    }
  }

  .ellipsis {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    color: var(--gray, #6c757d);
    font-weight: bold;
  }

  :global(.small) {
    gap: 4px;
    
    .navButton,
    .pageButton {
      min-width: 32px;
      height: 32px;
      padding: 0 8px;
    }
    
    .ellipsis {
      min-width: 32px;
      height: 32px;
    }
  }

  :global(.large) {
    gap: 12px;
    
    .navButton,
    .pageButton {
      min-width: 48px;
      height: 48px;
      padding: 0 16px;
    }
    
    .ellipsis {
      min-width: 48px;
      height: 48px;
    }
  }

  // Variant styles
  :global(.minimal) {
    .pageButton {
      &:not(.active) {
        background: transparent;
        
        &:hover {
          background: var(--white, #f8f9fa);
        }
      }
    }
  }
</style>
