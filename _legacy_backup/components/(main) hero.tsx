"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WordRotate } from "@/components/ux/word-rotate";
import PhotoCircle from "./photo-circle";
import StickerBounce from "@/components/ui/StickerPeel"; // Pastikan path ini benar

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // State untuk menyimpan posisi stiker, awalnya null agar tidak error di server
  const [stickerPositions, setStickerPositions] = useState<{
    stickerDua: { x: number; y: number } | null;
    stickerSatu: { x: number; y: number } | null;
    stickerTiga: { x: number; y: number } | null;
    stickerEmpat: { x: number; y: number } | null;
  }>({ stickerDua: null, stickerSatu: null, stickerTiga: null, stickerEmpat: null });

  // Efek untuk ScrollTrigger (tidak diubah)
  useEffect(() => {
    if (!heroRef.current) return;

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
      scrub: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
  if (window.innerWidth <= 768) {
    // MOBILE
    setStickerPositions({
      stickerSatu: { 
        x: 0,
        y: - 700
      },
      stickerDua: { 
        x: 0,
        y: -200
      },
      stickerTiga: {
        x: 0,
        y: 150
      },
      stickerEmpat: {
        x: 0,
        y: -700
      }
    });
  } else if (769 <= window.innerWidth && window.innerWidth <= 1024) {
    // TABLET
    setStickerPositions({
      stickerSatu: { 
        x: -350, 
        y: -200 
      },
      stickerDua: { 
        x: 400, 
        y: 200 
      },
      stickerTiga: {
        x: -350,
        y: 200
      },
      stickerEmpat: {
        x: 350,
        y: -200
      }
    });
  } else if (1025 <= window.innerWidth && window.innerWidth <= 1440) {
    // DESKTOP KECIL
    setStickerPositions({
      stickerSatu: { 
        x: -350, 
        y: -200 
      },
      stickerDua: { 
        x: 400, 
        y: 200 
      },
      stickerTiga: {
        x: -350,
        y: 200
      },
      stickerEmpat: {
        x: 370,
        y: -200
      }
    });
  } else {
    // DESKTOP BESAR
    setStickerPositions({
      stickerSatu: { 
        x: -350, 
        y: -200
      },
      stickerDua: { 
        x: 400, 
        y: 200
      },
      stickerTiga: {
        x: -350,
        y: 200
      },
      stickerEmpat: {
        x: 370,
        y: -200
      }
    });
  }
};


    // Panggil sekali saat komponen dimuat
    handleResize();

    // Tambahkan listener untuk dijalankan setiap kali ukuran jendela berubah
    window.addEventListener("resize", handleResize);

    // Cleanup: Hapus listener saat komponen tidak lagi digunakan
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Dependensi kosong agar hanya berjalan sekali saat komponen mount

  return (
    <>
      <section
        
        ref={heroRef}
        className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#121212] py-32 md:py-48 relative overflow-hidden" // Tambahkan overflow-hidden
      >
        {/* Render stiker kanan Satu secara kondisional dengan posisi dari state */}
        {stickerPositions.stickerDua && (
          <StickerBounce
            imageSrc="/sticker2.svg"
            width={350}
            initialPosition={stickerPositions.stickerDua} // <-- MENGGUNAKAN STATE
            className="z-11"
          />
        )}

        {/* Render stiker kiri Dua secara kondisional dengan posisi dari state */}
        {stickerPositions.stickerSatu && (
          <StickerBounce
            imageSrc="/sticker1.svg"
            width={350}
            initialPosition={stickerPositions.stickerSatu} // <-- MENGGUNAKAN STATE
            className="z-10"
          />
        )}
        {stickerPositions.stickerTiga && (
          <StickerBounce
            imageSrc="/sticker3.svg"
            width={350}
            initialPosition={stickerPositions.stickerTiga} // <-- MENGGUNAKAN STATE2
            className="z-12"
          />
        )}
        {stickerPositions.stickerTiga && (
          <StickerBounce
            imageSrc="/sticker4.svg"
            width={350}
            initialPosition={stickerPositions.stickerEmpat || undefined} // <-- MENGGUNAKAN STATE2
            className="z-12"
          />
        )}

        <div className="container mx-auto flex max-w-3xl flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-4">
            {" "}
            {/* <p>{window.innerWidth}</p> */}
            <PhotoCircle />
            <h1
              className="pointer-events-none whitespace-pre-wrap text-black dark:text-white bg-clip-text 
               text-6xl sm:text-6xl md:text-8xl font-semibold leading-none"
            >
              Hi dude!!
            </h1>
            
          </div>
          
            <WordRotate
              className="text-2xl text-black dark:text-neutral-300 mt-4"
              words={[
                "Welcome 🙌",
                "scroll slowly 🐢",
                "drag the sticker 🏷️",
                "mewing 🤫🧏‍♂️"
              ]}
            />
        
        </div>
        
      </section>
    </>
  );
}