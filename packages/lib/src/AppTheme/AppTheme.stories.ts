import type { Meta, StoryObj } from "@storybook/svelte";
import AppTheme from "./AppTheme.wc.svelte";

const meta = {
  title: "AppTheme",
  component: AppTheme,
} satisfies Meta<AppTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _App_Theme: Story = {
  args: {},
  parameters: {},
};
