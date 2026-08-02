"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <span className="text-sky-400 text-xl font-semibold">
            👋 Hello, I'm
          </span>

          <h1 className="text-6xl lg:text-7xl font-extrabold mt-4 leading-tight">
            Adarsh Kumar Singh
          </h1>

          <h2 className="text-3xl mt-8 font-semibold text-sky-300 h-12">
            <Typewriter
              words={[
                "IT Team Leader",
                "System Administrator",
                "Infrastructure Engineer",
                "Full Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">
            Passionate about building secure IT infrastructure,
            enterprise web applications, automation solutions,
            and modern digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 transition font-semibold"
            >
              View Projects
            </a>

            <a
              href="/resume/ADARSH_KUMAR_SINGH_Resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl border border-sky-400 hover:bg-sky-500 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-6 mt-10 text-3xl text-slate-400">

            <a
              href="https://github.com/akbengaltiger"
              target="_blank"
            >
              <FaGithub className="hover:text-sky-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/singhadarshkumar"
              target="_blank"
            >
              <FaLinkedin className="hover:text-sky-400 transition" />
            </a>

            <a
              href="https://www.instagram.com/singh.saahab_13"
              target="_blank"
            >
              <FaInstagram className="hover:text-sky-400 transition" />
            </a>

            <a
              href="https://www.youtube.com/channel/UC-ZSkRakPIPLBpYMWN7BG7A"
              target="_blank"
            >
              <FaYoutube className="hover:text-sky-400 transition" />
            </a>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute -inset-5 rounded-3xl bg-sky-500/20 blur-3xl"></div>

            <Image
              src="/images/profile.jpg"
              alt="Adarsh Kumar Singh"
              width={420}
              height={520}
              priority
              className="relative rounded-3xl border-2 border-sky-400 shadow-[0_0_60px_rgba(56,189,248,.45)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}