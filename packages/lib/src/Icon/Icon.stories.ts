import type { Meta, StoryObj } from "@storybook/svelte";
import Icon from "./Icon.wc.svelte";
import { IconItem } from "./Icon.types";

const meta = {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    item: {
      options: IconItem,
      control: { type: "select" },
    },
    color: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
    role: {
      control: { type: "text" },
    },
  },
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Icon: Story = {
  args: {
    item: "arrow",
    color: "black",
    height: "64",
    width: "64",
    role: "img",
  },
  parameters: {},
};
