// Analytics helpers for GA4 conversion events.
// GA4 base tag is loaded in app/layout.tsx via @next/third-parties/google.

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set",
      action: string,
      params?: GtagEventParams
    ) => void;
  }
}

/**
 * Fire a GA4 conversion event. Safe on SSR (no-op if gtag not loaded yet).
 *
 * Usage:
 *   trackEvent("ticket_click", { tier: "T-01", venue: "LVRN" });
 *   trackEvent("application_click", { form: "creator" });
 */
export function trackEvent(action: string, params: GtagEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}
