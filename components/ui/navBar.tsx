"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import MainMenu from "./MainMenu";
import "../../public/assets/css/navBar.css";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenu(!isMobileMenu);

  return (
    <>
      <header className={`navbar-area modern-navbar ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="navbar">
            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <img src="assets/img/logo/header-logo1.png" alt="CodM Logo" />
              </Link>
            </div>

            {/* Menu */}
            <nav className="main-nav">
              <MainMenu />
            </nav>

            {/* Right */}
            <div className="nav-actions">
              <Link href="/contact" className="nav-btn">
                Contact Us <i className="fa-solid fa-arrow-right" />
              </Link>
              <button className="mobile-toggle" onClick={toggleMobileMenu}>
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile */}
      <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={toggleMobileMenu} />
    </>
  );
}
