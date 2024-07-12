import resources from "./resources";

export const IconItem = Object.keys(resources);

export type IconWidth = string | number;
export type IconHeight = string | number;
export type IconItem = keyof typeof resources;

export interface IconRendererProps {
    color: string;
    width: IconWidth
    height: IconHeight;
}