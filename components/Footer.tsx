"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, Globe, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "AK IT", href: "#startup" },
  { name: "Contact", href: "#contact" },
];

const technologies = [
  "Windows Server",
  "Active Directory",
  "Microsoft 365",
  "Azure",
  "Docker",
  "Linux",
  "Networking",
  "Next.js",
  "React",
  "PowerShell",
  "Virtualization",
  "Automation",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-500/10 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/images/logo.png"
                alt="Adarsh Kumar Singh"
                width={70}
                height={70}
                priority
                className="rounded-full border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,.35)]"
                style={{
                  width: "70px",
                  height: "70px",
                }}
              />

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Adarsh Kumar Singh
                </h2>

                <p className="text-sm text-cyan-400">
                  IT Team Leader | System Administrator
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              Passionate IT professional specializing in Enterprise
              Infrastructure, Windows Server, Active Directory,
              Microsoft 365, Networking, Virtualization,
              Automation and Full Stack Development.
            </p>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-all duration-300 hover:pl-2 hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* ================= CORE TECHNOLOGIES ================= */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Core Technologies
            </h3>

            <div className="flex flex-wrap gap-3">

              {technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:contact@adarshinfo.in"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <Mail size={18} />
                contact@adarshinfo.in
              </a>

              <a
                href="https://www.adarshinfo.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <Globe size={18} />
                www.adarshinfo.in
              </a>

              <a
                href="tel:+917700082302"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <Phone size={18} />
                +91 77000 82302
              </a>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                Maharashtra, India
              </div>

            </div>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/akbengaltiger"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/singhadarshkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://wa.me/917700082302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white"
              >
                <FaWhatsapp size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}

      <div className="border-t border-cyan-500/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Adarsh Kumar Singh. All Rights Reserved.
          </p>

          <p>
            Designed & Developed with ❤️ using Next.js 16 • Tailwind CSS • TypeScript
          </p>

        </div>

      </div>

    </footer>
  );
}