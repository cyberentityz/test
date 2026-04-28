import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYBERENTITYZ – Ethical Hacking Society | Cybersecurity Training Chennai",
  description: "Chennai's premier cybersecurity training & enterprise security company. CEH, OSCP, CompTIA, VAPT, Red/Blue Team training for corporates, colleges and schools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
