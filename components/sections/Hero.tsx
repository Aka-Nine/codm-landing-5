"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".t", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
      gsap.fromTo(".s", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.1, ease: "power3.out" });
      gsap.fromTo(".c", { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" });
    }, el);
    return () => ctx.revert();
  }, []);
  return (
    <section className="hero" ref={ref}>
      <div className="container">
        <span className="badge s" data-aos="fade-up">Philippines • Nearshore Talent</span>
        <h1 className="t">Build world‑class teams in the Philippines</h1>
        <p className="s">Executive search, contract staffing, and embedded recruiting across engineering, finance, and CX.</p>
        <div className="actions c">
          <a href="#contact" className="btn btn-primary">Get started</a>
          <a href="#services" className="btn btn-outline">View services</a>
        </div>
      </div>
    </section>
  );
}

