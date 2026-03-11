"use client";

import { usePathname } from "next/navigation";

export type AreaSchemaSet = {
  localBusiness: string;
  service: string;
  faq: string | null;
};

/**
 * Renders JSON-LD in <head>:
 * - On /area/[slug]: area LocalBusiness + Service + FAQ (so schema is in head for crawlers).
 * - On other pages: main Organisation (LocalBusiness) + WebSite.
 */
export default function HeadSchema({
  orgLocalBusinessJson,
  orgWebsiteJson,
  areaSchemasJson,
}: {
  orgLocalBusinessJson: string;
  orgWebsiteJson: string;
  areaSchemasJson: string;
}) {
  const pathname = usePathname();
  const areaSchemas: Record<string, AreaSchemaSet> =
    typeof areaSchemasJson === "string" ? JSON.parse(areaSchemasJson) : areaSchemasJson;

  if (pathname?.startsWith("/area/")) {
    const slug = pathname.replace(/^\/area\/?/, "").split("/")[0];
    const area = slug ? areaSchemas[slug] : null;
    if (!area) return null;
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: area.localBusiness }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: area.service }}
        />
        {area.faq && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: area.faq }}
          />
        )}
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgLocalBusinessJson }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgWebsiteJson }}
      />
    </>
  );
}
