"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Project() {
  const projects = [
    {
      tag: "Conceptual Work",
      video: {
        mp4: "/project-demo/tvku-demo-kecil.mp4",
        webm: "/project-demo/tvku-demo-kecil.webm",
        poster: "/project-demo/tvku-demo-thumbnail.jpg",
      },
      title: "Landing Page TVKU",
      description:
        "A modern, responsive landing page for TVKU, built with Next.js to ensure fast performance and SEO. It's designed for a seamless user experience, focusing on modern design and accessibility.",
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Conceptual Work",
      video: {
        mp4: "/project-demo/chatbot-kecil.mp4",
        webm: "/project-demo/chatbot-kecil.webm",
        poster: "/project-demo/chatbot-thumbnail.jpg",
      },
      title: "Chatbot Ai Assistant",
      description:
        "An intelligent AI chatbot for the TVKU platform, designed to boost user engagement with real-time, personalized support. It leverages modern AI and NLP to create an intuitive, user-centric experience.",
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Conceptual Work",
      video: {
        mp4: "/project-demo/ezendaSaaS-kecil.mp4",
        webm: "/project-demo/ezendaSaaS-kecil.webm",
        poster: "/project-demo/ezendaSaaS-kecil-thumbnail.jpg",
      },
      title: "Ezenda SaaS",
      description:
        "A smart SaaS POS solution for service businesses like salons or clinics. It simplifies booking, payment, and inventory management with an intuitive, customizable dashboard designed to streamline operations.",
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "#" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Conceptual Work",
      video: {
        mp4: "/project-demo/ezendatemplate-kecil.mp4",
        webm: "/project-demo/ezendatemplate-kecil.webm",
        poster: "/project-demo/ezendatemplate-thumbnail.jpg",
      },
      title: "Ezenda Template",
      description:
        "A versatile SaaS POS template for service-based businesses like salons or clinics. It features a customizable dashboard to manage appointments, payments, and inventory, all designed to improve operational efficiency.",
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: [
        { label: "Live Demo", icon: <ArrowUpRight size={16} />, href: "/DraftTA#draft" },
        { label: "See on GitHub", icon: <Github size={16} />, href: "#" },
      ],
    },
    {
      tag: "Conceptual Work",
      video: {
        mp4: "/project-demo/compress-small.mp4",
        webm: "/project-demo/compress-small.webm",
        poster: "/project-demo/compress-thumbnail.jpg",
      },
      title: "Compress CLI",
      description:
        "Compress CLI is a command-line tool designed to optimize and compress files efficiently, making it easier for developers to manage their assets and improve application performance.",
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Front-end Developer" },
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
      className="bg-gray-100 text-neutral-900 dark:bg-black dark:text-white px-4 pt-16
"
    >
      <h2 className="max-w-6xl mx-auto text-2xl font-bold md:text-3xl lg:text-4xl mb-10">
        My Projects 🧑‍💻
      </h2>

      <div className="max-w-6xl mx-auto space-y-8 md:space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 md:items-center"
          >
            {/* Video looping + lazy load */}
            <div className="relative">
              {project.tag && (
                <span className="absolute top-4 left-4 bg-neutral-300/80 text-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300 text-xs px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              )}
              <div className="bg-neutral-200 dark:bg-neutral-900 p-3 rounded-xl flex items-center justify-center">
                <LazyVideo video={project.video} alt={project.title} />
              </div>
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm text-neutral-500 tracking-wide mb-2">
                  PROJECT INFO
                </h4>
                <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {project.info.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between py-2 text-neutral-700 dark:text-neutral-300 text-sm"
                    >
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lime-600 dark:text-lime-400 hover:underline text-sm transition-colors duration-300"
                  >
                    {link.label} {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <center>
<Button variant="outline" className="mt-12 md:mt-16 justify-center rounded-full" onClick={() => window.location.href = "/about"}>
      More about me <ArrowUpRight size={16} />
    </Button>
    </center>
    </section>
    
    
    </>
  );
}

/* --- Komponen Lazy Video --- */
function LazyVideo({
  video,
  alt,
}: {
  video: { mp4: string; webm: string; poster: string };
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.25 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none" // 👈 lazy load
      poster={video.poster} // 👈 preview thumbnail
      className="rounded-md w-full h-auto object-contain shadow-sm"
      aria-label={alt}
    >
      <source src={video.webm} type="video/webm" />
      <source src={video.mp4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
