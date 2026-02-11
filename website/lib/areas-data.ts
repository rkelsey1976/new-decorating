/**
 * Area landing page data for local SEO.
 * Each page targets location-specific keywords like "painter decorator Bath".
 */

export interface AreaPage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  localInfo: string;
  services: string[];
  nearbyAreas: string[];
}

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "bath",
    name: "Bath",
    metaTitle: "Painter & Decorator in Bath | New Decorating",
    metaDescription:
      "Professional painter and decorator in Bath. Interior and exterior painting, wallpaper hanging, decorative finishes. 25+ years experience. Free quotes.",
    heroSubtitle:
      "Professional painting and decorating across Bath — from the city centre to surrounding suburbs and villages.",
    intro:
      "We're a Bath-based painting and decorating business with over 25 years of experience. Whether you live in the city centre, Bathwick, Larkhall, Widcombe, Combe Down, Odd Down or the surrounding villages, we're local and ready to help. From period townhouses and Georgian terraces to modern new builds, we understand the character of Bath homes and deliver quality finishes every time.",
    localInfo:
      "Bath is known for its stunning Georgian architecture, honey-coloured stone and heritage properties. Many homes in Bath require a decorator who understands older buildings — from sash windows and ornate cornices to lime plaster and period mouldings. We have extensive experience working on properties of all ages across the city.",
    services: [
      "Interior painting for houses, flats and apartments",
      "Exterior painting including Bath stone and render",
      "Wallpaper hanging and feature walls",
      "Sash window and woodwork painting",
      "Period property decoration",
      "Preparation and repair of older surfaces",
    ],
    nearbyAreas: ["Batheaston", "Bathford", "Combe Down", "Odd Down", "Larkhall", "Widcombe", "Weston", "Twerton"],
  },
  {
    slug: "keynsham",
    name: "Keynsham",
    metaTitle: "Painter & Decorator in Keynsham | New Decorating",
    metaDescription:
      "Professional painter and decorator in Keynsham. Interior and exterior painting, wallpaper, decorative finishes. 25+ years experience. Free quotes.",
    heroSubtitle:
      "Trusted painting and decorating services for homes across Keynsham and the surrounding area.",
    intro:
      "Keynsham sits between Bath and Bristol and has a great mix of older character homes and modern developments. We've been decorating properties across Keynsham for years and know the area well. Whether you need a full house repaint, a single room freshened up, or exterior work on your property, we deliver reliable, professional results at fair prices.",
    localInfo:
      "Keynsham has grown significantly in recent years with new housing developments alongside its established Victorian and inter-war homes. Whether your property is a period cottage on the High Street, a 1930s semi, or a brand new build on one of the newer estates, we tailor our approach to suit the property and your requirements.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and removal",
      "Decorative finishes and feature walls",
      "Full house and new build decoration",
      "Surface preparation and repair",
    ],
    nearbyAreas: ["Saltford", "Whitchurch", "Stockwood", "Queen Charlton", "Chewton Keynsham", "Bitton"],
  },
  {
    slug: "midsomer-norton",
    name: "Midsomer Norton",
    metaTitle: "Painter & Decorator in Midsomer Norton | New Decorating",
    metaDescription:
      "Professional painter and decorator in Midsomer Norton. Interior, exterior, wallpaper and decorative finishes. 25+ years experience. Free quotes.",
    heroSubtitle:
      "Local painting and decorating for homes in Midsomer Norton and the surrounding Somer Valley.",
    intro:
      "Midsomer Norton is at the heart of the Somer Valley, and we're proud to serve homeowners here and in the neighbouring villages. From stone-built cottages to family homes on the newer estates, we offer a full range of painting and decorating services. We're local, reliable and always happy to give a free, no-obligation quote.",
    localInfo:
      "The Somer Valley has a strong sense of community and a mix of stone-built properties, Victorian terraces and modern housing. Midsomer Norton's town centre has undergone regeneration in recent years, and many homeowners are investing in their properties. We're experienced in working with the local stone and older building materials found throughout the area.",
    services: [
      "Interior and exterior painting",
      "Stone cottage and period property decoration",
      "Wallpaper hanging and stripping",
      "Decorative and specialist finishes",
      "Full redecoration for move-in or sale",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Radstock", "Westfield", "Paulton", "Peasedown St John", "Chilcompton", "Stratton-on-the-Fosse"],
  },
  {
    slug: "radstock",
    name: "Radstock",
    metaTitle: "Painter & Decorator in Radstock | New Decorating",
    metaDescription:
      "Professional painter and decorator in Radstock. Interior, exterior, wallpaper and decorative finishes. 25+ years experience. Free quotes.",
    heroSubtitle:
      "Quality painting and decorating services for homes in Radstock and the Somer Valley.",
    intro:
      "Radstock is a friendly town in the Somer Valley with a great mix of character properties and family homes. We cover Radstock and the surrounding villages, offering everything from a single room refresh to a full house redecoration. We're known for being reliable, tidy and fair with our prices — and we always provide a free quote before starting any work.",
    localInfo:
      "Like neighbouring Midsomer Norton, Radstock has a mix of traditional stone-built homes, Victorian terraces and modern estates. The town is surrounded by beautiful countryside and many properties have unique character features that need a careful, experienced hand. We understand how to work with different surfaces and building styles to deliver a lasting finish.",
    services: [
      "Interior painting — single rooms to full houses",
      "Exterior painting and weather protection",
      "Wallpaper hanging, stripping and lining",
      "Decorative and feature wall finishes",
      "Landlord and rental property redecorations",
      "Preparation, filling and repair",
    ],
    nearbyAreas: ["Midsomer Norton", "Westfield", "Writhlington", "Kilmersdon", "Coleford", "Holcombe"],
  },
];

export function getAreaBySlug(slug: string): AreaPage | undefined {
  return AREA_PAGES.find((a) => a.slug === slug);
}

export function getAreaSlugs(): string[] {
  return AREA_PAGES.map((a) => a.slug);
}
