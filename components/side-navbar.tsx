"use client";

import {
  Home,
  User,
  Moon,
  Sun,
  Share2,
  FolderGit2,
  X,
  FileText,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
} from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isBottomRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 100;

      if (isBottom && !isBottomRef.current) {
        setIsSocialOpen(true);
        isBottomRef.current = true;
      } else if (!isBottom && isBottomRef.current) {
        setIsSocialOpen(false);
        isBottomRef.current = false;
      }

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
            if (
              rect.top <= windowHeight / 2 &&
              rect.bottom >= windowHeight / 3
            ) {
              current = id;
            }
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#hero", icon: <Home size={20} />, label: "Home", id: "hero" },
    { href: "/#about", icon: <User size={20} />, label: "About", id: "about" },
    {
      href: "/#projects",
      icon: <FolderGit2 size={20} />,
      label: "Projects",
      id: "projects",
    },
  ];

  const socialLinks = [
    {
      href: "/Rifqis_Sakha_CV.pdf",
      icon: <FileText size={20} />,
      label: "Download CV",
      download: true,
    },
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
      <div
        className={`flex items-center overflow-hidden transition-all duration-500 ease-in-out ${
            isSocialOpen
              ? "max-w-0 opacity-0 md:max-w-0"
              : "max-w-[500px] opacity-100"
          }`}
      >
        <div className="flex items-center">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex flex-shrink-0 items-center py-2 transition-all duration-500 ${
                  isActive
                    ? "mx-1 px-2"
                    : "mx-0 px-2 hover:scale-110 hover:opacity-80"
                }`}
                aria-label={item.label}
                title={item.label}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <span
                  className={`flex items-center overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 ${
                    isActive
                      ? "ml-2 max-w-[80px] opacity-100"
                      : "ml-0 max-w-0 opacity-0"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => setIsSocialOpen(!isSocialOpen)}
        className={`z-10 flex min-w-[40px] flex-shrink-0 justify-center py-2 transition-all hover:scale-110 hover:opacity-80 ${
            isSocialOpen ? "text-blue-500" : ""
          }`}
        aria-label={isSocialOpen ? "Close Social Media" : "Open Social Media"}
      >
        {isSocialOpen ? (
          <X
            size={20}
            className="rotate-90 transition-transform duration-500 hover:rotate-0"
          />
        ) : (
          <Share2
            size={20}
            className="transition-transform duration-500 hover:-rotate-12"
          />
        )}
      </button>

      <div
        className={`flex items-center overflow-hidden transition-all duration-500 ease-in-out ${
            isSocialOpen ? "max-w-[300px] opacity-100" : "max-w-0 opacity-0"
          }`}
      >
        <div className="flex items-center gap-4 pl-4 pr-2 md:pl-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              download={link.download ? "Rifqis_Sakha_CV.pdf" : undefined}
              className="flex-shrink-0 py-2 transition-all hover:scale-110 hover:text-blue-500"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="ml-2 flex items-center overflow-hidden border-l border-gray-300/20 pl-3 transition-all duration-500 md:ml-4 md:pl-4 dark:border-gray-700/50">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex w-[40px] flex-shrink-0 justify-center p-2 transition-all hover:scale-110 hover:opacity-80"
          aria-label="Toggle Dark Mode"
        >
          {mounted ? (
            theme === "dark" ? <Sun size={24} /> : <Moon size={24} />
          ) : null}
        </button>
      </div>
    </div>
  );
}
