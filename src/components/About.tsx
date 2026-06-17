import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="py-section-gap bg-surface border-y border-outline-variant/5 w-full"
      id="about"
    >
      <div className="max-w-container-max mx-auto px-margin-x">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          
          {/* Left Column (Content) */}
          <div className="space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              About Muthu Selvam
            </h2>
            <div className="space-y-4 text-on-surface-variant font-body-lg leading-relaxed">
              <p>
                I am a dedicated Full Stack Developer with a passion for building
                enterprise-level applications that solve real-world business
                challenges. With expertise in both frontend and backend
                architectures, I create seamless digital experiences from the
                database level to the final pixel.
              </p>
              <p>
                My approach combines technical precision with a deep understanding
                of user needs, ensuring that every platform I build is not only
                powerful but also intuitive and scalable.
              </p>
              
              <div className="pt-4">
                <a
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group cursor-pointer"
                  href="#contact"
                >
                  Let's Work Together
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="relative w-full">
            <div className="rounded-3xl shadow-2xl border border-outline-variant/30 overflow-hidden aspect-[4/3] md:aspect-auto">
              <Image
                alt="Professional Workspace"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb0Sa6VKPe0Ns1x5bOOaqV3L3RdwYVX0QLH1a7cRMzUfA-rH8yrJ2DEfjcRCwzp9jOaZRYfp98g5c7BFYVJlRgipDcNPNtNH6ApE_DGnA18MRTIeueyvOO05qCfAMCQfvoQnulS4nlcqjl_ciWB9LM31aVFMLZM5-L71IkeKt2OT3irLgntRTvWMTNpnc5H4RRAkEw2cFrAt9jGmUyUNFWtcsTgnvLuknWLZmuCIN09hb9INL-Il9m-w-UA9CbQrBYh2nwSWEyyg"
                width={600}
                height={450}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
