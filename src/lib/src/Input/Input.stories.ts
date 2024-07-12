import type { Meta, StoryObj } from "@storybook/svelte";

import Input from "./Input.wc.svelte";
import { IconItem } from "../Icon/Icon.types";
import { InputIconSize } from "./Input.types";

const meta = {
  title: "Components/Input",
  component: Input,
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
  },
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Input: Story = {
  args: {
    placeholder: "Wyszukaj interwencje",
    id: "interventionSearch",
    name: "interventionSearch",
    value: "",
  },
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
};

export const _Input_with_icon: Story = {
  args: {
    placeholder: "Wyszukaj interwencje",
    id: "interventionSearch",
    name: "interventionSearch",
    iconItem: "search",
    value: "",
  },
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
};

export const _Input_with_large_icon: Story = {
  args: {
    placeholder: "Wyszukaj interwencje",
    id: "interventionSearch",
    name: "interventionSearch",
    iconItem: "search",
    iconSize: "large",
    value: "",
  },
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
};
