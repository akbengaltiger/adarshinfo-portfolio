"use client";

import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-cyan-500/20 bg-slate-950"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 rounded-full bg-slate-900 p-2 transition hover:bg-red-500"
            >
              <X size={20} />
            </button>

            <div className="relative h-80 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h2 className="text-4xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 transition hover:border-cyan-400"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}