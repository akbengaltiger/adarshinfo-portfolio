const projects = [
  {
    title: "GLPI Asset Management",
    description:
      "Enterprise asset management system with inventory, ticketing, automation and reporting.",
    tech: "GLPI • PHP • MySQL • Linux",
    status: "Enterprise Project",
  },
  {
    title: "AK IT Enterprises",
    description:
      "Brand identity, logo design and business website developed from scratch.",
    tech: "HTML • CSS • JavaScript",
    status: "Business Website",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio built using Next.js, Tailwind CSS and TypeScript.",
    tech: "Next.js • Tailwind • TypeScript",
    status: "Current Project",
  },
];

export default function Projects() {
  return (
    <section className="section text-white">
      <div className="text-center mb-16">
        <span className="text-sky-400 uppercase tracking-widest">
          Projects
        </span>

        <h2 className="text-5xl font-bold mt-4">
          Other Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-sky-500 transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="text-slate-400 mt-4 leading-7">
              {project.description}
            </p>

            <p className="text-sky-400 mt-6">
              {project.tech}
            </p>

            <span className="inline-block mt-6 px-4 py-2 rounded-full bg-sky-500/20 text-sky-300 text-sm">
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}