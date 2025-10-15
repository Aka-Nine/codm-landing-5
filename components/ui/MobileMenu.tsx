"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});
    const pathname = usePathname();

    useEffect(() => {
        if (isMobileMenu) {
            handleMobileMenu();
        }
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setOpenSubMenus({});
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleToggleSubMenu = (key: string) => {
        setOpenSubMenus((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const isHashNav = (href: string) => href === "#";

    return (
        <>
            {isMobileMenu && <div className="mobile-menu-overlay" onClick={handleMobileMenu} />}
            {/*=====Mobile header start=======*/}
            <div className={`mobile-sidebar d-block d-lg-none ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="logo-m">
                    <Link href="/">
                        <img src="assets/img/logo/header-logo1.png" alt="" />
                    </Link>
                </div>
                <div className="menu-close" onClick={handleMobileMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav">
                    <ul>
                        <li className="has-dropdown">
                            <div className="menu-item-with-toggle">
                                <Link href="/" className={isHashNav("#") ? "hash-nav" : ""} onClick={(e) => e.preventDefault()}>
                                    Home
                                </Link>
                                {/* <span className={`submenu-button${openSubMenus["home"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("home")}>
                                    <em />
                                </span> */}
                            </div>
                                {/* <ul className={`sub-menu${openSubMenus["home"] ? " open-sub" : ""}`} style={{ display: openSubMenus["home"] ? "block" : "none" }}>
                                    <li className="has-dropdown has-dropdown1">
                                        <div className="menu-item-with-toggle">
                                            <Link href="#" onClick={(e) => e.preventDefault()}>
                                                Multipage
                                            </Link>
                                            <span className={`submenu-button${openSubMenus["home-multipage"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("home-multipage")}>
                                                <em />
                                            </span>
                                        </div>
                                        <ul className="sub-menu" style={{ display: openSubMenus["home-multipage"] ? "block" : "none" }}>
                                            <li>
                                                <Link href="/">Home 1</Link>
                                            </li>
                                            <li>
                                                <Link href="/index2">Home 2</Link>
                                            </li>
                                            <li>
                                                <Link href="/index3">Home 3</Link>
                                            </li>
                                            <li>
                                                <Link href="/index4">Home 4</Link>
                                            </li>
                                            <li>
                                                <Link href="/index5">Home 5</Link>
                                            </li>
                                            <li>
                                                <Link href="/index6">Home 6</Link>
                                            </li>
                                            <li>
                                                <Link href="/index7">Home 7</Link>
                                            </li>
                                            <li>
                                                <Link href="/index8">Home 8</Link>
                                            </li>
                                            <li>
                                                <Link href="/index9">Home 9</Link>
                                            </li>
                                            <li>
                                                <Link href="/index10">Home 10</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown has-dropdown1">
                                        <div className="menu-item-with-toggle">
                                            <Link href="#" onClick={(e) => e.preventDefault()}>
                                                Landing Page
                                            </Link>
                                            <span className={`submenu-button${openSubMenus["home-landing"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("home-landing")}>
                                                <em />
                                            </span>
                                        </div>
                                        <ul className="sub-menu" style={{ display: openSubMenus["home-landing"] ? "block" : "none" }}>
                                            <li>
                                                <Link href="/single-index1">Home 1</Link>
                                            </li>
                                            <li>
                                                <Link href="/single-index2">Home 2</Link>
                                            </li>
                                            <li>
                                                <Link href="/single-index3">Home 3</Link>
                                            </li>
                                            <li>
                                                <Link href="/single-index4">Home 4 </Link>
                                            </li>
                                            <li>
                                                <Link href="/single-index5">Home 5</Link>
                                            </li>
                                            <li>
                                                <Link href="/single-index6">Home 6</Link>
                                            </li>
                                            <li>
                                                <Link href="/single-index7">Home 7</Link>
                                            </li>
                                            <li>
                                                <Link href="/single-index8">Home 8</Link>
                                            </li>
                                            <li>
                                                <Link href="/single-index9">Home 9</Link>
                                            </li>
                                            <li>
                                                <Link href="/single-index10">Home 10</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul> */}
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="has-dropdown">
                            <div className="menu-item-with-toggle">
                                <Link href="/error" onClick={(e) => e.preventDefault()}>
                                    Service
                                </Link>
                                <span className={`submenu-button${openSubMenus["service"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("service")}>
                                    <em />
                                </span>
                            </div>
                            {/* <ul className="sub-menu" style={{ display: openSubMenus["service"] ? "block" : "none" }}>
                                <li>
                                    <Link href="/service">Service</Link>
                                </li>
                                <li className="has-dropdown has-dropdown1">
                                    <div className="menu-item-with-toggle">
                                        <Link href="#" onClick={(e) => e.preventDefault()} className="main">
                                            Service Details
                                        </Link>
                                        <span className={`submenu-button${openSubMenus["service-details"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("service-details")}>
                                            <em />
                                        </span>
                                    </div>
                                    <ul className="sub-menu" style={{ display: openSubMenus["service-details"] ? "block" : "none" }}>
                                        <li>
                                            <Link href="/service-details-left">Details Left</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details-right">Details Right</Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">Single Details</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                        <li className="has-dropdown">
                            <div className="menu-item-with-toggle">
                                <Link href="/contact" onClick={(e) => e.preventDefault()}>
                                    Contact
                                </Link>
                                {/* <span className={`submenu-button${openSubMenus["pages"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("pages")}>
                                    <em />
                                </span> */}
                            </div>
                            {/* <ul className="sub-menu" style={{ display: openSubMenus["pages"] ? "block" : "none" }}>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link href="/team">Team</Link>
                                </li>
                                <li>
                                    <Link href="/testimonial">Testimonial</Link>
                                </li>
                                <li>
                                    <Link href="/error">404</Link>
                                </li>
                            </ul> */}
                        </li>
                        <li className="has-dropdown">
                            <div className="menu-item-with-toggle">
                                <Link href="/error" onClick={(e) => e.preventDefault()}>
                                    Blog
                                </Link>
                                <span className={`submenu-button${openSubMenus["blog"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("blog")}>
                                    <em />
                                </span>
                            </div>
                            {/* <ul className="sub-menu" style={{ display: openSubMenus["blog"] ? "block" : "none" }}>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/blog-details-left">Details Left</Link>
                                </li>
                                <li>
                                    <Link href="/blog-details-right">Details Right</Link>
                                </li>
                                <li>
                                    <Link href="/blog-details">Blog Details</Link>
                                </li>
                            </ul> */}
                        </li>
                        <li className="has-dropdown">
                            <div className="menu-item-with-toggle">
                                <Link href="/error" onClick={(e) => e.preventDefault()}>
                                    Project
                                </Link>
                                <span className={`submenu-button${openSubMenus["project"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("project")}>
                                    <em />
                                </span>
                            </div>
                            {/* <ul className="sub-menu" style={{ display: openSubMenus["project"] ? "block" : "none" }}>
                                <li>
                                    <Link href="/project">Project</Link>
                                </li>
                                <li>
                                    <Link href="/project-details-left">Project Left</Link>
                                </li>
                                <li>
                                    <Link href="/project-details-right">Project Right</Link>
                                </li>
                                <li>
                                    <Link href="/project-details">Project Details</Link>
                                </li>
                            </ul> */}
                        </li>
                    </ul>
                    <div className="mobile-button">
                        {/* <Link className="theme-btn1" href="service">
                            Learn More
                            <span>
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                        </Link> */}
                    </div>
                    <div className="single-footer-items">
                        <h3>Contact Us</h3>
                        <div className="contact-box">
                            <div className="icon">
                                <img src="assets/img/icons/footer-icon1.png" alt="" />
                            </div>
                            <div className="pera">
                                <Link href="tel:+91 9871717425">+91 9871717425</Link>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="icon">
                                <img src="assets/img/icons/footer-icon2.png" alt="" />
                            </div>
                            <div className="pera">
                                <Link href="mailto:sales@codmsoftware.com">sales@codmsoftware.com</Link>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="icon">
                                <img src="assets/img/icons/footer-icon3.png" alt="" />
                            </div>
                            <div className="pera">
                                <Link href="https://maps.app.goo.gl/raw5PFBoNkRiFTtQA" target="_blank_Page_Map" rel="noopener noreferrer"> 
                                   Supertech Astralis Plot No. 1,<br /> Sector 94, Noida, Uttar Pradesh 201301
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="contact-infos">
                        <h3>Social Media</h3>
                        <ul className="social-icon">
                            <li>
                                <Link href="https://www.linkedin.com/company/codmsoftware/" target="_blankLinkedin" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://x.com/CodMSoftware" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/@CodMSoftware" 
                                              target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-youtube" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://in.pinterest.com/codmsoftware" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-pinterest" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
