import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background to-surface pt-24 pb-16 md:py-0">
      <div className="max-w-container-max mx-auto px-margin-x w-full grid md:grid-cols-2 gap-gutter items-center relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-stack-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary/10 text-tertiary rounded-full w-fit animate-pulse">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="font-label-sm text-label-sm font-medium">Available for Work</span>
          </div>
          
          <h1 className="font-display-xl-mobile md:font-display-xl text-on-surface leading-tight">
            Full Stack <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Developer</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            I design and develop modern, scalable, and high-performance websites from frontend to backend with precision and enterprise-grade reliability.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-label-md text-label-md hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all text-center cursor-pointer active:scale-95 font-bold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-all text-center cursor-pointer active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Column (Browser Mockup) */}
        <div className="relative hidden md:block">
          <div className="relative z-20 transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="glass-panel rounded-xl overflow-hidden browser-shadow">
              
              {/* Browser Header Bar */}
              <div className="h-8 bg-surface-container-highest flex items-center px-4 gap-1.5 border-b border-outline-variant/30">
                <div className="w-3 h-3 rounded-full bg-error/40"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
                <div className="w-3 h-3 rounded-full bg-primary/40"></div>
              </div>
              
              {/* Dashboard Screenshot */}
              <Image
                alt="Dashboard Mockup"
                className="w-full h-[350px] md:h-[450px] object-cover object-top"
                src="/dashboard_mockup.png"
                width={800}
                height={500}
                priority
              />
            </div>
          </div>
          
          {/* Decorative Glowing Blobs */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
