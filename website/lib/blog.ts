/**
 * Blog article data for SEO-focused content marketing.
 * Each article targets informational long-tail keywords relevant to
 * painting and decorating in Bath & BANES.
 */

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: { heading: string; body: string[] }[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "bath-painter-and-decorator-25-years-local-experience",
    title: "Bath Painter and Decorator: 25 Years' Experience in the Area",
    metaTitle: "Bath Painter and Decorator | 25+ Years in BANES | New Decorating",
    metaDescription:
      "Bath painter and decorator with 25+ years' experience. Interior, exterior, wallpaper across Bath, Keynsham, Midsomer Norton, Radstock and surrounding areas. Free quotes.",
    excerpt:
      "I've been working as a painter and decorator in and around Bath for over 25 years. Here's what that experience means for your project — and the local areas I cover.",
    date: "2026-02-09",
    readTime: "4 min read",
    image: "/jason-working-window.png",
    imageAlt: "New Decorating painter and decorator at work on a window — preparation and painting in Bath and the surrounding area",
    sections: [
      {
        heading: "25 years of painting and decorating in Bath",
        body: [
          "I've been working as a painter and decorator in Bath and the surrounding area for over 25 years. In that time I've painted everything from single rooms to full house interiors and exteriors — period cottages, Georgian townhouses, modern homes, and everything in between.",
          "That experience means I know how to prepare surfaces properly, choose the right products for the job, and work cleanly and efficiently so your home looks its best and the finish lasts. I'm not in a rush to get on to the next job — I take the time to do each one right.",
        ],
      },
      {
        heading: "Working in the area — why local experience matters",
        body: [
          "Working in Bath and North East Somerset for so long means I know the area and its properties. Many homes here are period or character properties with lime plaster, exposed beams, sash windows, and older woodwork. They need a different approach to modern new-builds.",
          "I'm used to the challenges that come with Bath's older housing stock: making good uneven walls, working with heritage colours and finishes, and matching existing paintwork where only part of a room is being redecorated. I also know the practical side — parking, access, and how to work around your routine.",
        ],
      },
      {
        heading: "Areas I cover — Bath and beyond",
        body: [
          "I'm based in the Bath area and work across Bath and North East Somerset (BANES) and into Wiltshire and Somerset. I regularly work in Bath itself, Keynsham, Midsomer Norton, Radstock, Trowbridge, Chippenham, Rode, Melksham, Bradford on Avon, Frome, and the surrounding villages.",
          "If you're not sure whether I cover your postcode, just get in touch. I'm happy to confirm and, where it makes sense, I'll come and quote in person so you know exactly what's included and what it will cost.",
        ],
      },
      {
        heading: "What I offer — interior, exterior, and more",
        body: [
          "I offer a full range of painting and decorating: interior painting (walls, ceilings, woodwork, doors), exterior painting (walls, windows, doors, fascias), wallpaper hanging, and preparation and repair. Every job is quoted individually so you know the cost upfront.",
          "I use quality paints from brands I trust — including Dulux, Farrow & Ball, and Little Greene — and I'm happy to work with paints you've chosen yourself. I provide free, no-obligation quotes and can work around your schedule where possible.",
        ],
      },
      {
        heading: "Get in touch for a free quote",
        body: [
          "If you're looking for a reliable painter and decorator in Bath or the surrounding area, I'd be happy to help. Tell me roughly what you need — a single room, a full redecoration, or exterior work — and your location, and I'll arrange a visit to quote.",
          "You can get in touch via my contact page or by phone. I'll give you a clear, fixed price and honest advice on what's needed. No obligation — just a straightforward quote from someone who's been doing this in your area for over 25 years.",
        ],
      },
    ],
  },
  {
    slug: "why-preparation-is-the-most-important-part-of-decorating",
    title: "Why Preparation Is the Most Important Part of Decorating",
    metaTitle: "Why Preparation Is Key to a Great Paint Finish | Painter & Decorator Bath | New Decorating",
    metaDescription:
      "Why preparation is key to a great paint finish. Filling, sanding and priming – explained by a Bath decorator. 25+ years. Free quotes.",
    excerpt:
      "Paint only looks as good as the surface underneath. Here's why preparation is the step that separates a professional finish from a DIY one.",
    date: "2026-01-25",
    readTime: "3 min read",
    image: "/services/preparation.jpg",
    imageAlt: "Surface preparation before painting — sanding and filling walls",
    sections: [
      {
        heading: "What counts as preparation?",
        body: [
          "Preparation covers everything that happens before paint touches the wall. That includes filling cracks and holes, sanding rough surfaces, scraping off flaking paint, washing down dirty walls, masking edges, and priming bare or repaired areas.",
          "On woodwork, it means sanding the existing paint to create a key for the new coat, filling any dents or chips, and priming bare wood. For exterior work, it can also involve scraping rust, treating mould, and repairing damaged render.",
        ],
      },
      {
        heading: "What happens if you skip it?",
        body: [
          "If you paint over cracks, they'll show through within weeks. If you don't sand gloss woodwork, the new paint won't stick and will peel. If you don't prime bare plaster, the paint will soak in unevenly and look patchy.",
          "Many DIY paint jobs look fine for a few days but start to fail quickly. The most common reason is poor preparation. It's the part most people want to rush through, but it's the part that makes the biggest difference to how the finished job looks and how long it lasts.",
        ],
      },
      {
        heading: "How professionals approach preparation",
        body: [
          "A professional decorator will spend a significant portion of the job on preparation — sometimes as much time as the actual painting. I inspect every surface, identify what needs attention, and work methodically through filling, sanding, and priming.",
          "I use dust sheets to protect floors and furniture, and I clean up at the end of each day. The goal is to create a perfectly smooth, clean surface so the paint goes on evenly and lasts for years.",
        ],
      },
      {
        heading: "Preparation for different surfaces",
        body: [
          "New plaster needs a mist coat (diluted emulsion) before full-strength paint. Old plaster with cracks needs filling and sanding. Woodwork needs sanding between coats. Previously wallpapered walls need stripping and lining in most cases.",
          "Exterior surfaces face additional challenges: weathering, moss, mould, and UV damage all need addressing before painting. I use appropriate treatments and primers for each surface type to ensure the best result.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-the-right-paint-colour",
    title: "How to Choose the Right Paint Colour for Your Room",
    metaTitle: "How to Choose the Right Paint Colour | Painter & Decorator Bath | New Decorating",
    metaDescription:
      "How to choose the right paint colour for your room. Lighting, room size and furnishings. Tips from a Bath decorator. 25+ years.",
    excerpt:
      "Choosing a paint colour can be overwhelming. Here are practical tips to help you pick the right shade for your space.",
    date: "2026-01-18",
    readTime: "4 min read",
    image: "/services/interior.jpg",
    imageAlt: "Freshly decorated room with carefully chosen paint colours",
    sections: [
      {
        heading: "Start with the light in your room",
        body: [
          "The single biggest factor in how a paint colour looks is the light in the room. A colour that looks warm and inviting in a south-facing room can look cold and flat in a north-facing one. Natural daylight, artificial lighting, and even the time of day all change how colours appear.",
          "Before committing, always test paint colours in the actual room. Paint a large sample patch (at least A3 size) on the wall and look at it at different times of day. Many paint brands sell sample pots for a few pounds — it's the best money you can spend.",
        ],
      },
      {
        heading: "Consider the size of the room",
        body: [
          "Light colours make small rooms feel bigger and more open. Dark colours can make a large room feel cosier and more intimate. This doesn't mean small rooms can't have dark walls — a dark feature wall in a small bedroom can look stunning — but it's worth thinking about the effect you want.",
          "If you're painting a hallway or landing, lighter colours tend to work best as these spaces often have limited natural light. For living rooms and bedrooms, you have more freedom to experiment.",
        ],
      },
      {
        heading: "Work with what you already have",
        body: [
          "Unless you're starting from scratch, your paint colour needs to work with your existing flooring, furniture, and curtains. Pull colours from what's already in the room — a cushion, a rug, or a piece of artwork can be a great starting point.",
          "If you have warm-toned wood floors or furniture, warm paint colours (creams, warm greys, sage greens) tend to complement them. Cool-toned rooms suit cooler shades (blue-greys, whites with a blue undertone).",
        ],
      },
      {
        heading: "Popular colour choices I see in Bath",
        body: [
          "In the period properties and character homes I work on across Bath, I see a lot of heritage colours performing well. Sage greens, deep navy blues, warm whites, and soft greys are consistently popular choices that suit both traditional and modern interiors.",
          "Farrow & Ball colours like Hague Blue, Pigeon, and Cornforth White remain popular in Bath homes. Dulux Heritage and Little Greene are also excellent ranges for character properties. I'm happy to advise on colours and can colour-match to any shade.",
        ],
      },
      {
        heading: "Don't forget the woodwork",
        body: [
          "Skirting boards, doors, and architraves frame the room and can make or break the overall look. Bright white woodwork gives a clean, contemporary feel. Off-white or a shade lighter than the walls creates a softer, more traditional look.",
          "Some homeowners are now choosing to paint woodwork in the same colour as the walls for a modern, seamless effect. Others go bold with a contrasting colour on doors. Whatever you choose, make sure you use the right finish — satinwood or eggshell for woodwork, matt or silk for walls.",
        ],
      },
    ],
  },
  {
    slug: "interior-vs-exterior-paint-what-you-need-to-know",
    title: "Interior vs Exterior Paint: What You Need to Know",
    metaTitle: "Interior vs Exterior Paint Explained | Painter & Decorator Bath | New Decorating",
    metaDescription:
      "Interior vs exterior paint – what you need to know. Types, finishes and when to use each. Bath painter & decorator. 25+ years.",
    excerpt:
      "Interior and exterior paints are designed for very different conditions. Here's what you need to know about choosing the right one.",
    date: "2026-01-10",
    readTime: "3 min read",
    image: "/services/exterior.png",
    imageAlt: "Exterior of a property being painted with weather-resistant paint",
    sections: [
      {
        heading: "Why you can't use interior paint outside",
        body: [
          "Interior paint is designed for stable, indoor conditions. It's formulated to be washable, low-odour, and to give a smooth finish on protected surfaces. It's not built to withstand rain, frost, UV light, or temperature swings.",
          "If you use interior paint on an exterior surface, it will start to crack, peel, and flake within months. Exterior paint contains special resins and additives that make it flexible (so it expands and contracts with temperature changes) and resistant to moisture, mould, and UV degradation.",
        ],
      },
      {
        heading: "Types of interior paint",
        body: [
          "For walls and ceilings, the main choices are matt emulsion (flat finish, hides imperfections), silk emulsion (slight sheen, more washable), and soft sheen (between the two). Matt is the most popular choice for living rooms and bedrooms. Silk or soft sheen works well in kitchens and bathrooms where walls need occasional wiping.",
          "For woodwork (skirting, doors, window frames), you'll want satinwood (mid-sheen, durable) or eggshell (low sheen, more traditional). Gloss paint is less common now but still used on some period properties. Water-based satinwood has largely replaced oil-based gloss for most interior woodwork.",
        ],
      },
      {
        heading: "Types of exterior paint",
        body: [
          "Exterior masonry paint is used on rendered, pebbledash, and brick surfaces. It comes in smooth and textured finishes and is designed to be breathable (allowing moisture to escape from the wall) while keeping rain out.",
          "Exterior wood paint and preservatives protect doors, windows, fascias, and cladding from the weather. Products range from opaque paints to translucent stains that show the wood grain. For metal surfaces like railings and gates, you'll need a metal primer and exterior metal paint.",
        ],
      },
      {
        heading: "How long does exterior paint last?",
        body: [
          "Good quality exterior masonry paint typically lasts 5–10 years depending on the exposure and surface condition. South and west-facing walls take more weather and may need repainting sooner. Sheltered walls can last longer.",
          "Exterior woodwork usually needs attention every 3–5 years, depending on the product used and how exposed it is. Regular maintenance — touching up any chips or cracks before they get worse — can extend the life of the paintwork significantly.",
        ],
      },
      {
        heading: "Choosing the right products",
        body: [
          "I use quality products from brands I trust — Dulux Weathershield for exterior masonry, Dulux Trade and Farrow & Ball for interior work, and specialist primers where needed. The right product for the right surface makes all the difference.",
          "If you're unsure what your walls or woodwork need, I can advise. Every quote from New Decorating includes a recommendation on products and finishes suited to your specific property.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-your-home-for-a-decorator",
    title: "How to Prepare Your Home for a Decorator",
    metaTitle: "How to Prepare Your Home for a Decorator | Painter & Decorator Bath | New Decorating",
    metaDescription:
      "How to prepare your home for a decorator. Practical tips for a smooth job. Bath painter & decorator. 25+ years, free quotes.",
    excerpt:
      "A few simple things you can do before your decorator arrives to help the job run smoothly and potentially save you money.",
    date: "2026-01-05",
    readTime: "3 min read",
    image: "/services/interior.jpg",
    imageAlt: "Room prepared for decorating with furniture moved and dust sheets laid",
    sections: [
      {
        heading: "Move what you can",
        body: [
          "If you're able to move smaller items of furniture, ornaments, and pictures off the walls before I arrive, it saves time — and time is money. I'll move and cover larger items myself, but clearing the small stuff makes a real difference.",
          "Take down curtains and blinds if you can, and remove light fittings or lampshades that might be in the way. Don't worry about moving heavy wardrobes or bookcases — I'll work around those or shift them as needed.",
        ],
      },
      {
        heading: "Decide on your colours in advance",
        body: [
          "Having your paint colours chosen before the start date avoids delays. If you're supplying the paint yourself, make sure you have enough — I can advise on quantities when I quote. If I'm supplying it, I'll confirm the colours with you beforehand.",
          "If you're still undecided, buy a few tester pots and paint sample patches on the wall a week before the job starts. Live with them for a few days and see how they look in different light before making your final choice.",
        ],
      },
      {
        heading: "Let me know about any issues",
        body: [
          "If you know about damp patches, cracked plaster, mould, or other problems, let me know before the job starts. This helps me plan the right preparation and bring the right materials. It's much better to flag issues upfront than to discover them on day one.",
          "Similarly, if there are areas you don't want painted, or specific things you need me to work around (a home office you need to use, a room that needs to stay accessible), tell me in advance and I'll plan the job accordingly.",
        ],
      },
      {
        heading: "Access and parking",
        body: [
          "If you live in a flat or a property with restricted access, let me know how to get in and where I can park. For exterior work, I may need to access side passages or gardens — make sure gates are unlocked and paths are clear.",
          "If you're in central Bath where parking is limited, let me know and I can plan around it. I'm local and know the area well, so I'll find a way to make it work.",
        ],
      },
      {
        heading: "What I'll take care of",
        body: [
          "Don't worry about laying dust sheets, masking edges, or prepping surfaces — that's my job. I bring all my own equipment and materials. I'll protect your floors, furniture, and fittings, and I clean up at the end of every day.",
          "If you have pets or young children, just let me know so I can keep doors closed and paint tins out of reach. I always work cleanly and safely, and I'm used to working in family homes.",
        ],
      },
    ],
  },
  {
    slug: "decorating-in-widcombe-and-twerton-two-bath-neighbourhoods",
    title: "Decorating in Widcombe and Twerton: Two Bath Neighbourhoods, Different Characters",
    metaTitle: "Painter & Decorator Widcombe & Twerton | Bath Neighbourhoods | New Decorating",
    metaDescription:
      "What it's like decorating in Widcombe and Twerton — two Bath neighbourhoods with different character. Painter & decorator in both areas. 25+ years, free quotes.",
    excerpt:
      "Widcombe and Twerton are both part of Bath, but they feel different — and the decorating jobs I do in each reflect that. Here's a local decorator's view of both neighbourhoods.",
    date: "2026-02-12",
    readTime: "4 min read",
    image: "/services/interior.jpg",
    imageAlt: "Interior painting and decorating in Bath — quality finishes for period and modern homes in Widcombe, Twerton and across BANES",
    sections: [
      {
        heading: "Two corners of Bath — and why I'm writing about both",
        body: [
          "Widcombe and Twerton sit on different sides of Bath, and they have different characters. I've been working as a painter and decorator in both for years. Rather than write a generic 'I cover your area' page, I thought it would be more useful to share what I actually see: the types of homes, the kind of jobs people ask for, and the practical side of working in each place.",
          "If you're in Widcombe or Twerton and thinking about redecorating, this might help you know what to expect — and that you're dealing with someone who knows your neighbourhood.",
        ],
      },
      {
        heading: "Widcombe — period housing, village feel, and what that means for decorating",
        body: [
          "Widcombe has a strong village feel even though it's minutes from the city centre. A lot of the housing is period: Georgian and Victorian terraces, cottages, and houses with sash windows, original cornices, and lime plaster. Many are listed or in conservation areas, so the approach has to be sympathetic — the right products, careful preparation, and finishes that suit the building.",
          "I often get asked for heritage colours (Farrow & Ball, Little Greene and similar), woodwork that's been stripped back or needs careful filling and sanding, and exterior work on Bath stone or rendered walls. Parking can be tight on some streets, but I'm used to it; I'll work around your routine and protect your belongings while I'm in.",
        ],
      },
      {
        heading: "Twerton — suburban Bath, mix of housing, and common jobs",
        body: [
          "Twerton is more suburban: a mix of inter-war and post-war semis and terraces, some ex-local authority housing, and a range of sizes and ages. The jobs I do there are often full-room or full-house repaints, exterior work on pebbledash or render, and wallpaper stripping and hanging. Homeowners are often after a fresh, clean finish that will last — good preparation and quality paint matter just as much as in period properties.",
          "Access and parking are usually straightforward, and I'm used to working in family homes where we need to keep disruption to a minimum. I'll give you a clear timeframe and quote so you know what to expect.",
        ],
      },
      {
        heading: "What's the same in both — quality, clarity, and working around you",
        body: [
          "Whether you're in a Georgian terrace in Widcombe or a 1930s semi in Twerton, the basics don't change: proper preparation, the right products for the surface, and a finish that looks good and lasts. I don't cut corners, and I quote honestly so there are no surprises.",
          "I'm happy to work in either area — and across the rest of Bath and BANES. If you're in Widcombe or Twerton and want a painter and decorator who knows the patch, get in touch with what you need and your postcode, and I'll arrange a visit to quote.",
        ],
      },
      {
        heading: "Getting a quote in Widcombe or Twerton",
        body: [
          "Tell me roughly what you need — a single room, a full redecoration, exterior work, or something else — and where you are. I'll confirm I cover your postcode and, where it makes sense, come and quote in person so you get a fixed price and clear advice.",
          "You can reach me via my contact page or by phone. Free quote, no obligation — just straightforward advice from someone who's been decorating in Widcombe, Twerton and across Bath for over 25 years.",
        ],
      },
    ],
  },
  {
    slug: "painter-and-decorator-in-keynsham-what-to-expect",
    title: "Painter & Decorator in Keynsham: What to Expect",
    metaTitle: "Painter & Decorator in Keynsham (BS31) | New Decorating",
    metaDescription:
      "What to expect when hiring a painter and decorator in Keynsham. Interior, exterior, wallpaper. 25+ years, free quotes. Keynsham, Saltford, Bitton.",
    excerpt:
      "Keynsham sits between Bath and Bristol with a mix of period homes and new builds. Here's what to expect when you hire a painter and decorator in Keynsham — and how to get a free quote.",
    date: "2026-02-13",
    readTime: "3 min read",
    image: "/services/interior.jpg",
    imageAlt: "Interior painting and decorating in Keynsham and BANES — quality finishes for local homes",
    sections: [
      {
        heading: "Why use a painter and decorator in Keynsham who knows the area?",
        body: [
          "Keynsham (BS31) has a mix of Victorian and inter-war housing, newer estates, and character homes on the High Street and in the surrounding villages. A decorator who works in Keynsham regularly will know the common property types, access and parking, and how to get the best finish on the surfaces you have.",
          "I've been painting and decorating in Keynsham and the surrounding area for years. I cover Saltford, Whitchurch, Bitton, Charlton and the rest of the BS31 area, and I'm happy to quote in person so you get a fixed price and clear advice.",
        ],
      },
      {
        heading: "What I offer in Keynsham — interior, exterior, wallpaper",
        body: [
          "I offer a full range of painting and decorating: interior painting (walls, ceilings, woodwork, doors), exterior painting (walls, windows, doors, fascias), wallpaper hanging and stripping, and preparation and repair. Whether you need a single room, a full redecoration, or exterior work, I quote each job individually so you know the cost upfront.",
          "I use quality paints from brands I trust and I'm happy to work with paints you've chosen yourself. Every job gets proper preparation so the finish looks good and lasts.",
        ],
      },
      {
        heading: "Getting a free quote in Keynsham",
        body: [
          "Tell me roughly what you need and your postcode (BS31 or nearby). I'll confirm I cover your area and, where it makes sense, come and quote in person. You'll get a fixed price and honest advice on what's needed — no obligation.",
          "You can get in touch via my contact page or by phone. I'll get back to you within a day or two and arrange a visit to quote. Free quote, no obligation — just straightforward service from a painter and decorator who knows Keynsham.",
        ],
      },
    ],
  },
  {
    slug: "painting-and-restoring-wrought-iron-railings-bath",
    title: "Painting and Restoring Wrought Iron Railings in Bath",
    metaTitle: "Wrought Iron Railings Painting & Restoration Bath | New Decorating",
    metaDescription:
      "Before and after: wrought iron railings stripped, treated and repainted in Bath. Exterior metal painting. 25+ years, free quotes. Bath and BANES.",
    excerpt:
      "Weathered, rusty railings stripped, treated and repainted to a clean black finish. Here's what's involved in restoring wrought iron railings — and a before and after from a recent job in Bath.",
    date: "2026-02-16",
    readTime: "4 min read",
    image: "/images/before-after/before-1.png",
    imageAlt: "Weathered wrought iron railings in Bath before restoration — rust, flaking paint and moss",
    sections: [
      {
        heading: "Why wrought iron railings need regular care",
        body: [
          "Wrought iron railings are a common feature in Bath — on steps, balconies, and front boundaries. They look great when they're well maintained, but they take a battering from the weather. Rain, frost, and damp lead to rust; paint flakes and peels; moss and algae can build up in crevices. Left unchecked, the metal corrodes and the finish deteriorates quickly.",
          "The good news is that with proper preparation and the right paint, railings can be restored to look as good as new. The job usually involves stripping or scraping back loose paint, treating rust, priming bare metal, and applying a durable exterior metal finish. Here's a before and after from a recent railing restoration in Bath.",
        ],
      },
      {
        heading: "Before and after — same spot",
        body: [
          "The photos below show the same railings before and after work. In the 'before' shots you can see the extent of the rust, flaking paint, and organic growth. After stripping back the worst of the old finish, treating the rust, and applying a metal primer and top coat, the railings are back to a clean, uniform black that will last for years with minimal upkeep.",
          "I use quality exterior metal paints that are designed to withstand the British weather. If your railings are in a similar state, get in touch for a free quote — I cover Bath, Keynsham, Midsomer Norton and across BANES.",
        ],
      },
      {
        heading: "What's involved in railing restoration",
        body: [
          "Every job is different, but typically I'll scrape or strip loose and flaking paint, remove rust with a wire brush or similar, and treat any remaining rust with a suitable primer. Bare metal gets a metal primer; then two coats of exterior metal paint (gloss or satin, depending on the look you want).",
          "For listed buildings or conservation areas, I use finishes that are in keeping with the property. I can match existing colours or recommend something that will suit the building. If you're not sure what your railings need, I'm happy to take a look and quote — no obligation.",
        ],
      },
      {
        heading: "Get a free quote for your railings",
        body: [
          "If you have wrought iron railings, gates, or other exterior metalwork that need painting or restoring, get in touch. Tell me where you are and what you've got, and I'll arrange to quote. I provide free, no-obligation quotes across Bath and North East Somerset.",
          "You can reach me via my contact page or by phone. I'll give you a clear price and honest advice on what's needed to get your railings looking good again.",
        ],
      },
    ],
  },
];

/** Blog articles sorted by date, newest first (for homepage and blog index). */
export const BLOG_ARTICLES_LATEST_FIRST: BlogArticle[] = [...BLOG_ARTICLES].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export function getBlogSlugs(): string[] {
  return BLOG_ARTICLES.map((a) => a.slug);
}
