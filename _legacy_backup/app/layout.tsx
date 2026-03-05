import type { Metadata } from "next";
import {  Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SideNavbar from "@/components/side-navbar";
import { Raleway, Montserrat } from 'next/font/google';
import './globals.css'; // Pastikan file CSS global Anda diimpor
import IntroLoader from "@/components/intro";

// Konfigurasi untuk Raleway (Judul)
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Muat bobot yang diperlukan untuk judul
  variable: '--font-raleway',    // Nama variabel CSS
  display: 'swap',
});

// Konfigurasi untuk Montserrat (Teks Isi)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Muat bobot yang diperlukan untuk teks
  variable: '--font-montserrat', // Nama variabel CSS
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${raleway.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      ><IntroLoader>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SideNavbar />
            {children}
          </ThemeProvider>
          </IntroLoader>
      </body>
    </html>
  );
}
