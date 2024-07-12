import type { Meta, StoryObj } from "@storybook/svelte";
import TypographyExample from "./TypographyExample.svelte";

const meta = {
  title: "Components/Typography",
  component: TypographyExample,
} satisfies Meta<TypographyExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _All_Typographies: Story = {
  args: {},
  parameters: {},
};
