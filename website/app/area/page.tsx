import Link from "next/link";
import PageHero from "@/components/PageHero";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import BrushStroke from "@/components/BrushStroke";
import { AREAS_COVERED, SERVICE_AREA_NAME } from "@/lib/area";
import { AREA_PAGES } from "@/lib/areas-data";
import { DEFAULT_META_TITLE } from "@/lib/site";

import type { Metadata } from "next";

/** Bath neighbourhoods – shown under "Local areas I cover" only, not in the main area grid */
const BATH_LOCAL_SLUGS = [
  "widcombe",
  "twerton",
  "larkhall",
  "combe-down",
  "odd-down",
  "bathwick",
  "weston",
  "batheaston",
  "bathford",
];

/** Keynsham sub-areas – shown under "Local areas I cover" only, not in the main area grid */
const KEYNSHAM_LOCAL_SLUGS = [
  "saltford",
  "bitton",
  "whitchurch",
  "stockwood",
  "queen-charlton",
  "chewton-keynsham",
];

/** Midsomer Norton / Somer Valley sub-areas – not in the main area grid */
const MIDSOMER_NORTON_LOCAL_SLUGS = [
  "westfield",
  "paulton",
  "peasedown-st-john",
  "chilcompton",
  "stratton-on-the-fosse",
];

/** Radstock / Somer Valley sub-areas – not in the main area grid */
const RADSTOCK_LOCAL_SLUGS = ["writhlington", "kilmersdon", "coleford", "holcombe"];

/** Trowbridge / Wiltshire sub-areas – not in the main area grid */
const TROWBRIDGE_LOCAL_SLUGS = ["westbury", "warminster", "hilperton", "staverton"];

const MAIN_AREA_PAGES = AREA_PAGES.filter(
  (a) =>
    !BATH_LOCAL_SLUGS.includes(a.slug) &&
    !KEYNSHAM_LOCAL_SLUGS.includes(a.slug) &&
    !MIDSOMER_NORTON_LOCAL_SLUGS.includes(a.slug) &&
    !RADSTOCK_LOCAL_SLUGS.includes(a.slug) &&
    !TROWBRIDGE_LOCAL_SLUGS.includes(a.slug)
);

export const metadata: Metadata = {
  title: `Areas I cover | ${DEFAULT_META_TITLE}`,
  description:
    "Painter & decorator Bath. Areas I cover: Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, Chippenham, Rode, Melksham, Bradford on Avon, Frome and surrounding areas. Free quotes. 25+ years.",
  alternates: { canonical: "/area" },
};

export default function AreaPage() {
  return (
    <div>
      <PageHero
        locationLine="Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, Chippenham, Rode, Melksham, Bradford on Avon, Frome & more"
        title="Areas I cover"
        subtitle="I work across Bath, BANES, Wiltshire and Somerset. Get in touch with your postcode to confirm I cover your area."
        image="/hero-area.jpg"
        imageAlt="Bath and North East Somerset"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas" },
        ]}
        canonicalPath="/area"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-6 py-3 text-sm font-semibold shadow-lg hover:bg-white/95 transition-all"
          >
            Get a free quote
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            View my work
          </Link>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] text-center">
            Service area
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground text-center mt-2 tracking-tight">
            Bath, BANES, Wiltshire & Somerset
          </h2>
          <p className="mt-6 text-muted text-center max-w-2xl mx-auto leading-relaxed">
            I&apos;m a painting and decorating business based in Bath. I serve homes across {SERVICE_AREA_NAME}, Wiltshire and Somerset — from{" "}
            {MAIN_AREA_PAGES.map((a, i) => (
              <span key={a.slug}>
                {i > 0 && ", "}
                <Link href={`/area/${a.slug}`} className="text-accent font-medium hover:text-accent-soft transition-colors">
                  {a.name}
                </Link>
              </span>
            ))}{" "}
            and surrounding villages. Get in touch with your postcode and I&apos;ll confirm I can cover your area.
          </p>

          {/* Main area page links (towns only, not Bath neighbourhoods) */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MAIN_AREA_PAGES.map((areaPage) => (
              <Link
                key={areaPage.slug}
                href={`/area/${areaPage.slug}`}
                className="group rounded-2xl border border-black/8 bg-white p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all text-center"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3" aria-hidden="true">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {areaPage.name}
                </h3>
                <p className="mt-2 text-muted text-sm">Painter & decorator in {areaPage.name}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-accent text-sm font-medium">
                  View details <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Area list with links to each location page (main towns only) */}
          <ul className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6" aria-label="Towns and areas I cover">
            {AREAS_COVERED.map((area) => {
              const areaPage = AREA_PAGES.find((a) => a.name === area);
              return (
                <li
                  key={area}
                  className="rounded-xl bg-white border border-black/8 px-6 py-4 text-foreground font-medium shadow-sm"
                >
                  {areaPage ? (
                    <Link href={`/area/${areaPage.slug}`} className="text-accent hover:text-accent-soft transition-colors">
                      {area}
                    </Link>
                  ) : (
                    area
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/10 border-t border-accent/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center tracking-tight">
            Where I work
          </h2>
          <p className="mt-4 text-muted text-center max-w-xl mx-auto">
            See my service area on the map below. I cover{" "}
            {MAIN_AREA_PAGES.map((a, i) => (
              <span key={a.slug}>
                {i > 0 && ", "}
                <Link href={`/area/${a.slug}`} className="text-accent font-medium hover:text-accent-soft transition-colors">
                  {a.name}
                </Link>
              </span>
            ))}{" "}
            and surrounding villages.
          </p>
          <div className="mt-10 max-w-4xl mx-auto">
            <GoogleMapEmbed title="" height="500" />
          </div>
        </div>
      </section>

      <section className="relative pt-20 sm:pt-28 pb-16 sm:pb-24 bg-accent text-white">
        <BrushStroke position="top" fill="var(--accent-tint)" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Not sure if I cover your area?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto leading-relaxed">
            Send me your postcode and I&apos;ll let you know. I offer free, no-obligation quotes for painting and decorating across BANES.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white text-accent px-7 py-3.5 text-base font-semibold hover:bg-white/95 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
