import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Rifqi Sakha",
  description:
    "A curated collection of projects by Rifqi Sakha — ERP-focused Full Stack Developer. Custom ERP systems, web platforms, and automation tools.",
  openGraph: {
    title: "Portfolio | Rifqi Sakha",
    description:
      "A curated collection of projects by Rifqi Sakha — ERP-focused Full Stack Developer.",
    url: "https://www.rifqisakha.my.id/portfolio",
    siteName: "Rifqi Sakha Portfolio",
    images: [
      {
        url: "/images/profile/pp2.png",
        width: 1200,
        height: 630,
        alt: "Rifqi Sakha - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Rifqi Sakha",
    description:
      "A curated collection of projects by Rifqi Sakha — ERP-focused Full Stack Developer.",
    images: ["/images/profile/pp2.png"],
  },
  alternates: {
    canonical: "https://www.rifqisakha.my.id/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
