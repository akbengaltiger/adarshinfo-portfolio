"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Terminal from "./Terminal";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
        🚀 Available for IT Infrastructure & Full Stack Development Projects
      </span>

      {/* Heading */}
      <div>
        <h1 className="text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
          Adarsh
        </h1>

        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-6xl lg:text-7xl">
          Kumar Singh
        </h1>
      </div>

      {/* Animated Roles */}
      <TypeAnimation
        sequence={[
          "IT Team Leader",
          2000,
          "System Administrator",
          2000,
          "Full Stack Developer",
          2000,
          "Founder • AK IT Enterprises",
          2000,
        ]}
        wrapper="div"
        repeat={Infinity}
        speed={50}
        className="min-h-[40px] text-xl font-semibold text-cyan-400 md:text-2xl"
      />

      {/* Description */}
      <p className="max-w-2xl text-lg leading-8 text-slate-400">
        Passionate IT professional with{" "}
        <span className="font-semibold text-white">6+ years</span> of
        experience in Windows Server, Active Directory, Networking,
        IT Operations, Desktop Support, Infrastructure Management and
        Full Stack Development. I focus on delivering secure, reliable
        and scalable enterprise IT solutions while leading technical
        teams and driving business success.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button href="#contact">
          <div className="flex items-center gap-2">
            Hire Me
            <ArrowRight size={18} />
          </div>
        </Button>

        <Button
          href="/resume/ADARSH_KUMAR_SINGH_Resume.pdf"
          variant="secondary"
        >
          <div className="flex items-center gap-2">
            <Download size={18} />
            Download Resume
          </div>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4">
        <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-cyan-400">6+</h3>
          <p className="text-sm text-slate-400">Years Experience</p>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
          <p className="text-sm text-slate-400">Projects</p>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-cyan-400">500+</h3>
          <p className="text-sm text-slate-400">Systems Managed</p>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-md">
          <h3 className="text-3xl font-bold text-cyan-400">24×7</h3>
          <p className="text-sm text-slate-400">Support & Operations</p>
        </div>
      </div>

      {/* Terminal */}
      <Terminal />
    </motion.div>
  );
}