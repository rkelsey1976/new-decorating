# Meta descriptions audit

All pages have meta descriptions set. Summary by section.

---

## Root layout (default fallback)

| Where | Description |
|-------|-------------|
| `app/layout.tsx` | `metadata.description`, `openGraph.description`, `twitter.description` |
| Content | "Professional painter & decorator in Bath & BANES. 25+ years experience in interior/exterior painting, wallpaper & more. Free quotes, fully insured. Get a free quote today!" |

---

## Static pages (each has `metadata.description`)

| Page | File | Description present |
|------|------|---------------------|
| Home | `app/page.tsx` | Yes – same as layout, includes "Get a free quote today!" |
| Contact | `app/contact/page.tsx` | Yes – "Contact painter & decorator Bath. Get a free quote…" |
| About | `app/about/page.tsx` | Yes – "About New Decorating – painter & decorator in Bath…" |
| Services index | `app/services/page.tsx` | Yes – "My services – painter & decorator Bath…" |
| Areas index | `app/area/page.tsx` | Yes – "Painter & decorator Bath. Areas I cover: Bath, Keynsham…" |
| Gallery | `app/gallery/page.tsx` | Yes – "My work – painter & decorator Bath. Gallery of…" |
| Blog index | `app/blog/page.tsx` | Yes – "Blog – painter & decorator Bath. Painting and decorating tips…" |
| Privacy | `app/privacy/page.tsx` | Yes – "Privacy policy – New Decorating, painter & decorator Bath…" |

**Note:** Pages that don’t set `openGraph.description` or `twitter.description` inherit from the root layout in Next.js, so they still get a description when shared.

---

## Dynamic pages (description from data)

| Route | File | Source | Description present |
|-------|------|--------|---------------------|
| `/area/[slug]` | `app/area/[slug]/page.tsx` | `area.metaDescription` from `lib/areas-data.ts` | Yes – every area has `metaDescription` |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | `service.metaDescription` from `lib/services.ts` | Yes – all 4 services have `metaDescription` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | `article.metaDescription` from `lib/blog.ts` | Yes – all 7 articles have `metaDescription` |

---

## Data sources

- **Area pages (35+)** – `lib/areas-data.ts`: each `AreaPage` has `metaDescription` (location + "Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes." + area name).
- **Service pages (4)** – `lib/services.ts`: each `ServicePage` has `metaDescription` (service + "Bath – painter & decorator… 25+ years, free quotes. BANES.").
- **Blog posts (7)** – `lib/blog.ts`: each article has `metaDescription` (topic + "Bath painter & decorator" or similar + "25+ years" / "Free quotes").

---

## Checklist

- [x] Layout has default description + Open Graph + Twitter
- [x] All static pages have `metadata.description`
- [x] Area detail pages use `area.metaDescription`
- [x] Service detail pages use `service.metaDescription`
- [x] Blog detail pages use `article.metaDescription`
- [x] No page type is missing a meta description

**Optional improvements (if you want to refine later):**

- Add explicit `openGraph.description` and `twitter.description` on key static pages (Contact, About, Services, Area index) if you want different copy when shared vs. in search.
- Keep meta descriptions under ~155–160 characters where possible so they don’t get truncated in search results.
