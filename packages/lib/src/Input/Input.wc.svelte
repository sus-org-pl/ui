<svelte:options customElement="sus-input" />

<script lang="ts">
  import classNames from "classnames";
  import type { IconItem } from "../Icon/Icon.types";
  import Icon from "../Icon/Icon.wc.svelte";
  import { INPUT_ICON_COLOR } from "./Input.consts";
  import type { InputIconSize } from "./Input.types";

  export let iconItem: IconItem | null = null;
  export let iconSize: InputIconSize = "normal";
  export let placeholder: string = "";
  export let name: string | null = null;
  export let id: string | null = null;
  export let value: string;

  const inputIconSize = iconSize === "normal" ? 18 : 39;

  const iconWrapperClassNames = classNames(["iconWrapper", iconSize]);
</script>

<div class="base">
  {#if iconItem}
    <div class={iconWrapperClassNames}>
      <Icon
        item={iconItem}
        height={inputIconSize}
        width={inputIconSize}
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
    padding: 12px 16px;
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
    margin-inline: 12px 24px;

    &.large {
      margin-inline: 24px;
    }
  }
</style>
