// QuoteIQ Contact Forms Inbound API integration.
// https://intercom.help/quoteiq/en/articles/15197063-contact-forms-api-submit-forms-programmatically-inbound-api
//
// This is a static export with no backend, so this call happens directly from
// the browser. The Inbound API key is therefore visible in the shipped JS
// bundle / network tab — by design (see project docs). It is only capable of
// creating form submissions on the one configured form, not reading data.

export const QUOTEIQ_ENDPOINT =
  "https://us-central1-quoteiq-2.cloudfunctions.net/submitFormV2";

// The form ID is not sensitive — it's already public in the QuoteIQ-hosted
// form's own URL (https://quoteiq-2.web.app/forms/v2/<id>) — so it's checked
// into source rather than passed as a secret. The Inbound API key is the
// only piece that needs to stay out of the repo; see NEXT_PUBLIC_QUOTEIQ_API_KEY.
export const QUOTEIQ_FORM_ID = "vlyPsyZTtRXTyiZJbBR6";
export const QUOTEIQ_API_KEY = process.env.NEXT_PUBLIC_QUOTEIQ_API_KEY ?? "";

export const QUOTEIQ_CONFIGURED = Boolean(QUOTEIQ_FORM_ID && QUOTEIQ_API_KEY);

export class QuoteIQError extends Error {}

/**
 * Submit a lead to QuoteIQ. `data` keys should match the field labels
 * configured on the QuoteIQ form (snake_case supported) — adjust the mapping
 * in ContactCTA.tsx if the QuoteIQ-side field names differ from what's sent
 * here.
 */
export async function submitToQuoteIQ(data: Record<string, string>) {
  if (!QUOTEIQ_CONFIGURED) {
    throw new QuoteIQError("QuoteIQ is not configured");
  }

  const res = await fetch(QUOTEIQ_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": QUOTEIQ_API_KEY,
    },
    body: JSON.stringify({ form_id: QUOTEIQ_FORM_ID, data }),
  });

  if (!res.ok) {
    throw new QuoteIQError(`QuoteIQ submission failed (${res.status})`);
  }
}
