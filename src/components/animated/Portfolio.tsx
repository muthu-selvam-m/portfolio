"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  const [bgColor, setBgColor] = useState("#f4c400"); // default yellow
  
  const colors = [
    { name: "red", hex: "#ef4444" },
    { name: "yellow", hex: "#facc15" },
    { name: "green", hex: "#22c55e" },
    { name: "purple", hex: "#a855f7" },
    { name: "rose", hex: "#f43f5e" },
    { name: "orange", hex: "#f97316" }
  ];

  useEffect(() => {
    if (typeof window === "undefined" || !cursorRef.current || !containerRef.current) return;

    // Set initial position
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.8, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        xTo(e.clientX - rect.left);
        yTo(e.clientY - rect.top);
      }
    };

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.5 });
    };

    containerRef.current.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Animate text on mount
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    });

    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      containerRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center transition-colors duration-700 ease-in-out cursor-crosshair"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Typography */}
      <h1 
        ref={textRef}
        className="absolute z-0 text-[18vw] font-black uppercase tracking-tighter select-none leading-none flex"
      >
        <span className="text-white">P</span>
        <span className="text-white">O</span>
        <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>R</span>
        <span className="text-white">T</span>
        <span className="text-white">F</span>
        <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>O</span>
        <span className="text-white">L</span>
        <span className="text-white">I</span>
        <span className="text-white">O</span>
      </h1>

      {/* Main Showcase Image (Centered) */}
      <div className="relative z-10 w-[80vw] md:w-[50vw] max-w-[600px] aspect-[4/3] pointer-events-none rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="/food_delivery.png" // Placeholder for portfolio image
          alt="Portfolio Item"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      {/* Interactive Cursor Reveal Box */}
      <div 
        ref={cursorRef}
        className="absolute z-20 pointer-events-none w-[280px] h-[280px] overflow-hidden opacity-0 scale-0"
        style={{ 
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.8) dashed' // Marching ants border simulation
        }}
      >
        <div className="absolute inset-0 border-2 border-dashed border-blue-500 animate-[spin_10s_linear_infinite]"></div>
        {/* The content inside the reveal box (sharp image) */}
        <div className="absolute inset-0 scale-110">
           {/* We can simulate the clear reveal by having an unblurred copy */}
           <Image
            src="/food_delivery.png"
            alt="Portfolio Reveal"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Color Switcher */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4 p-4 rounded-full bg-black/10 backdrop-blur-md">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setBgColor(color.hex)}
            className={`w-8 h-8 rounded-full shadow-lg transition-transform hover:scale-125 ${bgColor === color.hex ? 'scale-110 ring-2 ring-white' : ''}`}
            style={{ backgroundColor: color.hex }}
            aria-label={`Switch to ${color.name} background`}
          />
        ))}
      </div>
    </section>
  );
}
