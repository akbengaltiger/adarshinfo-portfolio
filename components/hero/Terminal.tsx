"use client";

import { TypeAnimation } from "react-type-animation";

export default function Terminal() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/80 shadow-2xl backdrop-blur-xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-cyan-500/10 bg-slate-900/80 px-5 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <span className="font-mono text-xs text-slate-400">
          terminal@adarshinfo.in
        </span>
      </div>

      {/* Terminal Body */}
      <div className="p-6">
        <TypeAnimation
          sequence={[
            "$ whoami",
            800,
            "\nAdarsh Kumar Singh",
            1200,

            "\n\n$ role",
            800,
            "\nIT Team Leader",
            1200,

            "\n\n$ company",
            800,
            "\nFinmech Business Services Pvt. Ltd.",
            1200,

            "\n\n$ startup",
            800,
            "\nAK IT Enterprises",
            1200,

            "\n\n$ experience",
            800,
            "\n6+ Years",
            1200,

            "\n\n$ skills",
            800,
            "\nWindows Server | Active Directory | Networking | Full Stack Development",
            1200,

            "\n\n$ status",
            800,
            "\nAvailable for IT Consulting & Development",
            2000,
          ]}
          speed={60}
          repeat={Infinity}
          className="whitespace-pre-line font-mono text-sm leading-7 text-cyan-400"
        />
      </div>
    </div>
  );
}