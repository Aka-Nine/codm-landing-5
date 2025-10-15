import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*=====BLOG AREA START=======*/}
            <div className="blog4 sp overflow-hidden" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading4">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Our Blog
                                </span>
                                <h2 className="text-anime-style-3">Stay Tuned for Our Updates</h2>
                                <div className="space16" />
                                <p ata-aos="fade-left" data-aos-duration={800}>
                                    Whether you're looking to navigate your career path or enhance your organization's hiring practices,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="blog4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/blog/blog4-img1.png" alt="" />
                                </div>
                                <div className="heading4">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date.png" alt="" /> Apl 2,2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user.png" alt="" /> By Ethan Smith
                                        </Link>
                                    </div>
                                    <h5>
                                        <Link href="/blog-details">Get the Scoop: Our Latest News &amp; Announcements</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>Whether you're looking to navigate your career path or enhance</p>
                                    <div className="blog1-border" />
                                    <Link href="/blog-details" className="learn">
                                        Learn More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="blog4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/blog/blog4-img2.png" alt="" />
                                </div>
                                <div className="heading4">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date.png" alt="" /> Apl 2,2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user.png" alt="" /> By Ethan Smith
                                        </Link>
                                    </div>
                                    <h5>
                                        <Link href="/blog-details">Forge Futures : Transforming Careers, Empowering Businesses</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>We're here to guide you every step of the way. Our tailored staffing solutions</p>
                                    <div className="blog1-border" />
                                    <Link href="/blog-details" className="learn">
                                        Learn More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="blog4-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/blog/blog4-img3.png" alt="" />
                                </div>
                                <div className="heading4">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date.png" alt="" /> Apl 2,2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user.png" alt="" /> By Ethan Smith
                                        </Link>
                                    </div>
                                    <h5>
                                        <Link href="/blog-details">Igniting Opportunity: Fueling Innovation Through Talent</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>Our blog serves as a valuable resource for both job seekers and employers</p>
                                    <div className="blog1-border" />
                                    <Link href="/blog-details" className="learn">
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
            {/*=====BLOG AREA END=======*/}
        </>
    );
}
