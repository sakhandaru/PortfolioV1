"use client";

import { TextReveal } from "@/components/ux/text-reveal";

export function About() {
  return (
    <>
    <div className="bg-gray-100 dark:bg-black" id="about">
      <TextReveal title="About me 👋">Hi, I’m Sakhandaru — a passionate Frontend Developer currently exploring the world of backend development to become a well-rounded Fullstack Engineer. I love crafting clean, interactive, and efficient user interfaces with Next.js, Tailwind CSS, and modern animation tools like GSAP and Framer Motion.
        With a focus on performance and user experience, I enjoy turning ideas into functional, visually engaging web applications. Currently, I’m building projects that combine aesthetic design with smooth animations, while learning cloud technologies to prepare for the next decade of tech.
        When I’m not coding, I’m exploring new design trends, learning cutting-edge tools, or experimenting with UI/UX concepts.
      </TextReveal>
    </div>
    </>
  );
}