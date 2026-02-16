import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

import { DEFAULT_META_TITLE } from "@/lib/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Jason New | ${DEFAULT_META_TITLE}`,
  description:
    "About New Decorating – painter & decorator in Bath. Quality painting and decorating across BANES. Fair prices, free quotes. 25+ years.",
  alternates: { canonical: "/about" },
};

const ABOUT_IMAGES = [
  { src: "/services/interior.jpg", alt: "Interior painting and decorating", label: "Interior", href: "/services/interior-painting" },
  { src: "/services/preparation.jpg", alt: "Preparation and quality finish", label: "Preparation", href: "/services/preparation-and-repair" },
  { src: "/services/exterior.png", alt: "Exterior painting", label: "Exterior", href: "/services/exterior-painting" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        locationLine="Bath, Keynsham, Midsomer Norton, Radstock & BANES"
        title="About Jason New"
        subtitle="I'm a local painting and decorating business based in Bath, serving homes across Bath and North East Somerset (BANES)."
        image="/hero-about.jpg"
        imageAlt="Professional painting and decorating work"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        canonicalPath="/about"
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-accent px-6 py-3 text-sm font-semibold shadow-lg hover:bg-white/95 transition-all"
          >
            Get a free quote
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            View my work
          </Link>
        </div>
      </PageHero>

      {/* Intro: image + text */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/jason-working.jpg"
                alt="Jason New – property decorator at work in Bath"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-accent/20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                <p className="text-white font-display text-lg font-semibold">25+ years of experience</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent text-sm font-medium uppercase tracking-[0.2em]">My approach</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mt-2 tracking-tight">
                Quality finishes, on time and at a fair price
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  With over 25 years of experience in painting and decorating, my aim is simple: to deliver a high-quality finish, on time and at a fair price.
                  I&apos;m fully insured, take care of <Link href="/services/preparation-and-repair" className="text-accent font-medium hover:text-accent-soft transition-colors">preparation</Link>, use good materials, and work cleanly so your home is left looking great with minimal disruption.
                </p>
                <p>
                  Whether you need a <Link href="/services/interior-painting" className="text-accent font-medium hover:text-accent-soft transition-colors">single room refreshed</Link>, a full interior redecoration, or <Link href="/services/exterior-painting" className="text-accent font-medium hover:text-accent-soft transition-colors">exterior work</Link>, I&apos;m happy to quote and advise. I offer free, no-obligation quotes and can work around your schedule where possible.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-accent font-medium text-sm hover:text-accent-soft transition-colors"
                >
                  View all services <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-accent font-medium text-sm hover:text-accent-soft transition-colors"
                >
                  See examples of my work <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-12 sm:py-16 bg-accent/10 border-y border-accent/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] text-center">What I do</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center mt-2 tracking-tight">
            Interior, exterior & preparation
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 sm:gap-6">
            {ABOUT_IMAGES.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block rounded-lg bg-white/95 px-3 py-1.5 text-sm font-semibold text-foreground shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                    {item.label} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl border border-black/8 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[2/1] bg-muted/20">
                <Image
                  src="/hero.jpg"
                  alt="New Decorating service area - Bath and BANES"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-accent/30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-white font-display text-lg font-semibold">Bath & North East Somerset</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold text-foreground tracking-tight">My area</h2>
                <p className="mt-2 text-muted leading-relaxed">
                  I work across Bath and North East Somerset (BANES): <Link href="/area/bath" className="text-accent font-medium hover:text-accent-soft transition-colors">Bath</Link>, <Link href="/area/keynsham" className="text-accent font-medium hover:text-accent-soft transition-colors">Keynsham</Link>, <Link href="/area/midsomer-norton" className="text-accent font-medium hover:text-accent-soft transition-colors">Midsomer Norton</Link>, <Link href="/area/radstock" className="text-accent font-medium hover:text-accent-soft transition-colors">Radstock</Link> and surrounding villages.
                </p>
                <Link
                  href="/area"
                  className="mt-4 inline-flex items-center gap-1.5 text-accent font-medium text-sm hover:text-accent-soft transition-colors"
                >
                  View all areas I cover <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-black/8 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[2/1] bg-muted/20">
                <Image
                  src="/services/wallpaper.jpg"
                  alt="Get in touch for a free quote"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-accent/30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-white font-display text-lg font-semibold">Free, no-obligation quotes</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold text-foreground tracking-tight">Get in touch</h2>
                <p className="mt-2 text-muted leading-relaxed">
                  The easiest way to reach me is via my contact page or through Facebook. I&apos;ll get back to you as soon as I can.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-soft transition-colors"
                >
                  Contact me
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
