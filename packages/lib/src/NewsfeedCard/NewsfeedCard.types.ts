export const NewsfeedCardAsComponent = ["article", "div", "section"] as const;

export type NewsfeedCardAsComponent = (typeof NewsfeedCardAsComponent)[number];
