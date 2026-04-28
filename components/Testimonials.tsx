"use client";
import Reveal from "./Reveal";

const testimonials = [
  {
    text: "The industrial visit at CyberEntityz was an insightful and enriching experience. The session provided us with practical knowledge about ethical hacking, network security, and real-time cyber threats. The experts explained complex concepts in a simple and engaging manner, helping us understand the importance of cybersecurity in today's digital world.",
    name: "Industrial Visit Participant",
    org: "Dhanalakshmi Srinivasan College of Engg. & Tech.",
    avatar: "D",
  },
  {
    text: "This workshop was one of the most useful and informative sessions I have attended at SRM College. The interactive approach, combined with real-time examples, made it much easier to understand important topics such as phishing, malware, and data protection. The hands-on demonstrations and practical insights were incredibly valuable.",
    name: "Workshop Attendee",
    org: "SRM College",
    avatar: "S",
  },
  {
    text: "CyberEntityz demonstrates excellent knowledge of the Cyber Security domain with a clear and effective teaching approach. They encourage students to think critically by introducing concepts through key cybersecurity terms — making sessions engaging and interactive. Well-structured, practical, and highly informative for building a strong foundation in cybersecurity.",
    name: "COO & Co-Founder",
    org: "Aerologix",
    avatar: "A",
  },
  {
    text: "The industrial visit at SkyD AI was an outstanding and highly informative experience. The session gave us valuable exposure to Artificial Intelligence, emerging technologies, and real-world industry applications. The team explained advanced concepts in a clear and interactive manner, making it easy for students to understand how AI is transforming the future.",
    name: "Industrial Visit Participant",
    org: "SkyD AI",
    avatar: "S",
  },
  {
    text: "The industrial visit at Stealth AI Startup was an inspiring and knowledge-rich experience. We gained practical insights into startup culture, innovation, Artificial Intelligence, and the latest market trends. The experts shared their journey and technical knowledge in a motivating way, which encouraged students to think creatively and explore future opportunities in technology.",
    name: "Industrial Visit Participant",
    org: "Stealth Al Startup",
    avatar: "S",
  },
  {
    text: "The industrial visit organized for St. Joseph's College (Arts and Science) was truly beneficial and memorable. It helped students understand current industry standards, modern technologies, and career opportunities in AI and cybersecurity. The interactive sessions and practical demonstrations made the learning experience engaging, useful, and future-focused.",
    name: "Industrial Visit Participant",
    org: "St. Joseph's College (Arts and Science)",
    avatar: "S",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "100px 5%", background: "#060c12" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div className="font-mono-tech" style={{ fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>// What People Say</div>
          <h2 className="font-orbitron" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, color: "#fff" }}>
            TESTIMONIALS &amp; <span style={{ color: "#ff2020", textShadow: "0 0 20px #ff2020" }}>REVIEWS</span>
          </h2>
          <div className="section-divider" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
            {testimonials.map((t,i) => (
              <div
                key={i}
                className="clip-card-br"
                style={{
                  background: "#0a1520", border: "1px solid rgba(255,50,50,0.15)",
                  padding: 32, position: "relative", overflow: "hidden", transition: "all 0.4s",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(232,28,28,0.3)"; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(255,50,50,0.15)"; el.style.transform = "none"; el.style.boxShadow = "none"; }}
              >
                {/* Big quote mark */}
                <div className="font-orbitron" style={{ position: "absolute", top: 10, left: 20, fontSize: "5rem", color: "rgba(232,28,28,0.08)", lineHeight: 1, pointerEvents: "none" }}>&ldquo;</div>
                {/* Stars */}
                <div style={{ color: "#ff6a00", fontSize: "0.8rem", marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: "#6b8299", marginBottom: 24, fontStyle: "italic" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #e81c1c, #ff6a00)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="font-orbitron" style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>{t.avatar}</span>
                  </div>
                  <div>
                    <div className="font-orbitron" style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff", letterSpacing: 1 }}>{t.name}</div>
                    <div className="font-mono-tech" style={{ fontSize: "0.7rem", color: "#ff6a00", letterSpacing: 1, marginTop: 3 }}>{t.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
