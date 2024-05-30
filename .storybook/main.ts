import type { StorybookConfig } from "@storybook/svelte-vite";

const config: StorybookConfig = {
  stories: [
    "../packages/lib/**/*.mdx",
    "../packages/lib/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
};
export default config;
