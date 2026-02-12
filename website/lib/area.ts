/**
 * Service area for SEO and customer-facing copy.
 * I work across Bath and North East Somerset (BANES).
 */

export const SERVICE_AREA_NAME = "Bath and North East Somerset";
export const SERVICE_AREA_SHORT = "BANES";

/** Main towns/areas I cover for display and JSON-LD */
export const AREAS_COVERED = [
  "Bath",
  "Keynsham",
  "Midsomer Norton",
  "Radstock",
  "Trowbridge",
  "Chippenham",
  "Rode",
  "Melksham",
  "Bradford on Avon",
  "Frome",
  "and surrounding villages",
] as const;

/** Full area description for meta and copy */
export const AREA_DESCRIPTION =
  "Bath, Keynsham, Midsomer Norton, Radstock, Trowbridge, Chippenham, Rode, Melksham, Bradford on Avon, Frome and across BANES, Wiltshire and Somerset";

/** Map: Bath city centre (for marker). BANES bbox approx: W,S,E,N */
export const MAP_CENTER = { lat: 51.3811, lng: -2.359 }; // Bath
export const MAP_BBOX = "-2.55,51.25,-2.25,51.45"; // BANES area for embed
