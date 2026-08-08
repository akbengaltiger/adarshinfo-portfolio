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
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="relative py-28"
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Projects
            </span>

            <h2
              id="projects-heading"
              className="mt-6 text-4xl font-black text-white md:text-5xl"
            >
              My
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Latest Work
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A collection of enterprise applications, IT infrastructure
              solutions, automation tools and modern web development projects
              that showcase my experience in system administration,
              networking and full stack development.
            </p>
          </motion.div>

          {/* Project Grid */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}