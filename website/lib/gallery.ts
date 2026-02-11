/**
 * Gallery image data with descriptive alt text, captions, and project groupings.
 * Each image has SEO-rich alt text based on what the photo actually shows.
 */

export type GalleryCategory = "Interior" | "Exterior";

export interface GalleryImage {
  filename: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  project: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // ─── Period Cottage Interior ───────────────────────────────────
  {
    filename: "629462043_122155289000722526_1248845606546269147_n.jpg",
    alt: "Bathroom painted in dark navy with freestanding bath and exposed oak ceiling beams",
    caption: "Bathroom with dark navy walls and exposed beams",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "627934451_122155307000722526_2472349580598342324_n.jpg",
    alt: "Living room with dark navy feature wall, exposed oak beams and white painted woodwork",
    caption: "Dark navy feature wall with exposed beams and white woodwork",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "629564978_122155306952722526_8031525408943414936_n.jpg",
    alt: "Room painted in dark navy blue with exposed ceiling beams and oak flooring, work in progress",
    caption: "Dark navy walls with exposed beams — in progress",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "628471282_122155291220722526_5737546808165462698_n.jpg",
    alt: "Bedroom painted in sage green with white fitted wardrobes, exposed beam and column radiator",
    caption: "Finished bedroom in sage green with white wardrobes",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "629374977_122155291178722526_1914687581078270321_n.jpg",
    alt: "Sage green bedroom with white wardrobes, exposed oak beam and period window detail",
    caption: "Sage green bedroom — different angle showing window detail",
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
    filename: "628201733_122155291136722526_5892213189796912701_n.jpg",
    alt: "Hallway painted in warm grey with white skirting boards and exposed ceiling beam",
    caption: "Hallway in warm grey — painting in progress",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "629379914_122155306700722526_337082109466497239_n.jpg",
    alt: "Living room with white walls, painted French doors to garden and exposed oak beams",
    caption: "Living room with French doors and exposed beams",
    category: "Interior",
    project: "Period Cottage Interior",
  },
  {
    filename: "627672214_122155306616722526_4716730572802373745_n.jpg",
    alt: "Room with freshly painted white walls, white panelled door and exposed oak beam with floor protection",
    caption: "Freshly painted room with white door and exposed beam",
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
    alt: "Period cottage window with white painted reveal, oak lintel beam and wooden windowsill",
    caption: "Window detail — white painted reveal with oak lintel",
    category: "Interior",
    project: "Period Cottage Interior",
  },

  // ─── Georgian Exterior in Bath ─────────────────────────────────
  {
    filename: "630059059_122155332710722526_2582407613118150274_n.jpg",
    alt: "Freshly painted teal green Georgian front door with fanlight and white stone arch in Bath",
    caption: "Finished Georgian front door in teal green with fanlight",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
  },
  {
    filename: "627887361_122155332668722526_7586386574304965791_n.jpg",
    alt: "Close-up of freshly painted teal green Georgian front door, number 14, with brass letterbox",
    caption: "Front door close-up — fresh teal green gloss finish",
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
    filename: "629407479_122155332578722526_5222098577685886082_n.jpg",
    alt: "Georgian front door being primed and prepared with filler before repainting",
    caption: "Front door preparation — priming and filling",
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
    filename: "629245286_122155302644722526_6999146760767185884_n.jpg",
    alt: "Exterior masonry wall freshly painted white below Bath stone with sash window",
    caption: "Exterior wall painted white below Bath stone",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
  },
  {
    filename: "630335292_122155302560722526_1911363631926864293_n.jpg",
    alt: "Exterior wall preparation with scraping, filling and ladder against Bath stone property",
    caption: "Exterior wall preparation — scraping and filling",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
  },
  {
    filename: "629833267_122155302386722526_3876306642696369141_n.jpg",
    alt: "Rear of Georgian property in Bath with rendered ground floor and stone upper storey",
    caption: "Rear of Georgian property — masonry painting",
    category: "Exterior",
    project: "Georgian Exterior in Bath",
  },

  // ─── Other Exterior ────────────────────────────────────────────
  {
    filename: "628938472_122155300922722526_2815102208189266989_n.jpg",
    alt: "Curved bay window with freshly painted white timber frame on rendered cottage exterior",
    caption: "Curved bay window frame painted white",
    category: "Exterior",
    project: "Exterior Woodwork",
  },
  {
    filename: "630235185_122155293572722526_1066279562379420527_n.jpg",
    alt: "White painted front door with brass door knocker and letterbox on stone property",
    caption: "White front door with brass fittings — freshly painted",
    category: "Exterior",
    project: "Exterior Woodwork",
  },
];

/** All unique categories for the filter bar */
export const GALLERY_CATEGORIES: GalleryCategory[] = ["Interior", "Exterior"];
