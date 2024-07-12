export const AvatarSize = ["small", "medium", "large"] as const;

export type AvatarSize = typeof AvatarSize[number];