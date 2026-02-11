import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import AreaMap from "@/components/AreaMap";
import BrushStroke from "@/components/BrushStroke";
import { SERVICE_AREA_NAME } from "@/lib/area";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | New Decorating Bath & BANES",
  description:
    "Get a free quote for painting and decorating across Bath and North East Somerset (BANES). Contact us by message or via Facebook.",
  alternates: { canonical: "/contact" },
};

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61571675780751";

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Get in touch"
        subtitle="Ready for a quote or have a question? Fill in the form below or message us on Facebook — we'll get back to you as soon as we can."
        image="/hero-contact.jpg"
        imageAlt="Get in touch for a free quote"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
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
              Tell us about your project and we&apos;ll get back to you with a free, no-obligation quote.
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
                Send a message or post on our page. We check regularly and reply as soon as possible.
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
                  <span>We&apos;ll review your message and get back to you within a day or two.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent font-display font-semibold text-xs flex items-center justify-center mt-0.5">2</span>
                  <span>If needed, we&apos;ll arrange a visit to see the job and give an accurate quote.</span>
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

        {/* Map */}
        <div className="mt-16">
          <AreaMap
            title="Where we work"
            height="360"
            className="max-w-4xl mx-auto"
          />
          <p className="mt-3 text-center text-sm text-muted">
            We cover Bath, Keynsham, Midsomer Norton, Radstock and across {SERVICE_AREA_NAME}.
          </p>
        </div>

        </div>

        {/* Not sure what you need? – full-width green with brush */}
        <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 bg-accent text-white">
          <BrushStroke position="top" fill="var(--background)" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-2">
            <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">Not sure what you need?</h3>
            <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl">
              Take a look at our services or browse photos from previous projects to get an idea of what we can do.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-white font-medium text-sm hover:text-white/80 transition-colors underline underline-offset-2"
              >
                Browse our services <span aria-hidden>→</span>
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-white font-medium text-sm hover:text-white/80 transition-colors underline underline-offset-2"
              >
                See examples of our work <span aria-hidden>→</span>
              </Link>
              <Link
                href="/area"
                className="inline-flex items-center gap-1.5 text-white font-medium text-sm hover:text-white/80 transition-colors underline underline-offset-2"
              >
                Areas we cover <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
