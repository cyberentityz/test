"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import Image from "next/image";

const tabs = [
  { id: "training", label: "Training" },
  { id: "corporate", label: "Corporate" },
  { id: "academic", label: "Academic" },
];

const services: Record<string, { title: string; desc: string; tag: string, image: string }[]> = {
  training: [
    { title: "Ethical Hacking", desc: "CEH, CPENT, LPT — hands-on training covering attack methodologies, exploitation techniques, and defensive countermeasures used by top pentesters.", tag: "Offensive Security", image:"/Ethical_Hacking_Services.jpeg" },
    { title: "VAPT Training", desc: "Vulnerability Assessment & Penetration Testing with real-world labs. OSCP/OSEP aligned curriculum with industry toolsets like Burp Suite, Metasploit, and Nmap.", tag: "Hands-On Labs", image:"/VAPT_Services.jpeg" },
    { title: "Cloud Security", desc: "AWS, Azure, and GCP security fundamentals. Cloud threat modeling, identity management, and compliance — covering CompTIA Cloud+ and CCSP.", tag: "Cloud Defense", image:"/CloudSecurity_Services.jpeg" },
    { title: "Red & Blue Team", desc: "Adversarial simulation and threat detection. Learn offensive Red Team tactics and defensive Blue Team monitoring, log analysis, and incident response.", tag: "Adversarial Training", image:"/RedBlueTeam_Services.jpeg" },
    { title: "Digital Forensics", desc: "CHFI-aligned forensics training — evidence acquisition, memory forensics, disk analysis, malware reverse engineering, and legal reporting.", tag: "Forensic Investigation", image:"/DigitalForensics_Services.jpeg" },
    { title: "GRC & Compliance", desc: "ISO 27001, CISA, CISM, CRISC — governance, risk management, and compliance frameworks for enterprise security management professionals.", tag: "Risk & Compliance", image:"/GRC_Compliance_Services.jpeg" },
  ],
  corporate: [
    { title: "Security Awareness Training", desc: "Customized programs for employees covering phishing, social engineering, password hygiene, and insider threat prevention.", tag: "Employee Training", image:"/SecurityAwareness_Services.jpeg" },
    { title: "Phishing Simulation", desc: "Real-world phishing campaigns to test and improve employee vigilance. Detailed analytics and personalized training recommendations.", tag: "Simulation", image:"/PhisingSimulation_Services.jpeg" },
    { title: "VAPT Services", desc: "Enterprise vulnerability assessment and penetration testing for web apps, networks, APIs, and mobile platforms. Detailed reports with remediation roadmaps.", tag: "Penetration Testing", image:"/VAPTService_Services.jpeg" },
    { title: "vCISO Services", desc: "Virtual Chief Information Security Officer — strategic security leadership, risk program management, policy development, and executive advisory.", tag: "Strategic" , image:"/VCISO_Services.jpeg"},
    { title: "Infra Architecture Consulting", desc: "Security-first network and infrastructure design. Zero-trust architecture, segmentation, firewall policy, and secure cloud migrations.", tag: "Consulting", image:"/InfraArc_Services.jpeg" },
    { title: "Certification Consulting", desc: "Guide your IT team toward globally recognized security certifications — CompTIA, ISACA, ISC², and EC-Council — with curated learning paths.", tag: "Advisory", image:"/Certification_Services.jpeg" },
  ],
  academic: [
    { title: "Cybersecurity Workshops", desc: "Engaging hands-on workshops covering ethical hacking, network security, web vulnerabilities, and real-time cyber threat demonstrations for students.", tag: "Workshops", image:"/CybersecurityWorkshop_Services.jpeg" },
    { title: "Industrial Visits (IV)", desc: "Immersive IV programs where students experience live cybersecurity environments, SOC operations, and enterprise security infrastructure.", tag: "Experiential Learning", image:"/IV_Services.jpeg" },
    { title: "Internship Programs", desc: "Structured internship opportunities in ethical hacking, digital forensics, and security operations — building real industry experience.", tag: "Career Development", image:"/Internship_Services.jpeg" },
    { title: "Career Guidance & Mock Interviews", desc: "Resume preparation with ATS optimization, career path planning, global job placement guidance, and mock technical interviews.", tag: "Placement Support", image:"/MockInterview_Services.jpeg" },
    { title: "College Lab Setup Support", desc: "Complete support for establishing cybersecurity labs — hardware, software, network architecture design, and ongoing technical consultation.", tag: "Infrastructure", image:"/LabSetup_Services.jpeg" },
    { title: "Faculty Awareness Programs", desc: "Cybersecurity awareness and upskilling programs tailored for faculty members to stay current with evolving threats and technologies.", tag: "Faculty Development", image:"/FacultyAwareness_Services.jpeg" },
  ],
};

function ServiceCard({ title, desc, tag, image }: { title: string; desc: string; tag: string, image: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      data-hover
      className="clip-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#0a1520", border: `1px solid ${hovered ? "rgba(232,28,28,0.4)" : "rgba(255,50,50,0.15)"}`,
        padding: 30, position: "relative", overflow: "hidden",
        transform: hovered ? "translateY(-6px)" : "none",
        // boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(232,28,28,0.1)" : "none",
        transition: "all 0.4s",
        display:"flex"
      }}
    >
      {/* Top bar */}
      <div className="w-1/2">
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 3, background: "linear-gradient(to right, #e81c1c, #ff6a00)", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />
      <h3 className="font-orbitron" style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", letterSpacing: 1, marginBottom: 12, textTransform: "uppercase" }}>{title}</h3>
      <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#6b8299" }}>{desc}</p>
      <span className="font-mono-tech" style={{ display: "inline-block", fontSize: "0.65rem", letterSpacing: 1, textTransform: "uppercase", padding: "3px 10px", background: "rgba(232,28,28,0.1)", border: "1px solid rgba(232,28,28,0.3)", color: "#e81c1c", marginTop: 16 }}>{tag}</span>
      </div>
      <div className="w-1/2 ml-2">
        <Image src={image} alt="Ethical_Hacking_Services" width={300} height={300}/>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState("training");

  return (
    <section id="services" style={{ padding: "100px 5%", background: "#020408", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(232,28,28,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <div className="font-mono-tech" style={{ fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>// What We Do</div>
          <h2 className="font-orbitron" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, color: "#fff" }}>
            OUR <span style={{ color: "#ff2020", textShadow: "0 0 20px #ff2020" }}>SERVICES</span>
          </h2>
          <div className="section-divider" />

          {/* Tabs */}
          <div style={{ display: "flex", justifyContent:"center", gap: 0, marginBottom: 50, borderBottom: "1px solid rgba(255,255,255,0.08)", overflowX: "auto" }}>
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="font-mono-tech"
                style={{
                  fontSize: "0.78rem", letterSpacing: 2, textTransform: "uppercase",
                  padding: "14px 28px", background: "transparent", border: "none",
                  borderBottom: `2px solid ${active === t.id ? "#ff6a00" : "transparent"}`,
                  color: active === t.id ? "#ff6a00" : "#6b8299",
                  cursor: "pointer", transition: "all 0.3s", marginBottom: -1,
                  whiteSpace: "nowrap",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 24 }}>
            {services[active].map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
