"use client";
import Image from "next/image";
import Reveal from "./Reveal";

const reasons = [
  { num: "01", title: "Expert Trainers", desc: "Our instructors are active cybersecurity professionals with real-world offensive and defensive experience — not just educators.", image: "/ExpertTrainer_Why.jpeg" },
  { num: "02", title: "Real-Time Attack Simulations", desc: "Practice on live lab environments with actual attack scenarios — from phishing campaigns to full network penetration exercises.", image: "/RealTimeAttack_Why.jpeg" },
  { num: "03", title: "Industry-Aligned Curriculum", desc: "Every program maps to globally recognized frameworks: MITRE ATT&CK, NIST, OWASP, and major certification bodies.", image: "/Curriculum_Why.jpeg" },
  { num: "04", title: "Affordable & Scalable", desc: "Flexible pricing for individuals, colleges, and enterprises. From single-day workshops to full certification boot camps.", image: "/Affordable_Why.jpeg" },
  { num: "05", title: "Global Placement Guidance", desc: "We've guided 200+ students toward international cybersecurity careers with resume support, visa guidance, and interview prep.", image: "/GlobalPlacement_Why.jpeg" },
  { num: "06", title: "Institutional Partnerships", desc: "Formal MOUs with colleges, lab infrastructure support, and trusted partnerships across Tamil Nadu's education sector.", image: "/Partnerships_Why.jpeg" },
];

export default function WhyUs() {
  return (
    <section id="why" style={{ padding: "100px 5%", background: "#020408" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div className="font-mono-tech" style={{ fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>// Why CYBERENTITYZ</div>
          <h2 className="font-orbitron" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, color: "#fff" }}>
            WHY <span style={{ color: "#ff2020", textShadow: "0 0 20px #ff2020" }}>CHOOSE US</span>
          </h2>
          <div className="section-divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 30 }} className="why-grid">
            {reasons.map((r) => (
              <div
                key={r.num}
                data-hover
                style={{ background: "#0a1520", border: "1px solid rgba(255,50,50,0.15)", padding: "36px 28px", position: "relative", transition: "all 0.4s", display: "grid", gridTemplateColumns: "auto auto", columnGap: "10px" }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "#e81c1c"; el.style.boxShadow = "0 0 40px rgba(232,28,28,0.15)"; el.style.transform = "translateY(-6px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(255,50,50,0.15)"; el.style.boxShadow = "none"; el.style.transform = "none"; }}
                className="hoverBackground why-grid"
              >
                <div>
                  <h3 className="font-orbitron" style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", letterSpacing: 1, marginBottom: 14, textTransform: "uppercase" }}>{r.title}</h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#6b8299" }}>{r.desc}</p>
                </div>
                <div>
                  <Image src={r.image} alt={r.title} width={500} height={500} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`@media(max-width:1024px){.why-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:640px){.why-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
