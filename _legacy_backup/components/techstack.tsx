"use client";

import React from "react";
import Image from "next/image";
import { Dock, DockIcon } from "@/components/ux/dock";

const techIcons = [
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

export function DockDemo() {
  return (
    <div className="relative bg-gray-100 dark:bg-black mb-[5rem] sm:mb-[1rem] md:mb-[1rem] lg:mb-[0rem] xl:mb-[0rem]">
      {/* Wrapper biar bisa swipe di mobile */}
      <div className="overflow-x-auto sm:overflow-visible">
        <div className="flex justify-center sm:block w-max sm:w-full px-4 sm:px-0">
          <Dock direction="middle" className="gap-1 sm:gap-1 md:gap-1.5">
            {techIcons.map((icon) => (
              <DockIcon key={icon.name}>
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={1}
                  height={1}
                  sizes="100vw"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                />
              </DockIcon>
            ))}
          </Dock>
        </div>
      </div>
    </div>
  );
}
