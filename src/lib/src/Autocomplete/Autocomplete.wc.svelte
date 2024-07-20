<svelte:options customElement="sus-autocomplete" />

<script lang="ts">
  import type { IconItem } from "../Icon/Icon.types";
  import type { InputIconSize } from "../Input/Input.types";
  import Input from "../Input/Input.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import { DEFAULT_COUNT_OF_AUTOCOMPLETE_ELEMENTS } from "./Autocomplete.consts";
  import type {
    AutocompleteMaximumVisibleOptionsCount,
    AutocompleteOptions,
    AutocompleteOptionsGeneratorFn,
    AutocompleteOptionsTypogprahyType,
  } from "./Autocomplete.types";

  let autocompleteOptions: AutocompleteOptions = [];
  
  /** 
   * @readonly 
   * Heads up! You shouldn't overwrite this prop manually. 
   * Use autocomplete as a controlled component. 
   * */
  export let value: string = "";

  export let iconItem: IconItem | null = null;
  export let iconSize: InputIconSize = "normal";
  export let placeholder: string = "";
  export let name: string | null = null;
  export let id: string | null = null;
  export let fullWidth: boolean = false;

  export let optionsGenerator: AutocompleteOptionsGeneratorFn;
  export let maximumVisibleOptionsCount: AutocompleteMaximumVisibleOptionsCount =
    DEFAULT_COUNT_OF_AUTOCOMPLETE_ELEMENTS;
  export let clearOptionsOnEmptyValue: boolean = true;
  export let clearOptionsOnOptionClick: boolean = true;
  export let optionsTypogprahyType: AutocompleteOptionsTypogprahyType = "body2";

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (clearOptionsOnEmptyValue && !target.value) {
      autocompleteOptions = [];
      return;
    }

    autocompleteOptions = optionsGenerator(target.value).slice(
      0,
      maximumVisibleOptionsCount
    );
  };
</script>

<div class="autocomplete">
  <Input
    bind:value
    on:input={handleInput}
    {iconItem}
    {iconSize}
    {placeholder}
    {name}
    {id}
    {fullWidth}
  />

  <div class="autocompleteOptions">
    {#each autocompleteOptions as { label, action, value: optionValue }}
      <div
        class="option"
        role="option"
        aria-selected={false}
        tabindex={0}
        on:click={action ? () => action() : () => (value = optionValue || "")}
        on:keydown={action ? () => action() : () => (value = optionValue || "")}
      >
        <Typography type={optionsTypogprahyType}>
          {label}
        </Typography>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .autocomplete {
    position: relative;
    width: 100%;
  }

  .autocompleteOptions {
    position: absolute;
    background: var(--white);
    border-radius: 5px;
    width: 100%;
    top: 60px;

    .option {
      border-bottom: 1px solid var(--gray);
      padding: 16px;
      cursor: pointer;

      &:last-of-type {
        border-bottom: none;
      }
    }
  }
</style>
