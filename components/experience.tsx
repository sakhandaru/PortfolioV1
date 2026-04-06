"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ux/marquee";
import { experienceContent } from "@/content/experience";
import Image from "next/image";

const ReviewCard = ({
  logoUrl,
  title,
  dateRange,
  duration,
  description,
}: {
  logoUrl: string;
  title: string;
  dateRange: string;
  duration: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <Image
          src={logoUrl}
          alt={`Logo ${title}`}
          width={56}
          height={56}
          className="h-14 w-14 rounded-md object-contain"
          unoptimized
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium leading-snug dark:text-white">
            {title}
          </figcaption>
          <p className="mt-1 text-sm dark:text-white/50">
            {dateRange} • {duration}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed dark:text-white/70">
        {description}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <>
      <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl mb-6">
        {experienceContent.title}
      </h2>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-10">
        <Marquee pauseOnHover className="[--duration:60s]">
          {experienceContent.items.map((review, i) => (
            <ReviewCard key={`${review.title}-${i}`} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100 to-transparent dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100 to-transparent dark:from-black"></div>
      </div>
    </>
  );
}
