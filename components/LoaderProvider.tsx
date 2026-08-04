"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("portfolio-loaded");

    if (!alreadyLoaded) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("portfolio-loaded", "true");
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}