export type PaginationSize = typeof PaginationSize[number];
export type PaginationVariant = typeof PaginationVariant[number];

export const PaginationSize = ["small", "medium", "large"] as const;
export const PaginationVariant = ["default", "minimal"] as const;

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  size?: PaginationSize;
  variant?: PaginationVariant;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
}
