import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import PageHero from "@/components/PageHero";
import BrushStroke from "@/components/BrushStroke";
import { AREAS_COVERED, SERVICE_AREA_NAME } from "@/lib/area";
import { AREA_PAGES } from "@/lib/areas-data";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import { BLOG_ARTICLES_LATEST_FIRST } from "@/lib/blog";

import { DEFAULT_META_TITLE, GBP_MAPS_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, SITE_URL } from "@/lib/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: DEFAULT_META_TITLE,
  description:
    "Professional painter & decorator in Bath, Keynsham & BANES. Interior & exterior, wallpaper. 25+ years, fully insured. Free quote. Get in touch.",
  alternates: { canonical: "/" },
};

/** FAQPage structured data (must match FAQ component text exactly) */
const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Get in touch via my contact page or Facebook. Tell me roughly what you need (e.g. one room, full house, interior or exterior) and your location. I'll arrange a visit to quote in person where needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide the paint and materials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I can either supply materials as part of the job or work with paint and materials you provide. I'm happy to advise on what to buy if you'd prefer to source it yourself.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical job take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the size of the project. A single room might take a few days; a full interior can take several weeks. I'll give you a timeframe when I quote and work cleanly to minimise disruption.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I work across Bath and North East Somerset (BANES), including Bath, Keynsham, Midsomer Norton, Radstock and surrounding villages. Get in touch with your postcode and I'll confirm I cover your area.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do small jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Whether it's a single room, a touch-up, or a full redecoration, I'm happy to quote. No job is too small.",
      },
    },
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    bestRating: 5,
    ratingCount: 7,
    reviewCount: 7,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Steve Frankham" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "New Decorating has worked on a couple of projects for me, some exterior work which needed a lot of preparation before painting. I was kept informed of what was being done all through the stages. Also some interior work where I again cannot fault the work. Jay tidy at all times. In general a good job done, really pleased and 100% will be using him again.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mike Joe Coates" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Fantastic painter and decorator. Jay got back to me straight away with a sensible price. The job was to decorate my living room and hallway. He arrived on time every day, everything was covered in dust sheets, there was no mess at the end of the day. All done in one week, and what a great job he did. I would highly recommend Jay with any decorating that needs to be done.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Cam New" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Highly recommend. New Decorating paint all my bespoke units, top quality finish and fast turnover.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Andrew Scappaticci" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "I highly recommend New Decorating having worked with him on various projects. Jay completes his work to a very high standard and always hits his deadlines. Very professional, clean and tidy and very competitive with his prices. Always happy to advise you and answer questions before any work is started. Overall 5 star service.",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <PageHero
        locationLine="Bath, Keynsham, Midsomer Norton, Radstock & BANES"
        title="Painter & Decorator for Your Properties in Bath"
        subtitle="Professional painting and decorating across Bath, Keynsham and North East Somerset. 25+ years experience. Free quotes."
        image="/hero-home.jpg"
        imageAlt="Painters in Bath — painter and decorator for your properties — New Decorating"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-6 py-3 text-sm font-semibold shadow-lg hover:bg-white/95 transition-all"
          >
            Get A Free Quote
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            View my work
          </Link>
          <a
            href="tel:+447717772881"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            aria-label="Call for a free quote"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call for a free quote
          </a>
        </div>
      </PageHero>

      <section className="py-14 sm:py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium text-xs uppercase tracking-[0.2em] text-center mb-8">
            Why choose us
          </p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
            <a
              href={GBP_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-accent transition-colors"
              aria-label="See our Google reviews"
            >
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: GOOGLE_RATING }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span>Rated {GOOGLE_RATING} stars on Google</span>
              <span className="text-muted font-normal">({GOOGLE_REVIEW_COUNT} reviews)</span>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
            <div className="rounded-2xl bg-accent px-6 py-7 sm:py-9 shadow-xl border border-accent-soft/20">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 text-white" aria-hidden>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">25+</p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-widest">Years experience</p>
            </div>
            <div className="rounded-2xl border border-black/8 bg-white px-6 py-7 sm:py-9 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-200">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 text-accent" aria-hidden>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <p className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-accent tracking-tight">Fully</p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-muted uppercase tracking-widest">Insured</p>
            </div>
            <div className="rounded-2xl border border-black/8 bg-white px-6 py-7 sm:py-9 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-200">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 text-accent" aria-hidden>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <p className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-accent tracking-tight">Free</p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-muted uppercase tracking-widest">Quotes</p>
            </div>
            <div className="rounded-2xl border border-black/8 bg-white px-6 py-7 sm:py-9 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-200">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 text-accent" aria-hidden>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <p className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-accent tracking-tight">Local</p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-muted uppercase tracking-widest">Bath & BANES</p>
            </div>
            <div className="rounded-2xl border border-black/8 bg-white px-6 py-7 sm:py-9 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-200">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 text-accent" aria-hidden>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              <p className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-accent tracking-tight">Tidy</p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-muted uppercase tracking-widest">Clean & tidy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-sm font-medium uppercase tracking-[0.2em] text-center">
            My services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center mt-2 tracking-tight">
            What I offer
          </h2>
          <p className="mt-4 text-white/90 text-center max-w-2xl mx-auto leading-relaxed">
            Professional painting and decorating services tailored to your home and budget.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interior painting",
                description: "Walls, ceilings, woodwork — I deliver a flawless finish with quality paints and careful preparation.",
                image: "/services/interior.jpg",
                alt: "Interior painting and decorating",
              },
              {
                title: "Exterior painting",
                description: "Protect and refresh the outside of your property with weather-resistant finishes.",
                image: "/services/exterior.png",
                alt: "Exterior painting",
              },
              {
                title: "Wallpaper & feature walls",
                description: "From subtle textures to bold patterns, I help you create the look you want.",
                image: "/services/wallpaper.jpg",
                alt: "Wallpaper and feature walls",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white overflow-hidden shadow-xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link
              href="/services"
              className="inline-flex items-center text-white font-medium hover:text-white/90 transition-colors underline underline-offset-2"
            >
              See all services →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center text-white/80 font-medium hover:text-white transition-colors underline underline-offset-2"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-accent/90 text-white border-t border-accent-soft/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-sm font-medium uppercase tracking-[0.2em] text-center">
            Service area
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center mt-2 tracking-tight">
            Areas I cover
          </h2>
          <p className="mt-4 text-white/90 text-center max-w-2xl mx-auto leading-relaxed">
            I work across {SERVICE_AREA_NAME}. Get in touch with your postcode to confirm I cover your area.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6" aria-label="Service areas">
            {AREAS_COVERED.map((area) => {
              const areaPage = AREA_PAGES.find((a) => a.name === area);
              return (
                <li
                  key={area}
                  className="rounded-lg bg-white/15 border border-white/25 px-5 py-3 text-white font-medium shadow-sm backdrop-blur-sm"
                >
                  {areaPage ? (
                    <Link
                      href={`/area/${areaPage.slug}`}
                      className="text-white hover:text-white/90 transition-colors underline underline-offset-2"
                    >
                      {area}
                    </Link>
                  ) : (
                    area
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-center text-sm text-white/80">
            <Link href="/area/bath" className="text-white/90 hover:text-white underline underline-offset-1">Bath</Link>
            ,{" "}
            <Link href="/area/keynsham" className="text-white/90 hover:text-white underline underline-offset-1">Keynsham</Link>
            ,{" "}
            <Link href="/area/midsomer-norton" className="text-white/90 hover:text-white underline underline-offset-1">Midsomer Norton</Link>
            ,{" "}
            <Link href="/area/radstock" className="text-white/90 hover:text-white underline underline-offset-1">Radstock</Link>
            {" "}and surrounding villages in BANES.
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/area"
              className="inline-flex items-center text-white font-medium hover:text-white/90 transition-colors underline underline-offset-2 text-sm"
            >
              View all areas I cover →
            </Link>
          </div>
          <div className="mt-10 max-w-4xl mx-auto">
            <GoogleMapEmbed title="" height="500" />
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ />

      {/* Blog preview */}
      <section className="relative pt-20 sm:pt-28 pb-16 sm:pb-24 bg-accent text-white">
        <BrushStroke position="top" fill="var(--background)" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-sm font-medium uppercase tracking-[0.2em] text-center">
            Tips & advice
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center mt-2 tracking-tight">
            From the blog
          </h2>
          <p className="mt-4 text-white/90 text-center max-w-2xl mx-auto leading-relaxed">
            Practical decorating advice from 25+ years of experience.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_ARTICLES_LATEST_FIRST.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-2xl border border-black/8 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-accent text-sm font-medium">
                    Read more <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-white font-medium hover:text-white/80 transition-colors underline underline-offset-2"
            >
              See all articles →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/hero.jpg)" }}
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to refresh your home?
          </h2>
          <p className="mt-5 opacity-90 max-w-xl mx-auto leading-relaxed">
            Get in touch for a free, no-obligation quote. I serve Bath, Keynsham, Midsomer Norton, Radstock and across BANES.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-background text-foreground px-7 py-3.5 text-base font-semibold shadow-lg hover:opacity-95 transition-opacity"
            >
              Contact us
            </Link>
            <a
              href="tel:+447717772881"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-background/40 px-7 py-3.5 text-base font-semibold hover:bg-background/10 transition-colors"
              aria-label="Call for a free quote"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 07717 772881
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571675780751"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-background/40 px-7 py-3.5 text-base font-semibold hover:bg-background/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              Follow us on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
