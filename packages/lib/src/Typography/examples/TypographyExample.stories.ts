import type { Meta, StoryObj } from "@storybook/svelte";
import TypographyExample from "./TypographyExample.svelte";

const meta = {
  title: "Typography",
  component: TypographyExample,
} satisfies Meta<TypographyExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Typography_All: Story = {
  args: {},
  parameters: {},
};
