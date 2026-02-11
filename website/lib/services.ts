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
    metaTitle: "Interior Painting | Painter & Decorator Bath & BANES",
    metaDescription:
      "Professional interior painting in Bath and North East Somerset. Walls, ceilings, woodwork, doors and skirting boards. 25+ years experience. Free quotes.",
    heroSubtitle:
      "Transform your home with professional interior painting. Walls, ceilings, woodwork, doors and architraves — all finished to a high standard.",
    image: "/services/interior.jpg",
    image2: "/services/interior-2.jpg",
    intro:
      "A fresh coat of paint is one of the simplest ways to transform a room. Whether you need a single bedroom refreshed or a full house repainted, we deliver clean, lasting results with minimal disruption. With over 25 years of experience, we know how to prepare surfaces properly so the finish looks great and lasts for years.",
    extendedIntro:
      "We cover all interior surfaces — walls, ceilings, skirting boards, architraves, doors, window frames and radiators. Every job starts with thorough preparation: filling cracks, sanding rough patches, and priming where needed. We use trusted brands like Dulux and Farrow & Ball, and we're happy to work with paints you've chosen yourself. Dust sheets go down on day one, and we leave your home clean and tidy at the end of every visit.",
    benefits: [
      {
        heading: "Thorough preparation",
        text: "We fill cracks, sand surfaces and prime where needed so paint adheres properly and the finish is smooth.",
      },
      {
        heading: "Quality paints",
        text: "We use trusted brands like Dulux and Farrow & Ball. Happy to work with paints you supply too.",
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
      { step: "Free quote", detail: "Tell us what you need and we'll visit to give you a no-obligation price." },
      { step: "Preparation", detail: "We protect your furniture and flooring, then fill, sand and prime as needed." },
      { step: "Painting", detail: "Careful application with brushes and rollers for a consistent, professional finish." },
      { step: "Final check", detail: "We inspect every surface, touch up any areas, and leave your home clean and tidy." },
    ],
    faq: [
      {
        question: "How long does it take to paint a room?",
        answer:
          "A standard room typically takes 1–2 days depending on the amount of preparation needed and how many coats are required. We'll give you a clear timeframe when we quote.",
      },
      {
        question: "Do I need to move my furniture?",
        answer:
          "We can move smaller items for you and cover larger pieces with dust sheets. For very large or heavy furniture, it helps if you can clear a space before we start.",
      },
      {
        question: "Can I choose any colour?",
        answer:
          "Absolutely. We can colour-match to any shade and are happy to advise on colours and finishes that work well in your space.",
      },
    ],
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    metaTitle: "Exterior Painting | Painter & Decorator Bath & BANES",
    metaDescription:
      "Expert exterior painting in Bath and BANES. Walls, windows, doors, fascias and render. Weather-resistant finishes. 25+ years experience. Free quotes.",
    heroSubtitle:
      "Protect and refresh the outside of your property with expert exterior painting. Walls, windows, doors, fascias and more.",
    image: "/services/exterior.jpg",
    image2: "/services/exterior-2.jpg",
    intro:
      "The exterior of your home is the first thing people see, and it takes the brunt of the British weather. We use high-quality, weather-resistant paints and coatings to protect your property and keep it looking its best. From a front door refresh to a full exterior repaint, we handle preparation carefully so the finish lasts.",
    extendedIntro:
      "We paint all exterior surfaces including rendered walls, pebbledash, wood cladding, fascias, soffits, bargeboards, windows and doors. Preparation is key to a lasting exterior finish — we scrape loose paint, sand back surfaces, fill cracks in render and prime bare wood before applying quality exterior-grade paints designed for UK weather conditions. We can arrange scaffolding or use ladders and towers for safe access to all areas of your property.",
    benefits: [
      {
        heading: "Weather protection",
        text: "We use exterior-grade paints and masonry coatings designed for UK conditions — rain, frost and UV.",
      },
      {
        heading: "Proper preparation",
        text: "We scrape, sand, fill and prime exterior surfaces to ensure paint bonds well and resists peeling.",
      },
      {
        heading: "All exterior surfaces",
        text: "Rendered walls, pebbledash, wood cladding, fascias, soffits, bargeboards, windows and doors.",
      },
      {
        heading: "Scaffolding and access",
        text: "We can arrange scaffolding or use ladders and towers for safe access to all areas of your property.",
      },
    ],
    process: [
      { step: "Survey & quote", detail: "We visit your property, assess the condition of surfaces, and provide a detailed quote." },
      { step: "Preparation", detail: "Scraping, sanding, filling cracks, and priming bare surfaces for a lasting bond." },
      { step: "Painting", detail: "Application of quality exterior paints, typically two coats for full coverage and durability." },
      { step: "Clean up", detail: "We remove all coverings, clean up thoroughly, and walk you through the finished work." },
    ],
    faq: [
      {
        question: "What time of year is best for exterior painting?",
        answer:
          "Spring through to early autumn is ideal — dry conditions with moderate temperatures help paint cure properly. We can advise on timing when you get in touch.",
      },
      {
        question: "How often should I repaint the exterior?",
        answer:
          "It depends on the surface and exposure. Most exterior paintwork lasts 5–8 years. Masonry coatings can last longer. We'll let you know if surfaces need attention.",
      },
      {
        question: "Do you paint render and pebbledash?",
        answer:
          "Yes, we paint all types of exterior render including smooth, textured and pebbledash finishes using appropriate masonry paints.",
      },
    ],
  },
  {
    slug: "wallpaper-hanging",
    title: "Wallpaper Hanging",
    metaTitle: "Wallpaper Hanging | Decorator Bath & BANES",
    metaDescription:
      "Professional wallpaper hanging in Bath and BANES. Feature walls, full rooms, textured and patterned wallpaper. 25+ years experience. Free quotes.",
    heroSubtitle:
      "From subtle textures to bold feature walls, we hang wallpaper with precision for a seamless, professional finish.",
    image: "/services/wallpaper.jpg",
    image2: "/services/wallpaper-2.jpg",
    intro:
      "Wallpaper can completely change the feel of a room — whether it's a statement feature wall or a full room in an elegant pattern. Getting wallpaper right requires patience, precision and experience. With over 25 years of decorating behind us, we make sure every strip is straight, every pattern is matched, and every edge is clean.",
    extendedIntro:
      "We work with all types of wallpaper — paste-the-wall, paste-the-paper, vinyl, non-woven, grasscloth, textured and embossed papers. Every job starts with proper preparation: stripping old paper, lining walls where needed, and filling any imperfections to create a smooth base. We take particular care with pattern matching across strips, around corners and through doorways, so the finished result looks seamless throughout.",
    benefits: [
      {
        heading: "Precise pattern matching",
        text: "We take care to align patterns perfectly across every strip, around corners and through doorways.",
      },
      {
        heading: "All wallpaper types",
        text: "Paste-the-wall, paste-the-paper, vinyl, non-woven, grasscloth, textured and embossed papers.",
      },
      {
        heading: "Feature walls",
        text: "A single feature wall can transform a room. We help you choose placement and handle the install.",
      },
      {
        heading: "Surface preparation",
        text: "We strip old wallpaper, line walls where needed, and fill imperfections before hanging new paper.",
      },
    ],
    process: [
      { step: "Consultation", detail: "We discuss your design ideas and assess the walls to advise on preparation needed." },
      { step: "Preparation", detail: "Old wallpaper is stripped, walls are lined or filled as needed for a smooth base." },
      { step: "Hanging", detail: "Each strip is carefully measured, cut, pasted and applied with precise pattern alignment." },
      { step: "Finishing", detail: "Edges are trimmed cleanly, seams are rolled smooth, and the room is left tidy." },
    ],
    faq: [
      {
        question: "Can you wallpaper over existing wallpaper?",
        answer:
          "We generally recommend stripping the old wallpaper first for the best result. Papering over old paper can cause bubbling and peeling over time.",
      },
      {
        question: "Do you supply the wallpaper?",
        answer:
          "We can source wallpaper for you or work with paper you've already purchased. We're happy to advise on quantities and suitable types.",
      },
      {
        question: "How long does wallpapering a room take?",
        answer:
          "A feature wall can usually be done in half a day. A full room typically takes 1–2 days depending on the pattern complexity and preparation required.",
      },
    ],
  },
  {
    slug: "decorative-finishes",
    title: "Decorative Finishes",
    metaTitle: "Decorative Finishes | Painter & Decorator Bath & BANES",
    metaDescription:
      "Decorative paint finishes in Bath and BANES. Feature walls, colour washing, specialist techniques. 25+ years experience. Free quotes.",
    heroSubtitle:
      "Add character and style to your home with decorative paint techniques — feature walls, colour washing and more.",
    image: "/services/decorative.jpg",
    image2: "/services/decorative-2.jpg",
    intro:
      "Sometimes a standard painted wall doesn't capture the look you're after. Decorative finishes — from colour washing and rag rolling to bold feature walls and accent colours — can add depth, texture and personality to any room. With 25+ years of experience, we can help you achieve a finish that's unique to your home.",
    extendedIntro:
      "We offer a wide range of specialist techniques including sponging, stippling, dragging, colour washing and rag rolling. For feature walls, we can help you choose a bold colour, a contrasting texture, or a layered paint effect that creates a real focal point. Not sure what you want? We're happy to create a sample patch on your wall so you can see the effect before committing to the full job.",
    benefits: [
      {
        heading: "Feature walls",
        text: "Create a focal point with a bold colour, contrasting texture, or specialist paint effect.",
      },
      {
        heading: "Colour washing & rag rolling",
        text: "Subtle, layered paint effects that add warmth, depth and movement to walls.",
      },
      {
        heading: "Specialist techniques",
        text: "Sponging, stippling, dragging and other traditional techniques adapted to modern interiors.",
      },
      {
        heading: "Colour advice",
        text: "Not sure what to go for? We're happy to advise on colours and combinations that suit your space.",
      },
    ],
    process: [
      { step: "Design chat", detail: "Tell us the look you want and we'll suggest techniques, colours and finishes." },
      { step: "Sample area", detail: "For specialist finishes, we can prepare a test patch so you can see the effect before committing." },
      { step: "Application", detail: "We apply the chosen technique carefully, building up layers for an even, professional result." },
      { step: "Review", detail: "We walk you through the finished work and make any adjustments to ensure you're happy." },
    ],
    faq: [
      {
        question: "What decorative finishes do you offer?",
        answer:
          "We offer colour washing, rag rolling, sponging, stippling, dragging, feature walls, accent walls and bold colour blocking. If you have something specific in mind, just ask.",
      },
      {
        question: "Are decorative finishes more expensive than standard painting?",
        answer:
          "Some specialist techniques take longer and may cost a little more than a standard flat finish. We'll explain costs clearly when we quote so there are no surprises.",
      },
      {
        question: "Can you match a finish I've seen online?",
        answer:
          "In most cases, yes. Share a photo or link and we'll let you know if we can replicate it and what's involved.",
      },
    ],
  },
  {
    slug: "preparation-and-repair",
    title: "Preparation & Repair",
    metaTitle: "Preparation & Repair | Painter & Decorator Bath & BANES",
    metaDescription:
      "Surface preparation and repair in Bath and BANES. Filling, sanding, plaster repair, woodwork repair. 25+ years experience. Free quotes.",
    heroSubtitle:
      "Good preparation is the foundation of every great paint job. We fill, sand, repair and prime so your finish looks its best and lasts longer.",
    image: "/services/preparation.jpg",
    image2: "/services/preparation-2.jpg",
    intro:
      "The secret to a professional paint finish is what happens before the paint goes on. Cracks, holes, peeling paint, damaged plaster and rough woodwork all need attention first. We take the time to prepare every surface properly — filling, sanding, priming and repairing — so the final finish is smooth, even and long-lasting.",
    extendedIntro:
      "We handle everything from minor crack filling and sanding through to larger plaster repairs and rotten woodwork replacement. We use the right fillers for each surface — specialist products for plaster, wood and masonry — and we always prime bare surfaces to seal repairs and provide a consistent base. Preparation is included as standard in every painting quote, because we know it's the foundation of a finish that lasts.",
    benefits: [
      {
        heading: "Crack and hole filling",
        text: "We use appropriate fillers for plaster, wood and masonry to achieve a smooth, level surface.",
      },
      {
        heading: "Sanding and smoothing",
        text: "All surfaces are sanded to provide a key for paint and to remove imperfections.",
      },
      {
        heading: "Plaster repair",
        text: "We can patch damaged plaster, skim small areas and prepare walls that have been neglected.",
      },
      {
        heading: "Woodwork repair",
        text: "Rotten or damaged wood is repaired or replaced before painting to ensure a lasting finish.",
      },
    ],
    process: [
      { step: "Assessment", detail: "We inspect all surfaces and identify what preparation and repairs are needed." },
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
          "Yes, we can fill cracks, patch damaged areas and prepare plaster surfaces for painting. For larger plastering jobs, we can recommend a plasterer.",
      },
      {
        question: "Do you charge extra for preparation?",
        answer:
          "Preparation is included in our quotes as standard. We'll let you know upfront if a job needs more extensive prep work that might affect the price.",
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
