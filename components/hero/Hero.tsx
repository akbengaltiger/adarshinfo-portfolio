import Container from "../ui/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Animated Background */}
      <HeroBackground />

      {/* Content */}
      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cyan-400">
          <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></div>
        </div>
      </div>
    </section>
  );
}