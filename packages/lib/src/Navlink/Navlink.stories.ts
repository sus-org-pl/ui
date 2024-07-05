import type { Meta, StoryObj } from "@storybook/svelte";

import Navlink from "./Navlink.wc.svelte";

const meta = {
  title: "Components/Navigation",
  component: Navlink,
  argTypes: {
    target: {
      control: { type: "object" },
    },
  },
} satisfies Meta<Navlink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Navlink: Story = {
  args: {
    target: {
      title: "Działalność",
      elements: [
        {
          label: "Co zrobić, gdy prawa są łamane?",
          target: "",
        },
        {
          label: "Publikacje",
          target: "",
        },
        {
          label: "Uczniowski Poradnik Prawny",
          target: "",
        },
        {
          label: "Poradniki",
          target: "",
        },
        {
          label: "Mity szkolne",
          target: "",
        },
        {
          label: "Wzory pism",
          target: "",
        },
      ],
    },
  },
  parameters: {},
};
