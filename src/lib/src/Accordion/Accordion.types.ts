export const AccordionColor = ["white", "gray", "violet"] as const;
export const AccordionSize = ["small", "medium", "large"] as const;

export type AccordionColor = typeof AccordionColor[number];
export type AccordionSize = typeof AccordionSize[number];

