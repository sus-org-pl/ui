import type { Meta, StoryObj } from "@storybook/svelte";
import Modal from "./Modal.svelte";

const meta = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
  },
} satisfies Meta<Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Logo: Story = {
  args: {
    isOpen: true,
    title: "Oto otwarty modal",
    titleVariant: "title",
    hideCloseButton: false,
  },
  parameters: {},
};
