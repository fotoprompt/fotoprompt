"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
      <button
        onClick={() => setTheme("light")}
        className={`rounded-lg p-2 transition ${
          theme === "light"
            ? "bg-violet-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <Sun size={18} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`rounded-lg p-2 transition ${
          theme === "dark"
            ? "bg-violet-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <Moon size={18} />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`rounded-lg p-2 transition ${
          theme === "system"
            ? "bg-violet-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <Monitor size={18} />
      </button>
    </div>
  );
}