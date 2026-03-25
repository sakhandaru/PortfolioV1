import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SideNavbar from "@/components/side-navbar";
import { siteMetadata } from "@/content/site";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased noise-bg">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SideNavbar />
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rifqi Sakha",
              url: "https://www.rifqisakha.my.id",
              jobTitle: "ERP-focused Full Stack Developer",
              sameAs: [
                "https://github.com/sakhandaru",
                "https://linkedin.com/in/Rifqis Sakha",
                "https://instagram.com/sakhandaru",
              ],
              description:
                "ERP-focused Full Stack Developer specializing in custom ERP systems, business automation, and multi-role web platforms.",
            }),
          }}
        />
      </body>
    </html>
  );
}
