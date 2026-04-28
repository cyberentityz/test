"use client";
import Image from "next/image";
import Reveal from "./Reveal";

const categories = [
  {
    name: "CompTIA",
    certs: [
      { image: "/ITF+_Certification.jpeg", name: "ITF+", full: "IT Fundamentals" },
      { image: "/A+_Certification.jpeg", name: "A+", full: "CompTIA A+" },
      { image: "/Network+_Certification.jpeg", name: "Network+", full: "Network Infrastructure" },
      { image: "/Security+_certification.jpeg", name: "Security+", full: "Core Security" },
      { image: "/CYSA+_Certification.jpeg", name: "CySA+", full: "Cybersecurity Analyst" },
      { image: "/PenTest+_Certification.jpeg", name: "PenTest+", full: "Penetration Testing" },
      { image: "/CASP+_Certification.jpeg", name: "CASP+", full: "Advanced Security Practitioner" },
      { image: "/Cloud+_Certification.jpeg", name: "Cloud+", full: "Cloud Computing" },
    ],
  },
  {
    name: "EC-Council",
    certs: [
      { image: "/CEH_Certification.jpeg", name: "CEH", full: "Certified Ethical Hacker" },
      { image: "/CEHPractical_Certification.jpeg", name: "CEH Practical", full: "Hands-On Ethical Hacking" },
      { image: "/CND_Certification.jpeg", name: "CND", full: "Network Defender" },
      { image: "/CHFI_Certification.jpeg", name: "CHFI", full: "Hacking Forensic Investigator" },
      { image: "/CPENT_Certification.jpeg", name: "CPENT", full: "Certified Penetration Tester" },
      { image: "/CISO_Certification.jpeg", name: "CCISO", full: "Chief Info Security Officer" },
    ],
  },
  {
    name: "OffSec (OSCP)",
    certs: [
      { image: "/OSCP_Certification.jpeg", name: "OSCP", full: "PEN-200 Penetration Testing" },
      { image: "/OSEP_Certification.jpeg", name: "OSEP", full: "PEN-300 Advanced Evasion" },
      { image: "/OSWE_Certification.jpeg", name: "OSWA/OSWE", full: "Web Application Expert" },
      { image: "/OSDA_Certification.jpeg", name: "OSDA", full: "SOC-200 Defensive Analyst" },
    ],
  },
  {
    name: "ISC² · ISACA · Cisco",
    certs: [
      { image: "/CISSP_Certification.jpeg", name: "CISSP", full: "Security Professional" },
      { image: "/CCSP_Certification.jpeg", name: "CCSP", full: "Cloud Security Professional" },
      { image: "/CISA_Certification.jpeg", name: "CISA", full: "IS Auditor — ISACA" },
      { image: "/CISM_Certification.jpeg", name: "CISM", full: "Security Manager — ISACA" },
      { image: "/CRISC_Certification.jpeg", name: "CRISC", full: "Risk & Info Systems Control" },
      { image: "/CyberOps_Certification.jpeg", name: "CyberOps", full: "Cisco CyberOps Associate" },
    ],
  },
];

function CertCard({ image, name, full }: { image: string; name: string; full: string }) {
  return (
    <div
      data-hover
      style={{
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,50,50,0.15)",
        padding: 20, textAlign: "center", transition: "all 0.3s", cursor: "default",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(255,106,0,0.4)";
        el.style.background = "rgba(255,106,0,0.05)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4), 0 0 15px rgba(255,106,0,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(255,50,50,0.15)";
        el.style.background = "rgba(255,255,255,0.04)";
        el.style.transform = "none";
        el.style.boxShadow = "none";
      }}
      className="hoverBackground"
    >
      <div className="flex justify-center">
        <Image src={image} alt={name} width={50} height={50} />
      </div>
      <div className="font-orbitron" style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", letterSpacing: 1, marginBottom: 6, marginTop: 5 }}>{name}</div>
      <div style={{ fontSize: "0.78rem", color: "#6b8299", lineHeight: 1.4 }}>{full}</div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "100px 5%", background: "#060c12" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div className="font-mono-tech" style={{ fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>// Global Certifications</div>
          <h2 className="font-orbitron" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, color: "#fff" }}>
            CERTIFICATION <span style={{ color: "#ff2020", textShadow: "0 0 20px #ff2020" }}>TRAINING</span>
          </h2>
          <div className="section-divider" />

          {categories.map((cat) => (
            <div key={cat.name} style={{ marginBottom: 48 }}>
              <div style={{ marginBottom: 24 }}>
                <span
                  className="font-mono-tech"
                  style={{ fontSize: "0.68rem", color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", background: "rgba(255,106,0,0.08)", border: "1px solid rgba(255,106,0,0.2)", display: "inline-block" }}
                >
                  {cat.name}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
                {cat.certs.map((c) => <CertCard key={c.name} {...c} />)}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
