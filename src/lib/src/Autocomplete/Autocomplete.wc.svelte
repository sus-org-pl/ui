<svelte:options customElement="sus-autocomplete" />

<script lang="ts">
  import cn from "classnames";
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
  export let outlined: boolean = false;
  export let fullWidth: boolean = false;
  export let fullHeight: boolean = false;
  export let isClearable: boolean = false;
  export let errorMessage: string | null = null;

  export let optionsGenerator: AutocompleteOptionsGeneratorFn;
  export let maximumVisibleOptionsCount: AutocompleteMaximumVisibleOptionsCount =
    DEFAULT_COUNT_OF_AUTOCOMPLETE_ELEMENTS;
  export let clearOptionsOnEmptyValue: boolean = true;
  export let optionsTypogprahyType: AutocompleteOptionsTypogprahyType =
    iconSize === "normal" ? "body2" : "body1";

  const clearAutocompleteOptions = () => (autocompleteOptions = []);

  const handleInput = async (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (clearOptionsOnEmptyValue && !target.value) {
      clearAutocompleteOptions();
      return;
    }

    autocompleteOptions = (await optionsGenerator(target.value)).slice(
      0,
      maximumVisibleOptionsCount
    );
  };

  const handleAction = (action?: (() => void), optionValue?: string) => {
    if (action) {
      action();
    } else {
      value = optionValue || "";
      clearAutocompleteOptions();
    }
  }

  const optionsClassNames = cn(["autocompleteOptions", iconSize]);
</script>

<div class="autocomplete">
  <Input
    bind:value
    on:input={handleInput}
    on:clear={clearAutocompleteOptions}
    {iconItem}
    {iconSize}
    {placeholder}
    {name}
    {id}
    {fullWidth}
    {isClearable}
    {outlined}
    {fullHeight}
    {errorMessage}
  />

  {#if autocompleteOptions.length}
    <div class={optionsClassNames}>
      {#each autocompleteOptions as { label, action, value: optionValue }}
        <div
          class="option"
          role="option"
          aria-selected={false}
          tabindex={0}
          on:click={() => handleAction(action, optionValue)}
          on:keydown={() => handleAction(action, optionValue)}
        >
          <Typography type={optionsTypogprahyType}>
            {label}
          </Typography>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .autocomplete {
    position: relative;
    width: 100%;
  }

  .autocompleteOptions {
    position: absolute;
    top: 60px;
    border-radius: 5px;
    width: 100%;

    background: var(--white);
    color: var(--black);
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 10%);

    &.large {
      top: 80px;
    }

    .option {
      border-bottom: 1px solid var(--gray-white);
      padding: 16px;
      cursor: pointer;

      &:last-of-type {
        border-bottom: none;
      }
    }
  }
</style>
