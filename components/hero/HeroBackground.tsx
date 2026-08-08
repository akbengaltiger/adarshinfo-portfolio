"use client";

import { motion } from "framer-motion";

const particles = [
  { left: 8, top: 12 },
  { left: 18, top: 32 },
  { left: 30, top: 68 },
  { left: 42, top: 18 },
  { left: 55, top: 82 },
  { left: 68, top: 26 },
  { left: 80, top: 58 },
  { left: 92, top: 15 },
  { left: 14, top: 88 },
  { left: 24, top: 48 },
  { left: 36, top: 92 },
  { left: 48, top: 38 },
  { left: 60, top: 8 },
  { left: 72, top: 74 },
  { left: 84, top: 44 },
  { left: 94, top: 90 },
  { left: 10, top: 60 },
  { left: 52, top: 55 },
];

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Top Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px]"
      />

      {/* Bottom Glow */}

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.30, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-32 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[180px]"
      />

      {/* Center Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[130px]"
      />

      {/* Grid */}

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,.35) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Floating Particles */}

      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Horizontal Scan Line */}

      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
      />

      {/* Second Scan Line */}

      <motion.div
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/3 h-px w-56 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
      />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.7) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}