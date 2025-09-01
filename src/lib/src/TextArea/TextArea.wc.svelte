<svelte:options customElement="sus-textarea" />

<script lang="ts">
  import classNames from "classnames";

  import Typography from "../Typography/Typography.wc.svelte";

  export let placeholder: string = "";
  export let name: string | null = null;
  export let id: string | null = null;
  export let value: string;
  export let fullWidth: boolean = false;
  export let fullHeight: boolean = false;
  export let errorMessage: string | null = null;
  export let rows: number = 4;

  const componentWrapperClassNames = classNames(["wrapper"], { fullWidth });
  const textareaWrapperClassNames = classNames(["base"], {
    fullWidth,
    fullHeight,
  });
</script>

<div class={componentWrapperClassNames}>
  <div class={textareaWrapperClassNames}>
    <textarea
      bind:value
      on:click
      on:change
      on:keydown
      on:keyup
      on:input
      {id}
      {name}
      {placeholder}
      {rows}
    />
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
    align-items: flex-start;

    border: 1px solid var(--gray-white-100);
    border-radius: 5px;
    padding: 12px 16px;
    background: var(--white);

    &.fullWidth {
      width: 100%;
    }

    &.fullHeight {
      height: 100%;
    }
  }

  textarea {
    background: transparent;
    border: none;
    outline: none;
    resize: none;

    width: 100%;
    padding-right: 16px;
    min-height: 1.5em;
    line-height: 1.5;

    font-family: Montserrat;
    font-weight: normal;
    font-size: 18px;
    color: var(--black);

    &::placeholder {
      color: #b3bec7;
    }

    &:focus {
      outline: none;
    }
  }

  .iconWrapper {
    margin-inline: 8px;
    margin-top: 2px;

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
    margin-top: 2px;
  }
</style>
