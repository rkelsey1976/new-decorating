"use client";

import Script from "next/script";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61571675780751";
const FACEBOOK_REVIEWS_URL = "https://www.facebook.com/profile.php?id=61571675780751&sk=reviews";

export default function FacebookReviews() {
  return (
    <section className="py-16 sm:py-24 bg-background border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            What my customers say
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            See what people are saying about New Decorating on Facebook. Read reviews and leave your own.
          </p>
          <a
            href={FACEBOOK_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1877F2] px-6 py-3 text-base font-medium text-white hover:bg-[#166FE5] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
            Read all reviews on Facebook
          </a>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          <div id="fb-root" />
          <Script
            src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0"
            strategy="lazyOnload"
            onLoad={() => {
              if (typeof window !== "undefined" && (window as unknown as { FB?: { XFBML: { parse: () => void } } }).FB) {
                (window as unknown as { FB: { XFBML: { parse: () => void } } }).FB.XFBML.parse();
              }
            }}
          />
          <div
            className="fb-page min-h-[400px] w-full max-w-[340px] mx-auto lg:mx-0"
            data-href={FACEBOOK_PAGE_URL}
            data-tabs="timeline"
            data-width="340"
            data-height="500"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
            data-show-posts="true"
          />
        </div>
      </div>
    </section>
  );
}
