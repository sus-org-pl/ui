import type { IconRendererProps } from "../Icon.types";

export default ({ color, height, width }: IconRendererProps) => `
    <svg width="${width}" height="${height}" viewBox="0 0 57 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.455139 6.55385C0.455139 2.93427 3.4048 0 7.04338 0H38.519C39.1254 0 39.617 0.489026 39.617 1.09231V13.6538C39.617 17.2734 42.5667 20.2077 46.2053 20.2077H55.3571C55.9636 20.2077 56.4551 20.6967 56.4551 21.3V64.4462C56.4551 68.0657 53.5055 71 49.8669 71H7.04338C3.4048 71 0.455139 68.0657 0.455139 64.4462V6.55385ZM12.5336 34.4077C12.5336 33.5028 13.271 32.7692 14.1806 32.7692H44.9257C45.8353 32.7692 46.5728 33.5028 46.5728 34.4077C46.5728 35.3126 45.8353 36.0462 44.9257 36.0462H14.1806C13.271 36.0462 12.5336 35.3126 12.5336 34.4077ZM14.1806 43.6923C13.271 43.6923 12.5336 44.4259 12.5336 45.3308C12.5336 46.2356 13.271 46.9692 14.1806 46.9692H44.9257C45.8353 46.9692 46.5728 46.2356 46.5728 45.3308C46.5728 44.4259 45.8353 43.6923 44.9257 43.6923H14.1806ZM12.5336 56.2538C12.5336 55.349 13.271 54.6154 14.1806 54.6154H31.7493C32.6589 54.6154 33.3963 55.349 33.3963 56.2538C33.3963 57.1587 32.6589 57.8923 31.7493 57.8923H14.1806C13.271 57.8923 12.5336 57.1587 12.5336 56.2538ZM55.3571 17.4769H46.5728C44.1471 17.4769 42.1806 15.5207 42.1806 13.1077V0.546154L55.3571 17.4769Z" fill="${color}"/>
    </svg>
`