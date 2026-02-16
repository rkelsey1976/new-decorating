import Link from "next/link";
import PageHero from "@/components/PageHero";
import { DEFAULT_META_TITLE, SITE_URL } from "@/lib/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${DEFAULT_META_TITLE}`,
  description:
    "Privacy policy – New Decorating, painter & decorator Bath. How I collect, use and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How I collect, use, and protect your personal information."
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
                Who I am
              </h2>
              <p className="mt-4">
                New Decorating is a painting and decorating business based in Bath, serving
                Bath and North East Somerset (BANES). My website address is{" "}
                <a href={SITE_URL} className="text-accent font-medium hover:text-accent-soft transition-colors">
                  {SITE_URL}
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                What personal data I collect and why
              </h2>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                Contact form
              </h3>
              <p className="mt-3">
                When you submit my contact form, I collect your name, email address,
                phone number (optional), location, type of work required, and your message.
                I use this information solely to respond to your enquiry and provide you
                with a quote. I do not use this data for marketing purposes.
              </p>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                Phone and email
              </h3>
              <p className="mt-3">
                If you contact me by phone or email, I will keep a record of your
                communication so I can respond to your enquiry and manage your project.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                How I protect your data
              </h2>
              <p className="mt-4">
                Contact form submissions are processed securely through Netlify Forms and
                sent to me via email notification. I do not store your personal data in
                any public database. Your data is only accessible to me and is not shared
                with any third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Who I share your data with
              </h2>
              <p className="mt-4">
                I do not sell, trade, or share your personal information with any third
                parties. Form submissions are processed by Netlify (my hosting provider)
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
                I use Google Analytics to understand how visitors use my website (e.g. which pages are viewed). Analytics cookies are only set if you click &ldquo;Accept&rdquo; on the cookie banner. You can choose &ldquo;Reject analytics&rdquo; to use the site without analytics cookies. Your choice is stored so I do not ask again on each visit. I do not use advertising cookies or share your data with advertisers.
              </p>
              <p className="mt-4">
                Essential cookies may be set by my hosting provider (Netlify) for serving the website securely. These are strictly necessary and do not track your browsing activity.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                How long I retain your data
              </h2>
              <p className="mt-4">
                I retain contact form submissions and project-related communications for
                as long as necessary to respond to your enquiry and manage any resulting
                work. You can request deletion of your data at any time by contacting me.
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
                <li>Request access to the personal data I hold about you</li>
                <li>Request correction of any inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to the processing of your data</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please{" "}
                <Link href="/contact" className="text-accent font-medium hover:text-accent-soft transition-colors">
                  contact me
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Contact
              </h2>
              <p className="mt-4">
                If you have any questions about this privacy policy or how I handle your
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
                  Or via my{" "}
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
