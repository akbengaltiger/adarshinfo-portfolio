import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Startup from "@/components/Startup";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navbar />

      <main>

        {/* Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Startup */}
        <section id="startup">
          <Startup />
        </section>

        {/* Featured Project + Projects */}
        <section id="projects">
          <FeaturedProject />
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* Back To Top */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </>
  );
}