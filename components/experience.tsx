"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ux/marquee";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
// Impor ikon dari lucide-react sudah dihapus karena tidak lagi digunakan

// Data pengalaman kerja dengan properti logoUrl untuk gambar
export const workExperience = [
  {
    logoUrl: "/experience/tvku.png",
    title: "Web Engineer",
    dateRange: "Mar, 2025 – Jul, 2025",
    duration: "5 months",
    description:
      "Built and launched the public-facing landing page for TVKU's media platform, ensuring responsive design and performance. Also contributed to developing an AI-powered chatbot integrated into the platform.",
  },
  {
    logoUrl: "/experience/mekanikace.svg",
    title: "Full Stack Developer",
    dateRange: "Jan, 2024 – Nov, 2024",
    duration: "11 months",
    description:
      "Executed end-to-end full stack projects at a software house environment. Additionally handled QA, business flow analysis, and UI/UX review across multiple client projects.",
  },
  {
    logoUrl: "/experience/pprq.png",
    title: "Full Stack Developer",
    dateRange: "Sep, 2024 – Feb, 2025",
    duration: "6 months",
    description:
      "Developed a multi-role ERP and web portal with User, Admin, and Super Admin access levels for managing pesantren operations. Also built the official website.",
  },
  {
    logoUrl: "/experience/placeholder.png",
    title: "Outsourcing Developer",
    dateRange: "2024",
    duration: "Contract",
    description:
      "Took ownership of an existing custom internal system built with Laravel, handling ongoing maintenance, bug resolution, and feature continuity to ensure stable day-to-day operations.",
  },
  {
    logoUrl: "/experience/doscom.svg",
    title: "Lead",
    dateRange: "Jan, 2024 – Jan, 2025",
    duration: "1 year",
    description:
      "Led the largest open source community in Central Java, directing open-source technology research, Linux ecosystem exploration, and developer tooling initiatives across multiple collaborative projects.",
  },
];

// Komponen Card yang telah dimodifikasi untuk menampilkan logo
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
          className="h-14 w-14 rounded-md object-cover" // Kelas untuk membuat gambar proporsional
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

// Komponen Utama Marquee
export function MarqueeDemo() {
  return (
    <>
      <h2 className="text-2xl font-bold text-black dark:text-white md:text-3xl lg:text-4xl mb-6">
        My Experience 🧳
      </h2>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-10">
        <Marquee pauseOnHover className="[--duration:60s]">
          {workExperience.map((review) => (
            <ReviewCard key={review.title} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100 to-transparent dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100 to-transparent dark:from-black"></div>
      </div>
      <center>
        <Button variant="outline" className="mb-6 rounded-full" asChild>
          <Link href="/#about">
            More about me <ArrowUpRight size={16} />
          </Link>
        </Button>
      </center>
    </>
  );
}
