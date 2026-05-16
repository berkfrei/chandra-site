"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as Theme | null;
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <button
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center text-brown-warm transition-colors duration-300 hover:text-terracotta-deep"
    >
      {theme === "dark" ? (
        <Sun size={18} strokeWidth={1.4} />
      ) : (
        <Moon size={18} strokeWidth={1.4} />
      )}
    </button>
  );
}
