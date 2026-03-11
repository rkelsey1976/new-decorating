import { getAreaBySlug } from "@/lib/areas-data";
import { notFound } from "next/navigation";

interface AreaLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

/**
 * Area segment layout. Area-specific JSON-LD (LocalBusiness, Service, FAQ) is
 * output in <head> by HeadSchema in the root layout, so we only render children here.
 */
export default async function AreaSlugLayout({ children, params }: AreaLayoutProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return <>{children}</>;
}
