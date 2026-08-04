"use client";

import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function ResumeButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-black"
      >
        <FileText size={20} />
        View Resume
      </button>

      <ResumeModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}