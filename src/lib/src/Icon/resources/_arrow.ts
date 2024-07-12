import type { IconRendererProps } from "../Icon.types";

export default ({ color, height, width }: IconRendererProps) => `
    <svg width="${width}" height="${height}" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 8.5L19.3333 2M26 8.5L19.3333 15M26 8.5H2" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`