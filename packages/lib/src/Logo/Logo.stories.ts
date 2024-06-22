import type { Meta, StoryObj } from "@storybook/svelte";
import Logo from "./Logo.wc.svelte";

const meta = {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    clickable: {
      control: { type: "boolean"},
    },
    height: {
        control: { type: "text" }
    }
  },
} satisfies Meta<Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Logo: Story = {
  args: {
    clickable: false,
    height: "125",
  },
  parameters: {},
};
