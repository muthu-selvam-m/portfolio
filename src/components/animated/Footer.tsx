"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const links = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/muthu-selvam-m-575219390/?skipRedirect=true" },
    { name: "GitHub", href: "https://github.com/muthuselvam-1125" },
    { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=muthuselvam948958@gmail.com" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#f4c400] text-[#18181b] pt-32 pb-12 flex flex-col items-center justify-center z-30">
      
      {/* Animated Marquee Layers */}
      <div className="absolute inset-0 flex flex-col justify-around pointer-events-none overflow-hidden opacity-10">
        {[1, 2, 3, 4].map((layer) => (
          <div 
            key={layer}
            className="whitespace-nowrap font-black text-[20vw] leading-none uppercase tracking-tighter"
            style={{ 
              animation: `marquee 40s linear infinite ${layer % 2 === 0 ? 'reverse' : ''}`,
            }}
          >
            MUTHU SELVAM — CREATIVE DEVELOPER — 
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Center Profile Showcase */}
      <div className="relative z-10 flex flex-col items-center mb-24">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(0,0,0,0.3)] mb-8 transform hover:scale-105 transition-transform duration-500">
          <Image
            src="/profile.jpg"
            alt="Muthu Selvam"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="https://www.linkedin.com/in/muthu-selvam-m-575219390/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-blue-600 text-white font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Follow
          </a>
          <a
            href="https://wa.me/917695973074"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-white text-zinc-950 font-bold uppercase tracking-widest text-sm shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Message
          </a>
        </div>
      </div>

      {/* Branding & Navigation */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
          <span className="text-[#18181b]">Muthu</span> <span className="text-white drop-shadow-md">Selvam</span>
        </h2>
        <p className="text-[#18181b]/80 font-medium tracking-widest uppercase mb-12">
          Building Digital Experiences
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#18181b] font-bold uppercase tracking-widest hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 rounded-full mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between w-full text-xs font-bold uppercase tracking-widest text-black/60 gap-4">
          <p>© 2026 Muthu Selvam. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
