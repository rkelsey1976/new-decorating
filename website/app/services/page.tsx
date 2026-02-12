import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SERVICE_PAGES } from "@/lib/services";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Painter & Decorator Bath | New Decorating",
  description:
    "Our services – painter & decorator Bath. Interior, exterior, wallpaper, decorative finishes. Quality work, free quotes. BANES. 25+ years.",
  alternates: { canonical: "/services" },
};

import { SITE_URL } from "@/lib/site";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Interior painting",
        description:
          "Full interior painting including walls, ceilings, skirting boards, doors, and architraves. We use quality paints and thorough preparation for a lasting, professional finish.",
        provider: { "@type": "PaintingContractor", name: "New Decorating", url: SITE_URL },
        areaServed: { "@type": "AdministrativeArea", name: "Bath and North East Somerset" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Exterior painting",
        description:
          "Exterior walls, windows, doors, and fascias. We use weather-resistant products and techniques suited to UK conditions to protect and refresh your property.",
        provider: { "@type": "PaintingContractor", name: "New Decorating", url: SITE_URL },
        areaServed: { "@type": "AdministrativeArea", name: "Bath and North East Somerset" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Wallpaper hanging",
        description:
          "Standard and feature wallpaper, including textured and patterned designs. We handle preparation and finishing for a seamless result.",
        provider: { "@type": "PaintingContractor", name: "New Decorating", url: SITE_URL },
        areaServed: { "@type": "AdministrativeArea", name: "Bath and North East Somerset" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Decorative finishes",
        description:
          "Feature walls, colour washing, and other decorative techniques to give your rooms character and style.",
        provider: { "@type": "PaintingContractor", name: "New Decorating", url: SITE_URL },
        areaServed: { "@type": "AdministrativeArea", name: "Bath and North East Somerset" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Preparation & repair",
        description:
          "Filling, sanding, and making good before painting or papering so your finish looks its best and lasts longer.",
        provider: { "@type": "PaintingContractor", name: "New Decorating", url: SITE_URL },
        areaServed: { "@type": "AdministrativeArea", name: "Bath and North East Somerset" },
      },
    },
  ],
};

const services = SERVICE_PAGES.map((sp) => ({
  slug: sp.slug,
  title: sp.title,
  description: sp.heroSubtitle,
  image: sp.image,
}));

export default function ServicesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        locationLine="Bath, Keynsham, Midsomer Norton, Radstock & BANES"
        title="Our services"
        subtitle="We offer a full range of painting and decorating services for homes across Bath and North East Somerset (BANES). Every job is quoted individually so you know the cost upfront."
        image="/hero-services.jpg"
        imageAlt="Interior painting and decorating"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        canonicalPath="/services"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-6 py-3 text-sm font-semibold shadow-lg hover:bg-white/95 transition-all"
          >
            Get A Free Quote
          </Link>
          <a
            href="tel:+447717772881"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Call 07717 772881
          </a>
        </div>
      </PageHero>
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="mt-14 space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`flex flex-col gap-6 sm:gap-8 ${index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"}`}
            >
              <div className="relative w-full sm:w-[45%] aspect-[4/3] rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 text-accent font-display font-semibold flex items-center justify-center text-lg mb-2">
                  {index + 1}
                </span>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-accent font-medium text-sm hover:text-accent-soft transition-colors"
                >
                  Learn more
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-20 sm:mt-24 relative overflow-hidden rounded-2xl bg-accent text-white shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent-soft/80 opacity-90" aria-hidden />
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 text-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-white mb-6" aria-hidden>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
              Ready for a free quote?
            </h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto leading-relaxed">
              Contact us to discuss your project and arrange a free, no-obligation quote. We&apos;re happy to advise on colours, finishes, and timing.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-7 py-3.5 text-base font-semibold shadow-lg hover:bg-white/95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              Get in touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
