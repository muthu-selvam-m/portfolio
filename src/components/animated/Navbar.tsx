"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // GSAP Intro Animation
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });
      
      if (linksRef.current) {
        gsap.from(linksRef.current.children, {
          y: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3
        });
      }
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        autoAlpha: 0,
        y: -20,
        duration: 0.4,
        ease: "power3.in"
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-zinc-950/80 backdrop-blur-3xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div 
            ref={logoRef}
            className="text-2xl font-black tracking-tighter text-white cursor-pointer hover:text-yellow-400 transition-colors duration-300 drop-shadow-[0_0_15px_rgba(250,204,21,0)] hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
          >
            Muthu Selvam
          </div>

          {/* Desktop Links */}
          <div ref={linksRef} className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-yellow-400 font-medium text-sm uppercase tracking-wider relative group transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=muthuselvam948958@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-white text-zinc-950 font-bold uppercase tracking-wider text-sm hover:bg-yellow-400 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors z-[60]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-zinc-950/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center invisible opacity-0"
      >
        <div className="flex flex-col items-center gap-8 text-3xl font-black uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=muthuselvam948958@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
             onClick={() => setIsOpen(false)}
             className="mt-8 px-10 py-4 rounded-full bg-yellow-400 text-zinc-950 text-xl hover:scale-105 transition-transform duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
