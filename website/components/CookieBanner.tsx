"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "new-decorating-cookie-consent";

type ConsentStatus = "pending" | "accepted" | "rejected";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(granted: boolean) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
    });
  }
}

export default function CookieBanner() {
  const [status, setStatus] = useState<ConsentStatus>("pending");

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentStatus | null;
    if (stored === "accepted" || stored === "rejected") {
      setStatus(stored);
      if (stored === "accepted") updateConsent(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setStatus("accepted");
    updateConsent(true);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setStatus("rejected");
    updateConsent(false);
  };

  if (status !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-foreground text-background shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
    >
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm leading-relaxed">
          We use cookies to understand how visitors use our site (Google Analytics).
          No personal data is shared with advertisers. You can accept or reject analytics cookies.
          <Link
            href="/privacy"
            className="inline-block mt-1 underline underline-offset-2 hover:text-accent transition-colors"
          >
            Privacy policy
          </Link>
        </p>
        <div className="flex flex-wrap gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={reject}
            className="px-4 py-2.5 text-sm font-semibold rounded-lg border-2 border-background/40 hover:bg-white/10 transition-colors"
          >
            Reject analytics
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2.5 text-sm font-semibold rounded-lg bg-accent text-white hover:bg-accent-soft transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
