import type { Meta, StoryObj } from "@storybook/svelte";
import Typography from "./Typography.wc.svelte";
import { TypogprahyType, TypographyAsComponent } from "./Typography.types";

const meta = {
  title: "Typography",
  component: Typography,
  argTypes: {
    as: {
      options: TypographyAsComponent,
      control: { type: "select" },
    },
    type: {
      options: TypogprahyType,
      control: { type: "radio" }
    }
  },
} satisfies Meta<Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Typography: Story = {
  args: {
    as: "h2",
    type: "h2"
  },
  parameters: {},
};
