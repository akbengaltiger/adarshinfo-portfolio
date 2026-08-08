"use client";

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="
      sr-only
      focus:not-sr-only
      focus:fixed
      focus:left-5
      focus:top-5
      focus:z-[9999]
      rounded-lg
      bg-cyan-500
      px-5
      py-3
      font-semibold
      text-black
      shadow-xl
      "
    >
      Skip to Main Content
    </a>
  );
}