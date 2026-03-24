export type ExperienceItem = {
  logoUrl: string;
  title: string;
  dateRange: string;
  duration: string;
  description: string;
};

export const experienceContent = {
  title: "My Experience 🧳",
  items: [
    {
      logoUrl: "/images/experience/tvku.png",
      title: "Web Engineer",
      dateRange: "Mar, 2025 – Jul, 2025",
      duration: "5 months",
      description:
        "Built and launched the public-facing landing page for TVKU's media platform, ensuring responsive design and performance. Also contributed to developing an AI-powered chatbot integrated into the platform.",
    },
    {
      logoUrl: "/images/experience/mekanikace.svg",
      title: "Full Stack Developer",
      dateRange: "Jan, 2024 – Nov, 2024",
      duration: "11 months",
      description:
        "Executed end-to-end full stack projects at a software house environment. Additionally handled QA, business flow analysis, and UI/UX review across multiple client projects.",
    },
    {
      logoUrl: "/images/experience/pprq.png",
      title: "Full Stack Developer",
      dateRange: "Sep, 2024 – Feb, 2025",
      duration: "6 months",
      description:
        "Developed a multi-role ERP and web portal with User, Admin, and Super Admin access levels for managing pesantren operations. Also built the official website.",
    },
    {
      logoUrl: "https://cdn.simpleicons.org/laravel",
      title: "Outsourcing Developer",
      dateRange: "2024",
      duration: "Contract",
      description:
        "Took ownership of an existing Laravel system, handling maintenance, bug fixes, and feature continuity to keep daily operations stable.",
    },
    {
      logoUrl: "/images/experience/doscom.svg",
      title: "Lead",
      dateRange: "Jan, 2024 – Jan, 2025",
      duration: "1 year",
      description:
        "Led the largest open source community in Central Java, directing open-source technology research, Linux ecosystem exploration, and developer tooling initiatives across multiple collaborative projects.",
    },
  ] satisfies ExperienceItem[],
} as const;
