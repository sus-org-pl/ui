export interface GetPaymentLinkPayload {
  campaignId: number | string;
  price: number | string;
  startPaymentEndpoint: string;
  firstname?: string;
  lastname?: string;
  email?: string;
}

export type DonateWidgetSuggestedPrices = (number | string)[];
