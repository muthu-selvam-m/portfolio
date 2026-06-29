"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const folderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Pharmacy Billing & Accounting",
      domain: "pharmacy-billing-pro.com",
      image: "/dashboard_mockup.png",
      desc: "End-to-end pharmaceutical management with inventory tracking and GST reporting."
    },
    {
      title: "FastEat Food Delivery App",
      domain: "fasteat-delivery.com",
      image: "/food_delivery.png",
      desc: "High-performance food delivery mobile web application featuring live delivery tracking."
    },
    {
      title: "Corporate Portfolio Website",
      domain: "corporate-portfolio.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      desc: "Sleek, professional web presence designed for high-end corporate clients."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Text Parallax
      gsap.to(".bg-text", {
        y: -100,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Desktop: Folder Explosion
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=1000",
          scrub: 1,
          pin: true,
        }
      });

      // Open Folder
      tl.to(".folder-front", {
        rotateX: -120,
        duration: 1,
        ease: "power2.inOut"
      }, 0);

      // Cards Explosion
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        
        cards.forEach((card, i) => {
          const isMobile = window.innerWidth < 768;
          if (!isMobile) {
            const spreadX = (i - 1) * 350; // -350, 0, 350
            const spreadY = i === 1 ? -150 : -50;
            const spreadRot = (i - 1) * 15; // -15, 0, 15
            
            tl.to(card, {
              y: spreadY,
              x: spreadX,
              rotation: spreadRot,
              scale: 1.1,
              opacity: 1,
              duration: 1.5,
              ease: "back.out(1.2)"
            }, 0.5 + (i * 0.1));
          }
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#f7f6f2] overflow-hidden py-32 flex items-center justify-center"
      id="projects"
    >
      {/* Ambient Glow & Textures */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#f4c400] blur-[120px] rounded-full opacity-30 pointer-events-none"></div>
      
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h2 className="bg-text text-[22vw] font-black uppercase text-zinc-900/5 whitespace-nowrap tracking-tighter">
          My Work
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center pt-24 md:pt-0">
        
        <div className="mb-16 md:hidden text-center">
          <h2 className="text-4xl font-black text-zinc-900 uppercase">Featured Projects</h2>
          <p className="text-zinc-600 mt-2 font-medium">Swipe to explore</p>
        </div>

        {/* 3D Folder Container (Desktop focus) */}
        <div className="relative perspective-[2000px] hidden md:block w-[300px] h-[200px]" ref={folderRef}>
          
          {/* Folder Back */}
          <div className="absolute inset-0 bg-[#e0a800] rounded-lg shadow-2xl border border-[#c49200] transform-style-preserve-3d" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.1)' }}></div>
          
          {/* Cards Container */}
          <div ref={cardsRef} className="absolute inset-0 flex items-center justify-center z-10">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="absolute w-[320px] bg-white rounded-[28px] overflow-hidden shadow-2xl border border-zinc-200 opacity-0 group transform-gpu origin-bottom"
                style={{ y: 50, scale: 0.8 }}
              >
                <div className="h-6 bg-zinc-100 flex items-center px-4 gap-1.5 border-b border-zinc-200">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                  </div>
                  <div className="mx-auto text-[8px] font-mono text-zinc-400">
                    {project.domain}
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                    <p className="text-zinc-300 text-sm mt-2 line-clamp-2">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Folder Front */}
          <div className="folder-front absolute inset-0 bg-[#f4c400] rounded-lg shadow-[0_-10px_30px_rgba(0,0,0,0.2)] border border-[#e0a800] origin-bottom z-20 flex items-end p-4">
            <div className="w-16 h-4 bg-[#d09c00] rounded-full mx-auto shadow-inner"></div>
          </div>
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden w-full flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-6 no-scrollbar">
          {projects.map((project, idx) => (
            <div key={idx} className="min-w-[85vw] snap-center bg-white rounded-[28px] overflow-hidden shadow-2xl border border-zinc-200">
              <div className="h-8 bg-zinc-100 flex items-center px-4 border-b border-zinc-200">
                <div className="mx-auto text-[10px] font-mono text-zinc-400">
                  {project.domain}
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-zinc-900 font-black text-xl leading-tight">{project.title}</h3>
                <p className="text-zinc-500 text-sm mt-2">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
