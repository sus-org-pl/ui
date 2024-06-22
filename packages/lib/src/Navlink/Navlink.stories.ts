import type { Meta, StoryObj } from "@storybook/svelte";

import Navlink from "./Navlink.wc.svelte";

const meta = {
  title: "Components/Navigation",
  component: Navlink,
  argTypes: {
    href: {
      control: { type: "text" },
    },
  },
} satisfies Meta<Navlink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Navlink: Story = {
  args: {
    href: "https://sus.org.pl",
  },
  parameters: {},
};
