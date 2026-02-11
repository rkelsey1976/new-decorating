/**
 * SEO keywords for a decorating company in Bath & BANES.
 * Use these in meta, headings, and content naturally — avoid stuffing.
 *
 * Strategy:
 * - Primary: location + "painter" / "decorator" (high intent)
 * - Secondary: service + location (interior, exterior, wallpaper)
 * - Long-tail: "free quote", "local", "professional" + area
 */

/** Primary: location + role (highest intent) */
export const PRIMARY_KEYWORDS = [
  "painter Bath",
  "decorator Bath",
  "painting and decorating Bath",
  "house painter Bath",
  "decorator BANES",
  "painter Keynsham",
  "painter Midsomer Norton",
  "decorator Radstock",
  "Bath and North East Somerset painter",
] as const;

/** Secondary: service + location */
export const SECONDARY_KEYWORDS = [
  "interior painter Bath",
  "exterior painting BANES",
  "wallpaper Bath",
  "wallpapering Keynsham",
  "interior decorating Bath",
  "exterior painter BANES",
  "feature wall Bath",
  "decorative painting Bath",
] as const;

/** Long-tail: lower volume, high intent */
export const LONG_TAIL_KEYWORDS = [
  "free quote painting Bath",
  "local painter Bath",
  "professional decorator Bath",
  "painting and decorating quote BANES",
  "house painting Bath",
  "room painter Bath",
  "painter near me Bath",
] as const;

/** Flat list for meta keywords (search engines may use for context) */
export const META_KEYWORDS = [
  "painter Bath",
  "decorator Bath",
  "painting and decorating Bath",
  "BANES painter",
  "painter Keynsham",
  "painter Midsomer Norton",
  "decorator Radstock",
  "Bath and North East Somerset",
  "interior painting Bath",
  "exterior painting BANES",
  "wallpaper Bath",
  "house painter Bath",
  "free quote painting",
  "local decorator Bath",
] as const;
