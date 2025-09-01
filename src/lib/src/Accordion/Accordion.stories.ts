import type { Meta, StoryObj } from "@storybook/svelte";

import Accordion from "./Accordion.wc.svelte";
import { AccordionSize } from "./Accordion.types";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    size: {
      options: AccordionSize,
      control: { type: "radio" },
    },
    isOpen: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<Accordion>;

export default meta;
type Story = StoryObj;

export const _Default: Story = {
  args: {
    color: "white",
    size: "medium",
    isOpen: false,
    disabled: false,
  },
  parameters: {},
};

export const _Disabled: Story = {
  args: {
    color: "white",
    size: "medium",
    isOpen: false,
    disabled: true,
  },
  parameters: {},
};
