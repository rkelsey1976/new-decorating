import Link from "next/link";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import BrushStroke from "@/components/BrushStroke";
import { GALLERY_IMAGES } from "@/lib/gallery";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Painter & Decorator Bath | New Decorating",
  description:
    "Our work – painter & decorator Bath. Gallery of painting and decorating projects across BANES. Interior, exterior, period properties. Free quotes.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        locationLine="Bath, Keynsham, Midsomer Norton, Radstock & BANES"
        title="Our work"
        subtitle={`Browse ${GALLERY_IMAGES.length} photos from our recent projects across Bath and North East Somerset, including period cottage interiors and Georgian exterior work.`}
        image={`/gallery/${GALLERY_IMAGES[0].filename}`}
        imageAlt="Recent decorating project"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
        canonicalPath="/gallery"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-6 py-3 text-sm font-semibold shadow-lg hover:bg-white/95 transition-all"
          >
            Get a free quote
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Our services
          </Link>
        </div>
      </PageHero>
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] text-center">
            Project gallery
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground text-center mt-2 tracking-tight">
            Painting & decorating projects
          </h2>
          <p className="mt-4 text-muted text-center max-w-2xl mx-auto leading-relaxed">
            A selection of interior and exterior work from homes across Bath and BANES. Filter by category to find what you&apos;re looking for.
          </p>

          <GalleryGrid />

        </div>
      </div>

      {/* Related services */}
      <section className="py-16 sm:py-24 bg-white border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto leading-relaxed">
            We offer a full range of painting and decorating services across Bath and BANES.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: "Interior Painting", href: "/services/interior-painting" },
              { label: "Exterior Painting", href: "/services/exterior-painting" },
              { label: "Wallpaper Hanging", href: "/services/wallpaper-hanging" },
              { label: "Decorative Finishes", href: "/services/decorative-finishes" },
              { label: "Preparation & Repair", href: "/services/preparation-and-repair" },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="inline-flex items-center gap-1 rounded-lg border border-black/8 bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-accent/30 hover:text-accent transition-all"
              >
                {svc.label}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 bg-accent text-white">
        <BrushStroke position="top" fill="white" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Like What You See?
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto leading-relaxed">
            Get in touch for a free, no-obligation quote. We provide professional painting and decorating across Bath and BANES.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-7 py-3.5 text-base font-semibold shadow-lg hover:bg-white/95 transition-all"
            >
              Get A Free Quote
            </Link>
            <a
              href="tel:+447717772881"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 07717 772881
            </a>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61571675780751"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-white/70 font-medium hover:text-white transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
            See more on Facebook
          </a>
        </div>
      </section>
    </div>
  );
}
