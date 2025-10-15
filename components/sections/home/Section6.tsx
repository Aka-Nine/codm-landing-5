import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*=====CONTACT AREA START=======*/}
            <div className="contact4 sp overflow-hidden" id="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading4">
                                <span className="span" data-aos="fade-right" data-aos-duration={700}>
                                    Contact Us
                                </span>
                                <h2 className="text-anime-style-3">Get in Touch Let's Start the Conversation</h2>
                                <div className="space16" />
                                <p data-aos="fade-right" data-aos-duration={900}>
                                    We're here to help you find the right staffing solutions for your needs. Whether you're a company looking to hire top talent or a candidate seeking your next career opportunity,
                                </p>
                                <div className="space10" />
                                <div className="contact3-box" data-aos="fade-right" data-aos-duration={1000}>
                                    <div className="icon">
                                        <img src="assets/img/icons/contact4-icon1.png" alt="" />
                                    </div>
                                    <div className="heading4">
                                        <h6>Gives us a Call</h6>
                                        <h4>
                                            <Link href="tel:123-456-7890">123-456-7890</Link>
                                        </h4>
                                    </div>
                                </div>
                                <div className="contact3-box" data-aos="fade-right" data-aos-duration={1200}>
                                    <div className="icon">
                                        <img src="assets/img/icons/contact4-icon2.png" alt="" />
                                    </div>
                                    <div className="heading4">
                                        <h6>Send me Mail</h6>
                                        <h4>
                                            <Link href="mailto:Consult@hotmail.com">Recrute@hotmail.com</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact3-form" data-aos="zoom-out" data-aos-duration={900}>
                                <div className="heading3-w">
                                    <h5>Send us a Message</h5>
                                    <div className="space16" />
                                    <p>Feel free to reach out to us with any questions, inquiries, or staffing requirements you may have. Our experienced</p>
                                </div>
                                <div className="space10" />
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-input">
                                                <input type="number" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input">
                                                <textarea rows={4} placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="button">
                                                <button className="theme-btn8">
                                                    About US
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CONTACT AREA END=======*/}
        </>
    );
}
