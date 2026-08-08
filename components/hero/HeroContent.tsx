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
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Badge */}

      <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
        🚀 Available for IT Infrastructure & Full Stack Development Projects
      </span>

      {/* Main Heading */}

      <header>
        <h1
          id="hero-heading"
          className="text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Adarsh
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
            Kumar Singh
          </span>
        </h1>
      </header>

      {/* Animated Role */}

      <div
        aria-label="Professional Role"
        className="min-h-[42px]"
      >
        <TypeAnimation
          sequence={[
            "IT Team Leader",
            2000,
            "System Administrator",
            2000,
            "Infrastructure Engineer",
            2000,
            "Full Stack Developer",
            2000,
            "Founder • AK IT Enterprises",
            2000,
          ]}
          wrapper="span"
          repeat={Infinity}
          speed={50}
          className="text-xl font-semibold text-cyan-400 md:text-2xl"
        />
      </div>

      {/* Description */}

      <p className="max-w-2xl text-lg leading-8 text-slate-400">
        Passionate IT professional with{" "}
        <strong className="font-semibold text-white">
          6+ years
        </strong>{" "}
        of experience in Windows Server, Active Directory, Networking,
        IT Operations, Desktop Support, Infrastructure Management and
        Full Stack Development.

        <br />
        <br />

        I specialize in delivering secure, scalable and enterprise-grade
        IT solutions while leading technical teams, automating
        infrastructure and building modern web applications.
      </p>

      {/* CTA Buttons */}

      <div
        className="flex flex-wrap gap-4"
        aria-label="Primary Actions"
      >
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

      <section
        aria-label="Professional Statistics"
        className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4"
      >
        <article className="rounded-xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-cyan-400">
            6+
          </h2>

          <p className="text-sm text-slate-400">
            Years Experience
          </p>
        </article>

        <article className="rounded-xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-cyan-400">
            100+
          </h2>

          <p className="text-sm text-slate-400">
            Projects
          </p>
        </article>

        <article className="rounded-xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-cyan-400">
            500+
          </h2>

          <p className="text-sm text-slate-400">
            Systems Managed
          </p>
        </article>

        <article className="rounded-xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-cyan-400">
            24×7
          </h2>

          <p className="text-sm text-slate-400">
            Support & Operations
          </p>
        </article>
      </section>

      {/* Terminal */}

      <Terminal />
    </motion.div>
  );
}