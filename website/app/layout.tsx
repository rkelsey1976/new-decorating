import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import { META_KEYWORDS } from "@/lib/seo-keywords";

import { DEFAULT_META_TITLE, GBP_MAPS_URL, SITE_URL } from "@/lib/site";

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

/** Canonical entity ID – use this same @id everywhere so Google merges all references into one entity */
const ORGANIZATION_ID = `${SITE_URL}#organization`;

/** LocalBusiness + ProfessionalService – PaintingContractor is specific; ProfessionalService boosts professional-service rich results */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["PaintingContractor", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: "New Decorating",
  description:
    "Painters in Bath. Painter & decorator — interior, exterior, wallpaper across BANES. Fully insured, free quotes. 25+ years experience.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/hero.jpg`,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Bath" },
    { "@type": "City", name: "Keynsham" },
    { "@type": "City", name: "Midsomer Norton" },
    { "@type": "City", name: "Radstock" },
    { "@type": "City", name: "Trowbridge" },
    { "@type": "City", name: "Chippenham" },
    { "@type": "City", name: "Melksham" },
    { "@type": "City", name: "Bradford on Avon" },
    { "@type": "City", name: "Frome" },
    { "@type": "AdministrativeArea", name: "Bath and North East Somerset" },
    { "@type": "AdministrativeArea", name: "Wiltshire" },
    { "@type": "AdministrativeArea", name: "Somerset" },
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
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "16:30" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61571675780751",
    GBP_MAPS_URL,
  ],
  /** Explicitly tell Google we have a map (our Google Maps listing) – helps entity merge and local SEO */
  hasMap: GBP_MAPS_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting & Decorating Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wallpaper hanging" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preparation & repair" } },
    ],
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

/** Homepage FAQPage structured data (must match FAQ component text exactly) */
const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I get a quote?", acceptedAnswer: { "@type": "Answer", text: "Get in touch via my contact page or Facebook. Tell me roughly what you need (e.g. one room, full house, interior or exterior) and your location. I'll arrange a visit to quote in person where needed." } },
    { "@type": "Question", name: "Do you provide the paint and materials?", acceptedAnswer: { "@type": "Answer", text: "I can either supply materials as part of the job or work with paint and materials you provide. I'm happy to advise on what to buy if you'd prefer to source it yourself." } },
    { "@type": "Question", name: "How long does a typical job take?", acceptedAnswer: { "@type": "Answer", text: "It depends on the size of the project. A single room might take a few days; a full interior can take several weeks. I'll give you a timeframe when I quote and work cleanly to minimise disruption." } },
    { "@type": "Question", name: "What areas do you cover?", acceptedAnswer: { "@type": "Answer", text: "I work across Bath and North East Somerset (BANES), including Bath, Keynsham, Midsomer Norton, Radstock and surrounding villages. Get in touch with your postcode and I'll confirm I cover your area." } },
    { "@type": "Question", name: "Do you do small jobs?", acceptedAnswer: { "@type": "Answer", text: "Yes. Whether it's a single room, a touch-up, or a full redecoration, I'm happy to quote. No job is too small." } },
  ],
};

/** AggregateRating + reviews – same @id as layout so Google merges into one entity */
const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#organization`,
  name: "New Decorating",
  url: SITE_URL,
  description: "Painters in Bath. Painter & decorator — interior, exterior, wallpaper across BANES. Quality finishes, free quotes. 25+ years experience.",
  aggregateRating: { "@type": "AggregateRating", ratingValue: 5, bestRating: 5, ratingCount: 7, reviewCount: 7 },
  review: [
    { "@type": "Review", author: { "@type": "Person", name: "Steve Frankham" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, reviewBody: "New Decorating has worked on a couple of projects for me, some exterior work which needed a lot of preparation before painting. I was kept informed of what was being done all through the stages. Also some interior work where I again cannot fault the work. Jay tidy at all times. In general a good job done, really pleased and 100% will be using him again." },
    { "@type": "Review", author: { "@type": "Person", name: "Mike Joe Coates" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, reviewBody: "Fantastic painter and decorator. Jay got back to me straight away with a sensible price. The job was to decorate my living room and hallway. He arrived on time every day, everything was covered in dust sheets, there was no mess at the end of the day. All done in one week, and what a great job he did. I would highly recommend Jay with any decorating that needs to be done." },
    { "@type": "Review", author: { "@type": "Person", name: "Cam New" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, reviewBody: "Highly recommend. New Decorating paint all my bespoke units, top quality finish and fast turnover." },
    { "@type": "Review", author: { "@type": "Person", name: "Andrew Scappaticci" }, reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 }, reviewBody: "I highly recommend New Decorating having worked with him on various projects. Jay completes his work to a very high standard and always hits his deadlines. Very professional, clean and tidy and very competitive with his prices. Always happy to advise you and answer questions before any work is started. Overall 5 star service." },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
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
