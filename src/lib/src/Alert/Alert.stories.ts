import type { Meta, StoryObj } from "@storybook/svelte";
import Alert from "./Alert.wc.svelte";
import { AlertColor } from "./Alert.types";

const meta = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    color: {
      options: AlertColor,
      control: { type: "radio" },
    },
    ctaAction: {
      control: { type: "text" },
    },
    ctaLabel: {
      control: { type: "text" },
    },
    message: {
      control: { type: "text" },
    },
    isOpen: {
      control: { type: "radio" },
      options: [true, false]
    }
  },
} satisfies Meta<Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Alert: Story = {
  args: {
    color: "coral",
    ctaAction: "https://umarlestatuty.pl/statutowy-absurd-roku/",
    ctaLabel: "Dowiedz się więcej",
    message: "STATUTOWY ABSURD ROKU 2023 ROSTRZYGNIĘTY!",
    isOpen: true,
  },
  parameters: {},
};
