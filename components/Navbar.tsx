import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-cyan-500/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Adarsh Kumar Singh"
            width={58}
            height={58}
            priority
            className="rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,.35)]"
            style={{ width: "58px", height: "58px" }}
          />

          <div>
            <h2 className="text-xl font-bold leading-none text-white">
              Adarsh Kumar Singh
            </h2>

            <p className="mt-1 text-sm font-medium text-cyan-400">
              AK IT Enterprises
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-gray-300 md:flex">
          <a href="#home" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </nav>

        {/* Resume Button */}
        <a
          href="/resume/ADARSH_KUMAR_SINGH_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl border border-cyan-500 px-5 py-2.5 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black md:block"
        >
          Resume
        </a>
      </div>
    </header>
  );
}