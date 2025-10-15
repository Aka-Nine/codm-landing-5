import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about-page-sec1 sp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about3-images">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img1.png" alt="" />
                                        </div>
                                        <div className="conter-box conter-box1">
                                            <h3>
                                                <span className="counter">20</span>+
                                            </h3>
                                            <p>Project Completed</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="conter-box conter-box2">
                                            <h3>
                                                <span className="counter">10</span>+
                                            </h3>
                                            <p>Years of Experienced</p>
                                        </div>
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading1 about3-heading">
                                <span className="span">About Us</span>
                                <h2>Reliable Salesforce CRM partner since 2021</h2>
                                <div className="space16" />
                                <p>Founded in 2021, CodM specializes in world-class Salesforce CRM implementation and consulting services, with a presence key locations in India. Our expert team of certified architects, consultants, and developers has successfully delivered numerous Salesforce projects across various industries in both regions. With a focus on security reviews and best practices, we have earned the distinction of being an official Salesforce Consulting Partner since 2021</p>
                                <div className="about3-icon-box">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about3-icon1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading1">
                                        <h5>
                                            <Link href="#">Empowering Careers, Driving Growth</Link>
                                        </h5>
                                        <p>we are your strategic partner in talent acquisition. With a steadfast commitment to excellence</p>
                                    </div>
                                </div>
                                <div className="about3-icon-box">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about3-icon2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading1">
                                        <h5>
                                            <Link href="#">Leaders in Staffing Excellence</Link>
                                        </h5>
                                        <p>Discover the difference with Your Agency Name and unlock new possibilities for growth </p>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="">
                                    <Link className="theme-btn1" href="#">
                                        Contact Us
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
