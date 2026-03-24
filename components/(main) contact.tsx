"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import Magnetic from "@/components/ux/magnetic";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black text-white dark:bg-white dark:text-black px-6 py-12">
      <div className="lg:mt-40 mt-30 flex flex-col sm:flex-row justify-between gap-4 text-xs sm:text-sm font-light">
        <div className="space-y-1 text-center sm:text-left">
          <p id="contact">Web & App Developer</p>
          <p>UI/UX, SaaS, Consultant</p>
        </div>
        <div className="text-center sm:text-right space-y-1">
          <Link
            href="tel:+6287716632356"
            className="underline hover:opacity-70"
          >
            (+62) 877-1663-2356
          </Link>
          <br />
          <Link href="#" className="underline hover:opacity-70">
            contact me
          </Link>
          <br />
          <a
            href="/Rifqis_Sakha_CV.pdf"
            download="Rifqis_Sakha_CV.pdf"
            target="_blank"
            className="underline hover:opacity-70"
          >
            download cv
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-none">
          Rifqis Sakha <br /> Hilmi Aziz
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 text-xs sm:text-sm font-light">
        <div className="text-center sm:text-left">
          <Link href="mailto:rifqiagha7@gmail.com" className="hover:underline">
            rifqiagha7@gmail.com
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-8 sm:my-0">
          <Magnetic intensity={0.3}>
            <Link href="https://wa.me/+6287716632356" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 dark:border-neutral-200 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-300">
              <FaWhatsapp size={20} />
            </Link>
          </Magnetic>
          <Magnetic intensity={0.3}>
            <Link href="https://instagram.com/sakhandaru" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 dark:border-neutral-200 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-300">
              <FaInstagram size={20} />
            </Link>
          </Magnetic>
          <Magnetic intensity={0.3}>
            <Link href="https://linkedin.com/in/Rifqis Sakha" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 dark:border-neutral-200 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-300">
              <FaLinkedin size={20} />
            </Link>
          </Magnetic>
          <Magnetic intensity={0.3}>
            <Link href="https://github.com/sakhandaru" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 dark:border-neutral-200 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-300">
              <FaGithub size={20} />
            </Link>
          </Magnetic>
        </div>

        <div className="text-center sm:text-right font-mono">
          <p>Semarang, Indonesia</p>
          <p>2026</p>
        </div>
      </div>
    </section>
  );
}
