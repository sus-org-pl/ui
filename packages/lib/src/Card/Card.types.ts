export const CardAsComponent = ["article", "div", "section"] as const;
export const CardColor = ["white", "gray"] as const;
export const CardVariant = ["flat", "shadow"] as const;

export type CardAsComponent = typeof CardAsComponent[number];
export type CardColor = typeof CardColor[number];
export type CardVariant = typeof CardVariant[number];