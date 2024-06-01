import type { Meta, StoryObj } from "@storybook/svelte";

import Button from "./Button.wc.svelte";
import {
  ButtonAsComponent,
  ButtonColor,
  ButtonSize,
  ButtonTabindex,
  ButtonVariant,
} from "./Button.types";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    as: {
      options: ButtonAsComponent,
      control: { type: "radio" },
    },
    tabindex: {
      options: ButtonTabindex,
      control: { type: "select" },
    },
    size: {
      options: ButtonSize,
      control: { type: "radio" },
    },
    color: {
      options: ButtonColor,
      control: { type: "radio" },
    },
    variant: {
      options: ButtonVariant,
      control: { type: "radio" },
    },
    iconImageSource: {
      control: { type: "text" },
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Button: Story = {
  args: {
    as: "button",
    size: "medium",
    color: "yellow",
    variant: "filled",
    label: "Szukaj Susła",
  },
  parameters: {},
};
