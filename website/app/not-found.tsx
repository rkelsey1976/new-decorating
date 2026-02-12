import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <p className="text-accent text-sm font-medium uppercase tracking-[0.2em]">
          Page not found
        </p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl font-semibold text-foreground tracking-tight">
          404
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          Sorry, I couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-accent-soft transition-all"
          >
            Go to homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border-2 border-accent/30 px-6 py-3 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors"
          >
            View my services
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
