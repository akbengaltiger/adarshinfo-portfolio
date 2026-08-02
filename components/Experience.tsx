export default function Experience() {
  const experiences = [
    {
      year: "Oct 2025 - Present",
      role: "IT Team Leader",
      company: "FinMech Business Services Pvt. Ltd.",
      description:
        "Leading Desktop Support operations, managing IT infrastructure, Active Directory, Microsoft 365, Windows Server, Asset Management, Networking, and Automation projects.",
    },
    {
      year: "Previous Experience",
      role: "System Administrator / Desktop Support",
      company: "IT Infrastructure",
      description:
        "Worked on Windows administration, end-user support, networking, system deployment, hardware troubleshooting, server management, and security solutions.",
    },
  ];

  return (
    <section id="experience" className="section text-white">
      <div className="text-center mb-16">
        <span className="text-sky-400 uppercase tracking-widest font-semibold">
          Experience
        </span>

        <h2 className="text-5xl font-bold mt-3">
          My Professional Journey
        </h2>

        <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
          Over the last 6+ years, I have worked on enterprise IT
          infrastructure, system administration, networking, automation,
          and modern web development.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">

        <div className="absolute left-4 top-0 bottom-0 w-1 bg-sky-500 rounded"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-16 mb-12">

            <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-sky-500 border-4 border-slate-950"></div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-sky-400 transition">

              <span className="text-sky-400 text-sm">
                {exp.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {exp.role}
              </h3>

              <h4 className="text-slate-300 mt-2">
                {exp.company}
              </h4>

              <p className="text-slate-400 mt-5 leading-8">
                {exp.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}