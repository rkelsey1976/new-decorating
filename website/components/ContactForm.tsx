"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const FORM_NAME = "contact";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setState("success");
        form.reset();
      } else {
        throw new Error(`Form submission failed (${response.status})`);
      }
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 sm:p-10 text-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Message sent
        </h2>
        <p className="mt-3 text-muted leading-relaxed max-w-md mx-auto">
          Thanks for getting in touch. I&apos;ll get back to you as soon as I can &mdash; usually within a day or two.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-accent font-medium hover:text-accent-soft transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/8 bg-white p-6 sm:p-8 shadow-lg space-y-6"
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Don&apos;t fill this in: <input name="bot-field" />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-black/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-black/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
            Phone <span className="text-muted text-xs font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="07xxx xxxxxx"
            className="w-full rounded-lg border border-black/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1.5">
            Postcode or area <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            autoComplete="postal-code"
            placeholder="e.g. BA1 or Keynsham"
            className="w-full rounded-lg border border-black/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Type of work */}
      <div>
        <label htmlFor="work-type" className="block text-sm font-medium text-foreground mb-1.5">
          Type of work
        </label>
        <select
          id="work-type"
          name="work-type"
          defaultValue=""
          className="w-full rounded-lg border border-black/10 bg-background px-4 py-2.5 text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Interior painting">Interior painting</option>
          <option value="Exterior painting">Exterior painting</option>
          <option value="Interior & exterior">Interior & exterior</option>
          <option value="Wallpaper / feature wall">Wallpaper / feature wall</option>
          <option value="Preparation & repair">Preparation & repair</option>
          <option value="Other / not sure">Other / not sure</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Tell us about the job <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="e.g. Looking to repaint a living room and hallway. Roughly 3 rooms, all interior. Flexible on timing."
          className="w-full rounded-lg border border-black/10 bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors resize-y"
        />
      </div>

      {/* Error message */}
      {state === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700" role="alert">
          <p className="font-medium">Something went wrong</p>
          <p className="mt-1">{errorMessage || "Please try again or message us on Facebook instead."}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-soft transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending&hellip;
          </>
        ) : (
          <>
            Send message
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
