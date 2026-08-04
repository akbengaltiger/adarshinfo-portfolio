"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { projects, Project } from "./projects/projects";
import ProjectCard from "./projects/ProjectCard";
import ProjectModal from "./projects/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-28">
        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Projects
            </span>

            <h2 className="mt-6 text-5xl font-black text-white">
              My
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Latest Work
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
              A collection of enterprise applications, infrastructure
              solutions, automation tools and modern web development
              projects that I've built.
            </p>
          </motion.div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}