"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Finmech Business Services Pvt. Ltd.",
    designation: "IT Team Leader",
    duration: "Oct 2025 - Present",
    location: "Mumbai",
    responsibilities: [
      "Leading Desktop Support Team",
      "Windows Server Administration",
      "Active Directory & Group Policy",
      "Microsoft 365 Administration",
      "IT Asset Management",
      "Network Infrastructure Management",
      "Vendor Coordination",
      "IT Operations & Support",
    ],
    current: true,
  },
  {
    company: "Team Computers Pvt. Ltd.",
    client: "Client: Raymond Ltd.",
    designation: "Desktop Support Engineer L1",
    duration: "Feb 2024 - Oct 2025",
    location: "Thane",
    responsibilities: [
      "Managed branch IT infrastructure",
      "Desktop & Laptop Support",
      "Network Troubleshooting",
      "Windows Server Support",
      "User Account Administration",
      "Hardware & Software Installation",
      "Printer & Peripheral Support",
      "End User Technical Support",
    ],
  },
  {
    company: "ACMA Computers Ltd.",
    client: "Client: Samsara Group",
    designation: "Desktop Support Engineer L1",
    duration: "Jun 2022 - Feb 2024",
    location: "Andheri",
    responsibilities: [
      "Provided PAN India IT Support",
      "Desktop & Laptop Troubleshooting",
      "Operating System Installation",
      "Application Support",
      "Remote User Assistance",
      "Hardware Diagnostics",
      "Asset Tracking",
      "Incident Resolution",
    ],
  },
  {
    company: "Connections Direct India Pvt. Ltd.",
    designation: "IT Support",
    duration: "Sep 2021 - Jun 2022",
    location: "Thane",
    responsibilities: [
      "Office IT Support",
      "Desktop & Laptop Maintenance",
      "Software Installation",
      "Printer Configuration",
      "User Support",
      "Hardware Troubleshooting",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Experience
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Professional
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Journey
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg text-slate-400">
            Over 6+ years of professional experience delivering enterprise IT
            infrastructure, desktop support, networking and system administration
            solutions.
          </p>
        </motion.div>

        <div className="relative mt-20 border-l border-cyan-500/20 pl-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative mb-14"
            >
              <div className="absolute -left-[42px] top-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400" />

              <div className="rounded-3xl border border-cyan-500/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(6,182,212,.2)]">

                {exp.current && (
                  <span className="mb-5 inline-block rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-semibold text-emerald-400">
                    CURRENT
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white">
                  {exp.designation}
                </h3>

                <div className="mt-3 flex flex-wrap gap-6 text-slate-400">

                  <div className="flex items-center gap-2">
                    <Building2 size={18} className="text-cyan-400" />
                    {exp.company}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} className="text-cyan-400" />
                    {exp.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-cyan-400" />
                    {exp.location}
                  </div>

                </div>

                {exp.client && (
                  <p className="mt-3 text-cyan-300 font-medium">
                    {exp.client}
                  </p>
                )}

                <div className="mt-8 grid gap-3 md:grid-cols-2">

                  {exp.responsibilities.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-cyan-500/10 bg-slate-800/50 p-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 text-cyan-400"
                      />

                      <span className="text-slate-300">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}