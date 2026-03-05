"use client";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ux/scroll-based-velocity";

export function RuningText() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
        <ScrollVelocityRow baseVelocity={20} direction={1}>
          et`s create something extraordinary together! L
        </ScrollVelocityRow>
        {/* <ScrollVelocityRow baseVelocity={20} direction={-1}>
          Mau Contact Saya?
        </ScrollVelocityRow> */}
      </ScrollVelocityContainer>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-100 dark:from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-100 dark:from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-100 dark:from-black to-transparent"></div>
    </div>
  );
}
