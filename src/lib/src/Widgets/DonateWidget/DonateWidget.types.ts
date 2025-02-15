export interface GetPaymentLinkPayload {
  campaignId: number | string;
  price: number | string;
  startPaymentEndpoint: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  isMarketingConsentAccepted?: boolean;
  /** Required by ngo.pl, othervise error will be thrown by API */
  isTermsOfUseAccepted?: boolean;
}

export type DonateWidgetSuggestedPrices = (number | string)[];
