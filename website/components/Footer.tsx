import Image from "next/image";
import Link from "next/link";
import { GBP_REVIEW_URL } from "@/lib/site";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61571675780751";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/area", label: "Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const areaLinks = [
  { href: "/area/bath", label: "Bath" },
  { href: "/area/keynsham", label: "Keynsham" },
  { href: "/area/midsomer-norton", label: "Midsomer Norton" },
  { href: "/area/radstock", label: "Radstock" },
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

          <nav className="flex flex-col gap-4" aria-label="Footer navigation">
            <div className="flex flex-wrap gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#e5e3e0] hover:text-white transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-[#c4c2bf] mt-1">
              Areas:{" "}
              {areaLinks.map((a, i) => (
                <span key={a.href}>
                  {i > 0 && " · "}
                  <Link href={a.href} className="text-[#e5e3e0] hover:text-white transition-colors">
                    {a.label}
                  </Link>
                </span>
              ))}
            </p>
            <a
              href={GBP_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#e5e3e0] hover:text-white transition-colors flex items-center gap-2"
              aria-label="Leave a review on Google"
            >
              Leave a review
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </a>
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
