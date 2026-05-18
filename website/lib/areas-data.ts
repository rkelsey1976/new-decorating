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
  /** Short trust line shown in hero (e.g. "25+ years experience. Fully insured. Free quote.") */
  trustLine?: string;
  /** Bullets for "Why choose" section (area-specific) */
  whyChoose?: string[];
  /** FAQ for snippet/rich results; each answer 40–80 words */
  faqs?: { question: string; answer: string }[];
  /** Custom anchor text for service page links (slug -> anchor). Omit to use service title. */
  serviceAnchors?: Record<string, string>;
  /** Optional images shown beside the intro/why-choose block (e.g. 1–2 project photos). */
  introImages?: { src: string; alt: string }[];
  /** Optional postcodes for this area (e.g. ['BA1', 'BA2'] for Bath) — used in LocalBusiness areaServed. */
  postcodes?: string[];
  /** Region/county for address and schema (e.g. "Bath and North East Somerset", "Wiltshire"). Defaults to BANES. */
  region?: string;
  /** Optional sameAs URL(s) for the area Place in schema (e.g. Wikipedia). */
  sameAs?: string | string[];
  /** Optional local landmarks (e.g. "the Royal Crescent", "Keynsham High Street") — used in content for local relevance. */
  landmarks?: string[];
}

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "bath",
    name: "Bath",
    metaTitle: "Painter & Decorator in Bath | Period Homes & Exteriors | New Decorating",
    metaDescription:
      "Professional painter & decorator in Bath. Interior, exterior, period properties. 25+ years experience, free quote. Call 07717 772881 or get a quote.",
    heroSubtitle:
      "Need a painter and decorator in Bath? I offer professional painting and decorating across Bath — from the city centre to Combe Down, Larkhall, Widcombe and the surrounding villages. 25+ years experience. Free quotes.",
    intro:
      "I'm a Bath-based painter and decorator with over 25 years of experience. Whether you live in the city centre, Bathwick, Larkhall, Widcombe, Combe Down, Odd Down, Bear Flat, Oldfield Park, Southdown, Whiteway, St Saviour's, Walcot, Bathampton or the surrounding villages, I'm local and ready to help. From period townhouses and Georgian terraces to modern new builds, I understand the character of Bath homes and deliver quality finishes every time.",
    localInfo:
      "Bath is known for its stunning Georgian architecture, honey-coloured stone and heritage properties. Many homes in Bath require a decorator who understands older buildings — from sash windows and ornate cornices to lime plaster and period mouldings. I have extensive experience working on properties of all ages across the city. Combe Down and Bathwick have many period and stone properties; I'm used to working with lime and traditional finishes.",
    services: [
      "Interior painting for houses, flats and apartments",
      "Exterior painting including Bath stone and render",
      "Wallpaper hanging and feature walls",
      "Sash window and woodwork painting",
      "Period property decoration",
      "Preparation and repair of older surfaces",
    ],
    nearbyAreas: ["Batheaston", "Bathford", "Combe Down", "Odd Down", "Larkhall", "Widcombe", "Weston", "Twerton"],
    trustLine: "25+ years experience. Fully insured. Free, no-obligation quote.",
    whyChoose: [
      "25+ years in Bath & BANES — I know the houses, the materials and what lasts.",
      "Period & Georgian specialists — Bath stone, lime, sash windows and traditional finishes done right.",
      "Free quote, no pressure — tell me your postcode and project; I'll come and give you a clear price.",
      "Fully insured, clean & tidy — your home is protected and I leave the job spotless.",
    ],
    faqs: [
      {
        question: "How much does a painter and decorator cost in Bath?",
        answer:
          "Costs depend on the size of the job, the type of work (interior, exterior, wallpaper) and the condition of surfaces. I provide a free, no-obligation quote after discussing your project — whether it's one room or a full house. Get in touch with a rough idea of what you need and I'll arrange a visit to quote in person where helpful.",
      },
      {
        question: "Do you cover Combe Down, Larkhall and other Bath areas?",
        answer:
          "Yes. I cover Bath city centre and the surrounding neighbourhoods including Combe Down, Larkhall, Widcombe, Odd Down, Bear Flat, Oldfield Park, Bathwick, Weston, Twerton, Batheaston, Bathford, Bathampton and more. Send me your postcode and I'll confirm I cover your street.",
      },
      {
        question: "Are you insured for work in Bath?",
        answer:
          "Yes. I'm fully insured for all painting and decorating work in Bath and BANES. I work to high standards, protect your property with dust sheets and coverings, and leave every job clean and tidy.",
      },
      {
        question: "Do you do exterior painting on Bath stone?",
        answer:
          "Yes. I have extensive experience painting and protecting Bath stone and other stone and render finishes. I use appropriate masonry paints and primers so the finish lasts and looks good. Exterior work is quoted after assessing the condition of the surfaces.",
      },
      {
        question: "How do I get a quote for painting and decorating in Bath?",
        answer:
          "Get in touch via my contact page or by phone. Tell me roughly what you need — for example one room, full house, interior or exterior — and your location in Bath. I'll arrange a visit to quote in person where needed and provide a clear, no-obligation price.",
      },
      {
        question: "Do you work on period and Georgian properties in Bath?",
        answer:
          "Yes. I'm used to working on period and Georgian properties across Bath — sash windows, cornices, lime plaster, period mouldings and traditional finishes. I prepare surfaces properly and use appropriate materials so the finish suits the character of your home.",
      },
    ],
    serviceAnchors: {
      "interior-painting": "Interior painting in Bath",
      "exterior-painting": "Exterior painting",
      "wallpaper-hanging": "Wallpaper hanging",
      "preparation-and-repair": "Preparation and repair",
    },
    introImages: [
      { src: "/services/interior.jpg", alt: "Interior painting and decorating in Bath — quality finish" },
      { src: "/services/exterior.png", alt: "Exterior painting on Bath stone and render" },
    ],
    postcodes: ["BA1", "BA2"],
    region: "Bath and North East Somerset",
    sameAs: "https://en.wikipedia.org/wiki/Bath,_Somerset",
    landmarks: ["the Royal Crescent", "the Roman Baths", "Bath Abbey"],
  },
  {
    slug: "widcombe",
    name: "Widcombe",
    metaTitle: "Painter & Decorator in Widcombe, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Widcombe, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Widcombe and BANES.",
    heroSubtitle:
      "Professional painting and decorating for homes in Widcombe and the south-east Bath area.",
    intro:
      "Widcombe is one of Bath's most sought-after neighbourhoods, with a mix of Georgian terraces, Victorian villas and period cottages. I've been working as a painter and decorator in Widcombe and the surrounding Bath area for over 25 years. Whether you're on Widcombe Hill, in the valley or near the canal, I offer a full range of painting and decorating with free, no-obligation quotes.",
    localInfo:
      "Widcombe has a strong community and many character properties that benefit from careful preparation and quality finishes. From sash windows and period mouldings to modern interiors, I'm used to working with the range of property types you find here. I'm local, reliable and always happy to discuss your project.",
    services: [
      "Interior painting for period and modern homes",
      "Exterior painting including Bath stone and render",
      "Wallpaper hanging and feature walls",
      "Sash window and woodwork painting",
      "Period property decoration",
      "Preparation and repair",
    ],
    nearbyAreas: ["Bath city centre", "Bathwick", "Combe Down", "Larkhall", "Twerton", "Batheaston"],
    postcodes: ["BA2"],
    region: "Bath and North East Somerset",
    landmarks: ["Widcombe Hill", "the Kennet & Avon Canal"],
  },
  {
    slug: "twerton",
    name: "Twerton",
    metaTitle: "Painter & Decorator in Twerton, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Twerton, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Twerton and BANES.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Twerton and west Bath.",
    intro:
      "Twerton is a well-established part of Bath with a mix of Victorian terraces, family homes and modern housing. I cover Twerton and the wider Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, tidy and always provide a free quote before starting any job.",
    localInfo:
      "Twerton has a strong sense of community and many homes that benefit from an experienced decorator. I'm used to working with the property types you find here — from older terraces to newer builds — and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your street.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Bath city centre", "Widcombe", "Oldfield Park", "Weston", "Keynsham"],
    postcodes: ["BA2"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "larkhall",
    name: "Larkhall",
    metaTitle: "Painter & Decorator in Larkhall, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Larkhall, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Larkhall and BANES.",
    heroSubtitle:
      "Local painting and decorating for homes in Larkhall and north Bath.",
    intro:
      "Larkhall is a popular neighbourhood in north Bath with a thriving high street and a mix of Victorian and Edwardian homes. I've been decorating properties in Larkhall and the surrounding area for years. Whether you need a full redecoration or a single room refresh, I offer quality work, thorough preparation and free quotes.",
    localInfo:
      "Larkhall has a strong village feel and many character properties. I'm experienced in working with period features, sash windows and the kind of surfaces you find in older Bath homes. I work cleanly, quote fairly and always leave the job tidy. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for period and modern homes",
      "Exterior painting including Bath stone",
      "Wallpaper hanging and feature walls",
      "Sash window and woodwork painting",
      "Preparation and repair of older surfaces",
      "Full house and single room projects",
    ],
    nearbyAreas: ["Bath city centre", "Widcombe", "Combe Down", "Batheaston", "Bathford", "St Saviour's"],
    postcodes: ["BA1"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "combe-down",
    name: "Combe Down",
    metaTitle: "Painter & Decorator in Combe Down, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Combe Down, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Combe Down and BANES.",
    heroSubtitle:
      "Professional painting and decorating for homes in Combe Down and south Bath.",
    intro:
      "Combe Down sits on the southern edge of Bath with stunning views and a mix of stone-built cottages, Victorian villas and modern homes. I cover Combe Down and the wider Bath area, offering a full range of painting and decorating. Many properties here have Bath stone or period features — I'm experienced in working with both and always provide a free quote.",
    localInfo:
      "Combe Down has a distinct character and many homes that benefit from careful preparation and quality paintwork. I'm used to working with stone, render and older building materials. Whether you're on the main road or in one of the quieter lanes, I'm local and ready to help. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting including Bath stone and render",
      "Wallpaper hanging and feature walls",
      "Period property decoration",
      "Preparation and repair",
      "Woodwork and door painting",
    ],
    nearbyAreas: ["Bath city centre", "Widcombe", "Odd Down", "Southstoke", "Bathampton", "Larkhall"],
    postcodes: ["BA2"],
    region: "Bath and North East Somerset",
    landmarks: ["Combe Down stone", "the southern slopes of Bath"],
  },
  {
    slug: "odd-down",
    name: "Odd Down",
    metaTitle: "Painter & Decorator in Odd Down, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Odd Down, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Odd Down and BANES.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Odd Down and south Bath.",
    intro:
      "Odd Down is a well-established area in south Bath with a mix of 1930s semis, post-war housing and newer developments. I cover Odd Down and the surrounding Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, reliable and always happy to give a free, no-obligation quote.",
    localInfo:
      "Odd Down has a strong community and many homes that benefit from an experienced decorator. I'm used to working with the range of property types you find here and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your street.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Bath city centre", "Combe Down", "Widcombe", "Twerton", "Whiteway", "Southdown"],
    postcodes: ["BA2"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "bathwick",
    name: "Bathwick",
    metaTitle: "Painter & Decorator in Bathwick, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Bathwick, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Bathwick and BANES.",
    heroSubtitle:
      "Professional painting and decorating for homes in Bathwick and east Bath.",
    intro:
      "Bathwick is an attractive area on the east side of the River Avon, with Georgian terraces, Victorian villas and a mix of period and modern homes. I cover Bathwick and the wider Bath area, offering a full range of painting and decorating. Many properties here have period features — I'm experienced in working with older buildings and always provide a free quote.",
    localInfo:
      "Bathwick has a strong architectural character and many homes that benefit from careful preparation and quality finishes. I'm used to working with sash windows, period mouldings and the kind of surfaces you find in Bath's older housing. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for period and modern homes",
      "Exterior painting including Bath stone",
      "Wallpaper hanging and feature walls",
      "Sash window and woodwork painting",
      "Period property decoration",
      "Preparation and repair",
    ],
    nearbyAreas: ["Bath city centre", "Widcombe", "Larkhall", "Bathampton", "Claverton", "Batheaston"],
    postcodes: ["BA1"],
    region: "Bath and North East Somerset",
    landmarks: ["Sydney Gardens", "the American Museum"],
  },
  {
    slug: "bear-flat",
    name: "Bear Flat",
    metaTitle: "Painter & Decorator in Bear Flat, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Bear Flat, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Bear Flat and BANES.",
    heroSubtitle:
      "Professional painting and decorating for homes in Bear Flat and south Bath.",
    intro:
      "Bear Flat is a popular residential area on the south side of Bath, with Edwardian terraces, period homes and a strong local character. I cover Bear Flat and the wider Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, reliable and always provide a free quote before starting any job.",
    localInfo:
      "Bear Flat has a mix of period properties that benefit from careful preparation and quality finishes. I'm used to working with the housing types you find here and deliver quality work at fair prices. Get in touch with your postcode to confirm I cover your street.",
    services: [
      "Interior painting for period and modern homes",
      "Exterior painting including Bath stone and render",
      "Wallpaper hanging and feature walls",
      "Sash window and woodwork painting",
      "Preparation and repair",
      "Full house and single room projects",
    ],
    nearbyAreas: ["Bath city centre", "Widcombe", "Odd Down", "Combe Down", "Southdown", "Larkhall"],
    postcodes: ["BA1"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "oldfield-park",
    name: "Oldfield Park",
    metaTitle: "Painter & Decorator in Oldfield Park, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Oldfield Park, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Oldfield Park and BANES.",
    heroSubtitle:
      "Local painting and decorating for homes in Oldfield Park and west Bath.",
    intro:
      "Oldfield Park sits between the city centre and Twerton, with a mix of Victorian and Edwardian terraces and family homes. I cover Oldfield Park and the wider Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, tidy and always happy to give a free, no-obligation quote.",
    localInfo:
      "Oldfield Park has a strong community and many homes that benefit from an experienced decorator. I'm used to working with the property types you find here — period terraces and modern interiors — and deliver quality finishes at fair prices. Get in touch to confirm I cover your street.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Bath city centre", "Twerton", "Widcombe", "Weston", "Bear Flat", "Keynsham"],
    postcodes: ["BA2"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "southdown",
    name: "Southdown",
    metaTitle: "Painter & Decorator in Southdown, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Southdown, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Southdown and BANES.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Southdown and south-west Bath.",
    intro:
      "Southdown is a well-established area in south-west Bath with a mix of Edwardian homes, 1930s housing and family-friendly streets. I cover Southdown and the surrounding Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, reliable and always provide a free quote before starting any job.",
    localInfo:
      "Southdown has a strong community and many homes that benefit from an experienced decorator. I'm used to working with the range of property types you find here and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your street.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Bath city centre", "Odd Down", "Bear Flat", "Combe Down", "Twerton", "Whiteway"],
    postcodes: ["BA2"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "whiteway",
    name: "Whiteway",
    metaTitle: "Painter & Decorator in Whiteway, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Whiteway, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Whiteway and BANES.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Whiteway and south Bath.",
    intro:
      "Whiteway is part of south Bath, close to Odd Down and Southdown, with a mix of family homes and residential streets. I cover Whiteway and the surrounding Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, reliable and always provide a free quote before starting any job.",
    localInfo:
      "Whiteway has a strong community and many homes that benefit from an experienced decorator. I'm used to working with the property types you find here and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your street.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Bath city centre", "Odd Down", "Southdown", "Combe Down", "Bear Flat", "Twerton"],
    postcodes: ["BA2"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "st-saviours",
    name: "St Saviour's",
    metaTitle: "Painter & Decorator in St Saviour's, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in St Saviour's, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. St Saviour's and BANES.",
    heroSubtitle:
      "Local painting and decorating for homes in St Saviour's and north Bath.",
    intro:
      "St Saviour's is a neighbourhood in north Bath, near Larkhall, with a mix of Victorian and Edwardian housing and a strong local character. I cover St Saviour's and the wider Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, tidy and always happy to give a free, no-obligation quote.",
    localInfo:
      "St Saviour's has many character properties that benefit from careful preparation and quality finishes. I'm used to working with period features and the kind of surfaces you find in this part of Bath. Get in touch to confirm I cover your street.",
    services: [
      "Interior painting for period and modern homes",
      "Exterior painting including Bath stone",
      "Wallpaper hanging and feature walls",
      "Sash window and woodwork painting",
      "Preparation and repair",
      "Full house and single room projects",
    ],
    nearbyAreas: ["Bath city centre", "Larkhall", "Combe Down", "Batheaston", "Bathford", "Weston"],
    postcodes: ["BA1"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "walcot",
    name: "Walcot",
    metaTitle: "Painter & Decorator in Walcot, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Walcot, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Walcot and BANES.",
    heroSubtitle:
      "Professional painting and decorating for homes in Walcot and the city centre edge.",
    intro:
      "Walcot sits on the edge of Bath city centre, with Walcot Street and the surrounding streets known for period buildings, independent shops and character housing. I cover Walcot and the wider Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local and always provide a free quote before starting any job.",
    localInfo:
      "Walcot has a mix of Georgian and Victorian properties that benefit from careful preparation and quality finishes. I'm experienced in working with older buildings and the kind of surfaces you find in this part of Bath. Get in touch to confirm I cover your street.",
    services: [
      "Interior painting for period and modern homes",
      "Exterior painting including Bath stone and render",
      "Wallpaper hanging and feature walls",
      "Sash window and woodwork painting",
      "Period property decoration",
      "Preparation and repair",
    ],
    nearbyAreas: ["Bath city centre", "Larkhall", "Widcombe", "Bathwick", "Batheaston", "Weston"],
    postcodes: ["BA1"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "bathampton",
    name: "Bathampton",
    metaTitle: "Painter & Decorator in Bathampton, near Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Bathampton, near Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Bathampton and BANES.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Bathampton and the eastern approach to Bath.",
    intro:
      "Bathampton is a village on the eastern edge of Bath, on the River Avon and the canal, with a mix of period cottages, Victorian terraces and modern homes. I cover Bathampton and the wider Bath area, offering a full range of painting and decorating. Whether you're in the village or on the approach from Bath, I'm local and ready to help. Free, no-obligation quotes for all work.",
    localInfo:
      "Bathampton has a strong village character and many properties that benefit from careful preparation and quality paintwork. I'm experienced in working with older building materials and the kind of surfaces you find in this part of BANES. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting including stone and render",
      "Wallpaper hanging and feature walls",
      "Period property decoration",
      "Preparation and repair",
      "Woodwork and door painting",
    ],
    nearbyAreas: ["Bath", "Batheaston", "Bathford", "Bathwick", "Claverton", "Larkhall"],
    postcodes: ["BA1"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "weston",
    name: "Weston",
    metaTitle: "Painter & Decorator in Weston, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Weston, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Weston and BANES.",
    heroSubtitle:
      "Local painting and decorating for homes in Weston and north-west Bath.",
    intro:
      "Weston is a popular residential area in north-west Bath with a mix of Victorian and Edwardian terraces, family homes and modern housing. I cover Weston and the wider Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, tidy and always provide a free quote before starting any job.",
    localInfo:
      "Weston has a strong community and many homes that benefit from an experienced decorator. I'm used to working with the property types you find here and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your street.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Bath city centre", "Twerton", "Oldfield Park", "Widcombe", "Keynsham"],
    postcodes: ["BA2"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "lansdown",
    name: "Lansdown",
    metaTitle: "Painter & Decorator in Lansdown, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Lansdown, Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Lansdown and BANES.",
    heroSubtitle:
      "Professional painting and decorating for homes on Lansdown and north Bath.",
    intro:
      "Lansdown is an area to the north of Bath with a mix of period homes, larger properties and character housing along Lansdown Road and the approach to the racecourse. I cover Lansdown and the wider Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, reliable and always provide a free quote before starting any job.",
    localInfo:
      "Lansdown has many properties that benefit from careful preparation and quality finishes — Bath stone, period features and modern interiors. I'm used to working with the range of building types you find here and deliver quality work at fair prices. Get in touch with your postcode to confirm I cover your street.",
    services: [
      "Interior painting for period and modern homes",
      "Exterior painting including Bath stone and render",
      "Wallpaper hanging and feature walls",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Bath city centre", "Larkhall", "Weston", "Batheaston", "Bathford", "Charlcombe"],
    postcodes: ["BA1"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "batheaston",
    name: "Batheaston",
    metaTitle: "Painter & Decorator in Batheaston, Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Batheaston, near Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Batheaston and BANES.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Batheaston and the eastern approach to Bath.",
    intro:
      "Batheaston is a village on the eastern edge of Bath with a mix of period cottages, Victorian terraces and modern homes. I cover Batheaston and the wider Bath area, offering a full range of painting and decorating. Whether you're in the village centre or on one of the surrounding lanes, I'm local and ready to help. Free, no-obligation quotes for all work.",
    localInfo:
      "Batheaston has a strong village character and many properties that benefit from careful preparation and quality paintwork. I'm experienced in working with older building materials and the kind of surfaces you find in this part of BANES. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting including stone and render",
      "Wallpaper hanging and feature walls",
      "Period property decoration",
      "Preparation and repair",
      "Woodwork and door painting",
    ],
    nearbyAreas: ["Bath", "Bathford", "Bathampton", "Larkhall", "Widcombe", "Swainswick"],
    postcodes: ["BA1"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "bathford",
    name: "Bathford",
    metaTitle: "Painter & Decorator in Bathford, near Bath | New Decorating",
    metaDescription:
      "Painter & decorator in Bathford, near Bath. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Bathford and BANES.",
    heroSubtitle:
      "Professional painting and decorating for homes in Bathford and the Bath approach.",
    intro:
      "Bathford is a village just north-east of Bath with a mix of stone cottages, Victorian housing and modern homes. I cover Bathford and the wider Bath area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, reliable and always happy to give a free quote. Get in touch to confirm I cover your street.",
    localInfo:
      "Bathford has a strong sense of community and many character properties. I'm used to working with the range of building styles you find here and deliver quality finishes at fair prices. Whether you need a full redecoration or a single room refresh, I'm here to help.",
    services: [
      "Interior painting for all property types",
      "Exterior painting including stone and render",
      "Wallpaper hanging and stripping",
      "Period property decoration",
      "Preparation and repair",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Bath", "Batheaston", "Bathampton", "Larkhall", "Bradford on Avon", "Box"],
    postcodes: ["BA1"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "keynsham",
    name: "Keynsham",
    metaTitle: "Painter & Decorator Keynsham | Painters Keynsham | New Decorating",
    metaDescription:
      "Professional painter & decorator in Keynsham. Interior, exterior, wallpaper. 25+ years experience, fully insured. Free quote — call 07717 772881 or get a quote.",
    heroSubtitle:
      "Need a painter and decorator in Keynsham? I offer professional painting and decorating across Keynsham — from the town centre to Saltford, Bitton, Whitchurch, Queen Charlton and the surrounding villages. 25+ years experience. Fully insured. Free, no-obligation quote.",
    intro:
      "I'm a painter and decorator covering Keynsham (BS31) and the surrounding area between Bath and Bristol. I've been doing painting and decorating in Keynsham for years and know the mix of older character homes and newer developments well. Whether you need a full house repaint, a single room freshened up, or exterior work on your property, I deliver reliable, professional results at fair prices.",
    localInfo:
      "Keynsham has a mix of period homes and modern houses — I work on both, from interior refreshes to exterior repaints and feature walls. I cover Saltford and Bitton regularly, plus Whitchurch, Queen Charlton and Chewton Keynsham. Keynsham has grown in recent years with new housing alongside Victorian and inter-war homes; I work on period cottages on the High Street, 1930s semis and new builds. Get in touch for a free quote.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and removal",
      "Feature walls and woodwork painting",
      "Full house and new build decoration",
      "Surface preparation and repair",
    ],
    nearbyAreas: ["Saltford", "Whitchurch", "Stockwood", "Queen Charlton", "Chewton Keynsham", "Bitton"],
    trustLine: "25+ years experience. Fully insured. Free, no-obligation quote.",
    whyChoose: [
      "25+ years in Keynsham & BANES — I know the area and the mix of period and modern homes.",
      "Full range of painting and decorating — interior, exterior, wallpaper, prep and repair.",
      "Free quote, no obligation — call or get in touch with your postcode and I'll give you a clear price.",
      "Fully insured, clean & tidy — I cover Saltford, Bitton, Whitchurch and nearby; always leave the job spotless.",
    ],
    faqs: [
      {
        question: "How much does a painter and decorator cost in Keynsham?",
        answer:
          "Costs depend on the size of the job — one room, full house, interior or exterior — and the condition of surfaces. I provide a free, no-obligation quote and I'm local to Keynsham so there's no call-out charge. Get in touch with a rough idea of what you need and I'll come and give you a clear price.",
      },
      {
        question: "Do you cover Saltford, Bitton and Whitchurch?",
        answer:
          "Yes. I cover Keynsham town centre and the surrounding areas including Saltford, Bitton, Whitchurch, Queen Charlton, Chewton Keynsham and Stockwood. Send me your postcode and I'll confirm I cover your street. I have area pages for Saltford and Bitton if you'd like more detail.",
      },
      {
        question: "Are you insured for work in Keynsham?",
        answer:
          "Yes. I'm fully insured for all painting and decorating work in Keynsham and the surrounding area. I work to high standards, protect your property with dust sheets and coverings, and leave every job clean and tidy for your peace of mind.",
      },
      {
        question: "How do I get a quote for painting and decorating in Keynsham?",
        answer:
          "Call me on 07717 772881 or use the contact form. Tell me roughly what you need — for example one room, full house, interior or exterior — and your postcode. I'll arrange a visit to quote in person where helpful and provide a free, no-obligation price.",
      },
      {
        question: "Do you do interior and exterior painting in Keynsham?",
        answer:
          "Yes. I offer full interior painting (walls, ceilings, woodwork), exterior painting and masonry coatings, wallpaper hanging and feature walls, and preparation and repair. I cover Keynsham, Saltford, Bitton and nearby — get in touch or see my service pages for more detail.",
      },
      {
        question: "Do you do small jobs in Keynsham?",
        answer:
          "Yes. Small jobs are welcome — whether it's one room, a touch-up or a full redecoration, I'm happy to quote. There's no minimum; you'll get a free quote so you know the cost before any work starts.",
      },
    ],
    serviceAnchors: {
      "interior-painting": "Interior painting in Keynsham",
      "exterior-painting": "Exterior painting",
      "wallpaper-hanging": "Wallpaper hanging",
      "preparation-and-repair": "Preparation and repair",
    },
    introImages: [
      { src: "/services/interior.jpg", alt: "Interior painting and decorating in Keynsham" },
      { src: "/services/exterior.png", alt: "Exterior painting in Keynsham and surrounding area" },
    ],
    postcodes: ["BS31"],
    region: "Bath and North East Somerset",
    sameAs: "https://en.wikipedia.org/wiki/Keynsham",
    landmarks: ["Keynsham High Street", "Keynsham Memorial Park"],
  },
  {
    slug: "saltford",
    name: "Saltford",
    metaTitle: "Painter & Decorator in Saltford, Keynsham | New Decorating",
    metaDescription:
      "Painter & decorator in Saltford (BS31). Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Saltford, Keynsham and BANES.",
    heroSubtitle:
      "Professional painting and decorating for homes in Saltford and the Keynsham area.",
    intro:
      "Saltford sits between Keynsham and Bristol with a mix of period cottages, Victorian terraces and modern homes along the A4 and by the river. I cover Saltford and the surrounding area, offering a full range of painting and decorating. Whether you're in the village centre or on one of the newer developments, I'm local, reliable and always provide a free quote.",
    localInfo:
      "Saltford has a strong community and many properties that benefit from an experienced decorator. I'm used to working with the range of building styles you find here — from older character homes to new builds — and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Woodwork, skirting and door painting",
      "Full house and single room projects",
      "Preparation and repair",
    ],
    nearbyAreas: ["Keynsham", "Bitton", "Whitchurch", "Bristol", "Bath"],
    postcodes: ["BS31"],
    region: "Bath and North East Somerset",
    landmarks: ["the River Avon at Saltford", "Saltford Brass Mill"],
  },
  {
    slug: "bitton",
    name: "Bitton",
    metaTitle: "Painter & Decorator in Bitton, near Keynsham | New Decorating",
    metaDescription:
      "Painter & decorator in Bitton (BS30). Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Bitton, Keynsham and BANES.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Bitton and the Keynsham area.",
    intro:
      "Bitton is a village between Keynsham and Bristol with a mix of stone cottages, Victorian housing and modern homes. I cover Bitton and the surrounding area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, tidy and always happy to give a free, no-obligation quote before starting any job.",
    localInfo:
      "Bitton has a strong village character and many homes that benefit from careful preparation and quality paintwork. I'm experienced in working with older building materials and the kind of surfaces you find in this part of BANES. Get in touch to confirm I cover your street.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Keynsham", "Saltford", "Whitchurch", "Oldland Common", "Bristol"],
    postcodes: ["BS30"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "whitchurch",
    name: "Whitchurch",
    metaTitle: "Painter & Decorator in Whitchurch, near Keynsham | New Decorating",
    metaDescription:
      "Painter & decorator in Whitchurch (BS14). Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Whitchurch, Keynsham and BANES.",
    heroSubtitle:
      "Local painting and decorating for homes in Whitchurch and the Keynsham area.",
    intro:
      "Whitchurch is a village to the north of Keynsham with a mix of period properties, family homes and modern housing. I cover Whitchurch and the surrounding area, offering a full range of painting and decorating. I've been working in the Keynsham and Bristol fringe area for years — reliable, tidy and always happy to give a free quote.",
    localInfo:
      "Whitchurch has a strong sense of community and many homes that benefit from an experienced decorator. I'm used to working with the property types you find here and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork and door painting",
    ],
    nearbyAreas: ["Keynsham", "Saltford", "Bitton", "Stockwood", "Bristol"],
    postcodes: ["BS14"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "stockwood",
    name: "Stockwood",
    metaTitle: "Painter & Decorator in Stockwood, near Keynsham | New Decorating",
    metaDescription:
      "Painter & decorator in Stockwood, near Keynsham. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. BANES.",
    heroSubtitle:
      "Painting and decorating for homes in Stockwood and the Keynsham area.",
    intro:
      "Stockwood lies near Keynsham with a mix of older and newer housing. I cover Stockwood and the surrounding area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local to the Keynsham area and always provide a free, no-obligation quote.",
    localInfo:
      "I'm used to working with the range of property types you find in and around Stockwood and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
    ],
    nearbyAreas: ["Keynsham", "Whitchurch", "Bitton", "Saltford"],
    postcodes: ["BS31"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "queen-charlton",
    name: "Queen Charlton",
    metaTitle: "Painter & Decorator in Queen Charlton, near Keynsham | New Decorating",
    metaDescription:
      "Painter & decorator in Queen Charlton, near Keynsham. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. BANES.",
    heroSubtitle:
      "Painting and decorating for homes in Queen Charlton and the Keynsham area.",
    intro:
      "Queen Charlton is a hamlet near Keynsham with a mix of period and modern homes. I cover Queen Charlton and the surrounding area, offering a full range of painting and decorating. I'm local to Keynsham and the Bristol fringe and always provide a free quote before starting any work.",
    localInfo:
      "I'm experienced in working with the property types you find in this part of BANES and deliver quality finishes at fair prices. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
    ],
    nearbyAreas: ["Keynsham", "Saltford", "Whitchurch", "Bitton"],
    postcodes: ["BS31"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "chewton-keynsham",
    name: "Chewton Keynsham",
    metaTitle: "Painter & Decorator in Chewton Keynsham | New Decorating",
    metaDescription:
      "Painter & decorator in Chewton Keynsham, near Keynsham. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. BANES.",
    heroSubtitle:
      "Painting and decorating for homes in Chewton Keynsham and the Keynsham area.",
    intro:
      "Chewton Keynsham is a village near Keynsham with a mix of cottages and family homes. I cover Chewton Keynsham and the surrounding area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local, reliable and always happy to give a free, no-obligation quote.",
    localInfo:
      "I'm used to working with the range of building styles in this part of BANES and deliver quality finishes at fair prices. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
    ],
    nearbyAreas: ["Keynsham", "Saltford", "Bitton", "Whitchurch"],
    postcodes: ["BS31"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "midsomer-norton",
    name: "Midsomer Norton",
    metaTitle: "Painter & Decorator in Midsomer Norton | New Decorating",
    metaDescription:
      "Painter & decorator in Midsomer Norton. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
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
      "Woodwork and specialist painting",
      "Full redecoration for move-in or sale",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Radstock", "Westfield", "Paulton", "Peasedown St John", "Chilcompton", "Stratton-on-the-Fosse"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
    sameAs: "https://en.wikipedia.org/wiki/Midsomer_Norton",
    landmarks: ["Midsomer Norton town centre", "the Somer Valley"],
  },
  {
    slug: "westfield",
    name: "Westfield",
    metaTitle: "Painter & Decorator in Westfield, Somer Valley | New Decorating",
    metaDescription:
      "Painter & decorator in Westfield, near Midsomer Norton. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Painting and decorating for homes in Westfield and the Somer Valley.",
    intro:
      "Westfield sits between Midsomer Norton and Radstock in the Somer Valley, with a mix of stone-built cottages, Victorian terraces and modern housing. I cover Westfield and the surrounding area, offering a full range of painting and decorating. I'm experienced in working with the local stone and older building materials found throughout the Somer Valley.",
    localInfo:
      "Westfield has a strong community and many properties that benefit from an experienced decorator. I'm used to working with the property types you find here and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and stonework",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Midsomer Norton", "Radstock", "Paulton", "Writhlington", "Peasedown St John"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "paulton",
    name: "Paulton",
    metaTitle: "Painter & Decorator in Paulton, Somer Valley | New Decorating",
    metaDescription:
      "Painter & decorator in Paulton, near Midsomer Norton. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Local painting and decorating for homes in Paulton and the Somer Valley.",
    intro:
      "Paulton is a village in the Somer Valley with a mix of period cottages, family homes and modern housing. I cover Paulton and the surrounding area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local to the Somer Valley and always provide a free, no-obligation quote before starting any job.",
    localInfo:
      "Paulton has a strong village character and many homes that benefit from careful preparation and quality paintwork. I'm experienced in working with stone, render and older building materials. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork and door painting",
    ],
    nearbyAreas: ["Midsomer Norton", "Radstock", "Peasedown St John", "Chilcompton", "Westfield"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "peasedown-st-john",
    name: "Peasedown St John",
    metaTitle: "Painter & Decorator in Peasedown St John | Somer Valley | New Decorating",
    metaDescription:
      "Painter & decorator in Peasedown St John and surrounding areas. Midsomer Norton, Radstock, Paulton, Chilcompton, Westfield, Stratton. Interior, exterior, wallpaper. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Professional painting and decorating for homes in Peasedown St John and the surrounding Somer Valley villages.",
    intro:
      "Peasedown St John sits on the edge of the Somer Valley with easy links to Midsomer Norton, Radstock and the surrounding villages. I cover Peasedown St John and the areas around it — Paulton, Chilcompton, Westfield, Stratton-on-the-Fosse and beyond. Whether you're in the village centre or on one of the surrounding lanes, I offer a full range of painting and decorating: interior and exterior, wallpaper, preparation and repair. I'm local to the Somer Valley, reliable and always happy to give a free quote.",
    localInfo:
      "Peasedown St John has a strong community and a mix of stone cottages, Victorian housing and modern homes. The surrounding Somer Valley has plenty of character properties that benefit from careful preparation and quality paintwork. I'm used to working with local stone, render and older building materials. Get in touch with your postcode to confirm I cover your street.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and stonework",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Midsomer Norton", "Radstock", "Paulton", "Chilcompton", "Westfield", "Stratton-on-the-Fosse"],
    postcodes: ["BA2"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "chilcompton",
    name: "Chilcompton",
    metaTitle: "Painter & Decorator in Chilcompton, Somer Valley | New Decorating",
    metaDescription:
      "Painter & decorator in Chilcompton, near Midsomer Norton. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Chilcompton and the Somer Valley.",
    intro:
      "Chilcompton is a village in the Somer Valley with a mix of stone-built cottages and family homes. I cover Chilcompton and the surrounding area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm experienced in working with the local stone and older building materials found throughout the Somer Valley.",
    localInfo:
      "Chilcompton has a strong village character and many properties that benefit from an experienced decorator. I deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and stonework",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork and door painting",
    ],
    nearbyAreas: ["Midsomer Norton", "Radstock", "Paulton", "Peasedown St John", "Stratton-on-the-Fosse"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "stratton-on-the-fosse",
    name: "Stratton-on-the-Fosse",
    metaTitle: "Painter & Decorator in Stratton-on-the-Fosse | New Decorating",
    metaDescription:
      "Painter & decorator in Stratton-on-the-Fosse, near Midsomer Norton. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Painting and decorating for homes in Stratton-on-the-Fosse and the Somer Valley.",
    intro:
      "Stratton-on-the-Fosse is a village in the Somer Valley with a mix of period and modern housing. I cover Stratton-on-the-Fosse and the surrounding area, offering a full range of painting and decorating. I'm local to Midsomer Norton and the Somer Valley and always provide a free, no-obligation quote.",
    localInfo:
      "I'm used to working with the property types you find in this part of the Somer Valley and deliver quality finishes at fair prices. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
    ],
    nearbyAreas: ["Midsomer Norton", "Radstock", "Chilcompton", "Paulton", "Peasedown St John"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "radstock",
    name: "Radstock",
    metaTitle: "Painter & Decorator in Radstock | New Decorating",
    metaDescription:
      "Painter & decorator in Radstock. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
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
      "Feature walls and woodwork",
      "Landlord and rental property redecorations",
      "Preparation, filling and repair",
    ],
    nearbyAreas: ["Midsomer Norton", "Westfield", "Writhlington", "Kilmersdon", "Coleford", "Holcombe"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
    sameAs: "https://en.wikipedia.org/wiki/Radstock",
    landmarks: ["Radstock Museum", "the Somer Valley trail"],
  },
  {
    slug: "writhlington",
    name: "Writhlington",
    metaTitle: "Painter & Decorator in Writhlington, Somer Valley | New Decorating",
    metaDescription:
      "Painter & decorator in Writhlington, near Radstock. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Painting and decorating for homes in Writhlington and the Somer Valley.",
    intro:
      "Writhlington is a village near Radstock in the Somer Valley, with a mix of stone cottages, family homes and modern housing. I cover Writhlington and the surrounding area, offering a full range of painting and decorating. I'm experienced in working with the local stone and older building materials found throughout the Somer Valley.",
    localInfo:
      "Writhlington has a strong community and many properties that benefit from an experienced decorator. I'm used to working with the property types you find here and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and stonework",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Radstock", "Midsomer Norton", "Westfield", "Kilmersdon", "Paulton"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "kilmersdon",
    name: "Kilmersdon",
    metaTitle: "Painter & Decorator in Kilmersdon, Somer Valley | New Decorating",
    metaDescription:
      "Painter & decorator in Kilmersdon, near Radstock. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Local painting and decorating for homes in Kilmersdon and the Somer Valley.",
    intro:
      "Kilmersdon is a village in the Somer Valley with a mix of period cottages, stone-built homes and family housing. I cover Kilmersdon and the surrounding area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local to Radstock and the Somer Valley and always provide a free, no-obligation quote.",
    localInfo:
      "Kilmersdon has a strong village character and many homes that benefit from careful preparation and quality paintwork. I'm experienced in working with stone and older building materials. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork and door painting",
    ],
    nearbyAreas: ["Radstock", "Midsomer Norton", "Coleford", "Holcombe", "Writhlington"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "coleford",
    name: "Coleford",
    metaTitle: "Painter & Decorator in Coleford, Somer Valley | New Decorating",
    metaDescription:
      "Painter & decorator in Coleford, near Radstock. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Professional painting and decorating for homes in Coleford and the Somer Valley.",
    intro:
      "Coleford is a village in the Somer Valley with a mix of stone cottages, Victorian housing and modern homes. I cover Coleford and the surrounding area, offering a full range of painting and decorating. I'm local to Radstock and the Somer Valley — reliable, tidy and always happy to give a free quote.",
    localInfo:
      "Coleford has a strong sense of community and many character properties. I'm used to working with the range of building styles you find in this part of the Somer Valley and deliver quality finishes at fair prices. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and stonework",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Radstock", "Midsomer Norton", "Kilmersdon", "Holcombe", "Writhlington"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
  },
  {
    slug: "holcombe",
    name: "Holcombe",
    metaTitle: "Painter & Decorator in Holcombe, Somer Valley | New Decorating",
    metaDescription:
      "Painter & decorator in Holcombe, near Radstock. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Somer Valley.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Holcombe and the Somer Valley.",
    intro:
      "Holcombe is a village in the Somer Valley with a mix of stone-built cottages and family homes. I cover Holcombe and the surrounding area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm experienced in working with the local stone and older building materials found throughout the Somer Valley.",
    localInfo:
      "Holcombe has a strong village character and many properties that benefit from an experienced decorator. I deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and stonework",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork and door painting",
    ],
    nearbyAreas: ["Radstock", "Midsomer Norton", "Kilmersdon", "Coleford", "Writhlington"],
    postcodes: ["BA3"],
    region: "Bath and North East Somerset",
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
    postcodes: ["BA14"],
    region: "Wiltshire",
    sameAs: "https://en.wikipedia.org/wiki/Trowbridge",
    landmarks: ["Trowbridge town centre", "the County Hall"],
  },
  {
    slug: "westbury",
    name: "Westbury",
    metaTitle: "Painter & Decorator in Westbury, Wiltshire | New Decorating",
    metaDescription:
      "Painter & decorator in Westbury, near Trowbridge. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Wiltshire.",
    heroSubtitle:
      "Painting and decorating for homes in Westbury and the Wiltshire area.",
    intro:
      "Westbury is a market town in Wiltshire with a mix of period properties, Victorian terraces and modern housing. I cover Westbury and the surrounding area, offering a full range of painting and decorating. I'm based in Bath and work across into Wiltshire — reliable, tidy and always happy to give a free, no-obligation quote.",
    localInfo:
      "Westbury has a strong town character and many homes that benefit from an experienced decorator. I'm used to working with the property types you find here — from older cottages to newer estates — and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and masonry coatings",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Period and character property decoration",
      "Full house redecoration",
    ],
    nearbyAreas: ["Trowbridge", "Bradford on Avon", "Melksham", "Warminster", "Hilperton"],
    postcodes: ["BA13"],
    region: "Wiltshire",
    sameAs: "https://en.wikipedia.org/wiki/Westbury,_Wiltshire",
  },
  {
    slug: "warminster",
    name: "Warminster",
    metaTitle: "Painter & Decorator in Warminster, Wiltshire | New Decorating",
    metaDescription:
      "Painter & decorator in Warminster, near Trowbridge. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Wiltshire.",
    heroSubtitle:
      "Local painting and decorating for homes in Warminster and the Wiltshire area.",
    intro:
      "Warminster is a market town in Wiltshire with a mix of stone-built cottages, Georgian and Victorian homes and modern housing. I cover Warminster and the surrounding area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm based in Bath and work across into Wiltshire — 25+ years of experience, free quotes and a focus on quality finishes.",
    localInfo:
      "Warminster has a strong sense of community and many character properties. I'm experienced in working with older building materials and the kind of surfaces you find in this part of Wiltshire. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and stonework",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Period property decoration",
      "Woodwork, skirting and door painting",
    ],
    nearbyAreas: ["Trowbridge", "Westbury", "Bradford on Avon", "Frome", "Hilperton"],
    postcodes: ["BA12"],
    region: "Wiltshire",
    sameAs: "https://en.wikipedia.org/wiki/Warminster",
  },
  {
    slug: "hilperton",
    name: "Hilperton",
    metaTitle: "Painter & Decorator in Hilperton, near Trowbridge | New Decorating",
    metaDescription:
      "Painter & decorator in Hilperton, near Trowbridge. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Wiltshire.",
    heroSubtitle:
      "Professional painting and decorating for homes in Hilperton and the Trowbridge area.",
    intro:
      "Hilperton is a village near Trowbridge with a mix of period cottages, family homes and modern housing. I cover Hilperton and the surrounding area, offering a full range of painting and decorating. I'm local to the Trowbridge area and always provide a free, no-obligation quote before starting any job.",
    localInfo:
      "Hilperton has a strong village character and many properties that benefit from careful preparation and quality paintwork. I'm used to working with the range of building styles you find in this part of Wiltshire. Get in touch to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
      "Woodwork and door painting",
    ],
    nearbyAreas: ["Trowbridge", "Bradford on Avon", "Melksham", "Westbury", "Staverton"],
    postcodes: ["BA14"],
    region: "Wiltshire",
  },
  {
    slug: "staverton",
    name: "Staverton",
    metaTitle: "Painter & Decorator in Staverton, near Trowbridge | New Decorating",
    metaDescription:
      "Painter & decorator in Staverton, near Trowbridge. Interior, exterior, wallpaper, preparation & repair. 25+ years, free quotes. Wiltshire.",
    heroSubtitle:
      "Trusted painter and decorator for homes in Staverton and the Trowbridge area.",
    intro:
      "Staverton is a village near Trowbridge with a mix of period and modern housing. I cover Staverton and the surrounding area, offering interior and exterior painting, wallpaper hanging and preparation work. I'm local to the Trowbridge area and always happy to give a free, no-obligation quote.",
    localInfo:
      "Staverton has a strong sense of community and many character properties. I'm used to working with the property types you find here and deliver quality finishes at fair prices. Get in touch with your postcode to confirm I cover your area.",
    services: [
      "Interior painting for all property types",
      "Exterior painting and woodwork",
      "Wallpaper hanging and stripping",
      "Preparation and repair",
      "Full house and single room projects",
    ],
    nearbyAreas: ["Trowbridge", "Bradford on Avon", "Melksham", "Hilperton", "Westbury"],
    postcodes: ["BA14"],
    region: "Wiltshire",
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
    postcodes: ["SN14", "SN15"],
    region: "Wiltshire",
    sameAs: "https://en.wikipedia.org/wiki/Chippenham,_Wiltshire",
    landmarks: ["Chippenham High Street", "the River Avon at Chippenham"],
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
    postcodes: ["BA11"],
    region: "Somerset",
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
    postcodes: ["SN12"],
    region: "Wiltshire",
    sameAs: "https://en.wikipedia.org/wiki/Melksham",
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
    postcodes: ["BA15"],
    region: "Wiltshire",
    sameAs: "https://en.wikipedia.org/wiki/Bradford-on-Avon",
    landmarks: ["the weavers' cottages", "Bradford on Avon Tithe Barn"],
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
    postcodes: ["BA11"],
    region: "Somerset",
    sameAs: "https://en.wikipedia.org/wiki/Frome",
    landmarks: ["Frome town centre", "the Black Swan and independent quarter"],
  },
];

export function getAreaBySlug(slug: string): AreaPage | undefined {
  return AREA_PAGES.find((a) => a.slug === slug);
}

export function getAreaSlugs(): string[] {
  return AREA_PAGES.map((a) => a.slug);
}
