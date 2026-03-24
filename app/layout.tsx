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
      </body>
    </html>
  );
}
