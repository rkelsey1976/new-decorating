import Link from "next/link";
import PageHero from "@/components/PageHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Painter & Decorator Bath | New Decorating",
  description:
    "Privacy policy – New Decorating, painter & decorator Bath. How we collect, use and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        canonicalPath="/privacy"
      />

      <article className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-muted leading-relaxed">
            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Who we are
              </h2>
              <p className="mt-4">
                New Decorating is a painting and decorating business based in Bath, serving
                Bath and North East Somerset (BANES). Our website address is{" "}
                <a href="https://newdecorating.co.uk" className="text-accent font-medium hover:text-accent-soft transition-colors">
                  https://newdecorating.co.uk
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                What personal data we collect and why
              </h2>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                Contact form
              </h3>
              <p className="mt-3">
                When you submit our contact form, we collect your name, email address,
                phone number (optional), location, type of work required, and your message.
                We use this information solely to respond to your enquiry and provide you
                with a quote. We do not use this data for marketing purposes.
              </p>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                Phone and email
              </h3>
              <p className="mt-3">
                If you contact us by phone or email, we will keep a record of your
                communication so we can respond to your enquiry and manage your project.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                How we protect your data
              </h2>
              <p className="mt-4">
                Contact form submissions are processed securely through Netlify Forms and
                sent to us via email notification. We do not store your personal data in
                any public database. Your data is only accessible to us and is not shared
                with any third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Who we share your data with
              </h2>
              <p className="mt-4">
                We do not sell, trade, or share your personal information with any third
                parties. Form submissions are processed by Netlify (our hosting provider)
                in accordance with their{" "}
                <a
                  href="https://www.netlify.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:text-accent-soft transition-colors"
                >
                  privacy policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Cookies
              </h2>
              <p className="mt-4">
                We use Google Analytics to understand how visitors use our website (e.g. which pages are viewed). Analytics cookies are only set if you click &ldquo;Accept&rdquo; on the cookie banner. You can choose &ldquo;Reject analytics&rdquo; to use the site without analytics cookies. Your choice is stored so we do not ask again on each visit. We do not use advertising cookies or share your data with advertisers.
              </p>
              <p className="mt-4">
                Essential cookies may be set by our hosting provider (Netlify) for serving the website securely. These are strictly necessary and do not track your browsing activity.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                How long we retain your data
              </h2>
              <p className="mt-4">
                We retain contact form submissions and project-related communications for
                as long as necessary to respond to your enquiry and manage any resulting
                work. You can request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Your rights
              </h2>
              <p className="mt-4">
                Under UK data protection law (UK GDPR), you have the right to:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction of any inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to the processing of your data</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please{" "}
                <Link href="/contact" className="text-accent font-medium hover:text-accent-soft transition-colors">
                  contact us
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Contact
              </h2>
              <p className="mt-4">
                If you have any questions about this privacy policy or how we handle your
                data, please get in touch:
              </p>
              <ul className="mt-3 space-y-1">
                <li>
                  Phone:{" "}
                  <a href="tel:+447717772881" className="text-accent font-medium hover:text-accent-soft transition-colors">
                    07717 772881
                  </a>
                </li>
                <li>
                  Or via our{" "}
                  <Link href="/contact" className="text-accent font-medium hover:text-accent-soft transition-colors">
                    contact form
                  </Link>
                </li>
              </ul>
            </section>

            <p className="text-sm text-muted/70 pt-6 border-t border-black/8">
              This policy was last updated on 11 February 2026.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
