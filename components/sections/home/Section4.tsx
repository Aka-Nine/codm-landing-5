import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*=====SOLUTION AREA START=======*/}
            <div className="solution4 sp overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading4">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Solutions We Provide
                                </span>
                                <h2 className="text-anime-style-3">Your Staffing Partner Our Offerings</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={1300}>
                                    Whether you're a small business seeking temporary staffing support or a large corporation in need of executive-level talent, we have the expertise
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={900}>
                            <div className="solution4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/others/solution4-img1.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/img/icons/solution4-icon1.png" alt="" />
                                </div>
                                <div className="heading4">
                                    <h4>
                                        <Link href="/service-details">Highest Success Rates</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Whether you're looking for temporary staffing, direct hire placements, or executive search</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1100}>
                            <div className="solution4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/others/solution4-img2.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/img/icons/solution4-icon2.png" alt="" />
                                </div>
                                <div className="heading4">
                                    <h4>
                                        <Link href="/service-details">Recruitment Solutions</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Whether you're looking for temporary staffing, direct hire placements, or executive search</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={700}>
                            <div className="solution4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/others/solution4-img3.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/img/icons/solution4-icon3.png" alt="" />
                                </div>
                                <div className="heading4">
                                    <h4>
                                        <Link href="/service-details">Business Planning</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Whether you're looking for temporary staffing, direct hire placements, or executive search</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SOLUTION AREA END=======*/}
        </>
    );
}
