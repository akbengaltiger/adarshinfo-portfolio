"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}

      <div
        aria-hidden="true"
        className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Outer Ring */}

      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[390px] w-[390px] rounded-full border border-transparent"
        style={{
          borderTopColor: "#22d3ee",
          borderBottomColor: "#3b82f6",
          borderWidth: "2px",
        }}
      />

      {/* Inner Ring */}

      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[350px] w-[350px] rounded-full border border-cyan-500/20"
      />

      {/* Floating Image */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-full border-4 border-cyan-400 shadow-[0_0_80px_rgba(6,182,212,.45)]"
      >
        <Image
          src="/images/profile.png"
          alt="Portrait of Adarsh Kumar Singh"
          width={320}
          height={320}
          priority
          quality={95}
          sizes="(max-width:768px) 260px,320px"
          className="h-[260px] w-[260px] rounded-full object-cover transition-transform duration-500 hover:scale-105 md:h-[320px] md:w-[320px]"
        />
      </motion.div>

      {/* Availability Badge */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 right-2 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-slate-900/90 px-4 py-2 shadow-xl backdrop-blur-lg md:bottom-10 md:right-6"
      >
        <span
          aria-hidden="true"
          className="h-3 w-3 rounded-full bg-emerald-400"
        />

        <span className="text-sm font-medium text-white">
          Available for Hire
        </span>
      </motion.div>

      {/* Startup Badge */}

      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-cyan-500/30 bg-slate-900/90 px-5 py-2 text-center text-sm font-semibold whitespace-nowrap text-cyan-300 shadow-lg backdrop-blur-lg">
        Founder • AK IT Enterprises
      </div>
    </motion.div>
  );
}