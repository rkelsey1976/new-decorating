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

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
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
