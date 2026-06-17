import React from "react";

export default function TechMarquee() {
  const technologies = [
    { name: "HTML", isBold: false },
    { name: "CSS", isBold: false },
    { name: "JavaScript", isBold: false },
    { name: "TypeScript", isBold: false },
    { name: "Angular", isBold: true },
    { name: "Python", isBold: false },
    { name: "Django", isBold: true },
    { name: "PostgreSQL", isBold: false },
    { name: "MySQL", isBold: false },
    { name: "REST APIs", isBold: false },
    { name: "Git", isBold: false },
    { name: "GitHub", isBold: false },
    { name: "Oracle APEX", isBold: true },
    { name: "Docker", isBold: false },
    { name: "Linux", isBold: false },
    { name: "Deployment", isBold: false },
  ];

  return (
    <div className="py-12 bg-surface-container-lowest border-y border-outline-variant/10 overflow-hidden select-none">
      <div className="flex w-max">
        {/* First marquee set */}
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {technologies.map((tech, i) => (
            <span
              key={`tech-1-${i}`}
              className={`font-label-md text-label-md px-8 ${
                tech.isBold ? "font-bold text-primary" : "text-on-surface-variant"
              }`}
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        {/* Second duplicate marquee set for seamless looping */}
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap" aria-hidden="true">
          {technologies.map((tech, i) => (
            <span
              key={`tech-2-${i}`}
              className={`font-label-md text-label-md px-8 ${
                tech.isBold ? "font-bold text-primary" : "text-on-surface-variant"
              }`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
