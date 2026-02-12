import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import { META_KEYWORDS } from "@/lib/seo-keywords";

import { SITE_URL } from "@/lib/site";

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
  title: "Painter & Decorator in Bath | New Decorating – BANES",
  description:
    "Painter & decorator in Bath. Professional painting and decorating across BANES. Quality finishes, free quotes. 25+ years experience.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "New Decorating",
    title: "Painter & Decorator in Bath | New Decorating – BANES",
    description:
      "Painter & decorator in Bath. Quality finishes, free quotes. 25+ years experience. Bath, Keynsham, Midsomer Norton, Radstock.",
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
    title: "Painter & Decorator in Bath | New Decorating – BANES",
    description:
      "Painter & decorator in Bath. Quality finishes, free quotes. 25+ years. Bath, Keynsham, Midsomer Norton, Radstock.",
    images: ["/og-image.jpg"],
  },
  keywords: [...META_KEYWORDS],
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PaintingContractor",
  name: "New Decorating",
  description:
    "Painter & decorator in Bath. Interior, exterior, wallpaper across BANES. Fully insured, free quotes. 25+ years experience.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/hero.jpg`,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Bath" },
    { "@type": "City", name: "Keynsham" },
    { "@type": "City", name: "Midsomer Norton" },
    { "@type": "City", name: "Radstock" },
    { "@type": "AdministrativeArea", name: "Bath and North East Somerset" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3811,
    longitude: -2.359,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bath",
    addressRegion: "Bath and North East Somerset",
    addressCountry: "GB",
  },
  telephone: "+447717772881",
  sameAs: ["https://www.facebook.com/profile.php?id=61571675780751"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting & Decorating Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wallpaper hanging" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Decorative finishes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preparation & repair" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${dmSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
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
