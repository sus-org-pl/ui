import type { Meta, StoryObj } from "@storybook/svelte";

import DonateWidget from "./DonateWidget.wc.svelte";
import { CardAsComponent } from "../../Card/Card.types";

const meta = {
  title: "Prebuilds/Widgets",
  component: DonateWidget,
  argTypes: {
    as: {
      options: CardAsComponent,
      control: { type: "inline-radio" },
    },
    title: {
      control: { type: "text" },
    },
    body: {
      control: { type: "text" },
    },
    choosePriceCta: {
      control: { type: "text" },
    },
    suggestedPrices: {
      control: { type: "object" },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<DonateWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _DonateWidget: Story = {
  args: {},
  parameters: {},
};
