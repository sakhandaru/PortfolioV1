/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/ux/magnetic";

export const techIcons = [
  // Languages
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript" },
  { name: "PHP", src: "https://cdn.simpleicons.org/php" },
  { name: "Python", src: "https://cdn.simpleicons.org/python" },

  // Frameworks & Backend
  { name: "React", src: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs", className: "dark:invert" },
  { name: "Laravel", src: "https://cdn.simpleicons.org/laravel" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Flask", src: "https://cdn.simpleicons.org/flask", className: "dark:invert" },

  // Database
  { name: "MySQL", src: "https://cdn.simpleicons.org/mysql" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql" },
  { name: "MariaDB", src: "https://cdn.simpleicons.org/mariadb" },

  // Automation & DevOps
  { name: "n8n", src: "https://cdn.simpleicons.org/n8n" },
  { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
  { name: "Linux", src: "https://cdn.simpleicons.org/linux", className: "dark:invert" },
  { name: "Git", src: "https://cdn.simpleicons.org/git" },

  // Tools & Design
  { name: "Figma", src: "https://cdn.simpleicons.org/figma" },
  { name: "Notion", src: "https://cdn.simpleicons.org/notion", className: "dark:invert" },
  { name: "Jira", src: "https://cdn.simpleicons.org/jira" },
  { name: "Trello", src: "https://cdn.simpleicons.org/trello" },
];

export function TechStackGrid() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pt-10 pb-8 w-full">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-x-4 gap-y-10 md:gap-y-12 justify-items-center">
        {techIcons.map((icon, index) => (
          <Magnetic intensity={0.2} key={icon.name}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-center cursor-pointer mix-blend-luminosity dark:mix-blend-normal"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-2">
                <img
                  src={icon.src}
                  alt={icon.name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ${icon.className || ""}`}
                />
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono font-medium text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-500 text-center tracking-widest uppercase opacity-0 group-hover:opacity-100 absolute -bottom-3 whitespace-nowrap">
                {icon.name}
              </span>
            </motion.div>
          </Magnetic>
        ))}
      </div>
    </div>
  );
}

export const TechStackDock = TechStackGrid;
export const DockDemo = TechStackGrid;
