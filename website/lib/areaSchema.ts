/**
 * Area page LocalBusiness JSON-LD schema (dynamic per town) for local SEO.
 * Each area URL has its own schema so the markup matches the town in the URL.
 * Aligned with area-page-schema-setup pattern: @id, areaServed, geo, serviceArea.
 */

import { SITE_URL } from "@/lib/site";
import type { AreaPage } from "@/lib/areas-data";

/** Geo coordinates per area slug — used for geo and serviceArea GeoCircle. Fallback to Bath if slug missing. */
export const AREA_GEO: Record<string, { latitude: number; longitude: number }> = {
  bath: { latitude: 51.3811, longitude: -2.359 },
  widcombe: { latitude: 51.3781, longitude: -2.3489 },
  twerton: { latitude: 51.3786, longitude: -2.3992 },
  larkhall: { latitude: 51.4011, longitude: -2.3522 },
  "combe-down": { latitude: 51.3589, longitude: -2.3489 },
  "odd-down": { latitude: 51.3636, longitude: -2.3819 },
  bathwick: { latitude: 51.3833, longitude: -2.3508 },
  "bear-flat": { latitude: 51.3711, longitude: -2.3633 },
  "oldfield-park": { latitude: 51.3778, longitude: -2.3833 },
  southdown: { latitude: 51.3689, longitude: -2.3917 },
  whiteway: { latitude: 51.3656, longitude: -2.3789 },
  "st-saviours": { latitude: 51.3989, longitude: -2.3542 },
  walcot: { latitude: 51.3842, longitude: -2.3589 },
  bathampton: { latitude: 51.3989, longitude: -2.3217 },
  weston: { latitude: 51.3922, longitude: -2.3822 },
  lansdown: { latitude: 51.4011, longitude: -2.3633 },
  batheaston: { latitude: 51.4139, longitude: -2.3181 },
  bathford: { latitude: 51.4014, longitude: -2.3006 },
  keynsham: { latitude: 51.4139, longitude: -2.4969 },
  saltford: { latitude: 51.4014, longitude: -2.4592 },
  bitton: { latitude: 51.4397, longitude: -2.4592 },
  whitchurch: { latitude: 51.4189, longitude: -2.5569 },
  stockwood: { latitude: 51.4289, longitude: -2.5281 },
  "queen-charlton": { latitude: 51.4089, longitude: -2.5125 },
  "chewton-keynsham": { latitude: 51.3989, longitude: -2.4917 },
  "midsomer-norton": { latitude: 51.2856, longitude: -2.4855 },
  westfield: { latitude: 51.2917, longitude: -2.4722 },
  paulton: { latitude: 51.3042, longitude: -2.5006 },
  "peasedown-st-john": { latitude: 51.3217, longitude: -2.4342 },
  chilcompton: { latitude: 51.2689, longitude: -2.5089 },
  "stratton-on-the-fosse": { latitude: 51.2542, longitude: -2.4917 },
  radstock: { latitude: 51.2922, longitude: -2.4461 },
  writhlington: { latitude: 51.2889, longitude: -2.4528 },
  kilmersdon: { latitude: 51.2714, longitude: -2.4417 },
  coleford: { latitude: 51.2406, longitude: -2.4406 },
  holcombe: { latitude: 51.2422, longitude: -2.4681 },
  trowbridge: { latitude: 51.3209, longitude: -2.2086 },
  westbury: { latitude: 51.2619, longitude: -2.1806 },
  warminster: { latitude: 51.2042, longitude: -2.1789 },
  hilperton: { latitude: 51.3319, longitude: -2.1917 },
  staverton: { latitude: 51.3342, longitude: -2.2083 },
  chippenham: { latitude: 51.4588, longitude: -2.1248 },
  rode: { latitude: 51.2819, longitude: -2.2819 },
  melksham: { latitude: 51.3728, longitude: -2.1386 },
  "bradford-on-avon": { latitude: 51.3475, longitude: -2.2506 },
  frome: { latitude: 51.2283, longitude: -2.3226 },
};

