export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-white">
          Adarsh<span className="text-sky-400">Info</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-sky-400 transition">Home</a>
          <a href="#about" className="hover:text-sky-400 transition">About</a>
          <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
          <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}