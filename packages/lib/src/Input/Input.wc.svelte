<svelte:options customElement="sus-input" />

<script lang="ts">
  import type { IconItem } from "../Icon/Icon.types";
  import Icon from "../Icon/Icon.wc.svelte";

  export let iconItem: IconItem | null = null;
  export let placeholder: string = "";
  export let name: string | null = null;
  export let id: string | null = null;
  export let value: string;

  const INPUT_ICON_SIZE = 39;
  const INPUT_ICON_COLOR = "var(--black)";
</script>

<div class="base">
  {#if iconItem}
    <div class="iconWrapper">
      <Icon
        item={iconItem}
        height={INPUT_ICON_SIZE}
        width={INPUT_ICON_SIZE}
        color={INPUT_ICON_COLOR}
      />
    </div>
  {/if}
  <input
    bind:value
    on:click
    on:change
    on:keydown
    on:keyup
    {id}
    {name}
    {placeholder}
  />
</div>

<style lang="scss">
  .base {
    display: flex;
    align-items: center;

    border-radius: 5px;
    padding: 12px 4px;
    background: var(--white);
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;

    font-family: Montserrat;
    font-weight: normal;
    font-size: 18px;
    color: var(--black);

    &::placeholder {
        color: #b3bec7;
    }
  }

  .iconWrapper {
    margin-inline: 36px;
  }
</style>
