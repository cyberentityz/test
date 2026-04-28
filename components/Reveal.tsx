"use client";
import { useEffect, useRef, ReactNode } from "react";

type Direction = "up" | "left" | "right";

export default function Reveal({ children, direction = "up", delay = 0 }: { children: ReactNode; direction?: Direction; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const initial =
      direction === "left" ? "translateX(-40px)" :
      direction === "right" ? "translateX(40px)" :
      "translateY(40px)";

    el.style.opacity = "0";
    el.style.transform = initial;
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translate(0)";
        obs.unobserve(el);
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [direction, delay]);

  return <div ref={ref}>{children}</div>;
}
