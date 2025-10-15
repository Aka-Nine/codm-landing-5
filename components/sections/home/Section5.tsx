import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*=====TEAM AREA START=======*/}
            <div className="team4 sp overflow-hidden" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="heading4">
                                <span className="span2" data-aos="fade-right" data-aos-duration={800}>
                                    Our Team
                                </span>
                                <h2 className="text-anime-style-3">Introducing Our Team of Specialists</h2>
                                <div className="space16" />
                                <p data-aos="fade-right" data-aos-duration={1200}>
                                    We take pride in fostering a collaborative environment where innovation thrives and clients receive personalized attention
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="team4-box" data-aos="fade-up" data-aos-duration={1200}>
                                        <div className="image-area">
                                            <div className="image">
                                                <img src="assets/img/team/team4-img1.png" alt="" />
                                            </div>
                                            <Link href="#" className="icon">
                                                <i className="fa-regular fa-arrow-right" />
                                            </Link>
                                        </div>
                                        <div className="heading4">
                                            <h4>
                                                <Link href="#">Jonny Bairstow</Link>
                                            </h4>
                                            <p>Manager Cypertech</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="team4-box" data-aos="fade-up" data-aos-duration={1100}>
                                        <div className="image-area">
                                            <div className="image">
                                                <img src="assets/img/team/team4-img2.png" alt="" />
                                            </div>
                                            <Link href="#" className="icon">
                                                <i className="fa-regular fa-arrow-right" />
                                            </Link>
                                        </div>
                                        <div className="heading4">
                                            <h4>
                                                <Link href="#">Rilee Rossouw</Link>
                                            </h4>
                                            <p>Vp,Daily Naws</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="team4-box" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="image-area">
                                            <div className="image">
                                                <img src="assets/img/team/team4-img3.png" alt="" />
                                            </div>
                                            <Link href="#" className="icon">
                                                <i className="fa-regular fa-arrow-right" />
                                            </Link>
                                        </div>
                                        <div className="heading4">
                                            <h4>
                                                <Link href="#">Shashank Singh</Link>
                                            </h4>
                                            <p>Senior Consultant</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====TEAM AREA END=======*/}
        </>
    );
}
