// QuoteIQ Contact Forms Inbound API integration.
//
// NOTE: QuoteIQ's public help-center docs (as of 2026-09) describe a stale
// version of this endpoint (POST .../submitFormV2 with an X-API-Key header
// and no user_id/company_id) that 404s. The values below were pulled from
// the live "Copy Sample" output inside the QuoteIQ dashboard (Settings ->
// Self-Service -> Contact Forms -> [form] -> Quick Links -> How to
// Integrate -> API Access (Advanced)) and verified directly with curl.
// If this ever breaks again, re-pull the sample from that dashboard panel
// rather than trusting the public docs.
//
// This is a static export with no backend, so this call happens directly
// from the browser. The Inbound API key is therefore visible in the shipped
// JS bundle / network tab — by design (see project docs). It is only
// capable of creating form submissions on this one account/form, not
// reading data.

export const QUOTEIQ_ENDPOINT =
  "https://us-central1-quoteiq-2.cloudfunctions.net/submitFormV2Api";

// None of these are sensitive: the form ID is already public in the
// QuoteIQ-hosted form's own URL, and user_id/company_id just identify which
// QuoteIQ account to route the submission to (the API key is what actually
// authorizes the write). The Inbound API key is the only piece that needs
// to stay out of the repo; see NEXT_PUBLIC_QUOTEIQ_API_KEY.
export const QUOTEIQ_USER_ID = "rSewgdtEOjYxxMq6oyopEcMjX5l1";
export const QUOTEIQ_COMPANY_ID = "rSewgdtEOjYxxMq6oyopEcMjX5l1";
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

  let res: Response;
  try {
    res = await fetch(QUOTEIQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${QUOTEIQ_API_KEY}`,
      },
      body: JSON.stringify({
        user_id: QUOTEIQ_USER_ID,
        company_id: QUOTEIQ_COMPANY_ID,
        form_id: QUOTEIQ_FORM_ID,
        data,
      }),
    });
  } catch (err) {
    // Network-level failure (CORS block, DNS, offline, etc.) — fetch throws
    // TypeError here rather than giving a response, so log what we can.
    console.error("QuoteIQ submission network error:", err);
    throw new QuoteIQError("QuoteIQ request failed before a response was received");
  }

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error(`QuoteIQ submission failed (${res.status} ${res.statusText}):`, body);
    throw new QuoteIQError(`QuoteIQ submission failed (${res.status})`);
  }
}
