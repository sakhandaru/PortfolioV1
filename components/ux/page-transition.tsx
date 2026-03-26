"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panel1Ref = useRef<HTMLDivElement | null>(null);
  const panel2Ref = useRef<HTMLDivElement | null>(null);
  const panel3Ref = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel1 = panel1Ref.current;
    const panel2 = panel2Ref.current;
    const panel3 = panel3Ref.current;
    const label = labelRef.current;

    if (!overlay || !panel1 || !panel2 || !panel3 || !label) return;

    // Lock scroll saat entrance
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        gsap.set(overlay, { display: "none" });
      },
    });

    // Fade in sticker dulu
    tl.fromTo(
      label,
      { opacity: 0, scale: 0.85, rotate: -8 },
      { opacity: 1, scale: 1, rotate: -8, duration: 0.5, ease: "back.out(1.7)" }
    )
      // Tahan sebentar
      .to(label, { opacity: 0, scale: 0.9, duration: 0.3, ease: "power2.in" }, "+=0.35")
      // Slide panels up bertahap (stagger)
      .to(
        [panel3, panel2, panel1],
        {
          yPercent: -105,
          duration: 0.75,
          ease: "power3.inOut",
          stagger: 0.07,
        },
        "-=0.1"
      );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    >
      {/* Panel 1 — top layer, black pekat */}
      <div
        ref={panel1Ref}
        className="absolute inset-0 bg-[#333333]"
        style={{ willChange: "transform" }}
      />
      {/* Panel 2 — mid layer */}
      <div
        ref={panel2Ref}
        // className="absolute inset-0 bg-[#1c1c1c]"
        className="absolute inset-0 bg-red-500"
        style={{ willChange: "transform" }}
      />
      {/* Panel 3 — bottom layer, abu */}
      <div
        ref={panel3Ref}
        className="absolute inset-0 bg-black"
        style={{ willChange: "transform" }}
      />

      {/* Sticker di tengah */}
      <div
        ref={labelRef}
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ opacity: 0 }}
      >
        <Image
          src="/images/hero/sticker2.svg"
          alt="sticker"
          width={300}
          height={300}
          style={{ transform: "rotate(-8deg)" }}
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
