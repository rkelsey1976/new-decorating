/**
 * ProfessionalService + HousePainter JSON-LD for the organisation.
 * Single source of truth: areaServed as AdministrativeArea, hasOfferCatalog, Bath HQ address, serviceArea.
 */

import { SITE_URL, GBP_MAPS_URL } from "@/lib/site";

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
      ratingValue: "5.0",
      bestRating: "5",
      reviewCount: "9",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Steve Frankham" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody:
          "New Decorating has worked on a couple of projects for me, some exterior work which needed a lot of preparation before painting. I was kept informed of what was being done all through the stages. Also some interior work where I again cannot fault the work. Jay tidy at all times. In general a good job done, really pleased and 100% will be using him again.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mike Joe Coates" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody:
          "Fantastic painter and decorator. Jay got back to me straight away with a sensible price. The job was to decorate my living room and hallway. He arrived on time every day, everything was covered in dust sheets, there was no mess at the end of the day. All done in one week, and what a great job he did. I would highly recommend Jay with any decorating that needs to be done.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Cam New" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody:
          "Highly recommend. New Decorating paint all my bespoke units, top quality finish and fast turnover.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Andrew Scappaticci" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody:
          "I highly recommend New Decorating having worked with him on various projects. Jay completes his work to a very high standard and always hits his deadlines. Very professional, clean and tidy and very competitive with his prices. Always happy to advise you and answer questions before any work is started. Overall 5 star service.",
      },
    ],
  };
}
