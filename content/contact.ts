import { mediaContent } from "@/content/media";

export const contactContent = {
  runningText: "et`s create something extraordinary together! L",
  roleLines: ["Web & App Developer", "UI/UX, SaaS, Consultant"],
  phone: {
    label: "(+62) 877-1663-2356",
    href: "tel:+6287716632356",
  },
  contactCta: {
    label: "contact me",
    href: "#",
  },
  cv: {
    label: "download cv",
    href: mediaContent.documents.cv.href,
    download: mediaContent.documents.cv.download,
  },
  nameLines: ["Rifqis Sakha", "Hilmi Aziz"],
  email: {
    label: "rifqiagha7@gmail.com",
    href: "mailto:rifqiagha7@gmail.com",
  },
  socials: [
    { label: "WhatsApp", href: "https://wa.me/+6287716632356", icon: "whatsapp" },
    { label: "Instagram", href: "https://instagram.com/sakhandaru", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com/in/Rifqis Sakha", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/sakhandaru", icon: "github" },
  ],
  location: "Semarang, Indonesia",
  year: "2026",
} as const;
