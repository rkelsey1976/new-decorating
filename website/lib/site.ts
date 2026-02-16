/**
 * Site-wide config for SEO and absolute URLs.
 */

export const SITE_URL = "https://new-decorating.co.uk";

/** Business name for titles and branding */
export const SITE_NAME = "New Decorating";

/** Default meta title: ~65 chars to avoid truncation in search results */
export const DEFAULT_META_TITLE = `Painter & Decorator Bath | Interior & Exterior Painting | ${SITE_NAME}`;

/**
 * Google Business Profile – link for customers to leave a review (from GBP "Share review form").
 */
export const GBP_REVIEW_URL = "https://share.google/fUJXUr6TOncvERdQA";

/**
 * Google Maps – your business listing (for "View on Maps" / "Find us on Google Maps" links).
 */
export const GBP_MAPS_URL =
  "https://www.google.com/maps/place/New+Decorating/@51.3240529,-2.0967608,9z/data=!4m8!3m7!1s0x8dcb0406d73cfc5f:0xebb26563bf6fb81b!8m2!3d51.3240529!4d-2.0967608!9m1!1b1!16s%2Fg%2F11yzn6fvqr?hl=en&entry=ttu";

/**
 * Google Maps embed – iframe src for embedding your place on the homepage.
 * To update: Google Maps → your place → Share → Embed a map → copy the iframe src.
 */
/** Zoom 4 = wide view */
export const GBP_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19898.763234!2d-2.3987877!3d51.3759541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f4.1!3m3!1m2!1s0x8dcb0406d73cfc5f%3A0xebb26563bf6fb81b!2sNew%20Decorating!5e0!3m2!1sen!2suk";
