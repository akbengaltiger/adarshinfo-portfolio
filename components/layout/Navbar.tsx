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
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(`#${section.id}`);
        }
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
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

        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-4"
          aria-label="Go to Homepage"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl"></div>

            <Image
              src="/images/logo.png"
              alt="Adarsh Kumar Singh Logo"
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
            <h1 className="leading-tight text-lg font-bold text-white">
              Adarsh Kumar Singh
            </h1>

            <p className="text-sm text-cyan-400">
              AK IT Enterprises
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) => {
            const active = activeSection === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-1 py-2 font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  active
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Buttons */}

        <div className="hidden items-center gap-3 lg:flex">
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

        {/* Mobile Button */}

        <button
          type="button"
          aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="border-t border-cyan-500/20 bg-slate-900/95 backdrop-blur-xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-4 transition ${
                activeSection === item.href
                  ? "bg-cyan-500/10 text-cyan-400"
                  : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400"
              }`}
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
        </nav>
      )}
    </header>
  );
}