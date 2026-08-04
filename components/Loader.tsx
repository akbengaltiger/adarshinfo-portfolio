"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#020617]"
    >
      {/* Background Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: [0.6, 1.1, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-900 shadow-[0_0_60px_rgba(6,182,212,.4)]"
        >
          <span className="text-5xl font-black text-cyan-400">
            AK
          </span>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-8 text-lg tracking-[0.35em] text-cyan-300 uppercase"
        >
          Loading Portfolio...
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-8 h-2 w-72 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />
        </div>
      </div>
    </motion.div>
  );
}