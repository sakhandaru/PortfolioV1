"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import {
  ArrowUpRight,
  Github,
  ChevronLeft,
  ChevronRight,
  Lock,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Briefcase,
  Printer,
} from "lucide-react";
import { projectsContent } from "@/content/projects";
import { aboutContent } from "@/content/about";
import { techIcons } from "@/content/techstack";
import { dockSocialLinks } from "@/content/site";

// ─── Image Carousel ────────────────────────────────────────────────────────────
function ProjectImages({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      if (index !== currentIndex) setCurrentIndex(index);
    }
  };

  const scrollToImage = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * (scrollRef.current?.clientWidth ?? 0),
      behavior: "smooth",
    });
  };

  const nextImage = () => scrollToImage((currentIndex + 1) % images.length);
  const prevImage = () =>
    scrollToImage((currentIndex - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Screen layout: Carousel */}
      <div className="relative group overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 print:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory overscroll-x-contain aspect-[4/3] w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full h-full snap-center snap-always relative"
            >
              <Image
                src={image}
                alt={`${title} - image ${i + 1}`}
                fill
                className="object-contain drop-shadow-sm"
                priority={i === 0}
                unoptimized
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <div>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 dark:bg-black/90 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} className="text-neutral-900 dark:text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 dark:bg-black/90 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Next image"
            >
              <ChevronRight size={16} className="text-neutral-900 dark:text-white" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToImage(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-neutral-900 dark:bg-white w-4"
                      : "bg-neutral-400/60 dark:bg-neutral-600 w-1.5"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Print layout: Apple Keynote Style Landscape Screenshot Row with generous vertical margin */}
      <div className={`absolute -z-50 opacity-0 pointer-events-none print:static print:z-0 print:opacity-100 print:pointer-events-auto print:grid print:gap-4 print:w-full print:mt-10 ${
        images.length === 1 ? "print:grid-cols-1 print:max-w-lg print:mx-auto" :
        images.length === 2 ? "print:grid-cols-2" :
        images.length === 3 ? "print:grid-cols-3" :
        "print:grid-cols-4"
      }`}>
        {images.map((image, i) => (
          <div
            key={i}
            className="relative aspect-[16/10] rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl"
          >
            <Image
              src={image}
              alt={`${title} - image ${i + 1}`}
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Tag badge ─────────────────────────────────────────────────────────────────
const tagColors: Record<string, string> = {
  Completed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800",
  Concept:
    "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 border border-violet-200 dark:border-violet-800",
  "In Progress":
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800",
};

// ─── Copy URL Button ────────────────────────────────────────────────────────────
function CopyUrlButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-sm font-mono font-medium transition-all"
    >
      {copied ? (
        <>
          <Check size={14} className="text-emerald-500" />
          <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          <span>Copy link</span>
        </>
      )}
    </button>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const handlePrint = () => {
    window.print();
  };

  const iconMap = {
    external: <ArrowUpRight size={14} />,
    github: <Github size={14} />,
  } as const;

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white print:bg-zinc-950 print:text-white">
      {/* ─── Apple Keynote Print Overrides ─── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          size: landscape;
          margin: 15mm;
        }
        @media print {
          html, body {
            background-color: #09090b !important;
            color: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Ensure all text turns white/zinc inside print sandbox */
          h1, h2, h3, p, span, div, a {
            color: #ffffff !important;
          }
          .print-slide-break {
            break-after: page !important;
            page-break-after: always !important;
          }
        }
      `}} />

      {/* ── Header Strip ── */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 backdrop-blur-sm sticky top-0 z-40 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              rifqisakha.my.id
              <span className="text-neutral-300 dark:text-neutral-600 mx-1">/</span>
              <span className="text-neutral-700 dark:text-neutral-200 font-semibold">portfolio</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 text-sm font-mono font-medium transition-all"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Save PDF</span>
            </button>
            <CopyUrlButton />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 print:py-0 print:space-y-0">

        {/* Slide 1: Profile & Tech Stack Presentation Cover (Hidden in PDF print) */}
        <div className="space-y-16 print:hidden">
          {/* ── Profile Card ── */}
          <section className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-neutral-200 dark:ring-neutral-700 shadow-md">
                <Image
                  src="/images/profile/pp2.png"
                  alt="Rifqi Sakha"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-neutral-950" />
            </div>

            {/* Info */}
            <div className="flex-1 space-y-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Rifqi Sakha</h1>
                <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mt-0.5 flex items-center gap-1.5">
                  <Briefcase size={13} />
                  ERP-focused Full Stack Developer
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 flex items-center gap-1.5">
                  <MapPin size={13} />
                  Semarang, Indonesia
                </p>
              </div>

              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl">
                {aboutContent.body[0]}
              </p>

              {/* Social links */}
              <div className="flex flex-wrap gap-2 pt-1">
                {dockSocialLinks
                  .filter((s) => ["github", "linkedin", "whatsapp"].includes(s.icon))
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors"
                    >
                      <ExternalLink size={11} />
                      {link.label}
                    </a>
                  ))}
                <a
                  href="/"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-neutral-900 hover:bg-neutral-700 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 transition-colors"
                >
                  <ExternalLink size={11} />
                  Full Site
                </a>
              </div>
            </div>
          </section>

          {/* ── Tech Stack ── */}
          <section>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700/60 text-xs font-mono text-neutral-600 dark:text-neutral-400"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={14}
                    height={14}
                    className={`object-contain ${tech.className ?? ""}`}
                    unoptimized
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Projects ── */}
        <section className="print:pt-0">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-8 print:hidden">
            Projects — {projectsContent.items.length} works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:block print:space-y-0">
            {projectsContent.items.map((project, index) => (
              <article
                key={index}
                className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors print:min-h-[170mm] print:break-inside-avoid print:print-slide-break print:flex print:flex-col print:justify-center print:border-0 print:rounded-none print:bg-transparent print:p-0 print:py-0 print:my-0"
              >
                {/* Image Showcase (Ordered after text on Slide layout) */}
                <div className="p-3 pb-0 print:p-0 print:order-2">
                  <ProjectImages images={project.images} title={project.title} />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 gap-3 print:p-0 print:order-1 print:gap-3">
                  {/* Title + Tag */}
                  <div className="space-y-1.5 print:space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-sm font-semibold leading-snug text-neutral-900 dark:text-white print:text-white print:text-3xl print:font-extrabold print:tracking-tight">
                        {project.title}
                      </h3>
                      <span
                        className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wide print:bg-zinc-800 print:border-0 print:text-zinc-300 print:px-3 print:py-1 print:text-[10px] print:rounded-full print:font-semibold ${tagColors[project.tag] ?? "bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300"}`}
                      >
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 print:text-zinc-400 print:text-sm print:leading-relaxed print:max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 print:gap-2 print:mt-1">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-[10px] font-medium rounded-md print:bg-zinc-900 print:border print:border-zinc-800 print:text-zinc-400 print:text-[10px] print:px-3 print:py-1 print:rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Meta + Links */}
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-neutral-200 dark:border-neutral-800 print:border-t-0 print:pt-0 print:mt-8">
                    <div className="flex gap-4 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 print:text-zinc-500 print:text-xs">
                      {project.info.map((info, i) => (
                        <span key={i} className="print:flex print:items-center print:gap-1.5">
                          <span className="print:text-zinc-500">{info.label}:</span>{" "}
                          <span className="text-neutral-600 dark:text-neutral-300 font-semibold print:text-zinc-300 print:font-medium">
                            {info.value}
                          </span>
                        </span>
                      ))}
                    </div>

                    {/* QR Code and Scan Caption (ONLY on print footer) */}
                    <div className="hidden print:flex print:items-center print:gap-3">
                      <p className="text-right text-[10px] font-mono text-zinc-500 leading-tight">
                        Scan to visit web portfolio<br />
                        <span className="text-zinc-400 font-semibold">www.rifqisakha.my.id</span>
                      </p>
                      <div className="relative w-12 h-12 border border-zinc-850 rounded-md overflow-hidden bg-white p-0.5 shadow-md">
                        <Image
                          src="/images/projects/qr.png"
                          alt="QR Code Portfolio"
                          width={44}
                          height={44}
                          className="object-contain w-full h-full"
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 print:hidden">
                      {project.links.map((link, i) => {
                        const isPrivate = !link.href || link.href === "#";
                        if (isPrivate)
                          return (
                            <div
                              key={i}
                              className="p-1.5 rounded-lg text-neutral-300 dark:text-neutral-600 cursor-not-allowed"
                              title="Confidential / NDA"
                            >
                              <Lock size={13} />
                            </div>
                          );
                        return (
                          <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.label}
                            className="p-1.5 rounded-lg bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-colors"
                          >
                            {iconMap[link.icon]}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden">
          <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
            Open to new opportunities — reach out anytime.
          </p>
          <div className="flex gap-3">
            <a
              href="https://wa.me/+6287716632356"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-80 transition-opacity"
            >
              <ExternalLink size={12} />
              Contact Me
            </a>
            <a
              href="/"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              View Full Site
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
