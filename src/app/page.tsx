import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import CaseStudies from "@/components/CaseStudies";
import SkillsGrid from "@/components/SkillsGrid";
import Certificates from "@/components/Certificates";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <TechMarquee />
        </ScrollReveal>
        <ScrollReveal>
          <PortfolioShowcase />
        </ScrollReveal>
        <ScrollReveal>
          <CaseStudies />
        </ScrollReveal>
        <ScrollReveal>
          <SkillsGrid />
        </ScrollReveal>
        <ScrollReveal>
          <Certificates />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <ContactCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}

