"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + "px";
        cursorRef.current.style.top = e.clientY - 6 + "px";
      }
      setTimeout(() => {
        if (trailRef.current) {
          trailRef.current.style.left = e.clientX - 15 + "px";
          trailRef.current.style.top = e.clientY - 15 + "px";
        }
      }, 80);
    };
    const grow = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(2)";
      if (trailRef.current) trailRef.current.style.transform = "scale(1.5)";
    };
    const shrink = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
      if (trailRef.current) trailRef.current.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,[data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          position: "fixed",
          width: 12,
          height: 12,
          background: "#ff2020",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "screen",
          transition: "transform 0.1s",
        }}
      />
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          width: 30,
          height: 30,
          border: "1px solid #ff6a00",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          mixBlendMode: "screen",
          transition: "all 0.15s ease",
        }}
      />
    </>
  );
}
