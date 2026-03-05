"use client";

import { Home, User, Mail, Moon, Sun, Share2,FolderGit2, X } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
} from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isSocialDesktop, setIsSocialDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/#hero", icon: <Home size={22} />, label: "Home" },
    { href: "/#about", icon: <User size={22} />, label: "About" },
    { href: "/#projects", icon: <FolderGit2 size={22} />, label: "Projects" },
    // { href: "/#contact", icon: <Mail size={22} />, label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://wa.me/+6287716632356",
      icon: <FaWhatsapp size={22} />,
      label: "WhatsApp",
    },
    {
      href: "https://instagram.com/sakhandaru",
      icon: <FaInstagram size={22} />,
      label: "Instagram",
    },
    {
      href: "https://linkedin.com/in/Rifqis Sakha",
      icon: <FaLinkedin size={22} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/sakhandaru",
      icon: <FaGithub size={22} />,
      label: "GitHub",
    },
    {
      href: "https://gitlab.com/sakhandaru",
      icon: <FaGitlab size={22} />,
      label: "GitLab",
    },
  ];

  return (
    <>
      {/* === DESKTOP SIDE NAVBAR === */}
      <div className="fixed right-0 top-0 h-full w-[50px] z-50 group hidden md:block">
        <div
          className={`
            absolute right-0 top-1/2 -translate-y-1/2
            flex flex-col justify-between
            shadow-lg transition-all duration-300
            dark:bg-white dark:text-black bg-black text-white
            md:translate-x-[70%] md:group-hover:translate-x-0
          `}
        >
          <div className="flex flex-col items-center p-2">
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="p-2 hover:opacity-70 transition"
                >
                  {item.icon}
                </Link>
              ))}

              {/* Desktop Social Accordion */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setIsSocialDesktop(!isSocialDesktop)}
                  className="p-2 hover:opacity-70 transition"
                  aria-expanded={isSocialDesktop}
                >
                  <Share2 size={22} />
                </button>
                <div
                  className={`flex flex-col items-center space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
                    isSocialDesktop ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:opacity-70 transition"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dark Mode */}
          <div className="p-2 flex justify-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 hover:opacity-70 transition"
            >
              {mounted &&
                (theme === "dark" ? <Sun size={22} /> : <Moon size={22} />)}
            </button>
          </div>
        </div>
      </div>

      {/* === MOBILE IOS DOCK NAVBAR === */}
      <div
        className={`
          fixed bottom-8 left-1/2 -translate-x-1/2 z-50
          flex items-center justify-evenly
          w-[80%] max-w-md rounded-full py-6 
          shadow-xl backdrop-blur-xl
          dark:bg-white dark:text-black bg-black text-white
          md:hidden
        `}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col items-center hover:scale-110 transition"
          >
            {item.icon}
          </Link>
        ))}

        {/* Share Button (Modal) */}
        <button
          onClick={() => setIsSocialOpen(true)}
          className="hover:scale-110 transition"
        >
          <Share2 size={22} />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hover:scale-110 transition"
        >
          {mounted && (theme === "dark" ? <Sun size={22} /> : <Moon size={22} />)}
        </button>
      </div>

      {/* === SOCIAL MODAL (MOBILE) === */}
      {isSocialOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 md:hidden">
          <div
            className={`
              flex flex-col space-y-6 p-6 rounded-2xl shadow-xl
              dark:bg-white dark:text-black bg-black text-white
            `}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Connect with me</h2>
              <button onClick={() => setIsSocialOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
