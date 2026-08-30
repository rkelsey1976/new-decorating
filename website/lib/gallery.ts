/**
 * Gallery image data with descriptive alt text, captions, and project groupings.
 * Each image has SEO-rich alt text based on what the photo actually shows.
 */

export type GalleryCategory = "Interior" | "Exterior";

export type GalleryTag = "before" | "in progress" | "after";

export interface GalleryImage {
  filename: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  project: string;
  /** Optional location for SEO (e.g. "Bath", "Keynsham") – used in ImageObject schema and can be shown in captions */
  location?: string;
  /**
   * Set for tall shots that must be seen whole. Grid cards are 4:3 by default,
   * which centre-crops a portrait photo and loses roughly a third off each end;
   * "portrait" renders the card at 3:4 so nothing is cut off.
   */
  orientation?: "portrait";
  tag?: GalleryTag;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // ─── Period Cottage Interior ───────────────────────────────────
  {
    filename: "629462043_122155289000722526_1248845606546269147_n.jpg",
    alt: "Walls painted in Farrow & Ball Studio Green No 93 Modern Emulsion.",
    caption: "Bathroom walls painted in Farrow & Ball Studio Green No 93 Modern Emulsion.",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "627934451_122155307000722526_2472349580598342324_n.jpg",
    alt: "Walls finished in Farrow & Ball Hague Blue No 30 Modern Emulsion.",
    caption: "Snug walls finished in Farrow & Ball Hague Blue No 30 Modern Emulsion.",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "629564978_122155306952722526_8031525408943414936_n.jpg",
    alt: "Hague blue walls finished in Little Greene Linen Wash Flat Eggshell.",
    caption: "Hague blue walls finished off with Little Greene Linen Wash Flat Eggshell.",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "629374977_122155291178722526_1914687581078270321_n.jpg",
    alt: "Completed bedroom in Farrow & Ball Treron No 292 Estate Emulsion.",
    caption: "Completed bedroom in Farrow & Ball Treron No 292 Estate Emulsion.",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "628484151_122155297148722526_8348080017307283780_n.jpg",
    alt: "Bedroom walls completed in Farrow & Ball De Nimes No 299 with Little Greene Linen Wash on all woodwork.",
    caption: "Bedroom walls completed in Farrow & Ball De Nimes No 299 with Little Greene Linen Wash on all woodwork.",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "629379914_122155306700722526_337082109466497239_n.jpg",
    alt: "Spacious living room — walls, ceiling and woodwork in Farrow & Ball Pointing No 2003",
    caption: "Spacious living room painted walls, ceiling and woodwork in Farrow & Ball Pointing No 2003",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "627812904_122155306406722526_3373826943454836005_n.jpg",
    alt: "Loft space with white painted tongue-and-groove panelling and exposed oak roof beams",
    caption: "Loft with white tongue-and-groove panelling and oak beams",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "629723315_122155306658722526_1816932433462205853_n.jpg",
    alt: "Window in Farrow & Ball Pointing No 2003; window sill in Sikkens varnish.",
    caption: "Window painted in Farrow & Ball Pointing No 2003; window sill board coated in Sikkens varnish.",
    category: "Interior",
    project: "Period Cottage Interior",
  },

  // ─── Georgian Exterior in Bath ─────────────────────────────────
  {
    filename: "627887361_122155332668722526_7586386574304965791_n.jpg",
    alt: "Front door close-up — fully prepared with Dulux Weathershield primer undercoat applied.",
    caption: "Front door fully prepared and a Dulux Weathershield primer undercoat applied.",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
    location: "Bath",
    tag: "before",
  },
  {
    filename: "628311919_122155332620722526_3146480146707477019_n.jpg",
    alt: "Front door freshly undercoated in Dulux Weathershield Oil Based Exterior Paint.",
    caption: "Front door freshly undercoated in Dulux Weathershield Oil Based Exterior Paint.",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
    location: "Bath",
    tag: "in progress",
  },
  {
    filename: "630059059_122155332710722526_2582407613118150274_n.jpg",
    alt: "Door in Dulux Weathershield Oil Based Exterior High Gloss; porch surround in Sandtex Smooth Masonry White.",
    caption: "Finished front door painted in Dulux Weathershield Oil Based Exterior High Gloss. Porch surround painted in Sandtex Smooth Masonry White.",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
    location: "Bath",
    tag: "after",
  },
  {
    filename: "630335292_122155302560722526_1911363631926864293_n.jpg",
    alt: "Exterior wall preparation with scraping, filling and ladder against Bath stone property",
    caption: "Exterior wall preparation — scraping and filling",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
    location: "Bath",
    tag: "before",
  },
  {
    filename: "629245286_122155302644722526_6999146760767185884_n.jpg",
    alt: "Exterior masonry wall freshly painted white below Bath stone with sash window",
    caption: "Exterior wall painted white below Bath stone",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
    location: "Bath",
    tag: "after",
  },

