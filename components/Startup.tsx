import Image from "next/image";

export default function Startup() {
  return (
    <section
      id="startup"
      className="py-24 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-sky-400 uppercase tracking-[4px]">
            Startup
          </span>

          <h2 className="text-5xl font-bold mt-4">
            AK IT Enterprises
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            My technology startup focused on delivering secure IT
            infrastructure, enterprise solutions, web applications,
            automation and digital transformation services.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Logo */}

          <div className="flex justify-center">

            <Image
              src="/images/ak-logo.jpg"
              alt="AK IT Enterprises"
              width={500}
              height={500}
              className="rounded-3xl shadow-[0_0_40px_#00bfff55]"
            />

          </div>

          {/* Content */}

          <div>

            <h3 className="text-3xl font-bold mb-6">

              Building Future Ready IT Solutions

            </h3>

            <p className="text-gray-400 leading-8 mb-8">

              AK IT Enterprises is founded with a vision to help
              businesses modernize their IT infrastructure,
              automate operations and build secure digital
              solutions using modern technologies.

            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="glass-card p-4 rounded-xl">
                🌐 Website Development
              </div>

              <div className="glass-card p-4 rounded-xl">
                💻 Software Development
              </div>

              <div className="glass-card p-4 rounded-xl">
                🖥 IT Infrastructure
              </div>

              <div className="glass-card p-4 rounded-xl">
                🔒 Cyber Security
              </div>

              <div className="glass-card p-4 rounded-xl">
                ☁ Cloud Solutions
              </div>

              <div className="glass-card p-4 rounded-xl">
                ⚙ Automation
              </div>

            </div>

            <button
              className="mt-10 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 transition"
            >
              Website Coming Soon
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}