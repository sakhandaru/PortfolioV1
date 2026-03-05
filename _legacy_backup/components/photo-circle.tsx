"use client";

import Image from "next/image";

export default function PhotoCircle() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative 
        w-12 h-12       /* default (mobile) */
        sm:w-16 sm:h-16 /* small screen */
        md:w-18 md:h-18 /* tablet */
        lg:w-18 lg:h-18 /* desktop */
        rounded-full overflow-hidden
      ">
        <Image
          src="/pp2.png" 
          alt="Foto Profil"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, 112px"
        />
      </div>
    </div>
  );
}
