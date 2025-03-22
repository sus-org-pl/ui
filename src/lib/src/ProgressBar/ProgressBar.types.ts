export const ProgressBarColors = ["yellow", "violet"] as const;
export const ProgressBarSizes = ["small", "medium", "large"] as const;

export type ProgressBarColor = typeof ProgressBarColors[number];
export type ProgressBarSize = typeof ProgressBarSizes[number];
