import type { IconRendererProps } from "../Icon.types";

export default ({ color, height, width }: IconRendererProps) => `
    <svg width=${width} height=${height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.69198 7.09326C3.91662 6.83118 4.31118 6.80083 4.57326 7.02546L9.99985 11.6768L15.4264 7.02546C15.6885 6.80083 16.0831 6.83118 16.3077 7.09326C16.5324 7.35533 16.502 7.7499 16.2399 7.97454L10.4066 12.9745C10.1725 13.1752 9.82716 13.1752 9.5931 12.9745L3.75977 7.97454C3.49769 7.7499 3.46734 7.35533 3.69198 7.09326Z" fill="${color}"/>
    </svg>
`;
