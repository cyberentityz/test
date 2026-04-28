"use client";
import { useEffect, useRef, useState } from "react";
import HeroCanvas from "./HeroCanvas";
import Link from "next/link";
import Image from "next/image";

function Counter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 30);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: 70 }}
    >
      <HeroCanvas />

      <div className="scanlines" />
      
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 5%", maxWidth: 1000, width: "100%" }}>
        {/* Tag */}
        <div
          className="font-mono-tech"
          style={{
            display: "inline-block", fontSize: "0.75rem", color: "#ff6a00",
            border: "1px solid #ff6a00", padding: "5px 16px", letterSpacing: 3,
            textTransform: "uppercase", marginBottom: 28,
            animation: "fadeInDown 0.8s ease both",
          }}
        >
          ⬡ Ethical Hacking Society · Chennai, Tamil Nadu
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/CLogo.jpeg"
            alt="CyberEntityz"
            width={350}
            height={350}
          />
        </div>

        {/* Headline */}
        <h1
          data-text="SECURING THE FUTURE. EMPOWERING DIGITAL DEFENSE."
          style={{
            fontSize: "clamp(2rem, 3vw, 4.2rem)", fontWeight: 500,
            lineHeight: 1.1, letterSpacing: 2, color: "#fff",
            textTransform: "uppercase", marginBottom: 24,
          }}
        >
          SECURING THE{" "}
          <span style={{ color: "#ff2020", textShadow: "0 0 30px #ff2020, 0 0 60px rgba(255,32,32,0.3)" }}>
            FUTURE.
          </span>
          <br />
          EMPOWERING DIGITAL{" "}
          <span style={{ color: "#ff2020", textShadow: "0 0 30px #ff2020" }}>
            DEFENSE.
          </span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "1.25rem", fontWeight: 500, color: "white",
            maxWidth: 620, margin: "0 auto 40px", lineHeight: 1.7, letterSpacing: 0.5,
            animation: "fadeInUp 0.9s ease 0.4s both"
          }}
        >
          Chennai&apos;s premier cybersecurity training &amp; enterprise security company. Real-world attack simulations, global certifications, and end-to-end cyber defense solutions for corporates, colleges, and schools.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", animation: "fadeInUp 0.9s ease 0.6s both" }}>
          <Link
            href="#services"
            className="clip-cyber font-mono-tech"
            style={{
              fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase",
              padding: "14px 36px", textDecoration: "none",
              background: "linear-gradient(135deg, #e81c1c, #ff6a00)",
              color: "#fff", border: "none",
              boxShadow: "0 0 30px rgba(232,28,28,0.4)",
              transition: "all 0.3s",
            }}
          >
            ▶ Our Services
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 60, flexWrap: "wrap", animation: "fadeInUp 1s ease 0.8s both" }}>
          {[
            { num: 100, suffix: "+", label: "Students Trained" },
            { num: 200, suffix: "+", label: "Global Placements" },
            { num: 5, suffix: "+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                className="font-orbitron"
                style={{ fontSize: "2.2rem", fontWeight: 900, color: "#ff2020", textShadow: "0 0 20px #ff2020" }}
              >
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <div className="font-mono-tech" style={{ fontSize: "0.72rem", color: "#6b8299", letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>


      <style>{`
        @keyframes fadeInDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
