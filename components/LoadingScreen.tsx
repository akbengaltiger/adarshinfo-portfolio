"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950"
        >
          <div className="text-center">

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400 bg-cyan-500/10 text-4xl font-black text-cyan-400 shadow-[0_0_50px_rgba(6,182,212,.45)]"
            >
              AK
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
              }}
              className="mt-8 text-4xl font-black text-white"
            >
              Adarsh Kumar Singh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
              }}
              className="mt-3 text-cyan-400"
            >
              IT Team Leader • System Administrator
            </motion.p>

            <div className="mx-auto mt-10 h-1 w-64 overflow-hidden rounded-full bg-slate-800">

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
              />

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}