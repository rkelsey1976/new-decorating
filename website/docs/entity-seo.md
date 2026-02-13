# Entity SEO – How we improve entity reference for search

Entity SEO means helping Google (and other engines) recognise **New Decorating** as one clear, consistent entity – so they can show the right info, merge signals, and sometimes show Knowledge Panels or richer results.

---

## What we’ve done on-site (entity reference)

### 1. One canonical entity ID (`@id`)

- **ID used:** `https://new-decorating.co.uk#organization`
- **Where:** The main LocalBusiness (PaintingContractor) in `app/layout.tsx` has `"@id": ORGANIZATION_ID`. The homepage review block and contact page also use this same `@id` (or reference it).
- **Why:** When every schema block that describes your business uses the same `@id`, Google can merge them into a single entity instead of treating them as different businesses.

### 2. Linking schema so it’s one entity

- **Layout:** WebSite schema’s `publisher` is set to `{ "@id": ORGANIZATION_ID }` so the site is clearly published by the same entity as the LocalBusiness.
- **Homepage:** The block with `aggregateRating` and `review[]` uses the same `@id`, so ratings and reviews are attached to that same entity.
- **Contact page:** `mainEntity` references the organization by `@id` and adds contact/opening-hours details, again reinforcing one entity.

### 3. Consistent name and NAP

- **Name:** “New Decorating” is used the same way in titles, schema, and copy across the site.
- **NAP:** Phone (07717 772881), website (new-decorating.co.uk), and service areas are consistent in schema and on the site. Use the **exact same** NAP on GBP and every directory (see below).

### 4. sameAs (official profiles)

- **Layout LocalBusiness** has `sameAs: ["https://www.facebook.com/profile.php?id=61571675780751"]`.
- **Improvement:** Add any other **official** profiles (e.g. Instagram, LinkedIn, Checkatrade) to `sameAs` in `app/layout.tsx` so Google can link those to the same entity. Only add URLs you own/control.

---

## What to do off-site (stronger entity reference)

| Action | Why it helps entity SEO |
|--------|--------------------------|
| **Same NAP everywhere** | Same business name, phone, website (and address if shown) on your site, GBP, and every directory. Reduces conflicting signals so Google is confident it’s one entity. |
| **Google Business Profile** | Once claimed and verified, GBP is a primary entity signal for local. Keep name, category, and NAP identical to the site. |
| **Quality citations** | Listings on trusted directories (see `business-directories-checklist.md`) with consistent NAP give more “this business exists and is the same everywhere” signals. |
| **Backlinks with anchor text** | Links to your site using “New Decorating” or “painter decorator Bath” (natural, not stuffed) reinforce what your entity is and what it does. |
| **No duplicate or conflicting names** | Avoid listing as “New Decorating Bath” in one place and “New Decorating” in another; pick one and stick to it. |

---

## Optional: more sameAs

If you add official profiles, add them to the layout schema:

**In `app/layout.tsx`**, in `localBusinessJsonLd`, update `sameAs`:

```ts
sameAs: [
  "https://www.facebook.com/profile.php?id=61571675780751",
  // "https://www.instagram.com/newdecoratingbath",  // if you create one
  // "https://www.checkatrade.com/...",              // if you join and have a profile URL
],
```

Only include real, official profile URLs. This helps Google tie those profiles to the same entity.

---

## Checklist (entity reference)

- [x] One canonical `@id` for the business in schema (`#organization`).
- [x] Layout LocalBusiness and homepage review block use the same `@id`.
- [x] WebSite `publisher` references that `@id`.
- [x] Contact page `mainEntity` references the same entity.
- [x] Consistent name “New Decorating” and NAP on the site.
- [ ] Same NAP on GBP and all directories (when you add them).
- [ ] Add any extra official profiles to `sameAs` when you have them.

---

## Summary

**Entity reference** is improved by: (1) one stable `@id` and all schema pointing to it, (2) consistent name and NAP on-site and off, and (3) `sameAs` for official profiles. We’ve done (1) and the on-site part of (2); keep (2) consistent off-site and add (3) as you get more profiles.
