export const AlertColor = ["blue", "coral", "yellow"] as const;

export type AlertColor = typeof AlertColor[number];