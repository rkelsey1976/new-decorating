"use client";

import { usePathname } from "next/navigation";
import ProfessionalServiceSchema from "@/components/ProfessionalServiceSchema";

export type AreaSchemaSet = {
  localBusiness: string;
  service: string;
  faq: string | null;
};

/**
 * Renders JSON-LD in <head>:
 * - On /area/[slug]: area LocalBusiness + Service + FAQ (so schema is in head for crawlers).
 * - On other pages: main Organisation (ProfessionalService + HousePainter) + WebSite.
 */
export default function HeadSchema({
  orgLocalBusinessSchema,
  orgWebsiteJson,
  areaSchemasJson,
}: {
  orgLocalBusinessSchema: object;
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
      <ProfessionalServiceSchema schema={orgLocalBusinessSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: orgWebsiteJson }}
      />
    </>
  );
}
