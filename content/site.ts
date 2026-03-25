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
  title: {
    template: "%s | Rifqi Sakha",
    default: "Rifqi Sakha | ERP-focused Full Stack Developer",
  },
  description:
    "ERP-focused Full Stack Developer specializing in custom ERP systems, business automation, and multi-role web platforms. Deep understanding of operational workflows and Odoo.",
  metadataBase: new URL("https://www.rifqisakha.my.id"),
  keywords: [
    "ERP Developer",
    "Full Stack Developer",
    "Odoo Specialist",
    "Business Automation",
    "Web Development",
    "Rifqi Sakha",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Rifqi Sakha", url: "https://www.rifqisakha.my.id" }],
  creator: "Rifqi Sakha",
  publisher: "Rifqi Sakha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rifqi Sakha | ERP-focused Full Stack Developer",
    description:
      "Expert in building custom ERP systems, business automation, and multi-role platforms. Transforming complex ideas into functional web applications.",
    url: "https://www.rifqisakha.my.id",
    siteName: "Rifqi Sakha Portfolio",
    images: [
      {
        url: "/images/profile/pp2.png",
        width: 1200,
        height: 630,
        alt: "Rifqi Sakha - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifqi Sakha | ERP-focused Full Stack Developer",
    description:
      "Expert in building custom ERP systems, business automation, and multi-role platforms.",
    images: ["/images/profile/pp2.png"],
    creator: "@sakhandaru",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "auCDaV8OCgHMB12hye_vulBnYi2W9BzqTiZihsmLNHw",
  },
  alternates: {
    canonical: "https://www.rifqisakha.my.id",
  },
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
