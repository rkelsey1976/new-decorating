import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { BLOG_ARTICLES } from "@/lib/blog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Painting & Decorating Tips | New Decorating Bath",
  description:
    "Practical advice on painting and decorating from a Bath decorator with 25+ years experience. Colour tips, preparation guides, cost advice and more.",
  alternates: { canonical: "/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <div>
      <PageHero
        title="Blog"
        subtitle="Practical advice on painting and decorating from a local decorator with over 25 years of experience."
        image="/services/interior.jpg"
        imageAlt="Painting and decorating tips"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] text-center">
            Tips & guides
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground text-center mt-2 tracking-tight">
            Decorating advice
          </h2>
          <p className="mt-4 text-muted text-center max-w-2xl mx-auto leading-relaxed">
            Answers to common questions about painting, preparation, costs and colour — all based on real experience from working in homes across Bath and BANES.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_ARTICLES.map((article) => (
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
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                    <span aria-hidden="true" className="w-1 h-1 rounded-full bg-muted/50" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-medium">
                    Read more <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-accent text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Need a painter & decorator in Bath?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto leading-relaxed">
            We offer free, no-obligation quotes for all painting and decorating work across Bath and North East Somerset.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white text-accent px-7 py-3.5 text-base font-semibold shadow-lg hover:bg-white/95 transition-all"
            >
              Get a free quote
            </Link>
            <a
              href="tel:+447717772881"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07717 772881
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
