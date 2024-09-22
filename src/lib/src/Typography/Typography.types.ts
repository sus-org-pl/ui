import { TEXT_ONLY_HTML_TAGS } from "./Typography.consts";

export const TypographyAsComponent = [...TEXT_ONLY_HTML_TAGS] as const;

export const TypogprahyType = [
  "display",
  "h1",
  "h2",
  "h3",
  "title",
  "body1",
  "body2",
  "body3",
  "nav",
  "button",
  "small",
] as const;

export const TypographyColor = [
  "black",
  "deepGray",
  "gray",
  "blueGray",
  "grayWhite",
  "grayWhite100",
  "blue",
  "yellow",
  "coral",
  "violet",
  "white",
] as const;

export type TypographyAsComponent = (typeof TypographyAsComponent)[number];
export type TypogprahyType = (typeof TypogprahyType)[number];
export type TypographyColor = (typeof TypographyColor)[number];
