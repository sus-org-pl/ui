import type { Meta, StoryObj } from "@storybook/svelte";
import Navbar from "./Navbar.wc.svelte";

const meta = {
  title: "Components/Navigation",
  component: Navbar,
  argTypes: {},
} satisfies Meta<Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Navbar: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "blue-gray",
    },
  },
};
