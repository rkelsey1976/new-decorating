"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <p className="text-accent text-sm font-medium uppercase tracking-[0.2em]">
          Something went wrong
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground tracking-tight">
          Oops
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Sorry, something unexpected happened. Please try again or get in touch if the problem continues.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-accent-soft transition-all"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border-2 border-accent/30 px-6 py-3 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors"
          >
            Go to homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-accent/30 px-6 py-3 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
