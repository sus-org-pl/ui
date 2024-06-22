import { NGO_START_PAYMENT_ENDPOINT } from "./DonateWidget.consts";
import type { GetPaymentLinkPayload } from "./DonateWidget.types";

export const getPaymentLink = async ({
  price,
  campaignId,
}: GetPaymentLinkPayload) => {
  const myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");

  const raw = JSON.stringify({
    terms: [],
    statute: true,
    marketingAgreement: false,
    buyer: {
      firstName: "Anonimowy",
      lastName: "Darczyńca",
      email: "wplaty@umarlestatuty.pl",
    },
    price: Number(price),
    campaignId: Number(campaignId),
    payMethod: "",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as RequestRedirect,
  };

  try {
    const response = await fetch(NGO_START_PAYMENT_ENDPOINT, requestOptions);
    const data = await response.json();
    window.location.href = data.url;
  } catch {
    console.error("Couldn't redirect to payment page.");
  }
};
