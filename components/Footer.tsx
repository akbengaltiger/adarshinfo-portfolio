"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { Mail, Globe } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-500/10 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-2xl font-black text-white shadow-lg shadow-cyan-500/30">
                AK
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Adarsh Kumar Singh
                </h2>

                <p className="text-sm text-cyan-400">
                  IT Team Leader
                </p>
              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              Passionate IT professional specializing in Windows Server,
              Active Directory, Microsoft 365, Networking, Infrastructure
              Management and Full Stack Development.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Expertise
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Windows Server</li>
              <li>Active Directory</li>
              <li>Microsoft 365</li>
              <li>Networking</li>
              <li>IT Infrastructure</li>
              <li>Full Stack Development</li>

            </ul>

          </div>

          {/* Contact */}

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
                href="https://adarshinfo.in"
                target="_blank"
                className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
              >
                <Globe size={18} />
                adarshinfo.in
              </a>

            </div>

            <div className="mt-8 flex gap-5">

              <a
                href="https://github.com/akbengaltiger"
                target="_blank"
                className="text-slate-400 transition hover:scale-110 hover:text-cyan-400"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/singhadarshkumar"
                target="_blank"
                className="text-slate-400 transition hover:scale-110 hover:text-cyan-400"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://wa.me/917700082302"
                target="_blank"
                className="text-slate-400 transition hover:scale-110 hover:text-green-500"
              >
                <FaWhatsapp size={24} />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center">

        <p className="text-slate-500">

          © {new Date().getFullYear()} Adarsh Kumar Singh.

          Built with ❤️ using Next.js, Tailwind CSS & TypeScript.

        </p>

      </div>

    </footer>
  );
}