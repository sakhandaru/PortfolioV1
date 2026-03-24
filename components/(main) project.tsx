"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projectsContent } from "@/content/projects";

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
              <div className="lg:col-span-5 flex flex-col justify-center transition-transform duration-500 hover:scale-[1.02]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={960}
                    height={720}
                    className="h-auto w-full object-contain drop-shadow-md"
                  />
                ) : (
                  <div className="text-neutral-500 dark:text-neutral-400 text-sm italic">
                    Image placeholder (.webp)
                  </div>
                )}
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
                        className="flex items-center gap-2 font-mono text-sm font-medium text-neutral-400 dark:text-neutral-600 cursor-not-allowed"
                      >
                        {iconMap[link.icon]}
                        <span>{link.label} (Private)</span>
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
