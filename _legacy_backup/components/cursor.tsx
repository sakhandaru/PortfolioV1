"use client";

import { SmoothCursor } from "@/components/ux/smooth-cursor";
 
export function SmoothCursorDemo() {
  return (
    <>
      <span className="hidden md:block">Move your mouse around</span>
      <span className="block md:hidden">Tap anywhere to see the cursor</span>
      <SmoothCursor />
    </>
  );
}