export type ProjectLink = {
  label: string;
  href: string;
  icon: "external" | "github";
};

export type ProjectItem = {
  tag: string;
  images: string[];
  title: string;
  description: string;
  techStack: string[];
  info: Array<{ label: string; value: string }>;
  links: ProjectLink[];
};

export const projectsContent = {
  title: "My Projects 🧑‍💻",
  items: [
    {
      tag: "Completed",
      images: [
        "/images/projects/test-mock.webp",
        "/images/projects/test-mock.webp" // Gambar yang sama untuk demo
      ],
      title: "Custom ERP — Aruna Cipta Perkasa",
      description:
        "Highly customized ERP with 9 user roles, full N8N workflow automation, and AI integration. Includes the company's official website.",
      techStack: ["Next.js", "Laravel", "n8n", "AI"],
      info: [
        { label: "Year", value: "2024" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Completed",
      images: ["/images/projects/test-mock.webp"],
      title: "Custom ERP — PPRQ Annasimiyyah",
      description:
        "ERP covering academics, syahriah payments, and permissions. Multi-role portal with official website and downloadable brochure.",
      techStack: ["Next.js", "Laravel", "MySQL"],
      info: [
        { label: "Year", value: "2024" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Completed",
      images: ["/images/projects/test-mock.webp"],
      title: "Email Blasting System — EmtekDigital",
      description:
        "Scalable Node.js email automation tool with scheduling, open rate tracking, and audience segmentation for an EO agency.",
      techStack: ["Node.js", "Express", "API"],
      info: [
        { label: "Year", value: "2024" },
        { label: "Role", value: "Backend" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Completed",
      images: ["/images/projects/test-mock.webp"],
      title: "LAZ MAJT Web System",
      description:
        "ERP for zakat, infaq, and donation management with public donation portal, zakat calculator, static CMS, and official website.",
      techStack: ["Laravel", "Tailwind", "MySQL"],
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Concept",
      images: ["/images/projects/test-mock.webp"],
      title: "Landing Page TVKU",
      description:
        "A modern, responsive landing page for TVKU, built with Next.js to ensure fast performance and SEO. It's designed for a seamless user experience, focusing on modern design and accessibility.",
      techStack: ["Next.js", "Framer Motion"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Front-end" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Concept",
      images: ["/images/projects/test-mock.webp"],
      title: "Chatbot Ai Assistant",
      description:
        "An intelligent AI chatbot for the TVKU platform, designed to boost user engagement with real-time, personalized support. It leverages modern AI and NLP to create an intuitive, user-centric experience.",
      techStack: ["React", "AI", "NLP", "Ollama"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "AI Developer" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Concept",
      images: ["/images/projects/test-mock.webp"],
      title: "Ezenda SaaS",
      description:
        "A smart SaaS POS solution for service businesses like salons or clinics. It simplifies booking, payment, and inventory management with an intuitive, customizable dashboard designed to streamline operations.",
      techStack: ["Next.js", "PostgreSQL", "Stripe"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Concept",
      images: ["/images/projects/test-mock.webp"],
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
          icon: "external",
          href: "/Intermezo/DraftTA#draft",
        },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Concept",
      images: ["/images/projects/test-mock.webp"],
      title: "Compress CLI",
      description:
        "Compress CLI is a command-line tool designed to optimize and compress files efficiently, making it easier for developers to manage their assets and improve application performance.",
      techStack: ["Go", "Bash", "CLI"],
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Developer" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
  ] satisfies ProjectItem[],
} as const;
