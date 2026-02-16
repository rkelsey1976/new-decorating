# Help Google Index Your Map Pack – Checklist

Things that help Google show **New Decorating** in the local map pack (the 3-pack with map) for searches like “painter decorator Bath”, “decorator Keynsham”, etc.

---

## On the website (done or in place)

| What | Status |
|------|--------|
| **LocalBusiness schema** (layout) | ✅ PaintingContractor + address, phone, geo, opening hours |
| **areaServed** in schema | ✅ Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, Chippenham, Melksham, Bradford on Avon, Frome, BANES, Wiltshire, Somerset |
| **sameAs** includes Google Maps | ✅ Link to your GBP listing so Google can match site ↔ Maps |
| **NAP** (name, phone, address) | ✅ Same everywhere on site |
| **Location pages** | ✅ Area pages for Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, etc. |
| **Service pages** | ✅ Interior, exterior, wallpaper, preparation & repair |
| **Sitemap** | ✅ `/sitemap.xml` with all area and service pages |
| **robots.txt** | ✅ Allows crawlers; GPTBot / OAI-SearchBot allowed |
| **Reviews on homepage** | ✅ Google reviews section with link to GBP |

---

## On Google (your actions)

### 1. Google Business Profile (GBP)

- **Claimed & verified** – You must be verified to appear in the map pack.
- **Primary category** – “Painter” or “Painting contractor”.
- **Description** – Use “painter and decorator”, “Bath”, “Keynsham”, “BANES”, “25+ years”, “free quotes”, “interior and exterior”, “wallpaper”, “preparation and repair” (natural, no stuffing).
- **Service areas** – Add every town you cover (Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, Chippenham, Rode, Melksham, Bradford on Avon, Frome, BANES).
- **Services** – Add: Interior painting, Exterior painting, Wallpaper hanging, Preparation & repair (short descriptions; link to your service pages if possible).
- **Hours** – Mon–Fri 7:30–16:30 (match your site).
- **Photos** – 10+ to start; add new ones regularly (jobs, before/after, van, logo).
- **Posts** – At least every 1–2 weeks (offers, areas, tips); use drafts from `google-business-posts.md`.
- **Q&A** – Add your own Q&As (“Do you do exterior painting?”, “What areas do you cover?”, “Free quotes?”) so you control the message.
- **NAP** – Business name, phone, and website must **exactly match** your website and directories.

### 2. Reviews

- **Ask every happy customer** – “If you’re happy with the work, a quick review on Google really helps” + your review link (`GBP_REVIEW_URL` in `lib/site.ts`).
- **Review link** – On contact page, footer, and in follow-up messages.
- **Reply to every review** – Thank reviewers; reply professionally to any concern.
- **Steady flow** – Aim for 1–2 new Google reviews a month.
- **No incentives** – Don’t offer money or discounts for reviews.

### 3. Citations & NAP

- **Same NAP everywhere** – “New Decorating”, 07717 772881, new-decorating.co.uk on your site, GBP, and every directory.
- **Directories** – Add/update listings (see `business-directories-checklist.md`): FreeIndex, Yell, Thomson Local, Find Your Local, 2day Keynsham, Hi Keynsham, Somerset Live, etc. Use “Bath”, “Keynsham”, “BANES” in descriptions.
- **Bing Places & Apple Maps** – Claim and keep NAP consistent.

### 4. Service area / boundary

- In GBP, set your **service area** (towns/postcodes) so the map pack reflects where you actually work.
- If you hide your address, make sure service areas are complete so Google knows which searches to show you for.

---

## Why this helps the map pack

- **Schema + sameAs** – Helps Google match your website to your GBP listing and understand your service area.
- **Complete GBP** – Completeness, categories, services, and photos all feed into local ranking.
- **Reviews** – Count, rating, and recency are strong map-pack signals.
- **NAP consistency** – Same name, phone, address/area everywhere builds trust and helps Google merge citations.
- **Local content** – Area and service pages reinforce relevance for “painter decorator [town]” searches.

For a full plan to outrank competitors in Bath, see **`outrank-bath-painters-maps.md`**.
