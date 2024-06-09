import type { IconRendererProps } from "../Icon.types";

export default ({ color, height, width }: IconRendererProps) => `
    <svg width="${width}" height="${height}" viewBox="0 0 58 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56.7875 59.748C57.212 59.4645 57.449 58.992 57.449 58.5H57.455V4.5C57.455 2.019 55.436 0 52.955 0H7.95512C3.81963 0 0.455139 3.3645 0.455139 7.5V64.5C0.455139 68.6355 3.81963 72 7.95512 72H55.955C56.615 72 57.1985 71.5665 57.3905 70.935C57.5825 70.3035 57.3365 69.6195 56.7875 69.252C55.172 68.175 54.245 66.4425 54.245 64.5C54.245 62.5575 55.172 60.825 56.7875 59.748ZM13.9551 13.5C13.9551 12.672 14.6256 12 15.4551 12H42.455C43.2845 12 43.955 12.672 43.955 13.5V28.5C43.955 29.328 43.2845 30 42.455 30H15.4551C14.6256 30 13.9551 29.328 13.9551 28.5V13.5ZM7.95512 69C5.47413 69 3.45513 66.981 3.45513 64.5C3.45513 62.019 5.47413 60 7.95512 60H52.493C51.941 60.915 51.5735 61.9335 51.389 63H7.95512C7.12562 63 6.45513 63.672 6.45513 64.5C6.45513 65.328 7.12562 66 7.95512 66H51.389C51.575 67.0665 51.941 68.085 52.493 69H7.95512Z" fill="${color}"/>
    </svg>
`