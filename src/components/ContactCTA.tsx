import React from "react";
import Image from "next/image";

export default function ContactCTA() {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-x" id="contact">
      <div className="p-12 md:p-20 rounded-[40px] text-center bg-surface-container border border-white/5 relative overflow-hidden shadow-2xl">
        
        {/* Background decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h2 className="font-display-xl-mobile md:font-display-xl text-on-surface font-bold leading-tight">
            Need a professional website?
          </h2>
          <p className="text-on-surface-variant font-body-lg">
            Let's build it together. I'm currently accepting new projects and consulting opportunities.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
            <span className="font-headline-md text-headline-md text-on-surface font-bold">
              Contact Me:
            </span>
            
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer text-white"
                href="https://www.linkedin.com/in/muthu-selvam-m-575219390/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer text-white"
                href="https://github.com/muthuselvam-1125"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all text-white cursor-pointer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=muthuselvam948958@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-2xl">mail</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
