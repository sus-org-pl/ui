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
