"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ux/marquee";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
// Impor ikon dari lucide-react sudah dihapus karena tidak lagi digunakan

// Data pengalaman kerja dengan properti logoUrl untuk gambar
const workExperience = [
  {
    logoUrl: "/experience/doscom.svg", // Ganti dengan path logo Anda
    title: "Chairman of DOSCOM",
    dateRange: "Jan, 2024 – Jan, 2025",
    duration: "1 year",
    description:
      "Memimpin komunitas open-source terbesar di Jawa Tengah, mengarahkan inisiatif pengembangan, dan membina pertumbuhan lebih dari 200 anggota aktif.",
  },
  {
    logoUrl: "/experience/ppko.svg", // Ganti dengan path logo Anda
    title: "Team Lead for IoT Community Project (PPKO)",
    dateRange: "May, 2024 – Aug, 2024",
    duration: "4 months",
    description:
      "Mempelopori proyek pengabdian masyarakat berbasis IoT, mengelola siklus hidup proyek dari konsep hingga implementasi untuk solusi komunitas yang inovatif.",
  },
  {
    logoUrl: "/experience/tvku.png", // Ganti dengan path logo Anda
    title: "Frontend Developer at TVKU",
    dateRange: "Mar, 2025 – Jul, 2025",
    duration: "5 months",
    description:
      "Mengembangkan fitur antarmuka yang responsif dan berkinerja tinggi. Berkolaborasi dengan tim desain dan backend untuk menghadirkan pengalaman pengguna yang mulus.",
  },
  {
    logoUrl: "/experience/mekanikace.svg", // Ganti dengan path logo Anda
    title: "Marketing Analyst at PT. Mekanikace",
    dateRange: "Jan, 2024 – Nov, 2024",
    duration: "11 months",
    description:
      "Menganalisis tren pasar dan perilaku pengguna untuk menyusun strategi pemasaran berbasis data, berkontribusi pada peningkatan akuisisi pelanggan yang signifikan.",
  },
  {
    logoUrl: "/experience/pprq.png", // Ganti dengan path logo Anda
    title: "Full Stack Web Developer at PPRQ Annasimiyah",
    dateRange: "Sep, 2024 – Feb, 2025",
    duration: "6 months",
    description:
      "Merancang dan menerapkan portal web komprehensif, mengelola pengembangan end-to-end (frontend & backend) untuk sistem manajemen internal.",
  },
  {
    logoUrl: "/experience/rr.webp", // Ganti dengan path logo Anda
    title: "Web Developer at CV. ERDUA Digital Printing",
    dateRange: "Apr, 2023 – Dec, 2023",
    duration: "9 months",
    description:
      "Membangun dan memelihara solusi web e-commerce, menerjemahkan kebutuhan bisnis menjadi antarmuka pengguna yang fungsional dan menarik.",
  },
  {
    logoUrl: "/experience/pprq.png", // Ganti dengan path logo Anda
    title: "IT Consultant at NU Online",
    dateRange: "Feb, 2024 – Dec, 2024",
    duration: "11 months",
    description:
      "Memberikan panduan strategis mengenai arsitektur teknologi dan transformasi digital, serta mengoptimalkan efisiensi dan keamanan sistem.",
  },
  {
    logoUrl: "experience/unity logo.png", // Ganti dengan path logo Anda
    title: "UNITY Web Dev Competition Finalist",
    dateRange: "Oct, 2024",
    duration: "Competition",
    description:
      "Meraih posisi finalis dengan mengembangkan aplikasi web fungsional di bawah tekanan waktu, menunjukkan keahlian dalam problem-solving dan pengembangan cepat.",
  },
  {
    logoUrl: "/experience/dti.png", // Ganti dengan path logo Anda
    title: "UI/UX DTI Competition Participant",
    dateRange: "Sep, 2024",
    duration: "Competition",
    description:
      "Merancang prototipe aplikasi yang berpusat pada pengguna (user-centric), mendapatkan pengakuan atas desain antarmuka yang inovatif dan intuitif.",
  },
];

// Komponen Card yang telah dimodifikasi untuk menampilkan logo
const ReviewCard = ({
  logoUrl,
  title,
  dateRange,
  duration,
  description,
}: {
  logoUrl: string;
  title: string;
  dateRange: string;
  duration: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img
          src={logoUrl}
          alt={`Logo ${title}`}
          className="h-14 w-14 rounded-md object-cover" // Kelas untuk membuat gambar proporsional
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium leading-snug dark:text-white">
            {title}
          </figcaption>
          <p className="mt-1 text-sm dark:text-white/50">
            {dateRange} • {duration}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed dark:text-white/70">
        {description}
      </blockquote>
    </figure>
  );
};

// Komponen Utama Marquee
export function MarqueeDemo() {
  return (
    <>
      <h2 className="text-2xl font-bold text-black dark:text-white md:text-3xl lg:text-4xl mb-6">
        My Experience 🧳
      </h2>
  
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-10">
        <Marquee pauseOnHover className="[--duration:60s]">
          {workExperience.map((review) => (
            <ReviewCard key={review.title} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100 to-transparent dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100 to-transparent dark:from-black"></div>
      </div>
      <center>
        <Button variant="outline" className="mb-6 rounded-full" onClick={() => window.location.href = "/About"}>
          More about me <ArrowUpRight size={16} />
      </Button>
      </center>
      
    </>
  );
}