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
      "Painter & decorator in Bath. Interior, exterior, wallpaper, decorative finishes. 25+ years, free quotes. Bath and BANES.",
    heroSubtitle:
      "Professional painting and decorating across Bath — from the city centre to surrounding suburbs and villages.",
    intro:
      "I'm a Bath-based painting and decorating business with over 25 years of experience. Whether you live in the city centre, Bathwick, Larkhall, Widcombe, Combe Down, Odd Down or the surrounding villages, I'm local and ready to help. From period townhouses and Georgian terraces to modern new builds, I understand the character of Bath homes and deliver quality finishes every time.",
    localInfo:
      "Bath is known for its stunning Georgian architecture, honey-coloured stone and heritage properties. Many homes in Bath require a decorator who understands older buildings — from sash windows and ornate cornices to lime plaster and period mouldings. I have extensive experience working on properties of all ages across the city.",
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
      "Painter & decorator in Keynsham (BS31). Interior, exterior, wallpaper, decorative finishes. 25+ years, free quotes. Keynsham, Saltford, Bitton and BANES.",
    heroSubtitle:
      "Trusted painter and decorator for homes across Keynsham, Saltford and the surrounding area.",
    intro:
      "I'm a painter and decorator covering Keynsham (BS31) and the surrounding area between Bath and Bristol. I've been decorating properties in Keynsham for years and know the mix of older character homes and newer developments well. Whether you need a full house repaint, a single room freshened up, or exterior work on your property, I deliver reliable, professional results at fair prices.",
    localInfo:
      "Keynsham has grown significantly in recent years with new housing alongside its established Victorian and inter-war homes. As a local painter and decorator I work on period cottages on the High Street, 1930s semis, and new builds on the newer estates — and in Saltford, Whitchurch, Bitton and nearby. I tailor my approach to suit the property and your requirements.",
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
      "Painter & decorator in Midsomer Norton. Interior, exterior, wallpaper, decorative finishes. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Local painting and decorating for homes in Midsomer Norton and the surrounding Somer Valley.",
    intro:
      "Midsomer Norton is at the heart of the Somer Valley, and I'm proud to serve homeowners here and in the neighbouring villages. From stone-built cottages to family homes on the newer estates, I offer a full range of painting and decorating services. I'm local, reliable and always happy to give a free, no-obligation quote.",
    localInfo:
      "The Somer Valley has a strong sense of community and a mix of stone-built properties, Victorian terraces and modern housing. Midsomer Norton's town centre has undergone regeneration in recent years, and many homeowners are investing in their properties. I'm experienced in working with the local stone and older building materials found throughout the area.",
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
      "Painter & decorator in Radstock. Interior, exterior, wallpaper, decorative finishes. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Quality painting and decorating services for homes in Radstock and the Somer Valley.",
    intro:
      "Radstock is a friendly town in the Somer Valley with a great mix of character properties and family homes. I cover Radstock and the surrounding villages, offering everything from a single room refresh to a full house redecoration. I'm known for being reliable, tidy and fair with my prices — and I always provide a free quote before starting any work.",
    localInfo:
      "Like neighbouring Midsomer Norton, Radstock has a mix of traditional stone-built homes, Victorian terraces and modern estates. The town is surrounded by beautiful countryside and many properties have unique character features that need a careful, experienced hand. I understand how to work with different surfaces and building styles to deliver a lasting finish.",
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
  {
    slug: "trowbridge",
    name: "Trowbridge",
    metaTitle: "Painter & Decorator in Trowbridge | New Decorating",
    metaDescription:
      "Painter & decorator in Trowbridge. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Wiltshire.",
    heroSubtitle:
      "Professional painting and decorating for homes in Trowbridge and the surrounding Wiltshire area.",
    intro:
      "Trowbridge is the county town of Wiltshire and has a mix of period properties, Victorian terraces and modern homes. I cover Trowbridge and the surrounding villages, from a single room refresh to full house redecoration. I'm based in Bath and regularly work across the border into Wiltshire — reliable, tidy and always happy to give a free, no-obligation quote.",
    localInfo:
      "Trowbridge has grown from its historic cloth-making roots into a busy market town with a diverse housing stock. Many homes have character features that benefit from an experienced decorator — from older cottages to newer estates. I understand the different surfaces and building styles you'll find across the area and deliver a lasting finish.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Preparation, filling and repair",
      "Period and character property decoration",
      "Full house redecoration",
    ],
    nearbyAreas: ["Bradford on Avon", "Melksham", "Westbury", "Warminster", "Hilperton", "Staverton"],
  },
  {
    slug: "chippenham",
    name: "Chippenham",
    metaTitle: "Painter & Decorator in Chippenham | New Decorating",
    metaDescription:
      "Painter & decorator in Chippenham. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Wiltshire.",
    heroSubtitle:
      "Quality painting and decorating services for homes in Chippenham and north Wiltshire.",
    intro:
      "Chippenham sits on the edge of the Cotswolds and has a great mix of Georgian and Victorian homes alongside modern developments. I cover Chippenham and the surrounding area, offering everything from interior refreshes to full exterior work. I'm based in Bath and work across into Wiltshire — 25+ years of experience, free quotes and a focus on quality finishes.",
    localInfo:
      "Chippenham's position between Bath and Swindon means many homeowners look for a decorator who can deliver a high standard. The town has plenty of period features — sash windows, cornices, period mouldings — and I'm experienced in working with older properties as well as new builds.",
    services: [
      "Interior and exterior painting",
      "Wallpaper hanging and feature walls",
      "Period property and character home decoration",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Corsham", "Melksham", "Calne", "Malmesbury", "Box", "Lacock"],
  },
  {
    slug: "rode",
    name: "Rode",
    metaTitle: "Painter & Decorator in Rode | New Decorating",
    metaDescription:
      "Painter & decorator in Rode. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somerset.",
    heroSubtitle:
      "Local painting and decorating for Rode, Frome and the surrounding Somerset villages.",
    intro:
      "Rode is a village in Somerset, close to Frome and within easy reach of Bath. I cover Rode and the surrounding villages — Norton St Philip, Beckington, Woolverton and beyond. Whether you have a period cottage, a family home or a modern property, I offer a full range of painting and decorating with a free, no-obligation quote.",
    localInfo:
      "The villages around Rode and Frome have a strong character — stone-built cottages, thatched properties and period homes are common. I'm used to working with older building materials and the kind of surfaces you find in this part of Somerset, and I deliver careful preparation and a quality finish every time.",
    services: [
      "Interior painting for houses and cottages",
      "Exterior painting and stonework",
      "Wallpaper hanging and stripping",
      "Period and character property decoration",
      "Preparation and repair of older surfaces",
      "Full redecoration and single room projects",
    ],
    nearbyAreas: ["Frome", "Norton St Philip", "Beckington", "Woolverton", "Tellisford", "Farleigh Hungerford"],
  },
  {
    slug: "melksham",
    name: "Melksham",
    metaTitle: "Painter & Decorator in Melksham | New Decorating",
    metaDescription:
      "Painter & decorator in Melksham. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Wiltshire.",
    heroSubtitle:
      "Painting and decorating for homes in Melksham and the surrounding area — between Bath and Trowbridge.",
    intro:
      "Melksham sits between Bath and Trowbridge with easy access to Chippenham and the M4. I cover Melksham and the surrounding villages, from a single room to a full house redecoration. I'm based in Bath and work across into Wiltshire — 25+ years of experience, free quotes and a reliable, tidy service.",
    localInfo:
      "Melksham has a mix of older terraces, period homes and modern estates. Many properties benefit from an experienced decorator who can handle both character features and newer builds. I'm used to working with the range of surfaces and building styles you find in this part of Wiltshire.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Preparation, filling and repair",
      "Period and modern property decoration",
      "Full house and single room projects",
    ],
    nearbyAreas: ["Trowbridge", "Bradford on Avon", "Chippenham", "Broughton Gifford", "Lacock", "Shaw"],
  },
  {
    slug: "bradford-on-avon",
    name: "Bradford on Avon",
    metaTitle: "Painter & Decorator in Bradford on Avon | New Decorating",
    metaDescription:
      "Painter & decorator in Bradford on Avon. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Wiltshire.",
    heroSubtitle:
      "Professional painting and decorating for homes in Bradford on Avon and the surrounding Wiltshire villages.",
    intro:
      "Bradford on Avon is a historic Wiltshire town with a wealth of period properties — from medieval weavers' cottages to Georgian townhouses. I cover Bradford on Avon and the surrounding area, offering a full range of painting and decorating. I'm based in Bath and regularly work in Wiltshire — experienced with older buildings and always happy to give a free, no-obligation quote.",
    localInfo:
      "The town's character homes often need a decorator who understands lime plaster, stone and period features. I have extensive experience working on properties of all ages and deliver careful preparation and quality finishes that suit both traditional and modern interiors.",
    services: [
      "Interior painting for period and character homes",
      "Exterior painting including stone and render",
      "Wallpaper hanging and feature walls",
      "Sash window and woodwork painting",
      "Preparation and repair of older surfaces",
      "Full redecoration and single room projects",
    ],
    nearbyAreas: ["Bath", "Melksham", "Trowbridge", "Limpley Stoke", "Winsley", "Westwood"],
  },
  {
    slug: "frome",
    name: "Frome",
    metaTitle: "Painter & Decorator in Frome | New Decorating",
    metaDescription:
      "Painter & decorator in Frome. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somerset.",
    heroSubtitle:
      "Quality painting and decorating for homes in Frome and the surrounding Somerset villages.",
    intro:
      "Frome is a Somerset market town with a strong character — independent shops, period buildings and a mix of cottages and family homes. I cover Frome and the surrounding villages including Rode, Mells, Nunney and Beckington. I'm based in Bath and work across into Somerset — 25+ years of experience, free quotes and a focus on quality finishes.",
    localInfo:
      "Frome has plenty of older properties that benefit from careful preparation and an experienced hand. Stone-built cottages, Victorian terraces and period features are common. I'm used to working with the surfaces and building styles you find in this part of Somerset and deliver a lasting finish every time.",
    services: [
      "Interior and exterior painting",
      "Wallpaper hanging and stripping",
      "Period and character property decoration",
      "Stone and older surface preparation",
      "Full house redecoration",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Rode", "Mells", "Nunney", "Beckington", "Norton St Philip", "Woolverton"],
  },
];

export function getAreaBySlug(slug: string): AreaPage | undefined {
  return AREA_PAGES.find((a) => a.slug === slug);
}

export function getAreaSlugs(): string[] {
  return AREA_PAGES.map((a) => a.slug);
}
