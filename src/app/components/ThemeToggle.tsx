"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Read theme AFTER mount
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(prev => !prev);
  };
  return (
    <button
      onClick={toggle}
      className="rounded-full border-none px-3 py-2 text-2xl hover:bg-bg-dark dark:hover:bg-slate-300  cursor-pointer transition"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  )
}