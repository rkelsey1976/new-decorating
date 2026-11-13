"use client";

// Conversion tracking for GA4: phone, WhatsApp and email taps, quote-button
// clicks, and successful contact-form submissions (generate_lead fires from
// ContactForm.tsx).
//
// One delegated capture-phase listener on the document, so links added later
// (new pages, blog posts, components) are tracked without touching them.
// Consent-first: trackEvent sends nothing unless the visitor accepted cookies.
//
// Events (mark phone_click, whatsapp_click and generate_lead as key events in
// GA4 > Admin > Events):
//   phone_click     tel: links            {phone_number, link_text, link_location}
//   whatsapp_click  wa.me / WhatsApp      {link_url, link_text, link_location}
//   email_click     mailto: links         {email, link_text, link_location}
//   cta_click       same-origin /contact  {link_text, link_url, link_location}
//   generate_lead   contact form sent     {form_name}
//
// link_location: header, hero, contact_form, footer, content. Add
// data-track-location="..." to any element to override it.

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const AREAS: [string, string | null][] = [
  ["[data-track-location]", null],
  ["header", "header"],
  ["form", "contact_form"],
  ["footer", "footer"],
];

function locationOf(el: Element): string {
  for (const [sel, name] of AREAS) {
    const hit = el.closest(sel) as HTMLElement | null;
    if (hit) return name ?? hit.dataset.trackLocation ?? "content";
  }
  return "content";
}

export default function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const a = target?.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const text = (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 100);
      const where = locationOf(a);

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { phone_number: href.slice(4), link_text: text, link_location: where });
      } else if (/wa\.me|whatsapp\.com/i.test(href)) {
        trackEvent("whatsapp_click", { link_url: href.split("?")[0], link_text: text, link_location: where });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { email: href.slice(7).split("?")[0], link_text: text, link_location: where });
      } else {
        let url: URL;
        try {
          url = new URL(href, window.location.href);
        } catch {
          return;
        }
        if (url.origin === window.location.origin && /^\/(contact|quote)(\/|$)/.test(url.pathname)) {
          trackEvent("cta_click", { link_text: text, link_url: url.pathname + url.hash, link_location: where });
        }
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
