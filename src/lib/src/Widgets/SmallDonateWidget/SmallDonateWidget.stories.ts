import type { Meta, StoryObj } from "@storybook/svelte";

import SmallDonateWidget from "./SmallDonateWidget.wc.svelte";
import { CardAsComponent } from "../../Card/Card.types";

const meta = {
  title: "Prebuilds/Widgets",
  component: SmallDonateWidget,
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
    donateAction: {
      control: { type: "text" },
    },
    donateCtaLabel: {
      control: { type: "text" },
    },
  },
} satisfies Meta<SmallDonateWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SmallDonateWidget: Story = {
  args: {},
  parameters: {
    layout: "centered",
  },
};
