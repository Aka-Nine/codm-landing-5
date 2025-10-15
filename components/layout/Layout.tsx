"use client";
import type { PropsWithChildren } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);
  return (
    <div className="shell">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

