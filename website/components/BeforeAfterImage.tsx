"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
};

export default function BeforeAfterImage({ src, alt, fill, sizes, className }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center bg-muted/30 text-muted text-sm text-center p-4"
        aria-hidden
      >
        <span>Photo missing — add to <code className="text-xs bg-black/5 px-1 rounded">public/images/before-after/</code></span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      onError={() => setError(true)}
    />
  );
}
