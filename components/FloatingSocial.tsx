"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <FaGithub size={22} />,
    href: "https://github.com/akbengaltiger",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={22} />,
    href: "https://www.linkedin.com/in/singhadarshkumar",
    label: "LinkedIn",
  },
  {
    icon: <FaWhatsapp size={22} />,
    href: "https://wa.me/917700082302",
    label: "WhatsApp",
  },
  {
    icon: <Mail size={22} />,
    href: "mailto:contact@adarshinfo.in",
    label: "Email",
  },
];

export default function FloatingSocial() {
  return (
    <div className="fixed left-6 top-1/2 z-[999] hidden -translate-y-1/2 lg:flex flex-col gap-5">
      {socialLinks.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
          }}
          whileHover={{
            scale: 1.15,
            x: 8,
          }}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-slate-900/80 text-cyan-400 shadow-lg backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
        >
          {item.icon}

          <span className="absolute left-16 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            {item.label}
          </span>
        </motion.a>
      ))}

      <div className="mx-auto mt-2 h-20 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
    </div>
  );
}