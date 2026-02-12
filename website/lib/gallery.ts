/**
 * Gallery image data with descriptive alt text, captions, and project groupings.
 * Each image has SEO-rich alt text based on what the photo actually shows.
 */

export type GalleryCategory = "Interior" | "Exterior";

export type GalleryTag = "before" | "after";

export interface GalleryImage {
  filename: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  project: string;
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
    alt: "Bedroom painted in dark grey-blue with white wainscoting panelling and oak cottage door",
    caption: "Dark grey-blue bedroom with white wainscoting and oak door",
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
    filename: "630059059_122155332710722526_2582407613118150274_n.jpg",
    alt: "Door in Dulux Weathershield Oil Based Exterior High Gloss; porch surround in Sandtex Smooth Masonry White.",
    caption: "Finished front door painted in Dulux Weathershield Oil Based Exterior High Gloss. Porch surround painted in Sandtex Smooth Masonry White.",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
  },
  {
    filename: "627887361_122155332668722526_7586386574304965791_n.jpg",
    alt: "Front door close-up — fully prepared with Dulux Weathershield primer undercoat applied.",
    caption: "Front door close-up — fresh teal green gloss finish. Front door fully prepared and a Dulux Weathershield primer undercoat applied.",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
  },
  {
    filename: "629274009_122155332536722526_2119365845528221913_n.jpg",
    alt: "Georgian stone entrance arch with fanlight window and door being prepared for painting in Bath",
    caption: "Georgian entrance arch — door preparation before painting",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
  },
  {
    filename: "628311919_122155332620722526_3146480146707477019_n.jpg",
    alt: "Interior view of freshly painted teal green Georgian front door with brass letterbox",
    caption: "Front door freshly painted — view from inside",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
  },
  {
    filename: "630335292_122155302560722526_1911363631926864293_n.jpg",
    alt: "Exterior wall preparation with scraping, filling and ladder against Bath stone property",
    caption: "Exterior wall preparation — scraping and filling",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
    tag: "before",
  },
  {
    filename: "629245286_122155302644722526_6999146760767185884_n.jpg",
    alt: "Exterior masonry wall freshly painted white below Bath stone with sash window",
    caption: "Exterior wall painted white below Bath stone",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
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
];

/** All unique categories for the filter bar */
export const GALLERY_CATEGORIES: GalleryCategory[] = ["Interior", "Exterior"];
