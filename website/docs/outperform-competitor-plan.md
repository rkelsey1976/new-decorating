# Plan to Outperform a Competitor (Google / Local Search)

Use this plan to strengthen New Decorating’s visibility so you can outperform a competitor (e.g. one whose Google presence you’re tracking, such as via a [share link](https://share.google/Y1DCHfZI80SnAicQ6)).

Local visibility is driven by **Google Business Profile (GBP)**, **reviews**, **website relevance**, and **citations**. Focus on these in order.

---

## 1. Google Business Profile (GBP) – highest impact

| Action | Why it helps |
|--------|----------------|
| **Claim/verify your GBP** | If not already done, claim your profile so you appear in Maps and local pack. |
| **Complete every section** | Business name, category (e.g. “Painter”, “Painting contractor”), address/service area, phone, website, hours, description. The more complete, the better. |
| **Service area** | Add Bath, Keynsham, Midsomer Norton, Radstock, BANES (and specific towns). Use “Service area” if you don’t show an address. |
| **Description** | Use “painter and decorator”, “Bath”, “Keynsham”, “BANES”, “25+ years”, “free quotes”, “interior and exterior”. Keep it natural, 750 chars max. |
| **NAP consistency** | Name, address (or area), phone and website must match your website and other listings exactly. |
| **Photos** | Add 10+ photos: jobs (interior/exterior), before/after if you have them, team/van, logo. Update regularly. |
| **Posts** | Post at least every 1–2 weeks (e.g. from `google-business-posts.md`): free quote, Widcombe, exterior painting, areas you cover, etc. Use a clear image and a “Get quote” or “Visit site” button. |
| **Q&A** | Add your own Q&As (e.g. “Do you do exterior painting?”, “What areas do you cover?”, “Do you provide free quotes?”) with clear answers. |
| **Products/Services** | Add services (Interior painting, Exterior painting, Wallpaper, etc.) with short descriptions and optional links to your service pages. |

**Your review link (so customers can leave reviews):** Use your GBP “Share review form” link everywhere you can — contact page, footer, after jobs, in emails. Your current link is in `lib/site.ts` as `GBP_REVIEW_URL`. If your GBP gives you a new “Share review form” URL, update that constant.

---

## 2. Reviews – second biggest lever

| Action | Why it helps |
|--------|----------------|
| **Ask every happy customer** | After a job, send a short message or card with your Google review link. One sentence: “If you’re happy with the work, a quick review on Google really helps.” |
| **Make the link easy** | Put the review link on your contact page (you do), in the footer (you do), and in a follow-up message or email after completion. |
| **Don’t incentivise** | Don’t offer money or discounts for reviews; Google can penalise that. Just ask. |
| **Respond to reviews** | Reply to every Google review (thank them, or respond professionally to any concern). Shows you’re active and care. |
| **Collect consistently** | Aim for a steady trickle of new reviews (e.g. 1–2 a month) rather than bursts. |

More (and recent) 5‑star reviews + responses help you outrank competitors who have fewer or older reviews.

---

## 3. Website – you’re already strong; keep improving

| Action | Why it helps |
|--------|----------------|
| **Keep area pages** | You have Bath, Keynsham, Midsomer Norton, Radstock, etc. Keep them and add local keywords naturally (you’ve done Keynsham, Widcombe & Twerton blog). |
| **Blog** | Keep adding short, useful posts (e.g. one more area or topic every few months). Use “painter Bath”, “decorator Keynsham”, etc. where it fits. |
| **Gallery** | Add new project photos when you can; use descriptive file names and alt text (e.g. “Interior painting Bath living room”). |
| **Speed & mobile** | Your site is fast and responsive; keep it that way. |
| **Schema** | You have LocalBusiness, reviews, areaServed. Keep it in place and update review count in schema when you get new Google reviews. |

Your site already compares well (see `competitor-comparison-bath.md`). The main gap vs competitors is usually **GBP + reviews**, not the website itself.

---

## 4. Citations and directories

| Action | Why it helps |
|--------|----------------|
| **Same NAP everywhere** | Use the same business name, phone, website and service areas on your site, GBP, and every directory. |
| **Free directories first** | Add your business to the free options in `business-directories-checklist.md` (FreeIndex, Yell, Thomson Local, Find Your Local, 2day Keynsham, Hi Keynsham, etc.). Use “Bath”, “Keynsham”, “BANES” in descriptions. |
| **Bath / Keynsham / Saltford** | Use the local directories listed in `seo-keynsham.md` (Keynsham, Saltford, Bath) so you show up for “painter Keynsham”, “painter Bath”, etc. |
| **One paid trades site (optional)** | If you want more leads, consider one of Checkatrade or TrustATrader; they can also send trust signals. |

Consistent citations reinforce to Google that you’re a real, local business and can help you outperform competitors with thinner or inconsistent listings.

---

## 5. Simple tracking (no extra cost)

| What to check | How |
|---------------|-----|
| **Local pack** | Search “painter decorator Bath”, “painter Keynsham” etc. in an incognito window and see who appears in the top 3 (map pack). Note yourself vs the competitor. |
| **Competitor’s GBP** | Open their profile (e.g. via their share link). Note: number of reviews, rating, how often they post, how complete their profile is, how many photos. |
| **Your GBP** | Compare: are you posting more often? Do you have more (and more recent) photos? Is your description and service area complete? |

Re-check every few weeks. Improvements in GBP completeness, posts, photos and reviews often show up in local rankings over 4–12 weeks.

---

## Priority order (what to do first)

1. **GBP** – Claim it, complete every section, add service areas and description, add 10+ photos, set up Products/Services and a few Q&As.  
2. **Reviews** – Start asking every satisfied customer for a Google review using your review link; respond to all reviews.  
3. **Posts** – Post at least every 2 weeks using drafts from `google-business-posts.md` (e.g. free quote, Widcombe, exterior, areas).  
4. **NAP + directories** – Ensure NAP is consistent on site and GBP; then add to free local directories (Keynsham, Saltford, Bath) from `seo-keynsham.md` and `business-directories-checklist.md`.  
5. **Website** – Keep adding a blog post or gallery photos when you can; update schema review count when you get new Google reviews.

---

## Summary

To outperform a competitor whose Google presence you’re tracking (e.g. [this share link](https://share.google/Y1DCHfZI80SnAicQ6)):

- **Most impact:** Optimise your **Google Business Profile** (complete profile, photos, posts, Q&A, services) and get more **Google reviews** (ask every happy customer, use your review link, respond to all).  
- **Supporting:** Keep your **website** strong (area pages, blog, gallery, schema) and build **consistent citations** (same NAP, free local directories).  
- **Track:** Periodically check the local pack and your profile vs theirs; adjust by posting more, adding photos, and asking for reviews.

If the link you’re tracking is **your** new GBP review link, update `website/lib/site.ts` → `GBP_REVIEW_URL` to that new URL so your site points customers to the right place to leave a review.
