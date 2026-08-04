"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Button from "../ui/Button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "AK IT", href: "#startup" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-500/20 bg-slate-950/80 shadow-xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl"></div>

            <Image
              src="/images/logo.png"
              alt="Adarsh Kumar Singh"
              width={56}
              height={56}
              priority
              className="relative rounded-full border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,.45)]"
              style={{
                width: "56px",
                height: "56px",
              }}
            />

          </div>

          <div>

            <h1 className="text-lg font-bold text-white leading-tight">
              Adarsh Kumar Singh
            </h1>

            <p className="text-sm text-cyan-400">
              AK IT Enterprises
            </p>

          </div>

        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Right Buttons */}

        <div className="hidden lg:flex items-center gap-3">

          <Button
            href="/resume/ADARSH_KUMAR_SINGH_Resume.pdf"
            variant="secondary"
          >
            <div className="flex items-center gap-2">
              <Download size={18} />
              Resume
            </div>
          </Button>

          <Button href="#contact">
            Hire Me
          </Button>

        </div>

        {/* Mobile Menu */}

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}

      {mobileOpen && (
        <div className="border-t border-cyan-500/20 bg-slate-900/95 backdrop-blur-xl lg:hidden">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4 text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}

          <div className="space-y-3 border-t border-cyan-500/20 p-6">

            <Button
              href="/resume/ADARSH_KUMAR_SINGH_Resume.pdf"
              variant="secondary"
            >
              <div className="flex items-center justify-center gap-2">
                <Download size={18} />
                Resume
              </div>
            </Button>

            <Button href="#contact">
              Hire Me
            </Button>

          </div>

        </div>
      )}
    </header>
  );
}