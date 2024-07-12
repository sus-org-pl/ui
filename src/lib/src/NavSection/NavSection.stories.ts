import type { Meta, StoryObj } from "@storybook/svelte";

import NavSection from "./NavSection.wc.svelte";
import { NavSectionAsComponent } from "./NavSection.types";

const meta = {
  title: "Components/Navigation",
  component: NavSection,
  argTypes: {
    as: {
      options: NavSectionAsComponent,
      control: { type: "inline-radio" },
    },
    socialMediaUrls: {
      control: { type: "object" },
    },
  },
} satisfies Meta<NavSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Navsection: Story = {
  args: {
    as: "div",
    socialMediaUrls: {
      facebook: "https://www.facebook.com/StowarzyszenieUmarlychStatutow",
      instagram: "https://www.instagram.com/umarle_statuty",
      twitter: "https://x.com/umarlestatuty",
    },
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
    ]
  },
  parameters: {},
};
