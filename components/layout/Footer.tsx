import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/*===== FOOTER AREA START =======*/}
            <div className="footer1 _relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer-items footer-logo-area">
                                <div className="footer-logo">
                                    <Link href="">
                                        <img src="assets/img/logo/footer-logo1.png" alt="" />
                                    </Link>
                                </div>
                                <div className="space20" />
                                <div className="heading1-w">
                                    <p>Boost your business with our customised CRM solutions. Optimised processes, improved customer relationships and scalable growth – we deliver innovations for your success.</p>
                                </div>
                                <ul className="social-icon">
                                    <li>
                                        <Link href="https://www.linkedin.com/company/codmsoftware/" target="_blank" rel="noopener noreferrer">
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
                        <div className="col-lg col-md-6 col-12">
                            <div className="single-footer-items">
                                <h3>Services</h3>
                                <ul className="menu-list">
                                    <li>
                                        <Link href="/financial-services-cloud">Financial Services Cloud</Link>
                                    </li>
                                    <li>
                                        <Link href="agentforce-&-ai">Agentforce & Al</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Education Cloud&nbsp;</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Salesforce Customer 360</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#">Blog Standard</Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 col-12">
                            <div className="single-footer-items pl-5">
                                <h3>Quick Links</h3>
                                <ul className="menu-list">
                                    <li>
                                        <Link href="/">Home </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/service">Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
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
                                        <Link href="#">
                                            Supertech Astralis Plot No.1, Sector 94 <br/> Noida, Uttar Pradesh 201301
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space70" />
                </div>
                <div className="copyright-area _relative">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="coppyright">
                                    <p>© All Rights Reserved CodM Software.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== FOOTER AREA END =======*/}
        </>
    );
}