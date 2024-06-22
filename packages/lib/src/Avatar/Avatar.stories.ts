import type { Meta, StoryObj } from "@storybook/svelte";
import Avatar from "./Avatar.wc.svelte";
import { AvatarSize } from "./Avatar.types";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: AvatarSize,
      control: { type: "radio" },
    },
    imageSource: {
      control: { type: "text" },
    },
    alt: {
      control: { type: "text" },
    },
  },
} satisfies Meta<Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Avatar: Story = {
  args: {
    size: "medium",
    imageSource: "https://umarlestatuty.pl/wp-content/uploads/2024/05/Untitled.png",
    alt: "Person",
  },
  parameters: {},
};
