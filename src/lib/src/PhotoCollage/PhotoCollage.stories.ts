import type { Meta, StoryObj } from "@storybook/svelte";
import PhotoCollage from "./PhotoCollage.wc.svelte";

const meta = {
  title: "Components/PhotoCollage",
  component: PhotoCollage,
  argTypes: {
    imagesSources: {
      control: { type: "object" },
    },
    imagesAlts: {
      control: { type: "object" },
    },
  },
} satisfies Meta<PhotoCollage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Photo_Collage: Story = {
  args: {
    imagesSources: [
      "https://umarlestatuty.pl/wp-content/uploads/2020/10/Pioro-360x240.jpg",
      "https://umarlestatuty.pl/wp-content/uploads/2020/10/Pioro-360x240.jpg",
      "https://umarlestatuty.pl/wp-content/uploads/2020/10/Pioro-360x240.jpg",
    ],
  },
  parameters: {
  },
};
