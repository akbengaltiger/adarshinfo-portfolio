const skills = [
  { name: "Windows Server", level: 95 },
  { name: "Active Directory", level: 95 },
  { name: "Microsoft 365", level: 90 },
  { name: "Networking", level: 90 },
  { name: "Linux", level: 85 },
  { name: "Docker", level: 85 },
  { name: "Next.js", level: 85 },
  { name: "HTML / CSS / JavaScript", level: 95 },
  { name: "Python", level: 80 },
  { name: "GLPI", level: 90 },
  { name: "Wazuh", level: 85 },
  { name: "Zabbix", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="section text-white">
      <div className="text-center mb-16">
        <span className="text-sky-400 uppercase tracking-widest font-semibold">
          Skills
        </span>

        <h2 className="text-5xl font-bold mt-3">
          Technical Expertise
        </h2>

        <p className="text-slate-400 mt-5">
          Technologies and platforms I work with.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex justify-between mb-3">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-sky-400">{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-sky-400"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}