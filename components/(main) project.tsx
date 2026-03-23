"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "./ui/button";

export default function Project() {
  const projects = [
    {
      tag: "Completed",
      image: "/test-mock.webp",
      title: "Custom ERP — Aruna Cipta Perkasa",
      description:
        "Highly customized ERP with 9 user roles, full N8N workflow automation, and AI integration. Includes the company's official website.",
      techStack: ["Next.js", "Laravel", "n8n", "AI"],
      info: [
        { label: "Year", value: "2024" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Completed",
      image: "/test-mock.webp",
      title: "Custom ERP — PPRQ Annasimiyyah",
      description:
        "ERP covering academics, syahriah payments, and permissions. Multi-role portal with official website and downloadable brochure.",
      techStack: ["Next.js", "Laravel", "MySQL"],
      info: [
        { label: "Year", value: "2024" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Completed",
      image: "/test-mock.webp",
      title: "Email Blasting System — EmtekDigital",
      description:
        "Scalable Node.js email automation tool with scheduling, open rate tracking, and audience segmentation for an EO agency.",
      techStack: ["Node.js", "Express", "API"],
      info: [
        { label: "Year", value: "2024" },
        { label: "Role", value: "Backend" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Completed",
      image: "/test-mock.webp",
      title: "LAZ MAJT Web System",
      description:
        "ERP for zakat, infaq, and donation management with public donation portal, zakat calculator, static CMS, and official website.",
      techStack: ["Laravel", "Tailwind", "MySQL"],
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Concept",
      image: "/test-mock.webp",
      title: "Landing Page TVKU",
      description:
        "A modern, responsive landing page for TVKU, built with Next.js to ensure fast performance and SEO. It's designed for a seamless user experience, focusing on modern design and accessibility.",
      techStack: ["Next.js", "Framer Motion"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Front-end" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Concept",
      image: "/test-mock.webp",
      title: "Chatbot Ai Assistant",
      description:
        "An intelligent AI chatbot for the TVKU platform, designed to boost user engagement with real-time, personalized support. It leverages modern AI and NLP to create an intuitive, user-centric experience.",
      techStack: ["React", "AI", "NLP", "Ollama"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "AI Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Concept",
      image: "/test-mock.webp",
      title: "Ezenda SaaS",
      description:
        "A smart SaaS POS solution for service businesses like salons or clinics. It simplifies booking, payment, and inventory management with an intuitive, customizable dashboard designed to streamline operations.",
      techStack: ["Next.js", "PostgreSQL", "Stripe"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Concept",
      image: "/test-mock.webp",
      title: "Ezenda Template",
      description:
        "A versatile SaaS POS template for service-based businesses like salons or clinics. It features a customizable dashboard to manage appointments, payments, and inventory, all designed to improve operational efficiency.",
      techStack: ["HTML", "CSS", "JS"],
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Front-end" },
      ],
      links: [
        {
          label: "Live Demo",
          icon: <ArrowUpRight size={16} />,
          href: "/Intermezo/DraftTA#draft",
        },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Concept",
      image: "/test-mock.webp",
      title: "Compress CLI",
      description:
        "Compress CLI is a command-line tool designed to optimize and compress files efficiently, making it easier for developers to manage their assets and improve application performance.",
      techStack: ["Go", "Bash", "CLI"],
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="bg-gray-100 text-neutral-900 dark:bg-black dark:text-white px-4 pt-16 pb-20"
      >
        <h2 className="max-w-6xl mx-auto text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl mb-10">
          My Projects 🧑‍💻
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 lg:py-16 border-b border-neutral-200 dark:border-neutral-800"
            >
              {/* 1. Image Mockup (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col justify-center transition-transform duration-500 hover:scale-[1.02]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain drop-shadow-md"
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
                        {link.icon}
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
                        {link.icon}
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
