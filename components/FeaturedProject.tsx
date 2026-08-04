"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  ExternalLink,
  Monitor,
  ShieldCheck,
  Database,
  Code2,
} from "lucide-react";

const features = [
  "Responsive UI",
  "User Authentication",
  "Admin Dashboard",
  "Database Management",
  "Secure Login",
  "Modern Design",
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "MySQL",
  "Bootstrap",
];

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Featured Project
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            SPMW
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Website
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg text-slate-400">
            One of my featured projects developed to provide a modern,
            responsive and secure web platform with a focus on usability,
            performance and scalability.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-5 shadow-[0_0_60px_rgba(6,182,212,.15)] backdrop-blur-xl">

              <Image
                src="/images/spmw.png"
                alt="SPMW Website"
                width={1200}
                height={700}
                priority
                className="rounded-2xl"
              />

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3">

              <Monitor className="text-cyan-400" />

              <h3 className="text-3xl font-bold text-white">
                Project Overview
              </h3>

            </div>

            <p className="mt-6 leading-8 text-slate-300">
              The SPMW website was designed and developed with a focus on
              delivering a clean user experience, responsive interface,
              reliable backend functionality and secure data handling.
            </p>

            <div className="mt-10">

              <h4 className="mb-4 text-xl font-semibold text-white">
                Key Features
              </h4>

              <div className="grid gap-3 sm:grid-cols-2">

                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-cyan-500/10 bg-slate-900/50 p-3"
                  >
                    <ShieldCheck
                      size={18}
                      className="text-cyan-400"
                    />

                    <span className="text-slate-300">
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            <div className="mt-10">

              <h4 className="mb-4 text-xl font-semibold text-white">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-3">

                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://www.spmw.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                <ExternalLink size={18} />
                Visit Website
              </a>

              <div className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/20 px-6 py-3 text-cyan-300">

                <Globe size={18} />

                www.spmw.in

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}