"use client";

import { useEffect } from "react";

/**
 * Site-wide click listener that fires GA4 custom conversion events
 * when visitors click outbound links to our ticket vendor or application forms.
 *
 * Events fired:
 *   - ticket_click   (any posh.vip link)
 *   - application_click (any form.typeform.com link)
 *
 * Both are marked as conversion events in GA4 so Google Ads Smart Bidding
 * can optimize toward them.
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";
      if (!href) return;

      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag !== "function") return;

      if (href.includes("posh.vip")) {
        gtag("event", "ticket_click", {
          link_url: href,
          link_text: target.textContent?.trim().slice(0, 80) || "",
          page_path: window.location.pathname,
        });
      } else if (href.includes("form.typeform.com")) {
        // Pull the Typeform ID so we can tell which form was clicked.
        const match = href.match(/typeform\.com\/to\/([a-zA-Z0-9]+)/);
        const formId = match ? match[1] : "unknown";
        gtag("event", "application_click", {
          form_id: formId,
          link_url: href,
          link_text: target.textContent?.trim().slice(0, 80) || "",
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
