"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsContent } from "@/content/projects";

function ProjectImages({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  const scrollToImage = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % images.length;
    scrollToImage(nextIdx);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    scrollToImage(prevIdx);
  };

  if (!images || images.length === 0) {
    return (
      <div className="text-neutral-500 dark:text-neutral-400 text-sm italic">
        Image placeholder (.webp)
      </div>
    );
  }

  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide aspect-[4/3] w-full transition-transform duration-500 hover:scale-[1.01]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-full snap-center relative"
          >
            <Image
              src={image}
              alt={`${title} - image ${i + 1}`}
              fill
              className="object-contain drop-shadow-md"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/80 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white dark:hover:bg-black"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} className="text-neutral-900 dark:text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/80 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white dark:hover:bg-black"
            aria-label="Next image"
          >
            <ChevronRight size={18} className="text-neutral-900 dark:text-white" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToImage(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === currentIndex
                    ? "bg-neutral-900 dark:bg-white w-4"
                    : "bg-neutral-400 dark:bg-neutral-600"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Project() {
  const iconMap = {
    external: <ArrowUpRight size={16} />,
    github: <Github size={16} />,
  } as const;

  return (
    <>
      <section
        id="projects"
        className="bg-gray-100 text-neutral-900 dark:bg-black dark:text-white px-4 pt-16 pb-20"
      >
        <h2 className="max-w-6xl mx-auto text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl mb-10">
          {projectsContent.title}
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col">
          {projectsContent.items.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 lg:py-16 border-b border-neutral-200 dark:border-neutral-800"
            >
              {/* 1. Image Mockup (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <ProjectImages images={project.images} title={project.title} />
              </div>

              {/* 2. Middle: Title, Tech Tags & Description (4 Columns) */}
              <div className="lg:col-span-4 flex flex-col h-full space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 items-start mb-4">
                    <span className="px-3 py-1 bg-neutral-300 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200 font-mono text-[11px] font-semibold tracking-wide uppercase rounded-full">
                      {project.tag}
                    </span>
                    {project.techStack?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 font-mono text-[11px] font-medium tracking-wide uppercase rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="flex gap-6 mt-2 text-xs text-neutral-500 font-mono">
                  {project.info
                    .filter((info) => info.label === "Year")
                    .map((info, i) => (
                      <span key={i} className="tracking-wide">
                        {info.label}: <span className="font-semibold text-neutral-700 dark:text-neutral-300">{info.value}</span>
                      </span>
                    ))}
                </div>
              </div>

              {/* 3. Far Right: Links (3 Columns) */}
              <div className="lg:col-span-3 flex flex-col justify-start space-y-3 lg:mt-1.5 lg:pl-4">
                {project.links.map((link, i) => {
                  const isPrivate = !link.href || link.href === "#";
                  
                  if (isPrivate) {
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-md font-mono text-[10px] md:text-[11px] font-semibold text-neutral-500 dark:text-neutral-500 cursor-not-allowed uppercase tracking-wider group relative"
                      >
                        <Lock size={12} className="text-neutral-400 dark:text-neutral-600" />
                        <span>{link.label}: Confidential / NDA</span>
                        
                        {/* Subtle Glow Effect on Hover */}
                        <div className="absolute inset-0 rounded-md bg-neutral-400/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                    );
                  }

                  return (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        {iconMap[link.icon]}
                      </span>
                      <span className="group-hover:underline underline-offset-4">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        
      </section>
    </>
  );
}
