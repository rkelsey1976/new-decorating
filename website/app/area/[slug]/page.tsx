import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import AreaFAQ from "@/components/AreaFAQ";
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

import { GBP_MAPS_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/site";

export default async function AreaDetailPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  /* Other areas for cross-links */
  const otherAreas = AREA_PAGES.filter((a) => a.slug !== area.slug);

  return (
    <div>
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
      >
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={GBP_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/95 font-medium hover:text-white transition-colors"
            aria-label="See our Google reviews"
          >
            <span className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: GOOGLE_RATING }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            <span>{GOOGLE_RATING} stars</span>
            <span className="text-white/80">({GOOGLE_REVIEW_COUNT} Google reviews)</span>
          </a>
        </div>
      </PageHero>

      {/* Intro */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto ${area.introImages && area.introImages.length > 0 ? "lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-start" : "max-w-3xl mx-auto"}`}>
            {/* Text content */}
            <div className={area.introImages && area.introImages.length > 0 ? "lg:col-span-7" : ""}>
              {area.trustLine && (
                <p className="text-accent font-semibold text-sm sm:text-base mb-6" role="doc-subtitle">
                  {area.trustLine}
                </p>
              )}
              <p className="text-accent text-sm font-medium uppercase tracking-[0.2em]">
                {area.name}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mt-2 tracking-tight">
                Painting & decorating in {area.name}
              </h2>
              <p className="mt-6 text-muted leading-relaxed">{area.intro}</p>
              <p className="mt-4 text-muted leading-relaxed">{area.localInfo}</p>
              {area.landmarks && area.landmarks.length > 0 && (
                <p className="mt-4 text-muted leading-relaxed">
                  I work across {area.name} and the surrounding area
                  {area.landmarks.length === 1
                    ? ` — including ${area.landmarks[0]}.`
                    : ` — from ${area.landmarks.slice(0, 2).join(" to ")}${area.landmarks.length > 2 ? " and beyond" : "."}`}
                </p>
              )}

              {/* Why choose (area-specific) - card grid with icons */}
              {area.whyChoose && area.whyChoose.length > 0 && (
                <div className="mt-10 pt-8 border-t border-black/8">
                  <h3 className="font-display text-xl font-semibold text-foreground tracking-tight">
                    Why choose a local painter and decorator in {area.name}
                  </h3>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {area.whyChoose.map((item, i) => {
                      const icons = [
                        <svg key="0" className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                        <svg key="1" className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                        <svg key="2" className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                        <svg key="3" className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                      ];
                      return (
                        <div
                          key={i}
                          className="flex gap-4 rounded-xl border border-black/8 bg-white p-4 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-200"
                        >
                          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center" aria-hidden="true">
                            {icons[i % icons.length]}
                          </span>
                          <p className="text-muted text-sm leading-relaxed pt-0.5">{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

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
            </div>

            {/* Side images (when provided) */}
            {area.introImages && area.introImages.length > 0 && (
              <div className="mt-10 lg:mt-0 lg:col-span-5 flex flex-col gap-6">
                {area.introImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden border border-black/8 shadow-lg"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Local areas in and around this area - full width below */}
          <div className={`mt-12 pt-10 border-t border-black/8 ${area.introImages && area.introImages.length > 0 ? "max-w-3xl" : "max-w-3xl mx-auto"}`}>
            {area.nearbyAreas.length > 0 && (
              <>
                <p className="text-accent text-sm font-medium uppercase tracking-[0.2em]">
                  Local areas I cover
                </p>
                <p className="mt-2 text-muted text-sm">
                  I work across {area.name} and these nearby areas:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Local areas near ${area.name}`}>
                  {area.nearbyAreas.map((place) => {
                    const areaPage = AREA_PAGES.find((a) => a.name === place);
                    return (
                      <li key={place}>
                        {areaPage ? (
                          <Link
                            href={`/area/${areaPage.slug}`}
                            className="inline-block rounded-lg bg-accent/10 text-accent px-4 py-2 text-sm font-medium hover:bg-accent/20 transition-colors"
                          >
                            {place}
                          </Link>
                        ) : (
                          <span className="rounded-lg bg-accent/10 text-accent px-4 py-2 text-sm font-medium">
                            {place}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </>
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
                  {area.serviceAnchors?.[svc.slug] ?? svc.title}
                </Link>
              ))}
            </div>
            <p className="mt-4 text-muted text-xs">
              <Link href="/area" className="text-accent hover:underline">
                See all areas I cover
              </Link>
            </p>
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
            {area.nearbyAreas.map((nearby) => {
              const areaPage = AREA_PAGES.find((a) => a.name === nearby);
              return (
                <li key={nearby}>
                  {areaPage ? (
                    <Link
                      href={`/area/${areaPage.slug}`}
                      className="inline-block rounded-xl bg-white border border-black/8 px-5 py-3 text-foreground font-medium shadow-sm text-sm hover:border-accent/30 hover:text-accent transition-colors"
                    >
                      {nearby}
                    </Link>
                  ) : (
                    <span className="inline-block rounded-xl bg-white border border-black/8 px-5 py-3 text-foreground font-medium shadow-sm text-sm">
                      {nearby}
                    </span>
                  )}
                </li>
              );
            })}
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
            <GoogleMapEmbed title={`New Decorating — ${area.name}`} height="500" />
          </div>
        </div>
      </section>

      {/* FAQ (area-specific, accordion) */}
      {area.faqs && area.faqs.length > 0 && (
        <AreaFAQ faqs={area.faqs} areaName={area.name} />
      )}

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
