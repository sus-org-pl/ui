import type { Meta, StoryObj } from "@storybook/svelte";
import Modal from "./Modal.wc.svelte";

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

export const _Modal: Story = {
  args: {
    isOpen: true,
    title: "Oto otwarty modal",
    titleVariant: "title",
    hideCloseButton: false,
  },
  parameters: {},
};
