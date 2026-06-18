import React from "react";

export default function Footer() {
  const links = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/muthu-selvam-m-575219390/?skipRedirect=true" },
    { name: "GitHub", href: "https://github.com/muthuselvam-1125" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=muthuselvam948958@gmail.com" },
  ];

  return (
    <footer className="w-full py-12 bg-surface-container-lowest border-t border-outline-variant/20 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-x gap-stack-md text-center md:text-left">
        
        {/* Logo/Branding */}
        <div className="font-headline-md text-headline-md text-on-surface font-bold">
          Muthu Selvam
        </div>
        
        {/* Copyright notice */}
        <p className="font-body-md text-body-md text-on-surface-variant">
          © 2024 Muthu Selvam. All rights reserved. Built with precision.
        </p>
        
        {/* Footer links */}
        <div className="flex flex-wrap gap-stack-lg justify-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/30 font-label-sm text-label-sm"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
