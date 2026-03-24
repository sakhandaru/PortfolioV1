"use client";

import { aboutContent } from "@/content/about";
import { TextReveal } from "@/components/ux/text-reveal";

export function About() {
  return (
    <>
    <div className="bg-gray-100 dark:bg-black" id="about">
      <TextReveal title={aboutContent.title}>{aboutContent.body.join(" ")}</TextReveal>
    </div>
    </>
  );
}
