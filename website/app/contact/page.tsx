import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import BrushStroke from "@/components/BrushStroke";
import { GBP_REVIEW_URL } from "@/lib/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Painter & Decorator Bath | New Decorating",
  description:
    "Contact painter & decorator Bath. Get a free quote. Message, form or Facebook. Painting and decorating across BANES. 25+ years.",
  alternates: { canonical: "/contact" },
};

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61571675780751";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        locationLine="Bath, Keynsham, Midsomer Norton, Radstock & BANES"
        title="Get in touch"
        subtitle="Ready for a quote or have a question? Fill in the form below or message me on Facebook — I'll get back to you as soon as I can."
        image="/hero-contact.jpg"
        imageAlt="Get in touch for a free quote"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        canonicalPath="/contact"
      />
      <div className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Contact form + sidebar */}
        <div className="mt-14 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em]">
              Request a quote
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mt-2 tracking-tight">
              Send us a message
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Tell me about your project and I&apos;ll get back to you with a free, no-obligation quote.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Facebook card */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border-2 border-accent/30 bg-accent/5 p-6 hover:border-accent hover:bg-accent/10 transition-colors"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white mb-3" aria-hidden="true">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Message us on Facebook
              </h3>
              <p className="mt-1.5 text-muted text-sm leading-relaxed">
                Send a message or post on my page. I check regularly and reply as soon as possible.
              </p>
              <span className="mt-3 text-accent font-medium group-hover:text-accent-soft transition-colors text-sm">
                Open Facebook →
              </span>
            </a>

            {/* What to expect card */}
            <div className="rounded-xl border border-black/8 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                What happens next?
              </h3>
              <ol className="mt-4 space-y-3 text-muted text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent font-display font-semibold text-xs flex items-center justify-center mt-0.5">1</span>
                  <span>I&apos;ll review your message and get back to you within a day or two.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent font-display font-semibold text-xs flex items-center justify-center mt-0.5">2</span>
                  <span>If needed, I&apos;ll arrange a visit to see the job and give an accurate quote.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent font-display font-semibold text-xs flex items-center justify-center mt-0.5">3</span>
                  <span>You&apos;ll receive a free, no-obligation quote with a clear breakdown.</span>
                </li>
              </ol>
            </div>

            {/* Phone card */}
            <a
              href="tel:+447717772881"
              className="group flex flex-col rounded-xl border-2 border-accent/30 bg-accent/5 p-6 hover:border-accent hover:bg-accent/10 transition-colors"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white mb-3" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Call us
              </h3>
              <p className="mt-1.5 text-muted text-sm leading-relaxed">
                Give us a ring to discuss your project or arrange a free quote.
              </p>
              <span className="mt-3 text-accent font-medium group-hover:text-accent-soft transition-colors text-sm font-display text-lg">
                07717 772881
              </span>
            </a>

            {/* Business info card */}
            <div className="rounded-xl bg-foreground text-background p-6">
              <p className="font-display text-lg font-semibold">
                New Decorating
              </p>
              <p className="text-sm text-white/80 mt-1">
                Bath & North East Somerset
              </p>
              <a
                href="tel:+447717772881"
                className="mt-3 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07717 772881
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                Facebook page
              </a>
            </div>
          </div>
        </div>

        {/* Leave a review CTA */}
        <section className="mt-16 sm:mt-20 rounded-2xl bg-accent text-white p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Had a great experience? Leave a review
          </h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto leading-relaxed">
            Your feedback helps other customers and means a lot. If you&apos;re happy with the work, a quick review on Google would be brilliant.
          </p>
          <a
            href={GBP_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-8 py-4 text-base font-semibold shadow-lg hover:bg-white/95 transition-colors"
            aria-label="Leave a review on Google"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Leave a review on Google
          </a>
        </section>

        </div>

        {/* Not sure what you need? – full-width green with brush */}
        <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 bg-accent text-white">
          <BrushStroke position="top" fill="var(--background)" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-2">
            <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">Not sure what you need?</h3>
            <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl">
              Take a look at my services or browse photos from previous projects to get an idea of what I can do.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-white font-medium text-sm hover:text-white/80 transition-colors underline underline-offset-2"
              >
                Browse my services <span aria-hidden>→</span>
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-white font-medium text-sm hover:text-white/80 transition-colors underline underline-offset-2"
              >
                See examples of my work <span aria-hidden>→</span>
              </Link>
              <Link
                href="/area"
                className="inline-flex items-center gap-1.5 text-white font-medium text-sm hover:text-white/80 transition-colors underline underline-offset-2"
              >
                Areas I cover <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
