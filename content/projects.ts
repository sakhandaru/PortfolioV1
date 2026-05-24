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
        "/images/projects/wlb3.png",
        "/images/projects/wlb1.png",
        "/images/projects/wlb2.png"
      ],
      title: "Corporate Platform — PT. Wijaya Laksmi Bhuana Agung",
      description:
        "Developed integrated corporate management and employee workspace platform.",
      techStack: ["Next.js", "Laravel", "MySQL"],
      info: [
        { label: "Year", value: "2026" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Completed",
      images: [
        "/images/projects/djv1.png",
        "/images/projects/djv2.png",
        "/images/projects/djv3.png"
      ],
      title: "Custom ERP — CV. Dejavanese Autoparts",
      description:
        "Developed ERP system for inventory, sales, and supply chain management.",
      techStack: ["Laravel", "MySQL", "Tailwind"],
      info: [
        { label: "Year", value: "2026" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Completed",
      images: [
        "/images/projects/sipprq1.png",
        "/images/projects/sipprq2.png",
        "/images/projects/sipprq3.png"
      ],
      title: "Custom ERP — PPRQ Annasimiyyah",
      description:
        "ERP covering academics, syahriah payments, and permissions. Multi-role portal with official website and downloadable brochure.",
      techStack: ["Next.js", "Laravel", "MySQL"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "https://pprqportal.com/" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Completed",
      images: [
        "/images/projects/LAZ 1.webp",
        "/images/projects/LAZ 2.webp",
      ],
      title: "LAZ MAJT Web System",
      description:
        "ERP for zakat, infaq, and donation management with public donation portal, zakat calculator, static CMS, and official website.",
      techStack: ["Laravel", "Tailwind", "MySQL"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "https://majt.or.id/" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Completed",
      images: [
        "/images/projects/arcade1.webp",
        "/images/projects/arcade2.webp",
        "/images/projects/arcade3.webp"
      ],
      title: "Custom ERP — Aruna Cipta Perkasa",
      description:
        "Highly customized ERP with 9 user roles, full N8N workflow automation, and AI integration. Includes the company's official website.",
      techStack: ["Next.js", "Laravel", "n8n", "AI"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Full Stack" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "https://arcipta.com/" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Completed",
      images: [
        "/images/projects/email1.webp",
        "/images/projects/email2.webp",
        "/images/projects/email3.webp"
      ],
      title: "Email Blasting System — EmtekDigital",
      description:
        "Scalable Node.js email automation tool with scheduling, open rate tracking, and audience segmentation for an EO agency.",
      techStack: ["Node.js", "Express", "API"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Backend" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "#" },
      ],
    },
    {
      tag: "Concept",
      images: [
        "/images/projects/odoo1.webp",
        "/images/projects/odoo2.webp",
        "/images/projects/odoo3.webp"
      ],
      title: "Odoo Module Contractor Management",
      description:
        "An Odoo module for contractor management, designed to streamline project workflows and enhance operational efficiency.",
      techStack: ["Odoo", "Python", "XML"],
      info: [
        { label: "Year", value: "2025" },
        { label: "Role", value: "Odoo Developer" },
      ],
      links: [
        { label: "Live Demo", icon: "external", href: "#" },
        { label: "See on GitHub", icon: "github", href: "https://github.com/sakhandaru/odoo-dev" },
      ],
    },
    {
      tag: "Concept",
      images: [
        "/images/projects/tvku1.webp",
        "/images/projects/tvku2.webp",
        "/images/projects/tvku3.webp",
        "/images/projects/tvku4.webp"
      ],
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
      images: ["/images/projects/ai1.webp"],
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
    // {
    //   tag: "Concept",
    //   images: ["/images/projects/test-mock.webp"],
    //   title: "Compress CLI",
    //   description:
    //     "Compress CLI is a command-line tool designed to optimize and compress files efficiently, making it easier for developers to manage their assets and improve application performance.",
    //   techStack: ["Go", "Bash", "CLI"],
    //   info: [
    //     { label: "Year", value: "2023" },
    //     { label: "Role", value: "Developer" },
    //   ],
    //   links: [
    //     { label: "Live Demo", icon: "external", href: "#" },
    //     { label: "See on GitHub", icon: "github", href: "#" },
    //   ],
    // },
  ] satisfies ProjectItem[],
} as const;
