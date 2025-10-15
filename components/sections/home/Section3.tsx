import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service4 sp overflow-hidden" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading4-w">
                                <span className="span" data-aos="fade-up" data-aos-duration={700}>
                                    Our Service
                                </span>
                                <h2 className="text-anime-style-3">Your Path to Premier Talent Acquisition</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={1100}>
                                    Our tailored services include talent acquisition, recruitment expertise, and industry-specific staffing solutions to help you build high-performing teams.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
                            <div className="service4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service4-img1.png" alt="" />
                                </div>
                                <Link href="/service-details" className="icon">
                                    <i className="fa-regular fa-arrow-right" />
                                </Link>
                                <div className="heading4-w">
                                    <h5>
                                        <Link href="/service-details">Talent Acquisition Solutions</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos-duration={900} data-aos="zoom-in-up">
                            <div className="space30" />
                            <div className="service4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service4-img2.png" alt="" />
                                </div>
                                <Link href="/service-details" className="icon">
                                    <i className="fa-regular fa-arrow-right" />
                                </Link>
                                <div className="heading4-w">
                                    <h5>
                                        <Link href="/service-details">HR Consulting and Staffing Support</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos-duration={800} data-aos="zoom-in-up">
                            <div className="service4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service4-img3.png" alt="" />
                                </div>
                                <Link href="/service-details" className="icon">
                                    <i className="fa-regular fa-arrow-right" />
                                </Link>
                                <div className="heading4-w">
                                    <h5>
                                        <Link href="/service-details">Industry-Specific Recruitment</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos-duration={1000} data-aos="zoom-in-up">
                            <div className="space30" />
                            <div className="service4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service4-img4.png" alt="" />
                                </div>
                                <Link href="/service-details" className="icon">
                                    <i className="fa-regular fa-arrow-right" />
                                </Link>
                                <div className="heading4-w">
                                    <h5>
                                        <Link href="/service-details">Executive Search Services</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
