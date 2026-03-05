"use client";
import { useEffect, useState } from "react";

export default function IntroLoader({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [count, setCount] = useState(10);

  useEffect(() => {
    // kalau udah pernah lihat intro → skip
    const seenIntro = localStorage.getItem("seenIntro");
    if (seenIntro) {
      setShowIntro(false);
      return;
    }

    const start = 10;
    const end = 1;
    const duration = 3000; // 5 detik
    const stepTime = duration / (end - start);
    let current = start;

    const timer = setInterval(() => {
      current++;
      setCount(current);
      if (current >= end) {
        clearInterval(timer);
        setTimeout(() => {
          setShowIntro(false);
          localStorage.setItem("seenIntro", "true");
        }, 200); // biar smooth sedikit
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <h1 className="text-6xl font-bold">{count}</h1>
      </div>
    );
  }

  return <>{children}</>;
}
