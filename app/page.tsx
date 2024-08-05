/* eslint-disable react/no-unescaped-entities */
"use client";

import HomePage from "./components/HomePage";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="h-screen bg-[#1A1A1A] w-[80%] max-w-7xl mx-auto my-0 overflow-hidden relative"
    >
      <HomePage />
    </m.main>
  );
}
