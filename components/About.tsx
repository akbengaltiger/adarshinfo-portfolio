export default function About() {
  return (
    <section
      id="about"
      className="section text-white py-28"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="text-sky-400 font-semibold tracking-widest uppercase">
            About Me
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Passionate about Infrastructure &
            <span className="text-sky-400"> Full Stack Development</span>
          </h2>

          <p className="text-slate-300 mt-8 leading-8 text-lg">
            I am Adarsh Kumar Singh, an IT Team Leader with 6+ years of
            experience in IT Infrastructure, Windows Server, Active Directory,
            Microsoft 365, Networking, Asset Management, and Full Stack
            Development.
          </p>

          <p className="text-slate-400 mt-6 leading-8">
            I enjoy designing enterprise-grade solutions, automating IT
            operations, and developing secure, scalable web applications. I
            continuously learn new technologies and focus on building practical
            solutions that improve business productivity.
          </p>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40">
            <h3 className="text-4xl font-bold text-sky-400">
              6+
            </h3>
            <p className="mt-2 text-slate-300">
              Years Experience
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40">
            <h3 className="text-4xl font-bold text-sky-400">
              20+
            </h3>
            <p className="mt-2 text-slate-300">
              Projects Completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40">
            <h3 className="text-4xl font-bold text-sky-400">
              B.Sc
            </h3>
            <p className="mt-2 text-slate-300">
              Information Technology
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-6 bg-slate-900/40">
            <h3 className="text-4xl font-bold text-sky-400">
              Oct 2025
            </h3>
            <p className="mt-2 text-slate-300">
              Current Company
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}