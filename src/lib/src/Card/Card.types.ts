export const CardAsComponent = ["article", "div", "section"] as const;
export const CardColor = ["white", "gray", "violet"] as const;
export const CardVariant = ["flat", "shadow"] as const;
export const CardPaddingSize = ["medium", "large"] as const;

export type CardAsComponent = typeof CardAsComponent[number];
export type CardColor = typeof CardColor[number];
export type CardVariant = typeof CardVariant[number];
export type CardPaddingSize = typeof CardPaddingSize[number];
