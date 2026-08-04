"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Building2,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const highlights = [
    "Windows Server Administration",
    "Active Directory & Group Policy",
    "Microsoft 365 Administration",
    "Networking & IT Infrastructure",
    "Asset & Endpoint Management",
    "Full Stack Web Development",
  ];

  const stats = [
    {
      icon: <Briefcase className="h-8 w-8 text-cyan-400" />,
      value: "6+",
      title: "Years Experience",
    },
    {
      icon: <Award className="h-8 w-8 text-cyan-400" />,
      value: "20+",
      title: "Projects Completed",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-cyan-400" />,
      value: "B.Sc IT",
      title: "Education",
    },
    {
      icon: <Building2 className="h-8 w-8 text-cyan-400" />,
      value: "Oct 2025",
      title: "Current Company",
    },
  ];

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              About Me
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
              Building Secure IT Infrastructure &
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Modern Digital Solutions
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              I'm <strong>Adarsh Kumar Singh</strong>, an{" "}
              <strong>IT Team Leader</strong> with over{" "}
              <strong>6 years of experience</strong> in IT Infrastructure,
              Windows Server, Active Directory, Microsoft 365, Networking,
              Desktop Support and Full Stack Development.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Along with leading enterprise IT operations, I am also the
              founder of <strong>AK IT Enterprises</strong>, where I focus on
              delivering innovative technology solutions, automation, and modern
              web applications that help businesses grow securely and
              efficiently.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-cyan-500/10 bg-slate-900/50 p-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
              >
                <div className="mb-5">{item.icon}</div>

                <h3 className="text-3xl font-bold text-cyan-400">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-300">{item.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}