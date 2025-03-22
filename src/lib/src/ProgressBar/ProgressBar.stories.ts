import type { Meta, StoryObj } from "@storybook/svelte";
import ProgressBar from "./ProgressBar.wc.svelte";
import { ProgressBarColors, ProgressBarSizes } from "./ProgressBar.types";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    color: {
      options: ProgressBarColors,
      control: { type: "radio" },
    },
    size: {
      options: ProgressBarSizes,
      control: { type: "radio" },
    },
  },
} satisfies Meta<ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Progress_Bar: Story = {
  args: {},
  parameters: {},
};
