import Image from "next/image";
import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61571675780751";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/area", label: "Area" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-[#dcdddf] flex items-center justify-center">
                <Image
                  src="/logo-silhouette.jpg"
                  alt=""
                  width={52}
                  height={72}
                  className="object-contain scale-[0.55]"
                  unoptimized
                />
              </span>
              <p className="font-display text-2xl font-semibold tracking-tight">New Decorating</p>
            </div>
            <p className="text-sm mt-2 text-[#e5e3e0]">Bath & North East Somerset</p>
            <p className="text-sm mt-1 max-w-xs text-[#c4c2bf]">Professional painting and decorating. 25+ years experience. Fully insured. Free quotes.</p>
            <a
              href="tel:+447717772881"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#e5e3e0] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07717 772881
            </a>
          </div>

          <nav className="flex flex-wrap gap-8" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#e5e3e0] hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#e5e3e0] hover:text-white transition-colors flex items-center gap-2"
              aria-label="New Decorating on Facebook"
            >
              Facebook
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-[#c4c2bf] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>
            © {currentYear} New Decorating. Professional painting and decorating in Bath & BANES.
            {" · "}
            <Link href="/privacy" className="underline underline-offset-2 text-[#c4c2bf] hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
          <p>
            Website by{" "}
            <a
              href="https://seo-kings.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-[#e5e3e0] hover:text-white transition-colors"
            >
              SEO Kings
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
