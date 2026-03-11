"use client";

import { usePathname } from "next/navigation";

/**
 * Renders the main Organisation (LocalBusiness) + WebSite JSON-LD only on non-area pages.
 * On /area/[slug] we omit these so the snippet shows the area-specific LocalBusiness
 * ("Painter and Decorator in [Area]") instead of the generic "New Decorating".
 */
export default function ConditionalOrgSchema({
  localBusinessJson,
  websiteJson,
}: {
  localBusinessJson: string;
  websiteJson: string;
}) {
  const pathname = usePathname();
  if (pathname?.startsWith("/area/")) {
    return null;
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: localBusinessJson }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteJson }}
      />
    </>
  );
}
