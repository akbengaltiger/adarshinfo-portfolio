"use client";

import Link from "next/link";
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
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
            AK
          </div>

          <div>
            <h1 className="font-bold text-lg text-white">
              Adarsh Kumar Singh
            </h1>

            <p className="text-xs text-cyan-400">
              AK IT Enterprises
            </p>
          </div>
        </Link>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition font-medium"
            >
              {item.name}
            </a>
          ))}

        </nav>

        <div className="hidden lg:flex gap-3">

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

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {mobileOpen && (

        <div className="lg:hidden bg-slate-900 border-t border-cyan-500/20">

          {navItems.map((item) => (

            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4 hover:bg-cyan-500/10"
            >
              {item.name}
            </a>

          ))}

        </div>

      )}
    </header>
  );
}