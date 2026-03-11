# Area pages SEO audit (vs SEO Kings rules)

Checked against:
- `area-pages-seo.mdc` — SEO and content for area pages
- `area-page-schema-setup.mdc` — JSON-LD schema pattern for multi-location pages

## 1. Schema (area-page-schema-setup)

| Rule | Implementation | Status |
|------|----------------|--------|
| Each area JSON-LD uses **current** slug/area only | `getAreaBySlug(slug)` in layout; schema built from `area` + `slug` | ✅ |
| **LocalBusiness** `@id` per slug | `getAreaLocalBusinessId(slug)` → `{SITE_URL}/#localbusiness-{slug}` | ✅ |
| **LocalBusiness** description: current area first, then 2–3 nearby, then region | `area.name` + `nearbyAreas.slice(0,3)` + `region` in description | ✅ |
| **areaServed**: Place (current) + Places (nearby) + PostalCode (postcodes) | Place with `containedInPlace` (region), 3 nearby Places, `area.postcodes` → PostalCode | ✅ |
| **geo**: coordinates for current area, fallback | `AREA_GEO[slug] ?? DEFAULT_GEO` (Bath) | ✅ |
| **serviceArea**: GeoCircle (15 km) + Place for current area | GeoCircle 15000 m + Place `area.name` | ✅ |
| **Service** JSON-LD per area | `getAreaServiceSchema(area, slug)` — Service with `provider` @id = area LocalBusiness, `areaServed` current area | ✅ |
| Client-side script cleanup | Not applicable — Next.js server-renders; no client-injected LD in head | ✅ |

## 2. SEO and content (area-pages-seo)

| Rule | Implementation | Status |
|------|----------------|--------|
| Metadata: title and description include town name | `area.metaTitle`, `area.metaDescription` per area; `generateMetadata` in `page.tsx` | ✅ |
| Distinct “Why choose” per area | `area.whyChoose` (array of bullets) in areas-data; section “Why choose a local painter and decorator in {area.name}” | ✅ |
| Links: homepage + nearby areas | Breadcrumbs (Home, Areas, area.name); “Local areas I cover” (nearbyAreas); “Nearby areas I also cover”; “I also cover” (other areas) + “All areas” | ✅ |
| No layout/CSS-only changes when editing SEO | Edits are metadata, schema, and location strings | ✅ |

## 3. Data source

- **Single source of truth**: `lib/areas-data.ts` — `AREA_PAGES` with `slug`, `name`, `metaTitle`, `metaDescription`, `heroSubtitle`, `intro`, `localInfo`, `services`, `nearbyAreas`, `trustLine`, `whyChoose`, `faqs`, `serviceAnchors`, `introImages`, `postcodes`, `region`, `sameAs`.
- **Schema**: `lib/areaSchema.ts` — `getAreaLocalBusinessSchema`, `getAreaServiceSchema`, `getAreaLocalBusinessId`, `AREA_GEO`. Current area Place in `areaServed` includes optional `sameAs` when set.
- **Output**: `app/area/[slug]/layout.tsx` — LocalBusiness + Service + FAQPage (when `area.faqs` present); `app/area/[slug]/page.tsx` — metadata and content.

## 4. Optional enhancements (not in rules)

- **sameAs for Place**: ✅ **Done.** Optional `sameAs` (e.g. Wikipedia URL) added to `AreaPage` in `areas-data`; included in the current area Place in both LocalBusiness and Service `areaServed` in `areaSchema.ts`. Wikipedia URLs added for Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, Chippenham, Bradford on Avon, Frome, Westbury, Warminster, Melksham.
- **More areas with postcodes/region**: All area entries now have `postcodes` and `region` set where applicable; fallback remains `region ?? "Bath and North East Somerset"` in schema.

## 5. Files touched in this audit

- `lib/areaSchema.ts` — description now includes region; added `getAreaServiceSchema`, `getAreaLocalBusinessId`; current area Place in `areaServed` includes optional `sameAs`.
- `app/area/[slug]/layout.tsx` — outputs Service JSON-LD script alongside LocalBusiness and FAQPage.
- `lib/areas-data.ts` — added optional `sameAs` to `AreaPage`; set Wikipedia URLs for main towns (Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, Chippenham, Bradford on Avon, Frome, Westbury, Warminster, Melksham).
