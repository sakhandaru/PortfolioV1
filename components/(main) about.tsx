"use client";

import { TextReveal } from "@/components/ux/text-reveal";

export function About() {
  return (
    <>
    <div className="bg-gray-100 dark:bg-black" id="about">
      <TextReveal title="About me 👋">ERP-focused Full Stack Developer with hands-on experience building custom ERP systems, business automation, and multi-role web platforms. Proven ability to architect complex operational workflows from scratch, with deep understanding of ERP logic and business process optimization. Familiar with Odoo and experienced in evaluating ERP solutions to match client needs.
        With a focus on performance and user experience, I enjoy turning complex ideas into functional, visually engaging web applications, while continually learning to prepare for the next decade of tech.
        When I’m not coding, I’m exploring new design trends, learning cutting-edge tools, or experimenting with UI/UX concepts.
      </TextReveal>
    </div>
    </>
  );
}