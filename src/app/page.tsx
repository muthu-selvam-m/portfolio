import React from "react";
import LenisWrapper from "@/components/LenisWrapper";
import Navbar from "@/components/animated/Navbar";
import Hero from "@/components/animated/Hero";
import Welcome from "@/components/animated/Welcome";
import Portfolio from "@/components/animated/Portfolio";
import Projects from "@/components/animated/Projects";
import Services from "@/components/animated/Services";
import Certificates from "@/components/animated/Certificates";
import Contact from "@/components/animated/Contact";
import Footer from "@/components/animated/Footer";

export default function Home() {
  return (
    <LenisWrapper>
      <Navbar />
      <main className="bg-zinc-950 min-h-screen">
        <Hero />
        <Welcome />
        <Portfolio />
        <Projects />
        <Services />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </LenisWrapper>
  );
}
