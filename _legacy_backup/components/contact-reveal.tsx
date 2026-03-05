"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactMe from "./(main) contact";
import { RuningText } from "./runing-text";
import Lanyard from "./ui/Lanyard";
import { ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function PreviousSection() {
  return (
    <div className="bg-gray-100 text-gray-800 dark:bg-black dark:text-gray-100 flex flex-col justify-center items-center p-10">
      <RuningText />
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      <div className="flex flex-col items-center mt-8">
      </div>
    </div>
  );
}

export default function ContactReveal() {
  const container = useRef<HTMLDivElement>(null);
  const previousSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        start: 'top top',
        end: () => {
          // Hitung tinggi PreviousSection + ContactMe + extra scroll
          const extra = 300;
          const contactHeight = contactSection.current?.offsetHeight || 0;
          return `+=${window.innerHeight + contactHeight + extra}`;
        },
        scrub: 1,
        // markers: true,
      },
    });

    timeline.to(previousSection.current, {
      yPercent: -100,
      ease: 'none',
    });

    // Refresh setelah semua asset & layout siap
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, { scope: container });

  return (
    <div ref={container} className="relative h-screen w-full overflow-hidden">
      {/* Bagian atas yang akan bergerak */}
      <div ref={previousSection} className="relative h-full w-full z-10">
        <PreviousSection />
      </div>

      {/* ContactMe di bawah */}
      <div ref={contactSection} className="absolute top-0 left-0 w-full">
        <ContactMe />
      </div>
    </div>
  );
}
