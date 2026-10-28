"use client";

import { useEffect, useState } from "react";
import { HEADLINES } from "@/lib/site";

export function Signal() {
  const [t, setT] = useState(99);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setT(0);
    const id = window.setInterval(() => {
      setT((prev) => (prev >= HEADLINES.length + 6 ? 0 : prev + 1));
    }, 1100);
    return () => window.clearInterval(id);
  }, []);

  const n = HEADLINES.length;
  const shown = Math.min(n, t + 1);
  const struck = Math.max(0, Math.min(n, t - 1));
  const signal = t >= n + 1;

  return (
    <div className="signal-stack">
      {HEADLINES.map((txt, i) => {
        const isStruck = i < struck;
        const isShown = i < shown;
        return (
          <span
            key={txt}
            className="signal-line"
            style={{
              color: isStruck ? "var(--product-muted)" : "var(--product-ink)",
              opacity: isShown ? (isStruck ? 0.55 : 1) : 0,
              transform: isShown ? "none" : "translateY(8px)",
              textDecorationColor: isStruck ? "var(--product-muted)" : "transparent",
            }}
          >
            {txt}
          </span>
        );
      })}
      <span
        className="signal-word"
        style={{
          opacity: signal ? 1 : 0,
          transform: signal ? "none" : "translateY(12px)",
        }}
      >
        Signal.
      </span>
    </div>
  );
}
