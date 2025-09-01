import type { Meta, StoryObj } from "@storybook/svelte";
import TextArea from "./TextArea.wc.svelte";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fullWidth: {
      control: { type: "boolean" },
    },
    fullHeight: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _TextArea: Story = {
  args: {
    placeholder: "Twoja wiadomość...",
    value: "",
  },
};