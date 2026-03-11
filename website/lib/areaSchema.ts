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
  keynsham: { latitude: 51.4139, longitude: -2.4969 },
  "midsomer-norton": { latitude: 51.2856, longitude: -2.4855 },
  radstock: { latitude: 51.2922, longitude: -2.4461 },
  trowbridge: { latitude: 51.3209, longitude: -2.2086 },
  chippenham: { latitude: 51.4588, longitude: -2.1248 },
  frome: { latitude: 51.2283, longitude: -2.3226 },
  melksham: { latitude: 51.3728, longitude: -2.1386 },
  "bradford-on-avon": { latitude: 51.3475, longitude: -2.2506 },
  saltford: { latitude: 51.4014, longitude: -2.4592 },
  bitton: { latitude: 51.4397, longitude: -2.4592 },
  widcombe: { latitude: 51.3781, longitude: -2.3489 },
  larkhall: { latitude: 51.4011, longitude: -2.3522 },
  "combe-down": { latitude: 51.3589, longitude: -2.3489 },
  "odd-down": { latitude: 51.3636, longitude: -2.3819 },
};

const DEFAULT_GEO = AREA_GEO.bath;

/**
 * Build LocalBusiness JSON-LD for an area page.
 * - @id unique per area (#localbusiness-{slug})
 * - description: current area first, then 2–3 nearby, then region
 * - areaServed: Place for current area + Places for nearby + PostalCode for postcodes
 * - geo: coordinates for current area
 * - serviceArea: GeoCircle (15 km) + Place for current area
 */
export function getAreaLocalBusinessSchema(area: AreaPage, slug: string): object {
  const region = area.region ?? "Bath and North East Somerset";
  const geo = AREA_GEO[slug] ?? DEFAULT_GEO;
  const nearbyNames = area.nearbyAreas.slice(0, 3);

  const description =
    nearbyNames.length > 0
      ? `Professional painter and decorator in ${area.name}. Serving ${nearbyNames.join(", ")} and the surrounding area. Interior and exterior painting, wallpaper hanging and preparation & repair.`
      : `Professional painter and decorator in ${area.name}. Interior and exterior painting, wallpaper hanging and preparation & repair.`;

  const areaServed: object[] = [
    {
      "@type": "Place",
      name: area.name,
      ...(region ? { containedInPlace: { "@type": "AdministrativeArea", name: region } } : {}),
    },
    ...area.nearbyAreas.slice(0, 3).map((name) => ({
      "@type": "Place" as const,
      name,
    })),
    ...(area.postcodes ?? []).map((code) => ({
      "@type": "PostalCode" as const,
      postalCode: code,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    "@id": `${SITE_URL}/#localbusiness-${slug}`,
    name: "New Decorating",
    url: SITE_URL,
    telephone: "+447717772881",
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: region,
      addressCountry: "GB",
    },
    areaServed: areaServed.length === 1 ? areaServed[0] : areaServed,
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
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
