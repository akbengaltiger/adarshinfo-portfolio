"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-cyan-500/20
        bg-slate-900/70
        text-cyan-400
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-500
        hover:text-black
      "
    >
      {theme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </motion.button>
  );
}