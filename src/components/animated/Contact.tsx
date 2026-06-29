"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the contact section for cinematic effect
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });

      gsap.from(".contact-elem", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, this would send an email or message
    window.open("https://wa.me/917695973074", "_blank");
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#0a0a0a] rounded-t-[40px] flex items-center justify-center py-24 overflow-hidden z-20"
      id="contact"
    >
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h2 className="text-[25vw] font-black text-white opacity-[0.03] tracking-tighter">
          CONNECT
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <div className="text-center mb-16 contact-elem">
          <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tight text-white leading-none">
            Let's Talk
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 contact-elem">
          {[
            { name: "WhatsApp", icon: FaWhatsapp, link: "https://wa.me/917695973074" },
            { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/muthu-selvam-m-575219390/?skipRedirect=true" },
            { name: "GitHub", icon: FaGithub, link: "https://github.com/muthuselvam-1125" },
            { name: "Instagram", icon: FaInstagram, link: "#" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 group"
            >
              <social.icon size={28} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] flex flex-col gap-6 contact-elem"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>
          <textarea 
            placeholder="Your Message" 
            required
            rows={5}
            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
          ></textarea>
          
          <button 
            type="submit"
            className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 mt-4"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
