"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Rocket,
  ShieldCheck,
  MonitorSmartphone,
  Globe,
  Server,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <Server className="h-8 w-8 text-cyan-400" />,
    title: "IT Infrastructure",
    description:
      "Enterprise infrastructure planning, deployment and maintenance.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-cyan-400" />,
    title: "Cyber Security",
    description:
      "Security-focused solutions, endpoint protection and infrastructure security.",
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-cyan-400" />,
    title: "Managed IT Support",
    description:
      "Professional technical support for endpoints and business IT operations.",
  },
  {
    icon: <Globe className="h-8 w-8 text-cyan-400" />,
    title: "Cloud & Automation",
    description:
      "Cloud, Microsoft 365 and automation solutions for modern businesses.",
  },
];

const capabilities = [
  "Windows Server",
  "Active Directory",
  "Networking",
  "Microsoft 365",
  "Cybersecurity",
  "Monitoring",
  "Virtualization",
  "IT Automation",
];

export default function Startup() {
  return (
    <section id="startup" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Startup
            </span>

            <a
              href="https://ak-it-enterprises.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition hover:border-emerald-400/40 hover:bg-emerald-500/15"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Website Live
            </a>
          </div>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            AK IT
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Enterprises
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            AK IT Enterprises is my technology startup focused on
            delivering IT infrastructure, managed support, networking,
            security, cloud and automation solutions for modern
            businesses.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

              <Image
                src="/images/ak-logo.jpg"
                alt="AK IT Enterprises"
                width={300}
                height={300}
                priority
                className="relative rounded-full border-4 border-cyan-500 shadow-[0_0_60px_rgba(6,182,212,.35)]"
              />

              <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-xl border border-cyan-400/20 bg-slate-950/90 px-5 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  IT Solutions
                </p>

                <p className="mt-1 text-center text-sm font-bold text-cyan-400">
                  Infrastructure • Security • Cloud
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-cyan-500/10 bg-slate-900/60 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3">
                <Rocket className="text-cyan-400" size={28} />

                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Founder Vision
                </h3>
              </div>

              <p className="mt-6 leading-8 text-slate-300">
                My vision is to build AK IT Enterprises into a
                technology company focused on practical, secure and
                scalable IT solutions that help businesses improve
                their infrastructure and technology operations.
              </p>

              {/* Service Cards */}

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-cyan-500/10 bg-slate-800/50 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
                  >
                    {service.icon}

                    <h4 className="mt-4 text-lg font-semibold text-white">
                      {service.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Capabilities */}

              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Core Capabilities
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {capabilities.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-xs font-medium text-slate-300"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-cyan-400"
                        aria-hidden="true"
                      />

                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://ak-it-enterprises.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition hover:bg-cyan-400"
                >
                  Visit Live Website

                  <ExternalLink
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  Let&apos;s Build Together

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}