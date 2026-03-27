"use client";

import Link from "next/link";
import { contactContent } from "@/content/contact";

export default function ContactSection() {

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black text-white dark:bg-white dark:text-black px-6 pt-12 pb-28 sm:py-12">
      <div className="lg:mt-40 mt-30 flex flex-col sm:flex-row justify-between gap-4 text-xs sm:text-sm font-light">
        <div className="space-y-1 text-center sm:text-left">
          <p id="contact">{contactContent.roleLines[0]}</p>
          <p>{contactContent.roleLines[1]}</p>
        </div>
        <div className="text-center sm:text-right space-y-1">
          <Link
            href={contactContent.phone.href}
            className="underline hover:opacity-70"
          >
            {contactContent.phone.label}
          </Link>
          <br />
          <Link href={contactContent.contactCta.href} className="underline hover:opacity-70">
            {contactContent.contactCta.label}
          </Link>
          <br />
          <a
            href={contactContent.cv.href}
            download={contactContent.cv.download}
            target="_blank"
            className="underline hover:opacity-70"
          >
            {contactContent.cv.label}
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center text-center">
        <a 
          href="https://sakhandaru.github.io/flappycommit/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-default select-none"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-none transition-opacity hover:opacity-90">
            {contactContent.nameLines[0]} <br /> {contactContent.nameLines[1]}
          </h1>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end items-center text-center sm:text-left text-xs sm:text-sm font-light gap-1 sm:gap-0">
        {/* Mobile: email + location/year rapat di tengah */}
        <div className="space-y-1">
          <Link href={contactContent.email.href} className="hover:underline block">
            {contactContent.email.label}
          </Link>
          <div className="sm:hidden font-mono space-y-0.5">
            <p>{contactContent.location}</p>
            <p>{contactContent.year}</p>
          </div>
        </div>

        {/* Desktop: location/year di kanan bawah */}
        <div className="hidden sm:block text-right font-mono">
          <p>{contactContent.location}</p>
          <p>{contactContent.year}</p>
        </div>
      </div>
    </section>
  );
}
