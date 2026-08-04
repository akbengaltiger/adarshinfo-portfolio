"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({
  open,
  onClose,
}: ResumeModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950 shadow-[0_0_40px_rgba(6,182,212,.15)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Resume Preview
              </h2>

              <button
                onClick={onClose}
                className="rounded-full p-2 transition hover:bg-red-500"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* PDF */}
            <div className="flex-1 bg-slate-900">
              <iframe
                src="/resume/Adarsh_Kumar_Singh_Resume.pdf"
                title="Resume"
                className="h-full w-full"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-end gap-4 border-t border-slate-800 p-5">
              <a
                href="/resume/Adarsh_Kumar_Singh_Resume.pdf"
                download
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                <Download size={18} />
                Download
              </a>

              <a
                href="/resume/Adarsh_Kumar_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-white transition hover:border-cyan-400"
              >
                <ExternalLink size={18} />
                Open in New Tab
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}