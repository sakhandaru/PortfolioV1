"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WordRotate } from "@/components/ux/word-rotate";
import PhotoCircle from "./photo-circle";
import StickerBounce from "@/components/ui/StickerPeel";

gsap.registerPlugin(ScrollTrigger);

type StickerPositions = {
  stickerDua: { x: number; y: number } | null;
  stickerSatu: { x: number; y: number } | null;
  stickerTiga: { x: number; y: number } | null;
  stickerEmpat: { x: number; y: number } | null;
};

function getStickerPositions(width: number): StickerPositions {
  if (width <= 768) {
    return {
      stickerSatu: { x: 0, y: 150 },
      stickerDua: { x: 0, y: -200 },
      stickerTiga: { x: 0, y: -700 },
      stickerEmpat: { x: 0, y: -700 },
    };
  }

  if (width <= 1024) {
    return {
      stickerSatu: { x: -350, y: -200 },
      stickerDua: { x: 400, y: 200 },
      stickerTiga: { x: -350, y: 200 },
      stickerEmpat: { x: 350, y: -200 },
    };
  }

  return {
    stickerSatu: { x: -350, y: -200 },
    stickerDua: { x: 400, y: 200 },
    stickerTiga: { x: -350, y: 200 },
    stickerEmpat: { x: 370, y: -200 },
  };
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [stickerPositions, setStickerPositions] = useState<StickerPositions>({
    stickerDua: null,
    stickerSatu: null,
    stickerTiga: null,
    stickerEmpat: null,
  });

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
      setStickerPositions(getStickerPositions(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white py-32 md:py-48 dark:bg-[#121212]"
    >
        {stickerPositions.stickerDua && (
          <StickerBounce
            imageSrc="/sticker2.svg"
            width={350}
            initialPosition={stickerPositions.stickerDua}
            className="z-11"
          />
        )}
        {stickerPositions.stickerSatu && (
          <StickerBounce
            imageSrc="/sticker1.svg"
            width={350}
            initialPosition={stickerPositions.stickerSatu}
            className="z-10 hover:z-20"
            href="/Rifqis_Sakha_CV.pdf"
            download="Rifqis_Sakha_CV.pdf"
          />
        )}
        {stickerPositions.stickerTiga && (
          <StickerBounce
            imageSrc="/sticker3.svg"
            width={350}
            initialPosition={stickerPositions.stickerTiga}
            className="z-12"
          />
        )}
        {stickerPositions.stickerEmpat && (
          <StickerBounce
            imageSrc="/sticker4.svg"
            width={350}
            initialPosition={stickerPositions.stickerEmpat}
            className="z-12"
          />
        )}

        <div className="container mx-auto flex max-w-3xl flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-4">
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
              "mewing 🤫🧏‍♂️",
            ]}
          />
        </div>
    </section>
  );
}
