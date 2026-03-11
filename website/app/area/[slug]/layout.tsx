import { getAreaBySlug } from "@/lib/areas-data";
import { getAreaLocalBusinessSchema, getAreaServiceSchema } from "@/lib/areaSchema";
import { notFound } from "next/navigation";

interface AreaLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

/**
 * Area segment layout: outputs LocalBusiness + FAQPage JSON-LD in the document
 * so it appears at the top of the segment (early in the body for crawlers).
 * Root layout puts site-wide schema in <head>; per-area schema is here.
 */
export default async function AreaSlugLayout({ children, params }: AreaLayoutProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const localBusinessJsonLd = getAreaLocalBusinessSchema(area, slug);
  const serviceJsonLd = getAreaServiceSchema(area, slug);
  const faqJsonLd =
    area.faqs && area.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: area.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        data-new-decorating-area-ld
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        data-new-decorating-area-ld
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {children}
    </>
  );
}
