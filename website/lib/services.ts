/**
 * Service page data for individual service landing pages.
 * Each service has unique SEO-optimised content targeting specific search terms.
 */

export interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  image: string;
  image2: string;
  intro: string;
  extendedIntro: string;
  benefits: { heading: string; text: string }[];
  process: { step: string; detail: string }[];
  faq: { question: string; answer: string }[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "interior-painting",
    title: "Interior Painting",
    metaTitle: "Interior Painting Bath | Painter & Decorator | New Decorating",
    metaDescription:
      "Interior painting Bath – painter & decorator. Walls, ceilings, woodwork, doors. 25+ years, free quotes. Quality finishes across BANES.",
    heroSubtitle:
      "Transform your home with professional interior painting. Walls, ceilings, woodwork, doors and architraves — all finished to a high standard.",
    image: "/services/interior.jpg",
    image2: "/services/interior-2.jpg",
    intro:
      "A fresh coat of paint is one of the simplest ways to transform a room. Whether you need a single bedroom refreshed or a full house repainted, I deliver clean, lasting results with minimal disruption. With over 25 years of experience, I know how to prepare surfaces properly so the finish looks great and lasts for years.",
    extendedIntro:
      "I cover all interior surfaces — walls, ceilings, skirting boards, architraves, doors, window frames and radiators. Every job starts with thorough preparation: filling cracks, sanding rough patches, and priming where needed. I use trusted brands like Dulux and Farrow & Ball, and I'm happy to work with paints you've chosen yourself. Dust sheets go down on day one, and I leave your home clean and tidy at the end of every visit.",
    benefits: [
      {
        heading: "Thorough preparation",
        text: "I fill cracks, sand surfaces and prime where needed so paint adheres properly and the finish is smooth.",
      },
      {
        heading: "Quality paints",
        text: "I use trusted brands like Dulux and Farrow & Ball. Happy to work with paints you supply too.",
      },
      {
        heading: "Clean and tidy",
        text: "Dust sheets down, furniture protected, and everything left clean at the end of each day.",
      },
      {
        heading: "All interior surfaces",
        text: "Walls, ceilings, skirting boards, architraves, doors, window frames and radiators.",
      },
    ],
    process: [
      { step: "Free quote", detail: "Tell me what you need and I'll visit to give you a no-obligation price." },
      { step: "Preparation", detail: "I protect your furniture and flooring, then fill, sand and prime as needed." },
      { step: "Painting", detail: "Careful application with brushes and rollers for a consistent, professional finish." },
      { step: "Final check", detail: "I inspect every surface, touch up any areas, and leave your home clean and tidy." },
    ],
    faq: [
      {
        question: "How long does it take to paint a room?",
        answer:
          "A standard room typically takes 1–2 days depending on the amount of preparation needed and how many coats are required. I'll give you a clear timeframe when I quote.",
      },
      {
        question: "Do I need to move my furniture?",
        answer:
          "I can move smaller items for you and cover larger pieces with dust sheets. For very large or heavy furniture, it helps if you can clear a space before I start.",
      },
      {
        question: "Can I choose any colour?",
        answer:
          "Absolutely. I can colour-match to any shade and am happy to advise on colours and finishes that work well in your space.",
      },
    ],
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    metaTitle: "Exterior Painting Bath | Painter & Decorator | New Decorating",
    metaDescription:
      "Exterior painting Bath – painter & decorator. Walls, windows, doors, fascias, render. Weather-resistant. 25+ years, free quotes. BANES.",
    heroSubtitle:
      "Protect and refresh the outside of your property with expert exterior painting. Walls, windows, doors, fascias and more.",
    image: "/services/exterior.jpg",
    image2: "/services/exterior-2.jpg",
    intro:
      "The exterior of your home is the first thing people see, and it takes the brunt of the British weather. I use high-quality, weather-resistant paints and coatings to protect your property and keep it looking its best. From a front door refresh to a full exterior repaint, I handle preparation carefully so the finish lasts.",
    extendedIntro:
      "I paint all exterior surfaces including rendered walls, pebbledash, wood cladding, fascias, soffits, bargeboards, windows and doors. Preparation is key to a lasting exterior finish — I scrape loose paint, sand back surfaces, fill cracks in render and prime bare wood before applying quality exterior-grade paints designed for UK weather conditions. I can arrange scaffolding or use ladders and towers for safe access to all areas of your property.",
    benefits: [
      {
        heading: "Weather protection",
        text: "I use exterior-grade paints and masonry coatings designed for UK conditions — rain, frost and UV.",
      },
      {
        heading: "Proper preparation",
        text: "I scrape, sand, fill and prime exterior surfaces to ensure paint bonds well and resists peeling.",
      },
      {
        heading: "All exterior surfaces",
        text: "Rendered walls, pebbledash, wood cladding, fascias, soffits, bargeboards, windows and doors.",
      },
      {
        heading: "Scaffolding and access",
        text: "I can arrange scaffolding or use ladders and towers for safe access to all areas of your property.",
      },
    ],
    process: [
      { step: "Survey & quote", detail: "I visit your property, assess the condition of surfaces, and provide a detailed quote." },
      { step: "Preparation", detail: "Scraping, sanding, filling cracks, and priming bare surfaces for a lasting bond." },
      { step: "Painting", detail: "Application of quality exterior paints, typically two coats for full coverage and durability." },
      { step: "Clean up", detail: "I remove all coverings, clean up thoroughly, and walk you through the finished work." },
    ],
    faq: [
      {
        question: "What time of year is best for exterior painting?",
        answer:
          "Spring through to early autumn is ideal — dry conditions with moderate temperatures help paint cure properly. I can advise on timing when you get in touch.",
      },
      {
        question: "How often should I repaint the exterior?",
        answer:
          "It depends on the surface and exposure. Most exterior paintwork lasts 5–8 years. Masonry coatings can last longer. I'll let you know if surfaces need attention.",
      },
      {
        question: "Do you paint render and pebbledash?",
        answer:
          "Yes, I paint all types of exterior render including smooth, textured and pebbledash finishes using appropriate masonry paints.",
      },
    ],
  },
  {
    slug: "wallpaper-hanging",
    title: "Wallpaper Hanging",
    metaTitle: "Wallpaper Hanging Bath | Painter & Decorator | New Decorating",
    metaDescription:
      "Wallpaper hanging Bath – painter & decorator. Feature walls, full rooms, textured and patterned. 25+ years, free quotes. BANES.",
    heroSubtitle:
      "From subtle textures to bold feature walls, I hang wallpaper with precision for a seamless, professional finish.",
    image: "/services/wallpaper.jpg",
    image2: "/services/wallpaper-2.jpg",
    intro:
      "Wallpaper can completely change the feel of a room — whether it's a statement feature wall or a full room in an elegant pattern. Getting wallpaper right requires patience, precision and experience. With over 25 years of decorating behind me, I make sure every strip is straight, every pattern is matched, and every edge is clean.",
    extendedIntro:
      "I work with all types of wallpaper — paste-the-wall, paste-the-paper, vinyl, non-woven, grasscloth, textured and embossed papers. Every job starts with proper preparation: stripping old paper, lining walls where needed, and filling any imperfections to create a smooth base. I take particular care with pattern matching across strips, around corners and through doorways, so the finished result looks seamless throughout.",
    benefits: [
      {
        heading: "Precise pattern matching",
        text: "I take care to align patterns perfectly across every strip, around corners and through doorways.",
      },
      {
        heading: "All wallpaper types",
        text: "Paste-the-wall, paste-the-paper, vinyl, non-woven, grasscloth, textured and embossed papers.",
      },
      {
        heading: "Feature walls",
        text: "A single feature wall can transform a room. I help you choose placement and handle the install.",
      },
      {
        heading: "Surface preparation",
        text: "I strip old wallpaper, line walls where needed, and fill imperfections before hanging new paper.",
      },
    ],
    process: [
      { step: "Consultation", detail: "I discuss your design ideas and assess the walls to advise on preparation needed." },
      { step: "Preparation", detail: "Old wallpaper is stripped, walls are lined or filled as needed for a smooth base." },
      { step: "Hanging", detail: "Each strip is carefully measured, cut, pasted and applied with precise pattern alignment." },
      { step: "Finishing", detail: "Edges are trimmed cleanly, seams are rolled smooth, and the room is left tidy." },
    ],
    faq: [
      {
        question: "Can you wallpaper over existing wallpaper?",
        answer:
          "I generally recommend stripping the old wallpaper first for the best result. Papering over old paper can cause bubbling and peeling over time.",
      },
      {
        question: "Do you supply the wallpaper?",
        answer:
          "I can source wallpaper for you or work with paper you've already purchased. I'm happy to advise on quantities and suitable types.",
      },
      {
        question: "How long does wallpapering a room take?",
        answer:
          "A feature wall can usually be done in half a day. A full room typically takes 1–2 days depending on the pattern complexity and preparation required.",
      },
    ],
  },
  {
    slug: "preparation-and-repair",
    title: "Preparation & Repair",
    metaTitle: "Preparation & Repair Bath | Painter & Decorator | New Decorating",
    metaDescription:
      "Preparation & repair Bath – painter & decorator. Filling, sanding, plaster and woodwork repair. 25+ years, free quotes. BANES.",
    heroSubtitle:
      "Good preparation is the foundation of every great paint job. I fill, sand, repair and prime so your finish looks its best and lasts longer.",
    image: "/services/preparation.jpg",
    image2: "/services/preparation-2.jpg",
    intro:
      "The secret to a professional paint finish is what happens before the paint goes on. Cracks, holes, peeling paint, damaged plaster and rough woodwork all need attention first. I take the time to prepare every surface properly — filling, sanding, priming and repairing — so the final finish is smooth, even and long-lasting.",
    extendedIntro:
      "I handle everything from minor crack filling and sanding through to larger plaster repairs and rotten woodwork replacement. I use the right fillers for each surface — specialist products for plaster, wood and masonry — and I always prime bare surfaces to seal repairs and provide a consistent base. Preparation is included as standard in every painting quote, because I know it's the foundation of a finish that lasts.",
    benefits: [
      {
        heading: "Crack and hole filling",
        text: "I use appropriate fillers for plaster, wood and masonry to achieve a smooth, level surface.",
      },
      {
        heading: "Sanding and smoothing",
        text: "All surfaces are sanded to provide a key for paint and to remove imperfections.",
      },
      {
        heading: "Plaster repair",
        text: "I can patch damaged plaster, skim small areas and prepare walls that have been neglected.",
      },
      {
        heading: "Woodwork repair",
        text: "Rotten or damaged wood is repaired or replaced before painting to ensure a lasting finish.",
      },
    ],
    process: [
      { step: "Assessment", detail: "I inspect all surfaces and identify what preparation and repairs are needed." },
      { step: "Repair", detail: "Cracks are filled, damaged areas are patched, and rotten wood is treated or replaced." },
      { step: "Sanding", detail: "All surfaces are sanded smooth and dust is removed for a clean base." },
      { step: "Priming", detail: "Bare surfaces and repairs are primed to seal and provide a consistent base for paint." },
    ],
    faq: [
      {
        question: "Why is preparation so important?",
        answer:
          "Paint only looks as good as the surface underneath. Proper filling, sanding and priming ensures the finish is smooth, even and long-lasting.",
      },
      {
        question: "Can you fix cracked or damaged plaster?",
        answer:
          "Yes, I can fill cracks, patch damaged areas and prepare plaster surfaces for painting. For larger plastering jobs, I can recommend a plasterer.",
      },
      {
        question: "Do you charge extra for preparation?",
        answer:
          "Preparation is included in my quotes as standard. I'll let you know upfront if a job needs more extensive prep work that might affect the price.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return SERVICE_PAGES.map((s) => s.slug);
}
