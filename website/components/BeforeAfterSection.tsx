"use client";

import BeforeAfterSlideshow from "@/components/BeforeAfterSlideshow";
import { BEFORE_AFTER_PROJECTS } from "@/lib/before-after";

export default function BeforeAfterSection() {
  return (
    <BeforeAfterSlideshow
      projects={BEFORE_AFTER_PROJECTS}
      sectionLabel="Before & After"
      sectionTitle="Wrought iron railings, Bath"
      sectionDescription="Weathered, rusty railings stripped, treated and repainted to a clean black finish. Same spot – before and after."
      className="mt-16 sm:mt-20"
    />
  );
}
