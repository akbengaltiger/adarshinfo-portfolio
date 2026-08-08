"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Windows Server", level: 95 },
  { name: "Active Directory", level: 95 },
  { name: "Microsoft 365", level: 90 },
  { name: "Networking", level: 90 },
  { name: "Linux", level: 85 },
  { name: "Docker", level: 85 },
  { name: "Next.js", level: 85 },
  { name: "HTML / CSS / JavaScript", level: 95 },
  { name: "Python", level: 80 },
  { name: "GLPI", level: 90 },
  { name: "Wazuh", level: 85 },
  { name: "Zabbix", level: 85 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Skills
          </span>

          <h2
            id="skills-heading"
            className="mt-6 text-4xl font-black text-white md:text-5xl"
          >
            Technical Expertise
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Technologies, platforms and enterprise solutions I work with
            on a daily basis.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="rounded-2xl border border-cyan-500/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.20)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-white">
                  {skill.name}
                </h3>

                <span className="font-semibold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              <div
                className="h-3 overflow-hidden rounded-full bg-slate-800"
                role="progressbar"
                aria-label={skill.name}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.level}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
                />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}