  // ─── Other Exterior ────────────────────────────────────────────
  {
    filename: "628938472_122155300922722526_2815102208189266989_n.jpg",
    alt: "Curved bay window with freshly painted white timber frame on rendered cottage exterior",
    caption: "Curved bay window frame painted white",
    category: "Exterior",
    project: "Exterior Woodwork",
  },

  // ─── Shepton Mallet exterior ───────────────────────────────────
  {
    filename: "exterior-painting-shepton-mallet.png",
    alt: "House exterior with freshly painted cream masonry walls, white window frames and dark grey front door — Shepton Mallet",
    caption: "Full exterior repaint — masonry, windows and woodwork in Shepton Mallet, Somerset.",
    category: "Exterior",
    project: "Shepton Mallet exterior",
    location: "Shepton Mallet",
  },
  // ─── Georgian Sash Window Restoration, Bath ────────────────────
  {
    filename: "sash-window-rotten-sill-before-bath.webp",
    alt: "Rotten timber window sill with flaking paint on a Georgian sash window before repair, Bath",
    caption: "Before — decayed timber sill with paint failure along its full length.",
    category: "Exterior",
    project: "Georgian Sash Window Restoration",
    location: "Bath",
    tag: "before",
  },
  {
    filename: "sash-window-timber-rot-corner-before-bath.webp",
    alt: "Close-up of wet rot in the corner of a sash window sill before timber repair, Bath",
    caption: "Before — wet rot cut back at the sill corner ready for timber repair.",
    category: "Exterior",
    project: "Georgian Sash Window Restoration",
    location: "Bath",
    tag: "before",
  },
  {
    filename: "sash-windows-flaking-paint-before-bath.webp",
    alt: "Pair of Georgian sash windows with cracked and flaking paintwork before redecoration, Bath",
    caption: "Before — cracked, flaking paintwork across both sashes and the surrounding joinery.",
    category: "Exterior",
    project: "Georgian Sash Window Restoration",
    location: "Bath",
    tag: "before",
  },
  {
    filename: "dormer-sash-window-preparation-bath.webp",
    alt: "Dormer sash window stripped back with rotten timber exposed during preparation, Bath",
    caption: "In progress — paint stripped back and decayed timber exposed at the jambs.",
    category: "Exterior",
    project: "Georgian Sash Window Restoration",
    location: "Bath",
    tag: "in progress",
  },
  {
    filename: "sash-window-repainted-after-bath.webp",
    alt: "Restored Georgian sash window with freshly painted white frame, sill and reveal, Bath",
    caption: "After — sashes, sill and reveal repaired and repainted in white.",
    category: "Exterior",
    project: "Georgian Sash Window Restoration",
    location: "Bath",
    tag: "after",
  },
  {
    filename: "sash-window-sill-repainted-bath.webp",
    alt: "Repaired and repainted timber window sill on a Bath stone property",
    caption: "After — the same sill rebuilt, primed and finished in white.",
    category: "Exterior",
    project: "Georgian Sash Window Restoration",
    location: "Bath",
    tag: "after",
  },
  {
    filename: "dormer-sash-windows-repainted-bath.webp",
    alt: "Dormer with two restored sash windows freshly painted white beneath a slate roof, Bath",
    caption: "After — the completed dormer with both sashes fully restored and repainted.",
    category: "Exterior",
    project: "Georgian Sash Window Restoration",
    location: "Bath",
    tag: "after",
  },

