"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Star, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Certificates() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const certifications = [
    {
      name: "Oracle APEX",
      issuer: "Oracle",
      icon: ShieldCheck,
      color: "#f97316", // orange-500
      url: "https://www.linkedin.com/posts/muthu-selvam-m-575219390_thrilled-to-share-that-ive-earned-the-oracle-activity-7404170250700832768-hv8H",
      description: "Enterprise low-code development and database management.",
    },
    {
      name: "Google Certification",
      issuer: "Google",
      icon: Star,
      color: "#ef4444", // red-500
      url: "https://www.linkedin.com/posts/muthu-selvam-m-575219390_happy-to-share-that-ive-successfully-completed-activity-7405866279368245248-2PB-",
      description: "Data analytics and core infrastructure credential.",
    },
    {
      name: "Microsoft Certification",
      issuer: "Microsoft",
      icon: Award,
      color: "#3b82f6", // blue-500
      url: "https://www.linkedin.com/posts/muthu-selvam-m-575219390_happy-to-share-that-ive-successfully-completed-activity-7405866607123562496-avtt",
      description: "Cloud fundamentals and systems engineering certification.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-card", 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] bg-zinc-950 flex items-center py-24 z-10"
      id="certificates"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-zinc-400 text-lg font-medium">
            Recognized credentials from industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="cert-card relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center group hover:border-white/30 transition-all duration-500"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity duration-500 -z-10"
                style={{ backgroundColor: cert.color }}
              ></div>

              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500"
                style={{ backgroundColor: cert.color + '20', color: cert.color }}
              >
                <cert.icon size={40} />
              </div>

              <h3 className="text-2xl font-black text-white mb-2">{cert.name}</h3>
              <span 
                className="text-xs font-bold uppercase tracking-widest mb-6 block"
                style={{ color: cert.color }}
              >
                {cert.issuer}
              </span>
              
              <p className="text-zinc-400 font-medium mb-10 flex-grow">
                {cert.description}
              </p>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
