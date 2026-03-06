"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Code2 } from "lucide-react";
import { TechStackGrid } from "@/components/techstack";
import { SmoothCursor } from "@/components/ux/smooth-cursor";
import { ScrollProgress } from "@/components/ux/scroll-progress";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pb-20">
      <ScrollProgress className="top" />
      <div className="hidden sm:block">
        <SmoothCursor />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
          <h1 className="text-xl font-bold font-raleway">About Sakhandaru</h1>
          <div className="w-24"></div> {/* Spacer balance */}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32">
        {/* Profile Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black mb-8 font-raleway flex items-center gap-3">
              About Me <span className="animate-pulse">👋</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-montserrat">
              <p>
                Hi, I’m{" "}
                <span className="font-bold text-black dark:text-white underline decoration-blue-500 decoration-2">
                  Sakhandaru
                </span>{" "}
                — a passionate Frontend Developer currently exploring the world
                of backend development to become a well-rounded Fullstack
                Engineer.
              </p>
              <p>
                I love crafting clean, interactive, and efficient user
                interfaces with Next.js, Tailwind CSS, and modern animation
                tools like GSAP and Framer Motion. With a focus on performance
                and user experience, I enjoy turning ideas into functional,
                visually engaging web applications.
              </p>
              <p>
                Currently, I’m building projects that combine aesthetic design
                with smooth animations, while learning cloud technologies to
                prepare for the next decade of tech. When I’m not coding, I’m
                exploring new design trends, learning cutting-edge tools, or
                experimenting with UI/UX concepts.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 font-raleway flex items-center gap-3">
            <Code2 className="text-purple-500" /> Technology Stack
          </h2>
          <TechStackGrid />
        </section>
      </main>
    </div>
  );
}
