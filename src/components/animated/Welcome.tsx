"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Welcome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Massive Welcome Text Parallax
      gsap.to(".welcome-text", {
        y: -150,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1
        }
      });

      // About Content Fade & Slide up
      gsap.from(aboutRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[150vh] bg-zinc-950 flex flex-col items-center overflow-hidden pt-32 pb-32"
      id="about"
    >
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* Massive Welcome Text */}
      <div className="relative w-full flex flex-col items-center justify-center h-[60vh] z-10" ref={textRef}>
        <div className="welcome-text text-center space-y-4">
          <h2 className="text-[15vw] md:text-[12vw] font-black uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] leading-none tracking-tighter mix-blend-difference">
            WELCOME
          </h2>
          <p className="text-xl md:text-3xl text-zinc-400 font-medium tracking-widest uppercase">
            To my creative space
          </p>
        </div>
      </div>

      {/* About Section (Replacing Testimonials) */}
      <div 
        ref={aboutRef}
        className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-20 mt-12"
      >
        <div className="glass-panel bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-2xl relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-400/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>

          <div className="w-full md:w-1/2 space-y-8 relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              About Muthu Selvam
            </h3>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I am a dedicated Full Stack Developer with a passion for building
                enterprise-level applications that solve real-world business
                challenges. With expertise in both frontend and backend
                architectures, I create seamless digital experiences from the
                database level to the final pixel.
              </p>
              <p>
                My approach combines technical precision with a deep understanding
                of user needs, ensuring that every platform I build is not only
                powerful but also intuitive and scalable.
              </p>
            </div>
            
            <div className="pt-4">
              <a
                className="inline-flex items-center gap-3 text-yellow-400 font-bold uppercase tracking-widest hover:gap-6 transition-all duration-300 group cursor-pointer"
                href="#contact"
              >
                Let's Work Together
                <span className="w-8 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-12"></span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative z-10">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square border border-zinc-800 shadow-2xl group">
              <Image
                alt="Professional Workspace"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
