"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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
      className="group overflow-hidden rounded-3xl border border-cyan-500/10 bg-slate-900/60 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,.2)]"
    >
      {/* Project Visual */}
      <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/30" />

        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl transition-all duration-500 group-hover:bg-blue-400/30" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Center Content */}
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,.2)]">
            <FolderKanban
              size={32}
              className="text-cyan-400 transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <h4 className="max-w-md text-xl font-bold text-white">
            {project.title}
          </h4>

          {project.featured && (
            <span className="mt-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Featured Project
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-500/10 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/20"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onOpen}
            className="rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,.25)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            View Details
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} demo`}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}