import React from "react";

export default function Certificates() {
  const certifications = [
    {
      name: "Microsoft Certification",
      issuer: "Microsoft",
      icon: "workspace_premium",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "hover:border-blue-500/50",
      iconColor: "text-blue-400",
      url: "https://www.linkedin.com/in/muthu-selvam-m-575219390/",
      description: "Cloud fundamentals and systems engineering certification.",
    },
    {
      name: "Google Certification",
      issuer: "Google",
      icon: "stars",
      color: "from-red-500/20 to-yellow-500/20",
      borderColor: "hover:border-red-500/50",
      iconColor: "text-red-400",
      url: "https://www.linkedin.com/in/muthu-selvam-m-575219390/",
      description: "Data analytics and core infrastructure credential.",
    },
    {
      name: "Oracle APEX",
      issuer: "Oracle",
      icon: "verified",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "hover:border-orange-500/50",
      iconColor: "text-orange-400",
      url: "https://www.linkedin.com/in/muthu-selvam-m-575219390/",
      description: "Enterprise low-code development and database management.",
    },
  ];

  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-x" id="certificates">
      {/* Title */}
      <div className="text-center mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Certifications
        </h2>
        <p className="text-on-surface-variant font-body-md mt-2">
          Recognized credentials from industry leaders.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className={`glass-panel p-8 rounded-2xl border border-white/10 transition-all duration-300 ${cert.borderColor} flex flex-col items-center text-center group`}
          >
            {/* Category Icon */}
            <div
              className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <span className={`material-symbols-outlined text-4xl ${cert.iconColor}`}>
                {cert.icon}
              </span>
            </div>

            {/* Content */}
            <h3 className="font-headline-md text-headline-md mb-2 font-bold text-on-surface">
              {cert.name}
            </h3>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold mb-4 block">
              {cert.issuer}
            </span>
            <p className="text-on-surface-variant font-body-md leading-relaxed mb-8 flex-grow">
              {cert.description}
            </p>

            {/* Action Button */}
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-outline-variant text-on-surface px-6 py-2.5 rounded-full font-label-md hover:bg-surface-container transition-all active:scale-95 group/btn w-full justify-center"
            >
              View Certificate
              <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
