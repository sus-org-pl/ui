import type { Meta, StoryObj } from "@storybook/svelte";

import { IconItem } from "../Icon/Icon.types";
import { InputIconSize } from "../Input/Input.types";
import Autocomplete from "./Autocomplete.wc.svelte";
import { AutocompleteMaximumVisibleOptionsCount } from "./Autocomplete.types";

const meta = {
  title: "Components/Input",
  component: Autocomplete,
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    id: {
      control: { type: "text" },
    },
    iconItem: {
      options: IconItem,
      control: { type: "select" },
    },
    iconSize: {
      options: InputIconSize,
      control: { type: "radio" },
    },
    optionsGenerator: {
      control: { type: "object" },
    },
    clearOptionsOnEmptyValue: {
      control: { type: "boolean" },
    },
    maximumVisibleOptionsCount: {
      options: AutocompleteMaximumVisibleOptionsCount,
      control: { type: "inline-radio" }
    }
  },
} satisfies Meta<Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Autocomplete_With_Actions: Story = {
  args: {
    placeholder: "Wyszukaj interwencje",
    id: "interventionSearch",
    name: "interventionSearch",
    value: "",
    optionsGenerator: () => [
      {
        label: new Date().getTime().toString(),
        action: () => console.log("option clicked"),
      },
      {
        label: new Date().getTime().toString(),
        action: () => console.log("option clicked"),
      },
    ],
    iconItem: "search",
    iconSize: "normal",
    clearOptionsOnEmptyValue: true,
  },
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
};

export const _Autocomplete_In_Form: Story = {
  args: {
    placeholder: "Wyszukaj interwencje",
    id: "interventionSearch",
    name: "interventionSearch",
    value: "",
    optionsGenerator: () => [
      {
        label: new Date().getTime().toString(),
        value: new Date().getTime().toString(),
      },
      {
        label: (new Date().getTime() + 1).toString(),
        value: (new Date().getTime() + 1).toString(),
      },
    ],
    clearOptionsOnEmptyValue: true,
    isClearable: true,
  },
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
};
