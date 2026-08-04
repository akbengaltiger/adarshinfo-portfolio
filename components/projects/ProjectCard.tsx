"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Project } from "./projects";

interface Props {
  project: Project;
  onOpen: () => void;
}

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-cyan-500/10 bg-slate-900/60 backdrop-blur-xl shadow-lg hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,.2)]"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-slate-400 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onOpen}
            className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black hover:bg-cyan-400"
          >
            View Details
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 p-3 hover:border-cyan-400"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 p-3 hover:border-cyan-400"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}