import type { Preview } from "@storybook/svelte";

import sus from "./sus";
import "../packages/lib/src/AppTheme/styles/theme.css";

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
  },
};

export default preview;
