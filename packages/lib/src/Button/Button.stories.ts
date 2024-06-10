import type { Meta, StoryObj } from "@storybook/svelte";

import Button from "./Button.wc.svelte";
import {
  ButtonColor,
  ButtonSize,
  ButtonTabindex,
  ButtonVariant,
} from "./Button.types";
import { IconItem } from "../Icon/Icon.types";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    action: {
      control: { type: "text" },
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
    iconItem: {
      options: IconItem,
      control: { type: "select" },
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Button: Story = {
  args: {
    action: "https://sus.org.pl",
    size: "medium",
    color: "yellow",
    variant: "filled",
    label: "Szukaj Susła",
  },
  parameters: {},
};
