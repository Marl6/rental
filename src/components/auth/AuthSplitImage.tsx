"use client";

import Image from "next/image";

interface AuthSplitImageProps {
  src: string;
  alt: string;
  quote: string;
  subtext?: string;
}

export function AuthSplitImage({
  src,
  alt,
  quote,
  subtext,
}: AuthSplitImageProps) {
  return (
    <div className="hidden lg:block lg:col-span-7 relative h-full min-h-[600px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 0px, 58vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      <div className="absolute bottom-12 left-12 right-12">
        <p className="font-headline-lg text-headline-lg text-white">{quote}</p>
        {subtext ? (
          <p className="font-body-lg text-body-lg text-white/90 mt-4">
            {subtext}
          </p>
        ) : null}
      </div>
    </div>
  );
}
