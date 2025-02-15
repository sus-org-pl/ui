<svelte:options customElement="sus-input" />

<script lang="ts">
  import classNames from "classnames";
  import { createEventDispatcher } from "svelte";

  import type { IconItem } from "../Icon/Icon.types";
  import Icon from "../Icon/Icon.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import type { InputIconSize } from "./Input.types";
  import {
    INPUT_ICON_COLOR,
    LARGE_ICON_SIZE,
    NORMAL_ICON_SIZE,
  } from "./Input.consts";

  const dispatch = createEventDispatcher();

  export let iconItem: IconItem | null = null;
  export let iconSize: InputIconSize = "normal";
  export let placeholder: string = "";
  export let name: string | null = null;
  export let id: string | null = null;
  export let value: string;
  export let outlined: boolean = false;
  export let fullWidth: boolean = false;
  export let isClearable: boolean = false;
  export let errorMessage: string | null = null;

  const inputIconSize =
    iconSize === "normal" ? NORMAL_ICON_SIZE : LARGE_ICON_SIZE;
  const clearIconSize =
    iconSize === "normal" ? NORMAL_ICON_SIZE * 0.8 : NORMAL_ICON_SIZE;

  const componentWrapperClassNames = classNames(["wrapper"], { fullWidth });
  const inputWrapperClassNames = classNames(["base"], { outlined, fullWidth });
  const iconWrapperClassNames = classNames(["iconWrapper", iconSize]);

  const clearInputValue = () => {
    value = "";

    dispatch("clear");
  };
</script>

<div class={componentWrapperClassNames}>
  <div class={inputWrapperClassNames}>
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
      on:input
      {id}
      {name}
      {placeholder}
    />
    {#if isClearable && value}
      <div class="clearBtnWrapper">
        <Icon
          on:click={clearInputValue}
          item="cross"
          height={clearIconSize}
          width={clearIconSize}
          color={INPUT_ICON_COLOR}
          role="button"
        />
      </div>
    {/if}
  </div>
  {#if errorMessage}
    <Typography type="small" as="span" color="danger">
      {errorMessage}
    </Typography>
  {/if}
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .base {
    display: flex;
    align-items: center;

    border-radius: 5px;
    padding: 12px 16px;
    background: var(--white);

    &.outlined {
      border: 1px solid var(--gray-white-100);
    }

    &.fullWidth {
      width: 100%;
    }
  }

  input {
    background: transparent;
    border: none;
    outline: none;

    width: 100%;
    padding-right: 16px;

    font-family: Montserrat;
    font-weight: normal;
    font-size: 18px;
    color: var(--black);

    &::placeholder {
      color: #b3bec7;
    }
  }

  .iconWrapper {
    margin-inline: 8px;

    @media (min-width: 768px) {
      margin-inline: 12px 24px;
    }

    &.large {
      margin-inline: 12px;

      @media (min-width: 768px) {
        margin-inline: 24px;
      }
    }
  }

  .clearBtnWrapper {
    margin-inline-end: 4px;
  }
</style>
