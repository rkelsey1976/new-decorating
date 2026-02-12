# Google Business Profile – Review link

The site has a **“Leave a review”** link in the footer. The URL is set in **`website/lib/site.ts`** as `GBP_REVIEW_URL`.

**Important:** The numeric **Store ID** / Location ID (e.g. 07088259107804097575) does **not** work in the review URL. Google’s “Write a review” link uses a **Place ID** (e.g. `ChIJ...`). You must use the link from your GBP dashboard or a Place ID tool.

---

## Get your working review link

### Option 1 – From Google Business Profile (recommended)

1. Sign in to [Google Business Profile](https://business.google.com).
2. Go to **Home** → **Get more reviews** (or **Share review form**).
3. Copy the full link Google shows you.
4. In **`website/lib/site.ts`**, set:
   ```ts
   export const GBP_REVIEW_URL = "PASTE_THE_FULL_LINK_HERE";
   ```
   (Replace the current value, including any `SITE_URL` fallback.)

### Option 2 – Find your Place ID and build the URL

1. Open [Google Maps](https://maps.google.com) and search for your business (“New Decorating Bath”).
2. Open your listing, then right‑click **“Write a review”** → **Inspect** (Chrome) or **Inspect Element** (Firefox).
3. In the code, search for `data-pid="..."` and copy the value inside the quotes (the Place ID, e.g. `ChIJ...`).
4. Your review URL is:  
   `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`
5. In **`website/lib/site.ts`**, set `GBP_REVIEW_URL` to that full URL.

### Option 3 – Use a generator

Use a tool like [BrightLocal’s Google ID and Review Link Generator](https://www.brightlocal.com/free-local-seo-tools/google-id-and-review-link-generator/) (search for your business, then copy the “Write a review” link).

---

## Current behaviour

- Until you set `GBP_REVIEW_URL` to the real review link, the footer **“Leave a review”** button goes to your **Contact** page so the link never 404s.
- After you paste the full review URL from Google (or the Place ID URL) into `lib/site.ts` and redeploy, the button will go straight to Google’s review form.

---

## Where the link appears

- **Footer** – “Leave a review” with a Google-style icon (next to Facebook), opens in a new tab.
