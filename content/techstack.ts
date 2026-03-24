export type TechIcon = {
  name: string;
  src: string;
  className?: string;
};

export const techIcons: TechIcon[] = [
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript" },
  { name: "PHP", src: "https://cdn.simpleicons.org/php" },
  { name: "Python", src: "https://cdn.simpleicons.org/python" },
  { name: "React", src: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs", className: "dark:invert" },
  { name: "Laravel", src: "https://cdn.simpleicons.org/laravel" },
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Flask", src: "https://cdn.simpleicons.org/flask", className: "dark:invert" },
  { name: "MySQL", src: "https://cdn.simpleicons.org/mysql" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql" },
  { name: "MariaDB", src: "https://cdn.simpleicons.org/mariadb" },
  { name: "n8n", src: "https://cdn.simpleicons.org/n8n" },
  { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
  { name: "Linux", src: "https://cdn.simpleicons.org/linux", className: "dark:invert" },
  { name: "Git", src: "https://cdn.simpleicons.org/git" },
  { name: "Figma", src: "https://cdn.simpleicons.org/figma" },
  { name: "Notion", src: "https://cdn.simpleicons.org/notion", className: "dark:invert" },
  { name: "Jira", src: "https://cdn.simpleicons.org/jira" },
  { name: "Trello", src: "https://cdn.simpleicons.org/trello" },
] as const;
