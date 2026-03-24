import type { Metadata } from "next";
import { mediaContent } from "@/content/media";

export type NavSection = {
  id: string;
  href: string;
  label: string;
  icon: "home" | "user" | "projects";
};

export type DockSocialLink = {
  href: string;
  label: string;
  icon: "file" | "whatsapp" | "instagram" | "linkedin" | "github" | "gitlab";
  download?: string;
};

export const siteMetadata: Metadata = {
  title: "sakhandaru-portfolio",
  description: "personal-portofolio",
};

export const navSections: NavSection[] = [
  { id: "hero", href: "/#hero", label: "Home", icon: "home" },
  { id: "about", href: "/#about", label: "About", icon: "user" },
  { id: "projects", href: "/#projects", label: "Projects", icon: "projects" },
] as const;

export const dockSocialLinks: DockSocialLink[] = [
  {
    href: mediaContent.documents.cv.href,
    label: "Download CV",
    icon: "file",
    download: mediaContent.documents.cv.download,
  },
  {
    href: "https://wa.me/+6287716632356",
    label: "WhatsApp",
    icon: "whatsapp",
  },
  {
    href: "https://instagram.com/sakhandaru",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://linkedin.com/in/Rifqis Sakha",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://github.com/sakhandaru",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://gitlab.com/sakhandaru",
    label: "GitLab",
    icon: "gitlab",
  },
] as const;
