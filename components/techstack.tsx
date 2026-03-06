"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "@/components/ux/dock";

export const techIcons = [
  { name: "JavaScript", src: "/icon/js.svg" },
  { name: "TypeScript", src: "/icon/ts2.svg" },
  { name: "React", src: "/icon/React.svg" },
  { name: "Next.js", src: "/icon/Next.svg" },
  { name: "Svelte", src: "/icon/Svelte.svg" },
  { name: "Tailwind", src: "/icon/Tailwind.svg" },
  { name: "GSAP", src: "/icon/GSAPlogo.svg" },
  { name: "Framer Motion", src: "/icon/motion.png" },
  { name: "Axios", src: "/icon/Axios.svg" },
  { name: "Supabase", src: "/icon/Supabase.png" },
  { name: "PostgreSQL", src: "/icon/PostgreSQL.svg" },
  { name: "Elysia", src: "/icon/Elysia.svg" },
  { name: "Docker", src: "/icon/docker.svg" },
  { name: "npm", src: "/icon/npm.svg" },
  { name: "Node.js", src: "/icon/Node.svg" },
  { name: "Jest", src: "/icon/jest2.svg" },
  { name: "Git", src: "/icon/git.svg" },
  { name: "Figma", src: "/icon/figma.svg" },
  { name: "Framer", src: "/icon/Framer3.svg" },
];

export function TechStackGrid() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {techIcons.map((icon, index) => (
        <motion.div
          key={icon.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="group relative flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={icon.src}
              alt={icon.name}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
            {icon.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export function TechStackDock() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative overflow-hidden w-full">
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex justify-start sm:justify-center min-w-max px-6">
          <Dock
            direction="middle"
            className="gap-2 sm:gap-3 md:gap-4 p-4 bg-transparent border-none shadow-none"
          >
            {techIcons.map((icon) => (
              <DockIcon
                key={icon.name}
                className="bg-transparent shadow-none hover:bg-neutral-200/20 dark:hover:bg-neutral-800/20"
              >
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </DockIcon>
            ))}
          </Dock>
        </div>
      </div>
    </div>
  );
}

// Keep DockDemo as alias for backward compatibility if needed, or remove if certain
export const DockDemo = TechStackDock;
