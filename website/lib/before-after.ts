/**
 * Before & After project data for the gallery page.
 * Images live in public/images/before-after/ — copy your before/after photos there and name as below.
 */

/** Single before/after project for the reusable slideshow */
export interface BeforeAfterProject {
  id: string;
  /** Card/slide title (e.g. "Wrought iron railings") */
  title?: string;
  /** Short description shown under the title */
  description?: string;
  location?: string;
  /** Main "before" image (left panel) */
  beforeMain: string;
  /** Main "after" image (right panel) */
  afterMain: string;
  /** Alt text for main before image */
  beforeMainAlt?: string;
  /** Alt text for main after image */
  afterMainAlt?: string;
  /** Optional extra before images in the grid */
  beforeGrid: string[];
  /** Optional extra after images in the grid */
  afterGrid: string[];
  /** Alt text for beforeGrid images (by index) */
  beforeGridAlt?: string[];
  /** Alt text for afterGrid images (by index) */
  afterGridAlt?: string[];
}

const IMG = "/images/before-after";
/** Project photos that also appear in the main gallery grid */
const GAL = "/gallery";

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: "sash-windows-bath",
    title: "Georgian sash windows",
    description:
      "Decayed sills cut out and rebuilt, paintwork stripped back to sound timber, then primed, undercoated and finished.",
    location: "Bath",
    beforeMain: `${GAL}/sash-window-rotten-sill-before-bath.webp`,
    afterMain: `${GAL}/sash-window-sill-repainted-bath.webp`,
    beforeMainAlt: "Rotten timber sill with flaking paint on a Georgian sash window before repair, Bath",
    afterMainAlt: "The same window sill rebuilt, primed and repainted in white, Bath",
    beforeGrid: [`${GAL}/dormer-sash-window-preparation-bath.webp`],
    afterGrid: [`${GAL}/dormer-sash-windows-repainted-bath.webp`],
    beforeGridAlt: ["Dormer sash window stripped back with decayed timber exposed, Bath"],
    afterGridAlt: ["Completed dormer with both sash windows restored and repainted white, Bath"],
  },
  {
    id: "front-door-bath",
    title: "Georgian front door",
    description:
      "Door and painted stone surround prepared back to a sound edge, then finished in black high gloss and white masonry paint.",
    location: "Bath",
    beforeMain: `${GAL}/georgian-front-door-before-bath.webp`,
    afterMain: `${GAL}/georgian-front-door-repainted-bath.webp`,
    beforeMainAlt: "Georgian panelled front door with tired paintwork before redecoration, Bath",
    afterMainAlt: "Restored Georgian doorway with black gloss door and freshly painted white surround, Bath",
    beforeGrid: [`${GAL}/door-surround-cracked-paint-before-bath.webp`],
    afterGrid: [`${GAL}/front-door-black-gloss-finish-bath.webp`],
    beforeGridAlt: ["Cracked, blown paint on the dentil cornice and door head before preparation, Bath"],
    afterGridAlt: ["Panelled front door finished in black high gloss, Bath"],
  },
  {
    id: "gates-warleigh",
    title: "Wrought iron gates",
    description:
      "Driveway gates taken back from tired light blue, treated and repainted to a deep black gloss.",
    location: "Warleigh",
    beforeMain: `${GAL}/wrought-iron-gates-before-repaint.webp`,
    afterMain: `${GAL}/wrought-iron-gate-black-gloss-after.webp`,
    beforeMainAlt: "Pair of wrought iron driveway gates in faded light blue before repainting, Warleigh",
    afterMainAlt: "Wrought iron gate repainted in black gloss with fleur-de-lis finials, Warleigh",
    beforeGrid: [`${GAL}/wrought-iron-gate-repaint-in-progress.webp`],
    afterGrid: [`${GAL}/wrought-iron-railings-black-gloss.webp`],
    beforeGridAlt: ["Wrought iron gate part-repainted, black going on over the original blue, Warleigh"],
    afterGridAlt: ["Wrought iron railings finished in black gloss, Warleigh"],
  },
  {
    id: "railings-bath",
    title: "Wrought iron railings",
    description: "Weathered, rusty railings stripped, treated and repainted to a clean black finish.",
    location: "Bath",
    beforeMain: `${IMG}/before-1.png`,
    afterMain: `${IMG}/after-1.png`,
    beforeMainAlt: "Weathered metal railing before restoration – rust, flaking paint, Bath",
    afterMainAlt: "Stone building and railed area after restoration – Bath",
    beforeGrid: [`${IMG}/before-2.png`],
    afterGrid: [`${IMG}/after-2.png`],
    beforeGridAlt: ["Faded red and black railings before – Bath"],
    afterGridAlt: ["Restored railing – glossy black finial, Bath"],
  },
];
