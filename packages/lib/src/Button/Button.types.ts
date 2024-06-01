export const ButtonAsComponent = ["a", "button"] as const;
export const ButtonTabindex = [0, -1] as const;
export const ButtonSize = ["small", "medium", "large"] as const;
export const ButtonColor = ["yellow", "black", "blue", "white"] as const;
export const ButtonVariant = ["filled", "outlined"] as const;

export type ButtonAsComponent = typeof ButtonAsComponent[number];
export type ButtonTabindex = typeof ButtonTabindex[number];
export type ButtonSize = typeof ButtonSize[number];
export type ButtonColor = typeof ButtonColor[number];
export type ButtonVariant = typeof ButtonVariant[number];
