"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactMe from "./(main) contact";
import { RuningText } from "./runing-text";
import Lanyard from "./ui/Lanyard";

gsap.registerPlugin(ScrollTrigger);

function PreviousSection() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 py-10 text-gray-800 dark:bg-black dark:text-gray-100">
      <RuningText />
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}

export default function ContactReveal() {
  const container = useRef<HTMLDivElement>(null);
  const previousSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          start: "top top",
          end: () => {
            const extra = 300;
            const contactHeight = contactSection.current?.offsetHeight || 0;
            return `+=${window.innerHeight + contactHeight + extra}`;
          },
          scrub: 1,
        },
      });

      timeline.to(previousSection.current, {
        yPercent: -100,
        ease: "none",
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    },
    { scope: container },
  );

  return (
    <div ref={container} className="relative h-screen w-full overflow-hidden">
      <div ref={previousSection} className="relative h-full w-full z-10">
        <PreviousSection />
      </div>

      <div ref={contactSection} className="absolute top-0 left-0 w-full">
        <ContactMe />
      </div>
    </div>
  );
}
