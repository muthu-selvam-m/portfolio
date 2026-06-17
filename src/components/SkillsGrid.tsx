import React from "react";

export default function SkillsGrid() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "data_object",
      bgClass: "bg-primary/10",
      textClass: "text-primary",
      hoverClass: "hover:border-primary",
      bulletClass: "bg-primary",
      items: [
        "HTML / CSS",
        "JavaScript ",
        "TypeScript",
        "Angular Framework",
        "React",
      ],
    },
    {
      title: "Backend",
      icon: "settings_ethernet",
      bgClass: "bg-tertiary/10",
      textClass: "text-tertiary",
      hoverClass: "hover:border-tertiary",
      bulletClass: "bg-tertiary",
      items: [
        "Python / Django / Flask",
        "Java",
        "REST API",
      ],
    },
    {
      title: "Database",
      icon: "database",
      bgClass: "bg-primary/10",
      textClass: "text-primary",
      hoverClass: "hover:border-primary",
      bulletClass: "bg-primary",
      items: [
        "PostgreSQL",
        "MySQL",
        "PL/SQL",
        "Query Optimization",
      ],
    },
    {
      title: "Tools",
      icon: "terminal",
      bgClass: "bg-primary/10",
      textClass: "text-primary",
      hoverClass: "hover:border-primary",
      bulletClass: "bg-primary",
      items: [
        "Oracle APEX",
        "Git & GitHub",
        "Postman",
      ],
    },
  ];

  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-x" id="skills">
      {/* Title */}
      <div className="text-center mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Technical Mastery
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            className={`glass-panel p-6 rounded-2xl border border-white/10 transition-all duration-300 ${cat.hoverClass}`}
          >
            {/* Category Icon */}
            <div
              className={`w-12 h-12 ${cat.bgClass} ${cat.textClass} rounded-xl flex items-center justify-center mb-4`}
            >
              <span className="material-symbols-outlined text-2xl font-bold">
                {cat.icon}
              </span>
            </div>

            {/* Category Title */}
            <h3 className="font-headline-md text-headline-md mb-4 font-bold text-on-surface">
              {cat.title}
            </h3>

            {/* Skills list */}
            <ul className="space-y-2.5 text-on-surface-variant font-label-md text-label-md">
              {cat.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${cat.bulletClass}`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
