export interface GetPaymentLinkPayload {
  campaignId: number | string;
  price: number | string;
  startPaymentEndpoint: string;
}

export type DonateWidgetSuggestedPrices = (number | string)[];
