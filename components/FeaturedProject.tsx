import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section id="projects" className="section text-white">
      <div className="text-center mb-16">
        <span className="text-sky-400 uppercase tracking-widest font-semibold">
          Featured Project
        </span>

        <h2 className="text-5xl font-bold mt-3">
          SPMW Industrial Website
        </h2>

        <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
          A complete business website designed and developed by me from scratch
          using HTML, CSS, and JavaScript for S.P. Mechanical Works.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <Image
            src="/images/spmw.png"
            alt="SPMW Website"
            width={900}
            height={550}
            className="rounded-2xl border border-slate-800 shadow-xl"
          />
        </div>

        <div>

          <h3 className="text-3xl font-bold">
            S.P. Mechanical Works
          </h3>

          <p className="text-slate-400 mt-6 leading-8">
            This is a fully responsive industrial company website that I
            designed and developed independently. The website highlights the
            company's services, machinery, projects, client information, and
            contact details with a clean and professional user interface.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              ✅ Responsive Design
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              ✅ HTML5
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              ✅ CSS3
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              ✅ JavaScript
            </div>

          </div>

          <div className="mt-10 flex gap-5">

            <a
              href="https://www.spmw.in"
              target="_blank"
              className="px-7 py-4 bg-sky-500 rounded-xl hover:bg-sky-600 transition"
            >
              🌐 Visit Website
            </a>

            <span className="px-7 py-4 border border-sky-500 rounded-xl">
              Designed & Developed by Me
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}