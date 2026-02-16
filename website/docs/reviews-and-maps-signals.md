# Telling Google We Use Reviews and Maps – What We Do & Why It Helps

Google doesn’t have a single “we use reviews and maps” setting. Instead, we use **structured data (schema)** and **links** so Google can understand and use your reviews and map. Here’s what’s in place and why it helps.

---

## What we already do (and what it does)

### 1. **Reviews – structured data (schema)**

- **Where:** Homepage JSON-LD (`reviewJsonLd` in `app/page.tsx`).
- **What:** We output a **LocalBusiness** block with the same `@id` as the main business, plus:
  - **aggregateRating** – 5 stars, 4 reviews (so Google can show star ratings in search).
  - **review** – The four review texts and authors (so Google knows we display reviews).
- **Why it helps:** Google can show **star ratings** in search results and in the Knowledge Panel, and it knows your site is about a business that has reviews. That can improve **click-through** and **trust**, and helps Google **match your site to your Google Business Profile (GBP)**.

We don’t say “these are Google reviews” in the schema (that’s not a standard field). We do say “this business has this rating and these reviews.” On the page we **visually** say “Google review” and link to Google, which is correct for attribution.

### 2. **Map – structured data and links**

- **sameAs** (in layout schema) includes your **Google Maps listing URL**. That tells Google: “this website and this Maps listing are the same business.”
- **hasMap** (in layout schema) is set to the same **Google Maps URL**. That explicitly tells Google: “this business has a map at this URL.”
- **On the page** we embed the Google Map and link “View on Google Maps” to that URL.

**Why it helps:** Google can **merge** your website entity with your GBP/Maps listing (same business, one profile). That supports **local pack** and **Maps** visibility and keeps NAP and location consistent.

### 3. **On-page attribution**

- Reviews section is labelled “Google reviews” and each review says “Google review” with a “See all reviews on Google” link.
- Map has a “View on Google Maps” link.

That keeps you within **Google’s attribution expectations** for using their content and makes it clear to users and to Google that reviews and map come from Google.

---

## Does this “tell Google” we use reviews and maps?

Yes, in the ways Google supports:

| Signal              | How we do it                          | What it tells Google                          |
|---------------------|----------------------------------------|-----------------------------------------------|
| We have reviews     | `aggregateRating` + `review` in schema | Business has a rating and reviews; can show stars. |
| We have a map       | `hasMap` + `sameAs` with Maps URL      | Business has a map; site = this Maps listing. |
| Reviews from Google | “Google review” text + link on page   | Attribution; we don’t claim reviews as our own. |

There is no separate “we use reviews and maps” setting to turn on. Using schema + sameAs + hasMap + clear on-page attribution is the right way to tell Google and to get the benefits (rich results, entity merge, local SEO).

---

## Summary

- **Reviews:** Schema with `aggregateRating` and `review` on the homepage + “Google review” and link on the page. Helps stars in search and entity matching.
- **Map:** `hasMap` and `sameAs` in layout schema pointing to your Google Maps URL + embed and “View on Google Maps” on the page. Helps Google tie your site to your GBP and map.

Keeping NAP and business details **consistent** on the site and on GBP will help Google use these signals for the **map pack** and **local search**.
