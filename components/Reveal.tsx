"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  className,
  id,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "p" | "h2" | "figure" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    el.style.transition = "opacity 1.1s cubic-bezier(.2,.6,.2,1), transform 1.1s cubic-bezier(.2,.6,.2,1)";
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "none";
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={className} id={id}>
      {children}
    </Tag>
  );
}
