"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ["projects", "skills", "certificates", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 shadow-md border-b border-outline-variant/20"
          : "bg-surface/80 shadow-sm border-b border-outline-variant/10"
      } backdrop-blur-md`}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-x h-20">
        <div className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
          Muthu Selvam
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-stack-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-nav-item transition-all pb-1 ${
                activeSection === link.id
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:muthuselvam948958@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-nav-item hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95 cursor-pointer inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant/30 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-nav-item py-2 border-b border-outline-variant/10 ${
                activeSection === link.id
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:muthuselvam948958@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-full py-3 rounded-lg font-nav-item hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95 mt-2 cursor-pointer text-center block"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
