"use client";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work/>
        <Certifications />
        <WhyUs />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
