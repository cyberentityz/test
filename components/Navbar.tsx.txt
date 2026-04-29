"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Works" },
  { href: "#certifications", label: "Certifications" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#trustedBy", label: "Trusted By" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3%",
        background: scrolled ? "rgba(2,4,8,0.97)" : "rgba(2,4,8,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(232,28,28,0.2)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <Link href="#hero" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <span
          className="font-orbitron"
          style={{ fontSize: "1.1rem", fontWeight: 900, color: "#ff2020", textShadow: "0 0 15px #ff2020", letterSpacing: 2 }}
        >
          CYBERENTITYZ™
        </span>
      </Link>

      {/* Desktop Links */}
      <ul style={{ display: "flex", gap: 25, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="clip-cyber-sm font-mono-tech hidden md:block"
              style={{ fontSize: "0.78rem", padding: "8px 20px", background: "transparent", border: "1px solid #e81c1c", color: "#e81c1c", textDecoration: "none", letterSpacing: 1.5, textTransform: "uppercase", transition: "all 0.3s" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#e81c1c"; el.style.color = "#fff"; el.style.boxShadow = "0 0 25px #e81c1c"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "#e81c1c"; el.style.boxShadow = "none"; }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", color: "#e81c1c", cursor: "pointer" }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 0,
            width: "100%",
            background: "rgba(2,4,8,0.98)",
            borderBottom: "1px solid rgba(232,28,28,0.2)",
            padding: "20px 5%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono-tech"
              onClick={() => setOpen(false)}
              style={{ fontSize: "0.9rem", color: "#d0dbe8", textDecoration: "none", letterSpacing: 1, textTransform: "uppercase" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
