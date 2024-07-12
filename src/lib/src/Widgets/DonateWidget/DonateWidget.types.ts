export interface GetPaymentLinkPayload {
  campaignId: number | string;
  price: number | string;
}

export type DonateWidgetSuggestedPrices = (number | string)[];
