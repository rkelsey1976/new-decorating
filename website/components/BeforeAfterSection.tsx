"use client";

import BeforeAfterSlideshow from "@/components/BeforeAfterSlideshow";
import { BEFORE_AFTER_PROJECTS } from "@/lib/before-after";

export default function BeforeAfterSection() {
  return (
    <BeforeAfterSlideshow
      projects={BEFORE_AFTER_PROJECTS}
      sectionLabel="Before & After"
      sectionTitle="Before & after in Bath"
      sectionDescription="Sash windows, front doors and ironwork — the same spot before the work started and after it was finished."
      className="mt-16 sm:mt-20"
    />
  );
}
