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
      "Security best practices, endpoint protection and compliance.",
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-cyan-400" />,
    title: "Desktop Support",
    description:
      "Professional onsite and remote IT support for organizations.",
  },
  {
    icon: <Globe className="h-8 w-8 text-cyan-400" />,
    title: "Web Development",
    description:
      "Modern responsive business websites and enterprise web applications.",
  },
];

export default function Startup() {
  return (
    <section id="startup" className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Startup
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            AK IT
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Enterprises
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-slate-400 leading-8">
            AK IT Enterprises is my technology startup focused on delivering
            enterprise IT solutions, infrastructure services, cyber security,
            IT consulting and modern web development for businesses.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">

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

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="rounded-3xl border border-cyan-500/10 bg-slate-900/60 p-8 backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <Rocket className="text-cyan-400" size={28} />

                <h3 className="text-3xl font-bold text-white">
                  Founder Vision
                </h3>

              </div>

              <p className="mt-6 text-slate-300 leading-8">
                My vision is to build AK IT Enterprises into a trusted
                technology company delivering innovative IT infrastructure,
                digital transformation, automation and enterprise software
                solutions for organizations across India.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">

                {services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-cyan-500/10 bg-slate-800/50 p-5 transition hover:border-cyan-400 hover:-translate-y-2 duration-300"
                  >
                    {service.icon}

                    <h4 className="mt-4 text-lg font-semibold text-white">
                      {service.title}
                    </h4>

                    <p className="mt-2 text-sm text-slate-400 leading-6">
                      {service.description}
                    </p>

                  </div>
                ))}

              </div>

              <div className="mt-10">

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
                >
                  Let's Build Together

                  <ArrowRight size={18} />

                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}