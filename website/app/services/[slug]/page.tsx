import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { SERVICE_PAGES, getServiceBySlug, getServiceSlugs } from "@/lib/services";
import { AREA_PAGES } from "@/lib/areas-data";

import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

import { SITE_URL } from "@/lib/site";
const PHONE_NUMBER = "07717 772881";
const PHONE_HREF = "tel:+447717772881";

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    provider: {
      "@type": "PaintingContractor",
      name: "New Decorating",
      url: SITE_URL,
      telephone: "+447717772881",
      areaServed: { "@type": "AdministrativeArea", name: "Bath and North East Somerset" },
    },
    areaServed: { "@type": "AdministrativeArea", name: "Bath and North East Somerset" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const otherServices = SERVICE_PAGES.filter((s) => s.slug !== service.slug);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <PageHero
        categoryLabel="Professional Service"
        title={service.title}
        subtitle={service.heroSubtitle}
        image={service.image}
        imageAlt={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        canonicalPath={`/services/${service.slug}`}
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-6 py-3 text-sm font-semibold shadow-lg hover:bg-white/95 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call For Free Quote
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Send A Message
          </Link>
        </div>
      </PageHero>

      {/* Main content: intro + image */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                {service.title} in Bath
              </h2>
              <p className="mt-6 text-muted leading-relaxed">{service.intro}</p>
              <p className="mt-4 text-muted leading-relaxed">{service.extendedIntro}</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image2}
                alt={`${service.title} by New Decorating in Bath`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Checklist */}
      <section className="py-16 sm:py-24 bg-white border-y border-black/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                What&rsquo;s Included
              </h2>
              <ul className="mt-8 space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.heading}</h3>
                      <p className="text-muted text-sm leading-relaxed mt-0.5">{benefit.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process steps */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                My process
              </h2>
              <div className="mt-8 space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white font-display font-bold flex items-center justify-center text-lg">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{step.step}</h3>
                      <p className="text-muted text-sm leading-relaxed mt-0.5">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Accordion style */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center tracking-tight">
            Common Questions About {service.title}
          </h2>
          <div className="mt-10 space-y-4">
            {service.faq.map((item, i) => (
              <details key={i} className="group rounded-2xl border border-black/8 bg-white shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-display text-lg font-semibold text-foreground">
                  {item.question}
                  <span className="ml-4 flex-shrink-0 text-accent transition-transform group-open:rotate-45">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-muted leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with trust signals */}
      <section className="py-16 sm:py-20 bg-accent text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
              Get A Free Quote
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto leading-relaxed">
              Call us or send a message for a free, no-obligation quote on your {service.title.toLowerCase()} project.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-7 py-3.5 text-base font-semibold shadow-lg hover:bg-white/95 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_NUMBER}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { label: "Fully insured" },
              { label: "Free no-obligation quotes" },
              { label: "25+ years experience" },
              { label: "Bath & surrounding areas" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-white/90">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            Related Services
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex items-center justify-between rounded-xl border border-black/8 bg-white p-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {other.title}
                </span>
                <span className="text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas section */}
      <section className="py-16 sm:py-24 bg-white border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            {service.title} Across Bath & Beyond
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-2xl">
            I provide {service.title.toLowerCase()} services across Bath and all surrounding areas.
            Whether you are in the city centre or a nearby town, I can help.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {AREA_PAGES.map((area) => (
              <Link
                key={area.slug}
                href={`/area/${area.slug}`}
                className="inline-flex items-center gap-1 rounded-lg border border-black/8 bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-accent/30 hover:text-accent transition-all"
              >
                {area.name}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          <Link
            href="/area"
            className="mt-6 inline-flex items-center gap-2 text-accent font-medium hover:text-accent-soft transition-colors text-sm"
          >
            View all areas I cover
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-accent text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Ready For Your {service.title} Project?
          </h2>
          <p className="mt-3 text-white/80">
            Get a free, no-obligation quote within 24 hours
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-7 py-3.5 text-base font-semibold shadow-lg hover:bg-white/95 transition-all"
            >
              Call {PHONE_NUMBER}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/40 px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
