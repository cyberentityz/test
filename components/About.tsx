"use client";
import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  const highlights = [
    "Ethical Hacking Society",
    "Corporate Security",
    "College & School Programs",
    "Global Certification Guidance",
  ];

  return (
    <section id="about" style={{ padding: "100px 5%", background: "linear-gradient(180deg, #020408 0%, #060c12 100%)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", maxWidth: 1200, margin: "0 auto" }} className="about-grid">
        {/* Text */}
        <Reveal direction="left">
          <div className="font-mono-tech" style={{ fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>
           // About Us
          </div>
          <h2 className="font-orbitron" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, letterSpacing: 1, color: "#fff" }}>
            WHO WE <span style={{ color: "#ff2020", textShadow: "0 0 20px #ff2020" }}>ARE</span>
          </h2>
          <div className="section-divider" />

          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#6b8299", marginBottom: 20 }}>
            We are <strong style={{ color: "#d0dbe8" }}>CYBERENTITYZ</strong>, a dedicated and growing organization with a strong track record in cybersecurity training and IT services. Based in Teynampet, Chennai, we&apos;ve spent nearly{" "}
            <strong style={{ color: "#d0dbe8" }}>half a decade</strong> delivering practical, industry-relevant knowledge.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#6b8299", marginBottom: 20 }}>
            We have successfully trained more than <strong style={{ color: "#d0dbe8" }}>100 students locally</strong> and guided over <strong style={{ color: "#d0dbe8" }}>200 students</strong> pursuing global opportunities. Our MOUs with two reputable colleges strengthen our commitment to academic partnerships.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#6b8299", marginBottom: 36 }}>
            We actively conduct <strong style={{ color: "#d0dbe8" }}>cybersecurity awareness sessions</strong> in IT companies and educational institutions, building a more secure digital ecosystem across Tamil Nadu.
          </p>


        </Reveal>

        {/* Visual */}
        <Reveal direction="right">
          <div
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              aspectRatio: "1", background: "radial-gradient(circle, rgba(232,28,28,0.08) 0%, transparent 70%)",
              border: "1px solid rgba(232,28,28,0.2)", position: "relative", overflow: "hidden",
            }}
          >
            {/* Rotating rings */}
            <div className="rotate-slow" style={{ position: "absolute", width: "90%", height: "90%", border: "1px solid rgba(255,106,0,0.15)", borderRadius: "50%" }} />
            <div className="rotate-slow-rev" style={{ position: "absolute", width: "75%", height: "75%", border: "1px dashed rgba(232,28,28,0.1)", borderRadius: "50%" }} />
            {/* Conic sweep */}
            <div
              className="rotate-slow"
              style={{
                position: "absolute", inset: "-50%",
                background: "conic-gradient(transparent, rgba(232,28,28,0.1), transparent, transparent)",
              }}
            />
            <Image
              src="/About_Img.jpeg"
              alt="About main"
              width={300}
              height={300}
              style={{
                width: "80%", height: "auto",
                filter: "drop-shadow(0 0 20px #ff2020) drop-shadow(0 0 50px rgba(255,32,32,0.4))",
                position: "relative", zIndex: 1,
              }}
            />
          </div>
        </Reveal>
      </div>

     <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-10">
  {[
    { label: "Ethical Hacking Society", img: "/Ethical_Hacking.jpeg" },
    { label: "Corporate Security", img: "/Corporate_Security.jpeg" },
    { label: "College & School Programs", img: "/College_School_programs.jpeg" },
    { label: "Global Certification Guidance", img: "/Global_Certification.jpeg" },
  ].map((item) => (
    <div key={item.label} className="flex flex-col items-center gap-3">
      <div
        className="font-mono-tech w-full"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,50,50,0.15)",
          borderLeft: "3px solid #e81c1c",
          padding: "18px", fontSize: "0.78rem",
          color: "#6b8299", letterSpacing: 0.5,
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderLeftColor = "#ff6a00";
          el.style.background = "rgba(255,106,0,0.05)";
          el.style.color = "#e81c1c";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderLeftColor = "#e81c1c";
          el.style.background = "rgba(255,255,255,0.04)";
          el.style.color = "#6b8299";
        }}
      >
        {item.label}
      </div>
      <Image
        src={item.img}
        alt={item.label}
        width={270}
        height={270}
        className="hoverBackground w-full"
      />
    </div>
  ))}
</div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
