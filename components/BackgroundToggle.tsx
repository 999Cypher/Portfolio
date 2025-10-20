"use client";

import { useEffect, useState } from "react";

const PRESETS = ["dope", "blue", "pink", "green", "subtle"] as const;
export type Preset = typeof PRESETS[number];

export default function BackgroundToggle() {
  const [preset, setPreset] = useState<Preset>(() => {
    if (typeof window === "undefined") return "dope";
    return (localStorage.getItem("bg-preset") as Preset) || "dope";
  });

  useEffect(() => {
    const bg = document.querySelector(".animated-bg");
    if (!bg) return;
    PRESETS.forEach((p) => bg.classList.remove(`variant-${p}`));
    bg.classList.add(`variant-${preset}`);
    try {
      localStorage.setItem("bg-preset", preset);
    } catch (e) {
      // ignore
    }
  }, [preset]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 bg-cyber-dark/70 border border-cyber-gray/30 p-2 rounded-md backdrop-blur-sm">
      <div className="text-xs font-mono text-cyber-light/70 px-2">Background</div>
      <div className="flex gap-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            onClick={() => setPreset(p)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono transition-transform transform ${preset === p ? "ring-2 ring-neon-blue" : "opacity-70 hover:scale-110"}`}
            aria-pressed={preset === p}
            title={p}
          >
            {p[0].toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
