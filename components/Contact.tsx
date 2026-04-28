"use client";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#d0dbe8",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "0.95rem",
    padding: "12px 16px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const labelStyle = {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.7rem",
    color: "#ff6a00",
    letterSpacing: 2,
    textTransform: "uppercase" as const,
    marginBottom: 8,
    display: "block",
  };

  return (
    <section id="contact" style={{ padding: "100px 5%", background: "#060c12" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "start" }} className="contact-grid">
        {/* Info */}
        <Reveal direction="left">
          <div className="font-mono-tech" style={{ fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>// Get In Touch</div>
          <h2 className="font-orbitron" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, color: "#fff" }}>
            CONTACT <span style={{ color: "#ff2020", textShadow: "0 0 20px #ff2020" }}>US</span>
          </h2>
          <div className="section-divider" />
          <h3 className="font-orbitron" style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", marginBottom: 32 }}>Let&apos;s Secure Your Future Together</h3>

          <div className="flex gap-4 mb-7">
            <div style={{ width: 44, height: 44, background: "rgba(232,28,28,0.1)", border: "1px solid rgba(232,28,28,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75 4.25C5.75 3.00736 6.75736 2 8 2H16C17.2426 2 18.25 3.00736 18.25 4.25V19.75C18.25 20.9926 17.2426 22 16 22H8C6.75736 22 5.75 20.9926 5.75 19.75V4.25ZM10.25 18.25C10.25 18.6642 10.5858 19 11 19H13C13.4142 19 13.75 18.6642 13.75 18.25C13.75 17.8358 13.4142 17.5 13 17.5H11C10.5858 17.5 10.25 17.8358 10.25 18.25Z" fill="#ffffff" />
              </svg>
            </div>

            <div>
              <strong className="font-mono-tech" style={{ display: "block", fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Phone</strong>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#6b8299" }}>+91 9500551090</p>
            </div>
          </div>

          <div className="flex gap-4 mb-7">
            <div style={{ width: 44, height: 44, background: "rgba(232,28,28,0.1)", border: "1px solid rgba(232,28,28,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                <path d="M3.73592 4.5C2.77726 4.5 2.00014 5.27724 2.00031 6.2359L2.00031 6.26829C2.01064 6.81904 2.28199 7.33272 2.732 7.65165L2.74287 7.65929L10.7131 13.2171C11.3897 13.689 12.2609 13.7479 12.9861 13.3941C13.0897 13.3435 13.1904 13.2845 13.287 13.2171L21.2569 7.65949C21.7225 7.33485 21.9999 6.8031 21.9998 6.23554C21.9997 5.27702 21.2229 4.5 20.2644 4.5H3.73592Z" fill="#ffffff" />
                <path d="M22.0001 8.96994L14.145 14.4475C12.8562 15.3462 11.1438 15.3462 9.85507 14.4475L2.00023 8.97012L2 17.25C2 18.4926 3.00736 19.5 4.25 19.5H19.75C20.9926 19.5 22 18.4926 22 17.25L22.0001 8.96994Z" fill="#ffffff" />
              </svg>
            </div>

            <div>
              <strong className="font-mono-tech" style={{ display: "block", fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Email</strong>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#6b8299" }}>info@cyberentityz.com</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div style={{ width: 44, height: 44, background: "rgba(232,28,28,0.1)", border: "1px solid rgba(232,28,28,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03125 10.392C5.03125 6.26528 8.3766 2.91992 12.5033 2.91992C16.63 2.91992 19.9754 6.26528 19.9754 10.392C19.9754 13.194 18.9108 15.7454 17.6454 17.7938C16.3778 19.8458 14.8791 21.441 13.9389 22.3454C13.139 23.1148 11.9045 23.1163 11.1026 22.3493C10.1581 21.4458 8.65084 19.8507 7.37569 17.7982C6.1028 15.7493 5.03125 13.1963 5.03125 10.392ZM9.50391 10.3906C9.50391 12.0475 10.8471 13.3906 12.5039 13.3906C14.1608 13.3906 15.5039 12.0475 15.5039 10.3906C15.5039 8.73377 14.1608 7.39062 12.5039 7.39062C10.8471 7.39062 9.50391 8.73377 9.50391 10.3906Z" fill="#ffffff" />
              </svg>
            </div>
            <div>
              <strong className="font-mono-tech" style={{ display: "block", fontSize: "0.72rem", color: "#ff6a00", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Address</strong>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#6b8299" }}>1st Floor, Hundain Complex, Parthasarathy Pettai Street, Anna Salai, Teynampet, Chennai – Tamil Nadu 600 006</p>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal direction="right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8014043032463!2d80.2497245!3d13.0483096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526743486550eb%3A0x4b0433d47aa9c053!2sCYBERENTITYZ!5e0!3m2!1sen!2sin!4v1777274867805!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Reveal>
      </div>
      <style>{`
        @media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}.form-row{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}
