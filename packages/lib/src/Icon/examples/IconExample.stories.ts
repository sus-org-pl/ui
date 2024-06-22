import type { Meta, StoryObj } from "@storybook/svelte";

import IconExample from "./IconExample.svelte";

const meta = {
  title: "Components/Icon",
  component: IconExample,
} satisfies Meta<IconExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _All_Icons: Story = {
  args: {},
  parameters: {},
};
