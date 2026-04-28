"use client";
import Image from "next/image";
import Reveal from "./Reveal";

const clients = [
  { image: "/Corporates_Clients.jpeg", label: "Corporates" },
  { image: "/Universities_Clients.jpeg", label: "Universities & Colleges" },
  { image: "/Schools_Clients.jpeg", label: "Schools" },
  { image: "/Startups_Clients.jpeg", label: "Startups" },
  { image: "/GovermentBodies_Clients.jpeg", label: "Government Bodies" },
  { image: "/ITCompanies_Clients.jpeg", label: "IT Companies" },
  { image: "/International_Clients.jpeg", label: "International Aspirants" },
];

export default function Clients() {
  return (
    <section id="trustedBy" style={{ padding: "100px 5%", background: "#020408" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div className="font-mono-tech" style={{ fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>// Who We Serve</div>
          <h2 className="font-orbitron" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, color: "#fff" }}>
            TRUSTED <span style={{ color: "#ff2020", textShadow: "0 0 20px #ff2020" }}>BY</span>
          </h2>
          <div className="section-divider" style={{ margin: "20px auto 50px" }} />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            {clients.map((c) => (
              <div
                key={c.label}
                data-hover
                className="clip-cyber font-mono-tech"
                style={{
                  fontSize: "0.8rem", letterSpacing: 2, textTransform: "uppercase",
                  padding: "12px 28px", border: "1px solid rgba(255,50,50,0.15)",
                  color: "#6b8299", background: "rgba(255,255,255,0.04)",
                  transition: "all 0.3s", cursor: "default",
                  display:"flex",
                  alignItems:"center"
                }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "#ff6a00"; el.style.color = "#ff6a00"; el.style.background = "rgba(255,106,0,0.05)"; el.style.boxShadow = "0 0 20px rgba(255,106,0,0.15)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(255,50,50,0.15)"; el.style.color = "#6b8299"; el.style.background = "rgba(255,255,255,0.04)"; el.style.boxShadow = "none"; }}
              >
                <Image src={c.image} alt={c.label} width={100} height={100} className="rounded-md"/>
                <p className="ml-2">{c.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
