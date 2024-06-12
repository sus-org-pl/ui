import type { Meta, StoryObj } from "@storybook/svelte";

import Input from "./Input.wc.svelte";
import { IconItem } from "../Icon/Icon.types";

const meta = {
  title: "Input",
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
  },
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Input: Story = {
  args: {
    placeholder: "Wyszukaj interwencje",
    id: "interventionSearch",
    name: "interventionSearch",
    iconItem: "search",
    value: ""
  },
  parameters: {
    backgrounds: {
        default: 'blue'
    }
}
};
