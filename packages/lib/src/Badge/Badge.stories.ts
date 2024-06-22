import type { Meta, StoryObj } from "@storybook/svelte";

import Badge from "./Badge.wc.svelte";

import { BadgeColor } from "./Badge.types";

const meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    color: {
      options: BadgeColor,
      control: { type: "radio" },
    },
  },
} satisfies Meta<Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Badge: Story = {
  args: {
    color: "blue",
  },
  parameters: {},
};
