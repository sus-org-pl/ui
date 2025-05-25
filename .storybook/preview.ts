import type { Preview } from "@storybook/svelte";

import sus from "./sus";
import "../src/lib/src/AppTheme/styles/theme.css";

document.body.className += "susThemedApp";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: sus,
    },
    backgrounds: {
      values: [
        {
          name: "coral",
          value: "var(--coral)",
        },
        {
          name: "yellow",
          value: "var(--yellow)",
        },
        {
          name: "violet",
          value: "var(--violet)",
        },
        {
          name: "blue",
          value: "var(--blue)",
        },
        {
          name: "blue-gray",
          value: "var(--blue-gray)",
        },
      ],
    },
  },
};

export default preview;
