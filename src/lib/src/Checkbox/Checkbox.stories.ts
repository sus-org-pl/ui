import type { Meta, StoryObj } from "@storybook/svelte";
import Checkbox from "./Checkbox.wc.svelte";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
} satisfies Meta<Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Logo: Story = {
  args: {
    checked: false,
    label:
      "Wyrażam zgodę na przetwarzanie danych osobowych w celach marketingowych",
  },
  parameters: {},
};
