"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black text-white dark:bg-white dark:text-black px-6 py-12">
      {/* Top Section */}
      <div className="lg:mt-40 mt-30 flex flex-col sm:flex-row justify-between gap-4 text-xs sm:text-sm font-light">
        <div className="space-y-1 text-center sm:text-left">
          <p id="contact" >Web & App Developer</p>
          <p>UI/UX, SaaS, Consultant</p>
        </div>
        <div className="text-center sm:text-right space-y-1">
          <Link href="tel:+6287716632356" className="underline hover:opacity-70">(+62) 877-1663-2356</Link><br />
          <Link href="#" className="underline hover:opacity-70">
            contact me
          </Link>
        </div>
      </div>

      {/* Center Big Name */}
      <div className="flex items-center justify-center text-center">        
        {/* <img src="/logo.png" alt="Logo" className="w-32 h-32 lg:w-28 lg:h-28 mr-4" /> */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-none">
          Rifqis Sakha <br /> Hilmi Aziz
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 text-xs sm:text-sm font-light">
        {/* Email */}
        <div className="text-center sm:text-left">
          <Link href="mailto:rifqiagha7@gmail.com" className="hover:underline">
            rifqiagha7@gmail.com
          </Link>
        </div>

        {/* Social Media Icons */}
        {/* <div className="flex flex-wrap justify-center gap-3">
          <SocialIcon
            icon={<FaWhatsapp size={18} />}
            link="https://wa.me/+6287716632356"
          />
          <SocialIcon
            icon={<FaInstagram size={18} />}
            link="https://instagram.com/sakhandaru"
          />
          <SocialIcon
            icon={<FaLinkedin size={18} />}
            link="https://linkedin.com/in/Rifqis Sakha"
          />
          <SocialIcon
            icon={<FaGithub size={18} />}
            link="https://github.com/sakhandaru"
          />
          <SocialIcon
            icon={<FaGitlab size={18} />}
            link="https://gitlab.com/sakhandaru"
          />

        {/* Location & Year */}
        <div className="text-center sm:text-right">
          <p>Semarang, Indonesia</p>
          <p>2025</p>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, link }: { icon: React.ReactNode; link: string }) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 border rounded-full hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
    >
      {icon}
    </Link>
  );
}
