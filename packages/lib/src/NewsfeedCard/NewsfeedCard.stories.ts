import type { Meta, StoryObj } from "@storybook/svelte";
import NewsfeedCard from "./NewsfeedCard.wc.svelte";
import { NewsfeedCardAsComponent } from "./NewsfeedCard.types";

const meta = {
  title: "Components/Card",
  component: NewsfeedCard,
  argTypes: {
    as: {
      options: NewsfeedCardAsComponent,
      control: { type: "radio" },
    },
    tag: {
      control: { type: "text" },
    },
    thumbnailImageSource: {
      control: { type: "text" },
    },
    thumbnailAlt: {
      control: { type: "text" },
    },
    title: {
      control: { type: "text" },
    },
    excerpt: {
      control: { type: "text" },
    },
  },
} satisfies Meta<NewsfeedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Newsfeed_Card: Story = {
  args: {
    as: "article",
    tag: "Aktualności",
    thumbnailImageSource:
      "https://umarlestatuty.pl/wp-content/uploads/2020/10/Pioro-360x240.jpg",
    thumbnailAlt: "Pióro na kartce papieru",
    title:
      "Internauci tropią szkoły, które oblały test z praworządności. Rusza kolejna edycja Statutowego Absurdu Roku",
    excerpt:
      "Szkolny statut będący niczym obwieszczenie o stanie wojennym? A może taki, który wspiera biznes konkretnej prywatnej firmy? Są też takie, które za nic mają demokratyczne wybory. Który z nich jest najbardziej niedorzeczny? Wyboru dokonają uczestnicy",
  },
  parameters: {
    backgrounds: {
      default: "blue-gray",
    },
  },
};
