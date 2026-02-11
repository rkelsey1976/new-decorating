# SEO Improvements for New Decorating

Actionable ideas to improve search visibility for "painter decorator Bath" and related terms. Ordered by impact and effort.

---

## Already in place ✓

- **Titles**: "Painter & Decorator in Bath" and location in page titles
- **Schema**: LocalBusiness (PaintingContractor), FAQPage (home + services), BlogPosting
- **Sitemap & robots**: All key pages included, sitemap.xml referenced
- **Canonical URLs**: Set on all main pages
- **Area pages**: Bath, Keynsham, Midsomer Norton, Radstock with local copy
- **Service pages**: 5 services with benefits, process, FAQs
- **Gallery**: Descriptive alt text and categories
- **Internal linking**: Nav, CTAs, related services/areas
- **Mobile**: Responsive, click-to-call
- **Meta keywords**: Primary/secondary keywords in layout

---

## 1. Google Business Profile (high impact, off-site)

- **Claim or create** your GBP for "New Decorating" in Bath.
- **Keep NAP identical** to the website (name, address if shown, phone, area).
- **Category**: e.g. "Painter", "Decorator", "Painting contractor".
- **Description**: Short summary with "painter and decorator Bath", services, and "free quotes".
- **Photos**: Jobs, team, van, before/after (with alt/captions where possible).
- **Collect Google reviews** and reply to them; consider a gentle CTA on the contact/thank-you page.
- **Posts**: Occasional updates (e.g. "Now taking bookings for exterior painting in Bath & BANES").

This directly affects local pack and Maps visibility for "painter decorator Bath".

---

## 2. Breadcrumb schema (quick win, on-site)

- Add **BreadcrumbList** JSON-LD on pages that show breadcrumbs (e.g. area, service, blog, contact).
- Helps Google show breadcrumbs in search results and reinforces site structure.
- **Where**: Any page that already renders breadcrumb links (e.g. PageHero with `breadcrumbs`).

---

## 3. Meta descriptions (quick win)

- **Length**: Aim for **150–160 characters** so they’re not truncated in SERPs.
- **Include**: Primary intent (e.g. "Painter & decorator in Bath") + one benefit (e.g. "Free quotes", "25+ years") + CTA if space ("Get a quote").
- **Check**: Homepage, About, Services index, Contact, Gallery, Area index, and 1–2 service/area/blog pages. Adjust in metadata or in `lib` (e.g. `metaDescription`).

---

## 4. Gallery and images (content + technical)

- **Alt text**: Where it fits naturally, add location (e.g. "Interior painting Bath – living room" or "Exterior painting Keynsham").
- **File names**: When adding new images, use descriptive names (e.g. `interior-painting-bath-living-room.jpg`) instead of only IDs.
- **Captions**: On gallery or project sections, short captions with location/service help (e.g. "Period property, Bath").
- Keep using Next.js `<Image>` for automatic optimisation and dimensions.

---

## 5. Blog and long-tail content (content)

- **Topics**: "Painting period homes in Bath", "Exterior painting Bath stone", "Choosing colours for Georgian homes", "Decorator Bath – what to expect", "Free quote painting Bath".
- **Format**: Short, practical posts (like existing prep and colour articles) with a clear answer and a soft CTA to contact or a relevant service page.
- **Internal links**: From each post to 1–2 service or area pages.
- **Frequency**: Even 1 new post every 1–2 months helps over time.

---

## 6. Reviews and trust (off-site + on-site)

- **Google reviews**: Main lever for local SEO; ask happy customers to leave a review (link on contact/thank-you page).
- **On-site**: You already show Facebook testimonials; if you add Google reviews, a "Google reviews" or "What our customers say" section with a few quotes + link to GBP can help.
- **Schema**: When you have enough Google reviews, add `aggregateRating` to your LocalBusiness schema (average rating + review count). Only add when data is accurate.

---

## 7. Service and area page tweaks (content)

- **Service pages**: First paragraph or hero subtitle could mention "Bath" or "Bath & BANES" once if it doesn’t already.
- **Area pages**: You already list local areas; keep adding villages/neighbourhoods as you serve them (in `nearbyAreas` and intro text).
- **FAQs**: Area-specific FAQs (e.g. "Do you cover [village]?") can be added to area pages and marked up with FAQ schema if you add a dedicated FAQ block.

---

## 8. External listings (off-site)

- **Directories**: Checkatrade, MyBuilder, Trustatrader, Bing Places, Apple Maps – same NAP and website as site and GBP.
- **Citations**: Consistent name, address, phone, and website URL across the web helps local SEO.

---

## 9. Technical checks (periodic)

- **Core Web Vitals**: Use PageSpeed Insights or Search Console; fix any large layout shifts or slow LCP (images and fonts are already in good shape with Next/Image and fonts).
- **Indexing**: In Google Search Console, request indexing for key URLs after big content changes; check for crawl errors.
- **HTTPS**: Already in place via Netlify.
- **Mobile usability**: No separate mobile URL; single responsive site is correct.

---

## 10. Optional schema enhancements

- **Service pages**: Add **Service** schema (name, description, areaServed, provider) if you want richer snippets.
- **BreadcrumbList**: As in section 2.
- **aggregateRating**: Once you have Google reviews, add to LocalBusiness.
- **openingHoursSpecification**: If you publish set hours (e.g. "Mon–Fri 8am–5pm"), add to LocalBusiness.

---

## Priority order (suggested)

1. **Google Business Profile** – set up/optimise and start collecting reviews.
2. **BreadcrumbList** – add on breadcrumb pages (low effort, clear signal).
3. **Meta descriptions** – audit and tighten to 150–160 chars with keyword + benefit.
4. **Gallery/image alt** – add "Bath" or area where natural in alt and captions.
5. **Blog** – plan 2–3 long-tail posts and link to service/area pages.
6. **Reviews** – CTA for Google reviews on contact or thank-you page.
7. **External listings** – NAP consistency and 1–2 key directories.

After that, revisit **aggregateRating**, **Service** schema, and more blog content as you grow.
