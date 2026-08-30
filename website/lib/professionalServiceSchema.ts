/**
 * ProfessionalService + HousePainter JSON-LD for the organisation.
 * Single source of truth: areaServed as AdministrativeArea, hasOfferCatalog, Bath HQ address, serviceArea.
 */

import { SITE_URL, GBP_MAPS_URL, GOOGLE_REVIEW_COUNT, GOOGLE_RATING } from "@/lib/site";
import { REVIEWS } from "@/lib/reviews";

/** Canonical entity ID – use this same @id everywhere so Google merges all references into one entity */
export const ORGANIZATION_ID = `${SITE_URL}#organization`;

/** Cities/towns and regions for areaServed and serviceArea (AdministrativeArea for local SEO). */
const AREA_NAMES = [
  "Bath",
  "Keynsham",
  "Midsomer Norton",
  "Radstock",
  "Trowbridge",
  "Chippenham",
  "Rode",
  "Melksham",
  "Bradford on Avon",
  "Frome",
  "Bath and North East Somerset",
  "Wiltshire",
  "Somerset",
] as const;

/** Array of AdministrativeArea for areaServed/serviceArea — reuse on services pages and org schema. */
export function getSchemaAreaServed(): object[] {
  return AREA_NAMES.map((name) => ({
    "@type": "AdministrativeArea" as const,
    name,
  }));
}

function areaServed(): object[] {
  return getSchemaAreaServed();
}

/** Build ProfessionalService + HousePainter JSON-LD (schema.org: HousePainter is the correct type; PaintingContractor does not exist). */
export function getProfessionalServiceSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "HousePainter"],
    "@id": ORGANIZATION_ID,
    name: "New Decorating",
    description:
      "Painters in Bath. Painter & decorator — interior, exterior, wallpaper across BANES. Fully insured, free quotes. 25+ years experience.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/exterior-painting-in-bath.png`,
    priceRange: "$$",
    areaServed: areaServed(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.3811,
      longitude: -2.359,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "23 Dominion Rd, Twerton",
      addressLocality: "Bath",
      postalCode: "BA2 1DW",
      addressRegion: "Bath and North East Somerset",
      addressCountry: "GB",
    },
    telephone: "+447717772881",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "16:30",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61571675780751",
      GBP_MAPS_URL,
    ],
    hasMap: GBP_MAPS_URL,
    serviceArea: areaServed(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting & Decorating Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Decorating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Contracts" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wallpaper hanging" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preparation & repair" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_RATING.toFixed(1),
      bestRating: "5",
      reviewCount: String(GOOGLE_REVIEW_COUNT),
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.stars, bestRating: 5 },
      reviewBody: r.text,
      ...(r.date ? { datePublished: r.date } : {}),
    })),
  };
}
