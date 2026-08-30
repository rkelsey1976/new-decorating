/**
 * Site-wide config for SEO and absolute URLs.
 */

export const SITE_URL = "https://new-decorating.co.uk";

/** Business name for titles and branding */
export const SITE_NAME = "New Decorating";

/** Default meta title: targets "painter & decorator in bath" + 25 years USP (~60 chars) */
export const DEFAULT_META_TITLE = `Painter & Decorator in Bath | 25+ Years Experience | ${SITE_NAME}`;

/**
 * Google Business Profile – link for customers to leave a review (from GBP "Share review form").
 */
export const GBP_REVIEW_URL = "https://share.google/fUJXUr6TOncvERdQA";

/**
 * Google Maps – your business listing (for "View on Maps" / "Find us on Google Maps" links).
 * Use the URL from your GBP when you Share → Copy link (same place ID: /g/11yzn6fvqr).
 */
export const GBP_MAPS_URL =
  "https://www.google.com/maps/place/New+Decorating+-+Professional+Painting+and+Decorating+Services/@51.4146199,-2.6501251,11z/data=!4m10!1m2!2m1!1snew+decorating+bath!3m6!1s0x8dcb0406d73cfc5f:0xebb26563bf6fb81b!8m2!3d51.3759541!4d-2.3987877!15sChNuZXcgZGVjb3JhdGluZyBiYXRoWhUiE25ldyBkZWNvcmF0aW5nIGJhdGiSAQdwYWludGVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0S2VVeFZjM2RsUmxJeVYycGtiRnBGTVZKaFJtTjRWVk13TW1Nell4QULgAQD6AQQILxA6!16s%2Fg%2F11yzn6fvqr?entry=ttu";

/**
 * Google Maps embed – iframe src for embedding your place on the homepage.
 * To update: Google Maps → your place → Share → Embed a map → copy the iframe src.
 */
/** Zoom 4 = wide view */
export const GBP_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19898.763234!2d-2.3987877!3d51.3759541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f4.1!3m3!1m2!1s0x8dcb0406d73cfc5f%3A0xebb26563bf6fb81b!2sNew%20Decorating!5e0!3m2!1sen!2suk";

/** Display review count and rating for trust bar / hero (keep in sync with reviewJsonLd on homepage) */
export const GOOGLE_REVIEW_COUNT = 14;
export const GOOGLE_RATING = 5;
