# Schema (structured data) audit – FAQs and widgets Google cares about

A checklist of what’s in place, what Google expects, and what to fix or add.

---

## What’s currently on the site

| Page / component | Schema type | Purpose |
|------------------|-------------|---------|
| **Layout** (every page) | `PaintingContractor` + `ProfessionalService` (LocalBusiness) | JSON-LD in layout; business name, phone, areaServed, geo, hasOfferCatalog, address, openingHoursSpecification. Boosts local and professional-service rich results. |
| **Layout** (every page) | `WebSite` | Site entity with name, url, description, publisher (Organization). Helps Google understand the site and brand. |
| **Homepage** | `FAQPage` | 5 Q&As – must match the visible FAQ component text exactly. ✓ |
| **Homepage** | `LocalBusiness` + `aggregateRating` + `review[]` | Star rating and review snippets. Use real customer reviews only; keep count/rating in sync. |
| **Services index** | `ItemList` of `Service` | Lists your 4 service pages with provider and areaServed. |
| **Service [slug]** | `Service` | Single service with provider (PaintingContractor), areaServed. |
| **Service [slug]** | `FAQPage` | FAQs from `service.faq` in lib – matches visible accordion. ✓ |
| **Area [slug]** | `PaintingContractor` | Area-specific business snippet (areaServed = that town). |
| **Contact** | `WebPage` + `mainEntity` (LocalBusiness + ContactPoint) | Marks contact page; structured phone and opening hours for contact. |
| **Gallery** | `CollectionPage` | Signals a collection of project images; numberOfItems, isPartOf WebSite. |
| **Blog [slug]** | `BlogPosting` | headline, description, image, datePublished, author, publisher. |
| **PageHero** (when breadcrumbs exist) | `BreadcrumbList` | Breadcrumb trail for SERP breadcrumbs and structure. ✓ |

---

## Google’s requirements (quick reference)

### FAQPage

- **Structure:** `FAQPage` → `mainEntity[]` → each item is `Question` with `name` (question text) and `acceptedAnswer` → `Answer` with `text` (answer text).
- **Format:** JSON-LD preferred.
- **Content:** Question and answer text in schema **must match** the visible on-page content exactly.
- **Rich result note:** As of 2023, Google only shows FAQ **expandable rich results** in search for government and health sites. For other sites, FAQ schema is still valid and useful (Google still reads it; other engines and AI may use it). No need to remove it.

**Your status:** Homepage and each service page output FAQ schema that matches the visible FAQs. ✓

---

### LocalBusiness / PaintingContractor

- **Use:** Name, url, telephone, address and/or areaServed, openingHours (optional), priceRange (optional).
- **Reviews:** If you add `aggregateRating` and `review`, they must be **real** reviews (from customers). Don’t invent ratings or reviews.
- **Your status:** Layout has full LocalBusiness. Homepage has a second block with `aggregateRating` + `review[]` (testimonials). Keep ratingCount/reviewCount and review text accurate; when you get Google reviews, you can point aggregateRating to those instead if you prefer.

---

### BreadcrumbList

- **Structure:** `BreadcrumbList` → `itemListElement[]` → each `ListItem` with `position`, `name`, `item` (URL).
- **Content:** Must match the breadcrumb links shown on the page.
- **Your status:** PageHero outputs BreadcrumbList when `breadcrumbs` and `canonicalPath` are set. ✓

---

### BlogPosting

- **Recommended:** headline, image, datePublished, author, publisher (Organization with `name`, `url`, `logo`).
- **Optional:** dateModified.
- **Your status:** You have headline, description, image, datePublished, author and publisher (as PaintingContractor with logo). Valid. Optionally add `dateModified` if you ever update posts.

---

### Service

- **Use:** name, description, provider (Organization or Person), areaServed.
- **Your status:** Service index uses ItemList of Service; each service page has a Service block with provider and areaServed. ✓

---

## Optional schema Google supports (not yet on site)

| Type | Where it could go | Benefit |
|------|-------------------|---------|
| **HowTo** | Blog posts that are step-by-step guides (e.g. “How to prepare a room for painting”). | Can enable HowTo rich result (steps in search). |
| **SearchAction** (inside WebSite) | Layout | Only add if you have a working site search URL; can support sitelinks search box. |
| **aggregateRating** (from Google) | Layout or homepage | When you have Google reviews, keep in sync with real data. |
| **SpeakableSpecification** | Key paragraphs | Optional; helps voice assistants. |
| **ImageObject** (per image) | Gallery or blog | Optional; richer image search signals. |

---

## Checks to do periodically

1. **FAQ text** – If you change the FAQ component or any `service.faq` in lib, update the matching JSON-LD on that page so they stay identical.
2. **Review schema** – If you add or remove testimonials/reviews on the homepage, update `reviewJsonLd` (ratingCount, reviewCount, and the `review[]` array) in `app/page.tsx`.
3. **Rich Results Test** – Run key URLs (homepage, a service page, a blog post) in [Google Rich Results Test](https://search.google.com/test/rich-results) after big changes.
4. **Search Console** – Check the “Enhancements” / rich result reports for errors or warnings.

---

## Summary

- **FAQs:** Implemented correctly; schema matches visible content. Google won’t show FAQ expandables for this site (gov/health only), but the markup is still valid and useful.
- **LocalBusiness / PaintingContractor:** In place site-wide and per area; includes openingHoursSpecification; review/rating block on homepage must stay accurate.
- **Breadcrumbs, Service, BlogPosting:** All valid and aligned with Google’s expectations.
- **WebSite, ContactPage, CollectionPage (gallery):** Added. Optional next: HowTo on step-by-step posts; SearchAction only if you add site search; keep aggregateRating/review in sync.
