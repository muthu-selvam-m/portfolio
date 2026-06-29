"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Server, Database, Wrench } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeBg, setActiveBg] = useState("#0a0a0a");

  const skillsData = [
    {
      title: "Frontend Development",
      tag: "Client-Side",
      color: "#3b82f6", // Blue
      Icon: Code2,
      description: "HTML/CSS, JavaScript, TypeScript, Angular, React.",
    },
    {
      title: "Backend Systems",
      tag: "Server-Side",
      color: "#8b5cf6", // Purple
      Icon: Server,
      description: "C, Python (Django,flask), Java, REST APIs architecture.",
    },
    {
      title: "Database Architecture",
      tag: "Data",
      color: "#10b981", // Green
      Icon: Database,
      description: "PostgreSQL, MySQL, PL/SQL, Query Optimization.",
    },
    {
      title: "Dev Tools & Deployment",
      tag: "Infrastructure",
      color: "#f59e0b", // Amber
      Icon: Wrench,
      description: "Oracle APEX, Git, GitHub, Postman.",
    }
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Background color transition on scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          const progress = self.progress;
          const idx = Math.min(Math.floor(progress * skillsData.length), skillsData.length - 1);
          if (skillsData[idx]) {
            setActiveBg(skillsData[idx].color + '15');
          }
        }
      });

      // Simple staggered fade up for cards
      if (!isMobile) {
        gsap.from(".skill-card", {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: activeBg }}
      id="skills"
    >
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[18vw] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.05)] tracking-tighter uppercase whitespace-nowrap">
          MASTERY
        </h2>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-24 md:pt-0">

        <div className="text-center mb-16 relative z-10 w-full">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Technical Mastery</h2>
          <p className="text-zinc-400 mt-4 text-lg font-medium">Tools and technologies I use to build robust solutions</p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid w-full max-w-7xl mx-auto grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card w-full h-[400px] rounded-[30px] bg-zinc-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl p-8 flex flex-col justify-between group overflow-hidden"
            >
              {/* Card Background Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl -z-10"
                style={{ backgroundColor: skill.color }}
              ></div>

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: skill.color + '30', color: skill.color }}
                  >
                    <skill.Icon size={32} />
                  </div>
                  <span
                    className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
                    style={{ borderColor: skill.color + '50', color: skill.color }}
                  >
                    {skill.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                  {skill.title}
                </h3>
                <p className="text-zinc-400 text-lg font-medium leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden w-full flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-6 no-scrollbar">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="min-w-[85vw] h-[450px] snap-center bg-zinc-900/80 backdrop-blur-xl rounded-[30px] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl"
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 blur-3xl -z-10 opacity-20 rounded-full"
                style={{ backgroundColor: skill.color }}
              ></div>

              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: skill.color + '30', color: skill.color }}
                >
                  <skill.Icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">
                  {skill.title}
                </h3>
                <p className="text-zinc-400 font-medium">
                  {skill.description}
                </p>
              </div>
              <div
                className="w-fit px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
                style={{ borderColor: skill.color + '50', color: skill.color }}
              >
                {skill.tag}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
