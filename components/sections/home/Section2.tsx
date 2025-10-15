import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about4 sp overflow-hidden" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="images">
                                <div className="image1 reveal overlay-anim">
                                    <img src="assets/img/about/about4-image1.png" alt="" />
                                </div>
                                <div className="image2 animate1" data-aos="flip-left" data-aos-duration={700}>
                                    <img src="assets/img/about/about4-image2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading4 about4-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    About Us
                                </span>
                                <h2 className="text-anime-style-3">Transforming Businesses, Elevating Careers </h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={1100}>
                                    With a steadfast commitment to excellence, we specialize in connecting exceptional professionals with top-tier companies, fostering mutually beneficial
                                </p>
                                <div className="about4-border" />
                                <div className="about4-box" data-aos="fade-left" data-aos-duration={800}>
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about4-icon1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading4">
                                        <h5>
                                            <Link href="/service-details">Empowering Careers, Driving Growth</Link>
                                        </h5>
                                        <div className="space10" />
                                        <p>Whether you're a company seeking to build performing teams or a talented individual ready to take the next</p>
                                    </div>
                                </div>
                                <div className="about4-box" data-aos="fade-left" data-aos-duration={1100}>
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about4-icon2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading4">
                                        <h5>
                                            <Link href="/service-details">Connecting Talent, Powering Success</Link>
                                        </h5>
                                        <div className="space10" />
                                        <p>Our team of industry experts is dedicated understanding your unique needs and delivering tailored solution</p>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={900}>
                                    <Link className="theme-btn10" href="/about">
                                        Learn More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
