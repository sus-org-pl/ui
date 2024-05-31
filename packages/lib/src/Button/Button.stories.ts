import type { Meta, StoryObj } from "@storybook/svelte";
import Button from "./Button.wc.svelte";

const meta = {
  title: "Buttons",
  component: Button,
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Medium_Yellow: Story = {
  args: {
    as: "button",
    size: "medium",
    color: "yellow",
    variant: "filled",
    label: "Szukaj Susła"
  },
  parameters: {},
};