const DEFAULT_GEO = AREA_GEO.bath;

/** Canonical @id for the area LocalBusiness (used in schema and by Service provider). */
export function getAreaLocalBusinessId(slug: string): string {
  return `${SITE_URL}/#localbusiness-${slug}`;
}

/**
 * Build LocalBusiness JSON-LD for an area page.
 * - @id unique per area (#localbusiness-{slug})
 * - description: current area first, then 2–3 nearby, then region
 * - areaServed: Place for current area + Places for nearby (postcode is in address and name only)
 * - geo: coordinates for current area
 * - serviceArea: GeoCircle (15 km) + Place for current area
 */
export function getAreaLocalBusinessSchema(area: AreaPage, slug: string): object {
  const region = area.region ?? "Bath and North East Somerset";
  const geo = AREA_GEO[slug] ?? DEFAULT_GEO;
  const nearbyNames = area.nearbyAreas.slice(0, 3);

  const description =
    nearbyNames.length > 0
      ? `Professional painter and decorator in ${area.name}. Serving ${nearbyNames.join(", ")} and the surrounding area${region ? ` in ${region}` : ""}. Interior and exterior painting, wallpaper hanging and preparation & repair.`
      : `Professional painter and decorator in ${area.name}${region ? `, ${region}` : ""}. Interior and exterior painting, wallpaper hanging and preparation & repair.`;

  const postcodeLabel =
    area.postcodes && area.postcodes.length > 0 ? ` ${area.postcodes.join(", ")}` : "";
  const areaLocalBusinessName = `Painter and Decorator in ${area.name}${postcodeLabel} | New Decorating`;

  const areaServed: object[] = [
    {
      "@type": "Place",
      name: area.name,
      ...(region ? { containedInPlace: { "@type": "AdministrativeArea", name: region } } : {}),
      ...(area.sameAs
        ? { sameAs: Array.isArray(area.sameAs) ? area.sameAs : [area.sameAs] }
        : {}),
    },
    ...area.nearbyAreas.slice(0, 3).map((name) => ({
      "@type": "Place" as const,
      name,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PaintingContractor"],
    "@id": getAreaLocalBusinessId(slug),
    name: areaLocalBusinessName,
    url: SITE_URL,
    image: `${SITE_URL}/hero-area.jpg`,
    telephone: "+447717772881",
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: region,
      addressCountry: "GB",
      ...(area.postcodes && area.postcodes.length > 0
        ? { postalCode: area.postcodes[0] }
        : {}),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "16:30",
      },
    ],
    priceRange: "$$",
    areaServed: areaServed.length === 1 ? areaServed[0] : areaServed,
    serviceArea: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        radius: 15000,
      },
      {
        "@type": "Place",
        name: area.name,
      },
    ],
  };
}

/**
 * Build Service JSON-LD for an area page (per area-page-schema-setup: unique LocalBusiness and Service per area).
 * References the area LocalBusiness as provider; areaServed matches the current area.
 */
export function getAreaServiceSchema(area: AreaPage, slug: string): object {
  const region = area.region ?? "Bath and North East Somerset";
  const areaServed: object[] = [
    {
      "@type": "Place",
      name: area.name,
      ...(region ? { containedInPlace: { "@type": "AdministrativeArea", name: region } } : {}),
      ...(area.sameAs
        ? { sameAs: Array.isArray(area.sameAs) ? area.sameAs : [area.sameAs] }
        : {}),
    },
    ...area.nearbyAreas.slice(0, 2).map((name) => ({ "@type": "Place" as const, name })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service-${slug}`,
    name: `Painting & Decorating in ${area.name}`,
    description: `Professional painting and decorating services in ${area.name} and the surrounding area. Interior and exterior painting, wallpaper hanging, preparation and repair.`,
    provider: { "@id": getAreaLocalBusinessId(slug) },
    areaServed: areaServed.length === 1 ? areaServed[0] : areaServed,
  };
}
