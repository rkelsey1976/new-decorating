/**
 * Renders ProfessionalService + HousePainter JSON-LD in a script tag.
 * Reusable anywhere the org schema is needed (e.g. head via HeadSchema).
 */

export default function ProfessionalServiceSchema({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
