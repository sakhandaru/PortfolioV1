"use client";

import {
  Home,
  User,
  Moon,
  Sun,
  Share2,
  FolderGit2,
  X,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
} from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isBottomRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // 1. Detect bottom for auto-opening social links
      const isBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;
      
      if (isBottom && !isBottomRef.current) {
        setIsSocialOpen(true);
        isBottomRef.current = true;
      } else if (!isBottom && isBottomRef.current) {
        setIsSocialOpen(false);
        isBottomRef.current = false;
      }

      // 2. Detect active section
      const sections = ["hero", "about", "projects"];
      let current = "";
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < 100) {
        current = "hero";
      } else {
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 3) {
              current = id;
            }
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#hero", icon: <Home size={20} />, label: "Home", id: "hero" },
    { href: "/#about", icon: <User size={20} />, label: "About", id: "about" },
    { href: "/#projects", icon: <FolderGit2 size={20} />, label: "Projects", id: "projects" },
  ];

  const socialLinks = [
    {
      href: "https://wa.me/+6287716632356",
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
    },
    {
      href: "https://instagram.com/sakhandaru",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
    },
    {
      href: "https://linkedin.com/in/Rifqis Sakha",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/sakhandaru",
      icon: <FaGithub size={20} />,
      label: "GitHub",
    },
    {
      href: "https://gitlab.com/sakhandaru",
      icon: <FaGitlab size={20} />,
      label: "GitLab",
    },
  ];

  return (
    <>
      {/* === RESPONSIVE DOCK NAVBAR (Dynamic Island) === */}
      <div
        className={`
          fixed left-1/2 -translate-x-1/2 z-50
          bottom-8 md:bottom-auto md:top-8
          flex items-center justify-center
          px-3 sm:px-4 md:px-6
          rounded-full py-3 md:py-3 
          shadow-xl backdrop-blur-xl
          dark:bg-white dark:text-black bg-black text-white
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isSocialOpen ? "w-[90%] sm:w-min" : "w-auto max-w-sm"}
        `}
      >
        {/* Nav Items */}
        <div 
          className={`flex items-center transition-all duration-500 ease-in-out overflow-hidden ${
            isSocialOpen ? "max-w-0 opacity-0 md:max-w-0" : "max-w-[500px] opacity-100"
          }`}
        >
          <div className="flex items-center pr-2 md:pr-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center transition-all duration-500 flex-shrink-0 py-2 ${
                    isActive ? "px-2 mx-1" : "px-2 mx-0 hover:scale-110 hover:opacity-80"
                  }`}
                  aria-label={item.label}
                  title={item.label}
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span 
                    className={`overflow-hidden transition-all duration-500 whitespace-nowrap font-medium text-sm flex items-center ${
                      isActive ? "max-w-[80px] opacity-100 ml-2" : "max-w-0 opacity-0 ml-0"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Share Toggle Button */}
        <button
          onClick={() => setIsSocialOpen(!isSocialOpen)}
          className={`hover:scale-110 hover:opacity-80 transition-all z-10 flex-shrink-0 min-w-[40px] flex justify-center py-2 ${
            isSocialOpen ? "text-blue-500" : ""
          }`}
          aria-label={isSocialOpen ? "Close Social Media" : "Open Social Media"}
        >
          {isSocialOpen ? (
            <X size={20} className="rotate-90 hover:rotate-0 transition-transform duration-500" />
          ) : (
            <Share2 size={20} className="hover:-rotate-12 transition-transform duration-500" />
          )}
        </button>

        {/* Social Icons - Expands outward */}
        <div 
          className={`flex items-center transition-all duration-500 ease-in-out overflow-hidden ${
            isSocialOpen ? "max-w-[300px] opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 pl-4 md:pl-6 pr-2">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-blue-500 transition-all flex-shrink-0 py-2"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Dark Mode Toggle - Stays visible but has a divider */}
        <div className="flex items-center transition-all duration-500 overflow-hidden ml-2 pl-3 md:ml-4 md:pl-4 border-l border-gray-300/20 dark:border-gray-700/50">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:scale-110 hover:opacity-80 transition-all flex-shrink-0 flex justify-center w-[40px] p-2"
            aria-label="Toggle Dark Mode"
          >
            {mounted &&
              (theme === "dark" ? <Sun size={24} /> : <Moon size={24} />)}
          </button>
        </div>
      </div>
    </>
  );
}
