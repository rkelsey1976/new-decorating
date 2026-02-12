import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import AreaMap from "@/components/AreaMap";
import { AREA_PAGES, getAreaBySlug, getAreaSlugs } from "@/lib/areas-data";
import { SERVICE_PAGES } from "@/lib/services";

import type { Metadata } from "next";

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/area/${area.slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `/area/${area.slug}`,
    },
  };
}

import { SITE_URL } from "@/lib/site";

export default async function AreaDetailPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    name: "New Decorating",
    url: SITE_URL,
    telephone: "+447717772881",
    description: `Professional painter and decorator in ${area.name}. Interior and exterior painting, wallpaper hanging and decorative finishes.`,
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Bath and North East Somerset",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "Bath and North East Somerset",
      addressCountry: "GB",
    },
  };

  /* Other areas for cross-links */
  const otherAreas = AREA_PAGES.filter((a) => a.slug !== area.slug);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <PageHero
        locationLine={area.nearbyAreas.length > 0 ? `${area.name}, ${area.nearbyAreas.slice(0, 3).join(", ")} & more` : area.name}
        title={`Painter & Decorator in ${area.name}`}
        subtitle={area.heroSubtitle}
        image="/hero-area.jpg"
        imageAlt={`Painting and decorating in ${area.name}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas", href: "/area" },
          { label: area.name },
        ]}
        canonicalPath={`/area/${area.slug}`}
      />

      {/* Intro */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em]">
              {area.name}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mt-2 tracking-tight">
              Painting & decorating in {area.name}
            </h2>
            <p className="mt-6 text-muted leading-relaxed">{area.intro}</p>
            <p className="mt-4 text-muted leading-relaxed">{area.localInfo}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-accent-soft transition-colors"
              >
                Get a free quote
              </Link>
              <a
                href="tel:+447717772881"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-accent/30 px-6 py-3 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07717 772881
              </a>
            </div>

            {/* Local areas in and around this area */}
            {area.nearbyAreas.length > 0 && (
              <div className="mt-12 pt-10 border-t border-black/8">
                <p className="text-accent text-sm font-medium uppercase tracking-[0.2em]">
                  Local areas I cover
                </p>
                <p className="mt-2 text-muted text-sm">
                  I work across {area.name} and these nearby areas:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Local areas near ${area.name}`}>
                  {area.nearbyAreas.map((place) => (
                    <li
                      key={place}
                      className="rounded-lg bg-accent/10 text-accent px-4 py-2 text-sm font-medium"
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-16 sm:py-24 bg-accent/10 border-y border-accent/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] text-center">
            What I offer
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center mt-2 tracking-tight">
            My services in {area.name}
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {area.services.map((service, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl bg-white border border-black/8 p-4 shadow-sm"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 text-accent font-display font-semibold flex items-center justify-center text-sm mt-0.5">
                  {i + 1}
                </span>
                <p className="text-foreground font-medium text-sm">{service}</p>
              </div>
            ))}
          </div>

          {/* Service page links */}
          <div className="mt-12 text-center">
            <p className="text-muted text-sm mb-4">Learn more about each service:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICE_PAGES.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="rounded-lg border border-accent/30 bg-white px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center tracking-tight">
            Nearby areas I also cover
          </h2>
          <p className="mt-4 text-muted text-center max-w-xl mx-auto">
            As well as {area.name}, I work across these nearby towns and villages.
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-3" aria-label={`Areas near ${area.name}`}>
            {area.nearbyAreas.map((nearby) => (
              <li
                key={nearby}
                className="rounded-xl bg-white border border-black/8 px-5 py-3 text-foreground font-medium shadow-sm text-sm"
              >
                {nearby}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 sm:py-24 bg-accent/10 border-y border-accent/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center tracking-tight">
            Where I work
          </h2>
          <div className="mt-10 max-w-4xl mx-auto">
            <AreaMap title={`New Decorating — ${area.name}`} height="360" />
          </div>
        </div>
      </section>

      {/* Other area links */}
      <section className="py-12 sm:py-16 bg-background border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted text-sm mb-4">I also cover:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/area/${other.slug}`}
                className="rounded-lg border border-black/8 bg-white px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/30 hover:text-accent transition-colors shadow-sm"
              >
                {other.name}
              </Link>
            ))}
            <Link
              href="/area"
              className="rounded-lg border border-accent/30 bg-accent/5 px-5 py-2.5 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
            >
              All areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-accent text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Need a painter & decorator in {area.name}?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto leading-relaxed">
            Get in touch for a free, no-obligation quote. I&apos;m local, experienced and ready to help with your next decorating project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white text-accent px-7 py-3.5 text-base font-semibold shadow-lg hover:bg-white/95 transition-all"
            >
              Get in touch
            </Link>
            <a
              href="tel:+447717772881"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07717 772881
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
