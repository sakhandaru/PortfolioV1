"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

gsap.registerPlugin(Draggable);

interface StickerBounceProps {
  imageSrc: string;
  width?: number;
  rotationFactor?: number;
  bounceEase?: string;
  className?: string;
  initialPosition?: "center" | { x: number; y: number };
  href?: string;
  download?: string;
}

const StickerBounce: React.FC<StickerBounceProps> = ({
  imageSrc,
  width = 150,
  rotationFactor = 0.3,
  bounceEase = "elastic.out(1, 0.3)",
  className = "",
  initialPosition = "center",
  href,
  download,
}) => {
  const dragTargetRef = useRef<HTMLDivElement>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    if (initialPosition !== "center" && typeof initialPosition === "object") {
      gsap.set(target, { x: initialPosition.x, y: initialPosition.y });
    }

    if (window.innerWidth <= 768) {
      return;
    }

    gsap.fromTo(
      target,
      { rotation: -5 },
      {
        rotation: 5,
        duration: 0.2,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(target, { rotation: 0, duration: 0.5 });
        },
      },
    );

    const handleDrag = () => {
      const deltaX = draggableInstanceRef.current?.deltaX ?? 0;
      const rot = gsap.utils.clamp(-15, 15, deltaX * rotationFactor);
      gsap.to(target, { rotation: rot, duration: 0.15, ease: "power1.out" });
    };

    if (!href) {
      const draggable = Draggable.create(target, {
        type: "x,y",
        inertia: true,
        bounds: window,
        onDrag: handleDrag,
        onDragEnd() {
          gsap.to(target, { rotation: 0, duration: 0.8, ease: bounceEase });
        },
        onDragStart() {
          target.style.cursor = "grabbing";
          document.body.style.overflow = "hidden";
        },
        onRelease() {
          target.style.cursor = "grab";
          document.body.style.overflow = "";
        },
      });

      draggableInstanceRef.current = draggable[0];
    }

    return () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
      document.body.style.overflow = "";
    };
  }, [initialPosition, rotationFactor, bounceEase]);

  const imgContent = (
    <Image
      src={imageSrc}
      alt="Sticker"
      width={width}
      height={width}
      className={`block h-auto w-full ${href ? "cursor-pointer" : "pointer-events-none"}`}
      draggable={false}
      onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
    />
  );

  return (
    <div
      ref={dragTargetRef}
      className={`absolute select-none ${className}`}
      style={{ width }}
    >
      {href ? (
        <a href={href} download={download} target="_blank" rel="noopener noreferrer" className="block w-full h-full hover:scale-105 transition-transform pointer-events-auto">
          {imgContent}
        </a>
      ) : (
        imgContent
      )}
    </div>
  );
};

export default StickerBounce;
