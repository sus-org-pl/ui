import type { Meta, StoryObj } from "@storybook/svelte";
import Pagination from "./Pagination.svelte";
import { PaginationSize, PaginationVariant } from "./Pagination.types";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1, max: 20 },
    },
    totalPages: {
      control: { type: "number", min: 1, max: 20 },
    },
    size: {
      options: PaginationSize,
      control: { type: "radio" },
    },
    variant: {
      options: PaginationVariant,
      control: { type: "radio" },
    },
    showFirstLast: {
      control: { type: "boolean" },
    },
    maxVisiblePages: {
      control: { type: "number", min: 3, max: 10 },
    },
    onPageChange: {
      action: "pageChanged",
    },
  },
} satisfies Meta<Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Pagination: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    size: "medium",
    variant: "default",
    showFirstLast: false,
    maxVisiblePages: 5,
  },
  parameters: {},
};

export const _Pagination_With_First_Last: Story = {
  args: {
    currentPage: 7,
    totalPages: 20,
    size: "medium",
    variant: "default",
    showFirstLast: true,
    maxVisiblePages: 5,
  },
  parameters: {},
};
