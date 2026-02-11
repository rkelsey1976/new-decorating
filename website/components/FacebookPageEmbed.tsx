"use client";

import Script from "next/script";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61571675780751";

export default function FacebookPageEmbed() {
  return (
    <>
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
        className="fb-page min-h-[500px] w-full max-w-[500px] mx-auto"
        data-href={FACEBOOK_PAGE_URL}
        data-tabs="timeline"
        data-width="500"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        data-lazy="true"
      />
    </>
  );
}
