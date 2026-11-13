// GA4 event helper, shared by ClickTracking and ContactForm.
//
// Consent-first: GoogleAnalytics always defines window.gtag (Consent Mode v2,
// default denied), so the gtag function existing is not enough. Events are
// only sent once the visitor has pressed Accept in CookieBanner, which stores
// "accepted" under this key. Rejected or unanswered: nothing is sent.

export const CONSENT_KEY = "new-decorating-cookie-consent";

export function hasAnalyticsConsent(): boolean {
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!hasAnalyticsConsent()) return;
  window.gtag("event", name, { ...params, page_path: window.location.pathname });
}