  // ─── Georgian Front Door, Bath ─────────────────────────────────
  {
    filename: "georgian-front-door-before-bath.webp",
    alt: "Georgian panelled front door with tired paintwork before redecoration, Bath",
    caption: "Before — tired black paintwork and a weathered painted stone surround.",
    category: "Exterior",
    project: "Georgian Front Door",
    location: "Bath",
    tag: "before",
  },
  {
    filename: "door-surround-cracked-paint-before-bath.webp",
    alt: "Cracked paint on a dentil cornice and painted stone door surround before preparation, Bath",
    caption: "Before — cracked, blown paint across the cornice and door head.",
    category: "Exterior",
    project: "Georgian Front Door",
    location: "Bath",
    tag: "before",
  },
  {
    filename: "front-door-black-gloss-finish-bath.webp",
    alt: "Georgian front door freshly coated in black high gloss, dust sheets still down, Bath",
    caption: "In progress — the panelled door glossed and still drying, viewed from the hallway.",
    category: "Exterior",
    project: "Georgian Front Door",
    location: "Bath",
    tag: "in progress",
  },
  {
    filename: "georgian-front-door-repainted-bath.webp",
    alt: "Restored Georgian doorway with black gloss door and freshly painted white stone surround, Bath",
    caption: "After — door in black gloss with the surround and cornice repainted in white masonry paint.",
    category: "Exterior",
    project: "Georgian Front Door",
    location: "Bath",
    orientation: "portrait",
    tag: "after",
  },

  // ─── Wrought Iron Gates & Railings ─────────────────────────────
  {
    filename: "wrought-iron-railings-sanded-back.webp",
    alt: "Wrought iron railings sanded back to bare metal before priming, Warleigh",
    caption: "Before — the original black paintwork sanded back to sound metal, ready for primer.",
    category: "Exterior",
    project: "Wrought Iron Gates & Railings",
    location: "Warleigh",
    tag: "before",
  },
  {
    filename: "wrought-iron-gates-rust-inhibiting-primer.webp",
    alt: "Wrought iron driveway gates coated in blue rust-inhibiting primer, Warleigh",
    caption: "In progress — sanded back and coated in blue rust-inhibiting primer before the topcoats.",
    category: "Exterior",
    project: "Wrought Iron Gates & Railings",
    location: "Warleigh",
    tag: "in progress",
  },
  {
    filename: "wrought-iron-gate-repaint-in-progress.webp",
    alt: "Wrought iron gate part-painted, black topcoat going on over blue rust-inhibiting primer",
    caption: "In progress — the top rail cut in, black going on over the primer.",
    category: "Exterior",
    project: "Wrought Iron Gates & Railings",
    location: "Warleigh",
    tag: "in progress",
  },
  {
    filename: "wrought-iron-gate-black-gloss-after.webp",
    alt: "Wrought iron gate with fleur-de-lis finials repainted in black gloss",
    caption: "After — gate finished in black gloss, finials and scrollwork picked out.",
    category: "Exterior",
    project: "Wrought Iron Gates & Railings",
    location: "Warleigh",
    tag: "after",
  },
  {
    filename: "wrought-iron-gate-repainted-black.webp",
    alt: "Repainted black wrought iron garden gate hung against a stone wall",
    caption: "After — the matching gate rehung and finished in black.",
    category: "Exterior",
    project: "Wrought Iron Gates & Railings",
    location: "Warleigh",
    tag: "after",
  },
  {
    filename: "wrought-iron-railings-black-gloss.webp",
    alt: "Close-up of wrought iron railings with spearhead and fleur-de-lis finials in black gloss",
    caption: "After — railings brought back to a clean black gloss finish.",
    category: "Exterior",
    project: "Wrought Iron Gates & Railings",
    location: "Warleigh",
    tag: "after",
  },
];

/** All unique categories for the filter bar */
export const GALLERY_CATEGORIES: GalleryCategory[] = ["Interior", "Exterior"];
