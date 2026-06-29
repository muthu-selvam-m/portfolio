"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animations
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5
      });

      gsap.from(".social-icon", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1.2
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.8
      });

      // Parallax Scroll Effects
      gsap.to(textRef.current, {
        y: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2
        }
      });

      gsap.to(imageRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Section - Text Content */}
        <div ref={textRef} className="flex flex-col gap-6 relative z-20">
          <div className="hero-text inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Full Stack Developer</span>
          </div>
          
          <div className="hero-text">
            <h1 className="text-6xl md:text-[8vw] leading-none font-black text-white tracking-tighter uppercase">
              Hello, I'm
            </h1>
            <h1 className="text-6xl md:text-[8vw] leading-none font-black text-transparent [-webkit-text-stroke:2px_#facc15] tracking-tighter uppercase">
              Muthu Selvam
            </h1>
          </div>
          
          <p className="hero-text text-zinc-400 text-lg md:text-xl max-w-lg font-medium leading-relaxed mt-4">
            I design and develop modern, scalable, and high-performance websites from frontend to backend with precision and enterprise-grade reliability.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {[
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/muthu-selvam-m-575219390/?skipRedirect=true" },
              { Icon: FaGithub, href: "https://github.com/muthuselvam-1125" },
              { Icon: FaWhatsapp, href: "https://wa.me/917695973074" }, 
              { Icon: FaInstagram, href: "#" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-zinc-950 hover:border-yellow-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300"
              >
                <social.Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Hero Image */}
        <div ref={imageRef} className="relative hidden md:flex justify-end items-center">
          <div className="relative w-full max-w-[500px] aspect-[3/4] rounded-[2rem] overflow-hidden border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            {/* User Profile Photo */}
            <Image
              alt="Muthu Selvam"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="/profile.jpg" 
              width={500}
              height={700}
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-400/10 blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
