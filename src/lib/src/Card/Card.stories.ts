import type { Meta, StoryObj } from "@storybook/svelte";
import Card from "./Card.wc.svelte";
import { CardAsComponent, CardColor, CardVariant } from "./Card.types";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    as: {
      options: CardAsComponent,
      control: { type: "radio" },
    },
    color: {
      options: CardColor,
      control: { type: "radio" },
    },
    variant: {
      options: CardVariant,
      control: { type: "radio" },
    },
  },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Card: Story = {
  args: {
    as: "div",
    color: "gray",
    variant: "flat",
  },
  parameters: {
    backgrounds: {
      default: "blue-gray",
    },
  },
};
