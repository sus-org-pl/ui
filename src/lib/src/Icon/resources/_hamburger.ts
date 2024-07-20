import type { IconRendererProps } from "../Icon.types";

export default ({ color, height, width }: IconRendererProps) => `
    <svg width="${width}" height="${height}" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 15H11.5V12.5H0V15ZM0 8.75H23V6.25H0V8.75ZM0 2.5H23V0H0V2.5Z" fill="${color}"/>
    </svg>
`;
