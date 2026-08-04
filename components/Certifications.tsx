"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Server,
  Network,
  Award,
} from "lucide-react";

const certifications = [
  {
    title: "Windows Server Administration",
    issuer: "Microsoft",
    icon: <Server className="text-cyan-400" size={28} />,
    year: "2024",
  },
  {
    title: "Active Directory Administration",
    issuer: "Microsoft",
    icon: <Shield className="text-cyan-400" size={28} />,
    year: "2024",
  },
  {
    title: "Networking Fundamentals",
    issuer: "Cisco",
    icon: <Network className="text-cyan-400" size={28} />,
    year: "2023",
  },
  {
    title: "IT Infrastructure Management",
    issuer: "Professional Training",
    icon: <Award className="text-cyan-400" size={28} />,
    year: "2025",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Certifications
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Professional
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Certifications
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Industry knowledge and continuous learning through
            professional training and certifications.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-cyan-500/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,.25)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                {cert.icon}
              </div>

              <h3 className="text-xl font-bold text-white">
                {cert.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {cert.issuer}
              </p>

              <span className="mt-6 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}