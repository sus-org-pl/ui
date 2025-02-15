import type { GetPaymentLinkPayload } from "./DonateWidget.types";

export const getPaymentLink = async ({
  price,
  campaignId,
  startPaymentEndpoint,
  firstname,
  lastname,
  email,
  isMarketingConsentAccepted,
  isTermsOfUseAccepted,
}: GetPaymentLinkPayload) => {
  const myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");

  const raw = JSON.stringify({
    terms: [],
    statute: isTermsOfUseAccepted,
    marketingAgreement: isMarketingConsentAccepted,
    buyer: {
      firstName: firstname || "Anonimowy",
      lastName: lastname || "Darczyńca",
      email: email || "wplaty@umarlestatuty.pl",
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
    const response = await fetch(startPaymentEndpoint, requestOptions);
    const data = await response.json();
    window.location.href = data.url;
  } catch {
    console.error("Couldn't redirect to payment page.");
  }
};
