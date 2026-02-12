import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import PageHero from "@/components/PageHero";
import BrushStroke from "@/components/BrushStroke";
import { AREAS_COVERED, SERVICE_AREA_NAME } from "@/lib/area";
import AreaMap from "@/components/AreaMap";
import { BLOG_ARTICLES_LATEST_FIRST } from "@/lib/blog";

import { SITE_URL } from "@/lib/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painter & Decorator in Bath | New Decorating",
  description: "Painter & decorator in Bath. Interior, exterior, wallpaper across BANES. Quality finishes, free quotes. 25+ years experience.",
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

/** AggregateRating + individual Review structured data (LocalBusiness required for Google review snippets) */
const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#localbusiness`,
  name: "New Decorating",
  url: SITE_URL,
  description: "Painter & decorator in Bath. Interior, exterior, wallpaper across BANES. Quality finishes, free quotes. 25+ years experience.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    bestRating: 5,
    ratingCount: 4,
    reviewCount: 4,
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
        title="Property Decorator in Bath"
        subtitle="Professional painting and decorating across Bath and North East Somerset. 25+ years experience. Free quotes."
        image="/hero-home.jpg"
        imageAlt="Property decorator in Bath — New Decorating"
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
        </div>
      </PageHero>

      <section className="py-14 sm:py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium text-xs uppercase tracking-[0.2em] text-center mb-8">
            Why choose us
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
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
            {AREAS_COVERED.map((area) => (
              <li
                key={area}
                className="rounded-lg bg-white/15 border border-white/25 px-5 py-3 text-white font-medium shadow-sm backdrop-blur-sm"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-white/80">
            Bath, Keynsham, Midsomer Norton, Radstock and surrounding villages in BANES.
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
            <AreaMap title="" height="280" />
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
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-background text-foreground px-7 py-3.5 text-base font-semibold shadow-lg hover:opacity-95 transition-opacity"
            >
              Contact us
            </Link>
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
