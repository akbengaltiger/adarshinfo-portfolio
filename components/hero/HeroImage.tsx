"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        scale: {
          duration: 0.8,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[390px] w-[390px] rounded-full border"
        style={{
          borderTop: "2px solid #22d3ee",
          borderBottom: "2px solid #3b82f6",
          borderLeft: "2px solid transparent",
          borderRight: "2px solid transparent",
        }}
      />

      {/* Second Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[350px] w-[350px] rounded-full border border-cyan-500/20"
      />

      {/* Profile Image */}
      <div className="relative overflow-hidden rounded-full border-4 border-cyan-400 shadow-[0_0_80px_rgba(6,182,212,0.50)]">
        <Image
          src="/images/profile.png"
          alt="Adarsh Kumar Singh"
          width={320}
          height={320}
          priority
          quality={95}
          sizes="320px"
          className="h-[320px] w-[320px] rounded-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Available Badge */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-6 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-slate-900/90 px-4 py-2 shadow-xl backdrop-blur-lg"
      >
        <span className="h-3 w-3 rounded-full bg-emerald-400" />

        <span className="text-sm font-medium text-white">
          Available for Hire
        </span>
      </motion.div>

      {/* Startup Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-cyan-500/30 bg-slate-900/90 px-5 py-2 text-sm font-semibold text-cyan-300 shadow-lg backdrop-blur-lg">
        Founder • AK IT Enterprises
      </div>
    </motion.div>
  );
}