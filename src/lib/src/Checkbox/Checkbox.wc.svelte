<script lang="ts">
  import Typography from "../Typography/Typography.wc.svelte";

  export let label: string | undefined = undefined;
  export let checked: boolean = false;
</script>

<label class="container">
  {#if label}
    <Typography type="body2" as="span">
      {label}
    </Typography>
  {/if}
  <input on:change bind:checked type="checkbox" />
  <span class="checkmark"></span>
</label>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    min-height: 25px;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: var(--white);
      border: 1px solid var(--gray-white-100);
      border-radius: 4px;

      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }

    &:hover input ~ .checkmark {
      background-color: var(--white);
    }

    input:checked ~ .checkmark {
      background-color: var(--yellow);

      &:after {
        display: block;
      }
    }

    .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
</style>
