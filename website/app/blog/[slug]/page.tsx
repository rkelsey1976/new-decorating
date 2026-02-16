import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { BLOG_ARTICLES, getBlogBySlug, getBlogSlugs } from "@/lib/blog";

import type { Metadata } from "next";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.imageAlt }],
    },
  };
}

import { SITE_URL } from "@/lib/site";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.date,
    author: {
      "@type": "PaintingContractor",
      name: "New Decorating",
      url: SITE_URL,
    },
    publisher: {
      "@type": "PaintingContractor",
      name: "New Decorating",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
  };

  const otherArticles = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <PageHero
        title={article.title}
        subtitle={article.excerpt}
        image={article.image}
        imageAlt={article.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.title },
        ]}
        canonicalPath={`/blog/${article.slug}`}
      />

      {/* Article body */}
      <article className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Meta bar */}
          <div className="flex items-center gap-4 text-sm text-muted mb-10 pb-6 border-b border-black/8">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-muted/50" />
            <span>{article.readTime}</span>
            <span aria-hidden="true" className="w-1 h-1 rounded-full bg-muted/50" />
            <span>New Decorating</span>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {article.sections.map((section, i) => (
              <section key={i}>
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                  {section.heading}
                </h2>
                {section.body.map((para, j) => (
                  <p key={j} className="mt-4 text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Author / CTA card */}
          <div className="mt-14 rounded-2xl bg-accent/10 border border-accent/20 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden bg-[#dcdddf] flex items-center justify-center">
                <Image
                  src="/logo-silhouette.jpg"
                  alt=""
                  width={46}
                  height={64}
                  className="object-contain scale-[0.55]"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">New Decorating</p>
                <p className="text-muted text-sm mt-1">
                  Professional painter and decorator based in Bath with over 25 years of experience. Fully insured. Free quotes across Bath and BANES.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-soft transition-colors"
                  >
                    Get a free quote
                  </Link>
                  <a
                    href="tel:+447717772881"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/30 px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    07717 772881
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Services links */}
      <section className="py-12 sm:py-16 bg-white border-t border-black/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold text-foreground tracking-tight">
            My services
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: "Interior Painting", href: "/services/interior-painting" },
              { label: "Exterior Painting", href: "/services/exterior-painting" },
              { label: "Wallpaper Hanging", href: "/services/wallpaper-hanging" },
              { label: "Preparation & Repair", href: "/services/preparation-and-repair" },
            ].map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="inline-flex items-center gap-1 rounded-lg border border-black/8 bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-accent/30 hover:text-accent transition-all"
              >
                {svc.label}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related articles */}
      {otherArticles.length > 0 && (
        <section className="py-16 sm:py-24 bg-accent/10 border-t border-accent/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center tracking-tight">
              More articles
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group rounded-2xl border border-black/8 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={other.image}
                      alt={other.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                      {other.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-accent text-sm font-medium">
                      Read more <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-accent font-medium hover:text-accent-soft transition-colors"
              >
                ← All articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
