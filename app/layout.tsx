import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SideNavbar from "@/components/side-navbar";

export const metadata: Metadata = {
  title: "sakhandaru-portfolio",
  description: "personal-portofolio",
};

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
