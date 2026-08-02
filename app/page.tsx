import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Startup from "@/components/Startup";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProject />
      <Startup />
      <Projects />
    </>
  );
}