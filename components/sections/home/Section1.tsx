import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero-area4">
                <div className="container _relative">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-right" data-aos-duration={700}>
                                    Staffing Power Your Success
                                </span>
                                <h1 className="text-anime-style-3">Crafting Success Stories Your Path To Talent</h1>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    Whether you're a company seeking exceptional professionals or a <br /> candidate pursuing your next career milestone,
                                </p>
                                <div className="space30" />
                                <div className="buttons" data-aos="fade-left" data-aos-duration={1200}>
                                    <Link className="theme-btn10" href="/service">
                                        Search Careers
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <Link className="theme-btn9" href="/service">
                                        Discover More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-none d-lg-block">
                        <div className="col-lg-12">
                            <div className="images-all">
                                <div className="image1 animate1 overlay-anim">
                                    <img src="assets/img/hero/hero4-image1.png" alt="" />
                                </div>
                                <div className="image2 animate2 overlay-anim">
                                    <img src="assets/img/hero/hero4-image2.png" alt="" />
                                </div>
                                <div className="image3 animate3 overlay-anim">
                                    <img src="assets/img/hero/hero4-image3.png" alt="" />
                                </div>
                                <div className="image4 animate4 overlay-anim">
                                    <img src="assets/img/hero/hero4-image4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-lg-block d-lg-none">
                        <div className="row images-all-md">
                            <div className="col-md-6">
                                <div className="image1 overlay-anim">
                                    <img src="assets/img/hero/hero4-image1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image2 overlay-anim">
                                    <img src="assets/img/hero/hero4-image2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image3 overlay-anim">
                                    <img src="assets/img/hero/hero4-image3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image4 overlay-anim">
                                    <img src="assets/img/hero/hero4-image4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-all-area">
                        <div className="icon">
                            <Link href="#about">
                                <i className="fa-regular fa-arrow-down" />
                            </Link>
                        </div>
                        <img src="assets/img/shapes/hero4-btn-shape-circle.png" alt="" className="shape shape-animaiton4" />
                    </div>
                    <img className="shape2 shape-animaiton4" src="assets/img/shapes/hero4-shape2.png" alt="" />
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
