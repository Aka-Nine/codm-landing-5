import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*===== CTA AREA START =======*/}
            <div className="cta">
                <div className="container">
                    <div className="row cta-border align-items-center">
                        <div className="col-lg-6">
                            <div className="heading1-w">
                                <h2>Stay Connected </h2>
                                <div className="space16" />
                                <p>
                                    Subscribe to get fresh blogs, product updates, and expert tips. <br /> Your next idea could start here.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subscribe-area">
                                <form action="#">
                                    <input type="email" placeholder="Your Email Address" />
                                    <div className="button">
                                        <button type="submit" className="theme-btn1">
                                            Subscribe Now
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== CTA AREA START =======*/}
        </>
    );
}
