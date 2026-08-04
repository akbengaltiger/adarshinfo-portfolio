"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "bg-cyan-500 hover:bg-cyan-400 text-white"
      : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white";

  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button onClick={onClick}>
      {content}
    </button>
  );
}