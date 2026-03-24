"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import Magnetic from "@/components/ux/magnetic";
import { contactContent } from "@/content/contact";

export default function ContactSection() {
  const socialIconMap = {
    whatsapp: <FaWhatsapp size={20} />,
    instagram: <FaInstagram size={20} />,
    linkedin: <FaLinkedin size={20} />,
    github: <FaGithub size={20} />,
  } as const;

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black text-white dark:bg-white dark:text-black px-6 py-12">
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
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-none">
          {contactContent.nameLines[0]} <br /> {contactContent.nameLines[1]}
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 text-xs sm:text-sm font-light">
        <div className="text-center sm:text-left">
          <Link href={contactContent.email.href} className="hover:underline">
            {contactContent.email.label}
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-8 sm:my-0">
          {contactContent.socials.map((social) => (
            <Magnetic key={social.label} intensity={0.3}>
              <Link href={social.href} target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 dark:border-neutral-200 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-300">
                {socialIconMap[social.icon]}
              </Link>
            </Magnetic>
          ))}
        </div>

        <div className="text-center sm:text-right font-mono">
          <p>{contactContent.location}</p>
          <p>{contactContent.year}</p>
        </div>
      </div>
    </section>
  );
}
