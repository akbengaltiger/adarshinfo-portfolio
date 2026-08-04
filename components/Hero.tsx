"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import ResumeButton from "@/components/ResumeButton";

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

          <h1 className="mt-4 text-6xl font-extrabold leading-tight lg:text-7xl">
            Adarsh Kumar Singh
          </h1>

          <h2 className="mt-8 h-12 text-3xl font-semibold text-sky-300">
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

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Passionate about building secure IT infrastructure,
            enterprise web applications, automation solutions,
            and modern digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-8 py-4 font-semibold transition hover:bg-sky-600"
            >
              View Projects
            </a>

            <ResumeButton />

            <a
              href="/resume/Adarsh_Kumar_Singh_Resume.pdf"
              download
              className="rounded-xl border border-sky-400 px-8 py-4 transition hover:bg-sky-500 hover:text-black"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-6 text-3xl text-slate-400">

            <a
              href="https://github.com/akbengaltiger"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="transition hover:text-sky-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/singhadarshkumar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="transition hover:text-sky-400" />
            </a>

            <a
              href="https://www.instagram.com/singh.saahab_13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="transition hover:text-sky-400" />
            </a>

            <a
              href="https://www.youtube.com/channel/UC-ZSkRakPIPLBpYMWN7BG7A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="transition hover:text-sky-400" />
            </a>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute -inset-5 rounded-3xl bg-sky-500/20 blur-3xl" />

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