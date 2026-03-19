import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import { META_KEYWORDS } from "@/lib/seo-keywords";

import { DEFAULT_META_TITLE, SITE_URL } from "@/lib/site";
import HeadSchema from "@/components/HeadSchema";
import { getAreaSlugs, getAreaBySlug } from "@/lib/areas-data";
import { getAreaLocalBusinessSchema, getAreaServiceSchema } from "@/lib/areaSchema";
import { getProfessionalServiceSchema, ORGANIZATION_ID } from "@/lib/professionalServiceSchema";

/*
 * Display font options (swap import + variable, then set --font-display in globals.css):
 * - Fraunces: bold serif, character (current)
 * - Syne: bold geometric sans
 * - Outfit: rounded, friendly bold
 * - Archivo: strong editorial sans
 */
const displayFont = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_META_TITLE,
  description:
    "Professional painter & decorator in Bath, Keynsham & BANES. Interior & exterior, wallpaper. 25+ years, fully insured. Free quote. Get in touch.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "New Decorating",
    title: DEFAULT_META_TITLE,
    description:
      "Professional painter & decorator in Bath, Keynsham & BANES. Interior & exterior, wallpaper. 25+ years, fully insured. Free quote. Get in touch.",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "New Decorating — Professional painting and decorating in Bath & BANES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_META_TITLE,
    description:
      "Professional painter & decorator in Bath, Keynsham & BANES. Interior & exterior, wallpaper. 25+ years, fully insured. Free quote. Get in touch.",
    images: ["/og-image.jpg"],
  },
  keywords: [...META_KEYWORDS],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

/** WebSite schema – helps Google understand the site entity and can support sitelinks/brand panel */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "New Decorating",
  url: SITE_URL,
  description: "Painters in Bath. Painter & decorator — professional painting and decorating across BANES. Quality finishes, free quotes. 25+ years experience.",
  publisher: { "@id": ORGANIZATION_ID },
};

/** Area page schemas for head (LocalBusiness + Service + FAQ per slug). Built at load so area JSON-LD is in <head>. */
const areaSchemasForHead: Record<string, { localBusiness: string; service: string; faq: string | null }> = {};
for (const slug of getAreaSlugs()) {
  const area = getAreaBySlug(slug);
  if (!area) continue;
  const localBusiness = JSON.stringify(getAreaLocalBusinessSchema(area, slug));
  const service = JSON.stringify(getAreaServiceSchema(area, slug));
  const faq =
    area.faqs && area.faqs.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: area.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        })
      : null;
  areaSchemasForHead[slug] = { localBusiness, service, faq };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${dmSans.variable}`}>
      <head>
        <HeadSchema
          orgLocalBusinessSchema={getProfessionalServiceSchema()}
          orgWebsiteJson={JSON.stringify(websiteJsonLd)}
          areaSchemasJson={JSON.stringify(areaSchemasForHead)}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <BackToTop />
        <GoogleAnalytics />
        <CookieBanner />
      </body>
    </html>
  );
}
