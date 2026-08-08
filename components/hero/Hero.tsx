import Container from "../ui/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background */}
      <HeroBackground />

      {/* Main Content */}
      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
      >
        <div className="animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cyan-400/70">
            <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></div>
          </div>
        </div>
      </a>
    </section>
  );
}